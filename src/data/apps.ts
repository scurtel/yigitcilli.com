export type DevelopedApp = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  categories: string[];
  platform: string;
  storeLabel: string;
  storeUrl: string;
  icon: string;
  iconAlt: string;
};

/** İleride yeni uygulamalar bu diziye eklenir. */
export const developedApps: DevelopedApp[] = [
  {
    id: 'calmernow',
    name: 'CalmerNow AI: Anxiety & Calm',
    tagline:
      'AI destekli sakinleşme, nefes egzersizleri ve günlük mental rahatlama uygulaması.',
    description:
      'CalmerNow AI, kaygı, stres ve günlük zihinsel rahatlama için geliştirilmiş bir mobil uygulamadır. Nefes egzersizleri, sakinleştirici sesler, günlük sakinlik rutinleri, odak modu ve yapay zekâ destekli düşünce yeniden çerçeveleme sunar. Yoğun veya kaygılı anlarda daha sakin ve dengeli hissetmeye yardımcı olmayı amaçlar.',
    categories: ['Mobil Uygulama', 'Yapay Zekâ', 'Wellness'],
    platform: 'Android',
    storeLabel: "Google Play'de Gör",
    storeUrl: 'https://play.google.com/store/apps/details?id=com.calmernow.app',
    icon: '/images/calmernow.png',
    iconAlt: 'CalmerNow AI: Anxiety & Calm uygulama ikonu',
  },
];
