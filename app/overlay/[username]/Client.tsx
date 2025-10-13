"use client";

import { useState, useEffect } from "react";
import Tip from "./Tip";

const Client = () => {
  const [tips, setTips] = useState([
    {
      id: 51,
      visitor_id: "5b7cbac8dcbd1b08c72897602e20927a",
      creator_id: "568c6a64",
      amount: "20000.00",
      currency: "INR",
      message: "hello yash",
      payment_gateway: "razorpay",
      payment_id: "pay_RT4MgWtTah0zjo",
      created_at: "1760382976",
      visitor_name: "Yash Verma",
      visitor_email: "helloyashverma@gmail.com",
      visitor_phone: "+918006679475",
    },
    {
      id: 52,
      visitor_id: "5b7cbac8dcbd1b08c72897602e20927a",
      creator_id: "568c6a64",
      amount: "10000.00",
      currency: "INR",
      message: "hello yash",
      payment_gateway: "razorpay",
      payment_id: "pay_RT4MgWtTah0zjo",
      created_at: "1760382976",
      visitor_name: "Yash Verma",
      visitor_email: "helloyashverma@gmail.com",
      visitor_phone: "+918006679475",
    },
  ]);
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

  if (tips.length === 0) {
    return <div></div>;
  }

  return (
    <div className="min-h-screen p-4">
      <div className="space-y-4">
        <Tip tip={currentTip} />
      </div>
    </div>
  );
};

export default Client;
