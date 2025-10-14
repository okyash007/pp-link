import LiquidRenderer from "@/our/LiquidRenderer";

const Tip = ({ tip, overlay }: { tip: any; overlay: any }) => {
  // Function to format amount
  const formatAmount = (amount: string, currency: string) => {
    const numericAmount = parseFloat(amount) / 100; // Convert from paise to rupees
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: currency.toUpperCase(),
    }).format(numericAmount);
  };

  // Function to format date
  const formatDate = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      timeZone: "UTC",
    });
  };

  // Function to format time
  const formatTime = (timestamp: string) => {
    const date = new Date(parseInt(timestamp) * 1000);
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      timeZone: "UTC",
    });
  };

  return (
    <LiquidRenderer
      key={tip.id}
      className={overlay.className}
      html={overlay.template}
      data={{ ...tip, data: overlay.data }}
    />
  );
};

export default Tip;
