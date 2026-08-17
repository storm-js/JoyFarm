const https = require('https');
const fs = require('fs');
const path = require('path');

const BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';
const OUT_DIR = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// 改用 landscape_4_3 格式（square 格式会返回错误默认图）
const files = [
  { name: 'black-jade.jpg',     prompt: 'Ripe blackberries hanging on the vine attached to green cane stem, purple-black glossy shiny fruit clusters hanging down, green leaves background, natural soft sunlight, macro food photography' },
  { name: 'ponca.jpg',          prompt: 'Fresh ripe blackberries hanging on bush branch attached to stem, jet black glossy fruit clusters hanging downward, green leaf background, soft natural daylight, food photography' },
  { name: 'graduate.jpg',       prompt: 'Fresh red raspberries hanging on bush attached to green stem cane clearly, bright red berries hanging down with rounded bottom visible, green leaves background, soft daylight, macro food photography' },
  { name: 'golden-autumn.jpg',  prompt: 'Golden yellow raspberries hanging on plant attached to stem, amber gold berries hanging downward with green leaves, warm soft sunlight, macro food photography, fresh harvest' },
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
    for (let i = 1; i <= 3; i++) {
      const rnd = Math.floor(Math.random() * 100000);
      const url = `${BASE}?prompt=${encodeURIComponent(f.prompt + ', ' + rnd)}&image_size=landscape_4_3`;
      process.stdout.write(`[${i}/3] ${f.name} ... `);
      try {
        await download(url, dest);
        if (validImage(dest)) {
          const kb = (fs.statSync(dest).size / 1024).toFixed(1);
          console.log(`OK (${kb} KB)`);
          break;
        } else {
          console.log('格式无效');
          fs.existsSync(dest) && fs.unlinkSync(dest);
        }
      } catch (e) {
        console.log(`失败: ${e.message}`);
      }
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  console.log('完成');
})();
