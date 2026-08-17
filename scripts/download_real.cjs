const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// WebFetch 获取到的真实图片 URL
const files = [
  { name: 'black-jade.jpg',     url: 'https://aka.doubaocdn.com/s/EUVtbhrkCk' },
  { name: 'ponca.jpg',          url: 'https://aka.doubaocdn.com/s/m4WmdSFF9c' },
  { name: 'graduate.jpg',       url: 'https://aka.doubaocdn.com/s/YV4yAnUO2V' },
  { name: 'golden-autumn.jpg',  url: 'https://aka.doubaocdn.com/s/GzAziLhtWl' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
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

function validImage(dest) {
  try {
    const buf = fs.readFileSync(dest);
    return buf.length > 5000 &&
      buf[0] === 0xFF && buf[1] === 0xD8 &&
      buf[buf.length-2] === 0xFF && buf[buf.length-1] === 0xD9;
  } catch { return false; }
}

(async () => {
  for (const f of files) {
    const dest = path.join(OUT_DIR, f.name);
    process.stdout.write(`${f.name} ... `);
    try {
      await download(f.url, dest);
      if (validImage(dest)) {
        console.log(`OK (${(fs.statSync(dest).size/1024).toFixed(1)} KB)`);
      } else {
        console.log('格式无效');
      }
    } catch (e) {
      console.log(`失败: ${e.message}`);
    }
  }
  console.log('完成');
})();
