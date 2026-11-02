$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

Write-Host ''
Write-Host '========================================' -ForegroundColor Cyan
Write-Host '       STUDYFLOW - ACCES RESEAU' -ForegroundColor Cyan
Write-Host '========================================' -ForegroundColor Cyan

$ip = Get-NetIPConfiguration |
  Where-Object { $_.IPv4DefaultGateway -and $_.NetAdapter.Status -eq 'Up' -and $_.IPv4Address } |
  ForEach-Object { $_.IPv4Address.IPAddress } |
  Where-Object { $_ -notlike '169.254.*' } |
  Select-Object -First 1

if (-not $ip) {
  Write-Host 'Adresse IPv4 locale introuvable. Verifie ta connexion Wi-Fi.' -ForegroundColor Yellow
} else {
  Write-Host 'Sur ce PC : http://localhost:5173' -ForegroundColor Green
  Write-Host ("Sur ton Redmi : http://{0}:5173" -f $ip) -ForegroundColor Green
  Write-Host ''
  Write-Host 'Le PC et le telephone doivent etre sur le meme Wi-Fi.' -ForegroundColor Yellow
  Write-Host 'Si Windows demande une autorisation pare-feu, autorise Node.js sur les reseaux prives.' -ForegroundColor Yellow
}

Write-Host ''
Write-Host 'Demarrage du serveur NOX HAVEN... (Ctrl+C pour arreter)' -ForegroundColor Cyan
npm.cmd run dev:lan
