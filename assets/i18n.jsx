const SUPPORTED_LANGUAGES = ["en", "tr"];
const DEFAULT_LANGUAGE = "en";
const LANGUAGE_STORAGE_KEY = "moss-language";
const APP_STORE_URL = "https://apps.apple.com/app/moss-plant-care-rescue/id6762568960";

const I18N = {
  en: {
    languageName: "English",
    nav: {
      features: "Features",
      about: "About",
      support: "Support",
      contact: "Contact",
      download: "Download",
    },
    footer: {
      description: "Identify any plant with your camera and keep every leaf thriving with gentle, tailored care reminders.",
      appStore: "App Store",
      product: "Product",
      support: "Support",
      legal: "Legal",
      helpCenter: "Help Center",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      eula: "EULA",
      copyright: "© 2026 Moss. All rights reserved.",
      made: "Made with care for plant lovers.",
    },
    home: {
      calm: {
        eyebrow: "Plant identifier & care · iOS",
        title: <>Any plant, <em>understood</em>.<br/>Every leaf, <em>thriving</em>.</>,
        body: "Point your camera at a plant to identify it in seconds. Moss learns your home and sends gentle reminders so your greenery never misses a drink.",
        primary: "Download for iOS",
        secondary: "See features →",
      },
      editorial: {
        label: "No. 01 — Spring issue · Moss for iOS",
        title: <>A quieter way to keep plants <em>happy</em>.</>,
        body: "Moss is a pocket-sized plant keeper: identification, watering, light, and humidity, all in one kind app. Built for people who love their plants more than their spreadsheets.",
        primary: "Download for iOS",
        secondary: "Read features",
        caption: "Fig. 1 — Your garden, always close at hand.",
      },
      playful: {
        sticker: "New · Smart care coach",
        title: <>Meet <span className="underline-wavy">Moss</span> — the friendliest way to <em>parent a plant</em>.</>,
        body: "Identify 14,000+ species in a snap. Get reminders that actually fit your plant's mood. Build a little indoor jungle you're proud of.",
        primary: "Get Moss — free",
        secondary: "How it works",
        water: "Water Friday",
        light: "Bright indirect",
        match: "98% match",
      },
      stats: [
        ["14,000+", "plant species"],
        ["4.8 ★", "App Store rating"],
        ["Free", "to try"],
      ],
      featuresEyebrow: "What's inside",
      featuresTitle: "Everything your plants need, nothing they don't.",
      features: [
        ["Instant identification", "Snap a photo, get the species, common names, and toxicity in under two seconds."],
        ["Smart watering", "Reminders tuned to each plant's light, pot size, and your local weather."],
        ["Light checker", "Point at a window to measure lux and find the happiest spot in your home."],
        ["Health diagnosis", "Upload a troubled leaf — Moss spots pests, nutrient gaps, and over-watering."],
        ["Care library", "Friendly guides for 14,000+ species, written with scientists and growers."],
        ["Gentle nudges", "No pushy notifications. Just the right reminder, at the right moment."],
      ],
      howEyebrow: "How it works",
      howTitle: "Three gentle steps from stranger to sprout-parent.",
      steps: [
        ["01", "Scan", "Open the camera and frame any plant. Works on photos too."],
        ["02", "Identify", "Moss names the species and pulls its complete care profile."],
        ["03", "Care", "Build a routine that adapts to season, pot, and your schedule."],
      ],
      quote: <>“I've killed more plants than I'd like to admit. Moss is the first app that actually <em>taught</em> me what my pothos needed — and it's been thriving for eight months.”</>,
      quoteName: "Leila K.",
      quoteMeta: "Brooklyn, NY · 12 plants",
      finalTitle: <>Plant confidence,<br/>delivered one leaf at a time.</>,
      finalBody: "Free on iPhone. No account required to try.",
      finalCta: "Download on the App Store",
    },
    featuresPage: {
      eyebrow: "Features",
      title: "A kind companion for every plant in your home.",
      body: "Moss combines a state-of-the-art plant identifier with a care system that actually adapts — to your light, your pot, your schedule, and the seasons.",
      rows: [
        {
          eyebrow: "Identify",
          title: "Know the name of every plant you meet.",
          desc: "Moss identifies 14,000+ species from a single photo: house plants, garden plants, succulents, cacti, and trees. It works on leaves, flowers, bark, or whole plants.",
          bullets: ["Confidence score and similar species", "Toxicity flags for pets and children", "Local vs. invasive species notes"],
          variant: "scan",
        },
        {
          eyebrow: "Organize",
          title: "A garden that lives in your pocket.",
          desc: "Give every plant a name, a home, and a photo history. Moss remembers where each one lives so reminders stay tuned to its specific light and temperature.",
          bullets: ["Auto-grouped by room and light", "Photo timeline for every plant", "Quick-swipe to log water, food, and mist"],
          variant: "library",
          reverse: true,
        },
        {
          eyebrow: "Care",
          title: "Reminders that listen before they nudge.",
          desc: "Moss adapts to your local weather and each plant's pot size. Skip a day? Moss re-plans. Going away? Schedule a pause — your plants will forgive you.",
          bullets: ["Weather-aware watering", "Gentle fertilizer & misting schedules", "Diagnose yellowing leaves with a photo"],
          variant: "care",
        },
      ],
      gridEyebrow: "And a few small delights",
      gridTitle: "Thoughtful, to the roots.",
      grid: [
        ["Offline-friendly", "Your plants, notes, and care reminders work without a signal."],
        ["No ads, ever", "A calm experience, funded by its users."],
        ["Guest-friendly", "Use Moss without an account — sign in only when you want."],
        ["HomeKit friendly", "Sync reminders with your smart home routines."],
        ["Privacy first", "Photos for identification are sent securely; the rest stay on your device."],
        ["Seasonal tuning", "Care plans shift with daylight and humidity."],
      ],
      finalTitle: "Ready to grow?",
      finalBody: "Free on iPhone. Premium features optional.",
      finalCta: "Download on the App Store",
    },
    download: {
      eyebrow: "Available now on iPhone",
      title: <>Bring <em>Moss</em> home.</>,
      body: "Free to download. Works beautifully on iOS 16 and later. Premium features are optional.",
      cta: "Download on the App Store",
      qrTitle: "Scan to install",
      qrBody: "Point your iPhone camera at the code.",
      requirements: [
        ["Requirements", "iPhone running iOS 16 or later. Also available on iPad and iPod touch."],
        ["Size", "86 MB. Your library and care reminders work offline."],
        ["Languages", "English, Turkish, Spanish, French, German, Japanese, Korean, Portuguese."],
        ["Pricing", "Free to download. Moss Premium is $2.99/week, $9.99/month, or $34.99/year, with a 3-day free trial on the monthly and annual plans."],
      ],
    },
    about: {
      eyebrow: "About",
      title: <>We build tools that make plant care feel like <em>a kindness</em>, not a chore.</>,
      storyTitle: "Our story",
      story: [
        "Moss began in a sunlit apartment in Istanbul in 2023, when a wilting monstera convinced me that plant care software could be warmer, smarter, and far less nagging than what I'd tried.",
        "Moss is designed, built, and maintained by one independent developer in Istanbul. I obsess over two things: identification accuracy, and the tone of every single notification Moss sends.",
        "Moss is independent and proud to charge a simple, honest price for Premium. I'll never sell your data, and I'll never interrupt you with ads.",
      ],
      stats: [
        ["14k+", "species identified"],
        ["230k", "plants being cared for"],
        ["4.8 ★", "average rating"],
        ["1", "independent developer"],
      ],
      valuesEyebrow: "What we believe",
      valuesTitle: "Gentle software for living things.",
      values: [
        ["01", "Quiet by default", "We count every notification. If it isn't useful, we don't send it."],
        ["02", "Accurate, with humility", "We show confidence scores and surface alternatives. A plant is not a guess."],
        ["03", "Private, on purpose", "We send a photo to our servers only to identify or diagnose a plant — everything else stays on your device."],
        ["04", "Honest pricing", "No dark patterns, no tricks. Cancel anytime in one tap."],
      ],
      finalTitle: "Join us on the journey.",
      finalBody: "Give Moss a try — your plants will thank you.",
      finalCta: "Download on the App Store",
    },
    support: {
      eyebrow: "Support",
      title: "How can we help?",
      body: <>Answers to the questions we hear most. Can't find what you're looking for? Write us at <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>.</>,
      quick: [
        ["✉", "Email us", "Typical reply within one business day.", "mailto:mossplant@gmail.com"],
        ["💬", "Contact form", "Share screenshots and device info easily.", "contact.html"],
        ["📖", "User guide", "Deep-dive tutorials and pro tips.", "support.html#faq"],
      ],
      faqs: [
        ["Getting started", [
          ["How accurate is plant identification?", "Moss correctly identifies house plants 98% of the time and garden plants about 95% of the time. When we're unsure, we show a confidence score and a list of similar species so you can pick the right one."],
          ["Does Moss work without an internet connection?", "Your saved plants, notes, and care reminders work offline. Identifying or diagnosing a plant needs an internet connection, because Moss does that on our servers rather than on your device. Syncing across devices also needs a connection."],
          ["Is Moss free?", "Moss is free to download and try. Moss Premium unlocks unlimited identifications and advanced diagnostics for $2.99/week, $9.99/month, or $34.99/year. The monthly and annual plans include a 3-day free trial."],
        ]],
        ["Care & reminders", [
          ["Why isn't Moss reminding me to water?", "Open Settings → Notifications and make sure Moss is allowed to send alerts. If reminders still don't arrive, tell the plant its current pot size and soil — Moss uses those to schedule accurately."],
          ["Can I pause reminders while I'm away?", "Yes. From the plant detail screen, tap the menu and choose “Pause care” with an end date. Moss will gently resume your schedule when you return."],
          ["My plant looks sick. Can Moss help?", "Open the plant, tap “Diagnose”, and take a clear photo of the affected area. Moss analyzes it on our servers and suggests next steps."],
        ]],
        ["Privacy & data", [
          ["What does Moss do with my photos?", "When you identify or diagnose a plant, that photo is sent to our servers and our AI provider to generate your result, and it is not used to train AI models. Other photos stay on your device unless you use a feature like sync or backup. See our Privacy Policy for details."],
          ["Can I export my plant history?", "Yes. Settings → Data → Export creates a JSON file with every plant, photo, and log entry you've saved."],
          ["How do I delete my account?", "Settings → Account → Delete account. This permanently removes all data from our servers within 30 days. You can also email mossplant@gmail.com."],
        ]],
        ["Billing", [
          ["How do I cancel Moss Premium?", "Open the iOS Settings app → tap your name → Subscriptions → Moss → Cancel. Your Premium features remain active until the end of the billing period."],
        ]],
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Say hello.",
      body: "Questions, feedback, bug reports, or just plant pictures — we read every message.",
      cards: [
        ["Email", "mossplant@gmail.com", "We reply within one business day."],
        ["Press", "mossplant@gmail.com", "For interviews, review copies, and media kits."],
        ["Mailing address", "Istanbul / Turkiye", ""],
      ],
      form: {
        name: "Your name",
        email: "Email",
        topic: "Topic",
        message: "Message",
        send: "Send message",
        sentTitle: "Thanks — we got it.",
        sentBody: "You'll hear back from us at",
        fallbackEmail: "your email",
        topics: ["General question", "Bug report", "Billing & subscriptions", "Feature request", "Press & partnerships"],
      },
    },
    phone: {
      alts: {
        scan: "Moss home screen with weather tips and Quick Plant Diagnosis",
        library: "Moss daily care dashboard listing plants that need attention",
        care: "Moss plant detail screen showing care status and watering",
        info: "Moss plant info screen with water, light, humidity and pet-safe details",
        guide: "Moss watering and light placement care guidance",
        chat: "Moss AI plant care assistant answering a question",
      },
      scanHint: "Hold steady — identifying...",
      plantName: "Monstera deliciosa",
      plantSub: "Swiss cheese plant · 98% match",
      bright: "Bright indirect",
      weekly: "Weekly",
      temp: "65–80°F",
      greeting: <>Good morning,<br/>Your garden</>,
      tabs: ["All", "Needs care", "Happy"],
      plants: [
        ["Fiona", "Monstera deliciosa", "Water in 2 days"],
        ["Basil", "Ficus lyrata", "Misting today"],
        ["Pepper", "Pilea peperomioides", "Rotate pot"],
        ["Sage", "Sansevieria trifasciata", "All good"],
      ],
      daysUntilWater: "days until water",
      tasks: [
        ["Rotate pot", "Today"],
        ["Water (250 ml)", "Friday"],
        ["Check for pests", "Next week"],
      ],
    },
  },
  tr: {
    languageName: "Türkçe",
    nav: {
      features: "Özellikler",
      about: "Hakkımızda",
      support: "Destek",
      contact: "İletişim",
      download: "İndir",
    },
    footer: {
      description: "Kameranla bitkileri tanı, her yaprağı nazik ve kişiselleştirilmiş bakım hatırlatmalarıyla canlı tut.",
      appStore: "App Store",
      product: "Ürün",
      support: "Destek",
      legal: "Yasal",
      helpCenter: "Yardım Merkezi",
      privacy: "Gizlilik Politikası",
      terms: "Kullanım Şartları",
      eula: "EULA",
      copyright: "© 2026 Moss. Tüm hakları saklıdır.",
      made: "Bitki severler için özenle üretildi.",
    },
    home: {
      calm: {
        eyebrow: "Bitki tanıma ve bakım · iOS",
        title: <>Her bitki <em>anlaşılır</em>.<br/>Her yaprak <em>canlanır</em>.</>,
        body: "Bitkiyi saniyeler içinde tanımak için kameranı doğrult. Moss evini öğrenir ve yeşilliklerin susuz kalmasın diye nazik hatırlatmalar gönderir.",
        primary: "iOS için indir",
        secondary: "Özellikleri gör →",
      },
      editorial: {
        label: "No. 01 — Bahar sayısı · iOS için Moss",
        title: <>Bitkileri <em>mutlu</em> tutmanın daha sakin yolu.</>,
        body: "Moss cebindeki bitki bakıcısıdır: tanıma, sulama, ışık ve nem tek bir nazik uygulamada. Bitkilerini tablolarından daha çok sevenler için tasarlandı.",
        primary: "iOS için indir",
        secondary: "Özellikleri oku",
        caption: "Şekil 1 — Bahçen her zaman yanında.",
      },
      playful: {
        sticker: "Yeni · Akıllı bakım koçu",
        title: <> <span className="underline-wavy">Moss</span> ile tanış — bitki bakmanın en dost canlısı yolu.</>,
        body: "14.000+ türü tek karede tanı. Bitkinin ritmine uyan hatırlatmalar al. Gurur duyacağın küçük bir iç mekân ormanı kur.",
        primary: "Moss'u ücretsiz indir",
        secondary: "Nasıl çalışır",
        water: "Cuma sulama",
        light: "Parlak dolaylı ışık",
        match: "%98 eşleşme",
      },
      stats: [
        ["14.000+", "bitki türü"],
        ["4,8 ★", "App Store puanı"],
        ["Ücretsiz", "denemek için"],
      ],
      featuresEyebrow: "İçindekiler",
      featuresTitle: "Bitkilerinin ihtiyacı olan her şey, fazlası yok.",
      features: [
        ["Anında tanıma", "Fotoğraf çek; tür, yaygın adlar ve toksisite bilgisi saniyeler içinde gelsin."],
        ["Akıllı sulama", "Her bitkinin ışığına, saksı boyuna ve yerel havaya göre ayarlanan hatırlatmalar."],
        ["Işık kontrolü", "Telefonu pencereye doğrult, lux değerini ölç ve evindeki en mutlu noktayı bul."],
        ["Sağlık teşhisi", "Sorunlu yaprağı yükle; Moss zararlıları, besin eksiklerini ve fazla sulamayı işaret eder."],
        ["Bakım kütüphanesi", "Bilim insanları ve yetiştiricilerle hazırlanan 14.000+ tür için anlaşılır rehberler."],
        ["Nazik dürtmeler", "Israrcı bildirimler yok. Sadece doğru zamanda doğru hatırlatma."],
      ],
      howEyebrow: "Nasıl çalışır",
      howTitle: "Yabancı bir bitkiden bakım rutinine üç nazik adım.",
      steps: [
        ["01", "Tara", "Kamerayı aç ve herhangi bir bitkiyi kadraja al. Fotoğraflarla da çalışır."],
        ["02", "Tanı", "Moss türü adlandırır ve bakım profilini getirir."],
        ["03", "Bak", "Mevsime, saksıya ve programına uyum sağlayan bir rutin oluştur."],
      ],
      quote: <>“İtiraf edeyim, çok bitki kuruttum. Moss, pothosumun neye ihtiyacı olduğunu bana gerçekten <em>öğreten</em> ilk uygulama oldu — sekiz aydır harika durumda.”</>,
      quoteName: "Leila K.",
      quoteMeta: "İstanbul · 12 bitki",
      finalTitle: <>Bitki özgüveni,<br/>yaprak yaprak gelir.</>,
      finalBody: "iPhone'da ücretsiz. Denemek için hesap gerekmez.",
      finalCta: "App Store'dan indir",
    },
    featuresPage: {
      eyebrow: "Özellikler",
      title: "Evindeki her bitki için nazik bir yol arkadaşı.",
      body: "Moss son teknoloji bitki tanımayı ışığına, saksına, programına ve mevsime uyum sağlayan bir bakım sistemiyle birleştirir.",
      rows: [
        {
          eyebrow: "Tanı",
          title: "Karşılaştığın her bitkinin adını bil.",
          desc: "Moss tek fotoğraftan 14.000+ türü tanır: ev bitkileri, bahçe bitkileri, sukulentler, kaktüsler ve ağaçlar. Yaprak, çiçek, kabuk veya tüm bitkiyle çalışır.",
          bullets: ["Güven skoru ve benzer türler", "Evcil hayvanlar ve çocuklar için toksisite uyarıları", "Yerel veya istilacı tür notları"],
          variant: "scan",
        },
        {
          eyebrow: "Düzenle",
          title: "Cebinde yaşayan bir bahçe.",
          desc: "Her bitkiye ad, yer ve fotoğraf geçmişi ver. Moss her birinin nerede yaşadığını hatırlar; hatırlatmalar ışık ve sıcaklığa göre uyum sağlar.",
          bullets: ["Oda ve ışığa göre otomatik gruplama", "Her bitki için fotoğraf zaman çizelgesi", "Sulama, besin ve fısfıslama için hızlı kaydırma"],
          variant: "library",
          reverse: true,
        },
        {
          eyebrow: "Bakım",
          title: "Önce dinleyen, sonra hatırlatan bildirimler.",
          desc: "Moss yerel havaya ve her bitkinin saksı boyuna uyum sağlar. Bir günü atladın mı? Planı yeniler. Uzakta mısın? Duraklat; bitkilerin seni affeder.",
          bullets: ["Hava durumuna duyarlı sulama", "Nazik gübre ve fısfıslama programları", "Sararan yaprakları fotoğrafla teşhis et"],
          variant: "care",
        },
      ],
      gridEyebrow: "Birkaç küçük incelik daha",
      gridTitle: "Köklerine kadar düşünceli.",
      grid: [
        ["Çevrimdışı dostu", "Bitkilerin, notların ve bakım hatırlatmaların sinyal olmadan da çalışır."],
        ["Asla reklam yok", "Sakin deneyim, kullanıcıları tarafından finanse edilir."],
        ["Misafir dostu", "Moss'u hesap olmadan kullan — yalnızca istediğinde giriş yap."],
        ["HomeKit uyumlu", "Hatırlatmaları akıllı ev rutinlerinle eşleştir."],
        ["Önce gizlilik", "Tanıma için gönderilen fotoğraflar güvenli biçimde iletilir; diğerleri cihazında kalır."],
        ["Mevsimsel ayar", "Bakım planları gün ışığı ve neme göre değişir."],
      ],
      finalTitle: "Büyümeye hazır mısın?",
      finalBody: "iPhone'da ücretsiz. Premium özellikler isteğe bağlıdır.",
      finalCta: "App Store'dan indir",
    },
    download: {
      eyebrow: "Şimdi iPhone'da",
      title: <><em>Moss</em>'u eve getir.</>,
      body: "Ücretsiz indir. iOS 16 ve sonrasında harika çalışır. Premium özellikler isteğe bağlıdır.",
      cta: "App Store'dan indir",
      qrTitle: "Yüklemek için tara",
      qrBody: "iPhone kameranı koda doğrult.",
      requirements: [
        ["Gereksinimler", "iOS 16 veya sonrası yüklü iPhone. iPad ve iPod touch'ta da kullanılabilir."],
        ["Boyut", "86 MB. Kitaplığın ve bakım hatırlatmaların çevrimdışı çalışır."],
        ["Diller", "İngilizce, Türkçe, İspanyolca, Fransızca, Almanca, Japonca, Korece, Portekizce."],
        ["Fiyatlandırma", "İndirmek ücretsiz. Moss Premium haftada $2.99, ayda $9.99 veya yılda $34.99; aylık ve yıllık planlarda 3 günlük ücretsiz deneme."],
      ],
    },
    about: {
      eyebrow: "Hakkımızda",
      title: <>Bitki bakımını bir görev değil, <em>nezaket</em> gibi hissettiren araçlar yapıyoruz.</>,
      storyTitle: "Hikayemiz",
      story: [
        "Moss, 2023'te İstanbul'da güneş alan bir evde başladı; solan bir monstera, bitki bakım yazılımının daha sıcak, daha akıllı ve daha az bunaltıcı olabileceğine beni ikna etti.",
        "Moss, İstanbul'da bağımsız bir geliştirici tarafından tek başına tasarlanır, geliştirilir ve sürdürülür. İki şeye takıntılıyım: tanıma doğruluğu ve Moss'un gönderdiği her bildirimin tonu.",
        "Moss bağımsızdır ve Premium için sade, dürüst bir fiyat ister. Verini asla satmam, reklamlarla seni bölmem.",
      ],
      stats: [
        ["14 bin+", "tanınan tür"],
        ["230 bin", "bakımı yapılan bitki"],
        ["4,8 ★", "ortalama puan"],
        ["1", "bağımsız geliştirici"],
      ],
      valuesEyebrow: "Neye inanıyoruz",
      valuesTitle: "Canlı şeyler için nazik yazılım.",
      values: [
        ["01", "Varsayılan olarak sessiz", "Her bildirimi sayarız. Faydalı değilse göndermeyiz."],
        ["02", "Doğru ama alçakgönüllü", "Güven skorları ve alternatifleri gösteririz. Bitki bir tahmin değildir."],
        ["03", "Bilinçli gizlilik", "Bir bitkiyi tanımak veya teşhis etmek için sunucularımıza yalnızca bir fotoğraf göndeririz; geri kalan her şey cihazında kalır."],
        ["04", "Dürüst fiyat", "Karanlık desen yok, oyun yok. İstediğin zaman tek dokunuşla iptal."],
      ],
      finalTitle: "Yolculuğa katıl.",
      finalBody: "Moss'u dene; bitkilerin teşekkür edecek.",
      finalCta: "App Store'dan indir",
    },
    support: {
      eyebrow: "Destek",
      title: "Nasıl yardımcı olabiliriz?",
      body: <>En sık duyduğumuz soruların cevapları. Aradığını bulamadın mı? Bize <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a> adresinden yaz.</>,
      quick: [
        ["✉", "E-posta gönder", "Genellikle bir iş günü içinde yanıtlarız.", "mailto:mossplant@gmail.com"],
        ["💬", "İletişim formu", "Ekran görüntüsü ve cihaz bilgisini kolayca paylaş.", "contact.html"],
        ["📖", "Kullanıcı rehberi", "Detaylı anlatımlar ve profesyonel ipuçları.", "support.html#faq"],
      ],
      faqs: [
        ["Başlarken", [
          ["Bitki tanıma ne kadar doğru?", "Moss ev bitkilerini yaklaşık %98, bahçe bitkilerini yaklaşık %95 doğrulukla tanır. Emin olmadığımızda güven skoru ve benzer türleri gösteririz."],
          ["Moss internet olmadan çalışır mı?", "Kayıtlı bitkilerin, notların ve bakım hatırlatmaların çevrimdışı çalışır. Bir bitkiyi tanımak veya teşhis etmek internet bağlantısı gerektirir; çünkü Moss bunu cihazında değil sunucularımızda yapar. Cihazlar arası eşitleme de bağlantı gerektirir."],
          ["Moss ücretsiz mi?", "Moss'u indirmek ve denemek ücretsizdir. Moss Premium sınırsız tanıma ve gelişmiş teşhisi haftada $2.99, ayda $9.99 veya yılda $34.99 ile açar. Aylık ve yıllık planlar 3 günlük ücretsiz deneme içerir."],
        ]],
        ["Bakım ve hatırlatmalar", [
          ["Moss neden sulamayı hatırlatmıyor?", "Ayarlar → Bildirimler bölümünden Moss'un bildirim göndermesine izin verildiğinden emin ol. Hâlâ gelmiyorsa bitkiye saksı boyu ve toprak bilgisini gir; Moss bunları program için kullanır."],
          ["Uzakta olduğumda hatırlatmaları duraklatabilir miyim?", "Evet. Bitki detay ekranında menüye dokun ve bitiş tarihiyle “Bakımı duraklat” seçeneğini seç. Döndüğünde Moss programı nazikçe sürdürür."],
          ["Bitkim hasta görünüyor. Moss yardımcı olur mu?", "Bitkiyi aç, “Teşhis et”e dokun ve sorunlu bölgenin net bir fotoğrafını çek. Moss fotoğrafı sunucularımızda analiz eder ve sonraki adımları önerir."],
        ]],
        ["Gizlilik ve veri", [
          ["Moss fotoğraflarımla ne yapar?", "Bir bitkiyi tanımladığında veya teşhis ettiğinde, o fotoğraf sonucunu üretmek için sunucularımıza ve yapay zekâ sağlayıcımıza gönderilir ve yapay zekâ modellerini eğitmek için kullanılmaz. Diğer fotoğraflar, eşitleme veya yedekleme gibi bir özelliği kullanmadığın sürece cihazında kalır. Ayrıntılar için Gizlilik Politikamıza bak."],
          ["Bitki geçmişimi dışa aktarabilir miyim?", "Evet. Ayarlar → Veri → Dışa aktar, kaydettiğin tüm bitki, fotoğraf ve kayıtları içeren bir JSON dosyası oluşturur."],
          ["Hesabımı nasıl silerim?", "Ayarlar → Hesap → Hesabı sil. Bu işlem sunucularımızdaki verileri 30 gün içinde kalıcı olarak kaldırır. Ayrıca mossplant@gmail.com adresine yazabilirsin."],
        ]],
        ["Faturalama", [
          ["Moss Premium'u nasıl iptal ederim?", "iOS Ayarlar uygulamasını aç → adına dokun → Abonelikler → Moss → İptal. Premium özelliklerin fatura döneminin sonuna kadar aktif kalır."],
        ]],
      ],
    },
    contact: {
      eyebrow: "İletişim",
      title: "Merhaba de.",
      body: "Sorular, geri bildirimler, hata bildirimleri veya sadece bitki fotoğrafları — her mesajı okuyoruz.",
      cards: [
        ["E-posta", "mossplant@gmail.com", "Bir iş günü içinde yanıtlarız."],
        ["Basın", "mossplant@gmail.com", "Röportajlar, inceleme erişimleri ve medya kitleri için."],
        ["Posta adresi", "İstanbul / Türkiye", ""],
      ],
      form: {
        name: "Adın",
        email: "E-posta",
        topic: "Konu",
        message: "Mesaj",
        send: "Mesaj gönder",
        sentTitle: "Teşekkürler — aldık.",
        sentBody: "Kısa süre içinde şu adresten sana döneceğiz:",
        fallbackEmail: "e-posta adresin",
        topics: ["Genel soru", "Hata bildirimi", "Faturalama ve abonelikler", "Özellik isteği", "Basın ve iş birlikleri"],
      },
    },
    phone: {
      alts: {
        scan: "Hava durumu ipuçları ve Hızlı Bitki Teşhisi içeren Moss ana ekranı",
        library: "Bakım gerektiren bitkileri listeleyen Moss günlük bakım panosu",
        care: "Bakım durumunu ve sulamayı gösteren Moss bitki detay ekranı",
        info: "Su, ışık, nem ve evcil dostu bilgilerini içeren Moss bitki bilgi ekranı",
        guide: "Moss sulama ve ışık yerleşimi bakım rehberi",
        chat: "Bir soruyu yanıtlayan Moss yapay zekâ bitki bakım asistanı",
      },
      scanHint: "Sabit tut — tanımlanıyor...",
      plantName: "Monstera deliciosa",
      plantSub: "Deve tabanı · %98 eşleşme",
      bright: "Parlak dolaylı ışık",
      weekly: "Haftalık",
      temp: "18–27°C",
      greeting: <>Günaydın,<br/>Bahçen</>,
      tabs: ["Tümü", "Bakım gerek", "Mutlu"],
      plants: [
        ["Fiona", "Monstera deliciosa", "2 gün sonra su"],
        ["Basil", "Ficus lyrata", "Bugün fısfıs"],
        ["Pepper", "Pilea peperomioides", "Saksıyı çevir"],
        ["Sage", "Sansevieria trifasciata", "Her şey yolunda"],
      ],
      daysUntilWater: "gün sonra sulama",
      tasks: [
        ["Saksıyı çevir", "Bugün"],
        ["Sula (250 ml)", "Cuma"],
        ["Zararlı kontrolü", "Gelecek hafta"],
      ],
    },
  },
};

function isSupportedLanguage(language) {
  return SUPPORTED_LANGUAGES.includes(language);
}

function normalizeLanguage(value) {
  if (!value || typeof value !== "string") return DEFAULT_LANGUAGE;
  const code = value.toLowerCase().slice(0, 2);
  return isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
}

function safeGetStoredLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_STORAGE_KEY);
  } catch {
    return null;
  }
}

function safeStoreLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Storage can be unavailable in strict browser/privacy modes.
  }
}

function getInitialLanguage() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get("lang");
  if (isSupportedLanguage(fromUrl)) return fromUrl;
  const stored = safeGetStoredLanguage();
  if (isSupportedLanguage(stored)) return stored;
  return normalizeLanguage(navigator.language);
}

function readPath(source, key) {
  return key.split(".").reduce((value, part) => value?.[part], source);
}

function translate(language, key, fallback = key) {
  const value = readPath(I18N[language] || I18N[DEFAULT_LANGUAGE], key);
  if (value != null) return value;
  const defaultValue = readPath(I18N[DEFAULT_LANGUAGE], key);
  return defaultValue != null ? defaultValue : fallback;
}

function languageHref(href, language) {
  if (!href || href.startsWith("mailto:") || href.startsWith("http") || href.startsWith("#")) return href;
  if (language === DEFAULT_LANGUAGE) return href;
  const hashIndex = href.indexOf("#");
  const base = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : "";
  const separator = base.includes("?") ? "&" : "?";
  return `${base}${separator}lang=${language}${hash}`;
}

function setHtmlLanguage(language) {
  document.documentElement.lang = language;
}

let currentLanguage = getInitialLanguage();
setHtmlLanguage(currentLanguage);

function setGlobalLanguage(language) {
  const next = normalizeLanguage(language);
  currentLanguage = next;
  setHtmlLanguage(next);
  safeStoreLanguage(next);
  window.dispatchEvent(new CustomEvent("moss-language-change", { detail: { language: next } }));
}

function useLanguage() {
  const [language, setLanguageState] = React.useState(currentLanguage);

  React.useEffect(() => {
    const onLanguageChange = (event) => setLanguageState(event.detail.language);
    window.addEventListener("moss-language-change", onLanguageChange);
    return () => window.removeEventListener("moss-language-change", onLanguageChange);
  }, []);

  return {
    language,
    setLanguage: setGlobalLanguage,
    t: React.useCallback((key, fallback) => translate(language, key, fallback), [language]),
    href: React.useCallback((href) => languageHref(href, language), [language]),
  };
}

function LanguageSwitcher({ compact = false }) {
  const { language, setLanguage } = useLanguage();
  return (
    <div className={compact ? "lang-switch compact" : "lang-switch"} aria-label="Language">
      {SUPPORTED_LANGUAGES.map((code) => (
        <button
          key={code}
          type="button"
          className={language === code ? "active" : ""}
          aria-pressed={language === code}
          onClick={() => setLanguage(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

Object.assign(window, {
  SUPPORTED_LANGUAGES,
  APP_STORE_URL,
  I18N,
  useLanguage,
  LanguageSwitcher,
  translate,
  languageHref,
});
