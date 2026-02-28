# Sol's RNG Aura Helper — Easy Windows Walkthrough

This tool runs in a **browser** (Chrome/Edge), not in Roblox.

## If you do not have this folder yet
1. Go to the repo on GitHub.
2. Click **Code** -> **Download ZIP**.
3. Extract ZIP.
4. Open extracted folder (you can rename it to `sols-helper`).

## Where things are
- Repo folder: `sols-helper`
- Tools folder: `sols-helper\tools`
- Main page: `sols-helper\tools\sols-rng-helper.html`
- Main launcher: `sols-helper\OPEN-ME-FIRST-WINDOWS.bat`

## Easiest path
1. Open `sols-helper`.
2. Double-click `OPEN-ME-FIRST-WINDOWS.bat`.
3. Keep the black launcher window open.
4. Use the helper in browser.

## If launcher fails
1. Open `sols-helper\tools`.
2. Right-click `run-sols-helper.ps1`.
3. Click **Run with PowerShell**.
4. Follow message in that window.

## Manual path
1. Open PowerShell in `sols-helper`.
2. Run: `py -m http.server 8000`
3. Open: `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## Error fixes
- `ERR_CONNECTION_REFUSED`: start server first.
- Python missing: install Python from python.org.
- Blank page: press `Ctrl+F5`.
