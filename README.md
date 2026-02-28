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

## Don’t have the folder yet?
Download the repo first (GitHub **Code -> Download ZIP**), extract it, then open the extracted folder.

## New to computers? Start here
Open `START-HERE.md` and follow it line-by-line.

## Fast start (Windows)
1. Open this repo folder in File Explorer.
2. Double-click `OPEN-ME-FIRST-WINDOWS.bat`.
3. Browser should open the helper.

## Backup start (Windows)
1. Open `tools` folder.
2. Double-click `open-sols-helper.bat`.

## Manual URL mode (any system)
1. Open terminal in this repo.
2. Run:
   - `python3 -m http.server 8000`
   - or on Windows: `py -m http.server 8000`
3. Open:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## If page does not open
- Server is likely not running.
- Run `py -m http.server 8000` (Windows) or `python3 -m http.server 8000` (Mac/Linux).
