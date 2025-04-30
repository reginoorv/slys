# Panduan Lengkap Mengubah Konten Website Barbershop

Dokumen ini berisi panduan lengkap tentang cara mengubah berbagai elemen pada website barbershop, termasuk gambar, teks, warna, dan komponen lainnya. Panduan ini disusun agar mudah dimengerti bahkan untuk pengguna yang tidak memiliki pengetahuan teknis mendalam.

## Daftar Isi
- [Persiapan Awal](#persiapan-awal)
- [Mengubah Gambar](#mengubah-gambar)
- [Mengubah Teks](#mengubah-teks)
- [Mengubah Warna](#mengubah-warna)
- [Mengubah Layanan](#mengubah-layanan)
- [Mengubah Ulasan](#mengubah-ulasan)
- [Mengubah Informasi Kontak](#mengubah-informasi-kontak)
- [Menyesuaikan Tampilan Responsive](#menyesuaikan-tampilan-responsive)

## Persiapan Awal

Sebelum melakukan perubahan pada website, pastikan Anda melakukan langkah-langkah berikut:

1. **Backup Project**  
   Selalu buat salinan cadangan dari project Anda sebelum melakukan perubahan besar:
   ```bash
   # Copy seluruh folder project ke lokasi backup
   cp -r website-barbershop/ backup-website-barbershop/
   ```

2. **Jalankan Mode Development**  
   Pastikan server development berjalan saat Anda melakukan perubahan agar bisa melihat hasilnya secara langsung:
   ```bash
   npm run dev
   ```

3. **Persiapkan Editor Kode**  
   Gunakan editor seperti VSCode, Sublime Text, atau editor pilihan Anda untuk membuka dan mengedit file-file project.

## Mengubah Gambar

### 1. Menyiapkan Gambar Baru

Sebelum mengganti gambar di website, pastikan gambar baru Anda memenuhi kriteria berikut:

- Format gambar: JPG, PNG, atau SVG (disarankan)
- Ukuran file: dioptimalkan untuk web, biasanya di bawah 500KB
- Dimensi: sesuaikan dengan kebutuhan, untuk kartu layanan biasanya menggunakan 500x350 piksel
- Penyimpanan gambar: simpan di folder `client/public/images/`

### 2. Mengganti Gambar pada Kartu Layanan

Untuk mengganti gambar di kartu layanan (service card), ikuti langkah-langkah berikut:

1. **Upload Gambar Baru**  
   Tambahkan gambar baru ke folder `client/public/images/`:
   ```bash
   # Contoh menggunakan terminal
   cp jalur/ke/gambar/baru.jpg client/public/images/
   ```

2. **Ubah Path Gambar di File App.tsx**  
   Buka file `client/src/App.tsx` dan cari bagian kartu layanan yang ingin diubah:

   ```jsx
   {/* Cari kode seperti ini */}
   <div className="card reveal">
     <div className="h-56 overflow-hidden relative">
       <img 
         src="https://images.unsplash.com/photo-1599351431608-4c1a451cae49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=350&q=80" 
         alt="Classic Haircut"
         className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
       />
       <div className="absolute top-0 right-0 bg-accent text-dark font-bold py-1 px-3 m-2 rounded">Popular</div>
     </div>
     {/* ... konten lainnya ... */}
   </div>
   ```

3. **Ganti URL Gambar**  
   Ubah nilai `src` dengan path gambar baru Anda:

   ```jsx
   {/* Ubah path gambar */}
   <img 
     src="/images/nama-gambar-baru.jpg" 
     alt="Classic Haircut"
     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
   />
   ```

4. **Untuk Menggunakan Gambar dari Internet**  
   Jika ingin menggunakan gambar dari internet, langsung gunakan URL lengkapnya:

   ```jsx
   <img 
     src="https://contoh-website.com/path/ke/gambar.jpg" 
     alt="Classic Haircut"
     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
   />
   ```

### 3. Mengganti Gambar Hero (Banner Utama)

Untuk mengganti gambar banner utama di bagian atas website:

1. **Cari Bagian Hero di App.tsx**  
   Temukan bagian dengan komentar `{/* Hero Section */}`:

   ```jsx
   {/* Hero Section */}
   <section id="home" className="relative h-screen">
     <div className="absolute inset-0 z-0">
       <img 
         src="/images/hero-bg.jpg" 
         alt="Barbershop Interior" 
         className="w-full h-full object-cover"
       />
       {/* ... konten lainnya ... */}
     </div>
   </section>
   ```

2. **Ganti Path Gambar**  
   Ubah URL gambar dengan gambar baru Anda:

   ```jsx
   <img 
     src="/images/gambar-hero-baru.jpg" 
     alt="Barbershop Interior" 
     className="w-full h-full object-cover"
   />
   ```

### 4. Mengubah Logo dan Favicon

1. **Mengganti Logo**  
   Cari bagian logo di header website dalam file `App.tsx`:

   ```jsx
   <div className="flex items-center">
     <i className="fas fa-cut text-accent mr-2"></i>
     <h1 className="text-2xl font-poppins font-bold">
       Sly's <span className="text-secondary">Barbershop</span>
     </h1>
   </div>
   ```

   Jika ingin menggunakan gambar logo sebagai pengganti teks, ubah menjadi:

   ```jsx
   <div className="flex items-center">
     <img 
       src="/images/logo.png" 
       alt="Sly's Barbershop Logo" 
       className="h-10 mr-2"
     />
   </div>
   ```

2. **Mengganti Favicon**  
   Favicon adalah ikon kecil yang muncul di tab browser. Untuk menggantinya:
   
   - Siapkan file favicon baru (format .ico, .png, atau .svg)
   - Ganti file di `client/public/favicon.svg` dengan file favicon baru Anda
   - Pastikan nama file dan referensi dalam `index.html` sesuai

## Mengubah Teks

### 1. Mengubah Judul dan Headline

1. **Mengubah Judul Halaman (Title)**  
   Buka file `client/index.html` dan cari tag `<title>`:

   ```html
   <title>Sly's Barbershop</title>
   ```

   Ubah teks tersebut dengan judul baru:

   ```html
   <title>Nama Baru Barbershop</title>
   ```

2. **Mengubah Headline dan Subheadline**  
   Buka file `client/src/App.tsx` dan cari bagian headline website:

   ```jsx
   <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light mb-4 animate-fade-in">
     Expertise in <span className="text-accent">Classic</span> Grooming
   </h1>
   <p className="text-xl text-gray max-w-lg mb-8 animate-slide-up">
     Where traditional techniques meet modern style for the discerning gentleman.
   </p>
   ```

   Ubah teks tersebut sesuai kebutuhan Anda:

   ```jsx
   <h1 className="text-4xl md:text-6xl font-poppins font-bold text-light mb-4 animate-fade-in">
     Gaya Rambut <span className="text-accent">Premium</span> Untuk Pria
   </h1>
   <p className="text-xl text-gray max-w-lg mb-8 animate-slide-up">
     Tempat terbaik untuk mendapatkan potongan rambut berkualitas dengan harga terjangkau.
   </p>
   ```

### 2. Mengubah Deskripsi Layanan

1. **Temukan Kartu Layanan**  
   Di file `client/src/App.tsx`, cari bagian kartu layanan yang ingin diubah:

   ```jsx
   <div className="card-content">
     <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Classic Haircut</h3>
     <p className="text-dark-gray mb-4">
       Precision scissor cut with attention to detail, finished with styling to suit your preference.
     </p>
     <div className="flex items-center justify-between">
       <span className="text-primary font-semibold">$25</span>
       <div className="flex items-center text-dark-gray">
         <i className="far fa-clock mr-2"></i>
         <span>30 min</span>
       </div>
     </div>
   </div>
   ```

2. **Ubah Judul dan Deskripsi**  
   Ganti teks judul, deskripsi, harga, dan durasi sesuai kebutuhan:

   ```jsx
   <div className="card-content">
     <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Potongan Klasik</h3>
     <p className="text-dark-gray mb-4">
       Potongan rambut presisi dengan gunting, penuh perhatian terhadap detail, diakhiri dengan styling sesuai preferensi Anda.
     </p>
     <div className="flex items-center justify-between">
       <span className="text-primary font-semibold">Rp250.000</span>
       <div className="flex items-center text-dark-gray">
         <i className="far fa-clock mr-2"></i>
         <span>30 menit</span>
       </div>
     </div>
   </div>
   ```

### 3. Mengubah Teks Bagian Tentang Kami (About)

Temukan bagian "About" di file `App.tsx` dan lakukan perubahan teks sesuai kebutuhan:

```jsx
{/* About Section */}
<section id="about" className="py-20">
  <div className="container mx-auto px-6">
    <div className="flex flex-col items-center mb-12 reveal">
      <div className="flex items-center mb-4">
        <div className="h-1 w-10 bg-accent"></div>
        <p className="mx-4 text-secondary font-semibold">TENTANG KAMI</p>
        <div className="h-1 w-10 bg-accent"></div>
      </div>
      <h2 className="text-3xl md:text-4xl font-poppins font-bold text-primary mb-2">Tradisi Keunggulan Kami</h2>
      <p className="text-center text-dark-gray max-w-2xl mt-4">
        Dengan pengalaman lebih dari 15 tahun, kami menawarkan layanan terbaik dengan standar kualitas tertinggi.
      </p>
    </div>
    
    {/* ... konten lainnya ... */}
  </div>
</section>
```

## Mengubah Warna

Website barbershop menggunakan skema warna yang didefinisikan di file `client/src/index.css`. Untuk mengubah warna:

1. **Buka File CSS Utama**  
   Buka file `client/src/index.css` dan cari bagian variabel warna:

   ```css
   :root {
     --primary: #0B2545;
     --secondary: #13315C;
     --accent: #B9A55A;
     --dark: #134074;
     --light: #F8F8F8;
     --gray: #EEF4ED;
     --dark-gray: #555555;
   }
   ```

2. **Ubah Kode Warna**  
   Ganti nilai warna dengan kode hex warna pilihan Anda:

   ```css
   :root {
     --primary: #1F2937;    /* Warna primer baru */
     --secondary: #374151;  /* Warna sekunder baru */
     --accent: #F59E0B;     /* Warna aksen baru */
     --dark: #111827;       /* Warna gelap baru */
     --light: #F9FAFB;      /* Warna terang baru */
     --gray: #F3F4F6;       /* Warna abu-abu baru */
     --dark-gray: #4B5563;  /* Warna abu-abu gelap baru */
   }
   ```

3. **Selain Menggunakan Kode Hex, Anda Juga Bisa Menggunakan:**
   - Nama warna: `red`, `blue`, `forestgreen`
   - RGB: `rgb(255, 0, 0)`
   - RGBA: `rgba(255, 0, 0, 0.5)` (dengan transparansi)
   - HSL: `hsl(0, 100%, 50%)`

## Mengubah Layanan

### 1. Menambah Layanan Baru

Untuk menambahkan layanan baru pada bagian Services:

1. **Temukan Grid Layanan**  
   Di file `App.tsx`, cari bagian dengan class `grid` yang berisi kartu-kartu layanan:

   ```jsx
   <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
     {/* Kartu layanan pertama */}
     <div className="card reveal">
       {/* ... */}
     </div>
     
     {/* Kartu layanan kedua */}
     <div className="card reveal">
       {/* ... */}
     </div>
     
     {/* ... kartu layanan lain ... */}
   </div>
   ```

2. **Salin dan Tempel Kartu Layanan**  
   Salin salah satu blok kartu layanan dan tempel setelah kartu layanan terakhir:

   ```jsx
   {/* Kartu layanan baru */}
   <div className="card reveal">
     <div className="h-56 overflow-hidden relative">
       <img 
         src="/images/layanan-baru.jpg" 
         alt="Nama Layanan Baru"
         className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
       />
     </div>
     <div className="card-content">
       <h3 className="text-xl font-poppins font-semibold mb-3 border-accent">Nama Layanan Baru</h3>
       <p className="text-dark-gray mb-4">
         Deskripsi detail tentang layanan baru Anda dan apa saja yang termasuk di dalamnya.
       </p>
       <div className="flex items-center justify-between">
         <span className="text-primary font-semibold">Rp200.000</span>
         <div className="flex items-center text-dark-gray">
           <i className="far fa-clock mr-2"></i>
           <span>45 menit</span>
         </div>
       </div>
     </div>
   </div>
   ```

3. **Sesuaikan Informasi**  
   Ganti semua informasi termasuk gambar, nama layanan, deskripsi, harga, dan durasi.

### 2. Menghapus Layanan

Untuk menghapus layanan yang tidak diinginkan:

1. **Temukan Kartu Layanan**  
   Identifikasi blok kode untuk layanan yang ingin dihapus:

   ```jsx
   {/* Kartu layanan yang ingin dihapus */}
   <div className="card reveal">
     {/* ... kode kartu layanan ... */}
   </div>
   ```

2. **Hapus Seluruh Blok Kode**  
   Hapus keseluruhan blok kode dari awal `<div className="card reveal">` hingga `</div>` penutup yang sesuai.

## Mengubah Ulasan

### 1. Mengedit Ulasan Pelanggan

1. **Temukan Bagian Ulasan**  
   Di file `App.tsx`, cari bagian dengan id `reviews`:

   ```jsx
   <section id="reviews" className="py-20 bg-gray">
     {/* ... kode ulasan ... */}
     <div id="reviews-container" className="flex transition-transform duration-500">
       {/* Ulasan pertama */}
       <div className="w-full min-w-full md:px-6">
         <div className="bg-light p-6 md:p-8 rounded-lg shadow-lg">
           {/* ... isi ulasan ... */}
         </div>
       </div>
       
       {/* Ulasan lainnya ... */}
     </div>
     {/* ... kode lainnya ... */}
   </section>
   ```

2. **Ubah Konten Ulasan**  
   Modifikasi salah satu blok ulasan:

   ```jsx
   <div className="w-full min-w-full md:px-6">
     <div className="bg-light p-6 md:p-8 rounded-lg shadow-lg">
       <div className="flex items-center mb-4">
         <img 
           src="/images/foto-pelanggan-baru.jpg" 
           alt="Foto Pelanggan" 
           className="w-14 h-14 rounded-full object-cover mr-4"
         />
         <div>
           <h4 className="font-poppins font-semibold">Nama Pelanggan Baru</h4>
           <div className="star-rating mt-1">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
           </div>
         </div>
       </div>
       <p className="text-dark-gray">
         Ulasan baru dari pelanggan yang berisi testimoni tentang pengalaman mereka menggunakan layanan barbershop Anda.
       </p>
     </div>
   </div>
   ```

### 2. Menambah Ulasan Baru

1. **Salin Blok Ulasan**  
   Salin salah satu blok ulasan pelanggan lengkap:

   ```jsx
   <div className="w-full min-w-full md:px-6">
     <div className="bg-light p-6 md:p-8 rounded-lg shadow-lg">
       {/* ... isi ulasan ... */}
     </div>
   </div>
   ```

2. **Tempel dan Modifikasi**  
   Tempel blok yang disalin setelah ulasan terakhir dan sesuaikan kontennya:

   ```jsx
   <div className="w-full min-w-full md:px-6">
     <div className="bg-light p-6 md:p-8 rounded-lg shadow-lg">
       <div className="flex items-center mb-4">
         <img 
           src="/images/pelanggan-baru.jpg" 
           alt="Nama Pelanggan Baru" 
           className="w-14 h-14 rounded-full object-cover mr-4"
         />
         <div>
           <h4 className="font-poppins font-semibold">Nama Pelanggan Baru</h4>
           <div className="star-rating mt-1">
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star"></i>
             <i className="fas fa-star-half-alt"></i>
           </div>
         </div>
       </div>
       <p className="text-dark-gray">
         Testimoni baru dari pelanggan yang belum pernah ditampilkan sebelumnya.
       </p>
     </div>
   </div>
   ```

3. **Perbarui Dot Indicators**  
   Karena jumlah ulasan bertambah, pastikan juga dot indicators diperbarui secara otomatis melalui JavaScript yang sudah ada.

## Mengubah Informasi Kontak

### 1. Mengedit Informasi Alamat, Telepon, dan Email

1. **Temukan Bagian Kontak**  
   Di file `App.tsx`, cari bagian dengan id `contact`:

   ```jsx
   <section id="contact" className="py-20 bg-gray">
     {/* ... */}
     <ul className="space-y-6">
       <li className="flex items-start">
         <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
           <i className="fas fa-map-marker-alt text-secondary"></i>
         </div>
         <div>
           <h4 className="font-opensans font-semibold mb-1">Address</h4>
           <p>123 Main Street, Anytown, ST 12345</p>
         </div>
       </li>
       {/* ... info kontak lainnya ... */}
     </ul>
   </section>
   ```

2. **Ubah Informasi Kontak**  
   Sesuaikan teks alamat, telepon, dan email:

   ```jsx
   <li className="flex items-start">
     <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
       <i className="fas fa-map-marker-alt text-secondary"></i>
     </div>
     <div>
       <h4 className="font-opensans font-semibold mb-1">Alamat</h4>
       <p>Jl. Merdeka No. 123, Jakarta Pusat, 10110</p>
     </div>
   </li>
   
   <li className="flex items-start">
     <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
       <i className="fas fa-phone-alt text-secondary"></i>
     </div>
     <div>
       <h4 className="font-opensans font-semibold mb-1">Telepon</h4>
       <p>(021) 1234-5678</p>
     </div>
   </li>
   
   <li className="flex items-start">
     <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-4">
       <i className="fas fa-envelope text-secondary"></i>
     </div>
     <div>
       <h4 className="font-opensans font-semibold mb-1">Email</h4>
       <p>info@barbershopanda.com</p>
     </div>
   </li>
   ```

### 2. Mengubah Jam Operasional

1. **Temukan Bagian Jam Operasional**  
   Cari bagian yang menampilkan jam operasional:

   ```jsx
   <div className="card">
     <div className="card-content">
       <h3 className="text-xl font-poppins font-semibold mb-6 border-left-accent">Business Hours</h3>
       <ul className="space-y-4">
         <li className="flex justify-between items-center">
           <span className="font-opensans font-semibold">Monday - Friday</span>
           <span className="px-3 py-1 bg-primary text-light rounded">9:00 AM - 7:00 PM</span>
         </li>
         {/* ... jam operasional lainnya ... */}
       </ul>
     </div>
   </div>
   ```

2. **Ubah Jam Operasional**  
   Sesuaikan hari dan jam operasional:

   ```jsx
   <ul className="space-y-4">
     <li className="flex justify-between items-center">
       <span className="font-opensans font-semibold">Senin - Jumat</span>
       <span className="px-3 py-1 bg-primary text-light rounded">10:00 - 19:00</span>
     </li>
     <li className="flex justify-between items-center">
       <span className="font-opensans font-semibold">Sabtu</span>
       <span className="px-3 py-1 bg-primary text-light rounded">09:00 - 18:00</span>
     </li>
     <li className="flex justify-between items-center">
       <span className="font-opensans font-semibold">Minggu</span>
       <span className="px-3 py-1 bg-primary text-light rounded">Tutup</span>
     </li>
   </ul>
   ```

### 3. Mengubah Peta Google Maps

Untuk mengubah peta lokasi:

1. **Dapatkan Embed Code Baru**  
   - Kunjungi Google Maps
   - Cari lokasi barbershop Anda
   - Klik "Bagikan" > "Sematkan peta"
   - Salin kode HTML yang diberikan

2. **Ganti iframe Peta di Bagian Kontak**  
   Temukan dan ganti kode iframe:

   ```jsx
   <iframe 
     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215173352747!2d-73.9885693!3d40.7410446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3820e39c1%3A0x9a09c11dae84a258!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629877533671!5m2!1sen!2sus" 
     width="100%" 
     height="100%" 
     style={{ border: 0, minHeight: '500px' }} 
     allowFullScreen 
     loading="lazy"
     title="Sly's Barbershop Location"
   ></iframe>
   ```
   
   Dengan kode baru dari Google Maps:

   ```jsx
   <iframe 
     src="https://www.google.com/maps/embed?pb=KODE_BARU_DARI_GOOGLE_MAPS" 
     width="100%" 
     height="100%" 
     style={{ border: 0, minHeight: '500px' }} 
     allowFullScreen 
     loading="lazy"
     title="Lokasi Barbershop Anda"
   ></iframe>
   ```

## Menyesuaikan Tampilan Responsive

Website barbershop sudah didesain agar responsif di berbagai ukuran layar. Namun, jika Anda ingin menyesuaikan tampilan untuk ukuran layar tertentu:

### 1. Memahami Media Queries

Tampilan responsive diatur melalui media queries di CSS. Beberapa breakpoint utama:

```css
/* Mobile (default) */
.element {
  width: 100%;
}

/* Tablet dan layar lebih besar */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    width: 33.333%;
  }
}
```

### 2. Menyesuaikan Grid Layanan

Untuk mengubah jumlah kolom pada grid layanan:

```jsx
{/* Dari: */}
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{/* Menjadi (jika ingin 2 kolom di desktop): */}
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

{/* Atau (jika ingin 4 kolom di desktop): */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
```

### 3. Menyesuaikan Font Size pada Mobile

Anda mungkin ingin mengubah ukuran font pada perangkat mobile. Cari kode CSS terkait di `index.css` atau kelas dengan notasi `text-4xl md:text-6xl` yang menandakan ukuran berbeda untuk mobile dan desktop.

```jsx
{/* Dari: */}
<h1 className="text-4xl md:text-6xl font-poppins font-bold">

{/* Menjadi (lebih kecil di mobile): */}
<h1 className="text-3xl md:text-6xl font-poppins font-bold">

{/* Atau (lebih besar di mobile): */}
<h1 className="text-5xl md:text-6xl font-poppins font-bold">
```

---

Selamat! Sekarang Anda memiliki pengetahuan untuk mengubah berbagai elemen pada website barbershop. Jika masih ada pertanyaan atau kesulitan, jangan ragu untuk menghubungi pengembang website Anda.