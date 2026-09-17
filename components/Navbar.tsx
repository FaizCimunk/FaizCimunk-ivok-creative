"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      if (typeof window !== "undefined") {
        if ((window as any).lenis) {
          (window as any).lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40">
        <div className="flex justify-between items-center px-5 md:px-12 py-5 md:py-6 relative z-50">
          <div className="font-syne font-bold text-sm sm:text-base md:text-2xl tracking-tighter mix-blend-difference flex items-center gap-1.5 md:gap-2 whitespace-nowrap text-white">
            <Link href="/" onClick={handleLogoClick} className="hover:opacity-75 transition">IVOK GRUP</Link>
            <span className="text-neutral-500 font-normal text-xs md:text-base">✕</span>
            <a href="https://ivoknews.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition text-[#b259ff]">IVOKNEWS</a>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="font-syne font-bold text-xs md:text-sm tracking-widest text-white hover:opacity-75 transition mix-blend-difference"
          >
            [ MENU ]
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-neutral-950 z-50 flex flex-col justify-between p-10 md:p-20"
          >
            <div className="flex justify-between items-center">
              <div className="font-syne font-bold text-sm sm:text-base md:text-xl text-white flex items-center gap-1.5 md:gap-2 whitespace-nowrap">
                <Link 
                  href="/" 
                  onClick={(e) => {
                    setIsOpen(false);
                    handleLogoClick(e);
                  }} 
                  className="hover:opacity-75 transition"
                >
                  IVOK GRUP
                </Link>
                <span className="text-xs md:text-sm text-neutral-500 font-normal">✕</span>
                <a href="https://ivoknews.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition text-[#b259ff]">IVOKNEWS</a>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xs md:text-sm font-syne uppercase tracking-widest text-neutral-400 hover:text-white"
              >
                [ Close ]
              </button>
            </div>

            <div className="flex flex-col gap-6 font-syne text-4xl md:text-6xl font-bold text-white">
              <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition">
                01. Home
              </Link>
              <Link href="/tentang-kami" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition">
                02. Tentang Kami
              </Link>
              <Link href="/layanan" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition">
                03. Layanan
              </Link>
              <Link href="/program" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition">
                04. Gabung Mitra
              </Link>
              <Link href="/berita" onClick={() => setIsOpen(false)} className="hover:text-neutral-400 transition">
                05. Artikel Berita
              </Link>
            </div>

            <div className="flex flex-col md:flex-row justify-between text-xs text-neutral-400 font-manrope gap-4">
              <p>Agensi Digital & Media Kreatif Terintegrasi.</p>
              <a href="https://wa.me/6288221511946" target="_blank" rel="noreferrer" className="hover:text-white underline">
                WhatsApp: +62 882-2151-1946
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
