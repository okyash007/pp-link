import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://potatopay.co";
const ogImageUrl = `${siteUrl}/og-image.png`;

export const metadata: Metadata = {
  title: "Potatopay.co - The Future of Digital Payments & Fun Fan Funding",
  description: "Turn boring UPI payments into exciting, gamified tips. More earnings for creators, more fun for fans.",
  keywords: [
    "superchat",
    "tip",
    "tips",
    "tipping",
    "earn",
    "earning",
    "stream",
    "streaming",
    "streamer",
    "live",
    "live streaming",
    "gamer",
    "game",
    "gaming",
    "irl",
    "irl streaming",
    "youtube gaming",
    "twitch streaming",
    "facebook gaming",
    "sponsor",
    "potatopay",
    "potatopay.co",
    "rachitroo"
  ],
  authors: [{ name: "Potatopay" }],
  creator: "Potatopay",
  publisher: "Potatopay",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Potatopay.co",
    title: "Potatopay.co - The Future of Digital Payments & Fun Fan Funding",
    description: "Turn boring UPI payments into exciting, gamified tips. More earnings for creators, more fun for fans.",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Potatopay - Turn boring UPI payments into exciting, gamified tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Potatopay.co - The Future of Digital Payments & Fun Fan Funding",
    description: "Turn boring UPI payments into exciting, gamified tips. More earnings for creators, more fun for fans.",
    images: [ogImageUrl],
    creator: "@potatopayco",
    site: "@potatopayco",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4" async></script>
        {/* WhatsApp and Facebook specific meta tags - these require absolute URLs */}
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:image:secure_url" content={ogImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Potatopay - Turn boring UPI payments into exciting, gamified tips" />
        <meta name="twitter:image" content={ogImageUrl} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script
          src="https://checkout.razorpay.com/v1/checkout.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
