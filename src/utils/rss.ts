// 构建期抓取友链 RSS，聚合最新文章（朋友圈功能）
// 任何失败都静默返回空数组——单个友链挂掉不能影响构建
export interface FeedItem {
  title: string;
  link: string;
  date: string;
  source: string;
}

function pick(item: string, tags: string[]): string {
  for (const tag of tags) {
    const m = item.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'));
    if (!m) continue;
    return m[1]
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
      .replace(/<[^>]+>/g, '')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&')
      .trim();
  }
  return '';
}

export async function fetchFeed(url: string, source: string, limit = 3): Promise<FeedItem[]> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return [];
    const xml = await res.text();
    const items = [...xml.matchAll(/<item[\s\S]*?<\/item>/g)].slice(0, limit);
    return items
      .map(m => ({
        title: pick(m[0], ['title']),
        link: pick(m[0], ['link']),
        date: pick(m[0], ['pubDate', 'published', 'updated', 'dc:date']),
        source
      }))
      .filter(i => i.title && i.link);
  } catch {
    return [];
  }
}
