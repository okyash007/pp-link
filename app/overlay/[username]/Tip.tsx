const Tip = ({ tip }: { tip: any }) => {

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
    <div className="tip-card-wrapper">
      <div
        key={tip.id}
        className="tip-card"
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800">{tip.visitor_name}</h3>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-green-600">
              {formatAmount(tip.amount, tip.currency)}
            </span>
            <button
              className="close-btn"
              aria-label="Close tip"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {tip.message && (
          <p className="text-gray-600 mb-2 italic">"{tip.message}"</p>
        )}

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{formatDate(tip.created_at)}</span>
          <span>{formatTime(tip.created_at)}</span>
        </div>

        <div className="mt-2 text-xs text-gray-400">
          Payment ID: {tip.payment_id}
        </div>
      </div>
    </div>
  );
};

export default Tip;
