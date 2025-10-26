"use client";

import { getLeaderboard } from "@/backend/getLeaderboard";
import LiquidRenderer from "@/our/LiquidRenderer";
import React, { useEffect, useState } from "react";

interface Ranker {
  rank?: number;
  name: string;
  amount: number;
  currency: string;
  tip_count: number;
}

const LeaderBoard = ({
  creator,
  leaderboardBlock,
}: {
  creator: any;
  leaderboardBlock: any;
}) => {
  const [rankers, setRankers] = useState<Ranker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard(creator.creator_id, leaderboardBlock.limit || 5);
        if (data && Array.isArray(data)) {
          // Transform backend data to match expected format and add rank
          const formattedRankers = data.map((ranker: any, index: number) => ({
            rank: index + 1,
            name: ranker.visitor_name || "Anonymous",
            amount: ranker.total_amount || 0,
            currency: ranker.currency || "INR",
            tip_count: ranker.tip_count || 0,
          }));
          setRankers(formattedRankers);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchLeaderboard();

    // Set up interval to refetch every 1 minute (60000 milliseconds)
    const intervalId = setInterval(() => {
      fetchLeaderboard();
    }, 60000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, [creator.creator_id, leaderboardBlock.limit]);

  if (loading) {
    return <></>;
  }

  // If no rankers or leaderboard is disabled, return empty
  if (rankers.length === 0) {
    return <></>;
  }

  const leaderboardData = {
    rankers,
  };

  return (
    <LiquidRenderer
      style={leaderboardBlock.style}
      className={leaderboardBlock.className}
      key={leaderboardBlock.id}
      html={leaderboardBlock.template}
      data={{ ...leaderboardData, data: leaderboardBlock.data }}
    />
  );
};

export default LeaderBoard;
