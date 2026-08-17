# 树莓品种图鉴 🫐

一个基于 React 的树莓品种展示与养护信息管理系统。

## 功能特性

- 🏠 **品种列表页**：展示所有树莓品种
- 📄 **品种详情页**：每个品种独立页面，包含品种信息、养护指南
- 🌱 **版本化养护信息**：每月更新养护信息，历史版本保持不变
- 📱 **响应式设计**：手机扫码即可查看

## 版本化机制说明

核心设计思路：
1. 每个品种有一个**固定链接**（如 `/variety/red-hat`）
2. 购买时，链接自动附加**版本参数**（如 `/variety/red-hat?v=2026-08`）
3. 页面根据 `v` 参数显示该版本的养护信息
4. 每月更新时，只新增新版本，不覆盖旧版本

### 举例
- 客户8月购买，扫码链接：`/variety/red-hat?v=2026-08`
- 9月更新养护信息后，新客户扫码：`/variety/red-hat?v=2026-09`
- 8月的老客户再扫原码，看到的仍是8月的养护信息

## 快速开始

### 环境要求
- Node.js >= 18
- npm >= 9

### 安装与运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 生产构建
npm run build

# 预览生产版本
npm run preview
```

## 项目结构

```
src/
├── data/
│   └── varieties.js      # 品种数据（含养护信息版本）
├── pages/
│   ├── Home.jsx           # 首页（品种列表）
│   ├── VarietyDetail.jsx  # 品种详情页
│   └── Admin.jsx          # 管理后台
├── utils/
│   └── versionManager.js  # 版本管理工具
├── App.jsx                # 路由配置
└── main.jsx               # 入口文件
```

## 如何添加/更新养护信息

### 方式一：通过管理后台（推荐）

1. 访问 `/admin` 页面
2. 选择品种，输入版本号（如 `2026-11`）
3. 填写养护任务和小贴士
4. 点击"添加版本"

### 方式二：直接编辑数据文件

编辑 `src/data/varieties.js`，在对应品种的 `careVersions` 数组中添加新版本：

```javascript
{
  version: '2026-11',
  title: '11月养护要点',
  tasks: [
    { type: 'water', text: '减少浇水频率', icon: '💧' },
    { type: 'fertilize', text: '施有机肥', icon: '🌱' },
    { type: 'prune', text: '修剪病枝', icon: '✂️' }
  ],
  tips: '冬季准备工作'
}
```

## 如何添加新品种

编辑 `src/data/varieties.js`，在 `varieties` 数组中添加：

```javascript
{
  id: 'new-variety',
  name: '新品种名',
  latinName: '拉丁学名',
  description: '品种描述',
  features: {
    fruitWeight: '5-8g',
    sweetness: '8-12°Brix',
    harvestSeason: 'X月至X月',
    yield: '每株约Xkg',
    coldHardiness: '-20°C',
    diseaseResistance: '中'
  },
  careVersions: [
    // 养护信息版本...
  ]
}
```

## 二维码使用建议

1. **品种列表二维码**：指向首页 `/`，客户可浏览所有品种
2. **品种详情二维码**：指向固定链接 `/variety/{id}`，新老客户都能扫
3. **购买凭证二维码**：指向带版本参数的链接 `/variety/{id}?v={购买月份}`

## 技术栈

- ⚛️ React 18
- 📦 Vite 5
- 🎨 CSS Modules
- 🚦 React Router 6

## 部署

构建后，将 `dist` 目录部署到任意静态服务器即可：

```bash
npm run build
# 将 dist/ 上传到服务器
```

可部署到：
- GitHub Pages
- Vercel / Netlify
- 任何支持静态文件的 Web 服务器

## License

MIT
