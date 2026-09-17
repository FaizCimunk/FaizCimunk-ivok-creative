import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function LayananPage() {
  const layananList = [
    { 
      slug: "pembuatan-website",
      title: "Pembuatan Website Landing Page Perusahaan", 
      desc: "Membangun kehadiran digital yang memukau dengan performa tinggi dan desain berstandar Awwwards." 
    },
    { 
      slug: "sistem-manajemen",
      title: "Sistem Manajemen Perusahaan", 
      desc: "Solusi perangkat lunak custom untuk mengotomatisasi operasional dan efisiensi bisnis Anda." 
    },
    { 
      slug: "manajemen-sosmed",
      title: "Manajemen Sosial Media", 
      desc: "Strategi konten, penjadwalan, dan interaksi audiens yang konsisten untuk memperkuat brand equity." 
    },
    { 
      slug: "distribusi-konten",
      title: "Distribusi Konten Terintegrasi", 
      desc: "Amplifikasi jangkauan konten secara masif melalui jaringan media dan kreator lokal terpilih." 
    },
  ];

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Glow background */}
      <div className="fixed top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#b259ff]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto pt-40 pb-32 px-6 md:px-20 relative z-10">
        <div className="mb-16">
          <Link href="/" className="text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition mb-4 inline-block">
            ← Kembali ke Beranda
          </Link>
          <h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight mt-2">Layanan & Solusi</h1>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {layananList.map((item, index) => (
            <Link 
              href={`/layanan/${item.slug}`} 
              key={index} 
              className="group p-8 md:p-10 border border-neutral-800 rounded-3xl bg-neutral-950/80 hover:bg-neutral-900 hover:border-[#b259ff]/30 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 backdrop-blur-sm relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#b259ff]/5 blur-3xl rounded-full group-hover:bg-[#b259ff]/20 transition-colors" />
              
              <div className="relative z-10">
                <span className="text-xs font-syne text-[#b259ff] uppercase tracking-widest font-bold">0{index + 1} // Layanan</span>
                <h3 className="font-syne text-2xl md:text-4xl font-bold mt-4 mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="font-manrope text-neutral-400 max-w-2xl text-lg">{item.desc}</p>
              </div>
              
              <div className="px-8 py-4 border border-neutral-700 text-white font-syne text-sm font-bold uppercase tracking-wider rounded-full group-hover:bg-white group-hover:text-black transition-all shrink-0 relative z-10 whitespace-nowrap">
                Lihat Detail
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
