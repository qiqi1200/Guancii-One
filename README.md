# guancii 的小角落

> 一个大学生的个人博客 · 关于生活、学习、读书、思考

一个用 **Astro + Tailwind CSS + Twikoo** 构建的极简主义博客系统，支持亮色/暗色主题切换、文章点赞、Twikoo 评论系统和 RSS 订阅。

## ✨ 特性

- 🎨 **极简设计**：浅色调色板，柔和配色，支持亮色/暗色主题无缝切换
- 📱 **完全响应式**：手机（375px）、平板（768px）、桌面（1440px+）全适配
- 🔍 **搜索 + 标签筛选**：按文章/标签快速找到内容
- 💬 **Twikoo 评论系统**：自托管、隐私友好、支持表情包、反垃圾
- ❤️ **点赞功能**：localStorage 本地存储
- 📡 **RSS 订阅**：自动生成 `rss.xml`
- 🗺️ **SEO 友好**：Open Graph、语义化 HTML
- 🚀 **自动部署**：推送即部署到 GitHub Pages
- 🖨️ **打印友好**：附带打印样式
- ⚡ **性能优化**：静态生成、图片懒加载、按需加载

## 🛠️ 技术栈

- **[Astro](https://astro.build/)** - 静态站点生成
- **[Tailwind CSS](https://tailwindcss.com/)** - 样式
- **[@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)** - 文章排版
- **[Twikoo](https://twikoo.js.org/)** - 评论系统（自托管）
- **GitHub Actions** - CI/CD

## 📁 项目结构

```
blog/
├── .github/workflows/      # GitHub Actions 部署配置
├── public/                  # 静态资源
├── src/
│   ├── components/          # 组件（Header、Footer、PostCard、Sidebar、TwikooComments）
│   ├── content/posts/       # Markdown 文章
│   ├── layouts/             # 布局
│   ├── pages/               # 页面
│   │   ├── index.astro      # 首页
│   │   ├── about.astro      # 关于
│   │   ├── archive.astro    # 归档
│   │   ├── search.astro     # 搜索
│   │   ├── tags/            # 标签
│   │   ├── posts/           # 文章详情
│   │   └── rss.xml.js       # RSS
│   ├── styles/global.css    # 全局样式
│   └── site.json            # 站点配置（含 Twikoo）
├── twikoo-server/           # Twikoo 后端服务（单独部署）
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 快速开始

### 1. 安装依赖

```bash
cd D:\blog
npm install
```

### 2. 本地开发

```bash
npm run dev
# 打开 http://localhost:4321
```

### 3. 构建

```bash
npm run build
# 产物在 ./dist 目录
```

### 4. 部署 Twikoo 后端

**这一步必须做，不然评论功能跑不起来。**

参见 [twikoo-server/README.md](./twikoo-server/README.md) 完整说明。简要步骤：

1. 把 `twikoo-server/` 目录推到一个独立的 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 导入该仓库并部署
3. 部署完成后会得到一个 URL，例如 `https://twikoo-server-xxx.vercel.app`

### 5. 配置 Twikoo

编辑 `src/site.json`：

```json
{
  "twikoo": {
    "enabled": true,
    "envId": "https://twikoo-server-xxx.vercel.app",
    "lang": "zh-CN",
    "sort": "desc"
  }
}
```

把 `envId` 替换成你刚才部署得到的 URL。

### 6. 部署博客到 GitHub Pages

1. **创建仓库** `<username>/<username>.github.io`
2. **推送代码**：
   ```bash
   cd D:\blog
   git init
   git add .
   git commit -m "init: 个人博客"
   git branch -M main
   git remote add origin https://github.com/<username>/<username>.github.io.git
   git push -u origin main
   ```
3. **开启 Pages**：仓库 → Settings → Pages → Source 选 `GitHub Actions`
4. **等 1-2 分钟**，访问 `https://<username>.github.io` 即可

每次 `git push` 到 `main` 分支，Actions 会自动构建并部署。

## ⚙️ 个性化配置

### 修改站点信息

编辑 `src/site.json`：

```json
{
  "title": "你的博客名",
  "shortTitle": "简称",
  "description": "描述",
  "author": "你的名字",
  "links": {
    "github": "https://github.com/yourname",
    "email": "mailto:you@example.com"
  },
  "twikoo": {
    "envId": "你的 Twikoo 后端地址"
  }
}
```

### 修改主题色

编辑 `tailwind.config.mjs` 的 `colors` 字段：

```javascript
colors: {
  cream: { 50: '#fdfcf9', 100: '#faf7f0', ... },  // 背景
  ink: { 400: '#7a7a7a', 500: '#4a4a4a', ... },  // 文字
  accent: {
    sky: '#7eb8d6',    // 主点缀色
    mint: '#a8d5b8',   // 次点缀色
    sand: '#d4b896'    // 第三点缀色
  }
}
```

### Twikoo 高级配置

在 `src/site.json` 的 `twikoo` 字段可以配置：

| 字段 | 说明 | 默认值 |
|------|------|--------|
| `envId` | 后端 URL | （必填） |
| `lang` | 语言 | `zh-CN` |
| `sort` | 评论排序 | `desc` |
| `emoticon` | 表情包 URL 列表 | QQ 表情 |

完整配置：[twikoo.js.org/configuration.html](https://twikoo.js.org/configuration.html)

## ✍️ 写新文章

在 `src/content/posts/` 下创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章描述（首页和 SEO 用）"
date: 2026-06-07
tags: ["标签1", "标签2"]
cover: "/images/cover.jpg"  # 可选
draft: false  # 是否为草稿
---

# 正文

支持 Markdown 全部语法，还支持：
- 代码块（带语法高亮）
- 引用
- 列表
- 图片
- 表格
- 等等
```

文件名会成为 URL slug，例如 `my-post.md` → `/posts/my-post/`。

## 💬 Twikoo 管理

部署完成后访问：
```
https://<your-twikoo-url>/admin/
```

首次访问会要求设置管理员密码。

管理后台支持：
- 查看所有评论
- 删除/编辑/置顶评论
- 反垃圾设置
- 邮件通知
- 数据导出

## 🗄️ Twikoo 数据存储（生产环境必看）

Vercel 默认存储**不稳定**，建议：

1. 注册 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) 免费 512MB
2. 在 Vercel 项目设置里加环境变量 `MONGODB_URI=mongodb+srv://...`
3. 重新部署

否则评论会在 Vercel 重新部署时丢失。

## 📝 License

MIT License - 自由使用，欢迎魔改。
