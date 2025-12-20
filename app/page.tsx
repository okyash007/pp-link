"use client";

import { Button } from "@/components/ui/button";
// import { runTextToSpeech } from "@/lib/runTextToSpeech";
import Link from "next/link";
import Image from "next/image";
import coolPotato from "@/app/assets/cool.svg";
import moneyMascot from "@/app/assets/money.svg";
import treeMascot from "@/app/assets/tree.svg";
// import maillMascot from "@/app/assets/maill.svg";
// import joyMascot from "@/app/assets/joy.svg";
// import famMascot from "@/app/assets/fam.svg";
// import carMascot from "@/app/assets/car.svg";
// import laptopMascot from "@/app/assets/laptop.svg";
// import waitingMascot from "@/app/assets/waiting.svg";

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
  // const handleTextToSpeech = async () => {
  //   const audioContext = new (window.AudioContext ||
  //     (window as any).webkitAudioContext)();

  //   if (audioContext.state === "suspended") {
  //     await audioContext.resume();
  //   }

  //   await runTextToSpeech({
  //     text: "Welcome to PotatoPay – India's first tipping platform for live streamers.",
  //     voice: "alloy",
  //     creatorId: "demo-homepage-creator",
  //     instructions:
  //       "Sound upbeat, fun and energetic, like you are welcoming creators to the platform.",
  //   });
  // };

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
        <header className="border-b-[3px] border-black bg-white/90 backdrop-blur px-4 py-6">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-6">
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
        <main className="flex-1 px-4 py-24 md:py-32 relative">


          <div className="relative mx-auto max-w-5xl relative z-10">
            {/* Floating mascots in background */}
            <div className="pointer-events-none absolute -top-80 -right-48 w-220 h-220  animate-[floatY_9s_ease-in-out_infinite] hidden md:block" style={{ animationDelay: '1.5s' }}>
              <Image
                src={treeMascot}
                alt="Tree mascot"
                className="object-contain w-full h-full"
              />
            </div>
            {/* Hero section */}
            <section className="text-center space-y-6 mr-45 mb-32 relative">

              <div className="inline-flex items-center gap-2 rounded-full border-[3px] border-black bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <span className="h-2 w-2 rounded-full bg-[#FF6B9D]" />
                Built for live streamers in India
              </div>

              <div className="space-y-6 max-w-3xl mx-auto">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight">
                  Say Hello to Actual <span className="text-[#4CAF50]">₹</span>{" "}
                  Earnings,
                  <span className="block text-[#828BF8]">Every Time You Go Live.</span>
                </h1>
                <p className="text-lg md:text-xl font-semibold text-black/70 max-w-2xl mx-auto">
                  India&apos;s first tipping platform for live streamers. Accept tips seamlessly – no confusing setup or waitlists.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button
                  asChild
                  className="h-auto bg-[#FEF18C] hover:bg-[#FEE55A] text-black font-black text-base px-8 py-4 border-[4px] border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-150"
                >
                  <Link
                    href="https://forms.gle/G6viymkGKyUhFzK36"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Access
                  </Link>
                </Button>
                {/* <button
                  type="button"
                  onClick={handleTextToSpeech}
                  className="h-auto bg-white hover:bg-[#E5EBFF] text-black font-black text-sm px-5 py-3 border-[3px] border-black rounded-2xl shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
                >
                  🔊 Play Demo TTS
                </button> */}
              </div>

            </section>

            {/* Features section */}
            <section className="mb-32">
              <div className="rounded-3xl border-[5px] border-black bg-[#828BF8] p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden relative">
                {/* Glow blobs */}
                <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-[#FEF18C]/80 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[#AAD6B8]/80 blur-3xl" />

                {/* Mascots lurking around */}
                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-32 h-32 md:w-48 md:h-48 animate-[floatY_5s_ease-in-out_infinite] opacity-90">
                  <Image
                    src={moneyMascot}
                    alt="Money mascot"
                    className="object-contain w-full h-full"
                  />
                </div>
                {/* <div className="absolute bottom-2 left-2 md:bottom-0 md:left-4 w-32 h-32 md:w-48 md:h-48  animate-[floatY_6s_ease-in-out_infinite] opacity-90" style={{ animationDelay: '1s' }}>
                  <Image
                    src={joyMascot}
                    alt="Joy mascot"
                    className="object-contain w-full h-full"
                  />
                </div> */}
                {/* <div className="absolute top-1/2 -right-8 md:-right-12 w-32 h-32 md:w-48 md:h-48 animate-[floatY_7s_ease-in-out_infinite] opacity-90 transform -translate-y-1/2" style={{ animationDelay: '2s' }}>
                  <Image
                    src={maillMascot}
                    alt="Mail mascot"
                    className="object-contain w-full h-full"
                  />
                </div> */}

                <div className="relative z-10 space-y-8">
                  <div className="space-y-4 max-w-2xl">
                    <p className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.25em] text-[#FEF18C]">
                      Live Stream Toolkit
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight font-semibold">
                      Everything a <span className="text-[#F2E69A]">Creator Needs</span> Built Into One Platform                    </h2>

                    <p className="text-white font-medium -mt-2">PotatoPay is your <span className="text-[#F2E69A] font-bold">all-in-one integration service</span> to engage your audience, boost your revenue, and build a creator brand, without any confusing setup.</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
                    <div className="rounded-xl border-[3px] border-black bg-white/95 p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                      <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-2">
                        Instant Shoutouts
                      </p>
                      <p className="text-sm font-semibold text-black/80">
                        Turn tips into fun, memorable moments with text-to-speech shoutouts that make your stream lively and personal.                      </p>
                    </div>
                    <div className="rounded-xl border-[3px] border-black bg-[#FEF18C]/90 p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                      <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-2">
                        OBS Integration
                      </p>
                      <p className="text-sm font-semibold text-black/80">
                        No need to be a tech wizard. PotatoPay connects with OBS and all major streaming tools in just a few clicks.
                      </p>
                    </div>
                    <div className="rounded-xl border-[3px] border-black bg-[#FEF18C]/90 p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                      <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-2">
                        Clear Payouts
                      </p>
                      <p className="text-sm font-semibold text-black/80">
                        Track every rupee in real-time. Your dashboard shows you tips, messages, and payouts clearly and simply.                      </p>
                    </div>

                    <div className="rounded-xl border-[3px] border-black bg-white/95 p-6 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150">
                      <p className="text-xs font-black uppercase tracking-widest text-black/60 mb-2">
                        Viewer Moments
                      </p>
                      <p className="text-sm font-semibold text-black/80">
                        Let viewers share clips or media when they tip. You stay in control of what plays so it’s always fun and safe.                                        </p>
                    </div>
                  </div>

                  <div className="mt-12 max-w-3xl rounded-2xl border-[3px] border-black bg-[#AAD6B8] px-6 py-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] text-center">
                    <p className="text-sm font-black">
                      <span className="underline">Nominal</span> fees. No minimum followers.
                    </p>
                    <p className="text-xs font-semibold text-black/70 mt-1">
                      Start earning instantly with just your link or QR.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="-mt-30 w-full h-90 animate-[floatY_8s_ease-in-out_infinite] block">
              <Image
                src={coolPotato}
                alt="Cool potato mascot"
                className="object-contain w-full h-full"
              />
            </div>

            {/* Creator friendly section */}
            <section className="relative">

              <div className="w-full text-center space-y-3">
                <h2 className="text-2xl sm:text-4xl font-black leading-tight font-semibold text-[#828BF8]">
                  Start Earning From Day <span className="text-[#FFF4AF] font-black
  [text-shadow:-2px_-2px_0_#000,2px_-2px_0_#000,-2px_2px_0_#000,2px_2px_0_#000]">
  1
</span>
                </h2>

                <p className="text-sm sm:text-base w-full px-18 pb-10 font-semibold text-black/80 leading-relaxed">
                  Whether you&apos;re just starting out or already streaming full-time, PotatoPay helps you turn every shoutout into real support — with zero setup stress.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto relative z-10">
                <div className="rounded-3xl border-[4px] border-black bg-[#FEF18C]/60 p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-black mb-4 relative z-10">
                    Creator-friendly from day one
                  </h3>
                  <ul className="space-y-3 text-base font-semibold text-black/80 list-disc ml-5 relative z-10">
                    <li>Start even if you&apos;re at 5 viewers, not 5M</li>
                    <li>Nominal fees</li>
                    <li>Indian payments &amp; compliance built in</li>
                  </ul>
                </div>
                <div className="rounded-3xl border-[4px] border-black bg-white p-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between gap-6 relative overflow-hidden">
                  <div className="relative z-10">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-black/60 mb-3">
                      Simple setup
                    </p>
                    <p className="text-base font-semibold text-black/80">
                      Share one link, stick a QR on your stream, and PotatoPay handles the rest.
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full h-auto bg-black hover:bg-[#222] text-[#FEF18C] font-black text-sm px-6 py-3 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150 relative z-10"
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

          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 border-t-[3px] border-black bg-[#828BF8]/10 px-4 py-12 relative overflow-hidden">

          <div className="mx-auto max-w-6xl space-y-8 relative z-10">
            {/* Safety section */}
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <p className="inline-flex items-center gap-2 rounded-full bg-black text-[#FEF18C] px-4 py-2 text-xs font-black uppercase tracking-[0.25em]">
                  Creator-first & hassle-free
                </p>
                <h3 className="text-lg md:text-xl font-black">
                  Built to keep your community fun, not messy
                </h3>
              </div>
              <p className="text-sm font-semibold text-black/80 max-w-2xl mx-auto">
                PotatoPay speaks your language, fits your flow, and supports you from Day 1. No minimum followers. No long waitlists.                <a
                  href="mailto:support@potatopay.co"
                  className="underline font-black"
                >
                  support@potatopay.co
                </a>
              </p>
            </div>

            {/* Footer links and copyright */}
            <div className="border-t-[2px] border-black/20 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <p className="text-sm font-black">
                  {/* © {new Date().getFullYear()} PotatoPay.co */}
                  © 2025 PotatoPay.co
                </p>
                <p className="text-[11px] font-semibold text-black/60">
                  India&apos;s #1st Tipping Platform For Live Streamers.
                </p>
              </div>
              <div className="flex flex-col items-end justify-center gap-3">
                <div className="flex items-center justify-start gap-2">
                  <a target="_blank" href="https://x.com/potatopayco">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-twitter-x" viewBox="0 0 16 16" id="Twitter-X--Streamline-Bootstrap" height="20" width="20">
                      <desc>
                        Twitter X Streamline Icon: https://streamlinehq.com
                      </desc>
                      <path d="M12.6 0.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867 -5.07 -4.425 5.07H0.316l5.733 -6.57L0 0.75h5.063l3.495 4.633L12.601 0.75Zm-0.86 13.028h1.36L4.323 2.145H2.865z" strokeWidth="2"></path>
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.instagram.com/potatopay.co">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" id="Instagram--Streamline-Core" height="23" width="23" className="-mb-1">
                      <desc>
                        Instagram Streamline Icon: https://streamlinehq.com
                      </desc>
                      <g id="instagram">
                        <g id="Group 4546">
                          <path id="Vector" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M10.3332 3.64404c-0.1381 0 -0.25 -0.11193 -0.25 -0.25s0.1119 -0.25 0.25 -0.25" strokeWidth="2"></path>
                          <path id="Vector_2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M10.3332 3.64404c0.1381 0 0.25 -0.11193 0.25 -0.25s-0.1119 -0.25 -0.25 -0.25" strokeWidth="2"></path>
                        </g>
                        <path id="Rectangle 2" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M0.858276 3.43141c0 -1.42103 1.151974 -2.573012 2.573014 -2.573012h6.86141c1.421 0 2.573 1.151982 2.573 2.573012v6.86139c0 1.421 -1.152 2.573 -2.573 2.573H3.43129c-1.42104 0 -2.573014 -1.152 -2.573014 -2.573V3.43141Z" strokeWidth="2"></path>
                        <path id="Ellipse 11" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M4.312 6.862a2.55 2.55 0 1 0 5.1 0 2.55 2.55 0 1 0 -5.1 0" strokeWidth="2"></path>
                      </g>
                    </svg>
                  </a>

                  <a target="_blank" href="https://youtube.com/@potatopayco?si=Nrd__8chUv-pUuWA">
                    <svg
                      width="25"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg"
                      className="-my-1"
                    >
                      <path d="M508.64,148.79c0-45-33.1-81.2-74-81.2C379.24,65,322.74,64,265,64H247c-57.6,0-114.2,1-169.6,3.6-40.8,0-73.9,36.4-73.9,81.4C1,184.59-.06,220.19,0,255.79q-.15,53.4,3.4,106.9c0,45,33.1,81.5,73.9,81.5,58.2,2.7,117.9,3.9,178.6,3.8q91.2.3,178.6-3.8c40.9,0,74-36.5,74-81.5,2.4-35.7,3.5-71.3,3.4-107Q512.24,202.29,508.64,148.79ZM207,353.89V157.39l145,98.2Z" />
                    </svg>
                  </a>

                  <a target="_blank" href="https://www.linkedin.com/company/potatopay/">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
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
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

