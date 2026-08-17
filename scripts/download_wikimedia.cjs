const https = require('https');
const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

function fetch(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'PlantJoyApp/1.0 (contact@plantjoy.com)' } }, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'PlantJoyApp/1.0 (contact@plantjoy.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        file.close();
        fs.existsSync(dest) && fs.unlinkSync(dest);
        return downloadFile(res.headers.location, dest).then(resolve).catch(reject);
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

async function searchWikimedia(query) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&srnamespace=6&format=json&srlimit=5`;
  const raw = await fetch(api);
  const json = JSON.parse(raw);
  if (!json.query || !json.query.search) return [];
  return json.query.search.map(item => item.title.replace('File:', ''));
}

async function getImageInfo(filename) {
  const api = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(filename)}&prop=imageinfo&iiprop=url|size|mime&iiurlwidth=800&format=json`;
  const raw = await fetch(api);
  const json = JSON.parse(raw);
  const pages = json.query && json.query.pages;
  if (!pages) return null;
  const page = Object.values(pages)[0];
  if (!page.imageinfo) return null;
  const info = page.imageinfo[0];
  // 优先用 thumburl（缩略图），如果没有用 url（原图）
  return info.thumburl || info.url;
}

async function main() {
  const searches = [
    { name: 'black-jade.jpg',    query: 'blackberry fruit ripe' },
    { name: 'ponca.jpg',         query: 'blackberry bush fruit close' },
    { name: 'graduate.jpg',      query: 'red raspberry fruit plant' },
    { name: 'golden-autumn.jpg', query: 'yellow raspberry fruit golden' },
  ];

  for (const s of searches) {
    console.log(`\n=== ${s.name} ===`);
    console.log(`搜索: ${s.query}`);
    const files = await searchWikimedia(s.query);
    console.log(`找到: ${files.join(', ')}`);

    let downloaded = false;
    for (const file of files) {
      try {
        const url = await getImageInfo(file);
        if (!url) continue;
        console.log(`尝试: ${file} -> ${url.substring(0, 80)}...`);
        const dest = path.join(OUT_DIR, s.name);
        await downloadFile(url, dest);
        const sz = fs.statSync(dest).size;
        // 检查是否是有效JPEG且大于50KB
        if (sz > 50000) {
          console.log(`OK! ${s.name} (${(sz/1024).toFixed(1)} KB)`);
          downloaded = true;
          break;
        } else {
          console.log(`太小 (${(sz/1024).toFixed(1)} KB)，跳过`);
          fs.unlinkSync(dest);
        }
      } catch (e) {
        console.log(`失败: ${e.message}`);
      }
    }

    if (!downloaded) {
      console.log(`${s.name} 未下载成功`);
    }
  }

  console.log('\n完成!');
  // 打印所有图片的哈希
  const { execSync } = require('child_process');
  try {
    const out = execSync('certutil -hashfile public/images/black-jade.jpg MD5 && certutil -hashfile public/images/ponca.jpg MD5 && certutil -hashfile public/images/graduate.jpg MD5 && certutil -hashfile public/images/golden-autumn.jpg MD5', { cwd: path.join(__dirname, '..') }).toString();
    console.log('\nMD5:');
    console.log(out);
  } catch {}
}

main().catch(console.error);
