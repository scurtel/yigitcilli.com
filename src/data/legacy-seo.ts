/** WordPress’ten korunan SEO URL slug’ları (sitemap önceliği için) */
export const legacySeoSlugs = [
  'adana-yeminli-tercuman-yigit-cilli',
  'adanada-noter-onayli-ingilizce-tercume-hizmeti',
  'adana-yeminli-tercumanin-gorevleri',
  'makaleler',
  'gizlilik-politikamiz',
] as const;

export type LegacySeoSlug = (typeof legacySeoSlugs)[number];

export function isLegacySeoSlug(slug: string): slug is LegacySeoSlug {
  return (legacySeoSlugs as readonly string[]).includes(slug);
}
