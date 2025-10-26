"use client";

import LiquidRenderer from "@/our/LiquidRenderer";
import Tips from "./Tips";
import LeaderBoard from "./LeaderBoard";

const Client = ({ creator, blocks }: { creator: any; blocks: any[] }) => {
  return (
    <>
      {blocks.map((block) => {
        if (block.type === "tip") {
          return <Tips key={block.id} creator={creator} tipBlock={block} />;
        }

        if (block.type === "leaderboard") {
          return <LeaderBoard key={block.id} creator={creator} leaderboardBlock={block} />;
        }
        return (
          <LiquidRenderer
            style={block.style}
            className={block.className}
            key={block.id}
            html={block.template}
            data={{ ...creator, data: block.data }}
          />
        );
      })}
    </>
  );
};

export default Client;
