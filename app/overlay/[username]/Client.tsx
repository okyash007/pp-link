"use client";

import { useState, useEffect } from "react";
import { getTips } from "@/backend/getTips";
import Tip from "./Tip";

// Define tip interface
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

// Function to get the latest created_at from tips array
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

const Client = ({ creatorId }: { creatorId: string }) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);
  const currentTime = Math.floor(Date.now() / 1000);
  // Initial fetch of tips
  useEffect(() => {
    const fetchTips = async () => {
      const tips = await getTips(creatorId, currentTime.toString());
      if (tips) {
        setTips(tips);
      }
      setLoading(false);
    };
    fetchTips();
  }, []);

  // Real-time polling for new tips
  useEffect(() => {
    // Only start polling once loading is complete
    if (loading) {
      return;
    }

    const fetchNewTips = async () => {
      const latestCreatedAt = getLatestCreatedAt(tips);
      const newTips = await getTips(creatorId, latestCreatedAt ? latestCreatedAt.toString() : currentTime.toString());
      if (newTips && newTips.length > 0) {
        setTips((prevTips) => [...prevTips, ...newTips]);
      }
    };

    // Set up interval to run every second
    const interval = setInterval(fetchNewTips, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [loading, tips]);

  // Effect to remove the first tip after 10 seconds
  useEffect(() => {
    if (tips.length === 0) return;

    const timer = setTimeout(() => {
      setTips((prevTips) => {
        const newTips = [...prevTips];
        newTips.shift(); // Remove the first tip from the array
        return newTips;
      });
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [tips.length]);

  const currentTip = tips[0];

  if (loading) {
    return <div></div>;
  }

  if (tips.length === 0) {
    return <div></div>;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="space-y-4">
          {currentTip && <Tip key={currentTip.id} tip={currentTip} />}
      </div>
    </div>
  );
};

export default Client;
