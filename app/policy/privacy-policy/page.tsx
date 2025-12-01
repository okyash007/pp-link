"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen w-full bg-[#FEF18C]/15 text-black relative overflow-hidden">
      <style>{`
        @keyframes privacyStripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 220px 0, 0 220px; }
        }
        .privacy-bg {
          animation: privacyStripeMove 24s linear infinite;
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 privacy-bg opacity-40"
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
                  Privacy Policy
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
              <p className="inline-flex items-center gap-2 rounded-full bg-[#AAD6B8]/70 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                Privacy
              </p>
              <h1 className="text-2xl md:text-3xl font-black">
                Privacy Policy (Summary)
              </h1>
              <p className="text-sm md:text-base font-semibold text-black/70 max-w-2xl">
                This summary explains, in simple language, how PotatoPay uses and
                protects your data. For the full legal policy, please read the
                official document at{" "}
                <a
                  href="https://potatopay.co/policy/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-black"
                >
                  potatopay.co/policy/privacy-policy
                </a>
                .
              </p>
            </section>

            <section className="space-y-6">
              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  What data we collect
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  As described in the official policy, PotatoPay collects the
                  personal data you choose to share with us – like your name, email,
                  payment details (handled via secure gateways), and information
                  needed for KYC and payouts.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  How your data is used
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  We use your information to run the platform: processing tips,
                  showing you your dashboard, completing KYC and payouts, and keeping
                  the community safe. We do not sell your data, and we work with
                  trusted payment partners under Indian law.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Safety, consent &amp; your choices
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  You agree to the Privacy Policy by using PotatoPay. You can update
                  or correct your information in your account, and you can always
                  contact us if you have questions about how your data is handled, as
                  detailed in the full policy text.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  Where to find the full Privacy Policy
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  This is only a friendly summary and not a legal document. For all
                  official details on data, cookies, retention and your rights, read
                  the full{" "}
                  <a
                    href="https://potatopay.co/policy/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Privacy Policy
                  </a>{" "}
                  on our main website.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}


