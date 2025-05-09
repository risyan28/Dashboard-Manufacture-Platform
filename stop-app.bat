@echo off
title Stop NGINX + Next.js
cls

REM === Stop NGINX ===
setlocal enabledelayedexpansion
set count=0
echo.
<nul set /p=Stopping NGINX
for /L %%i in (1,1,5) do (
    ping -n 1 -w 100 127.0.0.1 >nul
    <nul set /p=.
)
taskkill /F /IM nginx.exe > nul 2>&1
echo  [DONE]

REM === Stop Next.js (asumsi port 3000) ===
echo.
<nul set /p=Stopping Next.js
for /L %%i in (1,1,5) do (
    ping -n 1 -w 100 127.0.0.1 >nul
    <nul set /p=.
)
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :3000') do taskkill /F /PID %%a > nul 2>&1
echo  [DONE]

echo.
echo Semua service berhasil dihentikan.
ping -n 1 -w 100 127.0.0.1 >nul
exit
