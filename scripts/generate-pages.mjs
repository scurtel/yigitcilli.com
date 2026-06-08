/**
 * Server-only: Gemini ile src/data/pages.ts sayfa içeriklerini üretir/günceller.
 * API key yalnızca .env → GEMINI_API_KEY (client bundle'a girmez).
 *
 * Kullanım: npm run generate:pages
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  try {
    const raw = readFileSync(resolve(root, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq).trim();
      const value = trimmed.slice(eq + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    /* .env yok */
  }
}

loadEnv();

const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || 'gemini-2.0-flash';

const TONE_RULES = `Bu metinler Türkiye'de yeminli tercüme, yazılım, yapay zekâ ve SEO alanlarında hizmet veren kişisel marka sitesi (yigitcilli.com, Yiğit Cilli) için hazırlanacaktır.
İçerikler güven veren, özgün, sade ve SEO uyumlu olmalıdır. Hukuki veya resmi kesinlik iddiası içermemelidir.
Ton: profesyonel, abartısız, yerel SEO odaklı Türkçe.
YASAK: "en iyi", "garantili", "kesin sonuç", "lider", "mükemmel", "bir numara", "tek adres".
Meta description 140-160 karakter aralığında olsun.
Toplam gövde metni (intro + sections paragrafları) yaklaşık 500-800 kelime; gereksiz tekrar yok.
Yalnızca bir H1 (hero.title); sections içinde H2 (heading) kullan.
Her sayfa title (seo.title) benzersiz olsun.`;

const PAGE_SPECS = [
  {
    slug: 'tercume',
    focus:
      'Adana yeminli tercüman, noter onaylı tercüme, İngilizce tercüme, hukuki tercüme, akademik tercüme, resmi belge çevirisi.',
    image: { src: '/images/translation.webp', alt: 'Yiğit Cilli profesyonel tercüme hizmetleri' },
    eyebrow: 'Alan',
    relatedLinks: [
      { label: 'Adana yeminli tercüman', href: '/adana-yeminli-tercuman-yigit-cilli/' },
      { label: 'Noter onaylı İngilizce tercüme', href: '/adanada-noter-onayli-ingilizce-tercume-hizmeti/' },
      { label: 'Yeminli tercümanın görevleri', href: '/adana-yeminli-tercumanin-gorevleri/' },
      { label: 'Referanslar', href: '/referanslar/' },
    ],
    cta: { label: 'Metin için yazın', href: '/iletisim' },
    secondaryCta: { label: 'Referanslarımız', href: '/referanslar' },
  },
  {
    slug: 'adana-yeminli-tercuman-yigit-cilli',
    focus:
      'Adana yeminli tercüman hizmeti, resmi belge çevirisi, noter onaylı tercüme, Yiğit Cilli Tercüme Bürosu.',
    image: { src: '/images/translation.webp', alt: 'Adana yeminli tercüman Yiğit Cilli' },
    eyebrow: 'Tercüme · Adana',
    relatedLinks: [
      { label: 'Tercüme alanı', href: '/tercume/' },
      { label: 'Noter onaylı İngilizce tercüme', href: '/adanada-noter-onayli-ingilizce-tercume-hizmeti/' },
      { label: 'İletişim', href: '/iletisim/' },
    ],
    cta: { label: 'Tercüme talebi', href: '/iletisim' },
    secondaryCta: { label: 'Referanslar', href: '/referanslar' },
  },
  {
    slug: 'adanada-noter-onayli-ingilizce-tercume-hizmeti',
    focus:
      'Adana noter onaylı İngilizce tercüme, yeminli çeviri, resmi evrak çevirisi, diploma, transkript, pasaport, vize evrakları.',
    image: { src: '/images/translation.webp', alt: 'Adana noter onaylı İngilizce tercüme' },
    eyebrow: 'Tercüme · Adana',
    relatedLinks: [
      { label: 'Yeminli tercüman', href: '/adana-yeminli-tercuman-yigit-cilli/' },
      { label: 'Tercüme hizmetleri', href: '/tercume/' },
      { label: 'Referanslar', href: '/referanslar/' },
    ],
    cta: { label: 'Belge için yazın', href: '/iletisim' },
    secondaryCta: { label: 'Tercüme alanı', href: '/tercume' },
  },
  {
    slug: 'adana-yeminli-tercumanin-gorevleri',
    focus:
      'Yeminli tercüman ne iş yapar, yeminli çeviri nedir, noter onaylı tercüme süreci, resmi çeviri belgeleri.',
    image: { src: '/images/translation.webp', alt: 'Yeminli tercüman görevleri' },
    eyebrow: 'Tercüme',
    relatedLinks: [
      { label: 'Adana yeminli tercüman', href: '/adana-yeminli-tercuman-yigit-cilli/' },
      { label: 'Noter onaylı çeviri', href: '/adanada-noter-onayli-ingilizce-tercume-hizmeti/' },
      { label: 'Tercüme', href: '/tercume/' },
    ],
    cta: { label: 'Süreç için iletişim', href: '/iletisim' },
    secondaryCta: { label: 'Referanslar', href: '/referanslar' },
  },
  {
    slug: 'hakkimda',
    focus:
      'Yiğit Cilli: yazılım, yapay zekâ, SEO, mobil uygulama geliştirme, yeminli tercüme; Bilfen, Toronto, Londra, Roehampton, Toryum Group.',
    image: { src: '/images/about.webp', alt: 'Yiğit Cilli kişisel marka ve dijital çalışmalar' },
    eyebrow: 'Kişisel marka',
    relatedLinks: [
      { label: 'İletişim', href: '/iletisim/' },
      { label: 'Yazılım', href: '/yazilim/' },
      { label: 'Tercüme', href: '/tercume/' },
    ],
    cta: { label: 'İletişim', href: '/iletisim' },
  },
  {
    slug: 'yazilim',
    focus:
      'Web sitesi geliştirme, yapay zekâ destekli yazılım, SEO araçları, mobil uygulama, WordPress, Astro, Next.js, performans ve mimari.',
    image: { src: '/images/software.webp', alt: 'Yiğit Cilli yazılım ve dijital ürünler' },
    eyebrow: 'Alan',
    relatedLinks: [
      { label: 'Mobil uygulamalar', href: '/aplikasyonlar/' },
      { label: 'İletişim', href: '/iletisim/' },
    ],
    cta: { label: 'Proje için yazın', href: '/iletisim' },
    secondaryCta: { label: 'Uygulama portföyü', href: '/aplikasyonlar' },
  },
  {
    slug: 'aplikasyonlar',
    focus:
      'CalmerNow AI ve mobil uygulama geliştirme; yapay zekâ destekli wellness ve odak ürünleri; Android, ürün dili, UX.',
    image: { src: '/images/apps.webp', alt: 'Yiğit Cilli yazılım ve dijital ürünler' },
    eyebrow: 'Alan',
    relatedLinks: [
      { label: 'Kod ve mimari', href: '/yazilim/' },
      { label: 'İletişim', href: '/iletisim/' },
    ],
    cta: { label: 'İletişim', href: '/iletisim' },
    secondaryCta: { label: 'Teknik altyapı', href: '/yazilim' },
  },
  {
    slug: 'makaleler',
    focus:
      'Yazılım, yapay zekâ, SEO, tercüme ve kişisel gelişim makaleleri merkezi; stoacılık yazılarına yönlendirme.',
    image: { src: '/images/stoicism.webp', alt: 'Makaleler ve düşünce yazıları' },
    eyebrow: 'Yazılar',
    relatedLinks: [
      { label: 'Stoacılık', href: '/stoacilik/' },
      { label: 'Tercüme', href: '/tercume/' },
      { label: 'Yazılım', href: '/yazilim/' },
      { label: 'Hakkımda', href: '/hakkimda/' },
    ],
    cta: { label: 'Stoacılık yazıları', href: '/stoacilik' },
    secondaryCta: { label: 'Ana sayfa', href: '/' },
  },
];

const PRESERVE_SLUGS = ['referanslar', 'stoacilik', 'iletisim', 'gizlilik-politikamiz'];

function slugKey(slug) {
  return slug.includes('-') ? `'${slug}'` : slug;
}

function extractPageBlock(source, slug) {
  const key = slugKey(slug);
  const marker = `  ${key}: {`;
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Sayfa bulunamadı: ${slug}`);
  let depth = 1;
  let end = start + marker.length;
  for (; end < source.length; end++) {
    const ch = source[end];
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) {
        end++;
        break;
      }
    }
  }
  return source.slice(start, end).trimEnd();
}

async function callGemini(slug, spec, strict = false) {
  const strictNote = strict
    ? '\nÖNEMLİ: Yanıt yalnızca geçerli JSON olsun; yorum, virgül hatası veya tek tırnak kullanma. Tüm anahtarlar çift tırnaklı.'
    : '';
  const prompt = `${TONE_RULES}${strictNote}

Sayfa slug: /${slug}/
Odak anahtar kavramlar: ${spec.focus}
Önerilen iç linkler (relatedLinks olarak kullan, href aynen kalsın): ${JSON.stringify(spec.relatedLinks)}
Varsayılan CTA: ${JSON.stringify(spec.cta)}${spec.secondaryCta ? `, ikincil: ${JSON.stringify(spec.secondaryCta)}` : ''}

JSON şeması (markdown yok):
{
  "seo": {
    "title": "benzersiz tarayıcı title, | Yiğit Cilli ile bitebilir",
    "description": "140-160 karakter meta",
    "ogDescription": "1-2 cümle OG"
  },
  "hero": {
    "eyebrow": ${JSON.stringify(spec.eyebrow)},
    "title": "tek H1",
    "description": "intro, 2-3 cümle"
  },
  "blocks": [
    { "heading": "H2 başlık", "paragraphs": ["paragraf", "..."] }
  ],
  "highlights": ["4 madde", "..."],
  "faq": [
    { "question": "...", "answer": "..." }
  ],
  "relatedLinks": [{ "label": "...", "href": "/path/" }],
  "cta": { "label": "...", "href": "/iletisim" },
  "secondaryCta": { "label": "...", "href": "/..." } veya null
}

blocks: en az 4 section, her section 2-3 paragraf. faq: 3-4 soru. Paragraflarda doğal anahtar kelime; iç linkleri metin içinde de anabilirsin ama relatedLinks zorunlu.`;

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(apiKey)}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.65,
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    throw new Error(`Gemini ${slug}: ${response.status} ${await response.text()}`);
  }

  const data = await response.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) throw new Error(`Gemini boş yanıt: ${slug}`);

  return parseGeminiJson(text, slug);
}

function parseGeminiJson(text, slug) {
  let raw = text.trim();
  const fence = raw.match(/```(?:json)?\s*([\s\S]*?)```/i);
  if (fence) raw = fence[1].trim();
  const match = raw.match(/\{[\s\S]*\}/);
  if (match) raw = match[0];
  raw = raw.replace(/,\s*([}\]])/g, '$1');
  raw = raw.replace(/[\u201c\u201d]/g, '"').replace(/[\u2018\u2019]/g, "'");
  try {
    return JSON.parse(raw);
  } catch (err) {
    throw new Error(`JSON parse (${slug}): ${err.message}`);
  }
}

async function callGeminiWithRetry(slug, spec, attempts = 3) {
  let lastErr;
  for (let i = 0; i < attempts; i++) {
    try {
      return await callGemini(slug, spec, i > 0);
    } catch (err) {
      lastErr = err;
      if (i < attempts - 1) {
        console.warn(`  ⚠ ${slug} yeniden deneniyor (${i + 2}/${attempts})…`);
        await new Promise((r) => setTimeout(r, 2000));
      }
    }
  }
  throw lastErr;
}

function trimDescription(text, min = 140, max = 160) {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace >= min ? cut.slice(0, lastSpace) : cut).trimEnd() + '…';
}

function esc(str) {
  return JSON.stringify(str);
}

function formatPage(slug, data, spec) {
  const key = slugKey(slug);
  const blocks = data.blocks
    .map((b) => {
      const heading = b.heading ? `        heading: ${esc(b.heading)},\n` : '';
      const paras = JSON.stringify(b.paragraphs, null, 2)
        .split('\n')
        .map((line, i) => (i === 0 ? line : `        ${line}`))
        .join('\n');
      return `      {\n${heading}        paragraphs: ${paras},\n      }`;
    })
    .join(',\n');

  const faq =
    data.faq?.length > 0
      ? `    faq: ${JSON.stringify(data.faq, null, 2).replace(/\n/g, '\n    ')},\n`
      : '';

  const related =
    data.relatedLinks?.length > 0
      ? `    relatedLinks: ${JSON.stringify(data.relatedLinks, null, 2).replace(/\n/g, '\n    ')},\n`
      : '';

  const secondary = data.secondaryCta
    ? `    secondaryCta: { label: ${esc(data.secondaryCta.label)}, href: ${esc(data.secondaryCta.href)} },\n`
    : '';

  const imageBlock = spec.image
    ? `      image: {
        src: ${esc(spec.image.src)},
        alt: ${esc(spec.image.alt)},
      },`
    : '';

  return `  ${key}: {
    slug: ${esc(slug)},
    seo: {
      title: ${esc(data.seo.title)},
      description: ${esc(data.seo.description)},
      ogDescription: ${esc(data.seo.ogDescription)},
      ogImage: ${esc(spec.image?.src || '/images/hero.webp')},
    },
    hero: {
      eyebrow: ${esc(data.hero.eyebrow || spec.eyebrow)},
      title: ${esc(data.hero.title)},
      description: ${esc(data.hero.description)},
${imageBlock}
    },
    blocks: [
${blocks}
    ],
    highlights: ${JSON.stringify(data.highlights)},
${faq}${related}    cta: { label: ${esc(data.cta?.label || spec.cta.label)}, href: ${esc(data.cta?.href || spec.cta.href)} },
${secondary}  }`;
}

function countWords(data) {
  const parts = [
    data.hero?.description || '',
    ...(data.blocks || []).flatMap((b) => b.paragraphs || []),
    ...(data.faq || []).map((f) => `${f.question} ${f.answer}`),
  ];
  return parts.join(' ').split(/\s+/).filter(Boolean).length;
}

async function main() {
  if (!apiKey) {
    console.error('GEMINI_API_KEY .env dosyasında tanımlı değil.');
    console.error('Örnek: GEMINI_API_KEY=your_key_here');
    process.exit(1);
  }

  const pagesPath = resolve(root, 'src/data/pages.ts');
  const existingSource = readFileSync(pagesPath, 'utf8');
  const preserved = {};
  for (const slug of PRESERVE_SLUGS) {
    preserved[slug] = extractPageBlock(existingSource, slug);
  }

  const onlySlug = process.argv[2];
  const specs = onlySlug ? PAGE_SPECS.filter((s) => s.slug === onlySlug) : PAGE_SPECS;
  if (onlySlug && specs.length === 0) {
    console.error(`Bilinmeyen slug: ${onlySlug}`);
    process.exit(1);
  }

  const generated = {};
  for (const spec of specs) {
    console.log(`… Gemini: ${spec.slug}`);
    const data = await callGeminiWithRetry(spec.slug, spec);
    if (data.seo?.description) {
      data.seo.description = trimDescription(data.seo.description);
    }
    generated[spec.slug] = formatPage(spec.slug, data, spec);
    const words = countWords(data);
    console.log(`  ✓ ${spec.slug} (~${words} kelime, description: ${data.seo.description.length} char)`);
    await new Promise((r) => setTimeout(r, 1500));
  }

  const order = [
    'yazilim',
    'aplikasyonlar',
    'tercume',
    'referanslar',
    'stoacilik',
    'hakkimda',
    'iletisim',
    'adana-yeminli-tercuman-yigit-cilli',
    'adanada-noter-onayli-ingilizce-tercume-hizmeti',
    'adana-yeminli-tercumanin-gorevleri',
    'makaleler',
    'gizlilik-politikamiz',
  ];

  const existingBlocks = {};
  for (const spec of PAGE_SPECS) {
    if (!generated[spec.slug] && !preserved[spec.slug]) {
      try {
        existingBlocks[spec.slug] = extractPageBlock(existingSource, spec.slug);
      } catch {
        /* yoksa atla */
      }
    }
  }

  const body = order
    .map((slug) => {
      if (generated[slug]) return generated[slug];
      if (preserved[slug]) return preserved[slug];
      if (existingBlocks[slug]) return existingBlocks[slug];
      return null;
    })
    .filter(Boolean)
    .join(',\n\n');

  const file = `export type PageBlock = {
  heading?: string;
  paragraphs: string[];
};

export type PageCta = {
  label: string;
  href: string;
};

export type PageFaqItem = {
  question: string;
  answer: string;
};

export type PageRelatedLink = {
  label: string;
  href: string;
};

export type PageContent = {
  slug: string;
  seo: {
    title: string;
    description: string;
    ogDescription: string;
    ogImage: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image?: {
      src: string;
      alt: string;
    };
  };
  blocks: PageBlock[];
  highlights: string[];
  faq?: PageFaqItem[];
  relatedLinks?: PageRelatedLink[];
  cta?: PageCta;
  secondaryCta?: PageCta;
};

export const pages: Record<string, PageContent> = {
${body}
};

export const pageSlugs = Object.keys(pages) as (keyof typeof pages)[];

export function getPage(slug: string): PageContent | undefined {
  return pages[slug];
}
`;

  writeFileSync(pagesPath, file, 'utf8');
  console.log('\n✓ src/data/pages.ts güncellendi');
  console.log('Güncellenen sayfalar:', PAGE_SPECS.map((s) => s.slug).join(', '));
  console.log('Korunan sayfalar:', PRESERVE_SLUGS.join(', '));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
