/**
 * 9spectrum - Klinik Durum Bilgi Bankası ve Örtüşme Rehberi
 * DSM-5-TR ve ICD-11 kriterleri referans alınarak yapılandırılmıştır.
 */

import type { ConditionsData } from "@/lib/types";

export const CONDITIONS_DATA: ConditionsData = {
  adhd: {
    id: 'adhd',
    name: 'DEHB (Dikkat Eksikliği ve Hiperaktivite Bozukluğu)',
    shortName: 'DEHB / ADHD',
    dsmCode: 'DSM-5 314.0x / ICD-11 6A05',
    tagline: 'Yürütücü işlevler, dopamin regülasyonu ve dikkat yönetimi farklılığı',
    accentColor: '#7A2634', // Oxblood
    category: 'Nörogelişimsel',
    clinicalScale: 'ASRS-v1.1 (WHO / Harvard) & Wender Utah',
    description: `DEHB, prefrontal korteksteki dikkat, dürtü kontrolü, motivasyon ve çalışma belleğini yöneten yürütücü işlevler ağının farklı çalışmasından kaynaklanan nörogelişimsel bir tablodur. Bireyin dikkat edememesi değil, dikkatini beynin istediği gibi regüle edememesi temel karakteristiğidir.`,
    coreTraits: [
      'Başlama Felci (Task Paralysis): İlgi çekmeyen görevleri erteleme ve başlatmak için aşırı zihinsel efor harcama',
      'Hiperodaklanma (Hyperfocus): İlgisini çeken konuya saatlerce kilitlenip zaman algısını yitirme',
      'Zaman Körlüğü (Time Blindness): Süreleri tahmin etmekte ve planlara uymakta güçlük',
      'İçsel Huzursuzluk / Zihinsel Hiperaktivite: Zihnin sürekli birden fazla kanalı aynı anda dinlemesi hissi',
      'Çalışma Belleği Zayıflığı: Kısa süreli unutkanlıklar, eşya kaybetme',
      'Dürtüsel Tepkisellik & Reddedilme Hassasiyeti (RSD): Eleştiriye karşı beklenenden yoğun duygusal tepki'
    ],
    overlappingWith: [
      {
        targetId: 'ocd',
        targetName: 'OKB (Obsesif Kompulsif Bozukluk)',
        distinctionSummary: 'DEHB ertelemesi düşük uyarılma/dopamin eksikliğinden kaynaklanırken; OKB ertelemesi "hata yapma korkusu" veya "kusursuz olmazsa felaket olur" takıntısından doğar.',
        keyDifferential: 'DEHB zihni rastgele yeni uyaranlara atlar; OKB zihni ise istenmeyen bir şüpheye veya nötralize edici ritüele saplanır.'
      },
      {
        targetId: 'depression',
        targetName: 'Depresyon & Tükenmişlik',
        distinctionSummary: 'DEHB’li birey yapmak ister ama beynindeki marş motoru basmaz. Depresyondaki birey ise yapmanın hiçbir anlamı olmadığını hisseder (anhedoni ve umutsuzluk).',
        keyDifferential: 'DEHB’de heyecan verici yeni bir konu gelirse enerji kıvılcımı anında çakar; klinik depresyonda bu kıvılcım da sönmüştür.'
      },
      {
        targetId: 'bipolar',
        targetName: 'Bipolar (Hipomani)',
        distinctionSummary: 'DEHB’deki hiperaktivite çocukluktan beri hayatın genel zemininde süreklidir. Bipolar hipomani ise döngüsel ataklar halinde (günler/haftalar süren) gelir.',
        keyDifferential: 'DEHB’de uyku ihtiyacı vardır ama uykuya dalamaz; Bipolar hipomanide kişi günde 2-3 saat uyur ve kendini dinç hisseder.'
      }
    ],
    doctorDiscussionPoints: [
      'Gündelik hayatta başladığınız işleri bitirmekte ne sıklıkla zorlandığınızı somut örneklerle aktarın.',
      'Bu durumun çocukluk yıllarınızda (okul dönemi, karne notları, unutkanlıklar) var olup olmadığını belirtin.',
      'Aşırı ilgi duyduğunuz bir konuya saatlerce odaklanıp temel ihtiyaçları unuttuğunuz anlardan (hiperodak) bahsedin.',
      'Kafein veya uyarıcıların sizde nasıl bir etki yarattığını (sakinleştiriyor mu yoksa çarpıntı mı yapıyor) hekiminizle paylaşın.'
    ]
  },

  ocd: {
    id: 'ocd',
    name: 'OKB (Obsesif Kompulsif Bozukluk)',
    shortName: 'OKB / OCD',
    dsmCode: 'DSM-5 300.3 / ICD-11 6B20',
    tagline: 'İntrüzyonel düşünceler, şüphe döngüsü ve nötralize edici ritüeller',
    accentColor: '#5C6478', // Muted Slate
    category: 'Nöropsikiyatrik / Anksiyete Spektrumu',
    clinicalScale: 'OCI-R & Y-BOCS (Yale-Brown)',
    description: `OKB, kontrol dışı zihne giren takıntılı düşünceler (obsesyonlar) ve bu kaygıyı geçici olarak dindirmek için yapılan tekrarlayıcı davranışlar veya zihinsel eylemler (kompulsiyonlar) ile tanımlanır. Kişi düşüncenin mantıksız olduğunu bilse de 'ya olursa?' şüphesini durduramaz.`,
    coreTraits: [
      'Sürekli Şüphe & Güvenlik Arayışı: Kapı, ocak, kilit gibi unsurları defalarca kontrol etme',
      'Tam Olma / Simetri İhtiyacı: Bir şeyin "tam doğru" (just right) hissedene kadar tekrarlanması',
      'Zihinsel Nötralizasyon: Kötü bir düşünceyi iyi bir kelime, dua veya sayı sayarak savuşturmaya çalışma',
      'Bulaşma ve Kirlenme Kaygısı: Mikroplardan veya manevi kirlenmeden aşırı korunma arayışı',
      'İstenmeyen Tabu Düşünceler: Kişinin ahlaki değerlerine zıt agresif veya cinsel intrüzyonlardan suçluluk duyma',
      'Aşırı Sorumluluk Yükü: Olumsuz olayları engellemenin tamamen kendi kontrolünde olduğunu hissetme'
    ],
    overlappingWith: [
      {
        targetId: 'adhd',
        targetName: 'DEHB',
        distinctionSummary: 'OKB kontrol listeleri oluşturarak kaygıyı yönetmeye çalışır; DEHB ise düzen kurmak ister ama unutkanlık ve yürütücü zorluklar nedeniyle sürdüremez.',
        keyDifferential: 'OKB’deki odak kaybı zihindeki intrüzyonları susturmaya çalışmaktan; DEHB’deki odak kaybı ise sıkılıp yeni uyarana yönelmekten doğar.'
      },
      {
        targetId: 'anxiety',
        targetName: 'Yaygın Anksiyete Bozukluğu (YAB)',
        distinctionSummary: 'YAB gerçek hayattaki olası problemler (sağlık, ekonomi) hakkında sürekli endişelenir. OKB ise genellikle "mantıksız olduğunu bildiği" tabular veya ritüeller etrafında döner.',
        keyDifferential: 'YAB’de özel nötralize edici eylemler (kompulsiyon) yoktur; OKB’de ise rahatlamak için yapılan belirli fiziksel/zihinsel ritüeller mevcuttur.'
      }
    ],
    doctorDiscussionPoints: [
      'Zihninizden atamadığınız, sizi huzursuz eden tekrarlayıcı düşünceleri çekinmeden hekiminizle paylaşın.',
      'Bu düşünceleri rahatlatmak için gün içinde kaç saat harcadığınızı ve hangi eylemleri yaptığınızı aktarın.',
      'Bu ritüelleri yapmadığınızda içinizde oluşan sıkıntının ne kadar yoğun olduğunu ifade edin.'
    ]
  },

  anxiety: {
    id: 'anxiety',
    name: 'Yaygın Anksiyete & Panik Spektrumu',
    shortName: 'Anksiyete / Kaygı',
    dsmCode: 'DSM-5 300.02 / ICD-11 6B00',
    tagline: 'Aşırı uyarılmış sempatik sistem, kronik felaketleştirme ve somatik alarm',
    accentColor: '#7A2634',
    category: 'Anksiyete Bozuklukları',
    clinicalScale: 'GAD-7 & Beck Anksiyete Ölçeği',
    description: `Anksiyete bozukluğu, ortada somut bir tehlike yokken bile sinir sisteminin sürekli alarm vermesidir. Vücutta kas gerginliği, kalp çarpıntısı, nefes darlığı ve zihinde bitmek bilmeyen 'en kötü senaryo' kurgularına neden olur.`,
    coreTraits: [
      'Kronik Felaketleştirme: Belirsizlik durumlarında otomatik olarak en kötü ihtimali canlandırma',
      'Somatik Belirtiler: Göğüste baskı hissi, kas gerginliği, çene sıkma, sindirim hassasiyeti',
      'Huzursuz Beklenti: Sanki her an kötü bir haber alacakmış gibi tetikte bekleme hali',
      'Uykuya Dalış Güçlüğü: Yatağa girildiğinde günün ve geleceğin kaygılarının zihne hücum etmesi',
      'Belirsizliğe Tahammülsüzlük: Kontrol dışı durumlarda yoğun çaresizlik ve huzursuzluk',
      'Panik Ataklar: Aniden gelen nefes alamama, boğulacakmış veya bayılacakmış hissi'
    ],
    overlappingWith: [
      {
        targetId: 'adhd',
        targetName: 'DEHB',
        distinctionSummary: 'Sürekli unutma ve işleri yetiştirememe korkusu zamanla ikincil anksiyeteye yol açabilir.',
        keyDifferential: 'Anksiyete sessiz ortamda bile zihni endişeyle doldururken, DEHB dopaminerjik bir ilgi alanı bulduğunda rahatlayıp odakta kalabilir.'
      },
      {
        targetId: 'social_anxiety',
        targetName: 'Sosyal Anksiyete',
        distinctionSummary: 'Yaygın anksiyete hayatın tüm alanlarına yöneliktir; sosyal anksiyete spesifik olarak sosyal yargılanma anlarında kilitlenir.',
        keyDifferential: 'Yalnızken huzurluysanız ama insan içine çıkınca kaygılanıyorsanız Sosyal Anksiyete ön plandadır.'
      }
    ],
    doctorDiscussionPoints: [
      'Kaygınızın günün hangi saatlerinde yoğunlaştığını ve bedeninizde nerede hissettiğinizi belirtin.',
      'Aniden gelen yoğun panik ataklar yaşayıp yaşamadığınızı aktarın.',
      'Bu kaygının gündelik işlerinizi ve sosyal hayatınızı ne derece kısıtladığını ifade edin.'
    ]
  },

  depression: {
    id: 'depression',
    name: 'Depresyon & Duygudurum Çöküşü',
    shortName: 'Depresyon / Duygudurum',
    dsmCode: 'DSM-5 296.xx / ICD-11 6A70',
    tagline: 'Anhedoni (zevk alamama), enerji kaybı, değersizlik ve psikomotor yavaşlama',
    accentColor: '#5C6478',
    category: 'Duygudurum Bozuklukları',
    clinicalScale: 'PHQ-9 & Beck Depresyon Envanteri (BDI)',
    description: `Depresyon, beynin ödül mekanizmasının, enerji üretiminin ve bilişsel hızının küntleştiği çok boyutlu bir klinik tablodur. Kişi eskiden keyif aldığı aktivitelere karşı tam bir hissizlik (anhedoni) yaşar, basit günlük işler bile aşılmaz birer yük haline gelir.`,
    coreTraits: [
      'Anhedoni: Eskiden zevk veren şeylerden hiçbir tat alamama ve duygusal donukluk',
      'Bilişsel Sis & Kararsızlık: Düşüncelerin yavaşlaması, basit kararları dahi verememe',
      'Psikomotor Yavaşlama: Bedenin tonlarca ağırlıktaymış gibi hissettirmesi',
      'Uyku ve İştah Bozulması: Aşırı uyuma veya sabah erken uyanıp uyuyamama; belirgin iştah kaybı',
      'Kronik Değersizlik: Olumsuzluklardan tamamen kendini sorumlu tutma',
      'Geleceğe Dair Umutsuzluk: Durumun hiçbir zaman düzelmeyeceğine dair katı inanç'
    ],
    overlappingWith: [
      {
        targetId: 'adhd',
        targetName: 'DEHB Tükenmişliği',
        distinctionSummary: 'DEHB tükenmişliği yıllarca topluma ayak uydurmaya çalışmaktan kaynaklanan batarya bitmesidir.',
        keyDifferential: 'Depresyonda temel his "ben değersizim"; DEHB’de ise "yapabilecek potansiyelim var ama marş basmıyor" çaresizliğidir.'
      }
    ],
    doctorDiscussionPoints: [
      'Bu isteksizlik ve enerjisizlik halinin ne kadar süredir devam ettiğini açıklayın.',
      'Uyku ve iştah düzeninizdeki değişimleri belirtin.',
      'Daha önce hayatınızda tam tersine aşırı enerjik dönemlerin olup olmadığını hekiminize aktarın.'
    ]
  },

  bipolar: {
    id: 'bipolar',
    name: 'Bipolar Spektrum (İki Uçlu Duygudurum)',
    shortName: 'Bipolar Spektrum',
    dsmCode: 'DSM-5 296.8x / ICD-11 6A60',
    tagline: 'Enerji, uyku ve motivasyonun dönemsel manik/hipomanik ve depresif kutuplar arasında salınımı',
    accentColor: '#7A2634',
    category: 'Duygudurum Bozuklukları',
    clinicalScale: 'MDQ (Mood Disorder Questionnaire) & HCL-32',
    description: `Bipolar bozukluk, duygudurumun haftalar veya aylar sürebilen iki zıt kutup (mani/hipomani ve depresyon) arasında salınmasıdır. Yüksek dönemde kişi 2-3 saat uykuyla günlerce yorulmadan çalışabilir, kendine aşırı güvenir; ardından derin bir depresif döneme girer.`,
    coreTraits: [
      'Dönemsel Hipomani/Mani: Günlerce süren yüksek enerji, fikir uçuşmaları ve projeden projeye koşma',
      'Uyku İhtiyacında Azalma: Birkaç saat uyumasına rağmen kendini zinde hissetme',
      'Aşırı Özgüven & Fevri Kararlar: Normalde yapmayacağı büyüklükte harcamalar veya riskli adımlar',
      'Fikir Uçuşması & Hızlı Konuşma: Düşüncelerin kelimelerden hızlı akması',
      'Döngüsel Depresyon: Yüksek dönemin ardından gelen derin içe çekilme',
      'Ötimik Aralıklar: Epizotlar arasında kişinin tamamen dengeli olduğu dönemler'
    ],
    overlappingWith: [
      {
        targetId: 'bpd_emotional',
        targetName: 'Sınırda (Borderline) Duygusal Düzensizlik',
        distinctionSummary: 'Bipolar dalgalanmaları haftalar sürer ve biyolojik ritimlerle ilişkilidir. BPD dalgalanmaları ise gün/saatler içinde ilişkisel tetikleyicilerle değişir.',
        keyDifferential: 'Bipolar epizotları dış olaylardan büyük ölçüde bağımsız seyreder.'
      }
    ],
    doctorDiscussionPoints: [
      'Az uyuyup kendinizi durdurulamaz hissettiğiniz dönemler oldu mu?',
      'Bu dönemlerde sonradan pişman olduğunuz aşırı harcamalar veya fevri kararlar aldınız mı?',
      'Ailenizde bipolar veya duygudurum tanısı olan birinin bulunup bulunmadığını iletin.'
    ]
  },

  autism_sensory: {
    id: 'autism_sensory',
    name: 'Otizm Spektrumu & Nöroçeşitlilik (Duyusal/İletişim)',
    shortName: 'Otizm / Nöroçeşitlilik',
    dsmCode: 'DSM-5 299.00 / ICD-11 6A02',
    tagline: 'Sosyal ipuçlarını okumada yorulma, duyusal hassasiyetler ve rutin ihtiyacı',
    accentColor: '#5C6478',
    category: 'Nörogelişimsel Spektrum',
    clinicalScale: 'AQ-10 & CAT-Q (Maskeleme Envanteri)',
    description: `Otizm spektrumu, beynin sosyal iletişim kodlarını, çevresel uyaranları ve bilgiyi işleme biçimindeki nörogelişimsel bir farklılıktır. Sosyal ortamlarda sürekli bilinçli maskeleme (masking) yapıldığı için yoğun tükenmişlik yaşanabilir.`,
    coreTraits: [
      'Sosyal Maskeleme (Masking): Mimik, göz teması ve konuşma sırasını bilinçli hesaplamak ve sonrasında tükenmek',
      'Duyusal Aşırı Yüklenme (Sensory Overload): Gürültü, florasan ışık veya kumaş dokularından dolayı sinir sisteminin aşırı yüklenmesi',
      'Derin & Özelleşmiş İlgi Alanları: Belirli bir konuya derin tutkuyla bağlanma',
      'Rutin ve Öngörülebilirlik İhtiyacı: Beklenmedik plan değişikliklerinde içsel dengenin bozulması',
      'Doğrudan İletişim Tercihi: İmaları ve satır arası mesajları çözmekte zorlanma; netlik isteme',
      'Regülasyon İhtiyacı: Stres anında yalnız kalıp duyusal olarak sıfırlanma ihtiyacı'
    ],
    overlappingWith: [
      {
        targetId: 'social_anxiety',
        targetName: 'Sosyal Anksiyete',
        distinctionSummary: 'Sosyal Anksiyete sosyal kodları bilir ama "yargılanmaktan korkar". Otizm ise sosyal kuralları sezgisel çözmekte güçlük çektiği için yorulur.',
        keyDifferential: 'Yalnızken duyusal hassasiyetleriniz ve rutin ihtiyacınız devam ediyorsa Otizm spektrumu işaretidir.'
      }
    ],
    doctorDiscussionPoints: [
      'Gürültülü, parlak ışıklı ortamlarda ne kadar süre kalabildiğinizi anlatın.',
      'Sosyal ortamlarda bir rol oynuyormuş gibi (masking) hissedip hissetmediğinizi paylaşın.',
      'Özel ilgi alanlarınız ve rutinlerinize olan bağlılığınızı hekiminize aktarın.'
    ]
  },

  social_anxiety: {
    id: 'social_anxiety',
    name: 'Sosyal Anksiyete (Sosyal Fobi)',
    shortName: 'Sosyal Anksiyete',
    dsmCode: 'DSM-5 300.23 / ICD-11 6B04',
    tagline: 'Sosyal ortamlarda olumsuz değerlendirilme ve rezil olma korkusu',
    accentColor: '#7A2634',
    category: 'Anksiyete Bozuklukları',
    clinicalScale: 'LSAS (Liebowitz Sosyal Kaygı Ölçeği)',
    description: `Sosyal Anksiyete Bozukluğu, kişinin başkaları tarafından incelenebileceği, eleştirilebileceği veya küçük düşebileceği ortamlara karşı duyduğu yoğun ve sürekli korkudur.`,
    coreTraits: [
      'Olumsuz Değerlendirilme Korkusu: Başkalarının kendisini yetersiz bulacağına dair inanç',
      'Sosyal Sonrası Ruminasyon: Sohbet bittikten sonra "Acaba yanlış bir şey dedim mi?" diye zihinde tekrar oynatma',
      'Bedensel Belirtilerin Görünmesinden Korkma: Yüz kızarması veya el titremesinin fark edilmesinden çekinme',
      'Performans Kaçınması: Sunum yapmaktan veya tanımadığı biriyle telefonda konuşmaktan kaçınma'
    ],
    overlappingWith: [
      {
        targetId: 'autism_sensory',
        targetName: 'Otizm Spektrumu',
        distinctionSummary: 'Sosyal anksiyetede kişi diğer insanların ne düşündüğünü aşırı tahmin eder. Otizmde ise kişi karşı tarafın niyetini sezmekte zorlanır.',
        keyDifferential: 'Yakın 1-2 arkadaşınızla baş başayken tamamen rahatsanız Sosyal Anksiyete daha olasıdır.'
      }
    ],
    doctorDiscussionPoints: [
      'Sosyal ortamlara girmeden önceki günler ve sonrasındaki zihinsel süreçleri açıklayın.',
      'Bu kaygı sebebiyle kariyerinizde veya eğitiminizde geri planda kaldığınız durumları belirtin.'
    ]
  },

  trauma_ptsd: {
    id: 'trauma_ptsd',
    name: 'Travma Sonrası Stres & Tetikleyiciler (TSSB)',
    shortName: 'TSSB / Travma',
    dsmCode: 'DSM-5 309.81 / ICD-11 6B40',
    tagline: 'Geçmiş travmatik deneyimlerin istilacı anılar ve aşırı tetiktelikle yeniden yaşanması',
    accentColor: '#7A2634',
    category: 'Travma ve Stresörle İlişkili',
    clinicalScale: 'PCL-5 (DSM-5 TSSB Kontrol Listesi)',
    description: `TSSB, ağır bir olay veya sürekli ihmal/istismar sonrasında beynin tehdit işleme sisteminin takılı kalmasıdır. Olay geçmişte kalsa da sinir sistemi tehlikedeymiş gibi tepki verir.`,
    coreTraits: [
      'İstilacı Anılar (Flashbackler): Olayı hatırlatan bir koku veya sesle anı yeniden yaşıyormuş gibi hissetme',
      'Kaçınma Davranışı: Olayı hatırlatan mekanlardan veya duygulardan kaçınma',
      'Aşırı Tetikte Olma (Hypervigilance): Çevresini sürekli bir tehlike varmış gibi tarama',
      'Duygusal Hissizleşme: Olumlu duyguları hissetmekte zorlanma, dünyaya yabancılaşma'
    ],
    overlappingWith: [
      {
        targetId: 'anxiety',
        targetName: 'Yaygın Anksiyete',
        distinctionSummary: 'Yaygın anksiyete geleceğe yönelik belirsizliklerden korkar; TSSB geçmiş travmanın tekrarından kaçınır.',
        keyDifferential: 'Kaygınız spesifik anılar veya benzer ses/kokularla aniden patlıyorsa Travma kökeni yüksektir.'
      }
    ],
    doctorDiscussionPoints: [
      'Düşündüğünüzde bedensel tepkiler (çarpıntı, titreme) hissettiğiniz geçmiş deneyimleri anlatın.',
      'Sizi aniden geçmişe götüren belirli tetikleyici durumları belirtin.'
    ]
  },

  bpd_emotional: {
    id: 'bpd_emotional',
    name: 'Duygusal Düzensizlik & Yoğun Tepkisellik',
    shortName: 'Duygusal Düzensizlik / BPD',
    dsmCode: 'DSM-5 301.83 / ICD-11 6D11.5',
    tagline: 'Hızlı duygusal iniş-çıkışlar, terk edilmeye aşırı hassasiyet ve kimlik karmaşası',
    accentColor: '#7A2634',
    category: 'Kişilik ve Duygu Regülasyonu',
    clinicalScale: 'MSI-BPD & DERS (Duygu Düzenleme Güçlüğü Ölçeği)',
    description: `Duygusal Düzensizlik, bireyin duygusal acı eşiğinin düşük olması ve hissettiği duyguları regüle etmekte büyük zorluk yaşamasıdır. Terk edilme algısı yoğun bir boşluk ve öfke yaratabilir.`,
    coreTraits: [
      'Hızlı Duygusal Salınımlar: Gün içinde saatler içinde aşırı neşeden derin umutsuzluğa veya öfkeye geçiş',
      'Terk Edilme Dehşeti: Gerçek ya da hayali bir ayrılık hissinde aşırı tepkiler verme',
      'Siyah-Beyaz Düşünme (Splitting): İnsanları ya kusursuz ya da düşman olarak görme',
      'Kronik İçsel Boşluk: Göğsünde derin bir anlamsızlık ve kim olduğunu bilememe hissi'
    ],
    overlappingWith: [
      {
        targetId: 'bipolar',
        targetName: 'Bipolar Bozukluk',
        distinctionSummary: 'Bipolar atakları haftalar sürer. BPD dalgalanmaları ise ilişkisel bir olayla (mesaja geç cevap verilmesi gibi) anında tetiklenir.',
        keyDifferential: 'Duygu değişimleriniz gün içinde birinin size olan tavrına göre değişiyorsa BPD ön plandadır.'
      }
    ],
    doctorDiscussionPoints: [
      'İlişkilerinizde en ufak bir soğukluk hissettiğinizde yaşadığınız içsel fırtınaları anlatın.',
      'Duygularınızın gün içindeki iniş çıkış sıklığını paylaşın.'
    ]
  }
};
