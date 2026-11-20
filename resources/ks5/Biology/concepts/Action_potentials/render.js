// Renders index.html?record frame by frame to an MP4 (30 fps, 1920x1080).
// Usage: node render.js [out.mp4] [--stills=10,64,200]
const { chromium } = require('playwright');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const out = process.argv.find(a => a.endsWith('.mp4')) || path.join(__dirname, 'action-potential.mp4');
const stillsArg = process.argv.find(a => a.startsWith('--stills='));
const stills = stillsArg ? stillsArg.slice(9).split(',').map(Number) : null;

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 810 }, deviceScaleFactor: stills ? 1 : 1920/1440 });
  page.on('pageerror', e => console.error('PAGE ERROR', e.message));
  await page.goto('file://' + path.join(__dirname, process.env.PAGE || 'index.html') + '?record');
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.__TOTAL);

  let ff;
  if (!stills) {
    ff = spawn('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'image2pipe', '-framerate', '30', '-i', '-',
      '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium', '-movflags', '+faststart', out],
      { stdio: ['pipe', 'inherit', 'inherit'] });
  } else fs.mkdirSync(path.join(__dirname, 'stills'), { recursive: true });

  const last = stills ? Math.max(...stills) : total - 1;
  for (let i = 0; i <= last; i++) {
    await page.evaluate(() => window.__advance());
    if (stills) {
      if (stills.includes(i)) await page.screenshot({ path: path.join(__dirname, 'stills', `f${String(i).padStart(3, '0')}.png`) });
      continue;
    }
    const buf = await page.screenshot({ type: 'png' });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 100 === 0) console.log('frame', i, '/', total);
  }
  if (ff) { ff.stdin.end(); await new Promise(r => ff.on('close', r)); console.log('wrote', out); }
  await browser.close();
})();
