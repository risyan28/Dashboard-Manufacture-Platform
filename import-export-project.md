# 🚀 Next.js PWA Dockerized Project

Project ini adalah aplikasi Next.js yang sudah dikemas dalam Docker dengan dukungan PWA, SSL lokal, dan reverse proxy via NGINX.

---

## 📦 FITUR

- ✅ Next.js 15 (App Router)
- ✅ Dockerized + Docker Compose
- ✅ NGINX reverse proxy (port 443)
- ✅ SSL lokal via `mkcert`
- ✅ Prisma + PostgreSQL-ready
- ✅ Bisa dijalankan dalam mode dev maupun production

---

## 📤 EXPORT PROJECT (untuk pindah ke PC/server lain)

Gunakan script berikut:

```bat
export-project.bat
```

🧠 Apa yang dilakukan:
- Mengekspor seluruh project (tanpa `node_modules`, `.next`)
- Hasil ZIP bernama: `nextjs-pwa-export.zip`
- Siap dikirim atau di-copy ke device/server lain

---

## 📥 IMPORT PROJECT (di PC/server tujuan)

Jalankan:

```bat
import-project.bat
```

🧠 Yang terjadi secara otomatis:
- Ekstrak `nextjs-pwa-export.zip` ke folder `nextjs-pwa/`
- Cek apakah Docker tersedia:
  - ✅ Jika **Docker ada** → langsung `docker compose up -d --build`
  - ❌ Jika **Docker tidak tersedia** → info: jalankan manual `npm install` + `npm run dev`

📌 Project akan langsung aktif di:
- http://localhost:3000 (dev)
- https://localhost (via NGINX SSL - production)

---

## 🛠 PERSIAPAN DI PC TUJUAN

Pastikan:
- Docker Desktop sudah terinstall & running
- Atau Node.js v18+ terinstall jika tidak menggunakan Docker
- Sertifikat SSL (folder `ssl/`) sudah ikut di-zip

---

## 🔁 SWITCH MODE (DEV vs PROD)

| Mode | Cara |
|------|------|
| Development (hot reload) | `npm run dev` atau `docker-compose-dev.yml` |
| Production (build static) | `docker compose up -d --build` (default) |

---

## 🧠 FILE PENTING

| File | Fungsi |
|------|--------|
| `Dockerfile` | Build image Next.js |
| `docker-compose.yml` | Jalankan Next.js + NGINX container |
| `nginx.conf` | Konfigurasi reverse proxy + SSL |
| `ssl/` | Hasil generate `mkcert` |
| `export-project.bat` | Auto zip project |
| `import-project.bat` | Auto extract & jalankan project |

---

## 📫 Butuh Bantuan?

Hubungi dev/server admin kamu, atau lihat isi file `.md` ini kapan aja.  
Happy deploying! 🐳🚀