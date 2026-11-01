# VOIDER OS — APK ek baar me

## Upload (yahi sabse zaroori hai)
1. Zip **extract** kar. Andar `www`, `scripts`, `.github`, `package.json` ... dikhne chahiye.
2. GitHub repo me in sabko **seedha repo ke root me** daal (folder ke andar folder nahi).
3. `.github` folder hidden hota hai. Agar upload na ho paaye:
   repo me **Add file → Create new file** → naam me likh `.github/workflows/build-apk.yml`
   → `WORKFLOW_COPY_PASTE.txt` ka text paste kar → Commit.

## Build
- Commit ke baad **Actions** tab → "Build VOIDER OS APK" apne aap chalega (8-12 min).
- Na chale to: Actions → Build VOIDER OS APK → **Run workflow**.
- Khatam hone par:
  - **Releases → latest → VOIDER-OS.apk** (phone se seedha download), ya
  - run page ke neeche **Artifacts → VOIDER-OS-apk**.
- **Log file**: har run me (pass ya fail) Artifacts me `build-log` aati hai. Fail hone par red step khol ke akhiri lines bhi dikhti hain.

## Build apne aap kya karta hai
Mic plugin ke saath build karta hai. Agar wo fail ho to plugin hata ke dobara try karta hai, taaki APK zaroor ban jaye (us case me sirf mic button kaam nahi karega).

## App me setup
Settings → Gemini API key → Awaaz engine = Gemini Natural → "Natural voice test" daba.
Terminal me `help` likh.
