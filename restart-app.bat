@echo off
title Restart NGINX + Next.js

:: Stop services dulu
taskkill /F /IM nginx.exe > nul 2>&1
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do taskkill /F /PID %%a > nul 2>&1

:: Start Next.js
start "" cmd /c "cd /d %~dp0 && npm run dev"

:: Start NGINX
cd /d C:\nginx-1.26.3
start nginx.exe
