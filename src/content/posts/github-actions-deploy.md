---
title: "我用 GitHub Actions 部署博客的全过程"
description: "把一个静态博客从零开始部署到 GitHub Pages，顺便聊聊 CI/CD 怎么从 0 到 1 配起来。"
date: 2026-04-20
tags: ["前端", "GitHub", "工具"]
---

搞了一整天，终于把自己的博客部署到 GitHub Pages 了。整个过程踩了几个坑，记录一下，希望帮到同样在折腾的朋友。

## 先说结果

- 仓库：`guancii/guancii.github.io`
- 框架：Astro
- CI：GitHub Actions
- 部署目标：`gh-pages` 分支
- 自定义域名：（暂时没买，先用默认）

## 整个流程长什么样

```
本地写文章
  ↓ git push
GitHub 仓库
  ↓ 触发 Actions
自动构建（Astro build）
  ↓ 上传产物
gh-pages 分支
  ↓ GitHub Pages 自动托管
公开访问
```

写文章 → 推送 → 自动上线。**整个过程不用碰服务器。**

## 第一步：准备仓库

需要两种情况分开看：

### 情况 A：用户级站点（推荐）

仓库名必须是 `<username>.github.io`，比如 `guancii.github.io`。

- 默认访问地址：`https://guancii.github.io`
- 不需要额外配置 base path
- 适合做个人主页/博客

### 情况 B：项目级站点

仓库名随便起，比如 `my-blog`。

- 默认访问地址：`https://guancii.github.io/my-blog`
- 需要在 `astro.config.mjs` 里设 `base: '/my-blog'`
- 适合一个账号多个项目的情况

我用的是情况 A。

## 第二步：Astro 配置

`astro.config.mjs` 关键的几行：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://guancii.github.io',
  base: '/',  // 用户级站点留空字符串或 '/'
  // ... 其他配置
});
```

⚠️ **`site` 一定要写对**，这是 RSS、sitemap、canonical 链接的基准。

## 第三步：写 GitHub Actions

在项目根目录创建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> 关键点：
> - `actions/upload-pages-artifact` 配合 `actions/deploy-pages` 是 GitHub 官方推荐的部署方式，比传统的 `peaceiris/workflows-gh-pages` 更稳定
> - `permissions.pages: write` 和 `id-token: write` 缺一不可

## 第四步：开启 Pages

仓库 → Settings → Pages：

- **Source**：选 `GitHub Actions`（不是 `Deploy from a branch`）

## 第五步：推送

```bash
git add .
git commit -m "feat: 初始化博客"
git push origin main
```

去 Actions 标签页看构建日志。第一次可能要 1-2 分钟。

构建成功后，`https://guancii.github.io` 就能访问了。

## 我踩的坑

### 坑 1：base path 写错

如果你的仓库是项目级（不是 `<username>.github.io`），Astro 里 `base` 必须设对：

```javascript
// 仓库名是 my-blog
base: '/my-blog'
```

否则访问 `https://guancii.github.io/my-blog/` 会发现 CSS、JS 全 404。

### 坑 2：环境变量

如果你的博客需要 API key、第三方 token 之类的环境变量，去仓库 Settings → Secrets and variables → Actions 加。

注意：**公开仓库的 secrets 在 fork 时默认不继承**，这既是安全特性也是坑。

### 坑 3：自定义域名

买了域名想换成 `blog.yourdomain.com`：

1. 在 `public/` 下放一个 `CNAME` 文件，写入 `blog.yourdomain.com`
2. 域名服务商加 CNAME 记录指向 `guancii.github.io`
3. 等 DNS 生效（最长 24 小时）

## 为什么不用 Vercel / Netlify

这两个也很好用，部署流程甚至更简单。**选 GitHub Pages 的原因：**

- 完全免费
- 仓库和部署一体
- 不依赖第三方服务
- 对一个简单的静态博客来说，够用

**什么时候换：** 如果未来要加服务端逻辑（API、数据库、登录），GitHub Pages 就搞不定了，得换 Vercel 或自建服务器。

## 一些优化建议

1. **缓存依赖**：`actions/setup-node` 的 `cache: 'npm'` 会自动缓存 `node_modules`，构建快很多
2. **构建时区**：GitHub Actions 的 runner 是 UTC，如果要按时间排序文章，日期用 ISO 8601 格式最稳
3. **构建超时**：如果依赖很多，构建可能超时。可以考虑用 `pnpm` 替代 `npm`，速度快几倍

## 最后

整个流程跑通后，写博客这件事变得异常轻松：

```bash
# 新建一篇文章
nvim src/content/posts/new-post.md

# 写完提交
git add . && git commit -m "post: new post" && git push

# 几分钟后自动上线
```

**技术的事搞完，剩下的就是坚持写。** 这才是真正难的部分。

有部署相关的问题，欢迎在评论区聊 👇
