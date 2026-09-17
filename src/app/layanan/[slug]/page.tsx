import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ChevronRight, Monitor, Smartphone, Database, Megaphone, Zap, BarChart, ShieldCheck } from "lucide-react";

const serviceData = {
  "pembuatan-website": {
    title: "Pembuatan Website & Landing Page",
    subtitle: "Solusi Digital Berstandar Awwwards",
    description: "Kami membangun kehadiran digital yang tidak hanya memukau secara visual, tetapi juga dioptimalkan untuk performa tinggi, konversi, dan kecepatan akses.",
    icon: <Monitor size={48} className="text-[#b259ff]" strokeWidth={1} />,
    benefits: [
      { title: "Desain Premium", desc: "Tampilan antarmuka kelas dunia yang meningkatkan kredibilitas brand Anda." },
      { title: "Performa Super Cepat", desc: "Dioptimalkan menggunakan teknologi Next.js terbaru untuk kecepatan maksimal." },
      { title: "Responsif di Semua Layar", desc: "Tampil sempurna di desktop, tablet, maupun perangkat mobile terkecil." },
      { title: "SEO Friendly", desc: "Struktur kode yang disukai mesin pencari seperti Google." },
    ],
    workflow: [
      { step: "01", title: "Konsultasi & Riset", desc: "Memahami visi brand Anda dan merumuskan strategi digital yang tepat." },
      { step: "02", title: "UI/UX Design", desc: "Membuat wireframe dan desain visual interaktif untuk disetujui." },
      { step: "03", title: "Pengembangan (Coding)", desc: "Menerjemahkan desain ke dalam kode yang bersih dan berperforma tinggi." },
      { step: "04", title: "Testing & Peluncuran", desc: "Uji coba komprehensif sebelum website siap dipublikasikan ke audiens." },
    ]
  },
  "sistem-manajemen": {
    title: "Sistem Manajemen Perusahaan",
    subtitle: "Otomatisasi & Efisiensi Skala Enterprise",
    description: "Tinggalkan proses manual yang memakan waktu. Kami merancang perangkat lunak kustom yang mengintegrasikan seluruh operasional bisnis Anda dalam satu platform yang aman.",
    icon: <Database size={48} className="text-[#b259ff]" strokeWidth={1} />,
    benefits: [
      { title: "Dashboard Terpusat", desc: "Pantau seluruh aktivitas perusahaan dari satu layar secara real-time." },
      { title: "Otomatisasi Proses", desc: "Kurangi human error dan percepat alur kerja tim Anda." },
      { title: "Keamanan Tingkat Tinggi", desc: "Arsitektur cloud yang tangguh untuk melindungi data sensitif." },
      { title: "Skalabilitas", desc: "Sistem yang tumbuh seiring dengan perkembangan bisnis Anda." },
    ],
    workflow: [
      { step: "01", title: "Analisis Kebutuhan", desc: "Pemetaan proses bisnis dan identifikasi masalah utama (pain points)." },
      { step: "02", title: "Perancangan Arsitektur", desc: "Desain database dan blueprint sistem yang efisien." },
      { step: "03", title: "Agile Development", desc: "Pengembangan bertahap di mana Anda bisa melihat progres secara rutin." },
      { step: "04", title: "Implementasi & Training", desc: "Pemasangan sistem dan pelatihan intensif untuk tim Anda." },
    ]
  },
  "manajemen-sosmed": {
    title: "Manajemen Sosial Media",
    subtitle: "Membangun Komunitas & Brand Equity",
    description: "Sosial media bukan sekadar tempat posting. Kami membantu Anda merancang strategi konten, penjadwalan, dan interaksi untuk menciptakan audiens yang loyal.",
    icon: <Smartphone size={48} className="text-[#b259ff]" strokeWidth={1} />,
    benefits: [
      { title: "Strategi Konten", desc: "Kalender editorial yang terencana dan sesuai dengan tren terkini." },
      { title: "Desain Visual Memukau", desc: "Feed Instagram & Tiktok yang estetik dan konsisten dengan identitas brand." },
      { title: "Manajemen Komunitas", desc: "Balasan cepat dan interaktif yang membuat followers merasa dihargai." },
      { title: "Laporan Analitik", desc: "Data komprehensif untuk mengukur pertumbuhan dan konversi." },
    ],
    workflow: [
      { step: "01", title: "Audit & Strategi", desc: "Menganalisis performa saat ini dan menentukan arah kampanye baru." },
      { step: "02", title: "Produksi Konten", desc: "Pembuatan grafis, video pendek, dan copywriting yang memikat." },
      { step: "03", title: "Penjadwalan Otomatis", desc: "Publikasi di jam-jam prime time untuk interaksi maksimal." },
      { step: "04", title: "Evaluasi Bulanan", desc: "Rapat bulanan untuk membahas insight dan optimasi bulan depan." },
    ]
  },
  "distribusi-konten": {
    title: "Distribusi Konten Terintegrasi",
    subtitle: "Jangkauan Masif Secara Instan",
    description: "Punya konten bagus tapi tidak ada yang melihat? Kami memiliki jaringan lebih dari 900+ media publisher dan ribuan kreator lokal untuk meledakkan jangkauan kampanye Anda.",
    icon: <Megaphone size={48} className="text-[#b259ff]" strokeWidth={1} />,
    benefits: [
      { title: "Jaringan 900+ Media", desc: "Akses instan ke ratusan portal berita nasional dan daerah." },
      { title: "Kolaborasi Influencer", desc: "Bekerja sama dengan KOL (Key Opinion Leader) yang relevan." },
      { title: "Virality Engineering", desc: "Strategi distribusi silang untuk menciptakan efek viral yang organik." },
      { title: "Laporan Terukur", desc: "Transparansi jumlah tayangan, klik, dan jangkauan audiens sesungguhnya." },
    ],
    workflow: [
      { step: "01", title: "Pemetaan Target Audiens", desc: "Menentukan demografi dan platform yang paling cocok." },
      { step: "02", title: "Seleksi Jaringan", desc: "Memilih portal berita dan kreator yang sejalan dengan kampanye." },
      { step: "03", title: "Distribusi Serentak", desc: "Menyebarkan konten secara masif melalui jaringan terpusat kami." },
      { step: "04", title: "Monitoring Real-time", desc: "Pemantauan hasil distribusi dan pelaporan akhir yang komprehensif." },
    ]
  }
};

export function generateStaticParams() {
  return Object.keys(serviceData).map((slug) => ({
    slug: slug,
  }));
}

export default async function LayananDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const service = serviceData[resolvedParams.slug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 md:px-20 overflow-hidden">
        {/* Glow background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#b259ff]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <Link href="/layanan" className="inline-flex items-center text-xs font-syne uppercase tracking-widest text-neutral-400 hover:text-white transition mb-8 border border-neutral-800 rounded-full px-4 py-2 hover:bg-neutral-900">
            <ChevronRight size={14} className="rotate-180 mr-2" />
            Kembali ke Daftar Layanan
          </Link>
          
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-neutral-950 border border-neutral-800 rounded-3xl flex items-center justify-center">
              {service.icon}
            </div>
          </div>

          <h1 className="font-syne text-5xl md:text-7xl font-bold tracking-tight mb-6">
            {service.title}
          </h1>
          <p className="font-manrope text-neutral-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-20 bg-neutral-950 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-syne uppercase tracking-[0.2em] text-[#b259ff] font-bold">Benefit Utama</span>
            <h2 className="font-syne text-3xl md:text-5xl font-bold mt-4">Kenapa Memilih Kami?</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 border border-neutral-800 rounded-2xl bg-black hover:border-[#b259ff]/50 transition-colors group flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center shrink-0 group-hover:bg-[#b259ff]/10 transition-colors">
                  <CheckCircle2 size={24} className="text-neutral-500 group-hover:text-[#b259ff] transition-colors" />
                </div>
                <div>
                  <h4 className="font-syne text-xl font-bold mb-2">{benefit.title}</h4>
                  <p className="font-manrope text-neutral-400 leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-24 px-6 md:px-20 bg-black relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-syne uppercase tracking-[0.2em] text-[#b259ff] font-bold">Proses Terstruktur</span>
            <h2 className="font-syne text-3xl md:text-5xl font-bold mt-4">Alur Kerja Kami</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {service.workflow.map((item, idx) => (
              <div key={idx} className="relative p-8 border border-neutral-800 rounded-3xl bg-neutral-950/50 flex flex-col h-full overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#b259ff]/5 blur-3xl rounded-full group-hover:bg-[#b259ff]/20 transition-colors" />
                
                <span className="font-mono text-5xl font-bold text-neutral-800 mb-6">{item.step}</span>
                <h4 className="font-syne text-xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="font-manrope text-neutral-400 text-sm leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 px-6 md:px-20 bg-gradient-to-t from-neutral-950 to-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[#b259ff]/5 blur-[200px]" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-syne text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Siap untuk Melangkah Lebih Jauh?
          </h2>
          <p className="font-manrope text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
            Jangan tunda pertumbuhan bisnis Anda. Diskusikan kebutuhan Anda bersama pakar dari Ivok Grup dan wujudkan visi digital Anda hari ini.
          </p>
          <a
            href="https://fug8wsvkzm.zite.so"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 bg-white text-black font-syne text-lg font-bold uppercase tracking-widest rounded-full hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            PESAN LAYANAN SEKARANG
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
