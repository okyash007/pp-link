"use client";

import { getVisitorId } from "@/lib/fingerprint";
import { useEffect, useState } from "react";
import Tips from "./Tips";
import RazorPayBtn from "./RazorPayBtn";
import { useFpStore } from "@/store/fpStore";
import UserForm from "./UserForm";

const Client = ({ username }: { username: string }) => {
  const { fp, setFp } = useFpStore();
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    (async () => {
      const hfp = await getVisitorId();
      setFp(hfp || "");
    })();
  }, [setFp]);

  return (
    <div className="space-y-4">
      <div>
        <Tips creatorId={username} />
      </div>
      <div>
        <UserForm message={message} setMessage={setMessage} />
      </div>
      <div className="space-x-2">
        <RazorPayBtn creatorId={username} creatorName={username} color={"#3399cc"} message={message}/>
      </div>
    </div>
  );
};

export default Client;
