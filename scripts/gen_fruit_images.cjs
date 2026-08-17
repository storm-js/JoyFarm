const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';
const OUT_DIR = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const targets = [
  { name: 'black-jade.jpg',     size: 'square', prompt: 'Ripe blackberries hanging on the vine attached to green cane stem, purple-black glossy shiny fruit clusters hanging down, green leaves background, natural soft sunlight, macro food photography' },
  { name: 'ponca.jpg',          size: 'square', prompt: 'Fresh ripe blackberries hanging on bush branch attached to stem, jet black glossy fruit clusters hanging downward, green leaf background, soft natural daylight, food photography' },
  { name: 'graduate.jpg',       size: 'square', prompt: 'Fresh red raspberries hanging on bush attached to green stem cane clearly, bright red berries hanging down with rounded bottom visible, green leaves background, soft daylight, macro food photography' },
  { name: 'golden-autumn.jpg',  size: 'square', prompt: 'Golden yellow raspberries hanging on plant attached to stem, amber gold berries hanging downward with green leaves, warm soft sunlight, macro food photography, fresh harvest' },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
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
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.existsSync(dest) && fs.unlinkSync(dest);
      reject(err);
    });
  });
}

function validImage(dest) {
  try {
    const buf = fs.readFileSync(dest);
    // JPEG 必须以 FFD8 开头、FFD9 结尾
    return buf.length > 5000 &&
      buf[0] === 0xFF && buf[1] === 0xD8 &&
      buf[buf.length-2] === 0xFF && buf[buf.length-1] === 0xD9;
  } catch {
    return false;
  }
}

async function genOne(t) {
  const dest = path.join(OUT_DIR, t.name);
  for (let i = 1; i <= 8; i++) {
    // 加随机数防止缓存
    const rnd = Math.floor(Math.random() * 100000);
    const fullPrompt = `${t.prompt}, ${rnd}`;
    const url = `${BASE}?prompt=${encodeURIComponent(fullPrompt)}&image_size=${t.size}`;
    process.stdout.write(`[${i}/8] ${t.name} ... `);
    try {
      await download(url, dest);
      if (validImage(dest)) {
        const kb = (fs.statSync(dest).size / 1024).toFixed(1);
        console.log(`OK (${kb} KB)`);
        return true;
      } else {
        console.log('图片格式无效');
        fs.existsSync(dest) && fs.unlinkSync(dest);
      }
    } catch (e) {
      console.log(`失败: ${e.message}`);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log(`${t.name} 放弃`);
  return false;
}

(async () => {
  for (const t of targets) {
    await genOne(t);
  }
  console.log('完成');
})();
