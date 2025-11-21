"use client";

import { useEffect } from "react";
import { runTextToSpeech } from "@/lib/runTextToSpeech";
import { getYouTubeVideoId } from "@/lib/utils";
import LiquidRenderer from "@/our/LiquidRenderer";

const Tip = ({ tip, overlay }: { tip: any; overlay: any }) => {
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

  const handleTextToSpeech = async (text: string,voice: string) => {
    // Unlock audio context during user interaction
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
    
    // Add delay to ensure audio context is fully unlocked
    await new Promise(resolve => setTimeout(resolve, 100));
    
    await runTextToSpeech({
      text: text,
      voice: voice,
      creatorId: "test-creator-123",
      instructions: "Speak naturally and clearly.",
    });
  };

  const handleNotifySound = async (url: string) => {
    // Unlock audio context
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
    
    // Add small delay to ensure context is unlocked
    await new Promise(resolve => setTimeout(resolve, 50));
    
    const alertAudio = new Audio(url);
    await alertAudio.play().catch((error) => {
      console.error("Failed to play alert audio:", error);
    });
  };

  // Handle notify sound with proper audio context unlocking
  useEffect(() => {
    if (tip.type === "notify") {
      handleNotifySound(overlay.data?.sound?.url);
    }
  }, [tip.type]);

  // Handle text-to-speech with proper audio context unlocking
  useEffect(() => {
    if (tip.type === "text-to-speech") {
      handleTextToSpeech(tip.message, overlay.data.textToSpeechTemplate);
    }
  }, [tip.type, tip.message, overlay.data.textToSpeechTemplate]);

  if (tip.type === "notify") {
    return (
      <LiquidRenderer
        key={tip.id}
        className={overlay.className}
        style={overlay.style}
        html={overlay.template}
        data={{ ...tip, data: overlay.data }}
      />
    );
  }

  if (tip.type === "text-to-speech") {
    return (
      <LiquidRenderer
        key={tip.id}
        className={overlay.className}
        style={overlay.style}
        html={overlay.template}
        data={{ ...tip, data: overlay.data }}
      />
    );
  }

  if (tip.type === "media-share" && tip.media) {
    const youtubeVideoId = getYouTubeVideoId(tip.media);

    return (
      <LiquidRenderer
        key={tip.id}
        className={overlay.className}
        style={overlay.style}
        html={overlay.template}
        data={{ ...tip, youtube_video_key: youtubeVideoId, data: overlay.data }}
      />
    );
  }

  return (
    <LiquidRenderer
      key={tip.id}
      className={overlay.className}
      style={overlay.style}
      html={overlay.template}
      data={{ ...tip, data: overlay.data }}
    />
  );
};

export default Tip;
