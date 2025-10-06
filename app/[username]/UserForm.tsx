import { getUserByFp } from "@/backend/getUser";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useFpStore } from "@/store/fpStore";
import { useUserStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";

const UserForm = ({
  message,
  setMessage,
}: {
  message: string;
  setMessage: (message: string) => void;
}) => {
  const user = useUserStore();
  const { fp } = useFpStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (fp) {
      (async () => {
        const userData = await getUserByFp(fp);
        if (userData) {
          user.setuser({
            ...user,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            editable: false,
          });
        }
        setLoading(false);
      })();
    }
  }, [fp, user]);

  if (loading) {
    return (
      <div className="space-y-4">
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-1/2 h-9" />
        <Skeleton className="w-full h-16" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {/* <Label htmlFor="name">Name</Label> */}
        <Input
          id="name"
          type="text"
          placeholder="Enter your name"
          value={user.name}
          onChange={(e) => user.setuser({ ...user, name: e.target.value })}
          disabled={!user.editable}
        />
      </div>

      <div className="space-y-2">
        {/* <Label htmlFor="email">Email</Label> */}
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => user.setuser({ ...user, email: e.target.value })}
          disabled={!user.editable}
        />
      </div>

      <div className="space-y-2">
        {/* <Label htmlFor="phone">Phone</Label> */}
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={user.phone}
          onChange={(e) => user.setuser({ ...user, phone: e.target.value })}
          disabled={!user.editable}
        />
      </div>

      <div className="space-y-2">
        {/* <Label htmlFor="amount">Amount & Currency</Label> */}
        <ButtonGroup>
          <Select
            value={user.currency}
            onValueChange={(value) =>
              user.setuser({ ...user, currency: value })
            }
          >
            <SelectTrigger className="font-mono w-20">
              {user.currency === "INR"
                ? "₹"
                : user.currency === "USD"
                ? "$"
                : user.currency === "EUR"
                ? "€"
                : user.currency === "GBP"
                ? "£"
                : user.currency}
            </SelectTrigger>
            <SelectContent className="min-w-24">
              <SelectItem value="INR">₹ INR</SelectItem>
              <SelectItem value="USD">$ USD</SelectItem>
              <SelectItem value="EUR">€ EUR</SelectItem>
              <SelectItem value="GBP">£ GBP</SelectItem>
            </SelectContent>
          </Select>
          <Input
            placeholder="200"
            pattern="[0-9]*"
            value={user.amount || ""}
            onChange={(e) =>
              user.setuser({ ...user, amount: Number(e.target.value) || 0 })
            }
            className="border-l-0 rounded-l-none w-full"
          />
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Enter your message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UserForm;
