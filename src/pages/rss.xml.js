import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import site from '../site.json';
const SITE = site;

export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map(post => ({
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.date,
        link: `/posts/${post.slug}/`,
        categories: post.data.tags
      }))
  });
}
