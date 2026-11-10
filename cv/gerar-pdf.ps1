# Gera os PDFs do CV (PT e EN) a partir de cv/cv.html usando o Microsoft Edge.
# Uso (na pasta do projeto):  powershell -File cv/gerar-pdf.ps1

$root = Split-Path -Parent $PSScriptRoot
$edge = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
if (-not (Test-Path $edge)) { $edge = "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe" }

$src = (Join-Path $root 'cv\cv.html') -replace '\\', '/'

foreach ($lang in @('PT', 'EN')) {
    $out = Join-Path $root "assets\CV-Ruben-Correia-$lang.pdf"
    $hash = if ($lang -eq 'EN') { '#en' } else { '' }
    & $edge --headless=new --disable-gpu --no-pdf-header-footer --virtual-time-budget=4000 "--print-to-pdf=$out" "file:///$src$hash" | Out-Null
    Write-Host "Gerado: $out"
}
