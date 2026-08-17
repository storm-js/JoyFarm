const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// 6 张图片：hero、farm、4个品种
const files = [
  { name: 'hero.jpg',           size: 'landscape_16_9', prompt: 'Beautiful raspberry farm garden at sunrise, rows of raspberry bushes with red berries, golden morning light, green field landscape, professional photography, high quality, wide landscape' },
  { name: 'farm.jpg',           size: 'landscape_4_3',  prompt: 'Raspberry plantation farm, neat rows of raspberry plants with drip irrigation, green leaves, professional agricultural photography, landscape view' },
  { name: 'black-jade.jpg',     size: 'square',         prompt: 'Ripe blackberries hanging on the vine attached to green cane stem, purple-black glossy shiny fruit clusters hanging down, green leaves background, natural soft sunlight, macro food photography' },
  { name: 'ponca.jpg',          size: 'square',         prompt: 'Fresh ripe blackberries hanging on bush branch attached to stem, jet black glossy fruit clusters hanging downward, green leaf background, soft natural daylight, food photography' },
  { name: 'graduate.jpg',       size: 'square',         prompt: 'Fresh red raspberries hanging on bush attached to green stem cane clearly, bright red berries hanging down with rounded bottom visible, green leaves background, soft daylight, macro food photography' },
  { name: 'golden-autumn.jpg',  size: 'square',         prompt: 'Golden yellow raspberries hanging on plant attached to stem, amber gold berries hanging downward with green leaves, warm soft sunlight, macro food photography, fresh harvest' },
];

const BASE = 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image';
const OUT_DIR = path.join(__dirname, '..', 'public', 'images');

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        fs.closeSync(file.fd);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const f of files) {
    const url = `${BASE}?prompt=${encodeURIComponent(f.prompt)}&image_size=${f.size}`;
    const dest = path.join(OUT_DIR, f.name);
    process.stdout.write(`下载 ${f.name} ... `);
    try {
      await download(url, dest);
      const size = fs.statSync(dest).size;
      console.log(`OK (${(size/1024).toFixed(1)} KB)`);
    } catch (e) {
      console.log(`失败: ${e.message}`);
    }
  }
  console.log('全部完成！');
}

main();
