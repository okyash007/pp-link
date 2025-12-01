"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
  return (
    <div className="min-h-screen w-full bg-[#FEF18C]/15 text-black relative overflow-hidden">
      <style>{`
        @keyframes tncStripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 220px 0, 0 220px; }
        }
        .tnc-bg {
          animation: tncStripeMove 24s linear infinite;
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 tnc-bg opacity-40"
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
                  Terms &amp; Conditions
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
              <p className="inline-flex items-center gap-2 rounded-full bg-[#AAD6B8]/60 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                Legal
              </p>
              <h1 className="text-2xl md:text-3xl font-black">
                Terms &amp; Conditions (Summary)
              </h1>
              <p className="text-sm md:text-base font-semibold text-black/70 max-w-2xl">
                This page gives a human-friendly overview of how PotatoPay works for
                streamers and supporters. For the complete legal document, always
                refer to the official Terms &amp; Conditions at{" "}
                <a
                  href="https://potatopay.co/policy/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-black"
                >
                  potatopay.co/policy/terms-and-conditions
                </a>
                .
              </p>
            </section>

            <section className="space-y-6">
              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">Who&apos;s who?</h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  <span className="font-black">Streamers</span> are creators who
                  receive tips through PotatoPay.{" "}
                  <span className="font-black">Supporters</span> are viewers who send
                  those tips. Together, they&apos;re Users of the platform, and
                  everyone agrees to follow Indian law and PotatoPay&apos;s rules.
                  These definitions are based on the official Terms at{" "}
                  <a
                    href="https://potatopay.co/policy/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    potatopay.co
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  What streamers must know
                </h2>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    You&apos;re responsible for the content you create and stream.
                  </li>
                  <li>
                    You must complete KYC and provide accurate details before payouts
                    can be settled.
                  </li>
                  <li>
                    Tips are income – you&apos;re responsible for handling your own
                    taxes and GST where applicable.
                  </li>
                  <li>
                    You can&apos;t use PotatoPay for unlawful activity, gambling,
                    hate, or 18+ content, as detailed in the official Terms.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Tips, payments &amp; platform fee
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  Tips are processed through a secure payment gateway. PotatoPay
                  deducts a{" "}
                  <span className="font-black">5% service/platform fee</span> on each
                  tip before settlement, as described in the official Terms and
                  Refund Policy. Net amounts (after commission, taxes and gateway
                  charges) are settled to your linked bank account.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">Content rules</h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  To keep the community fun and safe, you must not upload or promote:
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>18+ or sexually explicit content.</li>
                  <li>
                    Hate speech, harassment or discrimination based on any protected
                    trait.
                  </li>
                  <li>Fraud, gambling, political funding or other unlawful uses.</li>
                </ul>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  These rules come from the full Terms &amp; Conditions at{" "}
                  <a
                    href="https://potatopay.co/policy/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    potatopay.co/policy/terms-and-conditions
                  </a>
                  .
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Where to read the full Terms
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  This page is only a summary to make things easier to scan. For any
                  legal questions, only the full Terms &amp; Conditions document on
                  the main site is authoritative. You can read it anytime at{" "}
                  <a
                    href="https://potatopay.co/policy/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    potatopay.co/policy/terms-and-conditions
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


