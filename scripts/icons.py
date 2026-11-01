# Android launcher icons: assets/icon-only.png se seedha PNG icons bana ke daal deta hai (koi extra tool nahi).
import os, shutil
from PIL import Image
res = 'android/app/src/main/res'
src = Image.open('assets/icon-only.png').convert('RGBA')
for d, s in {'mdpi': 48, 'hdpi': 72, 'xhdpi': 96, 'xxhdpi': 144, 'xxxhdpi': 192}.items():
    p = f'{res}/mipmap-{d}'
    if not os.path.isdir(p):
        continue
    im = src.resize((s, s), Image.LANCZOS)
    for n in ('ic_launcher.png', 'ic_launcher_round.png'):
        im.save(f'{p}/{n}')
shutil.rmtree(f'{res}/mipmap-anydpi-v26', ignore_errors=True)
print('icons done')
