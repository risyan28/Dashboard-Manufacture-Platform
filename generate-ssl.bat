@echo off
title Generate SSL for Local IPs

echo Menjalankan generate-ssl.ps1...
powershell -ExecutionPolicy Bypass -File "%~dp0generate-ssl.ps1"

echo.
echo Reloading NGINX...
cd /d C:\nginx-1.26.3
nginx.exe -s reload

echo.
echo Sertifikat berhasil dibuat & NGINX direstart!
pause
