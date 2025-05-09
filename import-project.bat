@echo off
setlocal

set ZIP_NAME=nextjs-pwa-export.zip
set EXTRACT_FOLDER=nextjs-pwa

echo.
echo 🔽 Mengekstrak %ZIP_NAME%...
echo.

REM Cek file ZIP ada atau nggak
if not exist %ZIP_NAME% (
    echo ❌ File %ZIP_NAME% tidak ditemukan.
    pause
    exit /b
)

REM Buat folder ekstrak dan ekstrak isi ZIP
mkdir %EXTRACT_FOLDER%
powershell Expand-Archive -Path %ZIP_NAME% -DestinationPath %EXTRACT_FOLDER% -Force

echo ✅ Ekstraksi selesai ke folder: %EXTRACT_FOLDER%
echo.

REM Cek apakah Docker tersedia
where docker >nul 2>nul
if %errorlevel%==0 (
    echo 🐳 Docker terdeteksi!
    echo.

    REM Cek apakah docker-compose.yml ada
    if exist "%EXTRACT_FOLDER%\docker-compose.yml" (
        echo 🚀 Menjalankan project dengan Docker...
        cd %EXTRACT_FOLDER%
        docker compose up -d --build
        echo ✅ Project sedang berjalan. Buka browser: http://localhost:3000
    ) else (
        echo ⚠️ Tidak ditemukan docker-compose.yml. Project akan dijalankan dengan npm run dev
        cd %EXTRACT_FOLDER%
        call npm install
        call npm run dev
    )
) else (
    echo ❌ Docker tidak ditemukan di PC ini.
    echo 💡 Lo bisa jalanin project ini secara manual dengan:
    echo     cd %EXTRACT_FOLDER%
    echo     npm install
    echo     npm run dev
)

echo.
pause
endlocal
