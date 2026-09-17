"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, CloudLightning } from "lucide-react";

export default function Footer() {
  const [dateStr, setDateStr] = useState("...");
  const [timeStr, setTimeStr] = useState("...");
  const [visitors, setVisitors] = useState(12458);
  const [weather, setWeather] = useState<{ temp: number; code: number } | null>(null);

  // WMO Weather interpretation codes
  const getWeatherIcon = (code: number) => {
    if (code === 0 || code === 1) return <Sun size={14} className="text-yellow-400" />;
    if (code >= 51 && code <= 67) return <CloudRain size={14} className="text-blue-400" />;
    if (code >= 95 && code <= 99) return <CloudLightning size={14} className="text-[#b259ff]" />;
    return <Cloud size={14} className="text-neutral-400" />;
  };

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDateStr(now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase());
      setTimeStr(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).replace(/\./g, ':'));
    };
    
    updateTime();

    // Fetch weather
    fetch("https://api.open-meteo.com/v1/forecast?latitude=-6.2146&longitude=106.8451&current_weather=true")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.current_weather) {
          setWeather({
            temp: Math.round(data.current_weather.temperature),
            code: data.current_weather.weathercode,
          });
        }
      })
      .catch((err) => console.error("Failed to fetch weather:", err));

    const timeInterval = setInterval(updateTime, 1000);
    
    const visitorInterval = setInterval(() => {
      setVisitors(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4500);

    return () => {
      clearInterval(timeInterval);
      clearInterval(visitorInterval);
    };
  }, []);

  return (
    <footer className="py-20 px-6 md:px-20 border-t border-neutral-900 bg-black text-white relative overflow-hidden">
      
      {/* Giant Background Typography */}
      <div className="absolute bottom-[-2vw] md:bottom-[-4vw] left-0 w-full text-center pointer-events-none select-none z-0 flex justify-center overflow-hidden">
        <span className="font-syne text-[18vw] md:text-[22vw] font-black tracking-tighter text-white/[0.03] whitespace-nowrap leading-none">
          IVOK GRUP
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="md:pr-10">
          <div className="font-syne font-bold text-lg mb-6 flex items-center gap-2 whitespace-nowrap w-max">
            <Link href="/" className="hover:opacity-75 transition">IVOK GRUP</Link>
            <span className="text-sm text-neutral-500 font-normal">✕</span>
            <a href="https://ivoknews.com" target="_blank" rel="noreferrer" className="hover:opacity-75 transition text-[#b259ff]">IVOKNEWS</a>
          </div>
          <p className="text-sm text-neutral-500 mb-4 font-manrope">Agensi Digital & Media Kreatif profesional.</p>
          <p className="text-sm text-neutral-400 font-manrope leading-relaxed mb-6">
            Jalan Wahid Hasyim no 116. Purwokerto Selatan, Kabupaten Banyumas, Provinsi Jawa Tengah.
          </p>
        </div>
        
        <div>
          <h4 className="font-syne text-sm font-bold uppercase tracking-wider mb-6 text-neutral-500">Produk & Layanan</h4>
          <ul className="flex flex-col gap-4 text-sm text-neutral-300 font-manrope">
            <li><Link href="/layanan" className="hover:text-white transition">Pembuatan Website</Link></li>
            <li><Link href="/layanan" className="hover:text-white transition">Sistem Manajemen</Link></li>
            <li><Link href="/layanan" className="hover:text-white transition">Manajemen Sosmed</Link></li>
            <li><Link href="/layanan" className="hover:text-white transition">Distribusi Konten</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-syne text-sm font-bold uppercase tracking-wider mb-6 text-neutral-500">Perusahaan</h4>
          <ul className="flex flex-col gap-4 text-sm text-neutral-300 font-manrope">
            <li><Link href="/tentang-kami" className="hover:text-white transition">Tentang Kami</Link></li>
            <li><Link href="/program" className="hover:text-white transition">Rekrutmen Mitra</Link></li>
          </ul>
        </div>
        
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="font-syne text-sm font-bold uppercase tracking-wider mb-6 text-neutral-500">Hubungi Kami</h4>
            <a 
              href="https://wa.me/6288221511946?text=Halo%20Ivok%20Grup%2C%20saya%20tertarik%20dengan%20layanan%20agensi%20digital%20Anda." 
              target="_blank" 
              rel="noreferrer"
              className="group flex items-center gap-4 p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-green-500/50 hover:bg-green-950/20 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-syne font-bold text-sm tracking-widest uppercase">Chat WhatsApp</span>
                <span className="font-manrope text-xs text-neutral-500 group-hover:text-neutral-700 transition-colors">Online & Siap Membantu</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Middle Center Info Complex */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10">
        {/* Social Media Center Area */}
        <div className="flex flex-col items-center justify-center mb-12">
          <h4 className="font-syne text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-neutral-500 text-center relative">
            <span className="relative z-10 px-4 bg-black">Jejaring Sosial Kami</span>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent z-0"></div>
          </h4>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/share/1GyDN5M3WF/" target="_blank" rel="noreferrer" aria-label="Facebook" className="w-12 h-12 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:-translate-y-2 hover:bg-blue-600 hover:text-white hover:border-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/ivokgrup?stkn=eXlnbHZoYnRja2k4" target="_blank" rel="noreferrer" aria-label="Instagram" className="w-12 h-12 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:-translate-y-2 hover:bg-pink-600 hover:text-white hover:border-pink-500 hover:shadow-[0_0_20px_rgba(219,39,119,0.6)] transition-all duration-300 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://tiktok.com/@ivok.grup" target="_blank" rel="noreferrer" aria-label="TikTok" className="w-12 h-12 rounded-full bg-neutral-900/50 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:-translate-y-2 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-300 backdrop-blur-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/><path d="M9 4v12"/><path d="M9 8h3a4 4 0 0 0 4-4"/></svg>
            </a>
          </div>
        </div>

        {/* Live Tracker & Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6">
          <div className="text-xs text-neutral-600 font-manrope order-2 md:order-1 flex-1">
            © 2026 Ivok Grup. All rights reserved.
          </div>

          {/* Futuristic Real-time Tracker Panel */}
          <div className="order-1 md:order-2 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-[#b259ff] rounded-full animate-pulse shadow-[0_0_8px_rgba(178,89,255,1)]"></span>
              <span className="text-[9px] font-syne uppercase tracking-[0.2em] text-[#b259ff] font-bold">SYSTEM ONLINE</span>
            </div>

            <div className="flex flex-col md:flex-row items-center bg-neutral-900/40 backdrop-blur-md border border-neutral-800/80 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] w-full md:w-auto">
              {/* Date Block */}
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-neutral-800/80 flex flex-col items-center justify-center w-full md:w-auto min-w-[140px] bg-gradient-to-b from-neutral-900/50 to-transparent">
                <span className="text-[9px] text-neutral-500 font-manrope uppercase tracking-widest mb-1.5">TANGGAL</span>
                <span className="text-xs font-syne font-bold text-neutral-300 tracking-wider">{dateStr}</span>
              </div>

              {/* Time Block (Digital Style) */}
              <div className="px-8 py-4 border-b md:border-b-0 md:border-r border-neutral-800/80 flex flex-col items-center justify-center w-full md:w-auto min-w-[160px] bg-black/40 relative overflow-hidden">
                <div className="absolute inset-0 bg-[#b259ff]/10 opacity-50 blur-xl"></div>
                <span className="text-[9px] text-neutral-500 font-manrope uppercase tracking-widest mb-1.5 relative z-10">WAKTU LOKAL</span>
                <span className="text-xl font-mono font-bold text-white tracking-[0.15em] drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] relative z-10">
                  {timeStr}
                </span>
              </div>

              {/* Live Visitors Block */}
              <div className="px-6 py-4 border-b md:border-b-0 md:border-r border-neutral-800/80 flex flex-col items-center justify-center w-full md:w-auto min-w-[140px] bg-gradient-to-b from-green-950/20 to-transparent">
                <span className="text-[9px] text-green-600/70 font-manrope uppercase tracking-widest mb-1.5">LIVE VISITORS</span>
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  <span className="text-lg font-syne font-bold text-green-400 tracking-wider drop-shadow-[0_0_12px_rgba(74,222,128,0.6)]">
                    {visitors.toLocaleString('id-ID')}
                  </span>
                </div>
              </div>

              {/* Weather Block */}
              <div className="px-6 py-4 flex flex-col items-center justify-center w-full md:w-auto min-w-[140px] bg-gradient-to-b from-[#b259ff]/10 to-transparent relative overflow-hidden">
                <span className="text-[9px] text-[#b259ff]/70 font-manrope uppercase tracking-widest mb-1.5">CUACA JAKARTA</span>
                <div className="flex items-center gap-2">
                  {weather ? getWeatherIcon(weather.code) : <span className="text-neutral-500 text-xs">...</span>}
                  <span className="text-lg font-syne font-bold text-[#b259ff] tracking-wider drop-shadow-[0_0_12px_rgba(178,89,255,0.4)]">
                    {weather ? `${weather.temp}°C` : "..."}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-3 flex-1 text-right">
            <button 
              onClick={() => {
                if (typeof window !== "undefined") {
                  if ((window as any).lenis) {
                    (window as any).lenis.scrollTo(0, { duration: 1.5 });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }
              }}
              className="text-xs text-neutral-600 font-manrope hover:text-white transition cursor-pointer relative z-10"
            >
              Kembali ke Atas
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
