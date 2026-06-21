import { getCollection } from 'astro:content';

export async function GET({ site: siteUrl }: { site: URL }) {
  const posts = (await getCollection('posts'))
    .filter(p => !p.data.draft)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

  // 静态页面
  const staticPages = [
    { path: '/', priority: '1.0', changefreq: 'daily' as const },
    { path: '/about/', priority: '0.7', changefreq: 'monthly' as const },
    { path: '/archive/', priority: '0.8', changefreq: 'weekly' as const },
    { path: '/search/', priority: '0.3', changefreq: 'monthly' as const },
    { path: '/tags/', priority: '0.5', changefreq: 'weekly' as const },
  ];

  // 仅包含 ASCII tag 页面，排除中文 tag（避免 XML 编码问题）
  const allTags = [...new Set(posts.flatMap(p => p.data.tags || []))];
  const asciiTagPages = allTags
    .filter(tag => /^[a-zA-Z0-9\-_+]+$/.test(tag))
    .map(tag => ({
      path: `/tags/${encodeURIComponent(tag)}/`,
      priority: '0.4',
      changefreq: 'weekly' as const,
    }));

  const pageEntries = [
    ...staticPages,
    ...asciiTagPages,
    ...posts.map(p => ({
      path: `/posts/${p.slug}/`,
      priority: '0.6',
      changefreq: 'monthly' as const,
      lastmod: p.data.updated || p.data.date,
    })),
  ];

  const urlElements = pageEntries.map(entry => {
    const fullUrl = new URL(entry.path, siteUrl).href;
    let el = `  <url>\n    <loc>${fullUrl}</loc>\n    <priority>${entry.priority}</priority>\n    <changefreq>${entry.changefreq}</changefreq>`;
    if ('lastmod' in entry && entry.lastmod) {
      const d: Date = entry.lastmod instanceof Date ? entry.lastmod : new Date(entry.lastmod);
      el += `\n    <lastmod>${d.toISOString().split('T')[0]}</lastmod>`;
    }
    el += '\n  </url>';
    return el;
  }).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlElements}\n</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
