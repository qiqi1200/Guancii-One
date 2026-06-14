import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// 部署在 Vercel 上
const SITE_REPO = 'blog.260607.best';

export default defineConfig({
  site: 'https://blog.260607.best',
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
