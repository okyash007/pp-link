"use client";

import LiquidRenderer from "@/our/LiquidRenderer";
import Tips from "./Tips";
import LeaderBoard from "./LeaderBoard";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const Client = ({ creator: initialCreator, blocks: initialBlocks, username }: { creator: any; blocks: any[]; username: string }) => {
  const [creator] = useState(initialCreator);
  const [blocks] = useState(initialBlocks);
  const searchParams = useSearchParams();

  // Fetch creator data every 10 seconds
  // useEffect(() => {
  //   const fetchCreator = async () => {
  //     try {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_API_URL}/creator/${username}/overlay`,
  //         {
  //           cache: "no-store",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const result = await response.json();
  //         if (result.data) {
  //           setCreator(result.data);
  //           setBlocks(result.data.overlay?.blocks || []);
  //         }
  //       }
  //     } catch (error) {
  //       console.error("Error fetching creator:", error);
  //     }
  //   };

  //   // Set up interval to fetch every 10 seconds
  //   const intervalId = setInterval(fetchCreator, 10000);

  //   // Cleanup interval on unmount
  //   return () => clearInterval(intervalId);
  // }, [username]);

  const blockType = searchParams.get("block_type");

  const block = blocks.find((block) => block.type === blockType);

  if (!block) {
    return <></>;
  }

  if (block.type === "tip") {
    return <Tips key={block.id} creator={creator} tipBlock={block} />;
  }

  if (block.type === "leaderboard") {
    return (
      <LeaderBoard key={block.id} creator={creator} leaderboardBlock={block} />
    );
  }

  return (
    <>
      <LiquidRenderer
        style={block.style}
        className={block.className}
        key={block.id}
        html={block.template}
        data={{ ...creator, data: block.data }}
      />
    </>
  );
};

export default Client;
