const siteUrl = (import.meta.env.PUBLIC_SITE_URL || "https://queenpromosyon.com").replace(/\/$/, "");

export const site = {
  name: "Queen Promosyon",
  shortName: "Queen",
  legalName: "Queen Promosyon",
  url: siteUrl,
  email: "info@queenpromosyon.com",
  phone: "",
  whatsapp: "",
  address: "İstanbul, Türkiye",
  workingHours: "Pazartesi - Cuma, 09.00 - 18.00",
  description:
    "Queen Promosyon, kurumsal markalar için logolu promosyon ürünleri, özel hediye setleri ve baskılı tanıtım çözümleri sunar.",
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

export const navItems = [
  { label: "Kategoriler", href: "/kategoriler" },
  { label: "Ürünler", href: "/urunler" },
  { label: "Hakkımızda", href: "/kurumsal" },
  { label: "Süreç", href: "/baski-ve-uretim-sureci" },
  { label: "Teklif Al", href: "/teklif-al" },
  { label: "İletişim", href: "/iletisim" },
] as const;

export const makeMailto = (subject: string, body: string) => {
  const params = new URLSearchParams({ subject, body });
  return `mailto:${site.email}?${params.toString()}`;
};
