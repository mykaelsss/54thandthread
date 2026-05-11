import type { Metadata } from "next";
import { Limelight, EB_Garamond } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const limelight = Limelight({
  weight: '400',
  variable: "--font-limelight",
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "54th and Thread",
  description: "Handcrafted artisan textiles — built to last a lifetime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${limelight.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-background-primary focus:text-text-primary">
          Skip to main content
        </a>
        <Nav />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
