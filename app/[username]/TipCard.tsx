import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TipCard = ({ tip }: { tip: any }) => {
  console.log(tip);
  
  const formatAmount = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const getCurrencySymbol = (currency: string) => {
    const symbols: { [key: string]: string } = {
      'usd': '$',
      'inr': '₹',
      'eur': '€',
      'gbp': '£',
      'jpy': '¥',
    };
    return symbols[currency.toLowerCase()] || currency.toUpperCase();
  };

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(Math.floor(Number(dateString)) * 1000);
      if (isNaN(date.getTime())) {
        return 'Invalid Date';
      }
      return date.toLocaleDateString();
    } catch (error) {
      return 'Invalid Date';
    }
  };

  const formatTime = (dateString: string) => {
    try {
      const date = new Date(Math.floor(Number(dateString)) * 1000);
      if (isNaN(date.getTime())) {
        return 'Invalid Time';
      }
      return date.toLocaleTimeString();
    } catch (error) {
      return 'Invalid Time';
    }
  };

  return (
    <div className="group relative">
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">
                {getCurrencySymbol(tip.currency)}
              </span>
              <span className="text-lg font-bold">
                {(tip.amount / 100).toFixed(0)}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0">
          <div className="p-6">
            <div className="space-y-4">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{tip.visitor_name}</h3>
                  <p className="text-sm text-gray-500">Just tipped you!</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">
                    {formatAmount(tip.amount, tip.currency)}
                  </div>
                  <div className="text-xs text-gray-500">
                    {formatDate(tip.created_at)}
                  </div>
                </div>
              </div>

              {/* Message */}
              {tip.message && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 text-sm flex-shrink-0">
                      💬
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-700 leading-relaxed italic">
                        "{tip.message}"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Live tip</span>
                </div>
                <div>
                  {formatTime(tip.created_at)}
                </div>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default TipCard;
