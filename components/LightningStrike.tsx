"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  
  useEffect(() => {
    const chars = "!<>-_\\\\/[]{}—=+*^?#_01";
    let interval: NodeJS.Timeout;
    
    const scramble = () => {
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setDisplay(
          text.split("").map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          }).join("")
        );
        
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        
        iteration += 1 / 2;
      }, 30);
    };

    scramble();
    const loop = setInterval(scramble, 5000); // Scramble periodically
    
    return () => {
      clearInterval(interval);
      clearInterval(loop);
    };
  }, [text]);

  return <span className="inline-block min-w-[200px] sm:min-w-[280px] text-center">{display}</span>;
};

export default function LightningStrike() {
  const [flashes, setFlashes] = useState<{ id: number, x: number }[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Preload audio so there's no delay on first click
    audioRef.current = new Audio("/saya-akan-lawan.mp3");
    audioRef.current.volume = 1.0;
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    const id = Date.now();
    setFlashes(prev => [...prev, { id, x }]);
    
    // Mainkan efek suara viral
    if (audioRef.current) {
      try {
        audioRef.current.currentTime = 0; // Reset ke awal setiap diklik
        audioRef.current.play().catch(err => console.log("Audio play failed:", err));
      } catch (error) {
        // Abaikan error jika browser memblokir
      }
    }

    // Remove after flash completes
    setTimeout(() => {
      setFlashes(prev => prev.filter(f => f.id !== id));
    }, 600);
  };

  return (
    <div 
      className="w-full h-40 relative cursor-crosshair group touch-none z-30" 
      onPointerDown={handlePointerDown}
    >
      {/* 
        Hint text that is always slightly visible, but brightens on hover.
        Added some cool glitch/glow effects to the text box itself.
      */}
      <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="relative">
          {/* Subtle glow behind the text box */}
          <div className="absolute inset-0 bg-[#b259ff]/20 blur-md rounded-full group-hover:bg-[#b259ff]/40 transition-colors" />
          <span className="relative z-10 text-white font-syne text-xs md:text-sm uppercase tracking-[0.3em] border border-white/30 px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
            <ScrambleText text="KLIK UNTUK MEMANGGIL PETIR" />
          </span>
        </div>
      </div>

      {/* 
        We DO NOT use overflow-hidden here! 
        This allows the massive glow from the lightning to spill over into the 
        News section above and Services section below, creating a real "shock" effect.
      */}
      <AnimatePresence>
        {flashes.map((flash) => (
          <motion.div
            key={flash.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0, 1, 0.2, 1, 0] }} // more chaotic rapid flashes
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 z-0 flex items-center justify-center pointer-events-none"
            style={{ left: flash.x, transform: 'translate(-50%, -50%)' }}
          >
            {/* MASSIVE Flash / Ambient Glow spilling outside */}
            <div className="absolute w-[800px] h-[800px] md:w-[1500px] md:h-[1500px] bg-[#b259ff]/40 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
            
            {/* Core Intense Glow */}
            <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white/80 rounded-full blur-[80px] mix-blend-screen pointer-events-none" />
            
            {/* SVG Lightning Bolt */}
            <svg 
              width="100" 
              height="220" 
              viewBox="0 0 24 50" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10 drop-shadow-[0_0_40px_rgba(255,255,255,1)] pointer-events-none"
            >
              <path 
                d="M13.2 0L0 28H10.8L8.4 50L24 18H14.4L13.2 0Z" 
                fill="#ffffff" 
              />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
