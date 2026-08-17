const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const files = [
  { name: 'black-jade.jpg',    url: 'https://aka.doubaocdn.com/s/VbeEffxL5x' },
  { name: 'ponca.jpg',         url: 'https://aka.doubaocdn.com/s/kY2aauwiSC' },
  { name: 'graduate.jpg',      url: 'https://aka.doubaocdn.com/s/W6d7ky1jPg' },
  { name: 'golden-autumn.jpg', url: 'https://aka.doubaocdn.com/s/51dPbLTrUM' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.existsSync(dest) && fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(dest)));
    }).on('error', (err) => {
      fs.existsSync(dest) && fs.unlinkSync(dest);
      reject(err);
    });
  });
}

(async () => {
  for (const f of files) {
    const dest = path.join(OUT_DIR, f.name);
    process.stdout.write(`${f.name} ... `);
    try {
      await download(f.url, dest);
      const sz = fs.statSync(dest).size;
      console.log(`OK (${(sz/1024).toFixed(1)} KB)`);
    } catch (e) {
      console.log(`失败: ${e.message}`);
    }
  }
  console.log('完成');
})();
