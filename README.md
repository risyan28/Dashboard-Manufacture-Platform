# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.

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

# MultiDash-Platform

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=white)

> **MultiDash-Platform** adalah platform multi-dashboard berbasis Next.js, dibangun untuk mendukung banyak dashboard dengan kebutuhan berbeda dalam satu ekosistem.

---

## 🚀 Tech Stack

- **Next.js** — Frontend Framework
- **Tailwind CSS** — Utility-first CSS Framework
- **Prisma ORM** — Database management
- **Docker** — Containerization
- **Vercel** — Deployment platform
- **PostgreSQL / MySQL** — (Optional, via Prisma)

---

## 📂 Project Structure

```bash
🔺 prisma/              # Prisma schema & migrations
🔺 public/              # Static files
🔺 src/                 # Application source code
    🔺 pages/           # Next.js Pages
    🔺 components/      # Reusable UI Components
    🔺 lib/             # Helpers & Utilities
    🔺 modules/         # Dashboard-specific modules
🔺 ssl/                 # SSL certificates
🔺 types/               # TypeScript types
🔺 .env                 # Environment variables
🔺 docker-compose.yml   # Docker config
🔺 Dockerfile           # Dockerfile
🔺 README.md            # Project Documentation
```

---

## ⚙️ Setup Development

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/MultiDash-Platform.git
   cd MultiDash-Platform
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup Environment**

   - Copy `.env.example` ke `.env`
   - Sesuaikan isi `.env` dengan kebutuhan.

4. **Run Development Server**

   ```bash
   npm run dev
   ```

   Buka [http://localhost:3000](http://localhost:3000) di browser 🚀

---

## 🐳 Running with Docker

```bash
docker-compose up --build
```

---

## 🚀 Deployment (Vercel)

- Pilih **Framework Preset**: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Tambahkan Environment Variables di Vercel dashboard

---

## 📁 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> Made with ❤️ by [YourName]

---

# 🔥 Notes

Karena ini multi-dashboard, struktur modul di `src/modules/` bisa dikembangkan:

- `src/modules/dashboard1`
- `src/modules/dashboard2`
- `src/modules/dashboard3`

Setiap dashboard modular & scalable brooo 🚀
