"use client";

// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: new (options: {
      key: string;
      amount: string | number;
      currency: string;
      name: string;
      description: string;
      order_id?: string;
      image?: string;
      handler?: (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => void;
      prefill?: {
        name?: string;
        email?: string;
        contact?: string;
      };
      notes?: Record<string, string>;
      theme?: {
        color?: string;
      };
    }) => {
      open: () => void;
    };
  }
}

export default function Home() {
  return <></>;
}
