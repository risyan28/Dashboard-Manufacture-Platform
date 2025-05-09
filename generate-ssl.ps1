# === Konfigurasi ===
$nginxCertPath = "C:\nginx-1.26.3\conf\certs"

# Buat folder certs jika belum ada
if (!(Test-Path $nginxCertPath)) {
    New-Item -ItemType Directory -Path $nginxCertPath | Out-Null
}

# Ambil semua IP lokal (IPv4, bukan loopback)
$ipList = Get-NetIPAddress -AddressFamily IPv4 `
    | Where-Object { $_.IPAddress -notlike "127.*" -and $_.IPAddress -notlike "169.*" } `
    | Select-Object -ExpandProperty IPAddress

# Path sementara
$tempPath = "$env:TEMP\mkcert"

# Buat folder temp jika belum ada
if (!(Test-Path $tempPath)) {
    New-Item -ItemType Directory -Path $tempPath | Out-Null
}

# Loop semua IP
foreach ($ip in $ipList) {
    Write-Host "Membuat sertifikat untuk $ip"

    # Generate sertifikat
    & mkcert -cert-file "$tempPath\cert.pem" -key-file "$tempPath\key.pem" $ip

    # Pindahkan dan rename
    Copy-Item "$tempPath\cert.pem" "$nginxCertPath\$ip.pem" -Force
    Copy-Item "$tempPath\key.pem" "$nginxCertPath\$ip-key.pem" -Force
}

Write-Host ""
Write-Host "Semua sertifikat berhasil dibuat dan disimpan di:"
Write-Host $nginxCertPath
