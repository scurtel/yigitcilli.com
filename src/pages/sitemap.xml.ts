import type { APIRoute } from 'astro';
import { isLegacySeoSlug } from '@/data/legacy-seo';
import { pageSlugs } from '@/data/pages';
import { site } from '@/config/site';

const staticPaths = ['', ...pageSlugs.map((slug) => `/${slug}`)];

function priorityFor(path: string): string {
  if (path === '') return '1.0';
  const slug = path.replace(/^\//, '');
  if (isLegacySeoSlug(slug)) return '0.9';
  if (slug === 'tercume' || slug === 'referanslar' || slug === 'iletisim') return '0.88';
  return '0.85';
}

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);

  const urls = staticPaths
    .map((path) => {
      const loc = path ? new URL(`${path}/`, site.url).href : site.url;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priorityFor(path)}</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
