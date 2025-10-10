"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LiquidRenderer from "@/our/LiquidRenderer";

// Define tip interface
interface Tip {
  id: string;
  amount: number;
  currency: string;
  visitor_name: string;
  message?: string;
  created_at: number;
}

const TipCard = ({ tip, block }: { tip: Tip; block: any }) => {
  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const getCurrencySymbol = (currency: string) => {
    const symbols: { [key: string]: string } = {
      usd: "$",
      inr: "₹",
      eur: "€",
      gbp: "£",
      jpy: "¥",
    };
    return symbols[currency.toLowerCase()] || currency.toUpperCase();
  };

  const formatDate = (timestamp: number) => {
    try {
      const date = new Date(Math.floor(timestamp) * 1000);
      if (isNaN(date.getTime())) {
        return "Invalid Date";
      }
      return date.toLocaleDateString();
    } catch {
      return "Invalid Date";
    }
  };

  const formatTime = (timestamp: number) => {
    try {
      const date = new Date(Math.floor(timestamp) * 1000);
      if (isNaN(date.getTime())) {
        return "Invalid Time";
      }
      return date.toLocaleTimeString();
    } catch {
      return "Invalid Time";
    }
  };

  return (
    <div className="group relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button className={block.tip_btn.className}>
            <LiquidRenderer
              className={""}
              html={block.tip_btn.template}
              data={tip}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent className={block.tip_card.className}>
          <LiquidRenderer
            className={""}
            html={block.tip_card.template}
            data={tip}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TipCard;
