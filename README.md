# SaungDigital - Fusion of Innovation and Imagination

Website platform komunitas & resource kreatif digital: panduan Photoshop Plugin dengan Claude AI, 10 Realistic Photography Google Gems (Nano Banana 2), 35+ Style Karakter AI (Google Flow / ImageFX), serta Admin Portal & Member VIP Access.

---

## 🚀 Panduan Deploy ke GitHub & Vercel

### 1. Push Project ke GitHub

Buka terminal pada komputer lokal Anda di dalam folder proyek ini, lalu jalankan langkah-langkah berikut:

```bash
# 1. Inisialisasi Git (jika belum)
git init

# 2. Tambahkan semua file ke git staging
git add .

# 3. Buat commit pertama
git commit -m "feat: initial commit SaungDigital web app"

# 4. Ganti branch default ke main
git branch -M main

# 5. Hubungkan ke repository GitHub Anda (ganti URL sesuai repo Anda)
git remote add origin https://github.com/USERNAME_ANDA/NAMA_REPO_ANDA.git

# 6. Push kode ke GitHub
git push -u origin main
```

---

### 2. Deploy ke Vercel (Rekomendasi & Paling Mudah)

Website ini sudah dilengkapi konfigurasi `vercel.json` untuk dukungan Single Page Application (SPA) routing dan build otomatis Vite.

#### Cara A: Melalui Dashboard Vercel (Otomatis & Terhubung ke GitHub)
1. Buka [https://vercel.com](https://vercel.com) dan login dengan akun GitHub Anda.
2. Klik tombol **"Add New..."** lalu pilih **"Project"**.
3. Pilih repository GitHub **SaungDigital** yang telah Anda push tadi, lalu klik **"Import"**.
4. Konfigurasi Project:
   - **Framework Preset**: `Vite` (terdeteksi otomatis)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
5. Klik **"Deploy"**.
6. Dalam hitungan detik (~30 detik), website Anda sudah online di domain publik Vercel gratis (contoh: `https://saungdigital.vercel.app`). Setiap kali Anda melakukan `git push` ke GitHub, Vercel akan otomatis meng-update web Anda!

#### Cara B: Menggunakan Vercel CLI
Jika ingin deploy langsung dari terminal tanpa membuka web browser:
```bash
# Install Vercel CLI secara global (jika belum)
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy ke Preview
vercel

# Deploy langsung ke Production
vercel --prod
```

---

### 3. Deploy Alternatif: GitHub Pages

File `.github/workflows/deploy.yml` sudah disiapkan. Jika ingin mengaktifkan GitHub Pages gratis:
1. Di halaman repository GitHub Anda, buka tab **Settings** -> **Pages**.
2. Pada bagian **Build and deployment** -> **Source**, pilih **GitHub Actions**.
3. Setiap kali Anda melakukan `git push origin main`, GitHub Actions akan otomatis mem-build dan mempublikasikan web Anda ke:
   `https://USERNAME_ANDA.github.io/NAMA_REPO_ANDA/`

---

## 💻 Menjalankan di Komputer Lokal (Localhost)

```bash
# Install dependencies
npm install

# Jalankan development server
npm run dev
# Buka http://localhost:3000

# Build untuk production
npm run build

# Preview hasil build production lokal
npm run preview
```

---

## 🔐 Kredensial Akses

- **Halaman Admin Portal**: Akses melalui URL `/` lalu klik menu Admin, atau langsung ke `#admin`.
- **Akun Default Administrator**:
  - Username: `admin`
  - Password: `saungdigital123`
- **Akun Default Member VIP**:
  - Username: `member`
  - Password: `member123`
- *Catatan: Anda dapat mengubah kredensial, menambah akun, atau menyesuaikan perizinan langsung dari tab **Hak Akses Login** di dalam panel admin.*

---

## 🛠️ Tech Stack
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment Ready**: Vercel (`vercel.json`) & GitHub Actions (`.github/workflows/deploy.yml`)
