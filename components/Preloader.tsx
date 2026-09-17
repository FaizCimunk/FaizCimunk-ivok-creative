"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
      exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-black z-50 flex flex-col justify-between p-10 text-white"
    >
      <div className="font-syne text-sm uppercase tracking-widest text-neutral-500">
        Ivok Grup Studio
      </div>
      <div className="flex justify-between items-end">
        <h1 className="font-syne text-6xl md:text-9xl font-bold tracking-tighter">
          {count}%
        </h1>
        <p className="font-manrope text-sm text-neutral-400 max-w-xs text-right">
          Mempersiapkan pengalaman digital kelas dunia untuk bisnismu.
        </p>
      </div>
    </motion.div>
  );
}
