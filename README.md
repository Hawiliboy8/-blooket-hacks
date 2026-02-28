# Sol's RNG Helper

This repository now focuses on a simple **Sol's RNG Aura Helper** web tool.

## What it is
A safe planning app (no exploit features) to estimate:
- aura odds,
- expected grind time,
- confidence-based grind targets.

Main files:
- `tools/sols-rng-helper.html`
- `tools/sols-rng-helper.js`

## Super easy start (Windows)
1. Open this repo folder in File Explorer.
2. Double-click `OPEN-ME-FIRST-WINDOWS.bat`.
3. Your browser should open the helper.

## Backup Windows start
1. Open `tools` folder.
2. Double-click `open-sols-helper.bat`.

## Any system (manual URL mode)
1. Open terminal in this repo.
2. Run:
   - `python3 -m http.server 8000`
   - or on Windows: `py -m http.server 8000`
3. Open:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## If it says "site can't be reached"
- The local server is not running.
- Start it with `py -m http.server 8000` (Windows) or `python3 -m http.server 8000` (Mac/Linux).

## Extra help
See `START-HERE.md` for the easiest step-by-step walkthrough.
