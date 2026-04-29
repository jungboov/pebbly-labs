import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "./_components/SiteHeader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://toolkit.pebblylabs.com"),
  title: {
    default: "Pebbly Toolkit — Privacy-First Tools for Creators",
    template: "%s | Pebbly Toolkit",
  },
  description:
    "Browser-based creator tools that run 100% locally. No uploads, no servers, no tracking. Free and open. Built by Pebbly Labs.",
  keywords: [
    "creator tools",
    "browser tools",
    "privacy-first",
    "local AI",
    "no upload",
    "Pebbly",
    "Pebbly Toolkit",
  ],
  authors: [{ name: "Pebbly Labs", url: "https://pebblylabs.com" }],
  creator: "Pebbly Labs",
  publisher: "Pebbly Labs",

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR"],
    url: "https://toolkit.pebblylabs.com",
    siteName: "Pebbly Toolkit",
    title: "Pebbly Toolkit — Privacy-First Tools for Creators",
    description:
      "Browser-based creator tools that run 100% locally. No uploads, no servers, no tracking. Free and open.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pebbly Toolkit — Privacy-First Tools for Creators",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@pebblylabs",
    creator: "@pebblylabs",
    title: "Pebbly Toolkit — Privacy-First Tools for Creators",
    description:
      "Browser-based creator tools that run 100% locally. No uploads. No servers. 100% private. Free.",
    images: ["/og-image.png"],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#00ff00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jetBrainsMono.variable} ${pressStart2P.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-black">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
