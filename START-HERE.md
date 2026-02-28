# START HERE — VERY BEGINNER STEPS (WINDOWS)

If you are new, follow this exactly.

## Before you start
- Use a **Windows laptop/PC**.
- Use **Chrome** or **Edge** browser.

## 0) If you do NOT have a `-blooket-hacks` folder yet
That is okay. You need to download the project first.

### Option A (easiest): Download ZIP from GitHub
1. Open the project page on GitHub in your browser.
2. Click the green **Code** button.
3. Click **Download ZIP**.
4. Open your **Downloads** folder.
5. Right-click the ZIP file -> **Extract All...**.
6. Open the extracted folder.
7. If the extracted folder has a long name like `repo-main`, you can rename it to `-blooket-hacks`.

### Option B: Clone with Git (if you already use Git)
1. Open PowerShell.
2. Go to Downloads:
   - `cd $HOME\Downloads`
3. Clone the repo URL:
   - `git clone <PASTE-REPO-URL-HERE> -blooket-hacks`

## 1) Find the repo folder
1. Press `Windows` key.
2. Type `File Explorer` and open it.
3. Click **Downloads**.
4. Open folder named **`-blooket-hacks`**.

## 2) Open the helper (easy button)
1. Inside `-blooket-hacks`, find file **`OPEN-ME-FIRST-WINDOWS.bat`**.
2. Double-click it.
3. Wait 5–10 seconds.
4. Browser should open helper page.

## 3) Keep this open
If a black window opens, **do not close it** while using the helper.

## 4) If nothing happens
1. Inside `-blooket-hacks`, open folder `tools`.
2. Right-click `run-sols-helper.ps1`.
3. Click **Run with PowerShell**.
4. Read the message it shows.

## 5) If PowerShell says Python is missing
1. Go to: https://www.python.org/downloads/
2. Install Python (default settings are fine).
3. Run `OPEN-ME-FIRST-WINDOWS.bat` again.

## 6) Manual fallback (only if needed)
1. In File Explorer, open `-blooket-hacks`.
2. In the top bar, type `powershell` and press Enter.
3. Run this command:
   - `py -m http.server 8000`
4. Open this URL in Chrome:
   - `http://127.0.0.1:8000/tools/sols-rng-helper.html`

## Quick error meanings
- `ERR_CONNECTION_REFUSED` = server is not running.
- `python not found` = install Python.
- `cd /workspace/...` error = wrong path for Windows (that path is Linux-only).
