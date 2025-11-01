"use client";

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
  block,
}: {
  message: string;
  setMessage: (message: string) => void;
  block: any;
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
            displayName: userData.name,
            email: userData.email,
            phone: userData.phone,
            editable: false,
          });
        }
        setLoading(false);
      })();
    }
  }, [fp]);

  if (loading) {
    return (
      <div className={block.className}>
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-full h-9" />
        <Skeleton className="w-1/2 h-9" />
        <Skeleton className="w-full h-16" />
      </div>
    );
  }

  return (
    <div className={block.className}>
      {user.name ? (
        <div>
          {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={user.displayName}
            onChange={(e) => {
              // user.setuser({ ...user, name: e.target.value });
              user.setuser({ ...user, displayName: e.target.value });
              // Clear only name error when user starts typing
              if (user.errors.some((error) => error.includes("Name"))) {
                user.setuser({
                  errors: user.errors.filter(
                    (error) => !error.includes("Name") && !error.includes("Display name")
                  ),
                });
              }
              // Clear display name error when user starts typing
              if (user.errors.some((error) => error.includes("Display name"))) {
                user.setuser({
                  errors: user.errors.filter(
                    (error) => !error.includes("Display name")
                  ),
                });
              }
            }}
            className={
              block.input.className +
              (user.errors.some((error) => error.includes("Name") || error.includes("Display name"))
                ? " border-red-500"
                : "")
            }
          />
          {user.errors.some((error) => error.includes("Name")) && (
            <p className="text-xs mt-1 font-semibold text-red-500">
              Name is required
            </p>
          )}
          {user.errors.some((error) => error.includes("Display name")) && (
            <p className="text-xs mt-1 font-semibold text-red-500">
              Display name is required
            </p>
          )}
        </div>
      ) : (
        <div>
          {/* <Label htmlFor="name">Name</Label> */}
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            value={user.name}
            onChange={(e) => {
              user.setuser({
                ...user,
                name: e.target.value,
                displayName: e.target.value,
              });
              // Clear name and display name errors when user starts typing
              if (user.errors.some((error) => error.includes("Name") || error.includes("Display name"))) {
                user.setuser({
                  errors: user.errors.filter(
                    (error) => !error.includes("Name") && !error.includes("Display name")
                  ),
                });
              }
            }}
            disabled={!user.editable}
            className={
              block.input.className +
              (user.errors.some((error) => error.includes("Name") || error.includes("Display name"))
                ? " border-red-500"
                : "")
            }
          />
          {user.errors.some((error) => error.includes("Name")) && (
            <p className="text-xs mt-1 font-semibold text-red-500">
              Name is required
            </p>
          )}
        </div>
      )}

      <div>
        {/* <Label htmlFor="email">Email</Label> */}
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={user.email}
          onChange={(e) => {
            user.setuser({ ...user, email: e.target.value });
            // Clear only email error when user starts typing
            if (user.errors.some((error) => error.includes("Email"))) {
              user.setuser({
                errors: user.errors.filter((error) => !error.includes("Email")),
              });
            }
          }}
          disabled={!user.editable}
          className={
            block.input.className +
            (user.errors.some((error) => error.includes("Email"))
              ? "border-red-500"
              : "")
          }
        />
        {user.errors.some((error) => error.includes("Email")) && (
          <p className="text-xs mt-1 font-semibold text-red-500">
            Email is required
          </p>
        )}
      </div>

      <div>
        {/* <Label htmlFor="phone">Phone</Label> */}
        <Input
          id="phone"
          type="tel"
          placeholder="Enter your phone number"
          value={user.phone}
          onChange={(e) => {
            user.setuser({ ...user, phone: e.target.value });
            // Clear only phone error when user starts typing
            if (user.errors.some((error) => error.includes("Phone"))) {
              user.setuser({
                errors: user.errors.filter((error) => !error.includes("Phone")),
              });
            }
          }}
          disabled={!user.editable}
          className={
            block.input.className +
            (user.errors.some((error) => error.includes("Phone"))
              ? "border-red-500"
              : "")
          }
        />
        {user.errors.some((error) => error.includes("Phone")) && (
          <p className="text-xs mt-1 font-semibold text-red-500">
            Phone number is required
          </p>
        )}
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
            <SelectTrigger
              className={block.input.className + " font-mono w-20"}
            >
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
            <SelectContent className={block.input.className + " min-w-24"}>
              <SelectItem value="INR">₹ INR</SelectItem>
              <SelectItem value="USD">$ USD</SelectItem>
              <SelectItem value="EUR">€ EUR</SelectItem>
              <SelectItem value="GBP">£ GBP</SelectItem>
            </SelectContent>
          </Select>
          <Input
            className={
              block.input.className + " border-l-0 rounded-l-none w-full"
            }
            placeholder="200"
            pattern="[0-9]*"
            value={user.amount || ""}
            onChange={(e) =>
              user.setuser({ ...user, amount: Number(e.target.value) || 0 })
            }
            // className="border-l-0 rounded-l-none w-full"
          />
        </ButtonGroup>
      </div>
      <div className="space-y-2">
        <Textarea
          className={block.input.className}
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
