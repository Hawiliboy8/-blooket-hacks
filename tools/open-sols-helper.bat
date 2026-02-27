@echo off
setlocal

set "SCRIPT_DIR=%~dp0"
set "HTML_FILE=%SCRIPT_DIR%sols-rng-helper.html"

if not exist "%HTML_FILE%" (
  echo Could not find "%HTML_FILE%".
  echo Make sure this BAT file is in the same folder as sols-rng-helper.html.
  pause
  exit /b 1
)

echo Opening Sol's RNG Aura Helper in your default browser...
start "" "%HTML_FILE%"

endlocal
