# Sol's RNG Aura Helper — Quick Usage

This tool is a **web page**, not a Roblox script.

## Fastest method (Windows, no Python needed)
1. Open this folder:
   - `...\-blooket-hacks\tools\`
2. Double-click:
   - `open-sols-helper.bat`
3. Your browser should open `sols-rng-helper.html`.

## If you want to run with a local server
Use this only if you prefer URL mode (`127.0.0.1`).

### Windows (PowerShell)
1. Open PowerShell **inside the repo folder**.
2. Run:
   - `py -m http.server 8000`
3. Open:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

> Note: If `python`/`python3` fails on Windows, use `py`.

## Common issues
- **`ERR_CONNECTION_REFUSED`**: local server is not running.
- **`cd /workspace/-blooket-hacks` fails on Windows**: that path is Linux-only in this coding container. Use your real Windows folder path.
- **Blank page**: hard refresh (`Ctrl+F5`).

## Inputs in the app
- Aura preset / Base odds (1 in N)
- Luck multiplier
- Rolls per minute
- Target copies
- Confidence (%)

## Better Windows launcher
- `open-sols-helper.bat` now calls `run-sols-helper.ps1` for diagnostics.
- You can run `run-sols-helper.ps1` directly to see detailed errors.
