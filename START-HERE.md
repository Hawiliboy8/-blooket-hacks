# START HERE (Very Easy Steps)

If you're lost, follow this exact checklist.

## Option A (Easiest on Windows)
1. Open your repo folder.
2. Open `tools`.
3. Right-click `open-sols-helper.bat` -> **Run as administrator**.
4. A diagnostic window will tell you what it found (`py`, `python`, or fallback mode).
5. Your browser should open the helper page automatically.

If the browser still does not open:
- Run `tools\run-sols-helper.ps1` directly in PowerShell.
- Confirm `sols-rng-helper.html` exists in the same `tools` folder.

## Option B (Server method)
1. Open PowerShell (Windows) or Terminal (Mac/Linux).
2. Change directory into your real repo folder path.
   - Example on Windows:
     - `cd C:\Users\<YourName>\Downloads\-blooket-hacks`
3. Start server:
   - Windows: `py -m http.server 8000`
   - Mac/Linux: `python3 -m http.server 8000`
4. Open browser to:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## Common errors
- `ERR_CONNECTION_REFUSED`
  - Fix: server is not running. Start the server command above.
- `python not found`
  - Fix on Windows: use `py` instead of `python`.
- `path does not exist`
  - Fix: use your own real folder path, not `/workspace/...`.
