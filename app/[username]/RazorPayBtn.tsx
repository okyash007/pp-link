"use client";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFpStore } from "@/store/fpStore";
import { useUserStore } from "@/store/userStore";
import { recordClickEvent } from "@/backend/recordEvent";

const RazorPayBtn = ({
  creatorId,
  creatorName,
  color,
  message,
  block,
}: {
  creatorId: string;
  creatorName: string;
  color: string;
  message: string;
  block: any;
}) => {
  const { fp } = useFpStore();
  const user = useUserStore();

  const handlePayment = () => {
    // Validate required fields

    recordClickEvent(fp, {
      amount: user.amount * 100,
      currency: user.currency,
    });

    const errors = [];

    if (!user.name || user.name.trim() === "") {
      errors.push("Name is required");
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

    if (typeof window !== "undefined" && window.Razorpay) {
      const options = {
        key: "rzp_test_ROkpHVGz3WZNo5", // Enter the Key ID generated from the Dashboard
        amount: user.amount * 100, // Amount is in currency subunits.
        currency: user.currency,
        name: creatorName, //your business name
        description: "Tip to " + creatorName,
        image: "https://example.com/your_logo", // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        prefill: {
          name: user.name,
          email: user.email,
          contact: user.phone,
        },
        notes: {
          visitor_id: fp,
          creator_id: creatorId,
          message: message,
          name: user.name,
          email: user.email,
          phone: user.phone,
        },
        theme: {
          color: color,
        },
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
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
        onClick={handlePayment}
      >
        Pay with Razorpay
      </Button>
    </div>
  );
};

export default RazorPayBtn;
