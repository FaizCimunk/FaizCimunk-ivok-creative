export const layananList = [
  {
    title: "Pembuatan Website",
    desc: "Website custom performa tinggi (Next.js & React) untuk profil perusahaan, e-commerce, hingga web-app kompleks.",
    slug: "pembuatan-website"
  },
  {
    title: "Pembuatan Aplikasi & Sistem",
    desc: "Sistem informasi, ERP, dashboard analitik, dan aplikasi berbasis web/mobile khusus untuk operasional Anda.",
    slug: "pembuatan-aplikasi-sistem"
  },
  {
    title: "Desain UI/UX",
    desc: "Riset dan perancangan antarmuka digital yang estetis, modern, dan memberikan pengalaman pengguna terbaik.",
    slug: "desain-ui-ux"
  },
  {
    title: "Sosial Media & Konten Kreatif",
    desc: "Manajemen media sosial, produksi video sinematik, desain grafis, dan kampanye digital yang memikat audiens.",
    slug: "sosial-media-konten-kreatif"
  },
];

export const beritaTerbaru = [
  { slug: "viral-1", title: "Kisah Sukses UMKM yang Viral Lewat Strategi TikTok", date: "16 Sep 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60", desc: "Bagaimana sebuah brand lokal berhasil meraup miliaran rupiah berkat konten viral berdurasi 15 detik yang menggugah emosi." },
  { slug: "kreatif-1", title: "Tren Desain Visual Terkini untuk Memikat Audiens Gen Z", date: "14 Sep 2026", category: "Kreatif", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60", desc: "Membahas gaya desain UI/UX yang dinamis dan berani yang sangat disukai oleh target pasar muda di Indonesia." },
  { slug: "hiburan-1", title: "Mengemas Konten Edukasi Menjadi Hiburan Ringan", date: "10 Sep 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60", desc: "Tips dan trik menggabungkan unsur humor dan storytelling dalam penyampaian informasi yang berat agar mudah dicerna." },
  { slug: "mitra-1", title: "Profil Mitra: Kisah Inspiratif Bintang Digital Purwokerto", date: "05 Sep 2026", category: "Artikel Mitra", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60", desc: "Perjalanan seorang kreator daerah yang kini menjadi salah satu pilar penting di ekosistem digital raksasa Ivok Grup." },
];

export const beritaLama = [
  { slug: "viral-2", title: "Video Promosi Lokal yang Tembus 1 Juta Views dalam 24 Jam", date: "01 Sep 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
  { slug: "kreatif-2", title: "Mengenal Seni Scrollytelling dalam Website Modern", date: "28 Aug 2026", category: "Kreatif", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=60" },
  { slug: "hiburan-2", title: "Review Film: Elemen Sinematografi yang Bisa Ditiru Kreator", date: "25 Aug 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60" },
  { slug: "mitra-2", title: "Peluang Ekspansi Jaringan Mitra Ivok Grup di Jawa Tengah", date: "20 Aug 2026", category: "Artikel Mitra", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60" },
  { slug: "viral-3", title: "Konten Trending Minggu Ini: Analisis Algoritma Instagram", date: "15 Aug 2026", category: "Berita Viral", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60" },
  { slug: "hiburan-3", title: "Di Balik Layar: Pembuatan Web Series Komedi Lokal", date: "10 Aug 2026", category: "Hiburan", image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800&auto=format&fit=crop&q=60" },
];

export const serviceData: Record<string, any> = {
  "pembuatan-website": {
    title: "Pembuatan Website",
    category: "Development",
    heroImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Kami merancang dan mengembangkan website berperforma tinggi menggunakan teknologi modern (React, Next.js). Bukan sekadar template, tapi platform kustom yang mewakili identitas brand Anda dan dioptimalkan untuk kecepatan serta SEO.",
    benefits: [
      "Performa Maksimal: Kecepatan muat (loading) instan.",
      "Optimasi SEO: Arsitektur ramah mesin pencari.",
      "Desain Responsif: Tampil sempurna di PC, tablet, maupun mobile.",
      "Aman & Skalabel: Siap menampung lonjakan trafik kapan saja."
    ],
    workflow: [
      "1. Discovery: Memahami tujuan bisnis dan target audiens Anda.",
      "2. Wireframing: Merancang kerangka dasar antarmuka pengguna.",
      "3. Development: Pengkodean menggunakan tech-stack modern.",
      "4. Testing & Launch: Uji QA menyeluruh sebelum dirilis ke publik."
    ]
  },
  "pembuatan-aplikasi-sistem": {
    title: "Pembuatan Aplikasi & Sistem",
    category: "Engineering",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Membangun tulang punggung digital untuk bisnis Anda. Mulai dari sistem ERP, CRM, dashboard analitik, hingga aplikasi berbasis web yang kompleks untuk mengotomatisasi proses bisnis Anda.",
    benefits: [
      "Otomatisasi Bisnis: Kurangi human-error dan percepat proses.",
      "Integrasi API: Terhubung mulus dengan layanan pihak ketiga.",
      "Keamanan Data: Enkripsi dan perlindungan data tingkat tinggi.",
      "Kustomisasi Penuh: Sistem menyesuaikan SOP Anda, bukan sebaliknya."
    ],
    workflow: [
      "1. Requirement Gathering: Spesifikasi teknis dan analisis sistem.",
      "2. System Architecture: Merancang database dan struktur API.",
      "3. Agile Development: Pembuatan bertahap dengan feedback reguler.",
      "4. Deployment & Maintenance: Instalasi server dan pemeliharaan berkala."
    ]
  },
  "desain-ui-ux": {
    title: "Desain UI/UX",
    category: "Design",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Kami menciptakan pengalaman visual yang memikat dan intuitif. Desain yang baik tidak hanya indah dipandang, tetapi juga memandu pengguna secara alami untuk mencapai tujuan mereka tanpa hambatan.",
    benefits: [
      "User-Centric: Berfokus pada kemudahan pengguna akhir.",
      "Konsistensi Visual: Menjaga identitas brand di setiap halaman.",
      "Prototipe Interaktif: Lihat dan rasakan desain sebelum di-coding.",
      "Tingkat Konversi Tinggi: Desain yang dirancang untuk closing."
    ],
    workflow: [
      "1. User Research: Menganalisis perilaku target pengguna.",
      "2. Low-fi Prototyping: Sketsa awal alur penggunaan.",
      "3. High-fi Design: Penerapan warna, tipografi, dan aset visual.",
      "4. Usability Testing: Uji coba desain untuk validasi fungsi."
    ]
  },
  "sosial-media-konten-kreatif": {
    title: "Sosial Media & Konten Kreatif",
    category: "Marketing",
    heroImage: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    description: "Ubah pengikut menjadi pelanggan setia. Kami mengelola identitas digital Anda melalui produksi video sinematik, desain grafis yang mencolok, dan copywriting yang menghipnotis untuk kampanye sosial media.",
    benefits: [
      "Brand Awareness: Tingkatkan jangkauan organik brand Anda.",
      "Engagement Aktif: Bangun komunitas yang berinteraksi dengan brand.",
      "Konten Viral: Strategi distribusi yang mengikuti tren algoritma.",
      "Visual Premium: Kualitas foto dan video standar agensi profesional."
    ],
    workflow: [
      "1. Content Strategy: Perencanaan kalender editorial bulanan.",
      "2. Production: Syuting video, fotografi, dan desain aset.",
      "3. Copywriting & Scheduling: Penulisan caption dan penjadwalan tayang.",
      "4. Analytics Report: Laporan performa dan wawasan pertumbuhan."
    ]
  }
};

export const getArticleData = (slug: string) => {
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
