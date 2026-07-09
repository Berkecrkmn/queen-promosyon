export type Category = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
  featured: boolean;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  name: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  minQuantity: string;
  leadTime: string;
  printing: string[];
  specs: string[];
  popular?: boolean;
};

export const categories: Category[] = [
  {
    slug: "hediyelik-setler",
    title: "Hediyelik Setler",
    eyebrow: "VIP sunum",
    description:
      "Yeni müşteri, bayi, lansman ve yıl sonu kampanyaları için kutulu kurumsal hediye setleri.",
    image: "/assets/images/queen-promosyon-hediyelik-set.webp",
    alt: "Queen Promosyon kutulu kurumsal hediye seti",
    featured: true,
    tags: ["VIP", "Kutu", "Lansman"],
    seoTitle: "Kurumsal Hediyelik Setler | Queen Promosyon",
    seoDescription:
      "Logolu defter, kalem, termos ve özel kutu seçenekleriyle kurumsal hediyelik set teklifleri.",
  },
  {
    slug: "promosyon-kalem",
    title: "Promosyon Kalem",
    eyebrow: "Günlük temas",
    description:
      "Metal, plastik, roller ve soft touch kalemlerde logo baskılı promosyon çözümleri.",
    image: "/assets/images/queen-promosyon-kalem-defter.webp",
    alt: "Logo baskıya uygun promosyon kalem ve defterler",
    featured: true,
    tags: ["Metal", "Roller", "Soft Touch"],
    seoTitle: "Promosyon Kalem Modelleri | Queen Promosyon",
    seoDescription:
      "Metal ve plastik promosyon kalem modelleri, logo baskı seçenekleri ve toplu teklif çözümleri.",
  },
  {
    slug: "defter-ajanda",
    title: "Defter ve Ajanda",
    eyebrow: "Ofis prestiji",
    description:
      "Tarihsiz defter, organizer, ajanda ve notluk gruplarında kurumsal baskı alternatifleri.",
    image: "/assets/images/queen-promosyon-defter-ajanda.webp",
    alt: "Kurumsal promosyon defter ajanda ve kalem",
    featured: true,
    tags: ["Ajanda", "Organizer", "Notluk"],
    seoTitle: "Promosyon Defter ve Ajanda | Queen Promosyon",
    seoDescription:
      "Logo baskılı defter, ajanda ve organizer seçenekleriyle kurumsal promosyon ürünleri.",
  },
  {
    slug: "termos-matara",
    title: "Termos ve Matara",
    eyebrow: "Uzun kullanım",
    description:
      "Çelik termos, mug, matara ve bardak gruplarında lazer ve serigrafi baskılı ürünler.",
    image: "/assets/images/queen-promosyon-termos-matara.webp",
    alt: "Logo baskılı çelik termos ve matara modelleri",
    featured: true,
    tags: ["Çelik", "Mug", "Matara"],
    seoTitle: "Promosyon Termos ve Matara | Queen Promosyon",
    seoDescription:
      "Kurumsal logo baskılı termos, mug ve matara modelleri için hızlı teklif alın.",
  },
  {
    slug: "powerbank",
    title: "Powerbank",
    eyebrow: "Teknoloji",
    description:
      "Fuar, saha ekibi ve müşteri sadakati için taşınabilir şarj cihazı promosyonları.",
    image: "/assets/images/queen-promosyon-powerbank.webp",
    alt: "Promosyon powerbank ile telefon şarjı",
    featured: true,
    tags: ["USB-C", "Wireless", "Hızlı Şarj"],
    seoTitle: "Promosyon Powerbank Modelleri | Queen Promosyon",
    seoDescription:
      "Logo baskılı powerbank modelleri, kablosuz şarj ve kurumsal teknoloji hediyeleri.",
  },
  {
    slug: "usb-bellek",
    title: "USB Bellek",
    eyebrow: "Veri taşıma",
    description:
      "Metal, kart, anahtarlık ve özel gövdeli USB belleklerde markalı teslimat çözümleri.",
    image: "/assets/images/queen-promosyon-usb-bellek.webp",
    alt: "Kurumsal promosyon USB bellek ve teknoloji aksesuarları",
    featured: false,
    tags: ["16 GB", "32 GB", "Kart USB"],
    seoTitle: "Promosyon USB Bellek | Queen Promosyon",
    seoDescription:
      "Logo baskılı USB bellek modelleri ve kurumsal veri taşıma promosyon ürünleri.",
  },
  {
    slug: "tekstil",
    title: "Tekstil",
    eyebrow: "Ekip görünürlüğü",
    description:
      "Tişört, şapka, sweatshirt ve iş etkinliği tekstillerinde baskı ve nakış uygulamaları.",
    image: "/assets/images/queen-promosyon-tekstil.webp",
    alt: "Promosyon tekstil için baskıya uygun tişörtler",
    featured: true,
    tags: ["Tişört", "Şapka", "Nakış"],
    seoTitle: "Promosyon Tekstil Ürünleri | Queen Promosyon",
    seoDescription:
      "Logo baskılı tişört, şapka ve tekstil promosyon ürünleri için kurumsal çözümler.",
  },
  {
    slug: "matbaa-urunleri",
    title: "Matbaa Ürünleri",
    eyebrow: "Basılı görünürlük",
    description:
      "Broşür, katalog, kartvizit, bloknot ve özel kesimli basılı materyal üretimleri.",
    image: "/assets/images/queen-promosyon-matbaa-urunleri.webp",
    alt: "Kurumsal matbaa ürünleri ve basılı promosyon materyalleri",
    featured: false,
    tags: ["Katalog", "Broşür", "Bloknot"],
    seoTitle: "Matbaa Ürünleri ve Baskı | Queen Promosyon",
    seoDescription:
      "Katalog, broşür, kartvizit ve bloknot gibi kurumsal matbaa ürünleri için teklif alın.",
  },
  {
    slug: "canta",
    title: "Çanta",
    eyebrow: "Sürdürülebilir temas",
    description:
      "Bez çanta, fuar çantası, laptop çantası ve alışveriş çantalarında logo baskı.",
    image: "/assets/images/queen-promosyon-bez-canta.webp",
    alt: "Logo baskılı bez çanta promosyon ürünü",
    featured: true,
    tags: ["Bez", "Fuar", "Laptop"],
    seoTitle: "Promosyon Çanta Modelleri | Queen Promosyon",
    seoDescription:
      "Logo baskılı bez çanta, fuar çantası ve kurumsal promosyon çanta modelleri.",
  },
  {
    slug: "masaustu-urunler",
    title: "Masaüstü Ürünler",
    eyebrow: "Ofiste kalıcı etki",
    description:
      "Masa seti, notluk, kartvizitlik, takvim ve ofis aksesuarlarında markalı ürünler.",
    image: "/assets/images/queen-promosyon-masaustu-urunler.webp",
    alt: "Promosyon masaüstü ürünleri ve ofis aksesuarları",
    featured: false,
    tags: ["Notluk", "Takvim", "Kartvizitlik"],
    seoTitle: "Promosyon Masaüstü Ürünler | Queen Promosyon",
    seoDescription:
      "Logo baskılı masa seti, takvim, kartvizitlik ve ofis promosyon ürünleri.",
  },
];

export const products: Product[] = [
  {
    slug: "premium-kutulu-hediye-seti",
    categorySlug: "hediyelik-setler",
    name: "Premium Kutulu Hediye Seti",
    summary: "Defter, metal kalem ve termos kombinasyonlu yönetici seti.",
    description:
      "Yeni iş ortakları, bayi toplantıları ve özel lansmanlar için yüksek algılı kutulu set.",
    image: "/assets/images/queen-promosyon-premium-kutulu-hediye-seti.webp",
    alt: "Premium kutulu kurumsal hediye seti ve defter sunumu",
    minQuantity: "50 adet",
    leadTime: "7-12 iş günü",
    printing: ["Lazer baskı", "UV baskı", "Kutu üstü sıcak yaldız"],
    specs: ["Özel kutu", "Logo baskılı ürünler", "Kurumsal renk uyumu"],
    popular: true,
  },
  {
    slug: "metal-tukenmez-kalem",
    categorySlug: "promosyon-kalem",
    name: "Metal Tükenmez Kalem",
    summary: "Günlük kullanım için şık ve dayanıklı logo baskılı kalem.",
    description:
      "Fuar, toplantı ve saha satış ekipleri için ekonomik ama kurumsal görünümü güçlü kalem modeli.",
    image: "/assets/images/queen-promosyon-metal-tukenmez-kalem.webp",
    alt: "Metal promosyon tükenmez kalem",
    minQuantity: "250 adet",
    leadTime: "4-7 iş günü",
    printing: ["Lazer baskı", "Tampon baskı"],
    specs: ["Metal gövde", "Mavi veya siyah refil", "Çoklu renk seçeneği"],
    popular: true,
  },
  {
    slug: "soft-touch-promosyon-kalem",
    categorySlug: "promosyon-kalem",
    name: "Soft Touch Promosyon Kalem",
    summary: "Mat dokulu, konforlu tutuş sunan modern promosyon kalemi.",
    description:
      "Genç ve dinamik marka iletişimi için renk seçenekleri güçlü, yumuşak yüzeyli kalem.",
    image: "/assets/images/queen-promosyon-soft-touch-kalem.webp",
    alt: "Soft touch promosyon kalem ve not defteri",
    minQuantity: "500 adet",
    leadTime: "4-8 iş günü",
    printing: ["Tampon baskı", "UV baskı"],
    specs: ["Mat gövde", "Klipsli tasarım", "Kurumsal renk seçimi"],
  },
  {
    slug: "termo-deri-defter",
    categorySlug: "defter-ajanda",
    name: "Termo Deri Defter",
    summary: "13x21 cm tarihsiz defter, kapak baskısı ve kalem tutucu ile.",
    description:
      "Toplantı, eğitim ve iç iletişim kullanımı için prestijli defter çözümü.",
    image: "/assets/images/queen-promosyon-termo-deri-defter-urun.webp",
    alt: "Logo baskılı termo deri defter ve ajanda",
    minQuantity: "100 adet",
    leadTime: "6-10 iş günü",
    printing: ["Sıcak baskı", "Serigrafi", "Lazer plaka"],
    specs: ["13x21 cm", "Tarihsiz iç sayfa", "Elastik bant"],
    popular: true,
  },
  {
    slug: "celik-termos-500ml",
    categorySlug: "termos-matara",
    name: "500 ml Çelik Termos",
    summary: "Uzun ömürlü kullanım için çift cidarlı logo baskılı termos.",
    description:
      "Müşterinin günlük rutini içinde uzun süre görünür kalan premium promosyon ürünü.",
    image: "/assets/images/queen-promosyon-celik-termos-500ml.webp",
    alt: "500 ml çelik promosyon termos",
    minQuantity: "100 adet",
    leadTime: "6-9 iş günü",
    printing: ["Lazer baskı", "Serigrafi"],
    specs: ["500 ml hacim", "Paslanmaz çelik", "Sızdırmaz kapak"],
    popular: true,
  },
  {
    slug: "wireless-powerbank",
    categorySlug: "powerbank",
    name: "Wireless Powerbank",
    summary: "Kablosuz şarj destekli, modern teknoloji promosyonu.",
    description:
      "Teknoloji odaklı markalar, fuar hediyeleri ve saha ekipleri için pratik bir hediye.",
    image: "/assets/images/queen-promosyon-wireless-powerbank.webp",
    alt: "Kablosuz şarj destekli promosyon powerbank",
    minQuantity: "100 adet",
    leadTime: "7-12 iş günü",
    printing: ["UV baskı", "Işıklı logo", "Tampon baskı"],
    specs: ["10.000 mAh", "USB-C giriş", "Wireless şarj desteği"],
    popular: true,
  },
  {
    slug: "kart-usb-bellek",
    categorySlug: "usb-bellek",
    name: "Kart USB Bellek",
    summary: "Kartvizit formunda, tam yüzey baskılı USB bellek.",
    description:
      "Sunum dosyaları, kataloglar ve dijital teklif materyalleri için kompakt veri taşıyıcı.",
    image: "/assets/images/queen-promosyon-kart-usb-bellek.webp",
    alt: "Kart formunda logo baskılı USB bellek",
    minQuantity: "100 adet",
    leadTime: "5-8 iş günü",
    printing: ["UV baskı", "Tam yüzey renkli baskı"],
    specs: ["16 GB / 32 GB", "Kart formu", "Özel ambalaj seçeneği"],
  },
  {
    slug: "ham-bez-canta",
    categorySlug: "canta",
    name: "Ham Bez Çanta",
    summary: "Fuar ve etkinliklerde sürdürülebilir marka görünürlüğü.",
    description:
      "Tekrar kullanılabilir yapısıyla kampanya ve etkinliklerde uzun süreli temas sağlar.",
    image: "/assets/images/queen-promosyon-ham-bez-canta.webp",
    alt: "Logo baskılı ham bez çanta",
    minQuantity: "250 adet",
    leadTime: "5-9 iş günü",
    printing: ["Serigrafi", "Transfer baskı"],
    specs: ["35x40 cm", "Pamuk karışımlı kumaş", "Uzun sap seçeneği"],
    popular: true,
  },
  {
    slug: "logo-baskili-tisort",
    categorySlug: "tekstil",
    name: "Logo Baskılı Tişört",
    summary: "Etkinlik, ekip ve kampanya kullanımı için kurumsal tekstil.",
    description:
      "Marka ekiplerinin görünürlüğünü artıran, farklı renk ve gramaj seçenekli tişört.",
    image: "/assets/images/queen-promosyon-logo-baskili-tisort.webp",
    alt: "Logo baskılı promosyon tişört",
    minQuantity: "100 adet",
    leadTime: "6-10 iş günü",
    printing: ["Serigrafi", "DTF", "Nakış"],
    specs: ["Unisex kalıp", "Farklı gramaj", "Renk ve beden dağılımı"],
  },
  {
    slug: "kurumsal-brosur",
    categorySlug: "matbaa-urunleri",
    name: "Kurumsal Broşür",
    summary: "Lansman ve satış ekipleri için kaliteli basılı tanıtım materyali.",
    description:
      "Kampanya, ürün tanıtımı ve saha satış görüşmelerinde profesyonel basılı iletişim.",
    image: "/assets/images/queen-promosyon-kurumsal-brosur.webp",
    alt: "Kurumsal broşür ve katalog baskı örnekleri",
    minQuantity: "500 adet",
    leadTime: "3-6 iş günü",
    printing: ["Ofset baskı", "Selefon", "Özel kesim"],
    specs: ["A4 / A5", "Mat veya parlak selefon", "Katlama seçeneği"],
  },
  {
    slug: "masaustu-notluk-seti",
    categorySlug: "masaustu-urunler",
    name: "Masaüstü Notluk Seti",
    summary: "Ofis masasında kalıcı marka görünürlüğü sağlayan set.",
    description:
      "Not kağıdı, kalemlik ve takvim seçenekleriyle masa üzerinde sürekli temas yaratır.",
    image: "/assets/images/queen-promosyon-masaustu-notluk-seti.webp",
    alt: "Promosyon masaüstü notluk seti",
    minQuantity: "100 adet",
    leadTime: "7-11 iş günü",
    printing: ["Serigrafi", "UV baskı", "Dijital baskı"],
    specs: ["Özel ölçü", "Kurumsal renk", "Takvim entegrasyonu"],
  },
  {
    slug: "kalem-defter-hediye-seti",
    categorySlug: "hediyelik-setler",
    name: "Kalem Defter Hediye Seti",
    summary: "Toplantı, eğitim ve bayi ziyaretleri için kompakt kurumsal set.",
    description:
      "Defter ve metal kalem kombinasyonuyla hızlı hazırlanabilen, ekonomik ama kurumsal algısı güçlü set.",
    image: "/assets/images/queen-promosyon-kalem-defter-hediye-seti.webp",
    alt: "Kalem ve defterden oluşan kurumsal promosyon seti",
    minQuantity: "100 adet",
    leadTime: "5-8 iş günü",
    printing: ["Sıcak baskı", "Lazer baskı", "Kutu etiketi"],
    specs: ["Set kutusu", "13x21 cm defter", "Metal kalem"],
  },
  {
    slug: "teknoloji-hediye-seti",
    categorySlug: "hediyelik-setler",
    name: "Teknoloji Hediye Seti",
    summary: "Powerbank, USB ve kablo kombinasyonlu modern promosyon seti.",
    description:
      "Fuar, saha satış ve teknoloji odaklı kampanyalarda yüksek kullanım değeri sunan hediye seti.",
    image: "/assets/images/queen-promosyon-teknoloji-hediye-seti.webp",
    alt: "Powerbank ve teknoloji aksesuarlarından oluşan promosyon seti",
    minQuantity: "50 adet",
    leadTime: "8-12 iş günü",
    printing: ["UV baskı", "Tampon baskı", "Kutu üstü baskı"],
    specs: ["Powerbank", "USB bellek", "Çoklu şarj kablosu"],
  },
  {
    slug: "plastik-tukenmez-kalem",
    categorySlug: "promosyon-kalem",
    name: "Plastik Tükenmez Kalem",
    summary: "Geniş adetli dağıtımlar için ekonomik promosyon kalemi.",
    description:
      "Etkinlik, okul, saha ve mağaza kullanımları için farklı renklerde hızlı üretilebilen kalem.",
    image: "/assets/images/queen-promosyon-plastik-tukenmez-kalem.webp",
    alt: "Plastik gövdeli promosyon tükenmez kalemler",
    minQuantity: "1000 adet",
    leadTime: "3-6 iş günü",
    printing: ["Tampon baskı", "UV baskı"],
    specs: ["Plastik gövde", "Geniş renk seçimi", "Ekonomik adet avantajı"],
  },
  {
    slug: "roller-kalem-seti",
    categorySlug: "promosyon-kalem",
    name: "Roller Kalem Seti",
    summary: "Yönetici hediyesi ve imza setleri için premium kalem grubu.",
    description:
      "Kutulu sunum ve lazer baskı seçeneğiyle üst segment kurumsal hediye ihtiyacına cevap verir.",
    image: "/assets/images/queen-promosyon-roller-kalem-seti.webp",
    alt: "Kutulu roller kalem promosyon seti",
    minQuantity: "100 adet",
    leadTime: "6-10 iş günü",
    printing: ["Lazer baskı", "Kutu üstü baskı"],
    specs: ["Metal roller kalem", "Özel kutu", "İmza kalemi seçeneği"],
  },
  {
    slug: "spiralli-bloknot",
    categorySlug: "defter-ajanda",
    name: "Spiralli Bloknot",
    summary: "Eğitim, seminer ve toplantı kullanımı için pratik bloknot.",
    description:
      "Kapak, iç sayfa ve alt karton baskısıyla tamamen kurumsal kampanyaya göre hazırlanabilir.",
    image: "/assets/images/queen-promosyon-spiralli-bloknot.webp",
    alt: "Logo baskılı spiralli promosyon bloknot",
    minQuantity: "250 adet",
    leadTime: "5-8 iş günü",
    printing: ["Dijital baskı", "Ofset baskı"],
    specs: ["A5 / A4 ölçü", "Spiral cilt", "Özel iç sayfa"],
  },
  {
    slug: "organizer-ajanda",
    categorySlug: "defter-ajanda",
    name: "Organizer Ajanda",
    summary: "Dönemsel planlama ve kurumsal hediye için organizer ajanda.",
    description:
      "Bayi ve müşteri ilişkilerinde uzun süre elde kalan, düzenli kullanım sağlayan ajanda çözümü.",
    image: "/assets/images/queen-promosyon-organizer-ajanda.webp",
    alt: "Kurumsal organizer ajanda promosyon ürünü",
    minQuantity: "100 adet",
    leadTime: "8-12 iş günü",
    printing: ["Sıcak baskı", "Lazer plaka", "Serigrafi"],
    specs: ["Organizer kapak", "Tarihli veya tarihsiz iç", "Kalem tutucu"],
  },
  {
    slug: "mug-termos-bardak",
    categorySlug: "termos-matara",
    name: "Mug Termos Bardak",
    summary: "Ofis ve araç kullanımına uygun kapaklı promosyon bardak.",
    description:
      "Günlük içecek rutininde marka görünürlüğünü koruyan, kompakt ve pratik promosyon ürünü.",
    image: "/assets/images/queen-promosyon-mug-termos-bardak.webp",
    alt: "Kapaklı promosyon mug termos bardak",
    minQuantity: "100 adet",
    leadTime: "6-9 iş günü",
    printing: ["Lazer baskı", "Serigrafi", "UV baskı"],
    specs: ["300-450 ml hacim", "Kapaklı kullanım", "Çelik veya plastik seçenek"],
  },
  {
    slug: "celik-matara",
    categorySlug: "termos-matara",
    name: "Çelik Matara",
    summary: "Spor, saha ve ofis kullanımı için logo baskılı matara.",
    description:
      "Uzun ömürlü ve tekrar kullanılabilir yapısıyla sürdürülebilir kampanyalarda tercih edilir.",
    image: "/assets/images/queen-promosyon-celik-matara.webp",
    alt: "Logo baskılı çelik promosyon matara",
    minQuantity: "100 adet",
    leadTime: "6-9 iş günü",
    printing: ["Lazer baskı", "Serigrafi"],
    specs: ["500-750 ml seçenek", "Sızdırmaz kapak", "Mat veya parlak yüzey"],
  },
  {
    slug: "magsafe-powerbank",
    categorySlug: "powerbank",
    name: "MagSafe Powerbank",
    summary: "Kablosuz manyetik kullanım destekli yeni nesil powerbank.",
    description:
      "Teknoloji hediyelerinde modern algı yaratmak isteyen markalar için dikkat çekici ürün.",
    image: "/assets/images/queen-promosyon-magsafe-powerbank.webp",
    alt: "MagSafe uyumlu promosyon powerbank",
    minQuantity: "100 adet",
    leadTime: "8-12 iş günü",
    printing: ["UV baskı", "Tampon baskı"],
    specs: ["Manyetik tutuş", "USB-C giriş", "Kompakt gövde"],
  },
  {
    slug: "coklu-sarj-kablosu",
    categorySlug: "powerbank",
    name: "Çoklu Şarj Kablosu",
    summary: "Telefon ve tabletler için çok uçlu promosyon teknoloji ürünü.",
    description:
      "Fuar ve saha dağıtımlarında az yer kaplayan, pratik ve düşük bütçeli teknoloji hediyesi.",
    image: "/assets/images/queen-promosyon-coklu-sarj-kablosu.webp",
    alt: "Çoklu uçlu promosyon şarj kablosu",
    minQuantity: "250 adet",
    leadTime: "5-8 iş günü",
    printing: ["Tampon baskı", "UV baskı"],
    specs: ["USB-C / Lightning / Micro uç", "Kompakt tasarım", "Logo alanı"],
  },
  {
    slug: "metal-usb-bellek",
    categorySlug: "usb-bellek",
    name: "Metal USB Bellek",
    summary: "Kurumsal sunum ve dosya teslimleri için dayanıklı USB bellek.",
    description:
      "Metal gövde ve lazer baskı seçeneğiyle uzun süre kullanılan veri taşıma promosyonu.",
    image: "/assets/images/queen-promosyon-metal-usb-bellek.webp",
    alt: "Metal gövdeli promosyon USB bellek",
    minQuantity: "100 adet",
    leadTime: "5-8 iş günü",
    printing: ["Lazer baskı", "UV baskı"],
    specs: ["16 GB / 32 GB / 64 GB", "Metal gövde", "Anahtarlık aparatı"],
  },
  {
    slug: "anahtarlik-usb-bellek",
    categorySlug: "usb-bellek",
    name: "Anahtarlık USB Bellek",
    summary: "Anahtarlık formunda taşınabilir ve görünür promosyon USB.",
    description:
      "Günlük kullanımda taşınabilirliği yüksek, logo görünürlüğü güçlü küçük teknoloji ürünü.",
    image: "/assets/images/queen-promosyon-anahtarlik-usb-bellek.webp",
    alt: "Anahtarlık formunda logo baskılı USB bellek",
    minQuantity: "100 adet",
    leadTime: "5-8 iş günü",
    printing: ["Lazer baskı", "Tampon baskı"],
    specs: ["Anahtarlık formu", "Metal veya plastik gövde", "Özel kutu"],
  },
  {
    slug: "logo-baskili-sapka",
    categorySlug: "tekstil",
    name: "Logo Baskılı Şapka",
    summary: "Açık hava etkinliği ve saha ekipleri için promosyon şapka.",
    description:
      "Nakış veya baskı uygulamasıyla ekip görünürlüğünü artıran tekstil promosyon ürünü.",
    image: "/assets/images/queen-promosyon-logo-baskili-sapka.webp",
    alt: "Logo baskılı promosyon şapka",
    minQuantity: "100 adet",
    leadTime: "6-10 iş günü",
    printing: ["Nakış", "Transfer baskı", "Serigrafi"],
    specs: ["Ayarlanabilir arka bant", "Pamuk veya polyester kumaş", "Renk seçimi"],
  },
  {
    slug: "nakisli-sweatshirt",
    categorySlug: "tekstil",
    name: "Nakışlı Sweatshirt",
    summary: "Ekip giyimi, lansman ve iç iletişim için premium tekstil.",
    description:
      "Marka ekiplerinin günlük kullanımına uygun, daha kalıcı ve yüksek algılı tekstil promosyonu.",
    image: "/assets/images/queen-promosyon-nakisli-sweatshirt.webp",
    alt: "Nakış logolu kurumsal sweatshirt",
    minQuantity: "50 adet",
    leadTime: "8-12 iş günü",
    printing: ["Nakış", "DTF", "Transfer baskı"],
    specs: ["Unisex kalıp", "Beden dağılımı", "Göğüs veya kol logo alanı"],
  },
  {
    slug: "katalog-baski",
    categorySlug: "matbaa-urunleri",
    name: "Katalog Baskı",
    summary: "Ürün ve hizmet tanıtımları için kurumsal katalog üretimi.",
    description:
      "Satış ekiplerinin kullanacağı kalıcı basılı materyaller için kaliteli kağıt ve kaplama seçenekleri.",
    image: "/assets/images/queen-promosyon-katalog-baski.webp",
    alt: "Kurumsal katalog baskı promosyon matbaa ürünü",
    minQuantity: "250 adet",
    leadTime: "5-8 iş günü",
    printing: ["Ofset baskı", "Dijital baskı", "Selefon"],
    specs: ["Özel ölçü", "Tel dikiş veya Amerikan cilt", "Mat/parlak selefon"],
  },
  {
    slug: "kurumsal-kimlik-baski-seti",
    categorySlug: "matbaa-urunleri",
    name: "Kurumsal Kimlik Baskı Seti",
    summary: "Kartvizit, antetli kağıt ve zarf üretimi için set çözüm.",
    description:
      "Yeni marka, bayi veya şube açılışlarında tutarlı kurumsal basılı materyal ihtiyacını karşılar.",
    image: "/assets/images/queen-promosyon-kurumsal-kimlik-baski-seti.webp",
    alt: "Kartvizit antetli kağıt ve zarf baskı seti",
    minQuantity: "500 adet",
    leadTime: "4-7 iş günü",
    printing: ["Ofset baskı", "Yaldız", "Kabartma"],
    specs: ["Kartvizit", "Antetli kağıt", "Diplomat zarf"],
  },
  {
    slug: "fuar-bez-canta",
    categorySlug: "canta",
    name: "Fuar Bez Çanta",
    summary: "Katalog, broşür ve numune taşıma için etkinlik çantası.",
    description:
      "Fuar alanında yüksek görünürlük sağlayan, geniş baskı yüzeyli ve tekrar kullanılabilir çanta.",
    image: "/assets/images/queen-promosyon-fuar-bez-canta.webp",
    alt: "Fuar için logo baskılı bez çanta",
    minQuantity: "250 adet",
    leadTime: "5-9 iş günü",
    printing: ["Serigrafi", "Transfer baskı"],
    specs: ["Geniş baskı alanı", "Kısa veya uzun sap", "Farklı kumaş gramajı"],
  },
  {
    slug: "laptop-cantasi",
    categorySlug: "canta",
    name: "Laptop Çantası",
    summary: "Çalışan ve müşteri hediyesi için fonksiyonel kurumsal çanta.",
    description:
      "Daha yüksek bütçeli kurumsal hediye projelerinde kullanım değeri yüksek bir seçenek sunar.",
    image: "/assets/images/queen-promosyon-laptop-cantasi.webp",
    alt: "Logo baskıya uygun laptop çantası",
    minQuantity: "50 adet",
    leadTime: "8-12 iş günü",
    printing: ["Nakış", "Transfer baskı", "Etiket uygulama"],
    specs: ["Laptop bölmesi", "Askı seçeneği", "Kurumsal etiket"],
  },
  {
    slug: "masa-takvimi",
    categorySlug: "masaustu-urunler",
    name: "Masa Takvimi",
    summary: "Yıl boyu masa üzerinde kalan kurumsal görünürlük ürünü.",
    description:
      "Bayi, müşteri ve çalışan masalarında sürekli marka hatırlatıcısı olarak kullanılan klasik promosyon.",
    image: "/assets/images/queen-promosyon-masa-takvimi.webp",
    alt: "Logo baskılı promosyon masa takvimi",
    minQuantity: "250 adet",
    leadTime: "6-10 iş günü",
    printing: ["Ofset baskı", "Dijital baskı", "Selefon"],
    specs: ["Özel tasarım sayfalar", "Spiral cilt", "Üçgen ayak"],
  },
  {
    slug: "metal-kartvizitlik",
    categorySlug: "masaustu-urunler",
    name: "Metal Kartvizitlik",
    summary: "Masaüstü ve kişisel kullanım için şık promosyon aksesuarı.",
    description:
      "Satış ekipleri, bayi hediyeleri ve yönetici setleri için küçük ama kalıcı bir kurumsal ürün.",
    image: "/assets/images/queen-promosyon-metal-kartvizitlik.webp",
    alt: "Metal promosyon kartvizitlik",
    minQuantity: "100 adet",
    leadTime: "5-8 iş günü",
    printing: ["Lazer baskı", "UV baskı"],
    specs: ["Metal gövde", "Mat veya parlak yüzey", "Kutulu sunum"],
  },
];

export const getCategory = (slug: string) =>
  categories.find((category) => category.slug === slug);

export const getProduct = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (categorySlug: string) =>
  products.filter((product) => product.categorySlug === categorySlug);

export const getCategoryForProduct = (product: Product) =>
  categories.find((category) => category.slug === product.categorySlug);
