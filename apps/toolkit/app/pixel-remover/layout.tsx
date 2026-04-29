import type { Metadata } from "next";
import DonateFloat from "./_components/DonateFloat";

export const metadata: Metadata = {
  title: "Pixel Remover — AI Background Removal in Your Browser",
  description:
    "AI-powered background removal that runs 100% in your browser. No uploads, no servers, no tracking. Free and privacy-first. Built by Pebbly Labs.",
  keywords: [
    "background removal",
    "AI image editor",
    "remove background",
    "transparent PNG",
    "privacy-first",
    "browser-based",
    "no upload",
    "local AI",
    "Pebbly",
    "free background remover",
  ],

  openGraph: {
    title: "Pixel Remover — AI Background Removal in Your Browser",
    description:
      "Remove image backgrounds with AI, entirely in your browser. No uploads. No servers. 100% private. Free forever.",
    url: "https://toolkit.pebblylabs.com/pixel-remover",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pebbly Pixel Remover — AI Background Removal",
        type: "image/png",
      },
    ],
  },

  twitter: {
    title: "Pixel Remover — AI Background Removal in Your Browser",
    description:
      "Remove backgrounds with AI. Runs locally. No uploads. No servers. 100% private. Free.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "https://toolkit.pebblylabs.com/pixel-remover",
  },
};

export default function PixelRemoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <DonateFloat />
    </>
  );
}
