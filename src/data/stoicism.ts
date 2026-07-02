export type StoicPhilosopher = {
  id: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt: string;
  biography: string;
  importance: string;
  keyThought: string;
  quote: string;
};

export const defaultStoicId = 'marcus-aurelius';

export const stoics: StoicPhilosopher[] = [
  {
    id: 'marcus-aurelius',
    name: 'Marcus Aurelius',
    tagline: 'İmparatorluk yükü altında zihinsel düzeni koruyan Stoacı hükümdar.',
    image: '/images/stoicism/marcus-aurelius.webp',
    imageAlt: 'Marcus Aurelius portresi',
    biography:
      'Marcus Aurelius, Roma İmparatoru ve Stoacı düşüncenin en güçlü temsilcilerinden biridir. İmparatorluk sorumluluğu, savaşlar, salgınlar ve siyasi baskılar içinde bile insanın kendi zihinsel düzenini koruması gerektiğini savunmuştur. Kendisi için tuttuğu notlar daha sonra “Kendime Düşünceler” adıyla Stoacı felsefenin en önemli metinlerinden biri hâline gelmiştir.',
    importance:
      'Marcus Aurelius, gücün ve iktidarın ortasında bile ölçülü, sakin ve erdemli kalmanın mümkün olduğunu gösterir. Onun düşüncesinde insan, dış olayları tamamen kontrol edemez; fakat olaylara verdiği tepkiyi kontrol edebilir.',
    keyThought:
      'İnsanın huzuru, dış dünyanın kusursuz olmasına değil, kendi yargılarını disipline etmesine bağlıdır.',
    quote: '“Dış olaylar zihnini rahatsız etmez; seni rahatsız eden, onlar hakkındaki yargındır.”',
  },
  {
    id: 'epictetus',
    name: 'Epictetus',
    tagline: 'Kontrol edilebilir ve edilemeyen arasındaki çizgiyi netleştiren öğretmen.',
    image: '/images/stoicism/epictetus.webp',
    imageAlt: 'Epictetus portresi',
    biography:
      'Epictetus, köle olarak doğmuş ve daha sonra özgürlüğünü kazanmış bir Stoacı filozoftur. Hayatı, Stoacılığın en temel ayrımlarından biri olan “kontrolümüzde olanlar ve olmayanlar” düşüncesinin canlı bir örneğidir. Dersleri öğrencisi Arrian tarafından derlenmiş ve günümüze ulaşmıştır.',
    importance:
      'Epictetus’a göre insanın özgürlüğü, dış koşullardan çok iç tutumunda başlar. Beden, makam, servet ve başkalarının düşünceleri tamamen bizim elimizde değildir; ancak niyetimiz, seçimlerimiz ve tepkilerimiz bize aittir.',
    keyThought:
      'Kontrol edemediğin şeylerle savaşmak yerine, kontrol edebildiğin alanı güçlendir.',
    quote: '“Bizi üzen şeyler olayların kendisi değil, onlar hakkındaki düşüncelerimizdir.”',
  },
  {
    id: 'seneca',
    name: 'Seneca',
    tagline: 'Felsefeyi günlük yaşamın pratiğine taşıyan yazar ve devlet adamı.',
    image: '/images/stoicism/seneca.webp',
    imageAlt: 'Seneca portresi',
    biography:
      'Seneca, Roma döneminin önemli devlet adamlarından, yazarlarından ve Stoacı filozoflarından biridir. Zenginlik, iktidar, ölüm, öfke, zaman ve ruh dinginliği üzerine yazdığı metinlerle Stoacılığı günlük hayatın içine taşımıştır. Özellikle Lucilius’a yazdığı mektuplar, pratik felsefenin güçlü örneklerindendir.',
    importance:
      'Seneca, felsefeyi soyut bir düşünce sistemi olarak değil, yaşama biçimi olarak ele alır. Ona göre insan, zamanı doğru kullanmalı, tutkularının esiri olmamalı ve ölüm gerçeğini hatırlayarak daha bilinçli yaşamalıdır.',
    keyThought:
      'Zaman, insanın sahip olduğu en değerli şeydir; fakat çoğu insan onu en kolay harcadığı şey gibi yaşar.',
    quote: '“Yaşam kısa değildir; onu kısaltan, bizim zamanı savurganca kullanmamızdır.”',
  },
];

export function getStoic(id: string): StoicPhilosopher | undefined {
  return stoics.find((s) => s.id === id);
}
