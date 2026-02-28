@echo off
setlocal

set "ROOT_DIR=%~dp0"
set "TOOLS_LAUNCHER=%ROOT_DIR%tools\open-sols-helper.bat"

echo Opening Sol's RNG Helper...

if not exist "%TOOLS_LAUNCHER%" (
  echo ERROR: Could not find "%TOOLS_LAUNCHER%"
  echo Make sure this file is inside the sols-helper folder.
  pause
  exit /b 1
)

call "%TOOLS_LAUNCHER%"
set "ERR=%errorlevel%"

if not "%ERR%"=="0" (
  echo.
  echo Launcher finished with code %ERR%.
  echo Try running tools\run-sols-helper.ps1 directly.
)

pause
exit /b %ERR%
