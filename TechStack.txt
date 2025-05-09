# 🧱 Next.js PWA App – Tech Stack & Setup Documentation

## 📦 Overview

Dokumentasi lengkap untuk project Next.js + PWA yang udah di bangun.
Semua stack dan setup udah siap jalan di local maupun device lain, tinggal lanjut ke integrasi database PostgreSQL.

---

## 💻 Frontend

- ✅ **Next.js v15.0.1** – React Framework untuk SSR, ISR, SSG
- ✅ **TypeScript** – Static typing untuk maintainability
- ✅ **TailwindCSS** – Utility-first CSS styling
- ✅ **PWA (Progressive Web App)** – via `next-pwa`, support install di semua device
- ✅ **Turbopack** – Alternatif bundler Next.js, super cepat
- ✅ **React Icons / Lucide / Shadcn UI** – UI component library (optional tapi recommended)

---

## 🔌 API / Backend

- ✅ **tRPC** – End-to-end type-safe API call
- ✅ **Prisma** – ORM untuk integrasi ke database dengan schema & query yang typesafe
- ✅ **NextAuth.js** – Authentication dan session handling
- 🔜 **PostgreSQL** – Database relational yang akan segera diintegrasikan

---

## 🌐 Server & DevOps

- ✅ **NGINX (Reverse Proxy)** – Handle HTTPS dan routing ke Next.js
- ✅ **mkcert** – SSL lokal (self-signed certificate trusted di semua device)
- ✅ **Multi-IP SSL Support** – Otomatis generate sertifikat SSL untuk semua IP
- ✅ **PowerShell (.ps1)** – Script otomatis SSL + restart nginx
- ✅ **Batch (.bat)** – One-click start, stop, restart (Next.js + NGINX)
- ✅ **Local HTTPS Access** – Bisa diakses oleh device lain via IP (nggak butuh internet)
- ✅ **Auto Redirect HTTP → HTTPS** – Biar aman dan mendukung PWA install prompt

---

## ⚙️ Fitur Tambahan PWA

- ✅ Auto detect & prompt install PWA jika belum di-install
- ✅ Smooth animation untuk install prompt (Tailwind custom animation)
- ✅ Icon manifest dan screenshot manifest sudah setup sesuai standar
- ✅ SSR friendly dengan conditional client component untuk install prompt

---

## 🔜 Next Plan

- [ ] Integrasi ke PostgreSQL dengan Prisma
- [ ] Setup deployment server / VPS dengan config mirip lokal
- [ ] Notifikasi Push (optional, pakai Firebase atau OneSignal)

---

## 📝 Notes

- PWA bisa diakses dan di-install dari device manapun yang satu jaringan WiFi
- Jangan lupa import SSL certificate di device (jika perlu)
- Gunakan IP lokal HTTPS (`https://192.168.x.x`) untuk test dan install dari mobile / tablet

---

## ✅ Deployment Checklist

- [✅] SSL aktif via mkcert
- [✅] NGINX proxy jalan dan auto redirect ke HTTPS
- [✅] Aplikasi Next.js berjalan di port 3000
- [✅] PWA prompt muncul dan bisa di-install
- [ ] PostgreSQL sudah tersambung
- [ ] Deploy ke server production / VPS

## 🚀 Local Development Workflow

1. Install Dependencies:
   npm install

2. Setup SSL Lokal (HTTPS untuk PWA):

   - Install mkcert
   - Generate sertifikat:
     mkcert -install
     mkcert localhost 192.168.x.x

3. Start Dev:
   npm run dev

4. Akses dari device lain (HP/Tablet):
   https://192.168.x.x:3000

📱 Progressive Web App (PWA)

Fitur:

- Installable di Android, iOS, dan Desktop
- Offline support (opsional Workbox caching)
- Custom install prompt (install banner)

📁 Struktur PWA

- public/manifest.json
- public/icons/\* (icon 128x128, 512x512)
- Custom banner via InstallPrompt.tsx

🔐 Authentication

- Implemented via NextAuth.js
- Integrasi dengan tRPC dan session
- Siap untuk integrasi database PostgreSQL

🧰 File & Script Automation

| Tool       | Fungsi                                 |
| ---------- | -------------------------------------- |
| start.bat  | Jalankan app dan server lokal          |
| stop.bat   | Stop semua service                     |
| ssl.ps1    | Generate + install SSL mkcert otomatis |
| nginx.conf | Routing HTTP → HTTPS ke Next.js        |

📦 Database (Coming Soon)

- PostgreSQL akan digunakan untuk:
- Menyimpan user, session
- Data utama seperti produk, transaksi, dll
- ORM via Prisma untuk typesafe query

✅ Deployment Ready

- Bisa self-host via VPS (NGINX + PM2)
- Atau deploy ke platform seperti:
- Vercel (tanpa SSL manual)
- Railway / Supabase (untuk PostgreSQL hosting)

📌 Catatan Tambahan

- Jika PWA tidak bisa install:
- Pastikan manifest.json valid
- Gunakan https dan icon yang sesuai
- Tambahkan handler beforeinstallprompt

## 🧩 Tech Stack & Dependency Version

| Package / Tool            | Versi               | Keterangan                             |
| ------------------------- | ------------------- | -------------------------------------- |
| **Next.js**               | ^15.0.1             | App Router, Turbo, PWA Ready           |
| **React**                 | ^18.3.1             | Library utama                          |
| **TypeScript**            | ^5.5.3              | Static typing                          |
| **TailwindCSS**           | ^3.4.3              | Styling modern & utility-first         |
| **tRPC**                  | ^11.0.0-rc.446      | End-to-end API type-safe               |
| **Prisma**                | ^6.5.0              | ORM ke PostgreSQL (dengan CLI tools)   |
| **NextAuth.js**           | ^4.24.11            | Auth dan session management            |
| **next-pwa**              | ^5.6.0              | Untuk fitur Progressive Web App        |
| **tailwindcss-animate**   | ^1.0.7              | Custom animation bawaan Tailwind       |
| **Lucide / @shadcn/ui**   | ^0.479.0 / ^0.0.4   | UI Component modern                    |
| **SuperJSON / Zod**       | ^2.2.1 / ^3.23.3    | Schema validation & serialization tRPC |
| **clsx / tailwind-merge** | Latest              | Class merging dan clean code           |
| **ESLint + Prettier**     | ^8.57.0 / ^3.3.2    | Lint & code formatting                 |
| **PostgreSQL**            | 🔜 Akan diintegrasi | Database relasional utama              |

## 📦 Built-in Script & Dev Commands

| Script                 | Perintah                                  | Fungsi |
| ---------------------- | ----------------------------------------- | ------ |
| `npm run dev`          | Jalankan dev server (port 3000, semua IP) |
| `npm run build`        | Build project (production)                |
| `npm run start`        | Start production server                   |
| `npm run preview`      | Build lalu langsung preview               |
| `npm run db:push`      | Sync schema ke database (tanpa migrate)   |
| `npm run db:migrate`   | Jalankan migration                        |
| `npm run db:studio`    | Buka Prisma Studio (GUI)                  |
| `npm run format:write` | Auto format semua file dengan Prettier    |
| `npm run lint:fix`     | Fix issue dari ESLint secara otomatis     |

---
