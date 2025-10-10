"use client";

import LiquidRenderer from "@/our/LiquidRenderer";
import Tips from "./Tips";
import UserForm from "./UserForm";
import { useEffect, useState } from "react";
import { getVisitorId } from "@/lib/fingerprint";
import { recordPageView } from "@/backend/recordEvent";
import { useFpStore } from "@/store/fpStore";
import RazorPayBtn from "./RazorPayBtn";

const Blocks = ({ blocks, data }: { blocks: any[]; data: any }) => {
  const [message, setMessage] = useState<string>("");
  const { setFp } = useFpStore();
  useEffect(() => {
    (async () => {
      const hfp = await getVisitorId();
      setFp(hfp || "");
      recordPageView(hfp || "");
    })();
  }, [setFp]);

  return (
    <>
      {blocks.map((block) => {
        if (block.type === "tips") {
          return (
            <Tips key={block.type} block={block} creatorId={data.creator_id} />
          );
        }
        if (block.type === "user_form") {
          return (
            <UserForm
              block={block}
              message={message}
              setMessage={setMessage}
              key={block.type}
            />
          );
        }

        if (block.type === "razorpay") {
          return (
            <RazorPayBtn
              creatorId={data.creator_id}
              creatorName={data.username}
              color={"#3399cc"}
              message={message}
              block={block}
              key={block.type}
            />
          );
        }
        return (
          <LiquidRenderer
            key={block.type}
            className={block.className}
            html={block.template}
            data={data}
          />
        );
      })}
    </>
  );
};

export default Blocks;
