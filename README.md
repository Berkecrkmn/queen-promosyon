# Queen Promosyon

Queen Promosyon için Astro + TypeScript ile hazırlanmış statik kurumsal katalog sitesi.

Site klasik web hosting/cPanel üzerinde çalışacak şekilde statik çıktı üretir. İlk sürüm; kategori sayfaları, ürün detayları, teklif alma yönlendirmeleri, kurumsal sayfalar, SEO meta alanları, sitemap/robots ve animasyonlu 404 sayfası içerir.

## Teknoloji

- Astro
- TypeScript
- Statik build çıktısı
- CSS animasyonları ve responsive layout
- SEO uyumlu sayfa yapısı

## Komutlar

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Yayına Alma

`npm run build` sonrası oluşan `dist/` klasörünün içeriği klasik web hosting veya cPanel `public_html` alanına yüklenebilir.

## Kontrol Listesi

- `npm run build` ile Astro type check ve statik build
- Ürün/kategori görsellerinde eksik dosya kontrolü
- Katalog verisinde tekrar eden görsel yolu kontrolü
- Responsive ürün/kategori ekran kontrolü

## İçerik Güncelleme

- Kategori ve ürün verileri: `src/data/catalog.ts`
- İletişim ve menü bilgileri: `src/data/site.ts`
- Görseller: `public/assets/images/`
- Logo: `public/assets/brand/queen-logo-transparent.png`
