"use client";

import { Button } from "@/components/ui/button";
import { runTextToSpeech } from "@/lib/runTextToSpeech";
import Link from "next/link";
import Image from "next/image";
import coolPotato from "@/app/assets/cool.svg";
// Declare Razorpay types
declare global {
  interface Window {
    Razorpay: new (options: {
      key: string;
      amount: string | number;
      currency: string;
      name: string;
      description: string;
      order_id?: string;
      image?: string;
      handler?: (response: {
        razorpay_payment_id: string;
        razorpay_order_id: string;
        razorpay_signature: string;
      }) => void;
      prefill?: {
        name?: string;
        email?: string;
        contact?: string;
      };
      notes?: Record<string, string>;
      theme?: {
        color?: string;
      };
    }) => {
      open: () => void;
    };
  }
}

export default function Home() {
  const handleTextToSpeech = async () => {
    const audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();

    if (audioContext.state === "suspended") {
      await audioContext.resume();
    }
    
    await runTextToSpeech({
      text: "Welcome to PotatoPay – India's first tipping platform for live streamers.",
      voice: "alloy",
      creatorId: "demo-homepage-creator",
      instructions:
        "Sound upbeat, fun and energetic, like you are welcoming creators to the platform.",
    });
  };

  return (
    <div className="min-h-screen w-full bg-[#FEF18C]/15 text-black relative overflow-hidden">
      {/* Animated background (striped + dots) */}
      <style>{`
        @keyframes landingStripeMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 220px 0, 0 220px; }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .landing-bg-animated {
          animation: landingStripeMove 24s linear infinite;
        }
      `}</style>

      <div
        className="pointer-events-none absolute inset-0 landing-bg-animated opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(254,241,140,0.35) 0px, rgba(254,241,140,0.35) 14px, transparent 14px, transparent 28px), radial-gradient(circle, rgba(130,139,248,0.18) 2.5px, transparent 3px)",
          backgroundSize: "auto, 24px 24px",
        }}
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        {/* Announcement bar */}
        <div className="w-full border-b-[3px] border-black bg-[#AAD6B8] px-4 py-2">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
            <p className="text-[11px] font-black uppercase tracking-[0.25em] flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-black" />
              India&apos;s #1st Tipping Platform For Live Streamers
            </p>
            <div className="hidden sm:flex items-center gap-2 text-[11px] font-bold">
              <span className="px-2 py-0.5 border-[2px] border-black bg-[#FEF18C] rounded-full">
                No minimum followers
              </span>
              <span className="px-2 py-0.5 border-[2px] border-black bg-white rounded-full">
                Built for Indian creators
              </span>
            </div>
          </div>
        </div>

        {/* Header / Nav */}
        <header className="border-b-[3px] border-black bg-white/90 backdrop-blur px-4 py-4">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 border-[4px] border-black bg-[#FEF18C] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center -rotate-3 overflow-hidden">
                <Image
                  src={coolPotato}
                  alt="PotatoPay mascot"
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tight leading-none">
                  POTATO<span className="text-[#828BF8]">PAY</span>.CO
                </span>
                <span className="text-[11px] font-bold text-black/70 uppercase tracking-wide mt-1">
                  The Future of Digital Payments & Fun Fan Funding
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/faq"
                className="hidden md:inline-block text-xs font-bold underline-offset-2 hover:underline"
              >
                FAQ / Policies
              </Link>
              <Button
                asChild
                className="h-auto bg-[#828BF8] hover:bg-[#5C66D4] text-white font-black text-xs px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
              >
                <Link
                  href="https://forms.gle/G6viymkGKyUhFzK36"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Access
                </Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 px-4 py-16 md:py-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-16 lg:flex-row lg:items-stretch">
            {/* Hero left */}
            <section className="relative w-full lg:w-1/2 space-y-7">
              <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF6B9D]" />
                Built for live streamers in India
              </div>

              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight max-w-xl">
                  Say Hello to Actual <span className="text-[#4CAF50]">₹</span>{" "}
                  Earnings,
                  <span className="block text-[#828BF8]">Every Time You Go Live.</span>
                </h1>
                <p className="text-sm md:text-base font-semibold text-black/70 max-w-sm">
                  PotatoPay is India&apos;s first dedicated tipping platform for live
                  streamers. Accept{" "}
                  <span className="font-black">
                    superchats, shoutouts, and live tips
                  </span>{" "}
                  seamlessly – without confusing setup or long waitlists.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#FEF18C] hover:bg-[#FEE55A] text-black font-black text-sm px-6 py-3 border-[4px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  <Link
                    href="https://forms.gle/G6viymkGKyUhFzK36"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Access
                  </Link>
                </Button>
                <button
                  type="button"
                  onClick={handleTextToSpeech}
                  className="h-auto bg-white hover:bg-[#E5EBFF] text-black font-black text-xs px-4 py-2 border-[3px] border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                >
                  🔊 Play Demo TTS
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 max-w-md">
                <div className="border-[3px] border-black bg-white px-3 py-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                    Transparent Fees
                  </p>
                  <p className="text-sm font-black">
                    Just <span className="underline">5% per transaction</span> –
                    covering ops &amp; payment gateway.
                  </p>
                </div>
                <div className="border-[3px] border-black bg-[#AAD6B8]/50 px-3 py-3 rounded-xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                    Start Day One
                  </p>
                  <p className="text-sm font-black">
                    No minimum followers. No confusing tech. Just your link &amp; QR.
                  </p>
                </div>
              </div>
            </section>

            {/* Hero right / Feature card */}
            <section className="relative w-full lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative h-full rounded-3xl border-[5px] border-black bg-[#828BF8] p-5 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#FEF18C]/80 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#AAD6B8]/80 blur-3xl" />

                <div className="relative z-10 flex h-full flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="inline-flex items-center gap-2 rounded-full bg-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#FEF18C]">
                        Live Stream Toolkit
                      </p>
                      <h2 className="text-xl sm:text-2xl font-black text-white">
                        Everything a creator needs,
                        <span className="block text-[#FEF18C]">
                          in one playful dashboard.
                        </span>
                      </h2>
                    </div>
                    <div className="hidden sm:block h-20 w-20 rounded-full border-[4px] border-black bg-[#FEF18C] flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] animate-[floatY_5s_ease-in-out_infinite]">
                      <span className="text-3xl">🎙️</span>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border-[3px] border-black bg-white/95 p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                        Text-to-Speech Shoutouts
                      </p>
                      <p className="text-xs font-semibold text-black/80 leading-relaxed">
                        Every tip triggers{" "}
                        <span className="font-black">instant, natural-sounding TTS</span>{" "}
                        so your stream never feels flat.
                      </p>
                    </div>
                    <div className="rounded-xl border-[3px] border-black bg-[#FEC4FF]/90 p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                        Media Share, Safely
                      </p>
                      <p className="text-xs font-semibold text-black/80 leading-relaxed">
                        Let viewers attach clips or media with their tip while{" "}
                        <span className="font-black">you stay fully in control</span>{" "}
                        of what gets shown.
                      </p>
                    </div>
                    <div className="rounded-xl border-[3px] border-black bg-[#FEF18C]/90 p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                        Plug into OBS in minutes
                      </p>
                      <p className="text-xs font-semibold text-black/80 leading-relaxed">
                        Drop your PotatoPay overlays in as{" "}
                        <span className="font-black">browser sources</span> in OBS,
                        Streamlabs and more – zero headache.
                      </p>
                    </div>
                    <div className="rounded-xl border-[3px] border-black bg-white/95 p-3 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      <p className="text-[11px] font-black uppercase tracking-widest text-black/60 mb-1">
                        Track every rupee
                      </p>
                      <p className="text-xs font-semibold text-black/80 leading-relaxed">
                        A clean dashboard shows{" "}
                        <span className="font-black">tips, messages &amp; payouts</span>{" "}
                        in real time.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-xl border-[3px] border-black bg-black/10 px-4 py-3 text-[11px] font-semibold text-black/80">
                    <span className="font-black">Safety first:</span> we don&apos;t
                    support 18+ content or hate speech. Check our{" "}
                    <a
                      href="https://potatopay.co/policy/terms-and-conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-black"
                    >
                      Terms &amp; Conditions
                    </a>{" "}
                    for full policies.
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* How it works + Creator friendly section */}
          <section className="mx-auto mt-20 max-w-4xl space-y-12">
            {/* <div className="rounded-3xl border-[4px] border-black bg-white p-7 md:p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#AAD6B8]/70 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] mb-3">
                How it works 
              </p>
              <h3 className="text-2xl font-black mb-5 max-w-xl">
                Go from &quot;link in bio&quot; to live tips in three chill steps.
              </h3>
              <ol className="space-y-4 text-sm md:text-base font-semibold text-black/80">
                <li className="flex gap-3">
                  <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full border-[2px] border-black bg-[#FEF18C] text-xs font-black">
                    1
                  </span>
                  <div className="space-y-1">
                    <p className="font-black">Get your PotatoPay link &amp; QR</p>
                    <p className="text-sm md:text-base">
                      Sign up, verify once, and you&apos;re handed a{" "}
                      branded tip page link plus QR you can drop anywhere.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full border-[2px] border-black bg-[#AAD6B8] text-xs font-black">
                    2
                  </span>
                  <div className="space-y-1">
                    <p className="font-black">Paste in OBS as a browser source</p>
                    <p className="text-sm md:text-base">
                      Copy your overlay URLs into OBS / Streamlabs and{" "}
                      PotatoPay handles alerts, shoutouts and leaderboard magic.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-7 w-7 flex items-center justify-center rounded-full border-[2px] border-black bg-[#FEC4FF] text-xs font-black">
                    3
                  </span>
                  <div className="space-y-1">
                    <p className="font-black">Go live &amp; watch tips roll in</p>
                    <p className="text-sm md:text-base">
                      Every tip shows up with clear messages, TTS, and{" "}
                      real-time tracking – so you always know what you&apos;ve earned.
                    </p>
                  </div>
                </li>
              </ol>
            </div> */}

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl border-[4px] border-black bg-[#FEF18C]/60 p-6 md:p-7 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-lg md:text-xl font-black mb-3">
                  Creator-friendly from day one.
                </h3>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/80 list-disc ml-5">
                  <li>Start even if you&apos;re at 5 viewers, not 5M.</li>
                  <li>Simple, clear 5% fees – covering operations &amp; gateway.</li>
                  <li>
                    Indian payments, Indian compliance, Indian support – all baked in.
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl border-[4px] border-black bg-white p-6 md:p-7 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-black/60 mb-2">
                    Too tired to overthink?
                  </p>
                  <p className="text-sm md:text-base font-semibold text-black/80 mb-3">
                    Share one link, stick a QR on your stream layout, and{" "}
                    PotatoPay handles the rest – tips, shoutouts, and payouts.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full md:w-auto h-auto bg-black hover:bg-[#222] text-[#FEF18C] font-black text-xs md:text-sm px-5 py-3 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                >
                  <Link
                    href="https://forms.gle/G6viymkGKyUhFzK36"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Early Access
                  </Link>
      </Button>
              </div>
            </div>
          </section>

          {/* Safety & vibe band */}
          <section className="mt-20 border-y-[3px] border-black bg-[#828BF8]/10">
            <div className="mx-auto max-w-4xl px-4 py-12 md:py-14 space-y-8">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 rounded-full bg-black text-[#FEF18C] px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                  Safe &amp; stream-friendly
                </p>
                <h3 className="text-xl md:text-2xl font-black max-w-xl">
                  Built to keep your community fun, not messy.
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-3 text-sm md:text-base font-semibold text-black/80">
                <p>
                  We don&apos;t support{" "}
                  <span className="font-black">18+ content or hate speech</span>. Your
                  overlays and alerts stay brand-safe.
                </p>
                <p>
                  Clear policies around refunds, privacy, and payouts – all laid out in
                  our{" "}
                  <a
                    href="https://potatopay.co/policy/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-black"
                  >
                    Terms &amp; Conditions
                  </a>
                  .
                </p>
                <p>
                  Questions or collabs? Reach out via{" "}
                  <a
                    href="mailto:help@potatopay.co"
                    className="underline font-black"
                  >
                    help@potatopay.co
                  </a>{" "}
                  and we&apos;ll actually reply.
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="mt-8 border-t-[3px] border-black bg-white px-4 py-5">
          <div className="mx-auto flex max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-black">
                © {new Date().getFullYear()} PotatoPay.
              </p>
              <p className="text-[11px] font-semibold text-black/60">
                India&apos;s #1st Tipping Platform For Live Streamers.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold">
              <Link
                href="/faq"
                className="underline underline-offset-2 hover:text-[#828BF8]"
              >
                FAQ
              </Link>
              <Link
                href="/policy/terms-and-conditions"
                className="underline underline-offset-2 hover:text-[#828BF8]"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/policy/refund-and-cancellation-policy"
                className="underline underline-offset-2 hover:text-[#828BF8]"
              >
                Refund Policy
              </Link>
              <Link
                href="/policy/privacy-policy"
                className="underline underline-offset-2 hover:text-[#828BF8]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

