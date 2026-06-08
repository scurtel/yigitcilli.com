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
      title: "Yazılım Geliştirme ve Dijital Çözümler | Yiğit Cilli",
      description: "Web sitesi geliştirme, yapay zekâ destekli yazılım, mobil uygulama ve SEO araçları entegrasyonu ile dijital projelere özel çözümler sunuyorum.",
      ogDescription: "Yiğit Cilli, web sitesi geliştirme, yapay zekâ destekli yazılım ve mobil uygulama projelerinizde modern ve performans odaklı çözümler sunar.",
      ogImage: "/images/software.webp",
    },
    hero: {
      eyebrow: "Yazılım",
      title: "Dijital Varlığınız İçin Yazılım Çözümleri",
      description: "Günümüz dijital dünyasında etkili bir varlık göstermek, doğru yazılım çözümleriyle mümkündür. İşletmenizin veya kişisel markanızın ihtiyaçlarına özel, performans odaklı ve güncel teknolojilerle desteklenmiş yazılımlar geliştiriyorum. Web sitesi projelerinden yapay zekâ destekli uygulamalara kadar geniş bir yelpazede hizmet sunuyorum.",
      image: {
        src: "/images/software.webp",
        alt: "Yiğit Cilli yazılım ve dijital ürünler",
      },
    },
    blocks: [
      {
        heading: "Web Sitesi Geliştirme ve Modern Teknolojiler",
        paragraphs: [
          "Dijital dünyada markanızın yüzü olan web siteniz, sadece bir bilgi kaynağı değil, aynı zamanda etkileşim ve dönüşüm aracıdır. Kullanıcı dostu arayüzler ve güçlü altyapılarla, işletmenizin hedeflerine ulaşmasını sağlayacak web siteleri geliştiriyorum. WordPress gibi yaygın ve esnek platformlardan, Astro ve Next.js gibi modern, hızlı ve performans odaklı teknolojilere kadar farklı ihtiyaçlara yönelik çözümler sunmaktayım.",
          "Her projenin kendine özgü dinamikleri olduğunu bilerek, baştan sona düşünülmüş bir mimariyle çalışıyorum. Mobil uyumluluk, hızlı yükleme süreleri ve kolay yönetilebilirlik gibi temel beklentilerin ötesinde, kullanıcı deneyimini merkeze alan tasarımlarla dijital varlığınızı güçlendiriyorum. Böylece ziyaretçilerinizle anlamlı bir bağ kurmanıza yardımcı oluyorum."
        ],
      },
      {
        heading: "Yapay Zekâ Destekli Yazılım Çözümleri",
        paragraphs: [
          "Yapay zekâ (YZ) teknolojileri, iş süreçlerini optimize etme ve karar alma mekanizmalarını güçlendirme potansiyeli sunar. İşletmenizin özel ihtiyaçlarına göre tasarlanmış yapay zekâ destekli yazılımlarla, veri analizi, otomasyon ve kişiselleştirilmiş deneyimler gibi alanlarda fark yaratabilirsiniz. Bu çözümler, operasyonel verimliliği artırırken, müşterilerinize daha iyi hizmet sunmanız için yeni kapılar açar.",
          "Mevcut sistemlerinize yapay zekâ entegrasyonu veya sıfırdan yapay zekâ odaklı yeni uygulamalar geliştirme konusunda destek sağlıyorum. Hedefimiz, işletmenizin potansiyelini maksimize eden, akıllı ve ölçeklenebilir yazılımlarla dijital dönüşüm yolculuğunuzda size eşlik etmektir. Veriye dayalı içgörülerle daha bilinçli adımlar atmanızı kolaylaştırıyorum."
        ],
      },
      {
        heading: "Mobil Uygulama Geliştirme ve Performans",
        paragraphs: [
          "Akıllı telefonların yaygınlaşmasıyla birlikte, mobil uygulamalar markaların müşterilerine ulaşmasında kritik bir rol oynamaktadır. Kullanıcı dostu, hızlı ve performanslı mobil uygulamalar geliştirerek, markanızın mobil dünyadaki erişimini ve etkileşimini artırıyorum. İster iOS ister Android platformları için olsun, kullanıcı deneyimini ön planda tutan çözümler sunuyorum. Detaylı bilgi için [Mobil uygulamalar](/aplikasyonlar/) sayfamı ziyaret edebilirsiniz.",
          "Bir mobil uygulamanın başarısı, sadece işlevselliğiyle değil, aynı zamanda akıcı performansı ve sezgisel arayüzüyle de ölçülür. Projelerimde, uygulamanızın cihazlar arası tutarlı bir deneyim sunmasını ve kullanıcıların beklentilerini karşılamasını sağlıyorum. Böylece, mobil dünyada hedef kitlenizle güçlü ve sürekli bir iletişim kurmanıza yardımcı oluyorum."
        ],
      },
      {
        heading: "SEO Odaklı Yazılım Mimarisi ve Araçları",
        paragraphs: [
          "Dijital dünyada görünür olmak için sadece iyi bir yazılıma sahip olmak yetmez; arama motorlarında da üst sıralarda yer almak önemlidir. Geliştirdiğim yazılımlarda, temiz kod yapısı, hızlı yükleme süreleri ve semantik HTML gibi teknik SEO prensiplerini baştan itibaren uyguluyorum. Bu yaklaşım, web sitenizin arama motorları tarafından daha kolay taranmasını ve dizine eklenmesini sağlar, böylece organik trafiğinizi artırmanıza yardımcı olur.",
          "Yazılım projelerinde, içeriğin arama motoru dostu bir şekilde sunulması için gerekli altyapıyı kuruyorum. Anahtar kelime araştırması ve rakip analizi gibi SEO süreçlerini destekleyen araç entegrasyonları ile web sitenizin performansını düzenli olarak izlemenizi sağlıyorum. Böylece dijital varlığınızın sadece estetik değil, aynı zamanda işlevsel ve keşfedilebilir olmasını temin ediyorum."
        ],
      }
    ],
    highlights: ["Performans Odaklı Yazılım Geliştirme","Yapay Zekâ Entegrasyon Yeteneği","Modern Web ve Mobil Teknolojileri","SEO Uyumlu Mimari ve Kod Yapısı"],
    faq: [
      {
        "question": "Web sitesi geliştirme süreciniz nasıl işliyor?",
        "answer": "Süreç, ihtiyaç analizi ile başlar, ardından tasarım ve prototipleme aşamasına geçilir. Onayınızın ardından kodlama, testler ve son olarak yayına alma adımları takip eder. Proje boyunca düzenli iletişim ve geri bildirimleriniz esastır."
      },
      {
        "question": "Yapay zekâ destekli yazılımlar işletmeme nasıl fayda sağlayabilir?",
        "answer": "Yapay zekâ, iş süreçlerinizi otomatikleştirmenize, veri analizinden değerli içgörüler elde etmenize, müşteri deneyimini kişiselleştirmenize ve operasyonel verimliliği artırmanıza yardımcı olabilir. Bu sayede maliyetleri düşürüp geliri artırma potansiyeli sunar."
      },
      {
        "question": "Mevcut web sitemi güncelleyebilir veya optimize edebilir misiniz?",
        "answer": "Evet, mevcut web sitenizin performansını artırmak, güncel teknolojilere taşımak veya yeni özellikler eklemek için destek sağlayabilirim. Özellikle hız, güvenlik, mobil uyumluluk ve SEO performansı gibi alanlarda optimizasyon çalışmaları yapıyorum."
      },
      {
        "question": "Mobil uygulama geliştirme hizmetleriniz nelerdir?",
        "answer": "iOS ve Android platformları için hem native hem de hibrit mobil uygulama geliştirme hizmetleri sunuyorum. Uygulama fikrinizin konseptinden başlayarak, tasarım, geliştirme, test ve yayınlama süreçlerinde size destek oluyorum. Kullanıcı deneyimi ve performans odaklı çözümler üretiyorum."
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
      title: "Yapay Zekâ Destekli Mobil Uygulasyon Geliştirme ve CalmerNow AI | Yiğit Cilli",
      description: "CalmerNow AI ve diğer mobil uygulamalarla yapay zekâ destekli wellness ve odak ürünleri geliştiriyorum. Android, ürün dili ve UX odaklı çözümler için Yiğit…",
      ogDescription: "Yapay zekâ destekli mobil uygulamalar ve CalmerNow AI projesi üzerine uzmanlaşmış bir geliştirici olarak, kullanıcı odaklı ve yenilikçi çözümler sunuyorum.",
      ogImage: "/images/apps.webp",
    },
    hero: {
      eyebrow: "Uygulama Geliştirme",
      title: "Yapay Zekâ Destekli Mobil Uygulama Geliştirme ve CalmerNow AI",
      description: "Dijital dünyada kullanıcılarla buluşan, yapay zekâ entegrasyonu ile zenginleşen mobil uygulamalar geliştiriyorum. Odak noktası, kullanıcı deneyimi ve işlevselliği bir araya getirmek.",
      image: {
        src: "/images/apps.webp",
        alt: "Yiğit Cilli yazılım ve dijital ürünler",
      },
    },
    blocks: [
      {
        heading: "Yapay Zekâ ile Kullanıcı Odaklı Uygulama Geliştirme",
        paragraphs: [
          "CalmerNow AI projesinde edindiğim değerli deneyimlerle, yapay zekânın mobil uygulamalara entegrasyonu konusunda kapsamlı bir bilgi birikimi sunuyorum. Bu projede, yapay zekânın kullanıcıların bireysel ihtiyaçlarına özel, kişiselleştirilmiş çözümler sunma potansiyelini yakından gözlemleme fırsatım oldu. Geliştirdiğim uygulamalarda, teknolojinin bu gücünü kullanıcı faydasına dönüştürmeyi hedefliyorum.",
          "Yapay zekâ destekli wellness ve odak ürünleri, günümüzün hızla değişen dijital yaşamında kullanıcıların yaşam kalitesini artırmayı hedefleyen önemli bir alandır. CalmerNow AI gibi uygulamalar, stres yönetimi, odaklanma becerileri ve genel zihinsel iyilik hali gibi konularda kişiselleştirilmiş deneyimler sunarak kullanıcıların daha bilinçli ve odaklanmış bir yaşam sürmelerine yardımcı oluyor. Bu alandaki yenilikçi yaklaşımları projelerime entegre ediyorum."
        ],
      },
      {
        heading: "Android Platformunda Kullanıcı Dostu ve İşlevsel Uygulamalar",
        paragraphs: [
          "Mobil uygulama geliştirme sürecimde, özellikle Android platformunda, kullanıcı deneyimini (UX) en ön planda tutuyorum. Bir uygulamanın başarısı, sadece sağlam bir teknik altyapıya sahip olmasıyla değil, aynı zamanda kullanıcıların onu ne kadar kolay, akıcı ve keyifli bir şekilde kullandığıyla da doğrudan ilişkilidir. Bu nedenle, her detayı kullanıcı odaklı bir bakış açısıyla ele alıyorum.",
          "Her projenin kendine özgü hedefleri ve kullanıcı kitlesi olduğunu bilerek, geliştirme aşamasında esnek ve adaptif bir yaklaşım sergiliyorum. Uygulamanın ilk fikir aşamasından itibaren, tasarım, kodlama, test ve lansman süreçlerinin her adımında, işlevselliği, performans optimizasyonunu ve kullanıcı memnuniyetini bir arada tutmayı hedefliyorum. Güvenilir ve sürdürülebilir mobil çözümler sunmak temel önceliğimdir."
        ],
      },
      {
        heading: "Etkili Ürün Dili ve Kullanıcı Deneyimi (UX) Tasarımı",
        paragraphs: [
          "Bir mobil uygulamanın sadece kod satırlarından ibaret olmadığını, aynı zamanda kullanıcıyla kurduğu güçlü bir iletişim aracı olduğunu biliyorum. Bu bağlamda, ürün dili ve kullanıcı deneyimi (UX), uygulamanın başarısında kritik bir rol oynar. Açık, tutarlı ve kullanıcı dostu bir ürün dili, kullanıcıların uygulamayı kolayca anlamasına, benimsemesine ve uzun vadede kullanmaya devam etmesine yardımcı olur.",
          "Kullanıcı arayüzü (UI) tasarımı ve kullanıcı deneyimi (UX) mühendisliği, geliştirme sürecimin ayrılmaz bir parçasıdır. Uygulamanın görsel çekiciliğini ve kullanım kolaylığını sağlamak için modern tasarım prensiplerini uyguluyorum. Gerçek kullanıcı testleri ve sürekli geri bildirimlerle, uygulamanın hedef kitlenin beklentilerini tam olarak karşılamasını ve hatta aşmasını sağlıyorum. Bu konudaki teknik altyapı ve kodlama yaklaşımları hakkında daha fazla bilgiye \"Kod ve mimari\" sayfasından ulaşabilirsiniz."
        ],
      },
      {
        heading: "Türkiye Pazarına Özel Uygulama Geliştirme Yaklaşımları",
        paragraphs: [
          "Türkiye pazarının kendine özgü dinamiklerini, kullanıcı beklentilerini ve kültürel hassasiyetlerini göz önünde bulundurarak mobil uygulama geliştirme hizmetleri sunuyorum. Yerel kültürel unsurlara ve dil özelliklerine uygun çözümler sunmak, uygulamanın hedef kitlesiyle daha güçlü ve anlamlı bir bağ kurmasını sağlar, bu da uygulamanın benimsenme oranını artırır.",
          "Geliştirdiğim uygulamalarla, Türkiye'deki işletmelerin ve bireylerin dijital dünyadaki varlıklarını güçlendirmelerine ve dijital dönüşüm süreçlerine etkin bir şekilde katkıda bulunmayı amaçlıyorum. Bu süreçte, uygulamanın keşfedilebilirliğini artırmak amacıyla yerel SEO ve uygulama mağazası optimizasyonu (ASO) stratejilerini de geliştirme sürecine entegre ediyorum."
        ],
      }
    ],
    highlights: ["Yapay zekâ entegrasyonuyla yenilikçi mobil uygulamalar","Kullanıcı deneyimi (UX) odaklı Android geliştirme","Etkili ürün dili ve kullanıcı arayüzü tasarımı","CalmerNow AI projesiyle edinilen derin deneyim"],
    faq: [
      {
        "question": "CalmerNow AI projesi neyi hedefliyor?",
        "answer": "CalmerNow AI, yapay zekâ destekli bir wellness ve odak uygulamasıdır. Kullanıcılara kişiselleştirilmiş rahatlama ve odaklanma deneyimleri sunarak zihinsel iyilik hallerini desteklemeyi amaçlar."
      },
      {
        "question": "Mobil uygulama geliştirme süreciniz nasıl işliyor?",
        "answer": "Fikir aşamasından başlayarak, detaylı tasarım, titiz geliştirme, kapsamlı test ve başarılı yayınlama süreçlerini kapsayan adımlar izliyorum. Kullanıcı geri bildirimleri ve sürekli iyileştirme, sürecin önemli bir parçasıdır."
      },
      {
        "question": "Sadece Android uygulamaları mı geliştiriyorsunuz?",
        "answer": "Odak noktam Android platformu olsa da, projenin ihtiyaçlarına ve stratejik hedeflerine göre diğer mobil platformlar için de çözüm geliştirme konusunda destek sağlayabilirim."
      },
      {
        "question": "Uygulama geliştirirken SEO'ya nasıl yaklaşıyorsunuz?",
        "answer": "Uygulama mağazası optimizasyonu (ASO) stratejilerini ve uygulamanın keşfedilebilirliğini artıracak yerel SEO prensiplerini geliştirme sürecine entegre ederek uygulamanızın daha geniş kitlelere ulaşmasını hedefliyorum."
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
      title: "Adana Yeminli Tercüman | Noter Onaylı Çeviri Hizmetleri | Yiğit Cilli",
      description: "Adana'da yeminli tercüman arayışınızda Yiğit Cilli olarak hukuki, akademik ve resmi belge çevirilerinde güvenilir noter onaylı İngilizce tercüme hizmetleri…",
      ogDescription: "Yiğit Cilli, Adana'da yeminli tercüman olarak hukuki, akademik ve resmi metinleriniz için profesyonel çeviri çözümleri sunar. Noter onaylı tercüme ihtiyaçlarınızda yanınızdayım.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Yeminli Tercüme",
      title: "Adana Yeminli Tercüman: Güvenilir ve Noter Onaylı Çeviri Hizmetleri",
      description: "Adana'da yeminli tercüman olarak, çeşitli dillerdeki metinlerinizin hukuki geçerliliğini sağlamak adına profesyonel hizmetler sunuyorum. Resmi kurumlar, akademik çalışmalar veya kişisel belgeleriniz için noter onaylı tercüme süreçlerinizde yanınızdayım. İhtiyaçlarınıza özel, titiz ve zamanında çeviri çözümleri için benimle iletişime geçebilirsiniz.",
      image: {
        src: "/images/translation.webp",
        alt: "Yiğit Cilli profesyonel tercüme hizmetleri",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercüme Nedir ve Neden Önemlidir?",
        paragraphs: [
          "Yeminli tercüme, yeminli tercüman yetkisine sahip bir profesyonel tarafından yapılan ve tercümanın kaşesi ile imzasıyla belgenin orijinaline uygunluğunu tasdik ettiği çeviri türüdür. Bu süreç, özellikle hukuki ve resmi geçerlilik gerektiren belgeler için büyük önem taşır. Bir yeminli tercüman olarak, çevirisi yapılan metnin anlam bütünlüğünü, terminolojisini ve biçimini orijinaline sadık kalarak aktarma sorumluluğunu üstlenirim.",
          "Resmi kurumlar, mahkemeler veya uluslararası kuruluşlar tarafından talep edilen belgelerde, yeminli tercümanın onayı, çevirinin güvenilirliğini ve doğruluğunu kanıtlar. Bu sayede, belgelerinizin Türkiye içinde veya yurt dışında sorunsuz bir şekilde kabul edilmesi sağlanır. Her bir çeviri projesinde, belgenin niteliğine uygun titiz bir çalışma prensibiyle hareket ederim."
        ],
      },
      {
        heading: "Noter Onaylı Tercüme Süreci",
        paragraphs: [
          "Noter onaylı tercüme, yeminli tercüman tarafından çevrilen bir belgenin, noter tarafından tasdik edilmesi işlemidir. Bu onay, çevirinin yeminli tercüman tarafından yapıldığını ve tercümanın imzasının noterde kayıtlı olduğunu doğrular. Adana'da noter onaylı İngilizce tercüme hizmeti arayanlar için, bu süreç, özellikle diploma, transkript, vekaletname, evlilik cüzdanı gibi kritik belgelerin resmiyet kazanması açısından vazgeçilmezdir. Detaylı bilgi için <a href=\"/adanada-noter-onayli-ingilizce-tercume-hizmeti/\">Adana'da Noter Onaylı İngilizce Tercüme Hizmeti</a> sayfamı ziyaret edebilirsiniz.",
          "Çevirisi yapılan belgenin niteliğine göre noter onayı gerekip gerekmediği değişiklik gösterebilir. Genellikle yurt dışı başvuruları, hukuki süreçler veya resmi kurumlara sunulacak evraklar için noter onayı talep edilir. Sürecin her aşamasında, belgenizin doğru ve eksiksiz bir şekilde hazırlanarak noter onayına sunulması için gerekli desteği sağlarım."
        ],
      },
      {
        heading: "Uzmanlık Alanlarım: Hukuki ve Akademik Tercüme",
        paragraphs: [
          "Hukuki tercüme, özel bir uzmanlık ve terminoloji bilgisi gerektiren hassas bir alandır. Sözleşmeler, mahkeme kararları, kanun metinleri, vekaletnameler ve diğer hukuki belgeler, en küçük bir hata veya yanlış yorumlamaya mahal vermeden çevrilmelidir. Bu alandaki deneyimimle, hukuki metinlerinizin yasal bağlamına uygun, doğru ve anlaşılır bir şekilde çevrilmesini temin ederim.",
          "Akademik tercüme ise tezler, makaleler, araştırma raporları ve bilimsel yayınlar gibi metinleri kapsar. Bilimsel terminolojinin ve akademik dilin doğru kullanımı, çevirinin kalitesi ve kabul edilebilirliği için hayati öneme sahiptir. İngilizce tercüme konusunda özellikle akademik alanda birçok çalışmaya imza atmış biri olarak, akademik metinlerinizin uluslararası standartlara uygun bir şekilde çevrilmesine özen gösteririm."
        ],
      },
      {
        heading: "Adana'da Yeminli Tercüman İhtiyaçlarınız İçin",
        paragraphs: [
          "Adana'da yeminli tercüman arayışınızda, yerel dinamikleri bilen ve ihtiyaçlarınıza hızlı çözümler sunabilen bir profesyonel olarak hizmet veriyorum. Pasaport, kimlik, doğum belgesi gibi kişisel evraklardan şirket ana sözleşmeleri veya ticari anlaşmalara kadar geniş bir yelpazede resmi belge çevirisi yapmaktayım. <a href=\"/adana-yeminli-tercuman-yigit-cilli/\">Adana Yeminli Tercüman Yiğit Cilli</a> olarak, çeviri süreçlerinizi daha etkin ve kişisel bir yaklaşımla yönetme imkanı bulursunuz.",
          "Yeminli tercümanın görevleri, sadece çeviriyi yapmakla sınırlı değildir; aynı zamanda çevirinin doğruluğunu ve eksiksizliğini garanti altına almaktır. Bu sorumluluk bilinciyle, her projeye özenle yaklaşır ve çevirilerinizi zamanında teslim ederim. <a href=\"/adana-yeminli-tercumanin-gorevleri/\">Yeminli Tercümanın Görevleri</a> hakkında daha fazla bilgi edinebilirsiniz. Çeviri ihtiyaçlarınız için güvenilir bir çözüm ortağı arıyorsanız, benimle iletişime geçmekten çekinmeyin."
        ],
      }
    ],
    highlights: ["Profesyonel ve güvenilir yeminli tercüme hizmetleri","Noter onaylı resmi belge çevirileri","Hukuki ve akademik metinlerde uzmanlık","Adana merkezli yerel çeviri çözümleri"],
    faq: [
      {
        "question": "Yeminli tercümanlık nedir?",
        "answer": "Yeminli tercümanlık, noter huzurunda yemin ederek, çevirisi yapılan belgelerin orijinaline sadık ve doğru olduğunu beyan etme yetkisine sahip profesyoneller tarafından sunulan bir hizmettir. Bu yetki, çevirilerin resmi kurumlarda geçerli olmasını sağlar."
      },
      {
        "question": "Noter onaylı tercüme her belge için gerekli midir?",
        "answer": "Noter onaylı tercüme her zaman zorunlu değildir. Genellikle resmi kurumlar, mahkemeler, eğitim kurumları veya yurt dışı başvurular gibi hukuki geçerlilik gerektiren durumlarda talep edilir. Belgenizin kullanım amacına göre noter onayı gerekip gerekmediği belirlenir."
      },
      {
        "question": "Hangi dillerde yeminli tercüme hizmeti sunuyorsunuz?",
        "answer": "Başta İngilizce olmak üzere, belirli dillerde yeminli tercüme hizmeti sunmaktayım. Özellikle İngilizce tercüme konusunda hukuki, akademik ve ticari alanlarda yoğun olarak çalışmaktayım. Diğer diller için lütfen iletişime geçerek bilgi alınız."
      },
      {
        "question": "Tercüme ücretleri nasıl belirlenir?",
        "answer": "Tercüme ücretleri, belgenin dili, karakter veya kelime sayısı, içeriğin uzmanlık düzeyi ve teslim süresi gibi faktörlere göre belirlenir. Detaylı bir fiyat teklifi almak için belgenizi benimle paylaşmanız yeterlidir."
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
      title: "Yiğit Cilli Kimdir? Yazılım, Yapay Zekâ ve Tercüme Hizmetleri | Yiğit Cilli",
      description: "Yiğit Cilli'nin yazılım, yapay zekâ, SEO ve yeminli tercüme alanlarındaki deneyimlerini keşfedin. Bilfen, Toronto ve Londra eğitimleriyle profesyonel çözümler.",
      ogDescription: "Yiğit Cilli, yazılım geliştirme, yapay zekâ çözümleri, SEO stratejileri ve yeminli tercüme alanlarında kişisel marka hizmetleri sunmaktadır. Uluslararası eğitim ve profesyonel geçmişiyle projelerinize değer katıyor.",
      ogImage: "/images/about.webp",
    },
    hero: {
      eyebrow: "Kişisel marka",
      title: "Yiğit Cilli: Yazılım, Yapay Zekâ ve Yeminli Tercüme Deneyimi",
      description: "Yiğit Cilli olarak, yazılım geliştirme, yapay zekâ uygulamaları, SEO danışmanlığı ve yeminli tercüme alanlarında kapsamlı hizmetler sunmaktayım. Uluslararası eğitim ve profesyonel kariyerimde edindiğim bilgi birikimiyle projelerinize değer katmayı hedefliyorum.",
      image: {
        src: "/images/about.webp",
        alt: "Yiğit Cilli kişisel marka ve dijital çalışmalar",
      },
    },
    blocks: [
      {
        heading: "Eğitimden Profesyonel Hayata: Küresel Bir Bakış",
        paragraphs: [
          "Eğitim hayatıma Bilfen Koleji'nde başlayan yolculuğum, Toronto ve Londra gibi şehirlerde devam etti. Bu uluslararası deneyimler, farklı kültürleri anlama ve küresel standartlarda düşünme yeteneğimi pekiştirdi. Özellikle Roehampton Üniversitesi'ndeki eğitimim, akademik ve profesyonel gelişimimde önemli bir dönüm noktası oldu.",
          "Çeşitli sektörlerde edindiğim tecrübeler, bana geniş bir perspektif kazandırdı. Toryum Group gibi önemli kurumlardaki çalışmalarım, yazılım geliştirme ve proje yönetimi konularında pratik bilgi birikimi sağlamanın yanı sıra, karmaşık sorunlara çözüm odaklı yaklaşımlar geliştirmemde etkili oldu."
        ],
      },
      {
        heading: "Yazılım ve Yapay Zekâ: Geleceğe Yönelik Çözümler",
        paragraphs: [
          "Dijital dönüşümün hız kazandığı günümüzde, yazılım geliştirme ve yapay zekâ uygulamaları iş süreçlerinin vazgeçilmez bir parçası haline gelmiştir. Frontend ve backend geliştirme, mobil uygulama geliştirme gibi alanlarda bilgi ve tecrübe sahibiyim. Veri analizi, makine öğrenimi ve doğal dil işleme gibi yapay zekâ konularında da projelerinize değer katacak çözümler sunmaktayım.",
          "Her projenin kendine özgü ihtiyaçları olduğunu bilerek, esnek ve ölçeklenebilir yazılım çözümleri tasarlıyorum. Yapay zekâ destekli sistemlerle verimliliği artırmak, iş akışlarını optimize etmek ve kullanıcı deneyimini zenginleştirmek için çalışıyorum. Bu alandaki çalışmalarım hakkında daha fazla bilgi almak için Yazılım sayfasını ziyaret edebilirsiniz."
        ],
      },
      {
        heading: "SEO ve Dijital Pazarlama Stratejileri",
        paragraphs: [
          "Online dünyada var olmak, doğru stratejilerle görünür olmak anlamına gelir. Arama motoru optimizasyonu (SEO), web sitenizin arama sonuçlarında üst sıralarda yer almasını sağlayarak potansiyel müşterilere ulaşmanızda kritik rol oynar. Anahtar kelime araştırmasından teknik SEO iyileştirmelerine, içerik stratejisinden yerel SEO çalışmalarına kadar geniş bir yelpazede danışmanlık hizmeti sunmaktayım.",
          "Markanızın dijital ayak izini güçlendirmek ve hedef kitlenize daha etkili bir şekilde ulaşmak için özelleştirilmiş SEO stratejileri geliştiriyorum. Kullanıcı deneyimini merkeze alan ve arama motoru algoritmalarına uyumlu çalışmalarla dijital varlığınızı destekliyorum."
        ],
      },
      {
        heading: "Yeminli Tercüme: Doğru ve Güvenilir İletişim",
        paragraphs: [
          "Resmi ve hukuki belgelerde doğru ve eksiksiz çeviri büyük önem taşır. Yeminli tercüme hizmetlerimle, noter onaylı ve resmi geçerliliği olan çeviriler sunarak uluslararası iletişim süreçlerinizi kolaylaştırıyorum. İngilizce-Türkçe ve Türkçe-İngilizce dillerinde akademik, teknik, hukuki ve ticari metinlerin yeminli çevirilerini titizlikle gerçekleştiriyorum.",
          "Belgelerinizin gizliliğine ve doğruluğuna azami özen göstererek, ihtiyaçlarınıza uygun çözümler üretiyorum. Pasaport, diploma, vekaletname, sözleşme gibi çeşitli evrakların yeminli tercümesi için güvenilir bir adres olarak hizmet vermekteyim. Tercüme ihtiyaçlarınız için Tercüme sayfasını inceleyebilirsiniz."
        ],
      },
      {
        heading: "Profesyonel Yaklaşım ve Değerler",
        paragraphs: [
          "Her projeye özgün bir bakış açısıyla yaklaşıyor, şeffaflık ve dürüstlük ilkeleriyle hareket ediyorum. Müşteri memnuniyetini ön planda tutarak, karşılıklı güvene dayalı uzun vadeli iş ilişkileri kurmayı amaçlıyorum. Yenilikçi çözümler sunarken, etik değerlerden ve profesyonel standartlardan ödün vermemeye özen gösteriyorum.",
          "Sürekli öğrenme ve gelişme felsefesiyle, teknolojideki ve sektördeki yenilikleri yakından takip ediyorum. Bu sayede, hizmet verdiğim alanlarda güncel ve etkili çözümler sunmaya devam ediyorum. Benimle çalışmak ve projelerinizi konuşmak için İletişim sayfasından bana ulaşabilirsiniz."
        ],
      }
    ],
    highlights: ["Yazılım Geliştirme ve Yapay Zekâ Çözümleri","SEO ile Dijital Görünürlük Stratejileri","Yeminli Tercüme ve Dil Hizmetleri","Uluslararası Eğitim ve Profesyonel Deneyim"],
    faq: [
      {
        "question": "Yiğit Cilli hangi alanlarda hizmet vermektedir?",
        "answer": "Yiğit Cilli olarak yazılım geliştirme, yapay zekâ uygulamaları, SEO danışmanlığı ve yeminli tercüme alanlarında hizmet sunmaktayım."
      },
      {
        "question": "Tercüme hizmetleri hangi dillerde verilmektedir?",
        "answer": "Başta İngilizce-Türkçe ve Türkçe-İngilizce olmak üzere, resmi ve hukuki belgeleriniz için yeminli tercüme hizmeti sunulmaktadır."
      },
      {
        "question": "Yazılım projelerinde hangi teknolojiler kullanılıyor?",
        "answer": "Frontend ve backend geliştirme, mobil uygulama geliştirme gibi çeşitli alanlarda güncel teknolojilerle esnek ve ölçeklenebilir çözümler üretilmektedir."
      },
      {
        "question": "SEO danışmanlığı neleri kapsar?",
        "answer": "SEO danışmanlığı, anahtar kelime araştırması, teknik SEO, içerik stratejisi ve yerel SEO gibi web sitenizin arama motoru görünürlüğünü artırmaya yönelik çalışmaları içerir."
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
        'Yazılım projesi, metin çevirisi veya iş birliği için kısa bir mesaj yeterli.',
    },
    blocks: [
      {
        paragraphs: [
          'Yeni bir ürün fikri, mevcut bir kod tabanı, çevrilecek bir metin veya düşünce üzerine bir yazı — konuyu birkaç cümleyle özetlemeniz yeterli.',
          'Uygun olduğunda kısa bir dönüş yaparım; net olmayan taleplerde önce konuyu birlikte çerçeveleriz.',
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
      title: "Adana Yeminli Tercüman Hizmetleri | Resmi Belge Çevirisi | Yiğit Cilli",
      description: "Adana'da yeminli tercüman arayışınızda resmi belge çevirisi ve noter onaylı tercüme hizmetleri sunuyorum. Hukuki, teknik, ticari metinleriniz için güvenilir…",
      ogDescription: "Adana ve çevresinde yeminli tercümanlık hizmetleri sunan Yiğit Cilli, resmi belgeleriniz için doğru ve zamanında çeviri çözümleri sağlar. Noter onaylı tercüme ihtiyaçlarınızda yanınızdayım.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme · Adana",
      title: "Adana Yeminli Tercüman Hizmetleri: Resmi Belgeleriniz İçin Güvenilir Çözümler",
      description: "Adana'da yeminli tercüman olarak, resmi belge çevirisi ihtiyaçlarınıza profesyonel ve titiz çözümler sunuyorum. Hukuki metinlerden ticari evraklara, akademik çalışmalardan teknik dokümanlara kadar geniş bir yelpazede noter onaylı tercüme hizmetleri sağlıyorum. Belgelerinizin doğru ve eksiksiz bir şekilde çevrilmesi, benim önceliğimdir.",
      image: {
        src: "/images/translation.webp",
        alt: "Adana yeminli tercüman Yiğit Cilli",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercüme Nedir ve Neden Önemlidir?",
        paragraphs: [
          "Yeminli tercüme, yeminli tercümanlar tarafından yapılan ve yasal geçerliliği olan çeviri türüdür. Bu süreçte, tercüman çevirinin aslına uygunluğunu ve doğruluğunu kendi imzası ve mührü ile tasdik eder. Bu sayede, çevirisi yapılan belge resmi kurumlar, noterler veya mahkemeler nezdinde kabul görür ve hukuki bir nitelik kazanır.",
          "Resmi belge çevirisi, özellikle uluslararası işlemler, vize başvuruları, şirket kuruluşları, eğitim ve sağlık süreçleri gibi pek çok alanda zorunluluktur. Adana'da sunduğum yeminli tercümanlık hizmetiyle, belgelerinizin yasal süreçlerde sorunsuz bir şekilde kullanılmasını sağlıyorum. Doğru ve güvenilir çeviriler, olası hukuki sorunların önüne geçmek için kritik öneme sahiptir."
        ],
      },
      {
        heading: "Adana'da Sunulan Tercüme Alanları",
        paragraphs: [
          "Adana ve çevresindeki müşterilerimize geniş bir yelpazede yeminli tercüme hizmetleri sunuyorum. Hukuki metinlerden (sözleşmeler, vekaletnameler, mahkeme kararları) teknik dokümanlara (kullanım kılavuzları, patentler), ticari evraklardan (fatura, bilanço, ticaret sicil gazetesi) akademik çalışmalara (diploma, transkript, tez) kadar birçok alanda resmi belge çevirisi yapmaktayım.",
          "İhtiyaç duyduğunuz tüm çeviri alanları hakkında daha fazla bilgi almak için genel tercüme hizmetleri sayfamızı ziyaret edebilirsiniz. Adana'da yeminli tercüman arayışınızda, her bir belgenin kendine özgü terminolojisine ve formatına uygun, titiz bir çalışma prensibiyle hizmet veriyorum."
        ],
      },
      {
        heading: "Noter Onaylı Tercüme Süreci",
        paragraphs: [
          "Noter onaylı tercüme, yeminli tercümanın çevirisini yaptığı belgenin noter tarafından tasdik edilmesi işlemidir. Bu süreç, belgenin ulusal ve uluslararası alanda daha yüksek bir resmiyete sahip olmasını sağlar. Adana'da noter onaylı tercüme hizmeti almak isteyenler için tüm süreci kolaylaştırıyorum; belgenizi teslim alıyor, çeviriyi yapıyor ve noter onayını tamamlayarak size teslim ediyorum.",
          "Özellikle İngilizce belgeleriniz için noter onaylı İngilizce tercüme hizmetimiz bulunmaktadır. Bu süreçte, çevirinin doğruluğu ve yeminli tercümanın imzası noter huzurunda teyit edilir. Amacım, belgelerinizin ilgili kurumlarda kabul görmesini sağlayacak, yasalara uygun ve hatasız çeviriler sunmaktır. Sürecin her aşamasında şeffaflık ve zamanında teslimat önceliğimdir."
        ],
      },
      {
        heading: "Yiğit Cilli Farkı: Güven ve Titizlik",
        paragraphs: [
          "Yiğit Cilli Tercüme Bürosu olarak, Adana'da yeminli tercümanlık hizmetlerimde güvenilirlik ve titizliği ön planda tutuyorum. Her bir çeviri projesine özenle yaklaşıyor, belgelerinizin gizliliğini ve veri güvenliğini en üst düzeyde sağlıyorum. Müşteri memnuniyeti odaklı çalışarak, beklentilerinizi karşılayacak kalitede hizmet sunmayı hedefliyorum.",
          "Deneyimim ve Adana'daki yerel bilgi birikimimle, resmi belge çevirisi ihtiyaçlarınızda size özel çözümler üretiyorum. Hızlı geri dönüşler, ulaşılabilir iletişim ve profesyonel yaklaşımım sayesinde, çeviri süreçlerinizi sorunsuz bir şekilde yönetmenize yardımcı oluyorum. İletişim sayfamızdan bana ulaşarak tercüme taleplerinizi iletebilirsiniz."
        ],
      }
    ],
    highlights: ["Resmi Belge Çevirisinde Uzmanlık","Noter Onaylı Tercüme Desteği","Adana Merkezli Hızlı Çözümler","Gizlilik ve Veri Güvenliği"],
    faq: [
      {
        "question": "Yeminli tercüme nedir?",
        "answer": "Yeminli tercüme, yeminli tercümanlar tarafından yapılan ve resmiyet kazanan çevirilerdir. Tercüman, çevirinin aslına uygunluğunu ve doğruluğunu kendi imzası ve mührü ile tasdik eder. Bu tür çeviriler, resmi kurumlar ve noterlikler nezdinde hukuki geçerliliğe sahiptir."
      },
      {
        "question": "Adana'da hangi dillerde yeminli tercüme hizmeti veriyorsunuz?",
        "answer": "Adana'da başta İngilizce olmak üzere, Almanca, Fransızca ve diğer yaygın dillerde yeminli tercüme hizmeti sunmaktayım. İhtiyaç duyduğunuz dil için benimle iletişime geçerek detaylı bilgi alabilirsiniz."
      },
      {
        "question": "Noter onaylı tercüme süreci nasıl işler?",
        "answer": "Belgenizi bana ulaştırdıktan sonra, yeminli tercümesi yapılır. Ardından, çeviri ile orijinal belge veya kopyası birlikte notere sunularak yeminli tercümanın imzasının ve mührünün noter tarafından onaylanması sağlanır. Bu işlem, belgenin resmiyetini tamamlar."
      },
      {
        "question": "Tercüme fiyatları neye göre belirlenir?",
        "answer": "Tercüme fiyatları, belgenin dili, karakter veya kelime sayısı, konusu (hukuki, teknik vb.), teslim süresi ve noter onayı gerekip gerekmediği gibi faktörlere göre değişkenlik gösterir. Net bir fiyat teklifi için belgenizi incelemem gerekmektedir."
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
      description: "Adana'da noter onaylı İngilizce tercüme ihtiyaçlarınız için güvenilir hizmet. Diploma, pasaport, vize evrakları ve resmi belgelerinizde yeminli çeviri…",
      ogDescription: "Adana'da resmi evraklarınız için noter onaylı İngilizce tercüme hizmeti sunuyoruz. Diploma, transkript, pasaport gibi belgelerinizde profesyonel ve yerel çözümler.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme · Adana",
      title: "Adana Noter Onaylı İngilizce Tercüme Hizmetleri",
      description: "Adana'da İngilizce belgelerinizin yasal geçerliliğini sağlamak için noter onaylı tercüme hizmeti sunmaktayız. Resmi kurumlar ve uluslararası başvurularınız için gerekli olan çevirilerde yanınızdayız.",
      image: {
        src: "/images/translation.webp",
        alt: "Adana noter onaylı İngilizce tercüme",
      },
    },
    blocks: [
      {
        heading: "Resmi Belgelerde Güvenilir İngilizce Tercüme",
        paragraphs: [
          "Günümüzde resmi evrakların uluslararası alanda geçerlilik kazanması, doğru ve onaylı tercümeyi zorunlu kılmaktadır. Adana'da ikamet eden veya faaliyet gösteren birey ve kurumların İngilizce belgeleri için noter onayı gerektiren durumlarda profesyonel destek sağlamaktayız. Bu süreç, belgelerinizin yurt içi ve yurt dışı makamlarca sorunsuz kabul edilmesini hedefler.",
          "Özellikle eğitim, iş veya göçmenlik gibi konularda sunulan diploma, transkript, pasaport ve vize evrakları gibi belgelerin, yeminli tercüman tarafından çevrilip noter tarafından onaylanması büyük önem taşır. Bu hizmet, belgelerinizin orijinaline sadık kalarak, hukuki geçerliliğe sahip olmasını temin eder."
        ],
      },
      {
        heading: "Hangi Belgelerde Noter Onayı Gerekir?",
        paragraphs: [
          "Noter onaylı İngilizce tercüme hizmetimiz, geniş bir yelpazedeki resmi belgeleri kapsamaktadır. Bunlar arasında akademik kariyeriniz için önemli olan diploma ve transkriptler, yurt dışı seyahat ve oturum izinleri için pasaport ve vize evrakları bulunur. Ayrıca, evlilik cüzdanı, doğum belgesi, vekaletname, şirket sözleşmeleri ve mahkeme kararları gibi hukuki nitelik taşıyan belgeler de bu hizmet kapsamında değerlendirilmektedir.",
          "Her bir belgenin kendine özgü terminolojisi ve formatı olduğundan, çeviri sürecinde titizlik ve alan bilgisi esastır. Adana bölgesinde bu tür belgeler için güvenilir bir çözüm arıyorsanız, doğru adrestesiniz. Detaylı bilgi için <a href=\"/tercume/\">tercüme hizmetleri</a> sayfamızı ziyaret edebilirsiniz."
        ],
      },
      {
        heading: "Yeminli Çeviri ve Noter Onayı Süreci",
        paragraphs: [
          "Noter onaylı tercüme süreci, belgenin yeminli bir tercüman tarafından orijinaline uygun şekilde İngilizceye çevrilmesiyle başlar. Yeminli tercüman, çevirinin doğruluğunu ve eksiksizliğini imzası ve kaşesiyle tasdik eder. Bu aşama, çevirinin resmiyet kazanmasının ilk adımıdır.",
          "Ardından, çevrilen belge ve yeminli tercümanın imzası, Adana'daki noterlikler tarafından tasdik edilir. Noter, tercümanın yetkisini ve belgenin usulüne uygunluğunu kontrol ederek onay işlemini tamamlar. Bu onay, belgenin hem Türkiye'de hem de genellikle yurt dışında resmiyet kazanmasını sağlar. Süreç hakkında daha fazla bilgi almak veya belgenizi göndermek için <a href=\"/iletisim\">iletişim</a> kurabilirsiniz."
        ],
      },
      {
        heading: "Adana'da Yerel ve Hızlı Çözümler",
        paragraphs: [
          "Adana'da noter onaylı İngilizce tercüme hizmeti sunarak, yerel ihtiyaçlara hızlı ve etkin çözümler getirmeyi hedefliyoruz. Belgelerinizin hassasiyetinin farkında olarak, zamanında teslimat ve gizlilik prensiplerine bağlı kalmaktayız. Acil durumlarda bile, noter onayı gerektiren çevirileriniz için esnek ve çözüm odaklı yaklaşımlar sunmaktayız.",
          "Profesyonel yaklaşımımız ve yerel bilgi birikimimiz sayesinde, Adana'daki bireylerin ve kurumsal müşterilerin resmi belge çeviri süreçlerini kolaylaştırmayı amaçlıyoruz. Güvenilir ve doğru tercüme için <a href=\"/adana-yeminli-tercuman-yigit-cilli/\">yeminli tercüman</a> desteği alabilirsiniz."
        ],
      }
    ],
    highlights: ["Adana'da noter onaylı İngilizce tercüme","Diploma, pasaport, vize evrakları çevirisi","Resmi belgelerde yeminli çeviri","Hızlı ve güvenilir hizmet"],
    faq: [
      {
        "question": "Noter onaylı İngilizce tercüme nedir?",
        "answer": "Noter onaylı İngilizce tercüme, yeminli bir tercüman tarafından yapılan çevirinin, noterde tasdik edilerek resmiyet kazanması işlemidir. Bu sayede belge, ulusal ve uluslararası kurumlarda geçerlilik kazanır."
      },
      {
        "question": "Adana'da hangi belgeler için noter onaylı tercüme yapıyorsunuz?",
        "answer": "Diploma, transkript, pasaport, vize evrakları, evlilik cüzdanı, doğum belgesi, vekaletname, şirket sözleşmeleri ve mahkeme kararları gibi birçok resmi belge için noter onaylı İngilizce tercüme hizmeti sunuyoruz."
      },
      {
        "question": "Tercüme süreci ne kadar sürer?",
        "answer": "Tercüme süresi, belgenin uzunluğuna, karmaşıklığına ve noterlikteki yoğunluğa göre değişiklik gösterebilir. Genellikle kısa belgeler için aynı gün veya ertesi gün içinde tamamlanmaktadır. Detaylı bilgi için belgenizi göndererek süre bilgisi alabilirsiniz."
      },
      {
        "question": "Belgelerimi size nasıl ulaştırabilirim?",
        "answer": "Belgelerinizi e-posta yoluyla dijital olarak gönderebilir veya Adana'daki ofisimize şahsen teslim edebilirsiniz. Çeviri tamamlandığında, onaylı belgelerinizi yine şahsen teslim alabilir veya kargo ile adresinize gönderilmesini talep edebilirsiniz."
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
      title: "Adana Yeminli Tercüman Ne İş Yapar? Görevleri ve Süreçler | Yiğit Cilli",
      description: "Adana'da yeminli tercümanın görevlerini, yeminli çeviri sürecini ve noter onaylı tercümenin önemini keşfedin. Resmi belge çevirileriniz için güvenilir çözümler.",
      ogDescription: "Adana'da yeminli tercümanların rolünü ve resmi çeviri süreçlerini detaylıca öğrenin. Yeminli çeviri ve noter onaylı tercüme hakkında bilmeniz gerekenler.",
      ogImage: "/images/translation.webp",
    },
    hero: {
      eyebrow: "Tercüme",
      title: "Adana'da Yeminli Tercümanların Görevleri ve Yeminli Çeviri Süreci",
      description: "Yeminli tercümanlar, hukuki geçerliliği olan belgelerin doğru ve eksiksiz çevirisini yaparak önemli bir köprü görevi görür. Bu metin, Adana'da yeminli tercümanların üstlendiği sorumlulukları ve yeminli çeviri sürecinin nasıl işlediğini açıklamaktadır. Resmi işlemleriniz için bu sürecin detaylarını anlamak faydalı olacaktır.",
      image: {
        src: "/images/translation.webp",
        alt: "Yeminli tercüman görevleri",
      },
    },
    blocks: [
      {
        heading: "Yeminli Tercüman Kimdir ve Ne İş Yapar?",
        paragraphs: [
          "Yeminli tercüman, noter huzurunda yemin ederek, çevirilerini resmi ve hukuki geçerlilik taşıyan belgeler haline getirme yetkisine sahip kişidir. Bu yetki, çevirinin doğruluğu ve eksiksizliği konusunda yasal sorumluluk almasını gerektirir. Bir yeminli tercüman, kaynak metnin anlamını ve ruhunu hedef dile en uygun şekilde aktarırken, aynı zamanda terminolojik tutarlılığı ve biçimsel uygunluğu da gözetir. Bu bağlamda, \"yeminli tercüman ne iş yapar\" sorusunun cevabı, sadece dil aktarımı değil, aynı zamanda güven ve sorumluluk temelli bir hizmet sunmaktır.",
          "Özellikle Adana gibi büyük şehirlerde, çeşitli resmi kurumlar ve bireyler arasında belge alışverişi yoğun olduğundan, yeminli tercümanlara olan ihtiyaç oldukça fazladır. Yeminli tercümanlar, kimlik belgelerinden hukuki sözleşmelere, akademik transkriptlerden ticari anlaşmalara kadar geniş bir yelpazedeki belgelerin çevirisini yapabilir. Bu süreçte, çevirinin her aşamasında azami dikkat ve profesyonellik esastır. Adana yeminli tercüman hizmetleri için daha fazla bilgiye buradan ulaşabilirsiniz."
        ],
      },
      {
        heading: "Yeminli Çeviri Nedir ve Neden Gereklidir?",
        paragraphs: [
          "\"Yeminli çeviri nedir\" sorusu, genellikle resmi veya hukuki geçerliliği olan belgeler söz konusu olduğunda akla gelir. Yeminli çeviri, yeminli tercüman tarafından yapılan ve tercümanın kaşesi ile imzası bulunan, doğruluğu tasdik edilmiş çeviridir. Bu tür çeviriler, genellikle mahkemeler, konsolosluklar, üniversiteler ve diğer resmi daireler tarafından talep edilir. Amacı, çevrilen belgenin orijinal belge ile aynı hukuki değere ve geçerliliğe sahip olmasını sağlamaktır.",
          "Birçok uluslararası işlem veya yerel resmi süreç için yeminli çeviri zorunluluktur. Örneğin, yurt dışında eğitim başvuruları, vize işlemleri, evlilik veya boşanma süreçleri, miras davaları gibi durumlarda sunulan belgelerin yeminli tercüme edilmiş olması şart koşulabilir. Bu durum, çevirinin güvenilirliğini ve kabul edilebilirliğini artırır. Genel tercüme hizmetleri hakkında detaylı bilgi için ilgili sayfamızı ziyaret edebilirsiniz."
        ],
      },
      {
        heading: "Noter Onaylı Tercüme Süreci Nasıl İşler?",
        paragraphs: [
          "Yeminli çevirinin bir üst aşaması olan \"noter onaylı tercüme süreci\", çevirinin hukuki geçerliliğini pekiştiren bir adımdır. Bu süreç, yeminli tercüman tarafından tamamlanan çevirinin noter tarafından onaylanmasıyla gerçekleşir. Noter, çevirinin içeriğini değil, yeminli tercümanın imzasının ve kaşesinin geçerliliğini tasdik eder. Bu onay, belgenin yurt içinde ve yurt dışında daha geniş bir kabul görmesini sağlar.",
          "Süreç genellikle şu adımları içerir: Öncelikle belge, ilgili dilde uzmanlaşmış bir yeminli tercüman tarafından çevrilir. Ardından, tercüman çeviriyi imzalar ve kaşeler. Son olarak, bu çeviri belgesi noter huzuruna götürülerek noter tarafından tasdik edilir. Adana'da noter onaylı İngilizce tercüme hizmetleri hakkında daha fazla bilgi almak için ilgili sayfayı ziyaret edebilirsiniz."
        ],
      },
      {
        heading: "Resmi Çeviri Belgeleri ve Kullanım Alanları",
        paragraphs: [
          "\"Resmi çeviri belgeleri\" terimi, yeminli veya noter onaylı çeviri gerektiren geniş bir belge yelpazesini kapsar. Nüfus kayıt örnekleri, pasaportlar, kimlik kartları, evlilik cüzdanları, boşanma kararları, mahkeme tutanakları, vekaletnameler, muvafakatnameler gibi kişisel ve hukuki belgeler bu kategoriye girer. Ayrıca diploma, transkript, denklik belgesi gibi akademik evraklar da resmi çeviriye ihtiyaç duyar.",
          "Bu belgelerin kullanım alanları oldukça çeşitlidir. Yurt dışı eğitim başvurularından iş kurma süreçlerine, vize başvurularından uluslararası ticari anlaşmalara kadar pek çok alanda resmi çeviriler hayati öneme sahiptir. Yeminli tercümanların bu alandaki titiz çalışması, belgelerin doğru ve güvenilir bir şekilde çevrilerek ilgili makamlara sunulmasına yardımcı olur."
        ],
      }
    ],
    highlights: ["Belgelerin hukuki geçerliliğini sağlama.","Resmi kurumlarca kabul edilen çeviriler sunma.","Gizlilik ve veri güvenliğine özen gösterme.","Doğru terminoloji ve dilbilgisi kullanımı."],
    faq: [
      {
        "question": "Yeminli tercüman her belgeyi çevirebilir mi?",
        "answer": "Yeminli tercümanlar, yemin ettikleri dillerde ve genellikle uzmanlık alanlarına giren her türlü resmi veya özel belgeyi çevirebilirler. Ancak bazı belgeler özel uzmanlık gerektirebilir ve bu durumda ilgili alanda deneyimli bir tercümanla çalışmak önemlidir."
      },
      {
        "question": "Yeminli çeviri ile normal çeviri arasındaki temel fark nedir?",
        "answer": "Temel fark, yeminli çevirinin resmi ve hukuki geçerlilik taşımasıdır. Yeminli tercüman tarafından imzalanıp kaşelenen bu çeviriler, resmi makamlarca kabul görürken, normal çeviriler genellikle kişisel kullanım veya bilgi amaçlıdır ve resmi geçerliliği yoktur."
      },
      {
        "question": "Noter onayı neden gereklidir ve her zaman şart mıdır?",
        "answer": "Noter onayı, yeminli tercümanın imzasının ve kaşesinin doğruluğunu tasdik ederek çevirinin hukuki geçerliliğini uluslararası alanda güçlendirir. Her zaman şart olmamakla birlikte, özellikle yurt dışı işlemleri, vize başvuruları veya bazı resmi kurumlar tarafından talep edilebilir. Belgenin kullanılacağı yere göre gereklilik değişebilir."
      },
      {
        "question": "Adana'da yeminli tercüman seçerken nelere dikkat etmeliyim?",
        "answer": "Adana'da yeminli tercüman seçerken tercümanın yetkinliğini, deneyimini, ilgili dillerdeki uzmanlığını ve özellikle çevrilecek belgenin türüne göre uzmanlık alanını göz önünde bulundurmak önemlidir. Güvenilirlik ve zamanında teslimat da önemli kriterlerdir."
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
      title: "Yazılım, Yapay Zekâ, SEO ve Tercüme Makaleleri | Yiğit Cilli",
      description: "Yazılım, yapay zekâ, SEO, tercüme ve kişisel gelişim üzerine güncel makaleler ve analizler. Yiğit Cilli'nin bilgi birikimiyle hazırlanan özgün içerikler.",
      ogDescription: "Yiğit Cilli'nin yazılım, yapay zekâ, SEO, tercüme ve kişisel gelişim alanlarındaki deneyimlerini paylaştığı makaleler merkezine hoş geldiniz.",
      ogImage: "/images/stoicism.webp",
    },
    hero: {
      eyebrow: "Yazılar",
      title: "Yazılım, Yapay Zekâ, SEO ve Kişisel Gelişim Makaleleri Merkezi",
      description: "Dijital dünyanın dinamiklerini anlamak ve kişisel gelişiminize katkıda bulunmak için hazırladığım makalelerle bu alanda bir kaynak oluşturmayı hedefliyorum. Yazılım, yapay zekâ, SEO ve tercüme konularındaki güncel gelişmeleri ve kişisel tecrübelerimi burada bulabilirsiniz.",
      image: {
        src: "/images/stoicism.webp",
        alt: "Makaleler ve düşünce yazıları",
      },
    },
    blocks: [
      {
        heading: "Yazılım Dünyasından Güncel Bakış Açıları",
        paragraphs: [
          "Yazılım geliştirme süreçleri, yeni teknolojiler ve sektördeki yenilikler üzerine düzenli olarak içerikler sunuyorum. Modern yazılım mimarileri, kodlama pratikleri ve dijital dönüşümün yazılım üzerindeki etkileri gibi konulara detaylıca değiniyorum. Bu bölüm, hem yazılım profesyonellerine hem de bu alana ilgi duyanlara yönelik bilgilendirici ve ufuk açıcı yazıları barındırıyor.",
          "Yapay zekâ destekli araçların yazılım geliştirmedeki rolü, otomasyonun avantajları ve bulut tabanlı çözümlerin entegrasyonu gibi başlıklar altında derinlemesine analizler sunuyorum. Yazılım projelerinde karşılaşılan yaygın zorluklar ve bu zorluklara yönelik pratik çözüm önerileri de makalelerimin odak noktalarından biridir, böylece okuyucularım kendi projelerinde karşılaştıkları engelleri aşma konusunda ilham bulabilirler."
        ],
      },
      {
        heading: "Yapay Zekâ ve Geleceğin Teknolojileri",
        paragraphs: [
          "Yapay zekâ (YZ), günümüzün en heyecan verici ve dönüştürücü alanlarından biri olarak hayatımızın her köşesine nüfuz etmektedir. Bu bölümde, makine öğrenimi algoritmalarından doğal dil işlemeye, bilgisayar görüşünden robotik süreç otomasyonuna kadar geniş bir yelpazede yapay zekâ uygulamalarını inceliyorum. YZ'nin iş dünyasındaki ve günlük hayattaki potansiyelini, aynı zamanda etik boyutlarını ve toplumsal etkilerini tartışıyorum.",
          "Geleceğin teknolojileri arasında yapay zekânın konumu ve bu teknolojilerin farklı sektörlere entegrasyonu üzerine düşüncelerimi ve analizlerimi paylaşıyorum. Veri bilimi, büyük veri analizi ve akıllı sistemler gibi kavramların, iş süreçlerini nasıl optimize ettiğini ve yeni iş modelleri ile fırsatlar yarattığını detaylıca ele alıyorum. Bu sayede okuyucular, YZ'nin gelecekteki rolünü daha iyi kavrayabilirler."
        ],
      },
      {
        heading: "SEO ile Dijital Görünürlük Kazanımı",
        paragraphs: [
          "Bir web sitesinin veya kişisel markanın dijital dünyada öne çıkması için arama motoru optimizasyonu (SEO) kritik bir rol oynar ve doğru stratejilerle büyük fark yaratır. Bu bölümde, yerel SEO stratejilerinden teknik SEO uygulamalarına, anahtar kelime araştırmasından içerik optimizasyonuna kadar birçok konuda pratik bilgiler sunuyorum. Amacım, dijital varlığınızı güçlendirmenize ve hedef kitlenize ulaşmanıza yardımcı olmaktır.",
          "Arama motorlarının çalışma prensipleri, algoritma güncellemeleri ve kullanıcı deneyiminin SEO üzerindeki etkisi gibi konuları detaylı bir şekilde inceliyorum. Doğru SEO yaklaşımlarıyla organik trafik elde etmenin ve hedef kitlenize ulaşmanın yollarını gösteriyorum. Aynı zamanda, yeminli tercüme hizmetleri gibi spesifik alanlar için özelleştirilmiş SEO stratejilerine de değiniyorum, bu sayede niş alanlarda da görünürlük artırılabilir."
        ],
      },
      {
        heading: "Tercüme, Kişisel Gelişim ve Stoacılık Yazıları",
        paragraphs: [
          "Yeminli tercüme alanındaki uzun yıllara dayanan deneyimlerimden yola çıkarak, bu sektördeki önemli noktaları ve çeviri süreçlerinin inceliklerini paylaşıyorum. Dilin gücü ve kültürel aktarımın önemi üzerine bilgilendirici yazılar kaleme alıyorum. Aynı zamanda, kişisel gelişim yolculuğunda karşılaşılan zorluklar, öğrenme süreçleri ve sürekli gelişim felsefesi üzerine derinlemesine düşüncelerimi aktarıyorum.",
          "Kişisel markalaşma, zaman yönetimi ve verimli çalışma alışkanlıkları gibi konularda da değerli makaleler bulabilirsiniz. Özellikle Stoacılık felsefesinin günümüz dünyasındaki yeri ve kişisel gelişim üzerindeki etkileri üzerine derinlemesine yazılar sunuyorum. Bu kadim felsefenin modern hayattaki pratik uygulamalarını keşfetmek için 'Stoacılık' sayfamı ziyaret edebilirsiniz."
        ],
      }
    ],
    highlights: ["Yazılım dünyasındaki güncel gelişmeleri takip edin.","Yapay zekânın iş ve yaşamdaki yerini keşfedin.","SEO ile dijital görünürlüğünüzü artırın.","Tercüme, kişisel gelişim ve Stoacılık üzerine düşünceler edinin."],
    faq: [
      {
        "question": "Bu makaleler kimlere yöneliktir?",
        "answer": "Makalelerim, yazılım, yapay zekâ, SEO ve tercüme alanlarında bilgi edinmek isteyen profesyonellere, öğrencilere ve meraklılara yöneliktir. Ayrıca kişisel gelişim ve Stoacılık felsefesine ilgi duyan herkes için de içerikler bulunmaktadır."
      },
      {
        "question": "Yazılım makalelerinde hangi konular işleniyor?",
        "answer": "Yazılım makalelerinde modern yazılım mimarileri, kodlama pratikleri, yapay zekâ destekli geliştirme araçları, bulut çözümleri ve sektörel yenilikler gibi konulara odaklanılmaktadır."
      },
      {
        "question": "Yapay zekâ ve SEO üzerine pratik bilgiler bulabilir miyim?",
        "answer": "Evet, yapay zekâ bölümünde algoritmalar ve uygulamalar, SEO bölümünde ise yerel SEO, teknik SEO, anahtar kelime araştırması ve içerik optimizasyonu gibi konularda pratik bilgiler ve stratejiler sunulmaktadır."
      },
      {
        "question": "Stoacılık felsefesi hakkında daha fazla bilgiye nasıl ulaşabilirim?",
        "answer": "Stoacılık felsefesi üzerine daha detaylı yazılarımı ve analizlerimi '/stoacilik/' sayfamda bulabilirsiniz. Bu sayfadaki içerikler, felsefenin temel prensiplerini ve günümüzdeki uygulanabilirliğini ele almaktadır."
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
          'KVKK kapsamındaki talepleriniz için hello@yigitcilli.com adresine yazabilirsiniz. Politika gerektiğinde güncellenir; güncel sürüm bu sayfada yayımlanır.',
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
