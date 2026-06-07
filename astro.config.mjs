import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 部署到 GitHub Pages 时，repo 名是 <user>.github.io/<repo>
// 如果是 user 站点（<user>.github.io），base 留空
const SITE_REPO = 'guancii.github.io';

export default defineConfig({
  site: 'https://guancii.github.io',
  base: '/',
  integrations: [
    tailwind({ applyBaseStyles: false })
    // 注意：未启用 @astrojs/sitemap，因为中文 tag 路径会导致报错。
    // 如需 sitemap，可手动添加 src/pages/sitemap.xml.ts 或升级到 astro 5.x
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  },
  build: {
    format: 'directory'
  }
});
