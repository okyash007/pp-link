"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import coolPotato from "@/app/assets/cool.svg";
import Image from "next/image";

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
                href="/"
                className="hidden md:inline-block text-xs font-bold underline-offset-2 hover:underline"
              >
                Home
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


        <main className="flex-1 px-4 py-12 md:py-16">
          <div className="mx-auto max-w-4xl space-y-10">
            <section className="">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#AAD6B8]/60 border-[2px] border-black px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em]">
                Legal
              </p>
              <h1 className="text-2xl md:text-5xl font-black font-semibold">
                Terms &amp; Conditions
              </h1>
              <p className="text-sm mt-2 font-semibold text-black/70 w-full">
                We, PotatoPay.co (&quot;PotatoPay&quot;), a platform established under the laws of the Republic of India, operate to facilitate and support creators (&quot;Streamers&quot;) and their audience (&quot;Supporters&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your use of PotatoPay.co (&quot;Website&quot;) and associated services. By using this Website, you agree to these Terms. If you disagree with any provision, please discontinue use.
              </p>
            </section>

            <section className="space-y-6">
              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">1. DEFINITIONS</h2>
                <ol className="text-sm md:text-base font-semibold text-black/75 leading-loose">

                  <li>1.1 <b>Website</b> refers to PotatoPay.co and its associated services.</li>

                  <li>1.2 <b>Streamer</b> means a registered user who monetizes their content by receiving tips through the Website.</li>

                  <li>1.3 <b>Supporter</b> refers to individuals who voluntarily send monetary tips or paid messages to Streamers.</li>

                  <li>1.4 <b>User</b> collectively refers to Streamers, Supporters, and visitors.</li>

                  <li>1.5 <b>Personal Data</b> means information voluntarily provided by Users, including payment details.</li>

                  <li>1.6 <b>Intellectual Property Rights</b> means copyrights, trademarks, and other exclusive rights in creative works.</li>

                </ol>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  2. USER RIGHTS AND OBLIGATIONS
                </h2>

                <h4 className="font-bold">2.1 Streamer</h4>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    Streamers are responsible for all content they create, upload, or broadcast.
                  </li>
                  <li>
                    Must provide accurate details and complete KYC verification as mandated by law and Razorpay Route requirements before receiving settlements.
                  </li>
                  <li>
                    Must comply with Indian laws including IT Act, data protection rules, and tax obligations (including GST if applicable).
                  </li>
                  <li>
                    Are entitled to receive a share of tips after PotatoPay deducts its platform commission and applicable taxes.
                  </li>
                  <li>
                    Must not use the platform for unlawful or prohibited activities (fraud, gambling, hate speech, political funding, etc.).
                  </li>
                </ul>


                <h4 className="font-bold mt-6">2.2 Supporter</h4>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    Must provide valid contact/payment details for transaction processing.
                  </li>
                  <li>
                    Acknowledge that tips are <b>voluntary, final, and non-refundable</b>, except in cases of payment failure or technical error.

                  </li>
                  <li>
                    Agree that tips do not constitute a purchase of goods or services but are a form of support or appreciation.

                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  3. PROHIBITED ACTIVITIES
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  Users shall not:
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    Post illegal, harmful, or infringing content.
                  </li>
                  <li>
                    Misuse the platform for fraudulent or unauthorized purposes.
                  </li>
                  <li>
                    Violate RBI guidelines or other payment regulations.
                  </li>
                  <li>
                    Attempt to bypass security measures or exploit the Website.
                  </li>
                  <li>
                    Upload, share, or promote adult (18+) content, sexually explicit material, or pornographic content of any kind.
                  </li>
                  <li>
                    Create or distribute content that promotes hate speech, harassment, or discrimination based on race, religion, gender, sexual orientation, caste, or any other protected category.                  </li>
                  <li>
                    Engage in any behavior that undermines a respectful and inclusive environment on PotatoPay.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">4. PAYMENT PROCESSING & SETTLEMENT
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  4.1 <b>Payment Gateway</b>: All payments are processed through Razorpay’s secure gateway in compliance    with RBI regulations.
                </p>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  4.2 <b>Platform Fee</b>: PotatoPay deducts a 5% service/platform fee on each tip as commission before settlement to the Streamer.
                </p>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  4.3 <b>Settlement</b>: Net amounts (after commission, applicable GST, and payment gateway charges) are automatically transferred to Streamer-linked accounts via Razorpay Route within the prescribed settlement cycle (T+1/T+2).
                </p>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  4.4 <b>Refunds</b>: Tips are voluntary and final; refunds are only issued for duplicate payments or technical failures.
                </p>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  4.5 <b>Compliance</b>: AStreamers must complete KYC verification to receive settlements.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  5. INTELLECTUAL PROPERTY
                </h2>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    By uploading content, Streamers grant PotatoPay a non-exclusive, worldwide license to display, promote, and distribute it for the purpose of platform functionality and marketing.
                  </li>
                  <li>
                    Users are solely responsible for ensuring no third-party rights are infringed.
                  </li>
                </ul>
              </div>


              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  6. TERMINATION & ACCOUNT SUSPENSION
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  PotatoPay reserves the right to suspend or terminate accounts for violations of these Terms, non-compliance with KYC norms, or suspicious transactions.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  7. LIMITATION OF LIABILITY
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  PotatoPay is not liable for:
                </p>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    Disputes between Streamers and Supporters.
                  </li>
                  <li>
                    Losses from third-party gateway errors.
                  </li>

                  <li>
                    Delays caused by bank downtime or force majeure events.
                  </li>
                  <li>
                    Any indirect, incidental, or consequential damages.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  8. TAX OBLIGATIONS
                </h2>
                <ul className="space-y-2 text-sm md:text-base font-semibold text-black/75 leading-relaxed list-disc ml-5">
                  <li>
                    Streamers are responsible for declaring and paying taxes on income earned through tips
                  </li>
                  <li>
                    PotatoPay may provide transaction records to assist Streamers but is not liable for their tax compliance.
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  9. GOVERNING LAW & DISPUTE RESOLUTION
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  This agreement is governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Mainpuri, Uttar Pradesh.
                </p>
              </div>

              <div className="rounded-3xl border-[3px] border-black bg-white p-5 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
                <h2 className="text-lg md:text-xl font-black">
                  10. CONTACT
                </h2>
                <p className="text-sm md:text-base font-semibold text-black/75 leading-relaxed">
                  For queries, reach us at <a
                    href="mailto:support@potatopay.co"
                    className="underline font-black"
                  >
                    support@potatopay.co
                  </a>
                </p>
              </div>
              <p className="mt-4 text-xs font-semibold text-black/50 text-right">
                Last Updated on 19 Dec 2025
              </p>
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


