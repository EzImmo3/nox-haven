$ErrorActionPreference = "Stop"
Set-Location (Split-Path -Parent $PSScriptRoot)

function Invoke-Checked {
    param([string]$Label, [string[]]$Command)
    Write-Host "`n===== $Label =====" -ForegroundColor Cyan
    & $Command[0] $Command[1..($Command.Length - 1)]
    if ($LASTEXITCODE -ne 0) {
        throw "Étape '$Label' échouée (code $LASTEXITCODE). Corrigeons cette erreur avant de poursuivre."
    }
}

if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    throw "npm.cmd est introuvable. Vérifie l'installation de Node.js et npm."
}

Invoke-Checked "Installation des dépendances" @("npm.cmd", "install")
Invoke-Checked "Build de production" @("npm.cmd", "run", "build")
Invoke-Checked "Suite complète de tests" @("npm.cmd", "run", "test:all")
Invoke-Checked "Audit de livraison" @("npm.cmd", "run", "audit:release")

Write-Host "`nCERTIFICATION AUTOMATISÉE TERMINÉE : toutes les étapes ont réussi." -ForegroundColor Green
Write-Host "Cela ne remplace pas les essais réels sur téléphone ni la vérification Supabase."
