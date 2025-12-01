"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function RefundPage() {
  return (
    <div className="min-h-screen w-full bg-[#FEF18C]/15 text-black relative overflow-hidden">
      <style>{`
        @keyframes refundStripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 220px 0, 0 220px; }
        }
        .refund-bg {
          animation: refundStripeMove 24s linear infinite;
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 refund-bg opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(254,241,140,0.35) 0px, rgba(254,241,140,0.35) 14px, transparent 14px, transparent 28px), radial-gradient(circle, rgba(130,139,248,0.18) 2.5px, transparent 3px)",
          backgroundSize: "auto, 24px 24px",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <header className="border-b-[3px] border-black bg-white/90 backdrop-blur px-4 py-4">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 border-[4px] border-black bg-[#FEF18C] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center -rotate-3">
                <span className="text-xl">🥔</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none">
                  POTATO<span className="text-[#828BF8]">PAY</span>.CO
                </span>
                <span className="text-[10px] font-bold text-black/70 uppercase tracking-wide mt-1">
                  Refund &amp; Cancellation
                </span>
              </div>
            </div>
            <Button
              asChild
              className="h-auto bg-[#FEF18C] hover:bg-[#FEE55A] text-black font-black text-xs px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
            >
              <Link href="/">← Back to Home</Link>
            </Button>
          </div>
        </header>

        <main className="flex-1 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            <section className="rounded-3xl border-[4px] border-black bg-white p-6 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] space-y-4">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#FEC4FF]/70 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                Payments
              </p>
              <h1 className="text-2xl md:text-3xl font-black">
                Refund &amp; Cancellation Policy (Summary)
              </h1>
              <p className="text-sm md:text-base font-semibold text-black/70 max-w-2xl">
                This is a simple overview of how refunds, failed payments, and
                cancellations work on PotatoPay. The full policy lives at{" "}
                <a
                  href="https://potatopay.co/policy/refund-and-cancellation-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-black"
                >
                  potatopay.co/policy/refund-and-cancellation-policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-6">
              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Tips are voluntary and usually final
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  As outlined in the official policy, all tips sent via PotatoPay are{" "}
                  <span className="font-black">voluntary and non-refundable</span>.
                  Supporters are choosing to support a streamer without expecting
                  goods, services, or contractual compensation in return.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  When refunds may be considered
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  While refunds are rare, the official policy allows them in specific
                  situations, such as:
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>Unauthorized or fraudulent transactions.</li>
                  <li>Accidental duplicate payments.</li>
                  <li>
                    Technical failures where money was debited but the transaction
                    didn&apos;t complete.
                  </li>
                  <li>
                    Serious streamer violations of the Terms &amp; Conditions, at
                    PotatoPay&apos;s discretion.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Cancellations &amp; disputes
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  Because tips are voluntary support,{" "}
                  <span className="font-black">
                    successful payments can&apos;t be cancelled
                  </span>{" "}
                  once they&apos;re processed by the payment gateway. However,
                  supporters and streamers can raise disputes within{" "}
                  <span className="font-black">7 days of the transaction</span>, and
                  PotatoPay will review the case, as described in the official policy.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  How long do refunds take?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  When a refund is approved under the rules in the{" "}
                  <a
                    href="https://potatopay.co/policy/refund-and-cancellation-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Refund &amp; Cancellation Policy
                  </a>
                  , it is typically processed back to the original payment method
                  within <span className="font-black">10–15 business days</span>,
                  depending on banks and payment gateways.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Need help with a payment?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  For any payment, refund or cancellation issue, users should write to{" "}
                  <a
                    href="mailto:potatopayco@gmail.com"
                    className="underline font-black"
                  >
                    potatopayco@gmail.com
                  </a>{" "}
                  within the time window mentioned in the policy. Full details and
                  the most up-to-date rules are always available at{" "}
                  <a
                    href="https://potatopay.co/policy/refund-and-cancellation-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    potatopay.co/policy/refund-and-cancellation-policy
                  </a>
                  .
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}


