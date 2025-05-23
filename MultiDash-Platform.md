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
