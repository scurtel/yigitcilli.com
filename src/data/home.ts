import type { SectionItem } from '@/data/sections';

/** Ana sayfada tercüme kartından sonra gösterilen referans özeti */
export const referanslarOverviewCard: SectionItem = {
  id: 'referanslar',
  title: 'Referanslarımız',
  eyebrow: 'Referans',
  description:
    'Kamu, sanayi, akademi ve uluslararası kurumlarda uzun süreli tercüme ve kurumsal metin iş birlikleri.',
  homeTeaser:
    'Resmi, kurumsal ve teknik metinlerde güvenen kurumlar — kamu, sanayi, akademi ve sivil toplum.',
  highlights: ['Resmi ve kurumsal metinler', 'Akademi ve kamu', 'Uluslararası kurumlar'],
  cta: { label: 'Referans listesi', href: '/referanslar' },
  image: {
    src: '/images/translation.webp',
    alt: 'Profesyonel tercüme referansları',
  },
};

/** Ana sayfa içindekiler — smooth scroll hedefleri */
export const homeNavAnchors = [
  { label: 'Alanlar', href: '#alanlar' },
  { label: 'Yazılım', href: '#gelistirdigim-uygulamalar' },
  { label: 'Referanslar', href: '/referanslar' },
  { label: 'İletişim', href: '#iletisim' },
] as const;
