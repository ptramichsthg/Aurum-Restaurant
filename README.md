# Aurum Restaurant

Aurum Restaurant adalah sebuah proyek *landing page* dan profil perusahaan untuk sebuah restoran *Fine Dining* mewah. Website ini dirancang dengan antarmuka yang elegan, animasi yang interaktif, dan tata letak modern untuk memberikan pengalaman pengguna kelas atas, mencakup menu hidangan, suasana restoran, hingga fasilitas reservasi meja.

## Fitur Utama

- **Antarmuka Elegan & Responsif:** Desain mewah (*dark theme*) yang beradaptasi sempurna di perangkat desktop maupun seluler.
- **Navigasi Interaktif:** *Navbar* dinamis yang dapat mendeteksi sesi gulir halaman saat ini (*Active Section Observer*).
- **Animasi Modern:** Efek kemunculan (*reveal*), interaksi *hover*, dan transisi mulus di setiap elemen.
- **Bagian Restoran yang Lengkap:** Memiliki halaman Pengenalan, Filosofi, Sorotan Menu Utama, Galeri Suasana, Form Kontak, dan tombol Pemesanan Meja.

## Teknologi yang Digunakan

Proyek ini dibangun menggunakan teknologi *web* modern:

- **[React 19](https://react.dev/):** Library utama untuk membangun antarmuka pengguna berbasis komponen.
- **[Vite](https://vitejs.dev/):** *Build tool* dan *dev server* yang sangat cepat.
- **[Tailwind CSS v4](https://tailwindcss.com/):** Framework CSS utilitas untuk desain web kustom dengan cepat.
- **[Framer Motion](https://www.framer.com/motion/):** Library animasi deklaratif untuk efek pergerakan komponen React.
- **[Lucide React](https://lucide.dev/) & Material Symbols:** Ikon vektor minimalis dan elegan.

## Cara Instalasi & Menjalankan Proyek

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di perangkat Anda secara lokal.

### Prasyarat

Pastikan Anda telah menginstal **Node.js** (direkomendasikan v18 atau yang lebih baru) di sistem Anda.

### Instalasi

1. Buka terminal atau *command prompt*.
2. Kloning repositori ini (atau ekstrak/buka folder proyek Anda):
   ```bash
   git clone <URL_REPOSITORY_ANDA>
   ```
3. Masuk ke dalam direktori proyek:
   ```bash
   cd aurum-restaurant
   ```
4. Instal semua dependensi yang diperlukan:
   ```bash
   npm install
   ```

### Menjalankan Proyek (Development)

Untuk melihat website di *browser* pada mode pengembangan:

```bash
npm run dev
```
Buka URL `http://localhost:5173` (atau *port* sesuai yang tertera di terminal) di *browser* Anda.

### Build (Produksi)

Jika Anda ingin mem-build proyek untuk *deployment* (publikasi):

```bash
npm run build
```
Folder `dist/` akan dihasilkan dan siap untuk diunggah ke layanan *hosting* pilihan Anda.

## Struktur Folder Singkat

```text
aurum-restaurant/
├── public/                 # Aset statis publik
├── src/
│   ├── assets/             # Gambar lokal dan ikon
│   ├── components/         # Komponen React (Navbar, Hero, dll)
│   ├── index.css           # Konfigurasi Tailwind & Global CSS
│   ├── App.jsx             # Komponen Utama (*Wrapper*)
│   └── main.jsx            # Titik masuk (*Entry Point*) aplikasi
├── eslint.config.js        # Konfigurasi *linter* ESLint
├── tailwind.config.js      # Konfigurasi Tema Tailwind CSS
├── vite.config.js          # Konfigurasi Vite
└── package.json            # Daftar pustaka (dependencies) dan perintah (scripts)
```

## Lisensi

Proyek ini menggunakan **MIT License**. Anda bebas menggunakan, memodifikasi, dan mendistribusikannya secara terbuka.
