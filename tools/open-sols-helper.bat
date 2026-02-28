@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "PS1_FILE=%SCRIPT_DIR%run-sols-helper.ps1"
set "HTML_FILE=%SCRIPT_DIR%sols-rng-helper.html"

if exist "%PS1_FILE%" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%PS1_FILE%"
  exit /b %errorlevel%
)

if not exist "%HTML_FILE%" (
  echo Could not find "%HTML_FILE%".
  pause
  exit /b 1
)

echo PowerShell launcher missing. Opening HTML directly...
start "" "%HTML_FILE%"
pause

endlocal
