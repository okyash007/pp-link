"use client";

import LiquidRenderer from "@/our/LiquidRenderer";
import Tips from "./Tips";
import LeaderBoard from "./LeaderBoard";
import { useSearchParams } from "next/navigation";

const Client = ({ creator, blocks }: { creator: any; blocks: any[] }) => {
  const searchParams = useSearchParams();

  const blockType = searchParams.get("block_type");

  const block = blocks.find((block) => block.type === blockType);

  console.log(block);

  if (!block) {
    return <div>Block not found</div>;
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
