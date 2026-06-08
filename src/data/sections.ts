export type SectionCta = {
  label: string;
  href: string;
};

export type SectionItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  /** Ana sayfa kartında kısa özet (yoksa description kullanılır) */
  homeTeaser?: string;
  highlights: string[];
  cta?: SectionCta;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
};

export const sections: SectionItem[] = [
  {
    id: 'yazilim',
    title: 'Kod & Mimari',
    eyebrow: '01',
    description:
      'Ürün ve web odaklı teknik üretim: sade mimari, okunabilir kod ve uzun ömürlü sistemler.',
    highlights: [
      'Sade mimari ve net sınırlar',
      'Sürdürülebilir ve bakımı kolay yapı',
      'Performans ve güvenilirlik',
    ],
    cta: { label: 'Teknik altyapı', href: '/yazilim' },
    image: {
      src: '/images/software.webp',
      alt: 'Yiğit Cilli yazılım ve dijital ürünler',
    },
  },
  {
    id: 'aplikasyonlar',
    title: 'Yazılım',
    eyebrow: '02',
    description:
      'Web ve mobilde ürün mantığı önce gelir: akış, arayüz ve kullanıcı deneyimi aynı çizgide ilerler.',
    highlights: [
      'Mobil ve web deneyimi',
      'Kullanıcı odağı ve net akışlar',
      'Ürün mantığı ve tutarlı arayüz',
    ],
    cta: { label: 'Yazılım çalışmaları', href: '/aplikasyonlar' },
    image: {
      src: '/images/apps.webp',
      alt: 'Yiğit Cilli mobil aplikasyon projeleri',
    },
    reverse: true,
  },
  {
    id: 'tercume',
    title: 'Tercüme',
    eyebrow: '03',
    description:
      'Teknik ve edebi metinlerde dil hassasiyeti: anlam bütünlüğü, ton ve terminoloji korunur.',
    highlights: [
      'Anlam ve ton uyumu',
      'Terminoloji tutarlılığı',
      'Kaynak metnin ağırlığı',
    ],
    cta: { label: 'Tercüme hizmetleri', href: '/tercume' },
    image: {
      src: '/images/translation.webp',
      alt: 'Yiğit Cilli profesyonel tercüme hizmetleri',
    },
  },
  {
    id: 'stoacilik',
    title: 'Stoacılık',
    eyebrow: '04',
    description:
      'Stoacı düşünceyi disiplin ve günlük yaşamla buluşturan notlar: sakin, net, uygulanabilir.',
    highlights: [
      'Düşünce ve disiplin',
      'Günlük hayatla bağlantı',
      'Sakin ve net anlatım',
    ],
    cta: { label: 'Stoacı yazılar', href: '/stoacilik' },
    image: {
      src: '/images/stoicism.webp',
      alt: 'Stoacı düşünce ve felsefe yazıları',
    },
    reverse: true,
  },
  {
    id: 'hakkimda',
    title: 'Hakkımda',
    eyebrow: '05',
    description:
      'Adana doğumlu; Bilfen, Toronto ve Londra eğitimi; Roehampton mezunu. Danışmanlık, yeminli tercüme ve Toryum Group.',
    homeTeaser:
      'Adana; Bilfen, Toronto ve Londra eğitimi. Danışmanlık, yeminli tercüme ve Toryum Group.',
    highlights: [
      'Uluslararası eğitim geçmişi',
      'Şirket danışmanlığı',
      'Yeminli tercüme',
    ],
    cta: { label: 'Biyografi ve deneyim', href: '/hakkimda' },
    image: {
      src: '/images/about.webp',
      alt: 'Yiğit Cilli kişisel marka ve dijital çalışmalar',
    },
  },
];
