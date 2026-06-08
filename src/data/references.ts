export type TranslationReference = {
  id: string;
  name: string;
  tagline: string;
  logo: string;
  logoAlt: string;
  /** PNG’de beyaz/koyu kare zemin varsa dar açık zemin kullan */
  lightBackdrop?: boolean;
};

export type TranslationReferenceRow = {
  references: TranslationReference[];
};

/** Satır satır referanslar — yeni kurum veya satır buraya eklenir. */
export const translationReferenceRows: TranslationReferenceRow[] = [
  {
    references: [
      {
        id: 'abd-adana',
        name: 'ABD Adana Konsolosluğu',
        tagline: 'Resmi metinler',
        logo: '/images/references/abd-adana-konsoloslugu.png',
        logoAlt: 'ABD Adana Konsolosluğu logosu',
        lightBackdrop: true,
      },
      {
        id: 'drc',
        name: 'Danimarka Mülteci Konseyi',
        tagline: 'İnsani yardım',
        logo: '/images/references/danimarka-multeci-konseyi.png',
        logoAlt: 'Danimarka Mülteci Konseyi logosu',
        lightBackdrop: true,
      },
      {
        id: 'sasa',
        name: 'SASA',
        tagline: 'Endüstri',
        logo: '/images/references/sasa.png',
        logoAlt: 'SASA logosu',
      },
      {
        id: 'adana-demirspor',
        name: 'Adana Demir Spor',
        tagline: 'Kurumsal iletişim',
        logo: '/images/references/adana-demirspor.png',
        logoAlt: 'Adana Demir Spor logosu',
      },
    ],
  },
  {
    references: [
      {
        id: 'bogazici',
        name: 'Boğaziçi Üniversitesi',
        tagline: 'Akademik metinler',
        logo: '/images/references/bogazici-universitesi.png',
        logoAlt: 'Boğaziçi Üniversitesi logosu',
        lightBackdrop: true,
      },
      {
        id: 'tnb',
        name: 'Türkiye Noterler Birliği',
        tagline: 'Hukuki metinler',
        logo: '/images/references/turkiye-noterler-birligi.png',
        logoAlt: 'Türkiye Noterler Birliği logosu',
        lightBackdrop: true,
      },
      {
        id: 'adana-bsb',
        name: 'Adana Büyükşehir Belediyesi',
        tagline: 'Kamu kurumu',
        logo: '/images/references/adana-buyuksehir-belediyesi.png',
        logoAlt: 'Adana Büyükşehir Belediyesi logosu',
        lightBackdrop: true,
      },
      {
        id: 'avrupa-konseyi',
        name: 'Avrupa Konseyi',
        tagline: 'Uluslararası kurum',
        logo: '/images/references/avrupa-konseyi.png',
        logoAlt: 'Avrupa Konseyi logosu',
        lightBackdrop: true,
      },
    ],
  },
];
