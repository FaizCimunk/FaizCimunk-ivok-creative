import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, User, Tag } from "lucide-react";
import Image from "next/image";

// Dummy data to simulate CMS
const getArticleData = (slug: string) => {
  // Mapping slug to specific images so they match the thumbnails perfectly
  let imageUrl = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"; // fallback
  
  if (slug.includes("viral")) imageUrl = "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1600&auto=format&fit=crop&q=80";
  if (slug.includes("kreatif")) imageUrl = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1600&auto=format&fit=crop&q=80";
  if (slug.includes("hiburan")) imageUrl = "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=1600&auto=format&fit=crop&q=80";
  if (slug.includes("mitra")) imageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&auto=format&fit=crop&q=80";

  return {
    title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    category: "BERITA VIRAL",
    date: "17 September 2026",
    time: "13:24 WIB",
    author: "Admin",
    organization: "Ivok Grup",
    editor: "Admin",
    image: imageUrl,
    content: [
      "Bagaimana sebuah brand lokal berhasil meraup miliaran rupiah berkat konten viral berdurasi 15 detik yang menggugah emosi. Di era digital saat ini, perhatian audiens adalah mata uang baru. Memahami algoritma tidak lagi cukup; Anda harus mampu menyentuh sisi emosional audiens dalam hitungan detik pertama.",
      "Ivok Grup telah mengamati tren pergeseran konsumsi media pada Generasi Z dan Milenial. Mereka cenderung mengabaikan iklan tradisional dan lebih memilih konten yang terasa organik, otentik, dan relevan dengan kehidupan sehari-hari.",
      "Melalui optimasi SEO dan distribusi konten yang terukur, kampanye digital ini tidak hanya viral sesaat, tetapi juga membangun retensi jangka panjang yang berdampak langsung pada peningkatan konversi penjualan secara signifikan."
    ],
    tags: ["Viral", "UMKM", "TikTok", "Digital Marketing", "SEO"]
  };
};

export function generateStaticParams() {
  return [
    { slug: "viral-1" },
    { slug: "kreatif-1" },
    { slug: "hiburan-1" },
    { slug: "mitra-1" },
  ];
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const article = getArticleData(resolvedParams.slug);

  return (
    <main className="bg-black text-white min-h-screen selection:bg-[#b259ff]/30 selection:text-white">
      <Navbar />
      
      {/* Background Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#b259ff]/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <article className="max-w-4xl mx-auto pt-40 pb-32 px-6 relative z-10">
        
        {/* Breadcrumb / Back Button */}
        <Link href="/berita" className="inline-flex items-center gap-2 text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-[#b259ff] transition mb-10 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Indeks Berita
        </Link>

        {/* Header Section */}
        <header className="mb-12">
          <span className="text-xs font-syne text-[#b259ff] uppercase tracking-widest px-4 py-1.5 bg-neutral-900 rounded-full border border-neutral-800 mb-6 inline-block">
            {article.category}
          </span>
          <h1 className="font-syne text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
            {article.title}
          </h1>
          
          {/* SEO Author Meta Data */}
          <div className="flex flex-wrap items-center gap-4 text-sm font-manrope text-neutral-400 border-y border-neutral-800/50 py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center border border-neutral-700 shrink-0">
                <User size={18} className="text-neutral-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-200">
                  {article.author}, <strong className="font-bold text-white">{article.organization}</strong>
                </span>
                <span className="text-xs">
                  {article.date} | {article.time}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="w-full h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden border border-neutral-800 mb-12 shadow-[0_0_40px_rgba(178,89,255,0.05)]">
          <div className="absolute inset-0 bg-neutral-900 animate-pulse" />
          <img 
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover relative z-10"
          />
        </div>

        {/* Article Body */}
        <div className="font-manrope text-lg text-neutral-300 leading-relaxed space-y-8 mb-16">
          {article.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* SEO Tags Section */}
        <div className="border-t border-neutral-800/50 pt-10 mb-10">
          <div className="flex items-center gap-2 mb-6">
            <Tag size={16} className="text-[#b259ff]" />
            <h3 className="font-syne font-bold text-sm tracking-widest uppercase">Tags</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {article.tags.map((tag, idx) => (
              <span key={idx} className="px-4 py-2 bg-neutral-900 border border-neutral-800 rounded-md text-sm font-manrope text-neutral-300 hover:border-[#b259ff]/50 hover:text-white transition cursor-pointer">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Editor Info */}
        <div className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-[#b259ff] animate-pulse" />
          <span className="font-manrope text-sm text-neutral-400">
            Editor: <strong className="text-neutral-200 font-bold">{article.editor}</strong>
          </span>
        </div>

      </article>

      <Footer />
    </main>
  );
}
