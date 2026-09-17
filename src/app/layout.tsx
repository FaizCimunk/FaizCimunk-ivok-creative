import type { Metadata } from "next";
import { Syne, Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import CustomCursor from "@/components/CustomCursor";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Ivok Grup — Agensi Digital & Media Kreatif",
  description: "Solusi web custom, aplikasi sistem, dan produksi konten sinematik.",
};

import Footer from "@/components/Footer";
import PhysicsEngine from "@/components/PhysicsEngine";
import StatsSection from "@/components/StatsSection";
import InfiniteMarquee from "@/components/InfiniteMarquee";

import ScrollToTop from "@/components/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="bg-[#000000] text-white">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          if (typeof window !== "undefined") {
            window.history.scrollRestoration = "manual";
            if (window.location.pathname === "/") {
              window.scrollTo(0, 0);
            }
          }
        `}} />
      </head>
      <body className={`${syne.variable} ${manrope.variable} font-manrope bg-[#000000] text-white overflow-x-hidden selection:bg-[#b259ff]/30 selection:text-white`}>
        <ScrollToTop />
        <CustomCursor />
        <LenisProvider>
          {children}
          <PhysicsEngine />
          <StatsSection />
          <InfiniteMarquee />
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
