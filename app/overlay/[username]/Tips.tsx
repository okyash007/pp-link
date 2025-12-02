"use client";

import { getTips } from "@/backend/getTips";
import { runTextToSpeech } from "@/lib/runTextToSpeech";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Tip from "./Tip";

interface Tip {
  id: string;
  visitor_id: string;
  creator_id: string;
  amount: string;
  currency: string;
  message?: string;
  payment_gateway: string;
  payment_id: string;
  created_at: string;
  visitor_name: string;
  visitor_email: string;
  visitor_phone: string;
  type?: string;
  media?: string;
}

const getLatestCreatedAt = (tips: Tip[]): number | null => {
  if (!tips || tips.length === 0) {
    return null;
  }

  // Sort tips by created_at in descending order and get the first one
  const sortedTips = [...tips].sort(
    (a, b) => parseInt(b.created_at) - parseInt(a.created_at)
  );
  return parseInt(sortedTips[0].created_at);
};

const Tips = ({ creator: initialCreator, tipBlock: initialTipBlock }: { creator: any; tipBlock: any }) => {
  const [creator, setCreator] = useState(initialCreator);
  const [tipBlock, setTipBlock] = useState(initialTipBlock);
  const [tips, setTips] = useState<Tip[]>([]);
  const currentTime = Math.floor(Date.now() / 1000);
  const [loading, setLoading] = useState(true);
  const [lastProcessedTipId, setLastProcessedTipId] = useState<string | null>(null);
  const params = useParams();
  const username = params?.username as string;

  // Unlock audio context on first user interaction (click, touch, keypress)
  useEffect(() => {
    let audioUnlocked = false;
    
    const unlockAudioContext = async () => {
      if (audioUnlocked) return;
      
      try {
        // Play silent audio to unlock audio context during user interaction
        const silentAudio = new Audio("data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=");
        silentAudio.volume = 0.01;
        await silentAudio.play();
        silentAudio.pause();
        silentAudio.remove();
        
        // Also unlock AudioContext
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        if (audioContext.state === "suspended") {
          await audioContext.resume();
        }
        
        audioUnlocked = true;
      } catch (error) {
        // Ignore errors from unlocking
        console.log("Audio context unlock attempt:", error);
      }
    };
    
    // Listen for user interactions
    const events = ['click', 'touchstart', 'keydown'];
    const handleInteraction = () => {
      unlockAudioContext();
      // Remove listeners after first interaction
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
    
    events.forEach(event => {
      document.addEventListener(event, handleInteraction, { once: true });
    });
    
    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleInteraction);
      });
    };
  }, []);

  // Fetch creator data every 5 seconds, but only if there's no current tip
  useEffect(() => {
    // Don't fetch if there's a current tip being displayed

    
    const currentTip = tips[0];
    console.log("currentTip", currentTip);
    if (currentTip) {
      return;
    }

    const fetchCreator = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/creator/${username}/overlay`,
          {
            cache: "no-store",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.ok) {
          const result = await response.json();
          if (result.data) {
            setCreator(result.data);
            // Update tip block from the refetched creator data
            const updatedTipBlock = result.data.overlay?.blocks?.find(
              (block: any) => block.type === "tip"
            );
            if (updatedTipBlock) {
              setTipBlock(updatedTipBlock);
            }
          }
        }
      } catch (error) {
        console.error("Error fetching creator:", error);
      }
    };

    // Fetch immediately when there's no current tip
    fetchCreator();

    // Set up interval to fetch every 5 seconds
    const intervalId = setInterval(fetchCreator, 5000);

    // Cleanup interval on unmount or when a tip appears
    return () => clearInterval(intervalId);
  }, [username, tips]);

  useEffect(() => {
    const fetchTips = async () => {
      const tips = await getTips(creator.creator_id, currentTime.toString());
      if (tips) {
        setTips(tips);
      }
      setLoading(false);
    };
    fetchTips();
  }, [creator.creator_id]);

  useEffect(() => {
    // Only start polling once loading is complete
    if (loading) {
      return;
    }

    const fetchNewTips = async () => {
      const latestCreatedAt = getLatestCreatedAt(tips);
      const newTips = await getTips(
        creator.creator_id,
        latestCreatedAt ? latestCreatedAt.toString() : currentTime.toString()
      );
      if (newTips && newTips.length > 0) {
        setTips((prevTips) => [...prevTips, ...newTips]);
      }
    };

    // Set up interval to run every second
    const interval = setInterval(fetchNewTips, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [loading, tips]);

  useEffect(() => {
    if (tips.length === 0) return;

    const currentTip = tips[0];
    let timeoutDuration: number;

    // Check if current tip is media share type
    if (currentTip?.type === "media-share") {
      // Use media_share_time from tipBlock.data, default to 10 seconds (10000ms)
      timeoutDuration = tipBlock?.data?.media_share_time 
        ? tipBlock.data.media_share_time * 1000 
        : 10000;
    } else {
      // Use display_time for other tip types, default to 20 seconds (20000ms)
      timeoutDuration = tipBlock.data.display_time ? tipBlock.data.display_time * 1000 : 20000;
    }

    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + timeoutDuration);
    
    console.log("Timeout Duration:", timeoutDuration, "ms");
    console.log("Start Time:", startTime.toISOString());
    console.log("End Time:", endTime.toISOString());

    const timer = setTimeout(
      () => {
        const actualEndTime = new Date();
        console.log("Actual End Time:", actualEndTime.toISOString());
        setTips((prevTips) => {
          const newTips = [...prevTips];
          newTips.shift(); // Remove the first tip from the array
          return newTips;
        });
      },
      timeoutDuration
    );

    return () => clearTimeout(timer);
  }, [tips.length, tips]);

  // Text-to-Speech effect - plays TTS when a new tip with message arrives
  // useEffect(() => {
  //   if (tips.length === 0) return;
    
  //   const currentTip = tips[0];
  //   if (!currentTip || !currentTip.message || currentTip.id === lastProcessedTipId) {
  //     return;
  //   }

  //   // Check if TTS is enabled (textToSpeechTemplate exists in tipBlock.data)
  //   const ttsVoice = tipBlock?.data?.textToSpeechTemplate;
  //   if (!ttsVoice) {
  //     return;
  //   }

  //   // Mark this tip as processed
  //   setLastProcessedTipId(currentTip.id);

  //   // Play alert sound first if configured
  //   if (tipBlock?.data?.sound?.url) {
  //     const alertAudio = new Audio(tipBlock.data.sound.url);
  //     alertAudio.play().catch(() => {});
  //   }

  //   // Generate and play TTS
  //   setTimeout(() => {
  //     runTextToSpeech({
  //       text: currentTip.message!,
  //       voice: ttsVoice,
  //       creatorId: creator.creator_id,
  //       instructions: "Speak naturally and clearly.",
  //     });
  //   }, 500);
  // }, [tips, lastProcessedTipId, tipBlock, creator]);

  const currentTip = tips[0];

  if (loading) {
    return <></>;
  }

  if (tipBlock.test) {
    return (
      <Tip
        overlay={tipBlock}
        key={"test"}
        tip={{
          id: "test",
          visitor_id: "test",
          creator_id: "test",
          amount: 10000,
          currency: "₹",
          message: "lore ipsum dolor sit amet",
        }}
      />
    );
  }

  if (tips.length === 0) {
    return <></>;
  }

  return <Tip overlay={tipBlock} key={currentTip.id} tip={currentTip} />;
};

export default Tips;
