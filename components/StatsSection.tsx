"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrambleNumber = ({ value }: { value: string }) => {
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    let scrambleInterval: NodeJS.Timeout;
    let pauseTimeout: NodeJS.Timeout;

    const chars = "0123456789";
    
    const scramble = () => {
      let iterations = 0;
      const maxIterations = value.length * 3;
      
      scrambleInterval = setInterval(() => {
        setDisplay(
          value.split("").map((char, index) => {
            // Keep special characters as they are
            if (char === "." || char === "+" || char === " ") return char;
            // Reveal actual character slowly
            if (index < iterations / 3) return char;
            // Scramble the rest
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );

        if (iterations >= maxIterations) {
          clearInterval(scrambleInterval);
          setDisplay(value);
          // Pause for 4 seconds, then scramble again
          pauseTimeout = setTimeout(scramble, 4000);
        }
        iterations += 1;
      }, 50);
    };

    scramble();

    return () => {
      clearInterval(scrambleInterval);
      clearTimeout(pauseTimeout);
    };
  }, [value]);

  return <span className="tabular-nums">{display}</span>;
};

export default function StatsSection() {
  const stats = [
    { label: "MITRA", value: "900+" },
    { label: "PROVINSI", value: "38" },
    { label: "KABUPATEN / KOTA", value: "200+" },
  ];

  return (
    <div className="py-24 px-6 md:px-20 bg-neutral-950 border-y border-neutral-900 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center mb-16">
        <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Ivok Grup <span className="text-[#b259ff]">Dalam Angka</span>
        </h2>
        <p className="font-manrope text-neutral-400 max-w-3xl mx-auto text-lg leading-relaxed">
          Ribuan media, miliaran views. Demografi audiens, jaringan partner, hingga kolaborasi kreator & influencer dalam satu ekosistem raksasa Ivok Grup.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {stats.map((stat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 md:p-10 border border-neutral-800 bg-black rounded-3xl flex flex-col items-center justify-center text-center hover:border-neutral-600 transition-colors"
          >
            <span className="font-syne text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-2 md:mb-4">
              {stat.label}
            </span>
            <div className="font-syne text-6xl md:text-7xl font-bold text-white tracking-tighter">
              <ScrambleNumber value={stat.value} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
