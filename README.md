# 安处 ANCHU 官网 v3

这是一个可直接部署到 Cloudflare Pages / Vercel 的 Vite + React 项目。

## 品牌信息

- 中文名：安处
- 英文名：ANCHU
- 中文标语：我心安处，即是家。
- 日文标语：心安らぐ場所、そこがわが家。
- 英文标语：Where the heart finds peace, there is home.

## 本地运行

```bash
npm install
npm run dev
```

## 生产构建

```bash
npm run build
```

构建目录为 `dist`。

## Cloudflare Pages 设置

- Framework preset：Vite
- Build command：`npm run build`
- Build output directory：`dist`

`public/_redirects` 已包含 SPA 路由配置，因此详情页刷新不会 404。

## 最常修改的文件

- 所有文案、房源资料、联系方式、图片路径：`src/data/siteContent.js`
- 全站视觉：`src/styles.css`
- 首页布局：`src/pages/HomePage.jsx`
- 房源详情页布局：`src/pages/RoomPage.jsx`

详细说明见`CONTENT_EDITING_GUIDE.md`和`V3_UPDATE_NOTES.md`。
