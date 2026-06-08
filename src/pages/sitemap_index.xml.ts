import type { APIRoute } from 'astro';
import { site } from '@/config/site';

/** WordPress / Search Console uyumu: index → asıl site haritası */
export const GET: APIRoute = () => {
  const sitemapUrl = new URL('/sitemap.xml', site.url).href;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemapUrl}</loc>
    <lastmod>${new Date().toISOString().slice(0, 10)}</lastmod>
  </sitemap>
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
