# START HERE (VERY SIMPLE)

If you feel lost, use this exact path.

## What app should I use?
Use **Google Chrome** (or Edge). This helper is a web page.

## Where is the `tools` folder?
Inside your repo folder:
- `-blooket-hacks\tools\`

So the launcher file is here:
- `-blooket-hacks\tools\open-sols-helper.bat`

## Easiest method (Windows)
1. Open File Explorer.
2. Open your repo folder `-blooket-hacks`.
3. Double-click **`OPEN-ME-FIRST-WINDOWS.bat`** (in the repo root).
4. Wait for Chrome/Edge to open.
5. If a black window says "Press Enter when done", leave it open while using the helper.

## If nothing opens
Do this exact fallback:
1. Open File Explorer -> open `-blooket-hacks\tools\`.
2. Right-click `run-sols-helper.ps1` -> **Run with PowerShell**.
3. Read the message in that window.
4. If it says Python not found, install Python from python.org, then run again.

## Manual method (only if needed)
1. Open PowerShell in the repo folder.
2. Run:
   - `py -m http.server 8000`
3. Open this URL in Chrome:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## Common errors (plain English)
- `ERR_CONNECTION_REFUSED` = server is not running.
- `python not found` = install Python or use `py` command.
- `cd /workspace/...` fails on Windows = wrong path (Linux-only path).

