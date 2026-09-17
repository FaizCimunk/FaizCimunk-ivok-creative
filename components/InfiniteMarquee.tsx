"use client";

import React from "react";
import { motion } from "framer-motion";

const slogans = [
  "MENGUBAH VISI MENJADI REALITAS DIGITAL",
  "KREATIVITAS TANPA BATAS",
  "INOVASI TIADA HENTI",
  "KOLABORASI MASSAL",
];

export default function InfiniteMarquee() {
  return (
    <div className="py-6 bg-black border-b border-neutral-900 overflow-hidden relative">
      {/* Subtle glow overlay for the whole ribbon */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-xl pointer-events-none" />
      
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex gap-16 items-center text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-400 to-white font-syne font-black text-3xl md:text-5xl tracking-widest uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        >
          {[...slogans, ...slogans, ...slogans].map((slogan, index) => (
            <div key={index} className="flex items-center gap-16">
              <span className="hover:text-white hover:drop-shadow-[0_0_25px_rgba(255,255,255,1)] transition-all duration-500 cursor-default">
                {slogan}
              </span>
              <span className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff] animate-pulse inline-block" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
