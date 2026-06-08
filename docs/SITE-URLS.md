# yigitcilli.com — URL ve site haritası

## Yeni site (Astro) adresleri

| Sayfa | URL | Nerede düzenlenir |
|--------|-----|-------------------|
| Ana sayfa | `https://yigitcilli.com/` | `src/pages/index.astro` |
| Kod & Mimari | `https://yigitcilli.com/yazilim/` | `src/data/pages.ts` → `yazilim` |
| Yazılım | `https://yigitcilli.com/aplikasyonlar/` | `src/data/pages.ts` → `aplikasyonlar` |
| Tercüme | `https://yigitcilli.com/tercume/` | `src/data/pages.ts` → `tercume` |
| Referanslar | `https://yigitcilli.com/referanslar/` | `src/pages/referanslar.astro` + `pages.ts` |
| Stoacılık | `https://yigitcilli.com/stoacilik/` | `src/data/pages.ts` → `stoacilik` |
| Hakkımda | `https://yigitcilli.com/hakkimda/` | `src/data/pages.ts` → `hakkimda` |
| İletişim | `https://yigitcilli.com/iletisim/` | `src/data/pages.ts` → `iletisim` |

### WordPress’ten korunan SEO URL’leri

| Eski URL | Durum |
|----------|--------|
| `/adana-yeminli-tercuman-yigit-cilli/` | Aynı URL — içerik sayfası |
| `/adanada-noter-onayli-ingilizce-tercume-hizmeti/` | Aynı URL — içerik sayfası |
| `/adana-yeminli-tercumanin-gorevleri/` | Aynı URL — içerik sayfası |
| `/makaleler/` | Aynı URL — stoacılık’a yönlendiren hub |
| `/gizlilik-politikamiz/` | Aynı URL — gizlilik metni |
| `/iletisim/` | Zaten mevcut |

Liste: `src/data/legacy-seo.ts`. Deploy: `public/.htaccess` (WP kalıntıları + slash).

Yeni sayfa eklemek: `src/data/pages.ts` içine kayıt + (gerekirse) `src/pages/[slug].astro` veya özel `.astro` sayfası.

## Site haritaları

| Dosya | Adres | Açıklama |
|--------|--------|----------|
| Asıl harita | `/sitemap.xml` | Tüm sayfa URL’leri (`src/pages/sitemap.xml.ts`) |
| İndeks | `/sitemap_index.xml` | Eski WordPress / GSC alışkanlığı; tek alt haritaya yönlendirir |

`robots.txt` her iki adresi de listeler.

## Eski site (WordPress) → yeni site

Eski yapıda genelde:

- `https://yigitcilli.com/sitemap_index.xml` (Yoast / Rank Math vb.)
- Alt haritalar: `post-sitemap.xml`, `page-sitemap.xml`, …

Yeni sitede **tek** içerik haritası: `sitemap.xml`.

### Google Search Console

1. Yeni site yayına alındıktan sonra **Site haritaları** bölümüne gidin.
2. Eski `sitemap_index.xml` kaydını kaldırabilir veya bırakabilirsiniz (aynı URL yeni sunucuda artık Astro indeksini döner).
3. Şunları ekleyin veya doğrulayın:
   - `https://yigitcilli.com/sitemap.xml`
   - (isteğe bağlı) `https://yigitcilli.com/sitemap_index.xml`

### Eski URL’ler 404 veriyorsa

Eski WordPress URL’leri (ör. `/blog/...`, `/category/...`, farklı sayfa slug’ları) yeni yapıda yoksa Google sıralamayı koruyamaz — **301 yönlendirme** gerekir.

Hostinger’da `public_html/.htaccess` örneği:

```apache
# Eski ana sayfa varyantları → yeni ana sayfa
RedirectMatch 301 ^/index\.php$ /

# Örnek: eski bir sayfa slug’ı (kendi listenize göre ekleyin)
# Redirect 301 /eski-sayfa/ https://yigitcilli.com/yeni-sayfa/
```

Eski URL listesini GSC → **Sayfalar** / **Dizin oluşturma** veya Wayback Machine’den alıp tek tek eşleştirmeniz gerekir.

## Canonical ve domain

Tüm sayfalarda canonical: `src/config/site.ts` → `url: 'https://yigitcilli.com'` ve `BaseLayout.astro`.

Deploy öncesi domain ve HTTPS’nin Hostinger’da doğru olduğundan emin olun.
