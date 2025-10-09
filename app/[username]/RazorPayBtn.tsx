import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useFpStore } from "@/store/fpStore";
import { useUserStore } from "@/store/userStore";

const RazorPayBtn = ({
  creatorId,
  creatorName,
  color,
  message,
}: {
  creatorId: string;
  creatorName: string;
  color: string;
  message: string;
}) => {
  const { fp } = useFpStore();
  const user = useUserStore();

  const handlePayment = () => {
    // Validate required fields
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

  if(!fp){
    return <Skeleton className="w-full h-9" />
  }

  return (
    <Button
      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handlePayment}
    >
      Pay with Razorpay
    </Button>
  );
};

export default RazorPayBtn;
