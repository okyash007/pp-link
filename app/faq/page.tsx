"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FaqPage() {
  return (
    <div className="min-h-screen w-full bg-[#FEF18C]/15 text-black relative overflow-hidden">
      <style>{`
        @keyframes faqStripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 220px 0, 0 220px; }
        }
        .faq-bg {
          animation: faqStripeMove 24s linear infinite;
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 faq-bg opacity-40"
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
                  FAQs
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
                FAQ
              </p>
              <h1 className="text-2xl md:text-3xl font-black">
                Frequently Asked Questions
              </h1>
              <p className="text-sm md:text-base font-semibold text-black/70 max-w-2xl">
                Quick answers to what PotatoPay is, who it&apos;s for, and how tips,
                overlays and payouts work. For the full FAQ, visit{" "}
                <a
                  href="https://potatopay.co/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-black"
                >
                  potatopay.co/faq
                </a>
                .
              </p>
            </section>

            <section className="space-y-6">
              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  What is PotatoPay and who can use it?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  PotatoPay is India&apos;s first tipping platform built for live
                  streamers. It lets your audience send tips, superchat-style
                  messages, and media while you stream. Game streamers, IRL
                  streamers, educators, and more can use PotatoPay as long as their
                  content follows Indian law and our{" "}
                  <Link
                    href="/policy/terms-and-conditions"
                    className="underline font-black"
                  >
                    Terms &amp; Conditions
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  How do tips, fees and payouts work?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  Supporters send voluntary tips. We charge a{" "}
                  <span className="font-black">5% platform service fee</span> on each
                  transaction, as described in our Terms and Refund Policy, and
                  settle the remaining amount to your linked bank account via our
                  payment gateway partners.
                </p>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  Tips are generally{" "}
                  <span className="font-black">non-refundable</span>, except in
                  special cases like unauthorized transactions or technical failures,
                  as detailed in the{" "}
                  <Link
                    href="/policy/refund-and-cancellation-policy"
                    className="underline font-black"
                  >
                    Refund &amp; Cancellation Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  What content is not allowed?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  We are committed to a respectful and inclusive environment. We do
                  <span className="font-black"> not allow 18+ content</span>, sexually
                  explicit material, or any content that promotes hate speech,
                  harassment or discrimination. Full details are in our{" "}
                  <Link
                    href="/policy/terms-and-conditions"
                    className="underline font-black"
                  >
                    Terms &amp; Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/policy/privacy-policy"
                    className="underline font-black"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Where can I read everything in detail?
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  For the complete legal and policy documents, you can always refer
                  to our main site:{" "}
                  <a
                    href="https://potatopay.co/faq"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    FAQ
                  </a>
                  ,{" "}
                  <a
                    href="https://potatopay.co/policy/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Terms &amp; Conditions
                  </a>
                  ,{" "}
                  <a
                    href="https://potatopay.co/policy/refund-and-cancellation-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Refund &amp; Cancellation Policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://potatopay.co/policy/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Privacy Policy
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


