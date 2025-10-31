"use client";

import { getTips } from "@/backend/getTips";
import { useState, useEffect } from "react";
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


const Tips = ({ creator, tipBlock }: { creator: any; tipBlock: any }) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const currentTime = Math.floor(Date.now() / 1000);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      const tips = await getTips(creator.creator_id, currentTime.toString());
      if (tips) {
        setTips(tips);
      }
      setLoading(false);
    };
    fetchTips();
  }, []);

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

    const timer = setTimeout(() => {
      setTips((prevTips) => {
        const newTips = [...prevTips];
        newTips.shift(); // Remove the first tip from the array
        return newTips;
      });
    }, tipBlock.display_time ? tipBlock.display_time : 20000);

    return () => clearTimeout(timer);
  }, [tips.length]);

  const currentTip = tips[0];

  console.log(tips);

  if (loading) {
    return <></>;
  }

  if (tips.length === 0) {
    return <></>;
  }



  return <Tip overlay={tipBlock} key={currentTip.id} tip={currentTip} />;
};

export default Tips;
