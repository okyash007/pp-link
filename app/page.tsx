"use client";

import { Button } from "@/components/ui/button";
import { runTextToSpeech } from "@/lib/runTextToSpeech";

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
  const handleTextToSpeech = async () => {
    // Unlock audio context during user interaction
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
    
    await runTextToSpeech({
      text: "hey yoo",
      voice: "alloy",
      creatorId: "test-creator-123",
      instructions: "Speak naturally and clearly.",
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Button onClick={handleTextToSpeech}>
        Play Text to Speech
      </Button>
    </div>
  );
}
