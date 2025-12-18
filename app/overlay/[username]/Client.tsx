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
