"use client";
import LiquidRenderer from "@/our/LiquidRenderer";
import React from "react";

const Client = ({ creator, blocks }: { creator: any; blocks: any[] }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {blocks.map((block) => {
        return (
          <LiquidRenderer
            style={block.style}
            key={block.type}
            className={block.className}
            html={block.template}
            data={{ ...creator, data: block.data }}
          />
        );
      })}
    </div>
  );
};

export default Client;
