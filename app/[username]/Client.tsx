"use client";

import { Button } from "@/components/ui/button";
import { getVisitorId } from "@/lib/fingerprint";
import { useEffect, useState } from "react";

const Client = ({ username }: { username: string }) => {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const visitorId = await getVisitorId();
      setVisitorId(visitorId);
      setLoading(false);
    })();
  }, []);

  const handlePayment = () => {
    if (typeof window !== "undefined" && window.Razorpay) {
      const options = {
        key: "rzp_test_ROkpHVGz3WZNo5", // Enter the Key ID generated from the Dashboard
        amount: "50000", // Amount is in currency subunits.
        currency: "INR",
        name: "Acme Corp", //your business name
        description: "Test Transaction",
        image: "https://example.com/your_logo", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // prefill: {
        //   name: "Customer Name",
        //   email: "customer@example.com",
        //   contact: "9999999999",
        // },
        notes: {
          visitor_id: visitorId || "unknown",
          creator_id: username,
          message: "Test Message",
          name: "Test Name",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(visitorId);

  return (
    <div className="p-8 space-y-4">
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className="space-x-2">
        <Button onClick={handlePayment}>Pay with Razorpay</Button>
      </div>
    </div>
  );
};

export default Client;
