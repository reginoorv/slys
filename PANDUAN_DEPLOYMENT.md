# Panduan Deployment Manual Website Barbershop

Dokumen ini berisi panduan lengkap cara melakukan deployment website barbershop ke platform hosting Netlify dan Vercel. Ikuti petunjuk step-by-step di bawah ini untuk mendeploy website Anda.

## Daftar Isi
- [Persiapan Sebelum Deployment](#persiapan-sebelum-deployment)
- [Deployment ke Netlify](#deployment-ke-netlify)
- [Deployment ke Vercel](#deployment-ke-vercel)
- [Menggunakan Domain Kustom](#menggunakan-domain-kustom)
- [Troubleshooting](#troubleshooting)

## Persiapan Sebelum Deployment

Sebelum melakukan deployment, pastikan Anda sudah melakukan langkah-langkah berikut:

1. **Build Project**  
   Jalankan perintah build untuk menghasilkan versi production website Anda:
   ```bash
   npm run build
   ```
   Perintah ini akan membuat folder `dist` yang berisi file-file statis website Anda.

2. **Pastikan Repository Git**  
   Pastikan project Anda sudah memiliki repository Git, jika belum:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - ready for deployment"
   ```

3. **Buat Akun pada Platform Hosting**  
   Daftar dan buat akun di [Netlify](https://www.netlify.com/) dan/atau [Vercel](https://vercel.com/).

## Deployment ke Netlify

### Metode 1: Deployment Manual dengan Drag & Drop

1. **Login ke Netlify**
   - Kunjungi [app.netlify.com](https://app.netlify.com)
   - Masuk dengan akun yang telah Anda buat

2. **Drag & Drop Folder Build**
   - Setelah login, Anda akan melihat dashboard Netlify
   - Cari area "Drag and drop your site folder here"
   - Buka file explorer di komputer Anda dan cari folder `dist` yang dihasilkan dari build
   - Seret (drag) dan lepaskan (drop) folder tersebut ke area yang ditentukan di halaman Netlify

3. **Tunggu Proses Upload**
   - Netlify akan mengunggah dan mendeploy website Anda
   - Setelah selesai, Anda akan mendapatkan URL unik untuk mengakses website Anda (contoh: happy-einstein-abc123.netlify.app)

### Metode 2: Deployment dengan GitHub

1. **Hubungkan dengan GitHub**
   - Di dashboard Netlify, klik tombol "New site from Git"
   - Pilih "GitHub" sebagai penyedia Git
   - Berikan akses ke Netlify untuk melihat repository Anda
   - Pilih repository website barbershop yang ingin di-deploy

2. **Konfigurasi Deployment**
   - Pada halaman konfigurasi, isi kolom berikut:
     - Branch to deploy: `main` (atau branch utama Anda)
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Klik "Deploy site"

3. **Tunggu Proses Deployment**
   - Netlify akan melakukan clone repository, menjalankan build, dan mendeploy website
   - Prosesnya biasanya memakan waktu 1-2 menit
   - Setelah selesai, website Anda akan tersedia di URL yang disediakan Netlify

4. **Konfigurasi Tambahan (Opsional)**
   - Di dashboard site Netlify, Anda dapat mengkonfigurasi:
     - Domain kustom
     - SSL/HTTPS
     - Redirect dan rewrite rules
     - Environment variables

## Deployment ke Vercel

### Metode 1: Deployment dengan Dashboard Vercel

1. **Login ke Vercel**
   - Kunjungi [vercel.com](https://vercel.com/)
   - Masuk dengan akun yang telah Anda buat

2. **Import Repository**
   - Klik tombol "Import Project" atau "New Project"
   - Pilih "Import Git Repository"
   - Pilih penyedia Git (GitHub, GitLab, atau Bitbucket)
   - Berikan akses ke Vercel
   - Pilih repository website barbershop Anda

3. **Konfigurasi Project**
   - Pada halaman konfigurasi, atur:
     - Framework Preset: Pilih "Vite" 
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Environment Variables (jika diperlukan)
   - Klik "Deploy"

4. **Tunggu Proses Deployment**
   - Vercel akan melakukan build dan deployment website Anda
   - Setelah selesai, Anda akan mendapatkan URL untuk mengakses website (contoh: barbershop.vercel.app)

### Metode 2: Deployment dengan Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login ke Vercel melalui CLI**
   ```bash
   vercel login
   ```
   Ikuti petunjuk untuk login dengan akun Vercel Anda.

3. **Deploy Project**
   - Buka terminal dan navigasi ke direktori project barbershop
   - Jalankan perintah:
   ```bash
   vercel
   ```
   - Anda akan diminta untuk mengkonfigurasi project:
     - Set up and deploy: Pilih "Y"
     - Link to existing project: Pilih "N" untuk project baru
     - Project name: Masukkan nama untuk project Anda
     - Framework preset: Pilih "Vite"
     - Override settings: Pilih "N" untuk menggunakan default

4. **Akses Website yang Sudah Di-deploy**
   - Setelah deployment selesai, Vercel akan memberikan URL untuk mengakses website Anda
   - Anda juga dapat melihat detail project di dashboard Vercel

## Menggunakan Domain Kustom

### Netlify - Menambahkan Domain Kustom

1. **Buka Dashboard Website**
   - Login ke Netlify dan pilih website yang telah di-deploy

2. **Tambahkan Domain**
   - Klik tab "Domain settings" atau "Domain management"
   - Klik "Add custom domain"
   - Masukkan domain yang ingin Anda gunakan (contoh: slysbarbershop.com)
   - Klik "Verify"

3. **Konfigurasi DNS**
   - Anda punya dua pilihan:
     - **Pilihan 1:** Gunakan Netlify DNS (direkomendasikan)
       - Klik "Set up Netlify DNS"
       - Ikuti petunjuk untuk menambahkan name server Netlify ke registrar domain Anda
     - **Pilihan 2:** Gunakan DNS provider Anda sendiri
       - Tambahkan CNAME record yang mengarah ke URL Netlify Anda
       - Tambahkan A record yang mengarah ke IP Netlify

4. **Aktifkan HTTPS**
   - Netlify secara otomatis menyediakan SSL gratis dengan Let's Encrypt
   - Klik "Verify DNS configuration" setelah mengatur DNS
   - Tunggu hingga domain terverifikasi dan SSL diatur (bisa memakan waktu hingga 24 jam)

### Vercel - Menambahkan Domain Kustom

1. **Buka Dashboard Project**
   - Login ke Vercel dan pilih project yang telah di-deploy

2. **Tambahkan Domain**
   - Klik tab "Settings" kemudian "Domains"
   - Masukkan domain Anda di kolom yang tersedia
   - Klik "Add"

3. **Konfigurasi DNS**
   - Anda akan diberikan petunjuk untuk mengkonfigurasi DNS Anda:
     - **Pilihan 1:** Gunakan Vercel DNS
       - Transfer domain Anda ke Vercel atau gunakan name server Vercel
     - **Pilihan 2:** Gunakan DNS provider Anda sendiri
       - Tambahkan catatan A atau CNAME seperti yang disarankan oleh Vercel

4. **Verifikasi Domain**
   - Vercel akan memverifikasi domain secara otomatis setelah konfigurasi DNS selesai
   - SSL/HTTPS akan diatur secara otomatis
   - Status domain akan berubah menjadi "Valid" setelah verifikasi berhasil

## Troubleshooting

### Masalah Umum pada Netlify

1. **Build Gagal**
   - Periksa log build di dashboard Netlify
   - Pastikan command build di pengaturan site sudah benar
   - Cek apakah ada dependency yang hilang

2. **Halaman 404 Setelah Refresh**
   - Buat file `_redirects` di folder `public` dengan isi:
   ```
   /* /index.html 200
   ```
   - Atau buat file `netlify.toml` di root project:
   ```toml
   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

3. **Masalah CORS**
   - Tambahkan header yang diperlukan di file `netlify.toml`:
   ```toml
   [[headers]]
     for = "/*"
       [headers.values]
         Access-Control-Allow-Origin = "*"
   ```

### Masalah Umum pada Vercel

1. **Build Gagal**
   - Periksa log build di dashboard Vercel
   - Pastikan Node.js version di pengaturan sudah sesuai
   - Cek apakah ada environment variables yang diperlukan

2. **Routing Error**
   - Buat file `vercel.json` di root project:
   ```json
   {
     "rewrites": [
       { "source": "/(.*)", "destination": "/index.html" }
     ]
   }
   ```

3. **Asset Tidak Terbaca**
   - Pastikan semua path asset menggunakan relative path
   - Jika menggunakan asset di `public`, akses langsung tanpa prefix `/public`
   - Cek apakah file ada di build output dengan memeriksa tab "Sources" di Vercel

---

Selamat! Anda telah berhasil mendeploy website barbershop ke platform hosting. Jika Anda memiliki pertanyaan lain, silakan menghubungi dukungan teknis terkait platform yang Anda gunakan atau konsultasikan dengan pengembang website Anda.