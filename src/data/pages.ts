export type PageBlock = {
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
  yazilim: {
    slug: "yazilim",
    seo: {
      title: "Yazılım Geliştirme, Web Sitesi ve Uygulama Çözümleri | Yiğit Cilli",
      description: "Web sitesi geliştirme, yapay zekâ destekli yazılım çözümleri ve mobil uygulama hizmetleri için Yiğit Cilli. Performans odaklı, modern teknolojilerle dijital…",
      ogDescription: "Dijital ihtiyaçlarınıza özel web sitesi ve mobil uygulama geliştirme hizmetleri. Yapay zekâ entegrasyonu ve SEO uyumlu çözümlerle projelerinize değer katın.",
      ogImage: "/images/software.webp",
    },
    hero: {
      eyebrow: "Yazılım Geliştirme",
      title: "Dijital Varlığınızı Güçlendiren Yazılım Çözümleri",
      description: "Günümüz dijital dünyasında rekabetçi kalmak için güçlü ve işlevsel yazılım çözümlerine ihtiyaç duyulmaktadır. İşletmenizin hedeflerine ulaşması için modern teknolojilerle desteklenen, kullanıcı odaklı web sitesi ve mobil uygulama geliştirme hizmetleri sunuyorum. Performans ve mimari prensiplerine sadık kalarak, dijital projelerinizi hayata geçirmenize yardımcı oluyorum.",
      image: {
        src: "/images/software.webp",
        alt: "Yiğit Cilli yazılım ve dijital ürünler",
      },
    },
    blocks: [
      {
        heading: "Web Sitesi Geliştirme: Modern ve Performans Odaklı Yaklaşım",
        paragraphs: [
          "Dijital varlığınızın temelini oluşturan web siteleri, sadece birer bilgi kaynağı olmanın ötesinde, kullanıcı deneyimini ve işlevselliği ön planda tutmalıdır. Bu anlayışla, işletmenizin ihtiyaçlarına özel, modern web sitesi geliştirme hizmetleri sunuyorum. İster dinamik bir içerik yönetim sistemi olan WordPress ile hızlı çözümler arayın, ister yüksek performanslı ve statik site jeneratörleri Astro veya Next.js gibi teknolojilerle özelleştirilmiş projeler isteyin, her aşamada yanınızdayım.",
          "Web sitenizin sadece görsel olarak çekici değil, aynı zamanda arama motorları için optimize edilmiş, hızlı yüklenen ve her cihazda sorunsuz çalışan bir yapıya sahip olması, dijital başarınız için kritik öneme sahiptir. Kullanıcıların kolayca gezinebildiği, güvenlik standartlarına uygun ve geleceğe dönük bir mimariyle tasarlanmış web siteleriyle marka değerinizi artırıyoruz. Performans ve mimari odaklı yaklaşımımızla, sitenizin dijital dünyadaki yerini sağlamlaştırıyoruz."
        ],
      },
      {
        heading: "Yapay Zekâ Entegrasyonu ile Akıllı Çözümler",
        paragraphs: [
          "Yapay zekâ (YZ) teknolojileri, günümüz yazılım çözümlerine akıl ve otomasyon katmanın anahtarıdır. İş süreçlerinizi optimize etmek, veri analizi yeteneklerinizi geliştirmek veya müşteri deneyimini kişiselleştirmek amacıyla yapay zekâ destekli yazılım çözümleri geliştiriyorum. Özel ihtiyaçlarınıza göre tasarlanan YZ entegrasyonları ile işletmenizin verimliliğini ve rekabet gücünü artırmayı hedefliyorum.",
          "Müşteri hizmetleri botlarından, veri tabanlı karar destek sistemlerine, içerik üretim otomasyonlarından, kişiselleştirilmiş öneri motorlarına kadar geniş bir yelpazede yapay zekâ çözümleri sunulmaktadır. Bu akıllı sistemler, sadece iş yükünü azaltmakla kalmaz, aynı zamanda daha doğru ve hızlı kararlar almanıza olanak tanır. Projenizin ölçeği ne olursa olsun, yapay zekânın sunduğu potansiyeli işinize adapte etmenize yardımcı oluyorum."
        ],
      },
      {
        heading: "Mobil Uygulama Geliştirme ile Erişimi Genişletin",
        paragraphs: [
          "Mobil cihazların hayatımızdaki yeri her geçen gün artarken, işletmeler için mobil uygulama geliştirme, hedef kitlelerine ulaşmanın ve onlarla etkileşim kurmanın vazgeçilmez bir yolu haline gelmiştir. Kullanıcı dostu arayüzler ve güçlü arka plan mimarileriyle tasarlanmış mobil uygulamalar, markanızın erişimini genişletirken, müşterilerinize değer katmanızı sağlar. Detaylı bilgi için [Mobil uygulamalar](/aplikasyonlar/) sayfamı ziyaret edebilirsiniz.",
          "İster iOS ister Android platformları için özel çözümler arayın, ister her iki platformda da çalışacak hibrit uygulamalar geliştirilmesini isteyin, projenizin her aşamasında teknik uzmanlık sunuyorum. Uygulamanızın fikir aşamasından yayınlanmasına kadar tüm süreçleri yöneterek, kullanıcılarınızın beklentilerini karşılayan, sorunsuz ve performanslı bir mobil deneyim sunmayı amaçlıyorum. Odak noktam, uygulamanızın sadece çalışması değil, aynı zamanda kullanıcılar tarafından sevilerek kullanılmasıdır."
        ],
      },
      {
        heading: "SEO Uyumlu Yazılım ve Özel Araçlar",
        paragraphs: [
          "Dijital görünürlük, günümüz iş dünyasında başarı için temel bir gerekliliktir. Geliştirdiğim yazılım çözümlerinde SEO (Arama Motoru Optimizasyonu) uyumluluğunu en başından itibaren mimariye dahil ediyorum. Bu sayede web siteniz veya uygulamanız, arama motorlarında daha üst sıralarda yer alarak potansiyel müşterilere daha kolay ulaşır. Sadece teknik bir altyapı sunmakla kalmıyor, aynı zamanda içerik ve yapısal SEO stratejilerini de yazılım geliştirme sürecine entegre ediyorum.",
          "İşletmenizin dijital pazarlama stratejilerini desteklemek amacıyla özel SEO araçları ve entegrasyonları da geliştirebilirim. Anahtar kelime araştırmasından rakip analizine, teknik SEO denetimlerinden performans izlemeye kadar çeşitli ihtiyaçlara yönelik çözümler sunarak, dijital varlığınızın arama motorlarındaki performansını sürekli olarak iyileştirmenize yardımcı oluyorum. Bu bütünsel yaklaşımla, yazılımınızın sadece işlevsel değil, aynı zamanda dijital büyümenizin bir motoru olmasını sağlıyorum."
        ],
      },
      {
        heading: "Performans ve Mimari: Temelden Güçlü Yapılar",
        paragraphs: [
          "Her başarılı yazılım projesinin temelinde sağlam bir mimari ve yüksek performans yatar. Geliştirdiğim tüm yazılım çözümlerinde, projenin en başından itibaren ölçeklenebilirlik, güvenlik ve sürdürülebilirlik prensiplerini göz önünde bulunduruyorum. Bu sayede, yazılımınız sadece bugünün ihtiyaçlarını karşılamakla kalmaz, aynı zamanda gelecekteki büyüme ve değişimlere de kolayca adapte olabilir.",
          "Performans, kullanıcı deneyimi ve arama motoru sıralamaları için vazgeçilmez bir faktördür. Yazılımın hızlı yüklenmesi, sorunsuz çalışması ve yoğun trafik altında bile stabil kalması, kullanıcı memnuniyetini doğrudan etkiler. Bu nedenle, kod kalitesinden sunucu optimizasyonuna kadar her detayda performansı ön planda tutarak, kullanıcılarınıza kesintisiz ve akıcı bir deneyim sunmayı hedefliyorum. Sağlam mimari ve üstün performans ile dijital varlığınızı güçlendiriyorum."
        ],
      }
    ],
    highlights: ["Modern Web Teknolojileri (WordPress, Astro, Next.js)","Yapay Zekâ Destekli Akıllı Çözümler","Kullanıcı Odaklı Mobil Uygulama Geliştirme","SEO Uyumlu ve Yüksek Performanslı Yazılım Mimarisi"],
    faq: [
      {
        "question": "Web sitesi geliştirme süreciniz nasıl işliyor?",
        "answer": "Proje süreci genellikle ihtiyaç analizi ile başlar. İşletmenizin hedeflerini, hedef kitlenizi ve beklentilerinizi detaylı olarak anladıktan sonra, bir yol haritası ve teknik spesifikasyonlar oluşturulur. Tasarım ve geliştirme aşamalarının ardından testler yapılır ve son onayınızla birlikte web siteniz yayına alınır. Süreç boyunca şeffaf iletişim ve düzenli güncellemelerle sizi bilgilendiririm."
      },
      {
        "question": "Yapay zekâ entegrasyonu ne gibi faydalar sağlar?",
        "answer": "Yapay zekâ entegrasyonu, iş süreçlerinizde otomasyon, veri analiziyle daha bilinçli karar alma, müşteri deneyimini kişiselleştirme ve operasyonel verimliliği artırma gibi birçok fayda sağlar. Örneğin, sıkça sorulan soruları yanıtlayan bir chatbot ile müşteri hizmetleri yükünüzü azaltabilir veya büyük veri kümelerinden anlamlı içgörüler elde edebilirsiniz."
      },
      {
        "question": "Mevcut bir web sitemi modernize edebilir misiniz?",
        "answer": "Evet, mevcut web sitenizin performansını artırmak, kullanıcı deneyimini iyileştirmek, güvenlik açıklarını kapatmak veya modern teknolojilere geçiş yapmak için modernizasyon hizmetleri sunuyorum. Mevcut yapınızı analiz ederek, ihtiyaçlarınıza uygun güncellemeler ve iyileştirmelerle sitenizi güncel ve rekabetçi hale getirebiliriz."
      },
      {
        "question": "Proje teslim süreleri ve maliyetler hakkında bilgi alabilir miyim?",
        "answer": "Her proje kendi özel gereksinimleri ve kapsamı olduğu için teslim süreleri ve maliyetler projeden projeye değişiklik gösterir. Detaylı bir teklif sunabilmem için öncelikle projenizin kapsamını ve beklentilerinizi anlamam gerekir. Bu nedenle, ilk görüşme ve ihtiyaç analizi genellikle ücretsizdir. [İletişim](/iletisim/) sayfamdan bana ulaşarak projeniz hakkında konuşabiliriz."
      }
    ],
    relatedLinks: [
      {
        "label": "Mobil uygulamalar",
        "href": "/aplikasyonlar/"
      },
      {
        "label": "İletişim",
        "href": "/iletisim/"
      }
    ],
    cta: { label: "Proje için yazın", href: "/iletisim" },
    secondaryCta: { label: "Uygulama portföyü", href: "/aplikasyonlar" },
  },

  aplikasyonlar: {
    slug: "aplikasyonlar",
    seo: {
      title: "CalmerNow AI, Mobil Uygulama ve Yapay Zekâ Çözümleri | Yiğit Cilli",
      description: "Yapay zekâ destekli CalmerNow AI ve mobil uygulama geliştirme süreçlerinde Android odaklı çözümler. Ürün dili ve kullanıcı deneyimi ile yenilikçi yaklaşımlar.",
      ogDescription: "Yapay zekâ destekli mobil uygulamalar ve CalmerNow AI ile dijital ürün geliştirme konusunda uzmanlık. Android platformunda kullanıcı odaklı çözümler sunuyorum.",
      ogImage: "/images/apps.webp",
    },
    hero: {
      eyebrow: "Uygulama Geliştirme",
      title: "Yapay Zekâ Destekli Uygulama Geliştirme ve CalmerNow AI",
      description: "Dijital dünyada kullanıcıların ihtiyaçlarına cevap veren mobil uygulamalar geliştirmek, sürekli değişen teknolojiyle birlikte yeni yaklaşımlar gerektiriyor. Yapay zekâ entegrasyonu ve kullanıcı deneyimi odaklı tasarım, bu sürecin temel taşlarını oluşturur. CalmerNow AI gibi projelerle, yenilikçi ve verimli çözümler sunuyorum.",
      image: {
        src: "/images/apps.webp",
        alt: "Yiğit Cilli yazılım ve dijital ürünler",
      },
    },
    blocks: [
      {
        heading: "Yapay Zekâ Destekli Uygulama Geliştirme Yaklaşımı",
        paragraphs: [
          "Günümüzde mobil uygulamalar, sadece birer araç olmaktan öteye geçerek kullanıcıların günlük yaşamının ayrılmaz bir parçası haline gelmiştir. Bu dönüşümde yapay zekâ (YZ) teknolojileri, uygulamaların kişiselleştirme yeteneklerini, veri işleme kapasitelerini ve kullanıcı etkileşimini önemli ölçüde artırmaktadır. Benim yaklaşımım, YZ'nin sunduğu bu potansiyeli en verimli şekilde kullanarak, kullanıcı odaklı ve yenilikçi mobil çözümler geliştirmektir.",
          "Yapay zekâ entegrasyonu, uygulamaların kullanıcı davranışlarını anlamasına, öngörülerde bulunmasına ve buna göre dinamik içerik sunmasına olanak tanır. Bu sayede, CalmerNow AI gibi projelerde olduğu gibi, her kullanıcının özel ihtiyaçlarına uygun, kişiselleştirilmiş bir deneyim sunulabilir. Bu süreçte, teknolojinin sunduğu imkanları etik ve kullanıcı mahremiyetine saygılı bir şekilde kullanmaya özen gösteriyorum."
        ],
      },
      {
        heading: "CalmerNow AI: Odak ve Wellness İçin Yapay Zekâ Çözümleri",
        paragraphs: [
          "CalmerNow AI, yapay zekâ destekli wellness ve odak ürünleri geliştirme vizyonumun önemli bir parçasıdır. Bu proje, kullanıcıların zihinsel iyi oluşlarını desteklemek ve odaklanma yeteneklerini artırmak amacıyla tasarlanmıştır. Uygulama, kişiselleştirilmiş rehberlik, meditasyon egzersizleri ve uyku takibi gibi özelliklerle, modern yaşamın getirdiği stresi yönetmeye yardımcı olurken, aynı zamanda kullanıcıların daha bilinçli bir yaşam sürmelerine katkıda bulunur.",
          "CalmerNow AI'ın geliştirme sürecinde, ürünün kullanıcılarla kurduğu bağı güçlendiren bir 'ürün dili' oluşturmaya özel önem verdim. Bu dil, uygulamanın amacını, değerlerini ve kullanıcıya sunduğu faydaları net bir şekilde ifade ederken, aynı zamanda samimi ve güven veren bir ton taşır. Yapay zekâ algoritmaları, kullanıcı geri bildirimlerini sürekli analiz ederek uygulamanın adaptasyonunu ve gelişimini sağlar, böylece her zaman güncel ve etkili kalır."
        ],
      },
      {
        heading: "Android Odaklı Mobil Uygulama Geliştirme ve Ürün Dili",
        paragraphs: [
          "Mobil uygulama pazarında Android platformu, geniş kullanıcı kitlesi ve esnek geliştirme ortamı ile öne çıkmaktadır. Android mobil uygulama geliştirme süreçlerinde, performans, güvenlik ve ölçeklenebilirlik temel önceliklerimdir. Her projenin kendine özgü ihtiyaçlarını analiz ederek, en uygun teknolojik çözümleri ve mimari yaklaşımları belirlerim. Bu konuda daha fazla bilgi için yazılım hizmetleri sayfamı ziyaret edebilirsiniz.",
          "Bir uygulamanın başarısında sadece teknik altyapısı değil, aynı zamanda kullanıcıyla kurduğu iletişim de büyük rol oynar. Bu nedenle, 'ürün dili' kavramına özel bir önem atfederim. Uygulamanın metinleri, bildirimleri ve hatta hata mesajları bile markanın kimliğini yansıtmalı, kullanıcıya rehberlik etmeli ve güven vermelidir. Bu bütünsel yaklaşım, kullanıcıların uygulamayla daha derin bir bağ kurmasını sağlar."
        ],
      },
      {
        heading: "Kullanıcı Deneyimi (UX) Odaklı Tasarım ve Geliştirme",
        paragraphs: [
          "Bir mobil uygulamanın yalnızca işlevsel olması yeterli değildir; aynı zamanda sezgisel, keyifli ve verimli bir kullanıcı deneyimi (UX) sunması gerekir. Kullanıcı odaklı tasarım prensiplerini benimseyerek, her projenin başlangıcından itibaren kullanıcı ihtiyaçlarını ve beklentilerini merkeze alırım. Araştırma, prototipleme, test ve yineleme süreçleriyle, kullanıcıların uygulamayla olan etkileşimini sürekli iyileştirmeyi hedeflerim.",
          "CalmerNow AI gibi yapay zekâ destekli uygulamalarda UX tasarımı, özellikle kişiselleştirme ve adaptasyon yeteneklerinin doğru bir şekilde sunulabilmesi açısından kritik öneme sahiptir. Kullanıcıların karmaşık teknolojiyi kolayca anlaması ve kullanması için sade ve anlaşılır arayüzler tasarlarım. Bu sayede, uygulamanın sunduğu değer, kullanıcıya en etkili ve doğal yolla ulaşır."
        ],
      }
    ],
    highlights: ["Yapay zekâ entegrasyonu ile akıllı çözümler","Android odaklı mobil uygulama geliştirme","Etkili ürün dili ve kullanıcı deneyimi (UX) tasarımı","Wellness ve odak ürünleri konusunda uzmanlık"],
    faq: [
      {
        "question": "CalmerNow AI projesi neyi amaçlar?",
        "answer": "CalmerNow AI, yapay zekâ teknolojilerini kullanarak kullanıcıların zihinsel iyi oluşlarını ve odaklanma yeteneklerini geliştirmeye yönelik bir wellness ve odak uygulamasıdır. Kişiselleştirilmiş içerik ve rehberlik sunarak, kullanıcıların stres yönetimi ve bilinçli yaşam becerilerini desteklemeyi hedefler."
      },
      {
        "question": "Mobil uygulama geliştirme sürecinizde hangi adımları izliyorsunuz?",
        "answer": "Mobil uygulama geliştirme sürecim, fikir analizi, detaylı planlama, kullanıcı deneyimi (UX) ve arayüz (UI) tasarımı, Android platformuna özel geliştirme, test ve yayınlama aşamalarını içerir. Süreç boyunca şeffaf iletişim ve müşteri geri bildirimlerini entegre etmeye özen gösteririm."
      },
      {
        "question": "Yapay zekâ mobil uygulamalara nasıl entegre ediliyor?",
        "answer": "Yapay zekâ, mobil uygulamalara kişiselleştirilmiş içerik sunumu, kullanıcı davranış analizi, veri tabanlı öneriler, otomasyon ve akıllı etkileşimler gibi çeşitli yollarla entegre edilebilir. Bu entegrasyon, uygulamanın daha akıllı, adaptif ve kullanıcı dostu olmasını sağlar."
      },
      {
        "question": "Uygulama geliştirirken ürün dilinin önemi nedir?",
        "answer": "Ürün dili, bir mobil uygulamanın kullanıcıyla kurduğu tüm yazılı ve sözlü iletişimi kapsar. Uygulamanın kişiliğini, değerlerini ve markanın sesini yansıtır. İyi tasarlanmış bir ürün dili, kullanıcıya güven verir, uygulamanın kullanımını kolaylaştırır ve genel kullanıcı deneyimini zenginleştirir."
      }
    ],
    relatedLinks: [
      {
        "label": "Kod ve mimari",
        "href": "/yazilim/"
      },
      {
        "label": "İletişim",
        "href": "/iletisim/"
      }
    ],
    cta: { label: "İletişim", href: "/iletisim" },
    secondaryCta: { label: "Teknik altyapı", href: "/yazilim" },
  },

  tercume: {
    slug: "tercume",
    seo: {
      title: "Adana Yeminli Tercüme | İngilizce, Hukuki, Akademik Çeviri – Yiğit Cilli",
      description: "Adana'da yeminli tercüme, noter onaylı çeviri, İngilizce, hukuki ve akademik tercüme ihtiyaçlarınız için güvenilir çözümler. Yiğit Cilli ile profesyonel hizmet.",
      ogDescription: "Adana merkezli yeminli tercüman Yiğit Cilli, İngilizce hukuki, akademik ve resmi belge çevirilerinde profesyonel destek sunar.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Yeminli Tercüme Hizmetleri",
      title: "Güvenilir ve Profesyonel Tercüme Çözümleri",
      description: "Çeviri, kültürel ve dilsel köprüler kurmanın yanı sıra, resmi süreçlerde de kritik bir öneme sahiptir. Yiğit Cilli olarak, Adana'da yeminli tercümanlık yetkinliğimizle, dil bariyerlerini aşarak belgelerinizin doğru ve eksiksiz bir şekilde anlaşılmasını sağlıyoruz. İhtiyaçlarınıza özel, titiz ve güvenilir tercüme hizmetleri sunuyoruz.",
      image: {
        src: "/images/translation.webp",
        alt: "Yiğit Cilli profesyonel tercüme hizmetleri",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercümenin Önemi ve Kapsamı",
        paragraphs: [
          "Resmi kurumlar, eğitim ve hukuk alanında sunulan belgelerin geçerliliği için yeminli tercümeye sıklıkla ihtiyaç duyulur. Bu süreç, sadece kelimelerin bir dilden diğerine aktarılması değil, aynı zamanda belgenin hukuki ve kültürel bağlamının korunması anlamına gelir. <a href=\"/adana-yeminli-tercumanin-gorevleri/\">Yeminli tercümanın görevleri</a> arasında, çevirinin doğruluğunu ve resmiyetini temin etmek, kaynak metindeki her detayı hedef dile eksiksiz taşımak yer alır. Bu sayede, uluslararası platformlarda belgelerinizin geçerliliği sağlanır ve yanlış anlaşılmaların önüne geçilir.",
          "Bir yeminli tercüman olarak, çeviriye konu olan belgenin orijinal anlamını, tonunu ve amacını koruyarak hedef dile aktarılmasını sağlıyorum. Bu, özellikle hassas konularda büyük önem taşır. Uluslararası başvurulardan akademik yayınlara, hukuki metinlerden ticari anlaşmalara kadar geniş bir yelpazedeki belgeleriniz, ilgili kurumlar tarafından sorunsuz bir şekilde kabul edilebilir nitelikte hazırlanır."
        ],
      },
      {
        heading: "Adana'da Yeminli ve Noter Onaylı Tercüme Hizmetleri",
        paragraphs: [
          "Adana ve çevresinde ikamet eden birey ve kurumların tercüme ihtiyaçlarına yönelik olarak kapsamlı hizmetler sunmaktayım. Özellikle <a href=\"/adana-yeminli-tercuman-yigit-cilli/\">Adana yeminli tercüman</a> arayışında olanlar için, resmiyet gerektiren her türlü belgenin çevirisini titizlikle gerçekleştiriyorum. Doğum belgesi, evlilik cüzdanı, pasaport, diploma gibi kişisel belgelerden ticari sözleşmelere, vekaletnamelere kadar birçok alanda profesyonel destek sağlıyorum. Yerel ihtiyaçlara hakimiyetimle, süreçlerinizi daha verimli yönetmenize yardımcı oluyorum.",
          "Belgelerinizin resmiyet kazanması için noter onayı da gerekebilir. <a href=\"/adanada-noter-onayli-ingilizce-tercume-hizmeti/\">Noter onaylı İngilizce tercüme</a> başta olmak üzere, farklı dillerdeki belgelerinizin çevirileri tamamlandıktan sonra noter tasdik işlemlerini de sizin adınıza takip ederek süreci kolaylaştırıyorum. Bu sayede, hem zaman tasarrufu sağlıyor hem de belgelerinizin hukuki geçerliliğini güvence altına alıyoruz. Noter onayı gerektiren her adımda yanınızdayım."
        ],
      },
      {
        heading: "İngilizce, Hukuki ve Akademik Tercüme Uzmanlığı",
        paragraphs: [
          "Özellikle İngilizce tercüme alanında yoğunlaşan hizmetlerim, geniş bir yelpazeyi kapsar. Hukuki tercüme gerektiren mahkeme kararları, vekaletnameler, sözleşmeler veya akademik tercüme ihtiyacı olan tezler, makaleler, transkriptler ve bilimsel yayınlar gibi özel alanlarda terminolojiye hakimiyet ve sektörel bilgi birikimiyle hareket ediyorum. Bu alanlardaki çeviriler, sadece dil bilgisi değil, aynı zamanda konuya özel derinlemesine uzmanlık ve kültürel bağlam bilgisi gerektirir.",
          "Resmi belge çevirisi süreçlerinde, belgenin niteliğine uygun formatta ve doğru terminoloji ile çevrilmesi esastır. Gerek vize başvuruları gerekse yurt dışı eğitim veya iş süreçleri için hazırlanan tüm belgelerinizde, uluslararası standartlara uygun, hatasız bir çeviri sunmaktayım. Her bir çeviride, belgenin amacı ve hitap ettiği kurum göz önünde bulundurularak maksimum doğruluk ve uygunluk hedeflenir, böylece belgeleriniz sorunsuz bir şekilde işleme alınır."
        ],
      },
      {
        heading: "Kalite Odaklı Yaklaşım ve Süreç Yönetimi",
        paragraphs: [
          "Tercüme hizmetlerimizde kalite, her şeyin önündedir. Her proje, detaylı bir ön analiz ile başlar ve belgenin içeriğine, diline ve kullanım amacına göre özelleştirilmiş bir çeviri süreci izlenir. Çeviri tamamlandıktan sonra, dilbilgisi, terminoloji ve biçimsel tutarlılık açısından kapsamlı bir kontrol sürecinden geçirilir. Bu çok aşamalı yaklaşım, teslim edilen her çevirinin beklentileri karşılamasını ve orijinal metnin anlamını tam olarak yansıtmasını sağlar.",
          "Müşteri memnuniyetini esas alarak, çeviri süreçlerinde şeffaflık ve zamanında teslimat prensibiyle çalışıyorum. İhtiyaçlarınızı anlamak ve size özel çözümler sunmak için her zaman iletişime açığım. Projelerinizde gösterdiğim özen ve profesyonelliği <a href=\"/referanslar/\">Referanslar</a> sayfamızdan önceki çalışmalarımıza göz atarak daha yakından inceleyebilir, hizmet kalitemiz hakkında daha fazla bilgi edinebilirsiniz."
        ],
      }
    ],
    highlights: ["Adana merkezli yeminli tercümanlık hizmetleri","Noter onaylı ve resmi belge çevirisi desteği","İngilizce hukuki ve akademik metin çevirileri","Hızlı, güvenilir ve gizlilik odaklı çözümler"],
    faq: [
      {
        "question": "Yeminli tercüme nedir ve neden gereklidir?",
        "answer": "Yeminli tercüme, yeminli tercüman tarafından yapılan ve tercümanın imzası ve mührü ile resmileştirilen çeviridir. Resmi kurumlar, mahkemeler, eğitim kurumları veya vize başvuruları gibi durumlarda, belgenin doğruluğunu ve hukuki geçerliliğini sağlamak amacıyla yeminli tercüme talep edilir."
      },
      {
        "question": "Noter onayı her çeviri için zorunlu mudur?",
        "answer": "Her çeviri için noter onayı zorunlu değildir. Noter onayı, belgenin kullanılacağı kurum veya ülkenin talebine göre değişir. Genellikle resmiyetin en üst düzeyde arandığı durumlarda (örneğin yurt dışı eğitim veya iş başvuruları, mahkeme evrakları) noter onayı talep edilebilir. İhtiyaçlarınız doğrultusunda size bilgi verebilirim."
      },
      {
        "question": "Tercüme ücretleri neye göre belirlenir?",
        "answer": "Tercüme ücretleri, çevrilecek metnin karakter sayısı veya kelime sayısı, dil kombinasyonu, konunun uzmanlık seviyesi (hukuki, teknik, akademik vb.) ve teslim süresi gibi faktörlere göre belirlenir. Net bir fiyat teklifi için çevrilecek belgenizi iletmeniz gerekmektedir."
      },
      {
        "question": "Çeviri süreci ne kadar sürer?",
        "answer": "Çeviri süresi, belgenin uzunluğuna, karmaşıklığına ve mevcut iş yoğunluğuna bağlı olarak değişir. Acil tercüme ihtiyaçlarınız için de elimden gelen desteği sağlamaktayım. Projenizin detaylarını paylaştığınızda, size tahmini bir teslim süresi bilgisi verebilirim."
      }
    ],
    relatedLinks: [
      {
        "label": "Adana yeminli tercüman",
        "href": "/adana-yeminli-tercuman-yigit-cilli/"
      },
      {
        "label": "Noter onaylı İngilizce tercüme",
        "href": "/adanada-noter-onayli-ingilizce-tercume-hizmeti/"
      },
      {
        "label": "Yeminli tercümanın görevleri",
        "href": "/adana-yeminli-tercumanin-gorevleri/"
      },
      {
        "label": "Referanslar",
        "href": "/referanslar/"
      }
    ],
    cta: { label: "Metin için yazın", href: "/iletisim" },
    secondaryCta: { label: "Referanslarımız", href: "/referanslar" },
  },

  referanslar: {
    slug: 'referanslar',
    seo: {
      title: 'Referanslarımız | Yiğit Cilli',
      description:
        'Kamu, sanayi, akademi ve uluslararası kurumlarda uzun süreli tercüme ve kurumsal metin iş birlikleri.',
      ogDescription:
        'Yiğit Cilli referansları: resmi, kurumsal ve teknik metinlerde güvenen kurumlar ve kuruluşlar.',
      ogImage: '/images/translation.webp',
    },
    hero: {
      eyebrow: 'Tercüme',
      title: 'Referanslarımız',
      description:
        'Resmi, kurumsal ve teknik metinlerde uzun süreli iş birliği yapılan kurumlar — kamu, sanayi, akademi ve sivil toplum.',
      image: {
        src: '/images/translation.webp',
        alt: 'Profesyonel tercüme referansları',
      },
    },
    blocks: [],
    highlights: [],
    cta: { label: 'Tercüme talebi', href: '/iletisim' },
    secondaryCta: { label: 'Tercüme alanı', href: '/tercume' },
  },

  stoacilik: {
    slug: 'stoacilik',
    seo: {
      title: 'Stoacılık | Yiğit Cilli',
      description:
        'Stoacı düşünce, disiplin ve günlük yaşama uygulanabilir felsefe notları. Sakin, net ve iddiasız bir anlatım.',
      ogDescription:
        'Yiğit Cilli stoacılık alanı: düşünce notları, disiplin ve günlük hayatla bağlantı.',
      ogImage: '/images/stoicism.webp',
    },
    hero: {
      eyebrow: 'Alan',
      title: 'Stoacılık',
      description:
        'Stoacı düşünceyi disiplin ve günlük yaşamla buluşturan notlar: sakin, net, uygulanabilir.',
      image: {
        src: '/images/stoicism.webp',
        alt: 'Stoacı düşünce ve felsefe yazıları',
      },
    },
    blocks: [
      {
        paragraphs: [
          'Stoacılık burada akademik bir gösteri değil; günlük kararlara, dikkate ve içsel düzene uygulanan bir düşünce pratiği olarak ele alınır.',
          'Yazılar sakin bir tempoda ilerler: iddia yerine gözlem, slogan yerine netlik tercih edilir.',
        ],
      },
      {
        heading: 'Yazıların odağı',
        paragraphs: [
          'Erdem, dikkat ve sınırların farkında olmak; modern yaşamın gürültüsünde sade bir çizgi çizmek. Okur, metinden doğrudan uygulanabilir bir perspektif taşır.',
        ],
      },
    ],
    highlights: [
      'Günlük hayata uygulanabilir düşünce',
      'Disiplin ve içsel denge',
      'Sakin ve net anlatım',
      'Düşünce notları ve okumalar',
    ],
  },

  hakkimda: {
    slug: "hakkimda",
    seo: {
      title: "Yiğit Cilli Kimdir? Yazılım, Yapay Zekâ, SEO ve Yeminli Tercüme | Yiğit Cilli",
      description: "Yiğit Cilli'nin yazılım geliştirme, yapay zekâ çözümleri, SEO danışmanlığı ve yeminli tercüme alanlarındaki deneyimini keşfedin. Bilfen'den Londra'ya uzanan…",
      ogDescription: "Yiğit Cilli'nin kişisel ve profesyonel yolculuğunu, yazılım, yapay zekâ, SEO ve yeminli tercüme alanlarındaki tecrübelerini yakından tanıyın.",
      ogImage: "/images/about.webp",
    },
    hero: {
      eyebrow: "Kişisel marka",
      title: "Yiğit Cilli: Yazılım, Yapay Zekâ ve Yeminli Tercüme Alanlarında Profesyonel Yaklaşım",
      description: "Yiğit Cilli olarak, teknoloji ve dil hizmetleri alanındaki geniş bilgi birikimimi projelerinize değer katmak üzere sunuyorum. Bilfen'den başlayarak uluslararası eğitim ve iş deneyimlerimle, yazılım, yapay zekâ, SEO ve yeminli tercüme konularında çözümler geliştiriyorum. Amacım, güvenilir ve özgün yaklaşımlarla hedeflerinize ulaşmanıza destek olmaktır.",
      image: {
        src: "/images/about.webp",
        alt: "Yiğit Cilli kişisel marka ve dijital çalışmalar",
      },
    },
    blocks: [
      {
        heading: "Eğitim ve Uluslararası Deneyimler",
        paragraphs: [
          "Eğitim hayatıma Bilfen'de başladım ve burada edindiğim sağlam temel, ileriki akademik ve profesyonel yolculuğumda önemli bir rol oynadı. Bu dönemdeki analitik düşünme becerileri, teknoloji ve dil alanındaki merakımı şekillendirdi.",
          "Uluslararası arenadaki deneyimlerim, Kanada'da Toronto Üniversitesi'nde ve İngiltere'de Londra'da Roehampton Üniversitesi'nde devam etti. Bu süreçler, farklı kültürlerden insanlarla çalışma ve küresel perspektif kazanma fırsatı sundu. Edindiğim bilgi ve becerileri, Türkiye'deki projelerde uygulamaktan memnuniyet duyuyorum."
        ],
      },
      {
        heading: "Yazılım ve Yapay Zekâ Çözümleri",
        paragraphs: [
          "Yazılım geliştirme, profesyonel kariyerimin merkezinde yer alıyor. Web uygulamalarından mobil uygulama geliştirme süreçlerine kadar geniş bir yelpazede projeler üzerinde çalıştım. Kullanıcı odaklı ve performanslı yazılımlar oluşturarak dijital dünyada fark yaratmayı hedefliyorum. Yazılım hizmetlerim hakkında detaylı bilgi için Yazılım sayfasını ziyaret edebilirsiniz.",
          "Yapay zekâ teknolojileri, günümüzün ve geleceğin en önemli alanlarından biri. Veri analizi, makine öğrenimi ve doğal dil işleme gibi konularda projeler geliştirerek iş süreçlerini optimize etmeye ve yenilikçi çözümler sunmaya odaklanıyorum. Toryum Group bünyesindeki deneyimlerim, bu alandaki yetkinliğimi pekiştirdi."
        ],
      },
      {
        heading: "SEO ve Dijital Görünürlük Stratejileri",
        paragraphs: [
          "Dijital dünyada var olmanın ilk adımı, doğru kitleye ulaşmaktır. Arama motoru optimizasyonu (SEO), web sitelerinin organik görünürlüğünü artırmak için kritik öneme sahiptir. Yerel SEO stratejileriyle, işletmelerin hedefledikleri coğrafyalarda daha fazla potansiyel müşteriye ulaşmalarına yardımcı oluyorum.",
          "Kapsamlı anahtar kelime araştırması, teknik SEO uygulamaları ve içerik optimizasyonu gibi adımlarla web sitelerinin arama motoru sıralamalarını iyileştiriyorum. Bu sayede, dijital platformlarda sürdürülebilir bir büyüme ve bilinirlik elde etmenizi destekliyorum."
        ],
      },
      {
        heading: "Yeminli Tercüme Hizmetlerinde Güvenilirlik",
        paragraphs: [
          "Dil bariyerlerini aşmak, uluslararası iletişimde temel bir gerekliliktir. Yeminli tercüme hizmetleri, hukuki ve resmi belgelerin doğru ve güvenilir bir şekilde çevrilmesini sağlar. Bu alandaki yetkinliğimle, noter onaylı ve resmi geçerliliği olan çeviriler sunuyorum. Tercüme hizmetlerim hakkında bilgi almak için Tercüme sayfamı inceleyebilirsiniz.",
          "Akademik metinlerden hukuki belgelere, ticari sözleşmelerden teknik kılavuzlara kadar farklı alanlarda yeminli tercüme hizmeti sağlıyorum. Her çeviride dilin inceliklerine dikkat ederek, metnin orijinal anlamını ve tonunu korumaya özen gösteriyorum."
        ],
      }
    ],
    highlights: ["Yazılım geliştirme ve mobil uygulama uzmanlığı","Yapay zekâ ve veri analizi çözümleri","Yerel SEO odaklı dijital görünürlük stratejileri","Noter onaylı yeminli tercüme hizmetleri"],
    faq: [
      {
        "question": "Yiğit Cilli hangi alanlarda hizmet vermektedir?",
        "answer": "Yiğit Cilli olarak yazılım geliştirme, yapay zekâ çözümleri, SEO danışmanlığı ve yeminli tercüme alanlarında hizmet sunmaktayım. Bu çeşitli alanlardaki birikimimi projelerinize değer katmak için kullanıyorum."
      },
      {
        "question": "Uluslararası eğitim ve iş deneyiminiz var mı?",
        "answer": "Evet, eğitim hayatımın önemli bir bölümünü Kanada'da Toronto Üniversitesi'nde ve İngiltere'de Londra'da Roehampton Üniversitesi'nde tamamladım. Bu uluslararası deneyimler, farklı bakış açıları kazanmamı ve küresel standartlarda hizmet sunmamı sağladı."
      },
      {
        "question": "Mobil uygulama geliştirme süreçleriniz nasıl işler?",
        "answer": "Mobil uygulama geliştirme süreçlerinde, projenin başlangıcından itibaren müşteri ihtiyaçlarını analiz ederek, kullanıcı dostu arayüzler ve performanslı kod yapıları oluşturmaya odaklanıyorum. Detaylı bilgi için Yazılım hizmetleri sayfamı ziyaret edebilirsiniz."
      },
      {
        "question": "Yeminli tercüme neden önemlidir?",
        "answer": "Yeminli tercüme, özellikle hukuki ve resmi belgelerin çevirilerinde doğruluk ve güvenilirlik sağlamak adına büyük önem taşır. Noter yeminli tercüman olarak, belgelerinizin resmi geçerliliğini koruyarak hatasız çeviriler sunuyorum."
      }
    ],
    relatedLinks: [
      {
        "label": "İletişim",
        "href": "/iletisim/"
      },
      {
        "label": "Yazılım",
        "href": "/yazilim/"
      },
      {
        "label": "Tercüme",
        "href": "/tercume/"
      }
    ],
    cta: { label: "İletişim", href: "/iletisim" },
  },

  iletisim: {
    slug: 'iletisim',
    seo: {
      title: 'İletişim | Yiğit Cilli',
      description:
        'Proje, tercüme işi veya iş birliği için Yiğit Cilli ile iletişime geçin. E-posta üzerinden kısa bir mesaj yeterli.',
      ogDescription:
        'Yiğit Cilli iletişim: yazılım, tercüme veya iş birliği için e-posta.',
      ogImage: '/images/hero.webp',
    },
    hero: {
      eyebrow: 'İletişim',
      title: 'Birlikte çalışalım',
      description:
        'Yazılım projesi, metin çevirisi veya iş birliği için info@yigitcilli.com adresine yazabilirsiniz.',
    },
    blocks: [
      {
        paragraphs: [
          'Yeni bir ürün fikri, mevcut bir kod tabanı, çevrilecek bir metin veya düşünce üzerine bir yazı — konuyu birkaç cümleyle özetlemeniz yeterli.',
          'Uygun olduğunda kısa bir dönüş yaparım; net olmayan taleplerde önce konuyu birlikte çerçeveleriz.',
        ],
      },
      {
        heading: 'E-posta',
        paragraphs: [
          'Doğrudan yazmak için info@yigitcilli.com adresini kullanabilirsiniz. Konu satırında proje veya talep türünü kısaca belirtmeniz yeterlidir.',
        ],
      },
    ],
    highlights: [
      'Yazılım ve dijital ürün projeleri',
      'Tercüme ve editoryal metinler',
      'İş birliği ve danışma',
    ],
  },

  'adana-yeminli-tercuman-yigit-cilli': {
    slug: "adana-yeminli-tercuman-yigit-cilli",
    seo: {
      title: "Adana Yeminli Tercüman Hizmeti | Yiğit Cilli",
      description: "Adana'da yeminli tercüman Yiğit Cilli olarak resmi ve noter onaylı belge çevirisi hizmetleri sunuyorum. Hukuki, ticari ve teknik metinleriniz için güvenilir…",
      ogDescription: "Adana'da yeminli tercüme ihtiyaçlarınızda Yiğit Cilli olarak yanınızdayım. Resmi belgeleriniz için hızlı ve doğru çeviri hizmeti alın.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme · Adana",
      title: "Adana Yeminli Tercüman İhtiyaçlarınıza Profesyonel Çözümler",
      description: "Adana'da resmi belge çevirisi ihtiyaçlarınız için güvenilir bir yeminli tercüman arıyorsanız doğru yerdesiniz. Yiğit Cilli olarak, hukuki metinlerden ticari evraklara kadar geniş bir yelpazede noter onaylı tercüme hizmetleri sunuyorum. Belgelerinizin doğru ve eksiksiz bir şekilde çevrilmesi için titizlikle çalışıyorum.",
      image: {
        src: "/images/translation.webp",
        alt: "Adana yeminli tercüman Yiğit Cilli",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercüme Nedir ve Neden Önemlidir?",
        paragraphs: [
          "Yeminli tercüme, bir tercümanın çevirdiği metnin doğruluğunu ve aslına uygunluğunu yeminli tercüman sıfatıyla tasdik etmesi işlemidir. Bu tür çeviriler, resmi kurumlar, mahkemeler, üniversiteler ve diğer idari merciler tarafından talep edilen belgeler için zorunludur. Çevirinin yeminli tercüman kaşesi ve imzası taşıması, belgenin hukuki geçerliliğini sağlar.",
          "Özellikle uluslararası işlemler, vize başvuruları, şirket kuruluşları veya akademik denklik süreçlerinde yeminli tercüme büyük önem taşır. Adana'da yeminli tercüman olarak, çevirisi yapılan belgelerin orijinal metinle birebir uyumlu, dilbilgisi ve terminoloji açısından kusursuz olmasını sağlamak temel prensibimdir. Bu sayede, çevrilen belgenizin resmiyetini ve güvenilirliğini korumuş oluruz."
        ],
      },
      {
        heading: "Adana'da Resmi Belge Çevirisi Hizmetleri",
        paragraphs: [
          "Adana'da resmi belge çevirisi ihtiyaçlarınızda geniş bir yelpazede hizmet sunuyorum. Nüfus kayıt örnekleri, pasaportlar, kimlik belgeleri, evlilik cüzdanları, boşanma kararları gibi kişisel belgelerden; diploma, transkript, denklik belgesi gibi akademik evraklara kadar birçok farklı belgenin çevirisini yapmaktayım.",
          "Ticari alanda ise vekaletnameler, sözleşmeler, şirket ana sözleşmeleri, faaliyet raporları gibi kurumsal belgeler için de profesyonel çeviri desteği sağlıyorum. Hukuki metinlerin hassasiyetinin farkında olarak, kanunlar, mahkeme kararları ve dava dilekçeleri gibi özel dokümanların çevirisinde de titizlikle çalışıyorum. Adana yeminli tercüman olarak, her belgenin kendine özgü gerekliliklerini dikkate alarak çeviri yapmaktayım.",
          "Yiğit Cilli Tercüme Bürosu olarak Adana ve çevresindeki kurum ve bireylerin resmi çeviri taleplerini karşılamak üzere buradayım. Belgelerinizin türü ve kullanım amacı ne olursa olsun, doğru ve zamanında bir çeviri için bana ulaşabilirsiniz."
        ],
      },
      {
        heading: "Noter Onaylı Tercüme Süreci",
        paragraphs: [
          "Resmiyet gerektiren birçok belge için yeminli tercüme sonrası noter onayı da talep edilmektedir. Bu süreç, yeminli tercüman tarafından çevrilen ve imzalanan belgenin, bir noter tarafından tercümanın imzası ve yetkisinin tasdik edilmesiyle tamamlanır. Noter onayı, belgenin ulusal ve uluslararası platformlarda tam hukuki geçerlilik kazanmasını sağlar.",
          "Adana'da noter onaylı tercüme hizmeti kapsamında, belgenizin çevirisini tamamladıktan sonra, sizin adınıza noter tasdik işlemlerini de takip edebilirim. Özellikle yurt dışında kullanılacak belgeler için noter onayı vazgeçilmezdir. Detaylı bilgi almak için veya \"Noter onaylı İngilizce tercüme\" gibi özel talepleriniz için benimle iletişime geçebilirsiniz."
        ],
      },
      {
        heading: "Yiğit Cilli Farkıyla Adana'da Tercüme",
        paragraphs: [
          "Yiğit Cilli olarak Adana'da yeminli tercüman hizmeti sunarken, her projeye özel bir yaklaşım benimsemekteyim. Yılların verdiği deneyim ve alan bilgisiyle, çevirisi yapılan metinlerin sadece dilsel olarak değil, kültürel ve hukuki bağlamda da doğru aktarılmasını sağlamaktayım.",
          "Müşteri memnuniyeti ve gizlilik, çalışma prensiplerimin başında gelmektedir. Belgelerinizin hassasiyetinin farkında olarak, tüm çeviri süreçlerinde kişisel verilerin korunmasına azami özen gösteriyorum. Zamanında teslimat ve erişilebilir iletişim ile Adana'daki tercüme ihtiyaçlarınızda yanınızdayım.",
          "Adana'da güvenilir bir resmi belge çevirisi ve noter onaylı tercüme ortağı arıyorsanız, Yiğit Cilli Tercüme Bürosu olarak size destek olmaktan memnuniyet duyarım. İhtiyaçlarınız için lütfen benimle iletişime geçin."
        ],
      }
    ],
    highlights: ["Resmi ve noter onaylı belge çevirisi","Hukuki, ticari ve akademik metinlerde uzmanlık","Adana'da yerel ve hızlı hizmet","Gizlilik ve doğruluk ilkesi"],
    faq: [
      {
        "question": "Yeminli tercüme her belge için gerekli midir?",
        "answer": "Hayır, her belge için yeminli tercüme zorunlu değildir. Genellikle resmi kurumlar, konsolosluklar, mahkemeler veya üniversiteler tarafından talep edilen hukuki, akademik veya idari nitelikteki belgeler için gereklidir. Belgenizin kullanım amacına göre bu gereklilik değişebilir."
      },
      {
        "question": "Noter onayı süreci nasıl işler?",
        "answer": "Noter onayı süreci, yeminli tercüman tarafından çevrilmiş ve imzalanmış belgenin, noterin yeminli tercümanın imzasını ve yetkisini tasdik etmesiyle gerçekleşir. Bu işlem, belgenin resmiyetini ve hukuki geçerliliğini ulusal ve uluslararası alanda sağlamlaştırır."
      },
      {
        "question": "Hangi dillerde tercüme hizmeti veriyorsunuz?",
        "answer": "Başta İngilizce olmak üzere, belirli dillerde yeminli tercüme hizmeti sunmaktayım. İhtiyaç duyduğunuz dil ve belge türü için benimle iletişime geçerek detaylı bilgi alabilirsiniz."
      },
      {
        "question": "Tercüme ücretleri nasıl belirlenir?",
        "answer": "Tercüme ücretleri, belgenin dili, karakter veya kelime sayısı, içeriğin uzmanlık düzeyi ve teslimat süresi gibi faktörlere göre belirlenir. Noter onayı gibi ek hizmetler de ücrete dahil edilebilir. Net bir fiyat teklifi almak için belgenizi paylaşmanız yeterlidir."
      }
    ],
    relatedLinks: [
      {
        "label": "Tercüme alanı",
        "href": "/tercume/"
      },
      {
        "label": "Noter onaylı İngilizce tercüme",
        "href": "/adanada-noter-onayli-ingilizce-tercume-hizmeti/"
      },
      {
        "label": "İletişim",
        "href": "/iletisim/"
      }
    ],
    cta: { label: "Tercüme talebi", href: "/iletisim" },
    secondaryCta: { label: "Referanslar", href: "/referanslar" },
  },

  'adanada-noter-onayli-ingilizce-tercume-hizmeti': {
    slug: "adanada-noter-onayli-ingilizce-tercume-hizmeti",
    seo: {
      title: "Adana Noter Onaylı İngilizce Tercüme Hizmeti | Yiğit Cilli",
      description: "Adana'da yeminli tercüman Yiğit Cilli'den noter onaylı İngilizce çeviri hizmeti. Diploma, pasaport, vize evrakları gibi resmi belgeleriniz için güvenilir ve…",
      ogDescription: "Adana'da resmi belgeleriniz için noter onaylı İngilizce tercüme mi arıyorsunuz? Yiğit Cilli, yeminli çeviri ihtiyaçlarınızda yanınızda.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme · Adana",
      title: "Adana'da Noter Onaylı İngilizce Tercüme ve Yeminli Çeviri Hizmetleri",
      description: "Adana'da uluslararası geçerliliği olan belgeleriniz için güvenilir ve doğru İngilizce tercümeye mi ihtiyacınız var? Yiğit Cilli olarak, noter onaylı yeminli çeviri hizmetlerimizle yanınızdayız. Resmi evraklarınızın hatasız ve hızlı bir şekilde çevrilmesini sağlıyoruz.",
      image: {
        src: "/images/translation.webp",
        alt: "Adana noter onaylı İngilizce tercüme",
      },
    },
    blocks: [
      {
        heading: "Noter Onaylı İngilizce Tercüme Nedir ve Neden Önemlidir?",
        paragraphs: [
          "Yurt dışında eğitim, iş veya farklı resmi işlemler için hazırlanan belgelerin uluslararası alanda kabul görmesi genellikle noter onayı gerektirir. Adana'da sunulan noter onaylı İngilizce tercüme hizmeti, yeminli bir tercüman tarafından çevrilen belgelerin noterde tasdik edilerek hukuki geçerlilik kazanması sürecidir. Bu süreç, belgenin orijinaline uygunluğunu ve çevirinin doğruluğunu resmi makamlarca onaylatır.",
          "Özellikle diploma, transkript, pasaport, nüfus kayıt örnekleri, evlilik cüzdanları ve vize evrakları gibi hayati önem taşıyan belgelerde bu onay büyük bir fark yaratır. Yiğit Cilli olarak, Adana'da bu tür resmi evrak çevirisi ihtiyaçlarınızda profesyonel destek sunarak belgelerinizin sorunsuz bir şekilde işleme alınmasını hedefliyoruz."
        ],
      },
      {
        heading: "Hangi Belgeler İçin Yeminli ve Noter Onaylı Çeviri Gerekir?",
        paragraphs: [
          "Çok çeşitli resmi belgeler, yurt dışı başvurularında noter onaylı İngilizce tercüme gerektirebilir. Bunlar arasında akademik belgelerden (diploma, transkript, öğrenci belgesi) kişisel kimlik belgelerine (pasaport, nüfus cüzdanı, ehliyet) kadar geniş bir yelpaze bulunur. Ayrıca, evlilik cüzdanı, boşanma kararı, doğum belgesi gibi aile hukuku belgeleri ve vize başvuruları için gerekli olan finansal evraklar veya davetiye mektupları da bu kapsama girer.",
          "Her bir belgenin kendine özgü terminolojisi ve yasal gereklilikleri olduğundan, çevirinin hatasız ve eksiksiz yapılması kritik öneme sahiptir. Adana'da [yeminli tercüman](/adana-yeminli-tercuman-yigit-cilli/) olarak, bu belgelerinizi uluslararası standartlara uygun bir şekilde İngilizceye çeviriyor ve noter onay süreçlerinde size rehberlik ediyoruz. Böylece belgelerinizin gideceği kurumlar tarafından kabul edilmesini sağlıyoruz."
        ],
      },
      {
        heading: "Adana'da Resmi Evrak Çevirisi Süreci Nasıl İşler?",
        paragraphs: [
          "Adana'da noter onaylı İngilizce tercüme süreci, belgenizi bize ulaştırmanızla başlar. İlk adımda, belgeniz deneyimli bir yeminli tercüman tarafından dikkatle incelenir ve aslına uygun bir şekilde İngilizceye çevrilir. Çeviri tamamlandıktan sonra, yeminli tercüman tarafından imzalanır ve mühürlenir. Bu adım, çevirinin doğruluğunu ve yeminli tercüman sorumluluğunu gösterir.",
          "İkinci aşamada, çevirisi tamamlanmış ve yeminli tercüman tarafından onaylanmış belge, Adana'daki noterliklerde tasdik edilir. Noter, tercümanın yeminli olduğunu ve imzasının geçerliliğini onaylayarak belgeye resmiyet kazandırır. Bu titiz süreç, özellikle vize evrakları ve eğitim başvuruları gibi hassas konularda belgelerinizin uluslararası alanda sorunsuz bir şekilde kabul edilmesini sağlar."
        ],
      },
      {
        heading: "Neden Yiğit Cilli'yi Tercih Etmelisiniz?",
        paragraphs: [
          "Adana'da noter onaylı İngilizce tercüme hizmeti alırken güvenilir, hızlı ve doğru bir çözüm ortağı bulmak önemlidir. Yiğit Cilli olarak, yılların getirdiği deneyim ve uzmanlıkla, belgelerinizin her detayına özen gösteriyoruz. Hukuki ve resmi kesinlik iddiasında bulunmadan, belgelerinizin gerektirdiği hassasiyetle çeviri süreçlerini yönetiyoruz. Yerel mevzuata ve uluslararası standartlara hakimiyetimizle, Adana ve çevresindeki müşterilerimize kaliteli bir hizmet sunuyoruz.",
          "Resmi evrak çevirisi konusunda karşılaşılabilecek karmaşıklıkların farkındayız. Bu nedenle, diploma, transkript, pasaport veya vize evrakları gibi belgelerinizin çevirisinde sadece dil bilgisi değil, aynı zamanda ilgili alanın terminolojisine ve yasal gerekliliklerine de hakim bir yaklaşım sergiliyoruz. Amacımız, belgelerinizin yurt dışında herhangi bir aksaklık yaşamadan kullanılmasını sağlamaktır."
        ],
      }
    ],
    highlights: ["Adana'da noter onaylı İngilizce tercüme çözümleri","Diploma, transkript, pasaport gibi resmi evrak çevirisi","Deneyimli yeminli tercüman ile güvenilir hizmet","Hızlı ve doğru çeviri süreçleri"],
    faq: [
      {
        "question": "Noter onaylı İngilizce tercüme ne kadar sürer?",
        "answer": "Tercüme süresi, belgenin uzunluğuna ve karmaşıklığına göre değişmekle birlikte, genellikle 1-3 iş günü içinde tamamlanır. Noter onayı süreci de belgenin hazır olmasından sonra ek olarak 1 iş günü alabilir. Acil durumlarda öncelikli hizmet seçenekleri için bizimle iletişime geçebilirsiniz."
      },
      {
        "question": "Tercüme için belgelerimi size nasıl ulaştırabilirim?",
        "answer": "Belgelerinizi e-posta yoluyla dijital olarak gönderebilir veya Adana'daki ofisimize şahsen teslim edebilirsiniz. Orijinal belgelerin noter onayı için gerekli olabileceğini lütfen unutmayın; bu konuda size detaylı bilgi verilecektir."
      },
      {
        "question": "Noter onaylı tercümenin maliyeti nedir?",
        "answer": "Tercüme ücretleri, çevrilecek belgenin türüne, kelime sayısına ve aciliyetine göre farklılık gösterir. En doğru fiyat teklifi için belgenizi bize iletmeniz yeterlidir. Adana'da rekabetçi ve şeffaf fiyatlandırma politikası uyguluyoruz."
      }
    ],
    relatedLinks: [
      {
        "label": "Yeminli tercüman",
        "href": "/adana-yeminli-tercuman-yigit-cilli/"
      },
      {
        "label": "Tercüme hizmetleri",
        "href": "/tercume/"
      },
      {
        "label": "Referanslar",
        "href": "/referanslar/"
      }
    ],
    cta: { label: "Belge için yazın", href: "/iletisim" },
    secondaryCta: { label: "Tercüme alanı", href: "/tercume" },
  },

  'adana-yeminli-tercumanin-gorevleri': {
    slug: "adana-yeminli-tercumanin-gorevleri",
    seo: {
      title: "Yeminli Tercüman Ne İş Yapar? Adana'da Resmi Çeviri Süreci | Yiğit Cilli",
      description: "Adana'da yeminli tercüman ne iş yapar? Resmi belge çevirileri, noter onaylı tercüme süreçleri ve yeminli çevirinin önemi hakkında detaylı bilgi alın.…",
      ogDescription: "Adana'da yeminli tercümanların görevlerini, resmi çeviri süreçlerini ve noter onaylı tercümenin detaylarını keşfedin. Yiğit Cilli ile profesyonel destek.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme",
      title: "Adana Yeminli Tercümanın Görevleri ve Resmi Çeviri Süreçleri",
      description: "Resmi işlemlerinizde yabancı dildeki belgelerin geçerliliği için yeminli tercümeye ihtiyaç duyulur. Yeminli tercümanlar, belgelerinizi hukuki ve kültürel bağlamda doğru bir şekilde çevirerek resmiyet kazanmasını sağlar. Bu süreç, uluslararası ilişkilerde ve yerel bürokraside büyük önem taşır.",
      image: {
        src: "/images/translation.webp",
        alt: "Yeminli tercüman görevleri",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercüman Kimdir ve Görevleri Nelerdir?",
        paragraphs: [
          "Yeminli tercüman, noter huzurunda yemin ederek resmî belge çevirisi yapma yetkisi kazanmış kişidir. Bu yeminle birlikte, çevirinin doğruluğu, eksiksizliği ve gizliliği konusunda hukuki sorumluluk üstlenir. Yeminli tercümanlar, kaynak metindeki anlamı, kültürel ve hukuki nüansları hedef dile en doğru şekilde aktarmakla yükümlüdür.",
          "Başlıca görevleri arasında, yabancı dildeki evrakların Türkiye'deki resmî kurumlarca kabul edilebilir hale getirilmesi veya tam tersi, Türkçe belgelerin yurt dışında kullanılabilirliğini sağlamak bulunur. Bu süreçte belgenin orijinal formatına sadık kalmak, içeriği manipüle etmemek ve tarafsız bir yaklaşım sergilemek temel prensiplerindendir."
        ],
      },
      {
        heading: "Yeminli Çeviri ve Noter Onaylı Tercüme Süreci",
        paragraphs: [
          "Yeminli çeviri nedir? Yeminli çeviri, yeminli bir tercüman tarafından yapılan ve tercümanın kaşesi ile imzasını taşıyan çeviridir. Bu çeviri, belgenin yasal geçerlilik kazanması için atılan ilk adımdır. Tercüman, çevirinin aslına uygun olduğunu ve herhangi bir ekleme veya çıkarma yapılmadığını bu imzasıyla taahhüt eder.",
          "Noter onaylı tercüme süreci ise, yeminli tercümanın yaptığı çevirinin bir noter tarafından tasdik edilmesiyle tamamlanır. Noter, çevirinin içeriğini kontrol etmez; sadece çeviriyi yapan yeminli tercümanın imzasının ve kaşesinin kendisine ait olduğunu teyit eder. Bu onay, belgenin Türkiye'deki veya yurt dışındaki resmî makamlar önünde tam hukuki geçerlilik kazanmasını sağlar. Adana'da bu süreçleri sıkça gerçekleştirmekteyiz."
        ],
      },
      {
        heading: "Hangi Belgeler Yeminli Tercüme Gerektirir?",
        paragraphs: [
          "Çok çeşitli resmi çeviri belgeleri yeminli tercüme ve çoğu zaman noter onayı gerektirir. Bunlar arasında; doğum, evlilik, boşanma ve ölüm belgeleri gibi nüfus kayıt örnekleri, diploma, transkript gibi eğitim belgeleri yer alır. Ayrıca, vekaletnameler, muvafakatnameler, pasaportlar, kimlikler ve sabıka kayıtları da yeminli çeviriye ihtiyaç duyar.",
          "Ticari ve hukuki alanlarda ise; şirket ana sözleşmeleri, ticari sicil belgeleri, mahkeme kararları, sözleşmeler ve patent belgeleri gibi evraklar yeminli tercüme olmadan genellikle kabul edilmez. Bu belgelerin doğru ve eksiksiz çevrilmesi, olası hukuki sorunların önüne geçmek için kritik öneme sahiptir."
        ],
      },
      {
        heading: "Adana'da Yeminli Tercüman Seçerken Nelere Dikkat Edilmeli?",
        paragraphs: [
          "Adana yeminli tercüman arayışınızda dikkat etmeniz gereken bazı önemli noktalar bulunmaktadır. Öncelikle, tercümanın ilgili dilde ve alanda yeterli tecrübeye sahip olması önemlidir. Özellikle hukuki veya teknik metinlerde uzmanlık, çevirinin kalitesini doğrudan etkiler. Tercümanın noterle olan ilişkisi ve süreçlere hakimiyeti de işlerin hızlı ilerlemesini sağlar.",
          "Güvenilirlik, gizlilik ve zamanında teslimat da bir yeminli tercümandan beklenen temel özelliklerdir. Belgelerinizin hassasiyeti göz önüne alındığında, şeffaf iletişim kurabilen ve süreç hakkında sizi bilgilendiren bir tercümanla çalışmak önemlidir. Bu konularda detaylı bilgi almak için bizimle iletişime geçebilirsiniz."
        ],
      }
    ],
    highlights: ["Resmi belgelerin yasal geçerliliğini sağlama.","Noter huzurunda edilen yeminle gelen yüksek sorumluluk.","Diller arası kültürel ve hukuki hassasiyetleri doğru aktarma.","Müşteri gizliliği ve çeviri doğruluğu ilkesiyle çalışma."],
    faq: [
      {
        "question": "Yeminli tercümanlık belgesi nasıl alınır?",
        "answer": "Türkiye'de yeminli tercüman olabilmek için öncelikle noterler tarafından belirlenen şartları (dil yeterliliği, adli sicil kaydı vb.) karşılamak ve noter huzurunda yemin ederek tercümanlık yetkisi almak gerekmektedir."
      },
      {
        "question": "Yeminli çeviri ile normal çeviri arasındaki temel fark nedir?",
        "answer": "Normal çeviri genellikle bilgi amaçlıyken, yeminli çeviri yasal geçerlilik taşır. Yeminli tercümanın imzası ve kaşesiyle onaylanan çeviriler, resmi kurumlar tarafından kabul edilir ve hukuki sorumluluk içerir."
      },
      {
        "question": "Noter onayı her yeminli çeviri için zorunlu mudur?",
        "answer": "Hayır, noter onayı her yeminli çeviri için zorunlu değildir. Bu durum, çeviriyi talep eden kurumun veya makamın beklentisine göre değişir. Bazı kurumlar sadece yeminli tercüman kaşesi ve imzasıyla yetinirken, bazıları ek olarak noter tasdiki de isteyebilir."
      },
      {
        "question": "Çevirinin doğruluğundan kim sorumludur?",
        "answer": "Yeminli çevirinin doğruluğundan ve eksiksizliğinden doğrudan çeviriyi yapan yeminli tercüman sorumludur. Noter ise sadece tercümanın imzasının ve kaşesinin gerçekliğini tasdik eder."
      }
    ],
    relatedLinks: [
      {
        "label": "Adana yeminli tercüman",
        "href": "/adana-yeminli-tercuman-yigit-cilli/"
      },
      {
        "label": "Noter onaylı çeviri",
        "href": "/adanada-noter-onayli-ingilizce-tercume-hizmeti/"
      },
      {
        "label": "Tercüme",
        "href": "/tercume/"
      }
    ],
    cta: { label: "Süreç için iletişim", href: "/iletisim" },
    secondaryCta: { label: "Referanslar", href: "/referanslar" },
  },

  makaleler: {
    slug: "makaleler",
    seo: {
      title: "Yazılım, Yapay Zeka, SEO ve Tercüme Makaleleri | Yiğit Cilli",
      description: "Yazılım, yapay zekâ, SEO ve yeminli tercüme konularında bilgi ve deneyimlerimi paylaştığım makalelerime göz atın. Kişisel gelişim ve stoacılık üzerine yazılar…",
      ogDescription: "Yiğit Cilli'nin yazılım, yapay zekâ, SEO, tercüme ve kişisel gelişim alanlarındaki makalelerini keşfedin. Bilgiye dayalı, özgün içerikler.",
      ogImage: "/images/stoicism.webp",
    },
    hero: {
      eyebrow: "Yazılar",
      title: "Yazılım, Yapay Zekâ, SEO ve Tercüme Alanında Bilgi Merkezim",
      description: "Bu bölümde, yazılım geliştirme, yapay zekâ uygulamaları, arama motoru optimizasyonu (SEO) stratejileri ve yeminli tercüme süreçleri üzerine kaleme aldığım makaleleri bulabilirsiniz. Amacım, bu alanlardaki bilgi birikimimi ve deneyimlerimi sade bir dille sizlerle paylaşmaktır. Aynı zamanda, kişisel gelişim ve felsefe konularındaki düşüncelerime de yer veriyorum.",
      image: {
        src: "/images/stoicism.webp",
        alt: "Makaleler ve düşünce yazıları",
      },
    },
    blocks: [
      {
        heading: "Yazılım Dünyasından Güncel Bakışlar",
        paragraphs: [
          "Yazılım geliştirme, günümüz dünyasının temel taşlarından biri. Bu bölümde, web geliştirme, mobil uygulamalar ve farklı programlama dilleri üzerine yazılarımı bulacaksınız. Teknoloji trendlerini ve pratik uygulamaları ele alıyorum.",
          "Yazılım projelerinde karşılaşılan zorluklar, çözüm yaklaşımları ve verimli kodlama teknikleri hakkında deneyimlerimi aktarıyorum. Yeni başlayanlar ve tecrübeli geliştiriciler için faydalı içerikler sunuyorum. Daha fazla bilgi için <a href=\"/yazilim/\">Yazılım</a> sayfamı ziyaret edebilirsiniz."
        ],
      },
      {
        heading: "Yapay Zekânın Yükselişi ve Uygulamaları",
        paragraphs: [
          "Yapay zekâ (YZ), hayatımızın her alanına nüfuz eden bir güç. Makine öğrenimi algoritmalarından doğal dil işlemeye kadar YZ'nin potansiyelini inceliyorum. YZ'nin iş süreçlerine entegrasyonu ve günlük yaşamdaki etkileri üzerine odaklanıyorum.",
          "Yapay zekâ teknolojilerinin etik boyutları, gelecekteki potansiyelleri ve farklı sektörlerdeki uygulama örnekleri hakkında analizler sunuyorum. YZ'nin karmaşık dünyasını anlaşılır bir dille aktararak, merakınızı gidermeyi hedefliyorum."
        ],
      },
      {
        heading: "Arama Motoru Optimizasyonu (SEO) Stratejileri",
        paragraphs: [
          "Dijital görünürlük, günümüz iş dünyasında kritik. Bu bölümde, web sitenizin arama motorlarında üst sıralarda yer almasını sağlayacak SEO stratejilerini ve tekniklerini ele alıyorum. Anahtar kelime araştırmasından teknik SEO'ya birçok konuyu detaylandırıyorum.",
          "SEO'nun sürekli değişen algoritmalarına uyum sağlamak ve sürdürülebilir başarı elde etmek için güncel bilgileri paylaşıyorum. Organik trafiği artırmak ve hedef kitlenize ulaşmak için pratik ipuçları sunuyorum."
        ],
      },
      {
        heading: "Yeminli Tercüme ve Dil Hizmetleri",
        paragraphs: [
          "Resmi ve hukuki belgelerde dil bariyerlerini aşmak, doğru ve güvenilir bir tercüme süreci gerektirir. Bu bölümde, yeminli tercüme hizmetlerinin önemi, çeviri süreçleri ve dikkat edilmesi gereken noktalar hakkında bilgi veriyorum. Hukuki, teknik ve akademik metinlerin inceliklerini açıklıyorum.",
          "Tercüme sektöründeki deneyimlerimi paylaşarak, doğru tercüman seçimi ve başarılı proje yönetimi konularında rehberlik etmeyi amaçlıyorum. Dilin gücünü ele alan yazılarıma <a href=\"/tercume/\">Tercüme</a> sayfamdan ulaşabilirsiniz."
        ],
      },
      {
        heading: "Kişisel Gelişim ve Felsefe: Stoacılık",
        paragraphs: [
          "Teknolojinin hızla geliştiği bu çağda, kişisel gelişim ve içsel dengeyi korumak büyük önem taşıyor. Bu bölümde, Stoacılık felsefesinin günümüz insanına sunduğu bilgelik ve pratik yaşam rehberliği üzerine yazılarımı bulacaksınız. Dirençli olmak, duyguları yönetmek için Stoacı prensipleri inceliyorum.",
          "Antik çağlardan günümüze ulaşan bu felsefenin modern yaşamdaki yansımalarını ve bireysel dönüşümdeki rolünü ele alıyorum. Daha derinlemesine okumalar için <a href=\"/stoacilik/\">Stoacılık</a> yazılarıma göz atabilirsiniz. Bu düşünce yolculuğunda bana eşlik etmenizi dilerim."
        ],
      }
    ],
    highlights: ["Yazılım, yapay zekâ ve SEO alanlarında güncel analizler","Yeminli tercüme süreçleri ve dil hizmetlerine dair pratik bilgiler","Kişisel gelişim ve Stoacılık felsefesi üzerine derinlemesine düşünceler","Dijital dünyanın farklı disiplinlerini bir araya getiren özgün bakış açıları"],
    faq: [
      {
        "question": "Bu makaleler kimler için hazırlanmıştır?",
        "answer": "Bu makaleler, yazılım, yapay zekâ, SEO ve tercüme alanlarına ilgi duyan profesyoneller, öğrenciler ve meraklı okuyucular için hazırlanmıştır. Aynı zamanda kişisel gelişim ve felsefeye ilgi duyan herkes de faydalı içerikler bulabilir."
      },
      {
        "question": "Makalelerdeki bilgiler ne kadar günceldir?",
        "answer": "Makalelerdeki bilgileri güncel tutmaya özen gösteriyorum. Özellikle teknoloji ve SEO gibi hızla değişen alanlarda, en yeni gelişmeleri ve trendleri yansıtmaya çalışıyorum. İçerikler sürekli olarak gözden geçirilip güncellenebilir."
      },
      {
        "question": "Hangi konularda makaleler bulabilirim?",
        "answer": "Sitemde yazılım geliştirme, yapay zekâ uygulamaları, arama motoru optimizasyonu (SEO), yeminli tercüme hizmetleri ve Stoacılık felsefesi gibi geniş bir yelpazede makaleler bulabilirsiniz."
      },
      {
        "question": "Yiğit Cilli ile nasıl iletişime geçebilirim?",
        "answer": "Hizmetlerim veya makalelerim hakkında sorularınız varsa, web sitemdeki iletişim formu aracılığıyla bana ulaşabilirsiniz. Ayrıca <a href=\"/hakkimda/\">Hakkımda</a> sayfasından benimle ilgili daha fazla bilgi edinebilirsiniz."
      }
    ],
    relatedLinks: [
      {
        "label": "Stoacılık",
        "href": "/stoacilik/"
      },
      {
        "label": "Tercüme",
        "href": "/tercume/"
      },
      {
        "label": "Yazılım",
        "href": "/yazilim/"
      },
      {
        "label": "Hakkımda",
        "href": "/hakkimda/"
      }
    ],
    cta: { label: "Stoacılık yazıları", href: "/stoacilik" },
    secondaryCta: { label: "Ana sayfa", href: "/" },
  },

  'gizlilik-politikamiz': {
    slug: 'gizlilik-politikamiz',
    seo: {
      title: 'Gizlilik Politikamız | Yiğit Cilli',
      description:
        'yigitcilli.com gizlilik politikası: kişisel verilerin işlenmesi, çerezler ve iletişim talepleri hakkında bilgi.',
      ogDescription:
        'Yiğit Cilli web sitesi gizlilik politikası.',
      ogImage: '/images/hero.webp',
    },
    hero: {
      eyebrow: 'Yasal',
      title: 'Gizlilik Politikamız',
      description:
        'Bu siteyi kullanırken kişisel verilerinizin nasıl işlendiğine ilişkin özet bilgiler.',
    },
    blocks: [
      {
        paragraphs: [
          'yigitcilli.com (“Site”), Yiğit Cilli tarafından işletilir. Siteyi ziyaret ettiğinizde veya iletişim formu / e-posta yoluyla mesaj gönderdiğinizde paylaştığınız bilgiler yalnızca talebinizi yanıtlamak ve hizmet süreçlerini yürütmek amacıyla kullanılır.',
        ],
      },
      {
        heading: 'Toplanan veriler',
        paragraphs: [
          'İletişim sırasında ad, e-posta adresi ve mesaj içeriği işlenebilir. Teknik olarak sunucu günlükleri (IP, tarayıcı türü, ziyaret zamanı) barındırma sağlayıcısı tarafından otomatik tutulabilir.',
        ],
      },
      {
        heading: 'Çerezler ve üçüncü taraflar',
        paragraphs: [
          'Site şu an için zorunlu olmayan reklam çerezleri kullanmaz. Harici font veya analitik araçlar eklendiğinde bu politika güncellenir. Google Fonts gibi hizmetler kendi gizlilik koşullarına tabidir.',
        ],
      },
      {
        heading: 'Haklarınız ve iletişim',
        paragraphs: [
          'KVKK kapsamındaki talepleriniz için info@yigitcilli.com adresine yazabilirsiniz. Politika gerektiğinde güncellenir; güncel sürüm bu sayfada yayımlanır.',
        ],
      },
    ],
    highlights: [
      'Veri minimizasyonu',
      'İletişim amaçlı işleme',
      'KVKK talepleri için e-posta',
    ],
    cta: { label: 'İletişim', href: '/iletisim' },
  }
};

export const pageSlugs = Object.keys(pages) as (keyof typeof pages)[];

export function getPage(slug: string): PageContent | undefined {
  return pages[slug];
}
