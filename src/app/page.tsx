"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import Link from "next/link";
import { Globe, Database, Smartphone, Megaphone, Video, Users } from "lucide-react";
import LightningStrike from "@/components/LightningStrike";

const beritaTerbaru = [
  { slug: "viral-1", title: "Kisah Sukses UMKM yang Viral Lewat Strategi TikTok", date: "16 Sep 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
  { slug: "kreatif-1", title: "Tren Desain Visual Terkini untuk Memikat Audiens Gen Z", date: "14 Sep 2026", category: "Kreatif", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60" },
  { slug: "hiburan-1", title: "Mengemas Konten Edukasi Menjadi Hiburan Ringan", date: "10 Sep 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60" },
  { slug: "mitra-1", title: "Profil Mitra: Kisah Inspiratif Bintang Digital Purwokerto", date: "05 Sep 2026", category: "Artikel Mitra", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" },
];

const beritaLama = [
  { slug: "viral-2", title: "Video Promosi Lokal yang Tembus 1 Juta Views dalam 24 Jam", date: "01 Sep 2026", category: "Berita Viral" },
  { slug: "kreatif-2", title: "Mengenal Seni Scrollytelling dalam Website Modern", date: "28 Aug 2026", category: "Kreatif" },
  { slug: "hiburan-2", title: "Review Film: Elemen Sinematografi yang Bisa Ditiru Kreator", date: "25 Aug 2026", category: "Hiburan" },
  { slug: "mitra-2", title: "Peluang Ekspansi Jaringan Mitra Ivok Grup di Jawa Tengah", date: "20 Aug 2026", category: "Artikel Mitra" },
  { slug: "viral-3", title: "Konten Trending Minggu Ini: Analisis Algoritma Instagram", date: "15 Aug 2026", category: "Berita Viral" },
  { slug: "hiburan-3", title: "Di Balik Layar: Pembuatan Web Series Komedi Lokal", date: "10 Aug 2026", category: "Hiburan" },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white min-h-screen relative">
      <Navbar />

      <SequenceScroll />

      <section className="-mt-[100vh] relative z-10 py-32 px-6 md:px-20 bg-gradient-to-b from-transparent via-neutral-950 to-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-syne uppercase tracking-widest text-neutral-400">Pilar Utama Kami</span>
            <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight mt-4">
              Ecosystem digital terintegrasi untuk pertumbuhan bisnismu.
            </h2>
          </div>
          <div className="flex flex-col gap-6 font-manrope text-neutral-400 w-full mt-4">
            <p className="text-base md:text-lg leading-relaxed text-center mx-auto max-w-xl">
              Solusi digital tingkat lanjut: arsitektur web performa tinggi, sistem custom, hingga distribusi konten skala besar.
            </p>
            
            {/* Minimalist Stat Boxes with Lightning */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 relative max-w-2xl mx-auto w-full">
              {/* Box 1: Mitra */}
              <Link href="/program" className="block group relative overflow-hidden rounded-2xl bg-black/40 border border-neutral-800 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:border-[#b259ff]/70 hover:shadow-[0_0_40px_rgba(178,89,255,0.3)] hover:-translate-y-2">
                
                {/* Petir (Lightning) Flash Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-[flash_0.5s_ease-out] pointer-events-none z-20" />
                
                {/* Tangan Keluar Effect */}
                <div className="absolute -bottom-16 -right-10 md:-bottom-20 md:-right-12 text-[7rem] md:text-[9rem] opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 group-hover:-rotate-12 transition-all duration-500 drop-shadow-[0_0_20px_rgba(178,89,255,0.8)] z-0">
                  🤝
                </div>

                {/* Subtle Glow */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#b259ff] rounded-full mix-blend-screen filter blur-[40px] opacity-20 group-hover:opacity-50 transition-all duration-500 z-0" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="font-syne text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 group-hover:to-white transition-all duration-300 drop-shadow-xl">900+</span>
                  <span className="font-syne text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors duration-300 mt-2 bg-black/60 px-3 py-1 rounded-full border border-white/5">Mitra Aktif</span>
                </div>
              </Link>

              {/* Box 2: Klien */}
              <Link href="/layanan" className="block group relative overflow-hidden rounded-2xl bg-black/40 border border-neutral-800 p-6 md:p-8 backdrop-blur-md transition-all duration-500 hover:border-[#b259ff]/70 hover:shadow-[0_0_40px_rgba(178,89,255,0.3)] hover:-translate-y-2">
                
                {/* Petir (Lightning) Flash Effect */}
                <div className="absolute inset-0 bg-white opacity-0 group-hover:animate-[flash_0.5s_ease-out_0.1s] pointer-events-none z-20" />
                
                {/* Tangan Keluar Effect */}
                <div className="absolute -bottom-16 -right-10 md:-bottom-20 md:-right-12 text-[7rem] md:text-[9rem] opacity-0 group-hover:opacity-100 translate-y-10 translate-x-5 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:rotate-12 transition-all duration-500 drop-shadow-[0_0_20px_rgba(178,89,255,0.8)] z-0">
                  🦾
                </div>

                {/* Subtle Glow */}
                <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-indigo-500 rounded-full mix-blend-screen filter blur-[40px] opacity-20 group-hover:opacity-50 transition-all duration-500 z-0" />
                
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="font-syne text-5xl md:text-6xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 group-hover:to-white transition-all duration-300 drop-shadow-xl">100+</span>
                  <span className="font-syne text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors duration-300 mt-2 bg-black/60 px-3 py-1 rounded-full border border-white/5">Klien Puas</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-16 px-6 md:px-20 bg-black overflow-hidden">
        {/* Glow background behind news */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#b259ff]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="font-syne text-3xl font-bold">Artikel Berita Terkini</h3>
              <p className="font-manrope text-neutral-400 text-sm mt-2">Wawasan dan pembaruan terbaru dari ekosistem kami.</p>
            </div>
            <Link href="/berita" className="hidden md:inline-block text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition border-b border-neutral-700 pb-1">
              Lihat Semua Berita
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {beritaTerbaru.map((item, index) => (
              <Link
                key={index}
                href={`/berita/${item.slug}`}
                className="group border border-neutral-800 rounded-2xl bg-neutral-950 flex flex-col hover:border-[#b259ff]/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(178,89,255,0.15)] transition-all duration-300 min-h-[300px] overflow-hidden"
              >
                <div className="w-full h-40 relative bg-neutral-900 border-b border-neutral-800 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500" />
                </div>
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-syne text-neutral-400 uppercase tracking-widest px-2 py-1 bg-neutral-900 rounded-full border border-neutral-800">
                        {item.category}
                      </span>
                      <span className="text-[10px] font-manrope text-neutral-500">{item.date}</span>
                    </div>
                    <h4 className="font-syne text-lg font-bold group-hover:text-white transition line-clamp-3 leading-tight">
                      {item.title}
                    </h4>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <span className="text-[#b259ff] transform group-hover:translate-x-1 transition duration-300 text-sm">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/berita" className="inline-block text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition border-b border-neutral-700 pb-1">
              Lihat Semua Berita
            </Link>
          </div>
        </div>
      </section>
      
      {/* Efek Petir Transisi */}
      <LightningStrike />

      <section className="relative z-10 pb-20 px-6 md:px-20 bg-black overflow-hidden">
        {/* Glow background behind services */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#b259ff]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h3 className="font-syne text-3xl font-bold">Layanan Kami</h3>
              <p className="font-manrope text-neutral-400 text-sm mt-2">Solusi digital terintegrasi untuk memaksimalkan potensi bisnis Anda.</p>
            </div>
            <Link href="/layanan" className="hidden md:inline-block text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition border-b border-neutral-700 pb-1">
              Lihat Semua Layanan
            </Link>
          </div>
          
          <div className="p-8 md:p-12 border border-neutral-800 rounded-3xl bg-neutral-950 flex flex-col md:flex-row items-center justify-around gap-8 md:gap-4 overflow-x-auto hide-scrollbar">
            
            <Link href="/layanan/pembuatan-website" className="flex flex-col items-center text-center group shrink-0 min-w-[150px]">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center mb-4 transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110 group-active:bg-white group-active:text-black group-active:scale-95 duration-300">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <h5 className="font-syne font-bold text-sm text-neutral-400 group-hover:text-white group-active:text-white transition">Pembuatan Website</h5>
            </Link>

            <div className="hidden md:block w-px h-16 bg-neutral-800 shrink-0"></div>

            <Link href="/layanan/sistem-manajemen" className="flex flex-col items-center text-center group shrink-0 min-w-[150px]">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center mb-4 transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110 group-active:bg-white group-active:text-black group-active:scale-95 duration-300">
                <Database size={28} strokeWidth={1.5} />
              </div>
              <h5 className="font-syne font-bold text-sm text-neutral-400 group-hover:text-white group-active:text-white transition">Sistem Manajemen</h5>
            </Link>

            <div className="hidden md:block w-px h-16 bg-neutral-800 shrink-0"></div>

            <Link href="/layanan/manajemen-sosmed" className="flex flex-col items-center text-center group shrink-0 min-w-[150px]">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center mb-4 transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110 group-active:bg-white group-active:text-black group-active:scale-95 duration-300">
                <Smartphone size={28} strokeWidth={1.5} />
              </div>
              <h5 className="font-syne font-bold text-sm text-neutral-400 group-hover:text-white group-active:text-white transition">Manajemen Sosmed</h5>
            </Link>

            <div className="hidden md:block w-px h-16 bg-neutral-800 shrink-0"></div>

            <Link href="/layanan/distribusi-konten" className="flex flex-col items-center text-center group shrink-0 min-w-[150px]">
              <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 flex items-center justify-center mb-4 transition-all group-hover:bg-white group-hover:text-black group-hover:scale-110 group-active:bg-white group-active:text-black group-active:scale-95 duration-300">
                <Megaphone size={28} strokeWidth={1.5} />
              </div>
              <h5 className="font-syne font-bold text-sm text-neutral-400 group-hover:text-white group-active:text-white transition">Distribusi Konten</h5>
            </Link>

          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/layanan" className="inline-block text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition border-b border-neutral-700 pb-1">
              Lihat Semua Layanan
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
