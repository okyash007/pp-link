"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import coolPotato from "@/app/assets/cool.svg";
import Image from "next/image";

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
      {/* Announcement Bar */}
      <div className="relative z-10 flex min-h-screen flex-col">
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
            <Link
              href="/"
              className="flex items-center">
              <div className="h-18 w-18 flex items-center justify-center overflow-hidden">
                <Image
                  src={coolPotato}
                  alt="Potatopay mascot"
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
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="hidden md:inline-block text-xs font-bold underline-offset-2 hover:underline"
              >
                Home
              </Link>
              <Button
                asChild
                className="hidden md:inline-flex h-auto bg-[#828BF8] hover:bg-[#5C66D4] text-white font-black text-xs px-4 py-2 border-[3px] border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-150"
              >
                <Link
                  href="https://dashboard.potatopay.co/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Request Access
                </Link>
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            <section>
              <p className="inline-flex items-center gap-2 rounded-full bg-[#AAD6B8]/60 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                FAQ
              </p>
              <h1 className="text-2xl md:text-5xl text-black font-semibold">
                Frequently Asked Questions
              </h1>
              <p className="text-sm mt-2 font-semibold text-black/70 max-w-2xl">
                Learn how Potatopay works, how to receive support, and how we handle your data and fees. If something isn&apos;t covered here, you can always reach us at{" "}
                <a
                  href="mailto:support@potatopay.co"
                  className="underline font-black"
                >
                  support@potatopay.co
                </a>
                .
              </p>
            </section>

            <section className="space-y-8">
              {/* About Potatopay */}
              <div className="space-around">
                <h2 className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-black/70">
                  About Potatopay
                </h2>

                <div className="space-y-3">
                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">What is Potatopay?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Potatopay is an integration service that enables creators to receive financial support from their fans. It isn't a live-streaming tool, but it can connect seamlessly with platforms such as YouTube, Twitch, and others.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">Can I use Potatopay?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">

                      Yes, Potatopay is open to various activities such as game streaming, tutorials, just chatting, etc., as long as they comply with Indian Law. See our{" "}
                      <a href="/policy/terms-and-conditions" className="underline font-black">
                        Terms &amp; Conditions
                      </a>
                      .
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      I&apos;m not a streamer. Can I still use Potatopay?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Yes, support is available in your Potatopay account even if it's not live. The downside: there's no real-time notification when tips come in, but you can check in the 'Transactions' menu.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      What live streaming platforms can be integrated with Potatopay?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">Potatopay integrates with broadcasting software that supports{" "}
                      '<span className="font-black">Browser Source</span>', such as OBS or Streamlabs.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">How can I use Potatopay?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Register using Google-signin, verify your personal details, verify your bank account, setup an overlay for live streaming, attach the QR code and Potatopay link, and receive support. Initial verification is essential for fund disbursement.
                    </p>
                  </div>
                </div>
              </div>

              {/* Sending / Receiving Support */}
              <div className="space-y-4">
                <h2 className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-black/70">
                  Sending / Receiving Support
                </h2>

                <div className="space-y-3">
                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      Why can&apos;t I pay directly via the Potatopay QR code?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Potatopay QR code is for redirecting you to support page where you can complete the transaction.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      What is the minimum support fund and minimum disbursement?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      The minimum support fund is ₹1, the minimum fund that can be disbursed is ₹10.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">Can I refund the support?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Only if the person you supported raise a ticket to refund a transaction. Read our{" "}
                      <a href="/policy/refund-and-cancellation-policy" className="underline font-black">
                        Refund &amp; Cancellation
                      </a>
                      {" "}policy for more information.
                    </p>
                  </div>
                </div>
              </div>

              {/* Personal Data Settings */}
              <div className="space-y-4">
                <h2 className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-black/70">
                  Personal Data Settings
                </h2>

                <div className="space-y-3">
                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      The email I registered is wrong, can I change it?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Yes, send an email to{" "}
                      <a href="mailto:support@potatopay.co" className="underline font-black">
                        support@potatopay.co
                      </a>{" "}
                      or DM us on{" "}
                      <a target="_blank" href="https://www.instagram.com/potatopay.co" className="underline font-black">
                        Instagram
                      </a>{" "}
                      to update your registered email.
                    </p>
                  </div>
                  {/* 
                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">I forgot my 2FA code, how do I get it?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      The 2FA code is automatically generated by Google Authenticator and changes periodically. Do not delete the app while 2FA is active on Potatopay.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">Can 2FA be disabled?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      Yes, you can disable it by going to <span className="font-black">Profile &rarr; Security &rarr; Disable 2FA</span>, or you can {" "}
                      <a href="mailto:support@potatopay.co" className="underline font-black">
                        email
                      </a>{" "} or DM to us on {" "}
                      <a target="_blank" href=" https://www.instagram.com/potatopay.co" className="underline font-black">
                        Instagram
                      </a>{" "} and {" "}
                      <a target="_blank" href="https://x.com/potatopayco" className="underline font-black">
                        X.com
                      </a>{" "}
                    </p>
                  </div> */}
                </div>
              </div>

              {/* Fees & Other */}
              <div className="space-y-4">
                <h2 className="text-base md:text-lg font-black uppercase tracking-[0.2em] text-black/70">
                  Fees &amp; Other
                </h2>

                <div className="space-y-3">
                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      Do supporters have to pay any fees?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      No. Supporters do not pay or bear any additional fees. The full amount paid by the supporter is processed, and all applicable fees are borne by the streamer/creator receiving the payment.
                    </p>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">What is a service fee?</h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      A service fee is a platform charge deducted from each successful transactoin recieved by a streamer or vendor.
                    </p>
                    <ul className="list-disc ml-6">
                      <li className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                        <b>2.5%</b> for users on the <b>Premium Plan</b>.
                      </li>
                      <li className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                        <b>12%</b> for users on the <b>Free Plan</b>.
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6
                      shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-2">
                    <h3 className="text-sm md:text-base font-black">
                      What does "service fee borne by the streamer" mean?
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      It means that the streamer or creator is responsible for paying the service fee. This fee is <b>automatically deducted</b> from:
                    </p>
                    <ul className="list-disc ml-6">
                      <li className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                        Each transaction recieved, and
                      </li>
                      <li className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                        Any applicable subscription or plan charges
                      </li>
                    </ul>
                    <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                      The supported is    <b>not affected</b> by this deduction                 </p>
                  </div>
                </div>

                <p className="mt-4 text-xs font-semibold text-black/50 text-right">
                  Last Updated on 19 Dec 2025
                </p>
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
                Potatopay speaks your language, fits your flow, and supports you from Day 1. No minimum followers. No long waitlists.  Get in touch -           <a
                  href="mailto:support@potatopay.co"
                  className="underline font-black"
                >
                  support@potatopay.co
                </a>
              </p>
            </div>

            {/* Footer links and copyright */}
            <div className="border-t-[2px] border-black/20 pt-8 flex flex-col gap-6 items-center md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <div className="sm:hidden flex items-center justify-center gap-2">
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
                <p className="text-sm font-black">
                  {/* © {new Date().getFullYear()} Potatopay.co */}
                  © 2025 Potatopay Private Limited.
                </p>
                <p className="text-[11px] font-semibold text-black/60">
                  India&apos;s #1st Tipping Platform For Live Streamers.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end justify-center gap-3">
                <div className="hidden sm:flex items-center justify-start gap-2">
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


