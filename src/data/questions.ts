import { Question } from '../types';

// High quality educational SVG Visual Assets for Bahasa Indonesia Kelas 3 SD
const SVG_ICONS = {
  // Bagan Perbandingan Teks Fiksi vs Teks Fakta
  fiksiVsFakta: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 620 200" width="100%" height="100%">
      <rect width="620" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="310" y="26" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">Perbandingan: Teks Fiksi vs Teks Fakta (Nonfiksi)</text>
      
      <!-- Kolom Kiri: Teks Fiksi -->
      <g transform="translate(20, 42)">
        <rect width="280" height="142" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <circle cx="40" cy="32" r="18" fill="#e9d5ff"/>
        <text x="40" y="38" font-family="sans-serif" font-size="20" text-anchor="middle">🧚📖</text>
        <text x="70" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6b21a8">TEKS FIKSI (REKAAN)</text>
        <text x="70" y="48" font-family="sans-serif" font-size="9.5" fill="#7e22ce">Khayalan &amp; Imajinasi Pengarang</text>
        
        <line x1="15" y1="62" x2="265" y2="62" stroke="#d8b4fe" stroke-width="1.5"/>
        <text x="20" y="80" font-family="sans-serif" font-size="10" fill="#581c87">• Cerita tidak nyata / khayalan</text>
        <text x="20" y="98" font-family="sans-serif" font-size="10" fill="#581c87">• Bertujuan menghibur pembaca</text>
        <text x="20" y="116" font-family="sans-serif" font-size="10" fill="#581c87">• Ada tokoh, watak, latar, &amp; pesan amanat</text>
        <text x="20" y="132" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#7e22ce">Contoh: Dongeng fabel hewan, cerpen, fabel</text>
      </g>
      
      <!-- Kolom Kanan: Teks Fakta -->
      <g transform="translate(320, 42)">
        <rect width="280" height="142" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="40" cy="32" r="18" fill="#bfdbfe"/>
        <text x="40" y="38" font-family="sans-serif" font-size="20" text-anchor="middle">🌍📰</text>
        <text x="70" y="32" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af">TEKS FAKTA (NONFIKSI)</text>
        <text x="70" y="48" font-family="sans-serif" font-size="9.5" fill="#2563eb">Kenyataan &amp; Informasi Nyata</text>
        
        <line x1="15" y1="62" x2="265" y2="62" stroke="#93c5fd" stroke-width="1.5"/>
        <text x="20" y="80" font-family="sans-serif" font-size="10" fill="#1e3a8a">• Berisi kejadian nyata / peristiwa nyata</text>
        <text x="20" y="98" font-family="sans-serif" font-size="10" fill="#1e3a8a">• Dapat dibuktikan kebenarannya</text>
        <text x="20" y="116" font-family="sans-serif" font-size="10" fill="#1e3a8a">• Berdasarkan fakta alam, data, &amp; bukti</text>
        <text x="20" y="132" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#2563eb">Contoh: Berita, ensiklopedia hewan, sains</text>
      </g>
    </svg>
  `)}`,

  // Bagan Unsur Intrinsik Cerita Fiksi
  unsurCeritaFiksi: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 190" width="100%" height="100%">
      <rect width="600" height="190" rx="16" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">4 Unsur Penting dalam Cerita Fiksi (Dongeng &amp; Cerita Anak)</text>
      
      <!-- Unsur 1: Tokoh & Watak -->
      <g transform="translate(15, 38)">
        <rect width="135" height="135" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🦊🐰</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">1. TOKOH</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#166534" text-anchor="middle">&amp; WATAK</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bbf7d0"/>
        <text x="67.5" y="94" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Pelaku cerita</text>
        <text x="67.5" y="108" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">&amp; sifat/karakter</text>
        <text x="67.5" y="122" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">(baik/buruk)</text>
      </g>
      
      <!-- Unsur 2: Latar (Tempat & Waktu) -->
      <g transform="translate(160, 38)">
        <rect width="135" height="135" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">🌲🏡</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2. LATAR</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#1e40af" text-anchor="middle">TEMPAT &amp; WAKTU</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#bfdbfe"/>
        <text x="67.5" y="94" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Di mana cerita terjadi</text>
        <text x="67.5" y="108" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">(hutan, sungai)</text>
        <text x="67.5" y="122" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">&amp; kapan waktunya</text>
      </g>
      
      <!-- Unsur 3: Alur Cerita -->
      <g transform="translate(305, 38)">
        <rect width="135" height="135" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">📜➡️</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">3. ALUR</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#a16207" text-anchor="middle">JALAN CERITA</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#fef08a"/>
        <text x="67.5" y="94" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">Rangkaian peristiwa</text>
        <text x="67.5" y="108" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">dari awal,</text>
        <text x="67.5" y="122" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">masalah, ke akhir</text>
      </g>
      
      <!-- Unsur 4: Amanat / Pesan Moral -->
      <g transform="translate(450, 38)">
        <rect width="135" height="135" rx="10" fill="#fdf2f8" stroke="#ec4899" stroke-width="1.5"/>
        <text x="67.5" y="32" font-family="sans-serif" font-size="24" text-anchor="middle">💎✨</text>
        <text x="67.5" y="55" font-family="sans-serif" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">4. AMANAT</text>
        <text x="67.5" y="70" font-family="sans-serif" font-size="9" fill="#db2777" text-anchor="middle">PESAN MORAL</text>
        <line x1="12" y1="78" x2="123" y2="78" stroke="#fbcfe8"/>
        <text x="67.5" y="94" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">Nasihat kebaikan</text>
        <text x="67.5" y="108" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">yang dapat ditiru</text>
        <text x="67.5" y="122" font-family="sans-serif" font-size="8.5" fill="#831843" text-anchor="middle">oleh pembaca</text>
      </g>
    </svg>
  `)}`,

  // Bagan Struktur Pola Kalimat SPOK
  polaSPOK: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="100%" height="100%">
      <rect width="600" height="200" rx="16" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
      <text x="300" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Struktur Pola Kalimat Lengkap Bahasa Indonesia: S - P - O - K</text>
      
      <!-- Kotak S: Subjek -->
      <g transform="translate(20, 42)">
        <rect width="130" height="142" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
        <text x="65" y="32" font-family="sans-serif" font-size="22" text-anchor="middle">👤</text>
        <text x="65" y="56" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e40af" text-anchor="middle">S (SUBJEK)</text>
        <text x="65" y="72" font-family="sans-serif" font-size="9" font-weight="bold" fill="#2563eb" text-anchor="middle">Pelaku Kegiatan</text>
        <line x1="10" y1="80" x2="120" y2="80" stroke="#bfdbfe"/>
        <text x="65" y="96" font-family="sans-serif" font-size="8.5" fill="#1e3a8a" text-anchor="middle">Siapa pelakunya?</text>
        <text x="65" y="112" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Orang / hewan</text>
        <rect x="15" y="120" width="100" height="18" rx="4" fill="#dbeafe"/>
        <text x="65" y="132" font-family="sans-serif" font-size="9" font-weight="bold" fill="#1e40af" text-anchor="middle">Contoh: Budi, Ibu</text>
      </g>
      
      <!-- Kotak P: Predikat -->
      <g transform="translate(162, 42)">
        <rect width="130" height="142" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
        <text x="65" y="32" font-family="sans-serif" font-size="22" text-anchor="middle">🏃🍳</text>
        <text x="65" y="56" font-family="sans-serif" font-size="13" font-weight="bold" fill="#15803d" text-anchor="middle">P (PREDIKAT)</text>
        <text x="65" y="72" font-family="sans-serif" font-size="9" font-weight="bold" fill="#16a34a" text-anchor="middle">Kata Kerja / Aksi</text>
        <line x1="10" y1="80" x2="120" y2="80" stroke="#bbf7d0"/>
        <text x="65" y="96" font-family="sans-serif" font-size="8.5" fill="#14532d" text-anchor="middle">Sedang apa?</text>
        <text x="65" y="112" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Tindakan / perbuatan</text>
        <rect x="15" y="120" width="100" height="18" rx="4" fill="#dcfce7"/>
        <text x="65" y="132" font-family="sans-serif" font-size="9" font-weight="bold" fill="#15803d" text-anchor="middle">Contoh: membaca</text>
      </g>
      
      <!-- Kotak O: Objek -->
      <g transform="translate(305, 42)">
        <rect width="130" height="142" rx="12" fill="#fefce8" stroke="#eab308" stroke-width="2"/>
        <text x="65" y="32" font-family="sans-serif" font-size="22" text-anchor="middle">📚🍎</text>
        <text x="65" y="56" font-family="sans-serif" font-size="13" font-weight="bold" fill="#854d0e" text-anchor="middle">O (OBJEK)</text>
        <text x="65" y="72" font-family="sans-serif" font-size="9" font-weight="bold" fill="#ca8a04" text-anchor="middle">Sasaran Tindakan</text>
        <line x1="10" y1="80" x2="120" y2="80" stroke="#fef08a"/>
        <text x="65" y="96" font-family="sans-serif" font-size="8.5" fill="#713f12" text-anchor="middle">Apa yang dikenai?</text>
        <text x="65" y="112" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Benda / barang</text>
        <rect x="15" y="120" width="100" height="18" rx="4" fill="#fef9c3"/>
        <text x="65" y="132" font-family="sans-serif" font-size="9" font-weight="bold" fill="#854d0e" text-anchor="middle">Contoh: buku cerita</text>
      </g>
      
      <!-- Kotak K: Keterangan -->
      <g transform="translate(448, 42)">
        <rect width="132" height="142" rx="12" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
        <text x="66" y="32" font-family="sans-serif" font-size="22" text-anchor="middle">🏫⏰</text>
        <text x="66" y="56" font-family="sans-serif" font-size="13" font-weight="bold" fill="#6b21a8" text-anchor="middle">K (KETERANGAN)</text>
        <text x="66" y="72" font-family="sans-serif" font-size="9" font-weight="bold" fill="#9333ea" text-anchor="middle">Tempat &amp; Waktu</text>
        <line x1="10" y1="80" x2="122" y2="80" stroke="#e9d5ff"/>
        <text x="66" y="96" font-family="sans-serif" font-size="8.5" fill="#581c87" text-anchor="middle">Di mana / kapan?</text>
        <text x="66" y="112" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Tempat, waktu, alat</text>
        <rect x="15" y="120" width="102" height="18" rx="4" fill="#f3e8ff"/>
        <text x="66" y="132" font-family="sans-serif" font-size="8.5" font-weight="bold" fill="#6b21a8" text-anchor="middle">di perpustakaan</text>
      </g>
    </svg>
  `)}`,

  // Contoh Diagram Analisis Kalimat SPOK
  analisisKalimat: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 180" width="100%" height="100%">
      <rect width="580" height="180" rx="14" fill="#ffffff" stroke="#94a3b8" stroke-width="2"/>
      <text x="290" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1e293b" text-anchor="middle">Contoh Analisis Bedah Kalimat SPOK</text>
      
      <!-- Kalimat Utuh -->
      <rect x="30" y="40" width="520" height="40" rx="8" fill="#f1f5f9" stroke="#cbd5e1"/>
      <text x="290" y="65" font-family="sans-serif" font-size="14" font-weight="bold" fill="#0f172a" text-anchor="middle">&quot;Made membaca buku cerita di perpustakaan.&quot;</text>
      
      <!-- Penguraian -->
      <g transform="translate(30, 95)">
        <rect x="0" y="0" width="90" height="65" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="45" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Made</text>
        <line x1="10" y1="35" x2="80" y2="35" stroke="#bfdbfe"/>
        <text x="45" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">Subjek (S)</text>
      </g>
      
      <g transform="translate(130, 95)">
        <rect x="0" y="0" width="110" height="65" rx="8" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="55" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#15803d" text-anchor="middle">membaca</text>
        <line x1="10" y1="35" x2="100" y2="35" stroke="#bbf7d0"/>
        <text x="55" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#16a34a" text-anchor="middle">Predikat (P)</text>
      </g>
      
      <g transform="translate(250, 95)">
        <rect x="0" y="0" width="120" height="65" rx="8" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="60" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#854d0e" text-anchor="middle">buku cerita</text>
        <line x1="10" y1="35" x2="110" y2="35" stroke="#fef08a"/>
        <text x="60" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ca8a04" text-anchor="middle">Objek (O)</text>
      </g>
      
      <g transform="translate(380, 95)">
        <rect x="0" y="0" width="170" height="65" rx="8" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
        <text x="85" y="25" font-family="sans-serif" font-size="12" font-weight="bold" fill="#6b21a8" text-anchor="middle">di perpustakaan</text>
        <line x1="10" y1="35" x2="160" y2="35" stroke="#e9d5ff"/>
        <text x="85" y="52" font-family="sans-serif" font-size="11" font-weight="bold" fill="#9333ea" text-anchor="middle">Keterangan Tempat (K)</text>
      </g>
    </svg>
  `)}`,

  // Jenis Keterangan dalam Kalimat
  jenisKeterangan: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 160" width="100%" height="100%">
      <rect width="540" height="160" rx="14" fill="#f8fafc" stroke="#94a3b8" stroke-width="2"/>
      <text x="270" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Ragam Keterangan (K) dalam Pola Kalimat</text>
      
      <g transform="translate(20, 38)">
        <rect width="115" height="105" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="57.5" y="30" font-family="sans-serif" font-size="20" text-anchor="middle">🏫🏞️</text>
        <text x="57.5" y="52" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">K. TEMPAT</text>
        <text x="57.5" y="70" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Di mana?</text>
        <text x="57.5" y="86" font-family="sans-serif" font-size="8" fill="#1e3a8a" text-anchor="middle">di sekolah,</text>
        <text x="57.5" y="98" font-family="sans-serif" font-size="8" fill="#1e3a8a" text-anchor="middle">di sawah</text>
      </g>
      
      <g transform="translate(150, 38)">
        <rect width="115" height="105" rx="10" fill="#fefce8" stroke="#eab308" stroke-width="1.5"/>
        <text x="57.5" y="30" font-family="sans-serif" font-size="20" text-anchor="middle">⏰🌅</text>
        <text x="57.5" y="52" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">K. WAKTU</text>
        <text x="57.5" y="70" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Kapan?</text>
        <text x="57.5" y="86" font-family="sans-serif" font-size="8" fill="#713f12" text-anchor="middle">pagi hari,</text>
        <text x="57.5" y="98" font-family="sans-serif" font-size="8" fill="#713f12" text-anchor="middle">kemarin sore</text>
      </g>
      
      <g transform="translate(280, 38)">
        <rect width="115" height="105" rx="10" fill="#f0fdf4" stroke="#22c55e" stroke-width="1.5"/>
        <text x="57.5" y="30" font-family="sans-serif" font-size="20" text-anchor="middle">✂️🥄</text>
        <text x="57.5" y="52" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">K. ALAT</text>
        <text x="57.5" y="70" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Memakai apa?</text>
        <text x="57.5" y="86" font-family="sans-serif" font-size="8" fill="#14532d" text-anchor="middle">dengan gunting,</text>
        <text x="57.5" y="98" font-family="sans-serif" font-size="8" fill="#14532d" text-anchor="middle">menggunakan sendok</text>
      </g>
      
      <g transform="translate(410, 38)">
        <rect width="110" height="105" rx="10" fill="#faf5ff" stroke="#a855f7" stroke-width="1.5"/>
        <text x="55" y="30" font-family="sans-serif" font-size="20" text-anchor="middle">😊⚡</text>
        <text x="55" y="52" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#6b21a8" text-anchor="middle">K. CARA</text>
        <text x="55" y="70" font-family="sans-serif" font-size="8.5" fill="#64748b" text-anchor="middle">Bagaimana?</text>
        <text x="55" y="86" font-family="sans-serif" font-size="8" fill="#581c87" text-anchor="middle">dengan gembira,</text>
        <text x="55" y="98" font-family="sans-serif" font-size="8" fill="#581c87" text-anchor="middle">secara teliti</text>
      </g>
    </svg>
  `)}`,

  // Ilustrasi Cerita Fiksi Dongeng / Fabel
  fabelDongeng: `data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 170" width="100%" height="100%">
      <rect width="540" height="170" rx="14" fill="#fdf4ff" stroke="#d946ef" stroke-width="2"/>
      <text x="270" y="24" font-family="sans-serif" font-size="13" font-weight="bold" fill="#86198f" text-anchor="middle">Kutipan Dongeng Fabel Fiksi: Sang Kancil yang Cerdik</text>
      
      <g transform="translate(25, 38)">
        <rect width="490" height="115" rx="10" fill="#ffffff" stroke="#f0abfc"/>
        <text x="20" y="30" font-family="sans-serif" font-size="11" fill="#701a75" font-style="italic">&quot;Hai Buaya yang baik! Tolong berbaris rapi di sungai agar aku bisa menghitung jumlah kalian atas perintah raja hutan,&quot; kata Sang Kancil sambil melompat lincah dari satu punggung buaya ke punggung buaya lainnya.</text>
        <line x1="20" y1="62" x2="470" y2="62" stroke="#fae8ff" stroke-width="1.5"/>
        <text x="20" y="82" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a21caf">• Ciri Fiksi: Binatang dapat berbicara dan bersikap seperti manusia (Fabel).</text>
        <text x="20" y="100" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a21caf">• Unsur: Tokoh (Kancil &amp; Buaya) | Latar Tempat (Sungai di Hutan) | Sifat (Cerdik).</text>
      </g>
    </svg>
  `)}`,
};

// Capaian Pembelajaran & Tujuan Pembelajaran Kurikulum Merdeka Fase B (Kelas 3 SD)
const ELEMEN_MEMBACA = 'Membaca dan Memirsa';
const ELEMEN_MENULIS = 'Menulis dan Tata Bahasa';

const CP_FIKSI_FAKTA =
  'Peserta didik mampu memahami pesan dan informasi tentang kehidupan sehari-hari, teks narasi (fiksi), dan teks fakta (nonfiksi) serta membedakan ciri-ciri dan unsur cerita.';
const CP_SPOK =
  'Peserta didik mampu mengembangkan keterampilan menulis kalimat efektif sesuai kaidah tata bahasa Indonesia dengan struktur Subjek, Predikat, Objek, dan Keterangan (SPOK).';

const TP_FIKSI_FAKTA =
  'Peserta didik mampu membedakan teks fiksi (cerita imajinatif/rekaan) dan fakta (informasi nyata), mengenali ciri kalimat fakta vs fiksi, serta menentukan unsur intrinsik cerita (tokoh, watak, latar, amanat).';
const TP_SPOK =
  'Peserta didik mampu mengidentifikasi unsur-unsur kalimat (Subjek, Predikat, Objek, Keterangan Tempat/Waktu/Alat/Cara), menganalisis pola kalimat SPOK, serta menyusun kata acak menjadi kalimat yang padu.';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (30 SOAL: NOMOR 1 s.d. 30)
  // =========================================================================

  // -------------------------------------------------------------------------
  // SUB-TOPIK: TEKS FIKSI DAN TEKS FAKTA (SOAL 1 s.d. 15)
  // -------------------------------------------------------------------------

  // Soal 1: Definisi Teks Fiksi (L1 - Mudah)
  {
    id: 'pg-1',
    originalNumber: 1,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan bagan materi, siswa dapat mengidentifikasi pengertian teks fiksi dengan tepat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.fiksiVsFakta,
    imageCaption: 'Bagan Perbandingan Teks Fiksi dan Teks Fakta',
    question: 'Perhatikan bagan di atas! Cerita yang ditulis berdasarkan khayalan, imajinasi, atau karangan penulis dan tidak benar-benar terjadi di dunia nyata disebut ...',
    options: [
      'Teks Fiksi',
      'Teks Fakta (Nonfiksi)',
      'Laporan Berita',
      'Kamus Ilmiah'
    ],
    correctAnswer: 0,
    explanation: 'Teks fiksi adalah karya sastra berupa cerita rekaan atau khayalan pengarang yang tidak benar-benar terjadi di dunia nyata, seperti dongeng, cerita rakyat, dan fabel.'
  },

  // Soal 2: Definisi Teks Fakta / Nonfiksi (L1 - Mudah)
  {
    id: 'pg-2',
    originalNumber: 2,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat menentukan pengertian teks fakta berdasarkan kebenarannya.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Tulisan yang berisi peristiwa nyata, sungguh-sungguh terjadi, dan kebenarannya dapat dibuktikan secara langsung oleh panca indra disebut teks ...',
    options: [
      'Fakta (Nonfiksi)',
      'Fiksi (Khayalan)',
      'Dongeng Peri',
      'Mitos Ajaib'
    ],
    correctAnswer: 0,
    explanation: 'Teks fakta (nonfiksi) adalah teks yang menyajikan peristiwa nyata yang benar-benar ada dan dapat diuji kebenarannya dengan bukti atau pengamatan langsung.'
  },

  // Soal 3: Ciri Utama Cerita Fiksi (L1 - Mudah)
  {
    id: 'pg-3',
    originalNumber: 3,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat mengidentifikasi ciri khas cerita fiksi yang membedakannya dari teks fakta.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Salah satu ciri utama dari sebuah cerita fiksi adalah ...',
    options: [
      'Memuat data statistik resmi dan tabel sensus penduduk',
      'Berdasarkan imajinasi pengarang dan bertujuan untuk menghibur pembaca',
      'Wajib dibuktikan melalui penelitian laboratorium sains',
      'Selalu ditulis oleh reporter berita televisi'
    ],
    correctAnswer: 1,
    explanation: 'Ciri utama cerita fiksi adalah berasal dari daya imajinasi/khayalan pengarang dan dirancang untuk menghibur hati serta menyampaikan pesan moral kepada pembaca.'
  },

  // Soal 4: Menentukan Contoh Kalimat Fakta (L1 - Mudah)
  {
    id: 'pg-4',
    originalNumber: 4,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan empat pernyataan, siswa dapat menentukan kalimat yang menyatakan fakta alam nyata.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Perhatikan kalimat-kalimat berikut! Kalimat manakah yang merupakan kalimat FAKTA?',
    options: [
      'Pohon beringin itu bisa berjalan-jalan saat malam hari.',
      'Sapi adalah hewan mamalia pemakan tumbuhan (rumput).',
      'Batu ajaib itu dapat mengabulkan tiga permintaan manusia.',
      'Kancil terbang menggunakan sepasang sayap kupu-kupu emas.'
    ],
    correctAnswer: 1,
    explanation: '"Sapi adalah hewan mamalia pemakan tumbuhan (rumput)" adalah fakta nyata yang dapat dibuktikan dalam kehidupan sehari-hari, sedangkan pilihan lainnya adalah cerita khayalan (fiksi).'
  },

  // Soal 5: Menentukan Contoh Kalimat Fiksi (L1 - Mudah)
  {
    id: 'pg-5',
    originalNumber: 5,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat menentukan kalimat yang mengandung unsur fiksi/khayalan.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Kalimat di bawah ini yang termasuk ke dalam kalimat FIKSI adalah ...',
    options: [
      'Matahari terbit di sebelah timur pada pagi hari.',
      'SD Negeri 3 Loloan Timur berada di Kabupaten Jembrana.',
      'Ikan paus bernapas menggunakan paru-paru di lautan.',
      'Burung elang itu berbicara dengan suara lembut kepada sang raja.'
    ],
    correctAnswer: 3,
    explanation: 'Di dunia nyata burung elang tidak dapat berbicara dengan manusia. Peristiwa burung berbicara hanya ada di dalam cerita fiksi (dongeng/fabel).'
  },

  // Soal 6: Mengidentifikasi Jenis Teks dari Kutipan Fabel (L2 - Sedang)
  {
    id: 'pg-6',
    originalNumber: 6,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan kutipan dongeng fabel, siswa dapat mengklasifikasikan jenis teks bacaan tersebut.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.fabelDongeng,
    imageCaption: 'Kutipan Dongeng Fabel Kancil dan Buaya',
    question: 'Bacalah kutipan cerita pada gambar! Mengapa kutipan cerita tentang Sang Kancil dan Buaya digolongkan ke dalam TEKS FIKSI?',
    options: [
      'Karena cerita tersebut dimuat di surat kabar harian',
      'Karena peristiwa hewan dapat berbicara dan berakal seperti manusia merupakan khayalan pengarang',
      'Karena ditulis oleh ilmuwan peneliti satwa di laboratorium',
      'Karena buaya di sungai memang selalu berbaris rapi setiap pagi'
    ],
    correctAnswer: 1,
    explanation: 'Kutipan tersebut tergolong fiksi karena memuat peristiwa khayalan di mana hewan (kancil dan buaya) dapat bercakap-cakap seperti manusia, yang disebut cerita fabel.'
  },

  // Soal 7: Unsur Cerita Fiksi - Tokoh (L1 - Mudah)
  {
    id: 'pg-7',
    originalNumber: 7,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan kutipan narasi fiksi singkat, siswa dapat menentukan tokoh utama cerita.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Bacalah teks berikut:\n"Di tepi hutan, ada seekor Kelinci Putih bernama Cici. Setiap pagi, Cici selalu membagikan wortel segar kepada teman-temannya yang membutuhkan."\n\nSiapakah tokoh utama dalam penggalan cerita di atas?',
    options: [
      'Cici si Kelinci Putih',
      'Wortel segar',
      'Tepi hutan',
      'Pak Petani'
    ],
    correctAnswer: 0,
    explanation: 'Tokoh adalah pelaku yang mengalami dan menjalankan peristiwa dalam cerita. Tokoh utama pada kutipan di atas adalah Cici si Kelinci Putih.'
  },

  // Soal 8: Unsur Cerita Fiksi - Latar Tempat (L1 - Mudah)
  {
    id: 'pg-8',
    originalNumber: 8,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan kutipan cerita, siswa dapat menentukan latar tempat terjadinya peristiwa cerita.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.unsurCeritaFiksi,
    imageCaption: 'Bagan 4 Unsur Penting Cerita Fiksi',
    question: 'Bacalah kutipan cerita berikut:\n"Matahari bersinar hangat. Ikan Mas Kecil berenang gembira di sela-sela bebatuan Danau Beratan yang airnya sangat jernih."\n\nLatar tempat terjadinya cerita di atas adalah di ...',
    options: [
      'Gua yang gelap gulita',
      'Danau Beratan',
      'Halaman sekolah',
      'Dapur rumah'
    ],
    correctAnswer: 1,
    explanation: 'Latar tempat menunjukkan lokasi terjadinya cerita. Pada teks tertulis jelas bahwa Ikan Mas Kecil berenang di "Danau Beratan".'
  },

  // Soal 9: Unsur Cerita Fiksi - Watak Tokoh (L2 - Sedang)
  {
    id: 'pg-9',
    originalNumber: 9,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan kutipan tindakan tokoh fiksi, siswa dapat menyimpulkan sifat/watak tokoh.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Bacalah kutipan cerita berikut:\n"Meskipun menang lomba lari di hutan, Kura-kura tidak pernah mengejek teman-temannya. Ia bahkan tersenyum ramah dan memuji usaha lawannya."\n\nWatak atau sifat tokoh Kura-kura dalam cerita tersebut adalah ...',
    options: [
      'Sombong dan tinggi hati',
      'Rendah hati dan tidak angkuh',
      'Pemarah dan pendendam',
      'Penakut dan malas berusaha'
    ],
    correctAnswer: 1,
    explanation: 'Kura-kura yang tidak mengejek dan tetap tersenyum ramah serta memuji orang lain mencerminkan sikap rendah hati dan terpuji.'
  },

  // Soal 10: Unsur Cerita Fiksi - Amanat / Pesan Moral (L3 - Sukar HOTS)
  {
    id: 'pg-10',
    originalNumber: 10,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan fabel tentang semut dan belalang, siswa dapat menyimpulkan amanat pesan moral yang tepat.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Bacalah cerita fiksi berikut:\n"Semut merah rajin mengumpulkan biji-bijian di musim kemarau untuk persediaan saat musim hujan tiba. Sebaliknya, Belalang hanya bersantai dan menertawakan semut. Ketika musim hujan lebat tiba, Belalang kelaparan kedinginan, sedangkan keluarga Semut hidup aman dan kenyang di sarangnya."\n\nAmanat atau pesan kebaikan yang dapat kita teladani dari cerita di atas adalah ...',
    options: [
      'Lebih baik bermalas-malasan agar tubuh tidak merasa capek',
      'Kita harus rajin bekerja dan mempersiapkan masa depan dengan baik',
      'Jangan mau berbagi makanan kepada siapapun di dunia ini',
      'Kita sebaiknya menertawakan orang yang sedang berusaha giat'
    ],
    correctAnswer: 1,
    explanation: 'Amanat adalah pesan kebaikan yang ingin disampaikan pengarang. Cerita semut mengajarkan kita agar rajin bekerja, berhemat, dan mempersiapkan kebutuhan masa depan dengan tekun.'
  },

  // Soal 11: Membedakan Jenis Buku Fiksi vs Nonfiksi (L2 - Sedang)
  {
    id: 'pg-11',
    originalNumber: 11,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat menentukan kelompok buku yang seluruhnya merupakan karya fiksi.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Di perpustakaan SD Negeri 3 Loloan Timur terdapat berbagai jenis buku bacaan. Kelompok buku di bawah ini yang SELURUHNYA termasuk buku FIKSI adalah ...',
    options: [
      'Buku Dongeng Bawang Merah, Fabel Kancil, dan Cerita Putri Duyung',
      'Kamus Besar Bahasa Indonesia, Ensiklopedia Sains, dan Buku Atlas Dunia',
      'Buku Panduan Menanam Padi, Buku Resep Masakan, dan Cerpen Fantasi',
      'Laporan Hasil Pengamatan Alam, Dongeng Timun Mas, dan Buku Sejarah'
    ],
    correctAnswer: 0,
    explanation: 'Buku dongeng, fabel hewan, dan cerita putri duyung semuanya merupakan cerita khayalan rekaan pengarang (fiksi).'
  },

  // Soal 12: Menganalisis Kalimat Fakta Ilmiah Sederhana (L2 - Sedang)
  {
    id: 'pg-12',
    originalNumber: 12,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat membuktikan alasan sebuah kalimat digolongkan sebagai fakta nyata.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Perhatikan kalimat: "Air mengalir dari tempat yang tinggi menuju ke tempat yang lebih rendah."\nKalimat di atas dikategorikan sebagai FAKTA karena ...',
    options: [
      'Hanya terjadi di negeri dongeng ajaib saat malam hari',
      'Merupakan sifat alami air di bumi yang dapat dibuktikan kebenarannya oleh semua orang',
      'Merupakan karangan khayalan penulis cerita petualangan anak',
      'Hanya berlaku bagi air yang diberi mantra oleh penyihir'
    ],
    correctAnswer: 1,
    explanation: 'Kalimat tersebut adalah fakta karena merupakan hukum alam nyata yang dapat dibuktikan oleh panca indra dan berlaku nyata di mana saja.'
  },

  // Soal 13: Membedakan Fakta dan Khayalan dalam Peristiwa Sehari-hari (L2 - Sedang)
  {
    id: 'pg-13',
    originalNumber: 13,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan 4 pernyataan mengenai sekolah, siswa dapat mengidentifikasi kalimat khayalan (fiksi).',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Di antara empat pernyataan berikut, manakah yang merupakan peristiwa FIKSI (khayalan)?',
    options: [
      'Siswa kelas 3 SD mengikuti upacara bendera pada hari Senin pagi.',
      'Guru mengajar mata pelajaran Bahasa Indonesia di dalam kelas.',
      'Pensil milik Made bisa menari dan terbang keluar jendela sekolah sendiri.',
      'Lonceng sekolah berbunyi tanda waktu istirahat telah tiba.'
    ],
    correctAnswer: 2,
    explanation: 'Pensil yang menari dan terbang sendiri adalah hal mustahil di dunia nyata dan hanya terjadi dalam imajinasi/cerita fiksi.'
  },

  // Soal 14: Membaca Teks Fakta tentang Lingkungan / Hewan (L2 - Sedang)
  {
    id: 'pg-14',
    originalNumber: 14,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan teks informasi fakta tentang Jalak Bali, siswa dapat menemukan informasi faktual yang tepat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Bacalah teks fakta berikut:\n"Burung Jalak Bali adalah hewan endemik yang dilindungi di Taman Nasional Bali Barat. Burung ini memiliki bulu berwarna putih bersih dengan ujung sayap berwarna hitam dan kulit biru terang di sekitar matanya."\n\nBerdasarkan teks fakta di atas, ciri fisik Burung Jalak Bali adalah ...',
    options: [
      'Bisa berbicara bahasa manusia dan bersayap pelangi',
      'Memiliki bulu putih bersih dengan lingkaran kulit biru di sekitar matanya',
      'Dapat terbang menembus awan luar angkasa',
      'Bertelur emas seberat lima kilogram'
    ],
    correctAnswer: 1,
    explanation: 'Teks fakta menyajikan informasi yang nyata dan akurat. Ciri fisik yang tercantum dalam teks adalah berbulu putih bersih dan memiliki lingkaran kulit biru di sekitar mata.'
  },

  // Soal 15: Mengidentifikasi Tujuan Teks Fiksi vs Teks Fakta (L3 - Sukar HOTS)
  {
    id: 'pg-15',
    originalNumber: 15,
    type: 'pilihan_ganda',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Siswa dapat mengevaluasi tujuan utama penulis saat membuat teks fiksi dibandingkan teks fakta.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Seorang penulis membuat cerita dongeng berjudul "Kisah Bintang Kejora dan Pohon Beringin Sahabat Sejati". Tujuan utama penulis menulis karya fiksi tersebut adalah ...',
    options: [
      'Menyajikan data sensus jumlah pohon beringin di seluruh Indonesia',
      'Menghibur imajinasi pembaca serta menyampaikan pesan moral tentang indahnya persahabatan',
      'Membuat laporan resmi pengeluaran dana desa kepada bupati',
      'Membuktikan hasil percobaan kimia di laboratorium'
    ],
    correctAnswer: 1,
    explanation: 'Teks fiksi (dongeng) bertujuan untuk menghibur pembaca, membangkitkan imajinasi kreatif, serta menyampaikan pesan moral/nasihat budi pekerti yang baik.'
  },

  // -------------------------------------------------------------------------
  // SUB-TOPIK: POLA KALIMAT SPOK (SOAL 16 s.d. 30)
  // -------------------------------------------------------------------------

  // Soal 16: Pengertian Subjek (S) (L1 - Mudah)
  {
    id: 'pg-16',
    originalNumber: 16,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan bagan materi pola SPOK, siswa dapat menentukan pengertian unsur Subjek (S).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.polaSPOK,
    imageCaption: 'Struktur Unsur Kalimat S - P - O - K',
    question: 'Perhatikan bagan struktur kalimat di atas! Bagian kalimat yang menunjukkan pelaku atau pihak yang melakukan suatu kegiatan disebut ...',
    options: [
      'Subjek (S)',
      'Predikat (P)',
      'Objek (O)',
      'Keterangan (K)'
    ],
    correctAnswer: 0,
    explanation: 'Subjek (S) adalah pelaku atau pokok pembicaraan yang melakukan suatu perbuatan atau tindakan di dalam kalimat.'
  },

  // Soal 17: Pengertian Predikat (P) (L1 - Mudah)
  {
    id: 'pg-17',
    originalNumber: 17,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Siswa dapat menentukan pengertian unsur Predikat (P) sebagai tindakan perbuatan.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Bagian kalimat yang menyatakan tindakan, kegiatan, atau perbuatan yang sedang dikerjakan oleh Subjek disebut ...',
    options: [
      'Objek (O)',
      'Predikat (P)',
      'Keterangan Waktu',
      'Pelengkap Tempat'
    ],
    correctAnswer: 1,
    explanation: 'Predikat (P) adalah bagian kalimat yang berupa kata kerja yang menjelaskan apa yang sedang dilakukan atau dialami oleh Subjek.'
  },

  // Soal 18: Pengertian Objek (O) (L1 - Mudah)
  {
    id: 'pg-18',
    originalNumber: 18,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Siswa dapat menentukan pengertian unsur Objek (O) dalam kalimat aktif.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Sesuatu atau benda yang dikenai tindakan atau pekerjaan oleh Subjek dalam sebuah kalimat disebut ...',
    options: [
      'Predikat (P)',
      'Objek (O)',
      'Keterangan Cara',
      'Subjek (S)'
    ],
    correctAnswer: 1,
    explanation: 'Objek (O) adalah kata benda yang menjadi sasaran atau dikenai pekerjaan/tindakan oleh Subjek melalui Predikat.'
  },

  // Soal 19: Pengertian Keterangan (K) (L1 - Mudah)
  {
    id: 'pg-19',
    originalNumber: 19,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Siswa dapat mengidentifikasi fungsi Keterangan (K) dalam melengkapi kalimat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.jenisKeterangan,
    imageCaption: 'Ragam Macam Keterangan dalam Kalimat',
    question: 'Perhatikan ragam keterangan pada gambar! Bagian kalimat yang memberikan penjelasan mengenai tempat terjadinya peristiwa, waktu kejadian, alat yang dipakai, atau cara melakukan sesuatu disebut ...',
    options: [
      'Keterangan (K)',
      'Subjek (S)',
      'Predikat (P)',
      'Objek (O)'
    ],
    correctAnswer: 0,
    explanation: 'Keterangan (K) berfungsi memberikan informasi tambahan mengenai tempat, waktu, suasana, alat, atau cara pelaksanaan kegiatan.'
  },

  // Soal 20: Menentukan Subjek dalam Kalimat (L1 - Mudah)
  {
    id: 'pg-20',
    originalNumber: 20,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan sebuah kalimat lengkap, siswa dapat menentukan kata yang menduduki jabatan Subjek (S).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Perhatikan kalimat berikut:\n"Wayan menyiram tanaman bunga di pekarangan rumah."\n\nKata yang berkedudukan sebagai SUBJEK (S) pada kalimat tersebut adalah ...',
    options: [
      'Wayan',
      'menyiram',
      'tanaman bunga',
      'di pekarangan rumah'
    ],
    correctAnswer: 0,
    explanation: 'Wayan adalah pelaku yang melakukan perbuatan menyiram tanaman, sehingga kata "Wayan" menduduki jabatan Subjek (S).'
  },

  // Soal 21: Menentukan Predikat dalam Kalimat (L1 - Mudah)
  {
    id: 'pg-21',
    originalNumber: 21,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat, siswa dapat mengidentifikasi kata yang berfungsi sebagai Predikat (P).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.analisisKalimat,
    imageCaption: 'Contoh Penguraian Unsur SPOK',
    question: 'Perhatikan diagram di atas! Pada kalimat:\n"Ibu memasak sayur sup di dapur."\n\nKata yang berkedudukan sebagai PREDIKAT (P) adalah ...',
    options: [
      'Ibu',
      'memasak',
      'sayur sup',
      'di dapur'
    ],
    correctAnswer: 1,
    explanation: '"memasak" adalah kata kerja/tindakan yang sedang dilakukan oleh Ibu, sehingga berkedudukan sebagai Predikat (P).'
  },

  // Soal 22: Menentukan Objek dalam Kalimat (L1 - Mudah)
  {
    id: 'pg-22',
    originalNumber: 22,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat, siswa dapat menentukan bagian kalimat yang berkedudukan sebagai Objek (O).',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Perhatikan kalimat berikut:\n"Kadek meminjam buku ensiklopedia di perpustakaan sekolah."\n\nBagian kata yang berkedudukan sebagai OBJEK (O) adalah ...',
    options: [
      'Kadek',
      'meminjam',
      'buku ensiklopedia',
      'di perpustakaan sekolah'
    ],
    correctAnswer: 2,
    explanation: '"buku ensiklopedia" adalah benda yang menjadi sasaran tindakan dipinjam oleh Kadek, sehingga berkedudukan sebagai Objek (O).'
  },

  // Soal 23: Menentukan Keterangan Tempat (L1 - Mudah)
  {
    id: 'pg-23',
    originalNumber: 23,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat kegiatan, siswa dapat menemukan unsur Keterangan Tempat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Perhatikan kalimat berikut:\n"Siswa kelas tiga berlatih tari Pendet di aula sekolah."\n\nUnsur KETERANGAN TEMPAT pada kalimat di atas adalah ...',
    options: [
      'Siswa kelas tiga',
      'berlatih',
      'tari Pendet',
      'di aula sekolah'
    ],
    correctAnswer: 3,
    explanation: '"di aula sekolah" diawali kata depan "di" yang menerangkan lokasi/tempat berlangsungnya kegiatan latihan menari.'
  },

  // Soal 24: Menentukan Keterangan Waktu (L1 - Mudah)
  {
    id: 'pg-24',
    originalNumber: 24,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Siswa dapat menentukan frasa yang menunjukkan Keterangan Waktu dalam kalimat.',
    cognitiveLevel: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 1,
    question: 'Perhatikan kalimat berikut:\n"Ayah mencuci sepeda motor pada pagi hari."\n\nFrasa yang menunjukkan KETERANGAN WAKTU adalah ...',
    options: [
      'Ayah',
      'mencuci',
      'sepeda motor',
      'pada pagi hari'
    ],
    correctAnswer: 3,
    explanation: '"pada pagi hari" memberikan keterangan kapan peristiwa mencuci sepeda motor dilakukan oleh ayah.'
  },

  // Soal 25: Menentukan Keterangan Alat dan Cara (L2 - Sedang)
  {
    id: 'pg-25',
    originalNumber: 25,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat berketerangan alat, siswa dapat mengidentifikasi jenis keterangannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.jenisKeterangan,
    imageCaption: 'Macam-macam Keterangan dalam Kalimat',
    question: 'Perhatikan kalimat berikut:\n"Pak Made memotong ranting pohon menggunakan gunting dahan."\n\nFrasa "menggunakan gunting dahan" dalam kalimat tersebut berfungsi sebagai ...',
    options: [
      'Keterangan Waktu',
      'Keterangan Tempat',
      'Keterangan Alat',
      'Subjek'
    ],
    correctAnswer: 2,
    explanation: 'Frasa "menggunakan gunting dahan" menerangkan alat atau sarana yang digunakan Pak Made untuk memotong ranting, sehingga berfungsi sebagai Keterangan Alat.'
  },

  // Soal 26: Menganalisis Pola Kalimat Lengkap S-P-O-K (L2 - Sedang)
  {
    id: 'pg-26',
    originalNumber: 26,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat terstruktur, siswa dapat menentukan pola tata bahasa kalimat secara berurutan.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.analisisKalimat,
    imageCaption: 'Bagan Analisis Urutan Pola SPOK',
    question: 'Perhatikan kalimat berikut:\n"Dokter memeriksa pasien di ruang klinik."\n\nUrutan pola jabatan kata pada kalimat di atas yang benar adalah ...',
    options: [
      'S - P - O - K (Subjek - Predikat - Objek - Keterangan)',
      'S - P (Subjek - Predikat saja)',
      'P - S - O (Predikat - Subjek - Objek)',
      'K - S - P - O (Keterangan - Subjek - Predikat - Objek)'
    ],
    correctAnswer: 0,
    explanation: 'Dokter (Subjek) + memeriksa (Predikat) + pasien (Objek) + di ruang klinik (Keterangan Tempat). Polanya adalah S - P - O - K.'
  },

  // Soal 27: Menemukan Kalimat Berpola S - P - O (L2 - Sedang)
  {
    id: 'pg-27',
    originalNumber: 27,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Siswa dapat menentukan kalimat yang memiliki struktur S - P - O tanpa keterangan.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Manakah di antara kalimat-kalimat berikut yang memiliki pola kalimat S - P - O (Subjek - Predikat - Objek)?',
    options: [
      'Adik tidur nyenyak di kamar tidur.',
      'Petani mencangkul sawah.',
      'Di lapangan, anak-anak bermain bola.',
      'Wayan berlari cepat sekali.'
    ],
    correctAnswer: 1,
    explanation: '"Petani (S) + mencangkul (P) + sawah (O)". Kalimat ini tepat memiliki 3 unsur yaitu Subjek, Predikat, dan Objek tanpa keterangan tambahan.'
  },

  // Soal 28: Menyusun Kata Acak Menjadi Kalimat SPOK (L2 - Sedang)
  {
    id: 'pg-28',
    originalNumber: 28,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kata-kata acak, siswa dapat menyusunnya menjadi kalimat berpola SPOK yang padu.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Perhatikan kata-kata acak berikut:\n[ di halaman ] - [ bermain ] - [ Ketut ] - [ sore hari ] - [ layang-layang ]\n\nSusunan kalimat yang tepat dan runtut berpola S - P - O - K adalah ...',
    options: [
      'Ketut bermain layang-layang di halaman pada sore hari.',
      'Di halaman bermain layang-layang Ketut sore hari.',
      'Layang-layang Ketut bermain di halaman sore hari.',
      'Sore hari Ketut layang-layang bermain di halaman.'
    ],
    correctAnswer: 0,
    explanation: 'Ketut (S) + bermain (P) + layang-layang (O) + di halaman pada sore hari (K. Tempat & Waktu) merupakan susunan kalimat yang logis, gramatikal, dan runtut.'
  },

  // Soal 29: Melengkapi Kalimat Rumpang dengan Predikat yang Tepat (L2 - Sedang)
  {
    id: 'pg-29',
    originalNumber: 29,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat rumpang pada posisi Predikat, siswa dapat memilih kata kerja yang paling logis.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Lengkapilah kalimat rumpang berikut dengan kata Predikat (P) yang paling tepat!\n"Pustakawan sekolah sedang ... buku-buku baru ke dalam lemari perpustakaan."\n\nKata kerja yang tepat mengisi posisi Predikat adalah ...',
    options: [
      'menata',
      'memakan',
      'berenang',
      'menendang'
    ],
    correctAnswer: 0,
    explanation: 'Kata kerja yang sesuai konteks merapikan buku ke lemari adalah "menata". Pustakawan (S) + sedang menata (P) + buku-buku baru (O) + ke dalam lemari perpustakaan (K).'
  },

  // Soal 30: Analisis Kalimat Penalaran / HOTS (L3 - Sukar HOTS)
  {
    id: 'pg-30',
    originalNumber: 30,
    type: 'pilihan_ganda',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan kalimat berpola SPOK lengkap, siswa dapat menganalisis fungsi gramatikal kata dengan tepat.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.analisisKalimat,
    imageCaption: 'Analisis Jabatan Kata dalam Kalimat',
    question: 'Perhatikan kalimat berikut:\n"Setiap hari Minggu pagi, Pak Made menanam bibit pohon mangga di kebun belakang rumah."\n\nBerdasarkan aturan tata bahasa Indonesia, pernyataan manakah yang PALING TEPAT mengenai fungsi kata dalam kalimat tersebut?',
    options: [
      'Kata "Pak Made" berfungsi sebagai Objek karena berada di tengah kalimat.',
      'Kata "bibit pohon mangga" berfungsi sebagai Objek (O) karena menjadi sasaran tindakan menanam.',
      'Kata "menanam" berfungsi sebagai Keterangan Waktu karena dilakukan pagi hari.',
      'Frasa "di kebun belakang rumah" berfungsi sebagai Predikat kalimat.'
    ],
    correctAnswer: 1,
    explanation: '"Pak Made" adalah Subjek (pelaku), "menanam" adalah Predikat (tindakan), "bibit pohon mangga" adalah Objek (sasaran yang ditanam), dan "di kebun belakang rumah" adalah Keterangan Tempat.'
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS KATEGORI (10 SOAL: NOMOR 31 s.d. 40)
  // Setiap butir memuat tepat 3 deskripsi/pernyataan yang harus direspons Benar atau Salah!
  // =========================================================================

  // Soal 31: Kategori Ciri Teks Fiksi (L2 - Sedang)
  {
    id: 'pgk-31',
    originalNumber: 31,
    type: 'kategori',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan 3 pernyataan tentang ciri teks fiksi, siswa dapat menentukan kebenarannya (Benar/Salah).',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.fiksiVsFakta,
    imageCaption: 'Ciri-Ciri Teks Fiksi (Rekaan)',
    question: 'Perhatikan pemahaman tentang "Teks Fiksi". Tentukan apakah setiap pernyataan berikut BENAR atau SALAH!',
    explanation: 'Teks fiksi merupakan cerita imajinasi/khayalan pengarang, bertujuan menghibur dan mengandung pesan moral.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-31-1',
        text: 'Cerita fiksi ditulis berdasarkan khayalan atau daya imajinasi pengarang dan tidak nyata.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-31-2',
        text: 'Cerita fabel yang menceritakan binatang bisa bercakap-cakap seperti manusia termasuk jenis teks fiksi.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-31-3',
        text: 'Setiap cerita fiksi wajib dibuktikan kebenarannya melalui percobaan sains di laboratorium.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 32: Kategori Ciri Teks Fakta (L2 - Sedang)
  {
    id: 'pgk-32',
    originalNumber: 32,
    type: 'kategori',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan 3 pernyataan mengenai teks fakta, siswa dapat menganalisis kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.fiksiVsFakta,
    imageCaption: 'Ciri-Ciri Teks Fakta (Nonfiksi)',
    question: 'Tentukan apakah setiap pernyataan mengenai "Teks Fakta (Nonfiksi)" berikut ini BENAR atau SALAH!',
    explanation: 'Teks fakta menyajikan kenyataan yang sebenarnya dan dapat dibuktikan melalui data atau pengamatan panca indra.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-32-1',
        text: 'Teks fakta memuat informasi yang sungguh-sungguh terjadi dan dapat dibuktikan kebenarannya.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-32-2',
        text: 'Buku ensiklopedia hewan dan buku laporan berita televisi menyajikan informasi berupa fakta.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-32-3',
        text: 'Peristiwa sapu terbang yang dinaiki penyihir di film kartun merupakan contoh peristiwa fakta nyata di sekolah.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 33: Kategori Unsur Cerita Fiksi (L2 - Sedang)
  {
    id: 'pgk-33',
    originalNumber: 33,
    type: 'kategori',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan 3 pernyataan mengenai unsur-unsur cerita fiksi, siswa dapat mengevaluasi kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.unsurCeritaFiksi,
    imageCaption: 'Empat Unsur Pembangun Cerita Fiksi',
    question: 'Tentukan apakah setiap pernyataan mengenai "Unsur-Unsur Cerita Fiksi" berikut ini BENAR atau SALAH!',
    explanation: 'Unsur cerita fiksi terdiri dari Tokoh (pelaku), Watak (sifat), Latar (tempat/waktu), Alur (rangkaian jalan cerita), dan Amanat (pesan nasihat).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-33-1',
        text: 'Tokoh adalah pelaku yang menjalankan peristiwa dan memiliki watak (sifat) di dalam cerita.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-33-2',
        text: 'Latar tempat menerangkan di mana peristiwa cerita berlangsung, misalnya di hutan, sungai, atau istana.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-33-3',
        text: 'Amanat adalah nama pengarang yang menulis buku cerita di halaman judul depan.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 34: Kategori Pemilahan Kalimat Fakta dan Fiksi (L2 - Sedang)
  {
    id: 'pgk-34',
    originalNumber: 34,
    type: 'kategori',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan 3 contoh kalimat, siswa dapat menilai apakah masing-masing kalimat tergolong fakta atau fiksi.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    question: 'Tentukan apakah penilaian terhadap contoh kalimat "Fakta dan Fiksi" berikut ini BENAR atau SALAH!',
    explanation: 'Fakta dapat diamati secara nyata, sedangkan fiksi mengandung unsur khayalan/keajaiban yang tidak ada di dunia nyata.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-34-1',
        text: 'Kalimat "Matahari memancarkan cahaya dan panas yang dibutuhkan oleh makhluk hidup" adalah kalimat FAKTA.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-34-2',
        text: 'Kalimat "Ikan lumba-lumba berbicara kepada nelayan menggunakan bahasa manusia" adalah kalimat FAKTA ilmiah.',
        correctAnswer: 'Salah'
      },
      {
        id: 'st-34-3',
        text: 'Kalimat "Pohon apel ajaib itu bisa menyembuhkan semua penyakit hanya dengan memetik daun peraknya" adalah kalimat FIKSI.',
        correctAnswer: 'Benar'
      }
    ]
  },

  // Soal 35: Kategori Analisis Kutipan Fabel (L3 - Sukar HOTS)
  {
    id: 'pgk-35',
    originalNumber: 35,
    type: 'kategori',
    category: 'Teks Fiksi dan Teks Fakta',
    elemen: ELEMEN_MEMBACA,
    capaianPembelajaran: CP_FIKSI_FAKTA,
    tujuanPembelajaran: TP_FIKSI_FAKTA,
    indikator: 'Disajikan kutipan dongeng, siswa dapat mengevaluasi 3 pernyataan analisis tokoh, watak, dan jenis teks.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.fabelDongeng,
    imageCaption: 'Kutipan Fabel Sang Kancil',
    question: 'Bacalah kutipan fabel Sang Kancil! Tentukan apakah setiap pernyataan telaah cerita berikut BENAR atau SALAH!',
    explanation: 'Fabel adalah cerita fiksi bertokoh binatang berperilaku manusia. Tokoh kancil memiliki sifat cerdik.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-35-1',
        text: 'Cerita Sang Kancil dan Buaya tergolong ke dalam cerita fiksi jenis fabel.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-35-2',
        text: 'Watak tokoh Sang Kancil dalam kutipan dongeng tersebut digambarkan cerdik dalam mencari jalan keluar.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-35-3',
        text: 'Cerita tersebut merupakan teks fakta yang ditulis berdasarkan data sensus buaya oleh dinas lingkungan hidup.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 36: Kategori Unsur Subjek dan Predikat dalam Kalimat (L2 - Sedang)
  {
    id: 'pgk-36',
    originalNumber: 36,
    type: 'kategori',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan 3 pernyataan tentang Subjek dan Predikat, siswa dapat menentukan kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.polaSPOK,
    imageCaption: 'Struktur Unsur Kalimat SPOK',
    question: 'Tentukan apakah setiap pernyataan mengenai "Subjek (S) dan Predikat (P)" berikut ini BENAR atau SALAH!',
    explanation: 'Subjek adalah pelaku kegiatan (nama orang/hewan/benda), sedangkan Predikat adalah tindakan perbuatan (kata kerja).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-36-1',
        text: 'Subjek (S) di dalam kalimat menjawab pertanyaan "Siapa yang melakukan perbuatan?".',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-36-2',
        text: 'Predikat (P) umumnya berupa kata kerja yang menyatakan kegiatan yang dilakukan oleh Subjek.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-36-3',
        text: 'Pada kalimat "Wayan tidur", kata "tidur" berkedudukan sebagai Subjek.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 37: Kategori Unsur Objek dan Keterangan (L2 - Sedang)
  {
    id: 'pgk-37',
    originalNumber: 37,
    type: 'kategori',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan 3 pernyataan tentang Objek dan Keterangan, siswa dapat menguji kebenarannya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.jenisKeterangan,
    imageCaption: 'Unsur Objek dan Keterangan dalam Kalimat',
    question: 'Tentukan apakah setiap pernyataan mengenai "Objek (O) dan Keterangan (K)" berikut ini BENAR atau SALAH!',
    explanation: 'Objek adalah sesuatu yang dikenai tindakan oleh subjek. Keterangan memberikan informasi tambahan (tempat, waktu, alat, cara).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-37-1',
        text: 'Objek (O) merupakan bagian kalimat yang dikenai tindakan atau pekerjaan oleh Subjek.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-37-2',
        text: 'Frasa seperti "di perpustakaan" dan "di halaman sekolah" berfungsi sebagai Keterangan Tempat.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-37-3',
        text: 'Kata yang menunjukkan keterangan waktu harus selalu diletakkan tepat sebelum kata Subjek.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 38: Kategori Identifikasi Pola SPOK pada Kalimat (L2 - Sedang)
  {
    id: 'pgk-38',
    originalNumber: 38,
    type: 'kategori',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan 3 penguraian pola kalimat, siswa dapat menentukan kebenaran hasil penguraian jabatan katanya.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.analisisKalimat,
    imageCaption: 'Penguraian Jabatan Kata dalam Kalimat',
    question: 'Perhatikan contoh analisis kalimat pada gambar! Tentukan apakah setiap analisis pola kalimat berikut BENAR atau SALAH!',
    explanation: 'Penguraian kalimat harus mencocokkan pelaku (S), perbuatan (P), sasaran (O), dan keterangan (K).',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-38-1',
        text: 'Kalimat "Kadek (S) mencuci (P) piring (O) di dapur (K)" memiliki pola kalimat S - P - O - K.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-38-2',
        text: 'Pada kalimat "Ayah membaca koran", kata "koran" berkedudukan sebagai Objek (O).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-38-3',
        text: 'Pada kalimat "Siswa belajar di kelas", kata "di kelas" berkedudukan sebagai Objek.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 39: Kategori Ragam Jenis Keterangan (L2 - Sedang)
  {
    id: 'pgk-39',
    originalNumber: 39,
    type: 'kategori',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan 3 contoh frasa keterangan, siswa dapat mengklasifikasikan jenis keterangannya dengan tepat.',
    cognitiveLevel: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 1,
    imageUrl: SVG_ICONS.jenisKeterangan,
    imageCaption: 'Ragam Macam Keterangan dalam Kalimat',
    question: 'Tentukan apakah penentuan jenis "Keterangan (K)" dalam kalimat berikut ini BENAR atau SALAH!',
    explanation: 'Keterangan waktu menjelaskan kapan, keterangan tempat menjelaskan lokasi, dan keterangan alat menjelaskan alat yang dipakai.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-39-1',
        text: 'Frasa "kemarin sore" dan "setiap hari Minggu" termasuk ke dalam jenis Keterangan Waktu.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-39-2',
        text: 'Frasa "dengan menggunakan gunting rumput" termasuk ke dalam jenis Keterangan Alat.',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-39-3',
        text: 'Frasa "di lapangan sepak bola" adalah contoh Keterangan Cara yang menyatakan suasana hati.',
        correctAnswer: 'Salah'
      }
    ]
  },

  // Soal 40: Kategori Evaluasi Kalimat Efektif dan Tata Bahasa SPOK (L3 - Sukar HOTS)
  {
    id: 'pgk-40',
    originalNumber: 40,
    type: 'kategori',
    category: 'Pola Kalimat SPOK',
    elemen: ELEMEN_MENULIS,
    capaianPembelajaran: CP_SPOK,
    tujuanPembelajaran: TP_SPOK,
    indikator: 'Disajikan 3 pernyataan tentang penyusunan kalimat efektif dan keterpaduan makna, siswa dapat mengevaluasi kebenarannya.',
    cognitiveLevel: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 1,
    question: 'Tentukan apakah setiap pernyataan mengenai "Penyusunan Kalimat Berpola SPOK yang Tepat" berikut ini BENAR atau SALAH!',
    explanation: 'Kalimat efektif harus memiliki struktur yang padu, tidak rancu, dan menggunakan kata kerja yang sesuai dengan objeknya.',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 'st-40-1',
        text: 'Sebuah kalimat yang baik dan utuh minimal harus memiliki unsur Subjek (S) dan Predikat (P).',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-40-2',
        text: 'Susunan kata "Made meminjam buku cerita di perpustakaan" lebih runtut dan jelas maknanya daripada "Di perpustakaan buku meminjam Made".',
        correctAnswer: 'Benar'
      },
      {
        id: 'st-40-3',
        text: 'Sebuah kalimat hanya boleh memiliki satu kata saja dan tidak boleh memiliki Predikat kata kerja.',
        correctAnswer: 'Salah'
      }
    ]
  }
];
