#!/usr/bin/env bash
# Poora build ek jagah. Sab kuch logs/build.log me save hota hai.
set -uo pipefail
mkdir -p logs
exec > >(tee -a logs/build.log) 2>&1
export CI=true

step() { echo; echo "================ $* ================"; }
die()  { echo; echo "!!!!! FAIL: $* !!!!!"; exit 1; }

step "Versions"
node -v; npm -v; java -version 2>&1 | head -1

step "1. npm install"
npm install --no-audit --no-fund || die "npm install"

step "2. three.js copy"
node scripts/prepare.js || die "prepare.js"

step "3. Android project"
rm -rf android
npx cap add android || die "cap add android"

step "4. Icons + permissions"
python3 -m pip install --quiet --break-system-packages pillow 2>&1 | tail -1
python3 scripts/icons.py || echo "(icons skip - default icon chalega)"
node scripts/patch-android.js || die "patch-android"

build_apk() {
  npx cap sync android || return 1
  ( cd android && chmod +x gradlew && ./gradlew assembleDebug --no-daemon --stacktrace ) || return 1
  test -f android/app/build/outputs/apk/debug/app-debug.apk
}

step "5. Gradle build (try 1: mic plugin ke saath)"
if ! build_apk; then
  echo; echo "### Try 1 fail. Try 2: mic plugin hata ke ###"
  npm uninstall @capacitor-community/speech-recognition --no-audit --no-fund || true
  node scripts/patch-android.js || true
  step "5b. Gradle build (try 2: bina native mic)"
  build_apk || die "Gradle build dono baar fail (logs/build.log dekho)"
  echo "NOTE: APK bina native mic plugin ke bana (mic button kaam nahi karega, baaki sab chalega)."
fi

step "6. APK ready"
cp android/app/build/outputs/apk/debug/app-debug.apk VOIDER-OS.apk
ls -la VOIDER-OS.apk
