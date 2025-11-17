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
  const videoUrl = "https://www.youtube.com/embed/puMQDkceZZg?si=0xtrNUQy4MtFz7Jw&autoplay=1&mute=1&start=0&end=5&controls=0";

  return (
    <iframe
      width="560"
      height="315"
      src={videoUrl}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
}
