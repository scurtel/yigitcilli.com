export const site = {
  name: 'Yiğit Cilli',
  title: 'Yiğit Cilli | Yazılım, Tercüme ve Stoacı Düşünce',
  description:
    'Yiğit Cilli’nin yazılım, dijital ürünler, profesyonel tercüme ve stoacı düşünce üzerine çalışmalarını bir araya getiren kişisel marka sitesi.',
  ogDescription:
    'Yazılım, dijital ürünler, tercüme ve stoacı düşünce: Yiğit Cilli’nin üretim odaklı kişisel marka alanı.',
  slogan: 'Yazılım, dil ve düşünceyi aynı çizgide buluşturan kişisel marka alanı.',
  url: 'https://yigitcilli.com',
  locale: 'tr_TR',
  author: 'Yiğit Cilli',
  email: 'info@yigitcilli.com',
  logo: {
    src: '/images/falcon-logo.png',
    alt: 'Yiğit Cilli — falcon marka logosu',
  },
  hero: {
    eyebrow: 'Kişisel marka',
    subtitle:
      'Dijital ürünler, uygulamalar, çeviri çalışmaları ve stoacı düşünce üzerine sade, disiplinli ve üretim odaklı bir alan.',
    ctaPrimary: 'Çalışma alanları',
    ctaSecondary: 'İletişim',
  },
  footer: {
    title: 'İletişim',
    description:
      'Bir proje, metin veya iş birliği için info@yigitcilli.com adresine yazmanız yeterli. Uygun olduğunda kısa bir dönüş yaparım.',
  },
} as const;

export const nav = [
  { id: 'yazilim', label: 'Kod & Mimari', href: '/yazilim' },
  { id: 'aplikasyonlar', label: 'Yazılım', href: '/aplikasyonlar' },
  { id: 'tercume', label: 'Tercüme', href: '/tercume' },
  { id: 'referanslar', label: 'Referanslar', href: '/referanslar' },
  { id: 'stoacilik', label: 'Stoacılık', href: '/stoacilik' },
  { id: 'hakkimda', label: 'Hakkımda', href: '/hakkimda' },
  { id: 'iletisim', label: 'İletişim', href: '/iletisim' },
] as const;
