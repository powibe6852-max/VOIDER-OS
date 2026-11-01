# VOIDER OS — APK banane ka tareeka

## 1. GitHub pe daal (5 min)
1. github.com pe **New repository** bana (naam kuch bhi, e.g. `voider-os`).
2. Is zip ko **extract** kar, phir saari files (`.github` folder samet) repo me upload kar.
   - Phone/PC browser se: repo page → **Add file → Upload files** → saari files drag kar → Commit.
   - Dhyan: `.github/workflows/build-apk.yml` upload hona chahiye (hidden folder hai, PC pe "show hidden files" on kar).
3. Branch ka naam `main` ya `master` ho.

## 2. APK build
- Commit karte hi **Actions** tab me "Build VOIDER OS APK" apne aap chalega (~6-10 min).
- Nahi chala to: Actions → Build VOIDER OS APK → **Run workflow**.
- Khatam hone par APK 2 jagah milega:
  - **Releases** (right side) → `latest` → `VOIDER-OS.apk` (phone se seedha download).
  - Actions run → **Artifacts** → `VOIDER-OS-apk`.
- Phone me install: "Unknown sources / Install unknown apps" allow kar.

## 3. App me setup
1. **Settings** me Gemini API key daal (aistudio.google.com/apikey se free milti hai).
2. **Awaaz engine = Gemini Natural** (default). Voice dropdown se mard ki awaaz chun (Orus / Charon / Algenib / Fenrir...).
3. **▶ Natural voice test** daba. Neeche status dikhega (OK ya error ka reason).
4. Mic 🎤 pehli baar permission maangega — Allow kar.

## Terminal (Tab, ↑↓ aur neeche ki quick-keys bar ke saath)
`help` likh. Kuch examples:
```
mkdir -p kaam/notes && cd kaam
echo "pehli line" > a.txt
echo "doosri" >> a.txt
cat a.txt | grep -n doosri
tree ~
ai ek joke suna
cat a.txt | ai summarize kar
voice Charon
say Namaste
nano a.txt
```

## Agar kuch na chale
- **Awaaz abhi bhi robotic**: Settings me status dekh. "limit/quota" = Gemini free TTS limit khatam, thodi der baad theek ho jayegi (tab tak phone ki awaaz). "API key problem" = key check kar.
- **Mic nahi chal raha**: phone me Google app / Speech Services updated hona chahiye, aur mic permission on.
- **Top bar status bar ke neeche chhup raha**: capacitor.config.json me `adjustMarginsForEdgeToEdge` ko `"force"` kar de.
- **Build fail**: Actions me red step kholke error copy kar, mujhe bhej.
- Debug APK hai (Play Store ke liye nahi); apne phone pe install ke liye perfect.
