$ErrorActionPreference = 'Stop'

Write-Host "Sol's RNG Helper Launcher" -ForegroundColor Cyan
Write-Host "------------------------"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$htmlPath = Join-Path $scriptDir 'sols-rng-helper.html'

if (-not (Test-Path $htmlPath)) {
    Write-Host "ERROR: Could not find $htmlPath" -ForegroundColor Red
    Write-Host "Make sure this script is in the same folder as sols-rng-helper.html"
    Read-Host "Press Enter to exit"
    exit 1
}

$pythonCmd = $null
foreach ($cmd in @('py', 'python', 'python3')) {
    if (Get-Command $cmd -ErrorAction SilentlyContinue) {
        $pythonCmd = $cmd
        break
    }
}

if ($pythonCmd) {
    Write-Host "Found Python launcher: $pythonCmd" -ForegroundColor Green
    Write-Host "Starting local server on http://127.0.0.1:8000 ..."

    $server = Start-Process -FilePath $pythonCmd -ArgumentList '-m http.server 8000' -WorkingDirectory (Resolve-Path (Join-Path $scriptDir '..')) -PassThru
    Start-Sleep -Seconds 1

    try {
        Start-Process 'http://127.0.0.1:8000/tools/sols-rng-helper.html' | Out-Null
        Write-Host "Opened browser. Keep this window open while using the tool." -ForegroundColor Green
        Write-Host "Close this window to stop the local server."
        Read-Host "Press Enter when done"
    }
    finally {
        if ($server -and -not $server.HasExited) {
            Stop-Process -Id $server.Id -Force
        }
    }
}
else {
    Write-Host "Python launcher not found (py/python/python3)." -ForegroundColor Yellow
    Write-Host "Opening local HTML file directly instead..."
    Start-Process $htmlPath | Out-Null
    Write-Host "If the page does not load, install Python and rerun this script." -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
}
