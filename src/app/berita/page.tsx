"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const beritaTerbaru = [
  { slug: "viral-1", title: "Kisah Sukses UMKM yang Viral Lewat Strategi TikTok", date: "16 Sep 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60", desc: "Bagaimana sebuah brand lokal berhasil meraup miliaran rupiah berkat konten viral berdurasi 15 detik yang menggugah emosi." },
  { slug: "kreatif-1", title: "Tren Desain Visual Terkini untuk Memikat Audiens Gen Z", date: "14 Sep 2026", category: "Kreatif", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60", desc: "Membahas gaya desain UI/UX yang dinamis dan berani yang sangat disukai oleh target pasar muda di Indonesia." },
  { slug: "hiburan-1", title: "Mengemas Konten Edukasi Menjadi Hiburan Ringan", date: "10 Sep 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60", desc: "Tips dan trik menggabungkan unsur humor dan storytelling dalam penyampaian informasi yang berat agar mudah dicerna." },
  { slug: "mitra-1", title: "Profil Mitra: Kisah Inspiratif Bintang Digital Purwokerto", date: "05 Sep 2026", category: "Artikel Mitra", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60", desc: "Perjalanan seorang kreator daerah yang kini menjadi salah satu pilar penting di ekosistem digital raksasa Ivok Grup." },
];

const beritaLama = [
  { slug: "viral-2", title: "Video Promosi Lokal yang Tembus 1 Juta Views dalam 24 Jam", date: "01 Sep 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
  { slug: "kreatif-2", title: "Mengenal Seni Scrollytelling dalam Website Modern", date: "28 Aug 2026", category: "Kreatif", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60" },
  { slug: "hiburan-2", title: "Review Film: Elemen Sinematografi yang Bisa Ditiru Kreator", date: "25 Aug 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60" },
  { slug: "mitra-2", title: "Peluang Ekspansi Jaringan Mitra Ivok Grup di Jawa Tengah", date: "20 Aug 2026", category: "Artikel Mitra", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" },
  { slug: "viral-3", title: "Konten Trending Minggu Ini: Analisis Algoritma Instagram", date: "15 Aug 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
  { slug: "hiburan-3", title: "Di Balik Layar: Pembuatan Web Series Komedi Lokal", date: "10 Aug 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60" },
];

export default function BeritaPage() {
  const [dateRange, setDateRange] = useState("Memuat tanggal...");

  useEffect(() => {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(today.getMonth() - 1);
    
    const formatDate = (date: Date) => date.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
    setDateRange(`${formatDate(lastMonth)} - ${formatDate(today)}`);
  }, []);

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-20 px-6 md:px-20">
      <Navbar />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <Link href="/" className="text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition mb-4 inline-block border-b border-neutral-700 pb-1">
            ← Kembali ke Beranda
          </Link>
          <h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight mt-2">Berita & Artikel</h1>
          <p className="font-manrope text-neutral-400 mt-4 text-lg max-w-2xl">
            Wawasan industri, pembaruan ekosistem, dan informasi resmi seputar perkembangan Ivok Grup dan Ivoknews.
          </p>
        </div>

        {/* 4 Kotak Berita Terbaru */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
            {beritaTerbaru.map((item, index) => (
              <Link
                key={index}
                href={`/berita/${item.slug}`}
                className="group border border-neutral-800 rounded-3xl bg-neutral-950 flex flex-col hover:border-[#b259ff]/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(178,89,255,0.15)] transition-all duration-300 min-h-[380px] overflow-hidden"
              >
                <div className="w-full h-56 relative bg-neutral-900 border-b border-neutral-800 shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500" />
                </div>
                <div className="p-10 md:p-12 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-8">
                      <span className="text-xs md:text-sm font-syne text-[#b259ff] uppercase tracking-widest px-4 py-1.5 bg-neutral-900 rounded-full border border-neutral-800">
                        {item.category}
                      </span>
                      <span className="text-xs md:text-sm font-manrope text-neutral-500">{item.date}</span>
                    </div>
                    <h3 className="font-syne text-3xl md:text-4xl font-bold group-hover:text-white transition line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-manrope text-neutral-400 text-base md:text-lg mt-5 leading-relaxed line-clamp-3">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-neutral-900 flex justify-between items-center text-sm md:text-base font-syne uppercase tracking-wider text-neutral-400 group-hover:text-[#b259ff] transition">
                    <span>Baca Artikel Selengkapnya</span>
                    <span className="text-xl">→</span>
                  </div>
                </div>
              </Link>
            ))}
        </div>

        {/* Indeks Berita (Berita Lama) */}
        <div className="border-t border-neutral-900 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-1.5 h-8 bg-[#b259ff] rounded-full" />
              <h3 className="font-syne text-2xl font-bold">Indeks Berita</h3>
            </div>
            
            <div className="flex items-center gap-4 border border-neutral-800 rounded-lg p-2 bg-neutral-950">
              <span className="text-sm font-manrope text-neutral-400 pl-2">Pilih Tanggal</span>
              <select className="bg-transparent text-sm font-manrope text-white outline-none border-l border-neutral-800 pl-4 py-1 appearance-none cursor-pointer">
                <option>{dateRange}</option>
                <option>Bulan Sebelumnya</option>
                <option>Tahun Lalu</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {beritaLama.map((item, index) => (
              <Link
                key={index}
                href={`/berita/${item.slug}`}
                className="group p-4 border border-neutral-900 rounded-xl bg-neutral-950/50 flex items-center gap-6 hover:border-[#b259ff]/50 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(178,89,255,0.1)] transition-all duration-300"
              >
                <div className="w-24 h-24 bg-neutral-900 rounded-lg shrink-0 overflow-hidden relative border border-neutral-800">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition duration-500" />
                </div>
                <div className="flex flex-col justify-center flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-syne text-[#b259ff] uppercase tracking-widest">{item.category}</span>
                    <span className="text-[10px] font-manrope text-neutral-600">{item.date}</span>
                  </div>
                  <h4 className="font-syne text-base font-bold group-hover:text-neutral-300 transition line-clamp-2 leading-tight">
                    {item.title}
                  </h4>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 flex justify-center items-center gap-2 flex-wrap">
            <button className="w-10 h-10 rounded-full bg-[#b259ff] text-white font-manrope font-bold text-sm flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full border border-neutral-700 hover:border-white text-neutral-400 hover:text-white font-manrope font-bold text-sm flex items-center justify-center transition">2</button>
            <button className="w-10 h-10 rounded-full border border-neutral-700 hover:border-white text-neutral-400 hover:text-white font-manrope font-bold text-sm flex items-center justify-center transition">3</button>
            <span className="text-neutral-500 px-2">...</span>
            <button className="w-10 h-10 rounded-full border border-neutral-700 hover:border-white text-neutral-400 hover:text-white font-manrope font-bold text-sm flex items-center justify-center transition">999</button>
            <button className="px-6 h-10 rounded-full bg-[#b259ff] text-white font-manrope font-bold text-sm flex items-center justify-center hover:bg-[#b259ff]/80 transition">Next</button>
          </div>
        </div>

      </div>
    </main>
  );
}
