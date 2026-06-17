const LEGAL_CONTENT = {
  terms: {
    en: {
      eyebrow: "Legal",
      title: "Terms of Service",
      meta: "Last updated: June 17, 2026 · Effective June 17, 2026",
      intro: "These Terms of Service govern your use of the Moss mobile application, website, and related services. By using Moss, you agree to these Terms and to our Privacy Policy.",
      sections: [
        ["accept", "1. Acceptance", ["If you do not agree to these Terms, do not use Moss. You may stop using the service at any time."]],
        ["eligibility", "2. Eligibility", ["You must be at least 13 years old, or the minimum age of digital consent where you live, to use Moss. If you use Moss on behalf of another person or organization, you confirm you have authority to accept these Terms for them."]],
        ["account", "3. Your Account", ["You may use many Moss features without an account. If you create one, you are responsible for keeping your credentials secure and for activity under your account. Tell us promptly at mossplant@gmail.com if you believe your account has been used without permission."]],
        ["billing", "4. Subscriptions and Billing", ["Moss may offer optional paid features through Moss Pro, available as a weekly, monthly, or annual subscription; the monthly and annual plans may include a 3-day free trial for new subscribers. Purchases made through the Apple App Store are processed by Apple and are also governed by Apple's terms.", "Subscriptions renew automatically unless canceled at least 24 hours before the current period ends. You can manage or cancel subscriptions in your Apple Account settings."]],
        ["conduct", "5. Acceptable Use", ["You agree not to misuse Moss, interfere with the service, attempt unauthorized access, upload unlawful or harmful content, infringe another person's rights, reverse engineer the application except where law allows, or use Moss to train a competing model or product."]],
        ["content", "6. Your Content", ["You keep ownership of photos, notes, plant names, care logs, and other content you add to Moss. You grant Moss a limited license to host, process, and display that content only as needed to provide the service to you.", "If you choose to submit a photo for support, community help, or a misidentification report, you allow us to review that submission and use it to improve Moss without identifying you publicly."]],
        ["ip", "7. Moss Intellectual Property", ["Moss, including its software, design, trademarks, and content other than your content, belongs to Moss or its licensors. We grant you a limited, personal, non-transferable license to use Moss according to these Terms."]],
        ["guidance", "8. Plant Care Guidance", ["Moss provides plant identification and care information for general guidance only. Identifications, toxicity notes, and care recommendations may be incomplete or wrong. For urgent risks involving people, pets, poisoning, allergies, or property damage, contact a qualified professional immediately."]],
        ["disclaimer", "9. Disclaimers", ["Moss is provided “as is” and “as available” without warranties of any kind, to the maximum extent permitted by law. We do not promise that Moss will be uninterrupted, error-free, or always accurate."]],
        ["liability", "10. Limitation of Liability", ["To the maximum extent permitted by law, Moss will not be liable for indirect, incidental, special, consequential, punitive, or lost-profit damages. Our total liability for claims relating to Moss will not exceed the greater of the amount you paid for Moss in the 12 months before the claim or USD $50."]],
        ["termination", "11. Termination", ["You may stop using Moss at any time and may delete your account from the app if account deletion is available. We may suspend or terminate access if you breach these Terms, create risk for others, or if required by law."]],
        ["law", "12. Governing Law", ["These Terms are governed by the laws of the Republic of Türkiye, except for conflict-of-law rules. Mandatory consumer protection rights in your country or region continue to apply where required by law."]],
        ["changes", "13. Changes", ["We may update these Terms from time to time. If a change is material, we will provide reasonable notice through the website, app, or email where available. Continued use after the effective date means you accept the updated Terms."]],
        ["contact", "14. Contact", [<>Questions about these Terms? Contact Moss at <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a> or Istanbul / Turkiye.</>]],
      ],
    },
    tr: {
      eyebrow: "Yasal",
      title: "Kullanım Şartları",
      meta: "Son güncelleme: 17 Haziran 2026 · Yürürlük: 17 Haziran 2026",
      intro: "Bu Kullanım Şartları, Moss mobil uygulaması, web sitesi ve ilgili hizmetleri kullanımını düzenler. Moss'u kullanarak bu Şartları ve Gizlilik Politikamızı kabul etmiş olursun.",
      sections: [
        ["accept", "1. Kabul", ["Bu Şartları kabul etmiyorsan Moss'u kullanma. Hizmeti kullanmayı istediğin zaman bırakabilirsin."]],
        ["eligibility", "2. Uygunluk", ["Moss'u kullanmak için en az 13 yaşında veya yaşadığın yerdeki dijital rıza yaşında olmalısın. Moss'u başka bir kişi ya da kurum adına kullanıyorsan, bu Şartları onlar adına kabul etme yetkin olduğunu onaylarsın."]],
        ["account", "3. Hesabın", ["Moss'un birçok özelliği hesap olmadan kullanılabilir. Hesap oluşturursan giriş bilgilerini korumaktan ve hesabındaki hareketlerden sen sorumlusun. Yetkisiz kullanım olduğunu düşünürsen bize gecikmeden mossplant@gmail.com adresinden yaz."]],
        ["billing", "4. Abonelikler ve Ödeme", ["Moss, haftalık, aylık veya yıllık abonelik olarak sunulan Moss Pro aracılığıyla isteğe bağlı ücretli özellikler sunabilir; aylık ve yıllık planlar yeni aboneler için 3 günlük ücretsiz deneme içerebilir. Apple App Store üzerinden yapılan satın almalar Apple tarafından işlenir ve Apple'ın şartlarına da tabidir.", "Abonelikler mevcut dönem bitmeden en az 24 saat önce iptal edilmezse otomatik yenilenir. Aboneliklerini Apple Hesabı ayarlarından yönetebilir veya iptal edebilirsin."]],
        ["conduct", "5. Kabul Edilebilir Kullanım", ["Moss'u kötüye kullanmamayı, hizmete müdahale etmemeyi, yetkisiz erişim denememeyi, hukuka aykırı veya zararlı içerik yüklememeyi, başkalarının haklarını ihlal etmemeyi, kanunun izin verdiği durumlar dışında uygulamayı tersine mühendislik işlemine tabi tutmamayı ve Moss'u rakip bir model ya da ürün eğitmek için kullanmamayı kabul edersin."]],
        ["content", "6. İçeriğin", ["Moss'a eklediğin fotoğraflar, notlar, bitki adları, bakım kayıtları ve diğer içerikler sana aittir. Bu içeriği yalnızca hizmeti sana sunmak için barındırma, işleme ve gösterme konusunda Moss'a sınırlı bir lisans verirsin.", "Destek, topluluk yardımı veya yanlış tanıma bildirimi için fotoğraf gönderirsen, bu gönderimi incelememize ve kimliğini açık etmeden Moss'u geliştirmek için kullanmamıza izin vermiş olursun."]],
        ["ip", "7. Moss Fikri Mülkiyeti", ["Yazılımı, tasarımı, markaları ve senin içeriğin dışındaki içerikleriyle Moss, Moss'a veya lisans verenlerine aittir. Bu Şartlara uygun şekilde Moss'u kullanman için sana sınırlı, kişisel ve devredilemez bir lisans veririz."]],
        ["guidance", "8. Bitki Bakım Rehberliği", ["Moss bitki tanıma ve bakım bilgilerini genel rehberlik amacıyla sunar. Tanımlar, toksisite notları ve bakım önerileri eksik veya hatalı olabilir. İnsan, evcil hayvan, zehirlenme, alerji ya da maddi hasarla ilgili acil risklerde hemen nitelikli bir uzmana başvur."]],
        ["disclaimer", "9. Sorumluluk Reddi", ["Moss, kanunun izin verdiği en geniş ölçüde, herhangi bir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Moss'un kesintisiz, hatasız veya her zaman doğru olacağını taahhüt etmeyiz."]],
        ["liability", "10. Sorumluluğun Sınırlandırılması", ["Kanunun izin verdiği en geniş ölçüde Moss; dolaylı, arızi, özel, sonuçsal, cezai veya kar kaybı zararlarından sorumlu değildir. Moss ile ilgili talepler için toplam sorumluluğumuz, talep öncesindeki 12 ayda Moss için ödediğin tutar veya 50 ABD dolarından yüksek olanı aşmaz."]],
        ["termination", "11. Sona Erme", ["Moss'u kullanmayı istediğin zaman bırakabilir ve hesap silme özelliği varsa hesabını uygulamadan silebilirsin. Bu Şartları ihlal edersen, başkaları için risk oluşturursan veya kanunen gerekirse erişimini askıya alabilir ya da sonlandırabiliriz."]],
        ["law", "12. Uygulanacak Hukuk", ["Bu Şartlar, kanunlar ihtilafı kuralları hariç olmak üzere Türkiye Cumhuriyeti hukukuna tabidir. Yaşadığın ülke veya bölgedeki zorunlu tüketici koruma hakları kanunen gerektiği ölçüde geçerliliğini korur."]],
        ["changes", "13. Değişiklikler", ["Bu Şartları zaman zaman güncelleyebiliriz. Önemli bir değişiklik olursa web sitesi, uygulama veya mevcutsa e-posta yoluyla makul bildirim yaparız. Yürürlük tarihinden sonra kullanmaya devam etmen güncel Şartları kabul ettiğin anlamına gelir."]],
        ["contact", "14. İletişim", [<>Bu Şartlar hakkında soruların için Moss'a <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a> adresinden veya İstanbul / Türkiye üzerinden ulaşabilirsin.</>]],
      ],
    },
  },
  privacy: {
    en: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      meta: "Last updated: June 17, 2026 · Effective June 17, 2026",
      intro: "This Privacy Policy explains how Moss handles information when you use the Moss app and website. Our principle is simple: collect as little as practical, keep data on your device when we can, tell you plainly when information leaves your device, and never sell your personal information.",
      sections: [
        ["collect", "1. Information We Collect", ["Account information, if you choose to sign in: your email address and name. Signing in is optional — you can use Moss as a guest. We support Sign in with Apple and one-time email codes.", "Plant data you add: photos used to identify and diagnose plants, plant nicknames, notes, care notes and logs, and the messages you send to the in-app assistant.", "A user identifier used to associate your data with your account or device.", "Purchase and subscription history, processed through Apple and managed with RevenueCat.", "Crash diagnostics, collected with Firebase Crashlytics to find and fix problems and associated with your user identifier, along with a device-scoped identifier (the Firebase Installations ID) used only for crash diagnostics.", "Coarse location, only if you allow it. Moss requests reduced-accuracy location with When-In-Use permission solely to tailor weather-based care tips. Location is optional and Moss works fully without it. Your location stays in memory only and is never saved to your device or our servers; only a coarse weather category, along with a plant identifier and your app language, is sent to our backend, and your exact coordinates are never sent."]],
        ["photos", "2. Plant Photos", [<>When you ask Moss to identify or diagnose a plant, the photo you submit is sent to our servers and to our AI provider to generate your result; see <a href="#ai">AI Processing</a> below. Other photos you add to your plants stay on your device unless you choose a feature that requires uploading them, such as sync or backup.</>]],
        ["ai", "3. AI Processing", ["Moss does not run any AI or machine-learning model in the app or on your device. All AI processing happens on our servers. When you identify or diagnose a plant, or ask a question in the in-app assistant, the app sends your request to our own backend (Supabase Edge Functions), which calls Anthropic's Claude API to produce a result. The app never contacts the AI provider directly.", "Only the content needed to produce your result is sent to Anthropic: the plant photo you submit and the text of your assistant questions. We do not send your name, email, or account identifiers to the AI provider. This information is used only to return your result and is not used to train AI models."]],
        ["use", "4. How We Use Information", ["We use information to provide and improve Moss: to identify and diagnose plants through our AI provider (see AI Processing), manage care reminders, tailor weather-based tips, respond to support requests, process subscriptions through Apple, keep the app stable through crash diagnostics, protect against abuse, and comply with legal obligations. We do not use your personal information for advertising."]],
        ["share", "5. Sharing", ["We share information only with the service providers that help us operate Moss (see Third-Party Services), payment processors such as Apple for purchases, legal authorities when valid law requires it, and a successor if Moss is involved in a merger, acquisition, or asset transfer subject to comparable privacy commitments. We do not sell your personal information."]],
        ["providers", "6. Third-Party Services", ["We rely on a small number of trusted providers, each of which receives only the information needed for its function:", "Anthropic provides the AI that processes plant photos and assistant questions to generate your results.", "Supabase provides hosting, database, storage, and authentication for your account and plant data.", "Firebase Crashlytics, a Google service, provides crash diagnostics.", "RevenueCat manages subscriptions.", "Apple processes App Store payments and provides Sign in with Apple."]],
        ["tracking", "7. Advertising, Tracking, and Analytics", ["Moss does not show advertising and does not use advertising identifiers such as Apple's IDFA. We do not track you across other apps or websites. The app does not transmit analytics at launch; any analytics are kept on your device. We do not sell your personal information."]],
        ["retention", "8. Storage and Retention", ["Plant data you add stays on your device unless you enable sync or backup, or use a feature that sends it to us — such as identification or diagnosis, which send the relevant photo to our servers and AI provider to generate your result.", "Account, plant, purchase, support, and diagnostic information stored on our backend is kept only as long as needed for the purpose it was collected, legal compliance, backups, security, or fraud prevention, then deleted or anonymized."]],
        ["rights", "9. Your Rights", [<>Depending on where you live, you may ask to access, correct, delete, export, or restrict use of your personal information. You can delete your account at any time from within the app, which removes your account and the associated data from our servers. You can also use the app settings where available or email <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>. We aim to respond within 30 days.</>]],
        ["children", "10. Children", ["Moss is not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided personal information, contact us so we can delete it."]],
        ["international", "11. International Use", ["Moss is operated from Istanbul / Turkiye. If you use Moss from another country, your information may be processed where we or our service providers operate. We use appropriate safeguards when required for international transfers."]],
        ["security", "12. Security", ["We use reasonable administrative, technical, and organizational safeguards, including encryption in transit where applicable and access controls for systems that hold personal information. No method of storage or transmission is completely secure."]],
        ["changes", "13. Changes", ["We may update this policy. If changes are material, we will provide reasonable notice through the website, app, or email where available."]],
        ["contact", "14. Contact", [<>Privacy questions or requests: <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>, Istanbul / Turkiye.</>]],
      ],
    },
    tr: {
      eyebrow: "Yasal",
      title: "Gizlilik Politikası",
      meta: "Son güncelleme: 17 Haziran 2026 · Yürürlük: 17 Haziran 2026",
      intro: "Bu Gizlilik Politikası, Moss uygulamasını ve web sitesini kullandığında bilgileri nasıl ele aldığımızı açıklar. İlkemiz basit: mümkün olduğunca az veri toplamak, mümkün olduğunda veriyi cihazında tutmak, bilgilerin cihazından ne zaman ayrıldığını açıkça belirtmek ve kişisel bilgilerini asla satmamak.",
      sections: [
        ["collect", "1. Topladığımız Bilgiler", ["Giriş yapmayı seçersen hesap bilgileri: e-posta adresin ve adın. Giriş yapmak isteğe bağlıdır — Moss'u misafir olarak kullanabilirsin. Apple ile Giriş'i ve tek seferlik e-posta kodlarını destekleriz.", "Eklediğin bitki verileri: bitkileri tanımak ve teşhis etmek için kullanılan fotoğraflar, bitki takma adları, notlar, bakım notları ve kayıtları ve uygulama içi asistana gönderdiğin mesajlar.", "Verilerini hesabın veya cihazınla ilişkilendirmek için kullanılan bir kullanıcı tanımlayıcısı.", "Apple üzerinden işlenen ve RevenueCat ile yönetilen satın alma ve abonelik geçmişi.", "Sorunları bulup gidermek için Firebase Crashlytics ile toplanan ve kullanıcı tanımlayıcınla ilişkilendirilen çökme tanılama verileri ile yalnızca çökme tanılaması için kullanılan cihaza özel bir tanımlayıcı (Firebase Installations ID).", "Yalnızca izin verirsen kaba konum. Moss, hava durumuna dayalı bakım ipuçlarını uyarlamak amacıyla yalnızca uygulamayı kullanırken geçerli olan izinle düşük doğruluklu konum ister. Konum isteğe bağlıdır ve Moss konum olmadan tam olarak çalışır. Konumun yalnızca bellekte tutulur ve cihazına veya sunucularımıza asla kaydedilmez; sunucumuza yalnızca kaba bir hava durumu kategorisi, bir bitki tanımlayıcısı ve uygulama dilin gönderilir, kesin koordinatların asla gönderilmez."]],
        ["photos", "2. Bitki Fotoğrafları", [<>Bir bitkiyi tanımlamasını veya teşhis etmesini istediğinde, gönderdiğin fotoğraf sonucunu üretmek için sunucularımıza ve yapay zekâ sağlayıcımıza gönderilir; aşağıdaki <a href="#ai">Yapay Zekâ İşleme</a> bölümüne bak. Bitkilerine eklediğin diğer fotoğraflar, eşitleme veya yedekleme gibi yüklemeyi gerektiren bir özelliği seçmediğin sürece cihazında kalır.</>]],
        ["ai", "3. Yapay Zekâ İşleme", ["Moss, uygulamada veya cihazında herhangi bir yapay zekâ ya da makine öğrenimi modeli çalıştırmaz. Tüm yapay zekâ işleme sunucularımızda gerçekleşir. Bir bitkiyi tanımladığında veya teşhis ettiğinde ya da uygulama içi asistana bir soru sorduğunda, uygulama isteğini kendi arka ucumuza (Supabase Edge Functions) gönderir; arka uç da bir sonuç üretmek için Anthropic'in Claude API'sini çağırır. Uygulama yapay zekâ sağlayıcısıyla asla doğrudan iletişim kurmaz.", "Anthropic'e yalnızca sonucunu üretmek için gereken içerik gönderilir: gönderdiğin bitki fotoğrafı ve asistan sorularının metni. Yapay zekâ sağlayıcısına adını, e-postanı veya hesap tanımlayıcılarını göndermeyiz. Bu bilgiler yalnızca sonucunu döndürmek için kullanılır ve yapay zekâ modellerini eğitmek için kullanılmaz."]],
        ["use", "4. Bilgileri Nasıl Kullanırız", ["Bilgileri Moss'u sunmak ve geliştirmek için kullanırız: yapay zekâ sağlayıcımız aracılığıyla bitkileri tanımak ve teşhis etmek (bkz. Yapay Zekâ İşleme), bakım hatırlatmalarını yönetmek, hava durumuna dayalı ipuçlarını uyarlamak, destek taleplerini yanıtlamak, Apple üzerinden abonelikleri işlemek, çökme tanılamasıyla uygulamayı kararlı tutmak, kötüye kullanımı önlemek ve yasal yükümlülüklere uymak. Kişisel bilgilerini reklam için kullanmayız."]],
        ["share", "5. Paylaşım", ["Bilgileri yalnızca Moss'u çalıştırmamıza yardımcı olan hizmet sağlayıcılarla (bkz. Üçüncü Taraf Hizmetleri), satın almalar için Apple gibi ödeme işlemcileriyle, geçerli hukuk gerektirdiğinde yetkili mercilerle ve Moss'un birleşme, satın alma veya varlık devri sürecinde benzer gizlilik taahhütlerine tabi haleflerle paylaşırız. Kişisel bilgilerini satmayız."]],
        ["providers", "6. Üçüncü Taraf Hizmetleri", ["Her biri yalnızca işlevi için gereken bilgileri alan, az sayıda güvenilir sağlayıcıdan yararlanırız:", "Anthropic, sonuçlarını üretmek için bitki fotoğraflarını ve asistan sorularını işleyen yapay zekâyı sağlar.", "Supabase; hesabın ve bitki verilerin için barındırma, veritabanı, depolama ve kimlik doğrulama sağlar.", "Bir Google hizmeti olan Firebase Crashlytics, çökme tanılaması sağlar.", "RevenueCat, abonelikleri yönetir.", "Apple, App Store ödemelerini işler ve Apple ile Giriş'i sağlar."]],
        ["tracking", "7. Reklam, Takip ve Analitik", ["Moss reklam göstermez ve Apple'ın IDFA'sı gibi reklam tanımlayıcıları kullanmaz. Seni diğer uygulamalar veya web siteleri arasında takip etmeyiz. Uygulama açılışta analitik veri göndermez; analitik veriler yalnızca cihazında tutulur. Kişisel bilgilerini satmayız."]],
        ["retention", "8. Saklama ve Tutma", ["Eklediğin bitki verileri; eşitleme veya yedeklemeyi etkinleştirmediğin ya da bize veri gönderen bir özelliği (örneğin, ilgili fotoğrafı sonucunu üretmek için sunucularımıza ve yapay zekâ sağlayıcımıza gönderen tanıma veya teşhis) kullanmadığın sürece cihazında kalır.", "Arka ucumuzda saklanan hesap, bitki, satın alma, destek ve tanılama bilgileri yalnızca toplandığı amaç, yasal uyum, yedekler, güvenlik veya dolandırıcılık önleme için gerektiği sürece tutulur; ardından silinir veya anonimleştirilir."]],
        ["rights", "9. Hakların", [<>Yaşadığın yere bağlı olarak kişisel bilgilerine erişme, düzeltme, silme, dışa aktarma veya kullanımını sınırlama talebinde bulunabilirsin. Hesabını istediğin zaman uygulama içinden silebilirsin; bu işlem hesabını ve ilişkili verileri sunucularımızdan kaldırır. Ayrıca varsa uygulama ayarlarını kullanabilir veya <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a> adresine yazabilirsin. 30 gün içinde yanıtlamayı hedefleriz.</>]],
        ["children", "10. Çocuklar", ["Moss 13 yaş altındaki çocuklara yönelik değildir ve 13 yaş altındaki çocuklardan bilerek kişisel bilgi toplamayız. Bir çocuğun kişisel bilgi verdiğini düşünüyorsan silmemiz için bizimle iletişime geç."]],
        ["international", "11. Uluslararası Kullanım", ["Moss İstanbul / Türkiye'den işletilir. Moss'u başka bir ülkeden kullanırsan bilgilerin bizim veya hizmet sağlayıcılarımızın faaliyet gösterdiği yerlerde işlenebilir. Uluslararası aktarımlar için gerektiğinde uygun güvenceler kullanırız."]],
        ["security", "12. Güvenlik", ["Uygun olduğu yerde aktarım sırasında şifreleme ve kişisel bilgi içeren sistemler için erişim kontrolleri dahil olmak üzere makul idari, teknik ve organizasyonel önlemler kullanırız. Hiçbir saklama veya aktarım yöntemi tamamen güvenli değildir."]],
        ["changes", "13. Değişiklikler", ["Bu politikayı güncelleyebiliriz. Değişiklikler önemliyse web sitesi, uygulama veya mevcutsa e-posta yoluyla makul bildirim yaparız."]],
        ["contact", "14. İletişim", [<>Gizlilik soruları veya talepleri: <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>, İstanbul / Türkiye.</>]],
      ],
    },
  },
  eula: {
    en: {
      eyebrow: "Legal",
      title: "End User License Agreement",
      meta: "Last updated: June 2, 2026 · Effective June 2, 2026",
      intro: "This End User License Agreement applies to your download and use of the Moss mobile application and related updates or documentation.",
      sections: [
        ["license", "1. License Grant", ["Subject to these terms, Moss grants you a limited, non-exclusive, non-transferable, revocable license to download and use the Moss application for personal, non-commercial purposes on Apple-branded devices you own or control, as permitted by Apple App Store rules."]],
        ["restrictions", "2. Restrictions", ["You may not distribute, sublicense, rent, lease, lend, copy, modify, reverse engineer, decompile, disassemble, remove proprietary notices from, or create derivative works of the application except where applicable law allows."]],
        ["updates", "3. Updates", ["Moss may provide updates or changes. Updates are governed by this EULA unless separate terms are provided."]],
        ["data", "4. Data Use", ["Technical and diagnostic information may be collected and used to provide support, updates, security, and product improvements as described in the Privacy Policy."]],
        ["third", "5. Third-Party Materials", ["The application may display third-party content or services. Moss is not responsible for third-party materials, and your use of them may be subject to separate terms."]],
        ["warranty", "6. No Warranty", ["The application is provided “as is” and “as available” without warranties of any kind to the maximum extent permitted by law. Plant identification and care features are informational and may be inaccurate."]],
        ["liability", "7. Limitation of Liability", ["To the extent not prohibited by law, Moss is not liable for personal injury or indirect, special, incidental, consequential, or punitive damages arising from use of the application."]],
        ["apple", "8. Apple-Specific Terms", ["This EULA is between you and Moss, not Apple. Apple has no obligation to provide maintenance or support. Apple and its subsidiaries are third-party beneficiaries of this EULA and may enforce it against you."]],
        ["export", "9. Export Compliance", ["You may not use or export the application except as authorized by applicable laws and regulations."]],
        ["contact", "10. Contact", [<>Questions about this EULA? Contact <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>, Istanbul / Turkiye.</>]],
      ],
    },
    tr: {
      eyebrow: "Yasal",
      title: "Son Kullanıcı Lisans Sözleşmesi",
      meta: "Son güncelleme: 2 Haziran 2026 · Yürürlük: 2 Haziran 2026",
      intro: "Bu Son Kullanıcı Lisans Sözleşmesi, Moss mobil uygulamasını ve ilgili güncellemeleri veya belgeleri indirmen ve kullanman için geçerlidir.",
      sections: [
        ["license", "1. Lisans Verilmesi", ["Bu şartlara bağlı olarak Moss, Apple App Store kurallarının izin verdiği şekilde, sahibi olduğun veya kontrol ettiğin Apple markalı cihazlarda Moss uygulamasını kişisel ve ticari olmayan amaçlarla indirip kullanman için sınırlı, münhasır olmayan, devredilemez ve geri alınabilir bir lisans verir."]],
        ["restrictions", "2. Kısıtlamalar", ["Uygulamayı dağıtamaz, alt lisans veremez, kiralayamaz, ödünç veremez, kopyalayamaz, değiştiremez, tersine mühendislik yapamaz, kaynak koda dönüştüremez, parçalarına ayıramaz, mülkiyet bildirimlerini kaldıramaz veya türev çalışmalar oluşturamazsın; uygulanabilir hukukun izin verdiği durumlar hariçtir."]],
        ["updates", "3. Güncellemeler", ["Moss güncellemeler veya değişiklikler sağlayabilir. Ayrı şartlar sunulmadığı sürece güncellemeler bu EULA'ya tabidir."]],
        ["data", "4. Veri Kullanımı", ["Teknik ve tanılama bilgileri, Gizlilik Politikasında açıklandığı üzere destek, güncellemeler, güvenlik ve ürün iyileştirmeleri için toplanıp kullanılabilir."]],
        ["third", "5. Üçüncü Taraf Materyalleri", ["Uygulama üçüncü taraf içerikleri veya hizmetleri gösterebilir. Moss üçüncü taraf materyallerinden sorumlu değildir ve bunları kullanımın ayrı şartlara tabi olabilir."]],
        ["warranty", "6. Garanti Yok", ["Uygulama, kanunun izin verdiği en geniş ölçüde herhangi bir garanti olmaksızın “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Bitki tanıma ve bakım özellikleri bilgilendirme amaçlıdır ve hatalı olabilir."]],
        ["liability", "7. Sorumluluğun Sınırlandırılması", ["Kanunun yasaklamadığı ölçüde Moss, uygulama kullanımından doğan kişisel yaralanma veya dolaylı, özel, arızi, sonuçsal ya da cezai zararlardan sorumlu değildir."]],
        ["apple", "8. Apple'a Özgü Şartlar", ["Bu EULA seninle Moss arasındadır, Apple ile değil. Apple'ın bakım veya destek sağlama yükümlülüğü yoktur. Apple ve bağlı şirketleri bu EULA'nın üçüncü taraf lehtarlarıdır ve hükümlerini sana karşı ileri sürebilir."]],
        ["export", "9. İhracat Uyumu", ["Uygulamayı yalnızca geçerli yasa ve düzenlemelerin izin verdiği şekilde kullanabilir veya ihraç edebilirsin."]],
        ["contact", "10. İletişim", [<>Bu EULA hakkında soruların için <a href="mailto:mossplant@gmail.com">mossplant@gmail.com</a>, İstanbul / Türkiye.</>]],
      ],
    },
  },
};

function LegalArticle({ page }) {
  const { language, t } = useLanguage();
  const content = LEGAL_CONTENT[page]?.[language] || LEGAL_CONTENT[page]?.en || LEGAL_CONTENT.terms.en;

  return (
    <article className="article">
      <span className="eyebrow">{content.eyebrow}</span>
      <h1>{content.title}</h1>
      <div className="meta">{content.meta}</div>
      <p>{content.intro}</p>

      <div className="toc">
        <h4>{language === "tr" ? "İçindekiler" : "Contents"}</h4>
        <ul>
          {content.sections.map(([id, title]) => (
            <li key={id}><a href={`#${id}`}>{title}</a></li>
          ))}
        </ul>
      </div>

      {content.sections.map(([id, title, paragraphs]) => (
        <section key={id}>
          <h2 id={id}>{title}</h2>
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </section>
      ))}
    </article>
  );
}

function LegalApp({ page }) {
  return (
    <>
      <Nav active="legal" />
      <main>
        <LegalArticle page={page} />
      </main>
      <Footer />
    </>
  );
}

Object.assign(window, { LEGAL_CONTENT, LegalApp });
