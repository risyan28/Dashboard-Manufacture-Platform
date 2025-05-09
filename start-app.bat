@echo off
REM === Pindah ke folder project Next.js ===
cd /d "%~dp0"

echo Menjalankan Next.js...
start "" /min cmd /c "npm run dev"

REM === Jalankan NGINX dari folder lain ===
cd /d "C:\nginx-1.26.3"

REM Cek dulu apakah nginx sudah jalan, kalau belum baru jalanin
tasklist | find /i "nginx.exe" >nul
if errorlevel 1 (
    start nginx
)

REM Tutup langsung tanpa nunggu
exit
