/**
 * Server-only: Gemini ile ana sayfa metinlerini üretir.
 * API key yalnızca bu script çalışırken .env'den okunur; client bundle'a girmez.
 *
 * Kullanım: npm run generate:content
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  const path = resolve(root, '.env');
  const raw = readFileSync(path, 'utf8');
  for (const line of raw.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

loadEnv();

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

if (!apiKey) {
  console.error('GEMINI_API_KEY .env dosyasında tanımlı değil.');
  process.exit(1);
}

const prompt = `Sen premium kişisel marka sitesi için Türkçe metin yazarısın.

Site: Yiğit Cilli (yigitcilli.com)
Kimlik: Yazılım, aplikasyonlar, profesyonel tercüme ve stoacı düşünceyi bir araya getiren rafine kişisel marka.
Ton: Prestijli, sade, entelektüel, güven veren. Aşırı reklam dili yok.
YASAK kelimeler/ifadeler: en iyi, lider, mükemmel, benzersiz, dünya standartı, kusursuz.
SEO doğal olsun; anahtar kelime doldurma yok. Kısa ama etkili cümleler (description max 2 cümle).
Section title'lar nav ile aynı olsun: Yazılım, Aplikasyonlar, Tercüme, Stoacılık, Hakkımda.

Yalnızca geçerli JSON döndür (markdown veya açıklama ekleme):

{
  "seo": {
    "title": "tarayıcı title, max 60 karakter civarı",
    "description": "meta description, max 155 karakter",
    "ogDescription": "Open Graph açıklaması, 1-2 cümle",
    "slogan": "kısa site sloganı, max 12 kelime"
  },
  "hero": {
    "eyebrow": "kısa üst etiket",
    "subtitle": "alt başlık, 1-2 cümle",
    "ctaPrimary": "birincil buton",
    "ctaSecondary": "ikincil buton"
  },
  "footer": {
    "title": "iletişim başlığı",
    "description": "iletişim açıklaması, 2 cümle max"
  },
  "sections": [
    {
      "id": "yazilim",
      "title": "Yazılım",
      "description": "2-3 cümle",
      "highlights": ["madde1", "madde2", "madde3"],
      "cta": { "label": "kısa buton metni veya null", "href": "#yazilim" }
    },
    {
      "id": "aplikasyonlar",
      "title": "Aplikasyonlar",
      "description": "...",
      "highlights": ["...", "...", "..."],
      "cta": null
    },
    {
      "id": "tercume",
      "title": "Tercüme",
      "description": "...",
      "highlights": ["...", "...", "..."],
      "cta": null
    },
    {
      "id": "stoacilik",
      "title": "Stoacılık",
      "description": "...",
      "highlights": ["...", "...", "..."],
      "cta": null
    },
    {
      "id": "hakkimda",
      "title": "Hakkımda",
      "description": "...",
      "highlights": ["...", "...", "..."],
      "cta": { "label": "...", "href": "#iletisim" }
    }
  ]
}

Her section için 2-4 highlight maddesi. cta sadece anlamlıysa ekle, yoksa null.`;

const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;

const response = await fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      responseMimeType: 'application/json',
    },
  }),
});

if (!response.ok) {
  const err = await response.text();
  console.error('Gemini API hatası:', response.status, err);
  process.exit(1);
}

const data = await response.json();
const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

if (!text) {
  console.error('Gemini yanıtı boş:', JSON.stringify(data, null, 2));
  process.exit(1);
}

let content;
try {
  content = JSON.parse(text);
} catch {
  const match = text.match(/\{[\s\S]*\}/);
  if (!match) {
    console.error('JSON parse edilemedi:', text);
    process.exit(1);
  }
  content = JSON.parse(match[0]);
}

const imageMap = {
  yazilim: { src: '/images/software.webp', alt: 'Yiğit Cilli yazılım ve dijital ürünler' },
  aplikasyonlar: { src: '/images/apps.webp', alt: 'Yiğit Cilli mobil aplikasyon projeleri' },
  tercume: { src: '/images/translation.webp', alt: 'Yiğit Cilli profesyonel tercüme hizmetleri' },
  stoacilik: { src: '/images/stoicism.webp', alt: 'Stoacı düşünce ve felsefe yazıları' },
  hakkimda: { src: '/images/about.webp', alt: 'Yiğit Cilli kişisel marka ve dijital çalışmalar' },
};

const reverseIds = new Set(['aplikasyonlar', 'stoacilik']);
const eyebrows = ['01', '02', '03', '04', '05'];

const sectionsTs = `export type SectionCta = {
  label: string;
  href: string;
};

export type SectionItem = {
  id: string;
  title: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  cta?: SectionCta;
  image: {
    src: string;
    alt: string;
  };
  reverse?: boolean;
};

export const sections: SectionItem[] = [
${content.sections
  .map((s, i) => {
    const img = imageMap[s.id];
    if (!img) throw new Error(`Bilinmeyen section id: ${s.id}`);
    const ctaBlock = s.cta
      ? `    cta: { label: ${JSON.stringify(s.cta.label)}, href: ${JSON.stringify(s.cta.href || `#${s.id}`)} },\n`
      : '';
    const reverse = reverseIds.has(s.id) ? '    reverse: true,\n' : '';
    return `  {
    id: ${JSON.stringify(s.id)},
    title: ${JSON.stringify(s.title)},
    eyebrow: ${JSON.stringify(eyebrows[i] || String(i + 1).padStart(2, '0'))},
    description: ${JSON.stringify(s.description)},
    highlights: ${JSON.stringify(s.highlights)},
${ctaBlock}    image: {
      src: ${JSON.stringify(img.src)},
      alt: ${JSON.stringify(img.alt)},
    },
${reverse}  }`;
  })
  .join(',\n')}
];
`;

const siteTs = `export const site = {
  name: 'Yiğit Cilli',
  title: ${JSON.stringify(content.seo.title)},
  description: ${JSON.stringify(content.seo.description)},
  ogDescription: ${JSON.stringify(content.seo.ogDescription)},
  slogan: ${JSON.stringify(content.seo.slogan)},
  url: 'https://yigitcilli.com',
  locale: 'tr_TR',
  author: 'Yiğit Cilli',
  email: 'info@yigitcilli.com',
  hero: {
    eyebrow: ${JSON.stringify(content.hero.eyebrow)},
    subtitle: ${JSON.stringify(content.hero.subtitle)},
    ctaPrimary: ${JSON.stringify(content.hero.ctaPrimary)},
    ctaSecondary: ${JSON.stringify(content.hero.ctaSecondary)},
  },
  footer: {
    title: ${JSON.stringify(content.footer.title)},
    description: ${JSON.stringify(content.footer.description)},
  },
} as const;

export const nav = [
  { id: 'yazilim', label: 'Yazılım' },
  { id: 'aplikasyonlar', label: 'Aplikasyonlar' },
  { id: 'tercume', label: 'Tercüme' },
  { id: 'stoacilik', label: 'Stoacılık' },
  { id: 'hakkimda', label: 'Hakkımda' },
  { id: 'iletisim', label: 'İletişim' },
] as const;
`;

writeFileSync(resolve(root, 'src/data/sections.ts'), sectionsTs, 'utf8');
writeFileSync(resolve(root, 'src/config/site.ts'), siteTs, 'utf8');

console.log('✓ src/data/sections.ts güncellendi');
console.log('✓ src/config/site.ts güncellendi');
console.log('\n--- Özet ---');
console.log('Slogan:', content.seo.slogan);
console.log('Title:', content.seo.title);
