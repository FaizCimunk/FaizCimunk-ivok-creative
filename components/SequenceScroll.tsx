"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const FRAME_COUNT = 240;

export default function SequenceScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    let loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = String(i).padStart(4, "0");
      img.src = `/sequence/image_${paddedIndex}.jpg`;
      img.onload = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
          setLoaded(true);
        }
      };
      // Mock loading if sequence folder doesn't exist
      img.onerror = () => {
        loadCount++;
        if (loadCount === FRAME_COUNT) {
            setLoaded(true);
        }
      }
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = (index: number) => {
      const img = images[Math.floor(index)];
      if (img && img.complete && img.naturalHeight !== 0) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShiftX = (canvas.width - img.width * ratio) / 2;
        const centerShiftY = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);
      }
    };

    const unsubscribe = currentIndex.on("change", (latest) => {
      requestAnimationFrame(() => render(latest));
    });

    render(0);

    return () => unsubscribe();
  }, [loaded, images, currentIndex]);

  const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.2], [1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45], [0, 1, 0]);
  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75], [0, 1, 0]);
  const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />
        
        {/* Fallback pattern in case images don't load */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-black to-black opacity-30" />

        <motion.div style={{ opacity: opacity1 }} className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 pointer-events-none">
          <span className="text-xs font-syne uppercase tracking-widest text-neutral-400 mb-2">Ivok Grup Studio</span>
          <h1 className="font-syne text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8">Agensi Digital & Media Kreatif</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 pointer-events-auto">
            <Link href="/layanan" className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-[#b259ff] rounded-full font-syne font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(178,89,255,0.3)] hover:-translate-y-1 text-white">
              Jelajahi Layanan
            </Link>
            <Link href="/program" className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-[#b259ff] rounded-full font-syne font-bold text-sm md:text-base tracking-widest uppercase transition-all duration-300 hover:shadow-[0_0_20px_rgba(178,89,255,0.3)] hover:-translate-y-1 text-white">
              Gabung Mitra
            </Link>
          </div>
        </motion.div>




      </div>
    </div>
  );
}
