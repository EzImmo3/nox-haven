$ErrorActionPreference = 'Stop'
Set-Location -Path $PSScriptRoot

Write-Host ''
Write-Host 'Construction de NOX HAVEN...' -ForegroundColor Cyan
npm.cmd run build
if ($LASTEXITCODE -ne 0) { throw 'La compilation a echoue. Le serveur de previsualisation ne sera pas lance.' }

$ip = Get-NetIPConfiguration |
  Where-Object { $_.IPv4DefaultGateway -and $_.NetAdapter.Status -eq 'Up' -and $_.IPv4Address } |
  ForEach-Object { $_.IPv4Address.IPAddress } |
  Where-Object { $_ -notlike '169.254.*' } |
  Select-Object -First 1

Write-Host ''
Write-Host 'Sur ce PC : http://localhost:4173' -ForegroundColor Green
if ($ip) { Write-Host ("Sur ton Redmi : http://{0}:4173" -f $ip) -ForegroundColor Green }
Write-Host 'PC et telephone sur le meme Wi-Fi. Ctrl+C pour arreter.' -ForegroundColor Yellow
npm.cmd run preview:lan
