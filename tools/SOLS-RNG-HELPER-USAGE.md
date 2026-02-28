# Sol's RNG Aura Helper — Super Simple Guide

This tool runs in a **web browser** (Chrome/Edge), not inside Roblox.

## Folder map (so you can find files)
- Repo folder: `-blooket-hacks`
- Tools folder: `-blooket-hacks\tools`
- Main page: `-blooket-hacks\tools\sols-rng-helper.html`
- Easy launcher: `-blooket-hacks\OPEN-ME-FIRST-WINDOWS.bat`
- Backup launcher: `-blooket-hacks\tools\open-sols-helper.bat`

## 1-minute setup (Windows)
1. Open `-blooket-hacks` in File Explorer.
2. Double-click `OPEN-ME-FIRST-WINDOWS.bat`.
3. Your browser should open the helper page.
4. Keep the launcher window open while using the page.

## If it still does not open
1. Go to `-blooket-hacks\tools`.
2. Right-click `run-sols-helper.ps1` -> **Run with PowerShell**.
3. Follow what it says.

## If you want URL mode manually
1. Open PowerShell in `-blooket-hacks`.
2. Run: `py -m http.server 8000`
3. Open: `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## Quick troubleshooting
- `ERR_CONNECTION_REFUSED`: Start server first (`py -m http.server 8000`).
- Python command not found: install Python and retry.
- Blank page: hard refresh (`Ctrl+F5`).
