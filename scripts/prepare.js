// three.js ko npm se nikaal ke www/lib me rakhta hai, taaki APK offline bhi 3D model dikhaye.
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const lib = path.join(root, 'www', 'lib');
fs.mkdirSync(lib, { recursive: true });
const files = [
  ['node_modules/three/build/three.min.js', 'three.min.js'],
  ['node_modules/three/examples/js/loaders/GLTFLoader.js', 'GLTFLoader.js'],
];
for (const [src, dst] of files) {
  const from = path.join(root, src);
  if (!fs.existsSync(from)) {
    console.error('MISSING: ' + src + ' (npm install chala?)');
    process.exit(1);
  }
  fs.copyFileSync(from, path.join(lib, dst));
  console.log('copied', dst, fs.statSync(path.join(lib, dst)).size, 'bytes');
}
