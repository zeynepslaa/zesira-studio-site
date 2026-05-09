import type { Metadata } from "next";
import { Caveat, Cormorant_Garamond, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/content/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.brand.seoTitle,
  description: siteContent.brand.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${caveat.variable} ${playfair.variable} h-full scroll-pt-28`}
    >
      <body className="min-h-svh font-sans antialiased">{children}</body>
    </html>
  );
}
