"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFpStore } from "@/store/fpStore";
import { useUserStore } from "@/store/userStore";
import { recordClickEvent } from "@/backend/recordEvent";
import { useState } from "react";

const RazorPayBtn = ({
  creatorId,
  creatorName,
  color,
  message,
  type,
  media,
  block,
}: {
  creatorId: string;
  creatorName: string;
  color: string;
  message: string;
  type: string;
  media: string;
  block: any;
}) => {
  const { fp } = useFpStore();
  const user = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    // Validate required fields

    recordClickEvent(fp, {
      amount: user.amount * 100,
      currency: user.currency,
    });

    const errors = [];

    if (!user.name || user.name.trim() === "") {
      errors.push("Name is required");
    }

    if (!user.displayName || user.displayName.trim() === "") {
      errors.push("Display name is required");
    }

    if (!user.email || user.email.trim() === "") {
      errors.push("Email is required");
    }

    if (!user.phone || user.phone.trim() === "") {
      errors.push("Phone number is required");
    }

    // If there are validation errors, set them and return
    if (errors.length > 0) {
      user.setuser({ errors });
      return;
    }

    // Clear any existing errors if validation passes
    user.setuser({ errors: [] });

    const razorpayKey = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
    if (!razorpayKey) {
      user.setuser({ errors: ["Razorpay key is not configured"] });
      return;
    }

    setIsLoading(true);

    try {
      // First, create an order on the backend
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      if (!apiUrl) {
        throw new Error("API URL is not configured");
      }

      const orderResponse = await fetch(`${apiUrl}/order/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: user.amount,
          currency: user.currency,
          notes: {
            visitor_id: fp,
            creator_id: creatorId,
            message: message,
            type: type,
            media: media,
            name: user.name,
            display_name: user.displayName || user.name,
            email: user.email,
            phone: user.phone,
          },
        }),
      });

      if (!orderResponse.ok) {
        const errorData = await orderResponse.json();
        throw new Error(
          errorData.message || "Failed to create order"
        );
      }

      const orderData = await orderResponse.json();
      const orderId = orderData.data?.order_id || orderData.data?.order?.id;

      if (!orderId) {
        throw new Error("Order ID not received from server");
      }

      // Now proceed with Razorpay checkout using the order ID
      if (typeof window !== "undefined" && window.Razorpay) {
        const options = {
          key: razorpayKey, // Enter the Key ID generated from the Dashboard
          amount: user.amount * 100, // Amount is in currency subunits.
          currency: user.currency,
          order_id: orderId, // Use the order ID from the backend
          name: creatorName, //your business name
          description: "Tip to " + creatorName,
          image: "https://example.com/your_logo",
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phone,
          },
          notes: {
            visitor_id: fp,
            creator_id: creatorId,
            message: message,
            type: type,
            media: media,
            name: user.name,
            display_name: user.displayName || user.name,
            email: user.email,
            phone: user.phone,
          },
          theme: {
            color: color,
          },
          handler: function (response: any) {
            // Payment success handler
            console.log("Payment successful:", response);
          },
          modal: {
            ondismiss: function () {
              setIsLoading(false);
            },
          },
        };

        const rzp1 = new window.Razorpay(options);
        // Handle payment failure
        (rzp1 as any).on("payment.failed", function (response: any) {
          console.error("Payment failed:", response);
          user.setuser({
            errors: [
              response.error?.description ||
                "Payment failed. Please try again.",
            ],
          });
          setIsLoading(false);
        });
        rzp1.open();
        setIsLoading(false);
      }
    } catch (error: any) {
      console.error("Error creating order or opening payment:", error);
      user.setuser({
        errors: [error.message || "Failed to initiate payment. Please try again."],
      });
      setIsLoading(false);
    }
  };

  if (!fp) {
    return (
      <div className={block.className}>
        <Skeleton className={"w-full h-9"} />
      </div>
    );
  }

  return (
    <div className={block.className}>
      <Button
        className={block.button.className}
        style={block.button.style}
        onClick={handlePayment}
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : block.button.text || "Pay with Razorpay"}
      </Button>
    </div>
  );
};

export default RazorPayBtn;
