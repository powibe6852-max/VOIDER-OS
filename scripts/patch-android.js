// AndroidManifest me mic / internet permission aur speech + TTS service queries jodta hai.
const fs = require('fs');
const f = 'android/app/src/main/AndroidManifest.xml';
if (!fs.existsSync(f)) { console.error('Manifest nahi mila: ' + f); process.exit(1); }
let x = fs.readFileSync(f, 'utf8');
for (const p of ['android.permission.INTERNET', 'android.permission.RECORD_AUDIO', 'android.permission.MODIFY_AUDIO_SETTINGS']) {
  if (!x.includes(p)) x = x.replace('</manifest>', '    <uses-permission android:name="' + p + '" />\n</manifest>');
}
if (!x.includes('android.speech.RecognitionService')) {
  x = x.replace('</manifest>',
    '    <queries>\n' +
    '        <intent><action android:name="android.speech.RecognitionService" /></intent>\n' +
    '        <intent><action android:name="android.intent.action.TTS_SERVICE" /></intent>\n' +
    '    </queries>\n</manifest>');
}
fs.writeFileSync(f, x);
console.log('Manifest patched');
