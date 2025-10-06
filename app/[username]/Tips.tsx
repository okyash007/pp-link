import { getTips } from "@/backend/getTips";
import { useEffect, useState } from "react";
import TipCard from "./TipCard";

// Define tip interface
interface Tip {
  id: string;
  amount: number;
  currency: string;
  visitor_name: string;
  message?: string;
  created_at: number;
}

// Function to get the latest created_at from tips array
const getLatestCreatedAt = (tips: Tip[]): number | null => {
  if (!tips || tips.length === 0) {
    return null;
  }

  // Sort tips by created_at in descending order and get the first one
  const sortedTips = [...tips].sort((a, b) => b.created_at - a.created_at);
  return sortedTips[0].created_at;
};

const Tips = ({ creatorId }: { creatorId: string }) => {
  const [tips, setTips] = useState<Tip[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTips = async () => {
      const tips = await getTips(creatorId);
      if (tips) {
        setTips(tips);
      }
      setLoading(false);
    };
    fetchTips();
  }, [creatorId]);

  useEffect(() => {
    // Only start polling once loading is complete
    if (loading) {
      return;
    }

    const fetchNewTips = async () => {
      const latestCreatedAt = getLatestCreatedAt(tips);
      const newTips = await getTips(creatorId, latestCreatedAt?.toString());
      if (newTips && newTips.length > 0) {
        setTips((prevTips) => [...prevTips, ...newTips]);
      }
    };

    // Set up interval to run every second
    const interval = setInterval(fetchNewTips, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [loading, tips, creatorId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (tips.length === 0) {
    return <div></div>;
  }

  return (
    <div className="flex gap-4 overflow-y-auto">
      {tips.map((tip) => (
        <TipCard key={tip.id} tip={tip} />
      ))}
    </div>
  );
};

export default Tips;
