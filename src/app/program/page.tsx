"use client";

import Navbar from "@/components/Navbar";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProgramPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <main className="bg-black text-white min-h-screen pt-32 pb-32 px-6 md:px-20 overflow-hidden relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#b259ff] opacity-[0.03] blur-[150px] rounded-full pointer-events-none" />
      
      <Navbar />
      
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-16 text-center max-w-4xl mx-auto">
          <Link href="/" className="text-xs font-syne uppercase tracking-widest text-[#b259ff] hover:text-white transition mb-6 inline-block">
            ← KEMBALI KE BERANDA
          </Link>
          <h1 className="font-syne text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mt-2 mb-6 text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">
            Ekspansi <br className="hidden md:block"/> Tanpa Batas.
          </h1>
          <p className="font-manrope text-neutral-400 mt-4 text-lg md:text-xl leading-relaxed">
            Jadilah bagian dari dominasi digital. Kami mengundang para visioner di seluruh Nusantara untuk menjadi Mitra Eksklusif Ivok Grup dan membangun kerajaan media bersama.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: "Sistem Terintegrasi",
              desc: "Akses ke infrastruktur server tingkat tinggi, CMS eksklusif, dan alat analitik berbasis AI milik Ivok Grup."
            },
            {
              title: "Bagi Hasil Skala Besar",
              desc: "Skema profit sharing yang transparan dan kompetitif dari jaringan periklanan serta klien agensi nasional."
            },
            {
              title: "Pelatihan Premium",
              desc: "Mentoring langsung dari pakar industri untuk menguasai algoritma, jurnalisme modern, dan manajemen audiens."
            }
          ].map((benefit, i) => (
            <div key={i} className="p-8 border border-neutral-800 rounded-3xl bg-neutral-900/40 backdrop-blur-sm hover:border-[#b259ff]/50 hover:bg-[#b259ff]/5 transition-all duration-500 group">
              <div className="w-12 h-12 rounded-full bg-black border border-neutral-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <div className="w-2 h-2 rounded-full bg-[#b259ff] animate-pulse" />
              </div>
              <h4 className="font-syne text-xl font-bold mb-3 text-white">{benefit.title}</h4>
              <p className="font-manrope text-neutral-400 text-sm leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={itemVariants} className="relative p-10 md:p-16 border border-neutral-800/80 rounded-[3rem] bg-gradient-to-b from-neutral-900/80 to-black overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b259ff] opacity-10 blur-[100px] pointer-events-none" />
          
          <div className="max-w-2xl relative z-10">
            <h3 className="font-syne text-3xl md:text-5xl font-bold mb-4">Mulai Perjalanan Anda</h3>
            <p className="font-manrope text-neutral-400 leading-relaxed text-lg">
              Kapasitas mitra di setiap daerah sangat terbatas. Amankan posisi Anda sekarang dan jadilah penguasa ekosistem digital di wilayah Anda.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <a
              href="https://o1tofpi856.zite.so"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-syne font-bold tracking-widest uppercase text-sm rounded-full overflow-hidden transition-all hover:scale-105"
            >
              <div className="absolute inset-0 bg-[#b259ff] transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-500" />
              <span className="relative z-10 text-white flex items-center gap-3">
                Daftar Sekarang
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
