/**
 * 9spectrum - 2. ve 3. Aşama: Kapsamlı Ayırıcı Tanı ve Derinleşme Soru Kütüphanesi
 * Örtüşen belirti kümelerini nörobiyolojik mekanizma, düşünce yapısı, çocukluk kökeni
 * ve tetikleyicilere göre ayıran senaryo temelli ayırıcı sorular.
 */

import type { DifferentialBranches } from "@/lib/types";

export const DIFFERENTIAL_BRANCHES: DifferentialBranches = {
  // 1. DEHB vs OKB Ayırıcı Modülü
  adhd_vs_ocd: {
    id: 'adhd_vs_ocd',
    title: 'DEHB vs. OKB Ayırıcı Tanı Modülü',
    reason: 'Hem odaklanma güçlüğü/erteleme hem de kontrol/mükemmeliyetçilik eğilimi tespit edildi.',
    questions: [
      {
        id: 'diff_adhd_ocd_origin',
        category: 'Ayırıcı Analiz: Odak Kaybının ve Ertelemenin Kökeni',
        question: 'Bir göreve başlamakta veya sürdürmekte zorlandığınızda, arka planda yatan ana zihinsel mekanizma hangisidir?',
        clinicalNote: 'Dopaminerjik uyarılma arayışı (DEHB) vs. İntrüzyonel kaygıyı nötralize etme dürtüsü (OKB).',
        options: [
          {
            text: 'Zihnim sürekli daha heyecanlı, yeni ve ilginç konulara kayıyor; iş sıkıcı geldiği için başlatıcı dopamini bulamıyorum.',
            points: { adhd: 5, ocd: 0 },
            explanation: 'DEHB karakteristiği: Düşük bazal dopamin uyarılması ve yenilik arayışı.'
          },
          {
            text: 'Aklıma takılan bir şüpheyi, kontrol etme ihtiyacını veya "tam kusursuz yapmalıyım" kaygısını aşamadığım için kilitleniyorum.',
            points: { adhd: 0, ocd: 5 },
            explanation: 'OKB karakteristiği: Mükemmeliyetçilik ve şüphe döngüsünün yarattığı erteleme.'
          },
          {
            text: 'Her ikisi de bir arada: Hem dikkatim çok dağınık hem de kontrol etmezsem bir şeylerin ters gideceğine dair takıntılarım var.',
            points: { adhd: 4, ocd: 4 },
            explanation: 'DEHB + OKB Komorbiditesi (Birlikte bulunma durumu).'
          },
          {
            text: 'Genellikle odaklanırım, bu iki durum da bana tam uymuyor.',
            points: { adhd: 0, ocd: 0 },
            explanation: 'Nötr durum.'
          }
        ]
      },
      {
        id: 'diff_adhd_ocd_rules',
        category: 'Ayırıcı Analiz: Düzen ve Plan Yapma Alışkanlığı',
        question: 'Gündelik hayatınızda ajanda tutma, listeler yapma ve düzen kurma çabanız nasıl sonuçlanır?',
        clinicalNote: 'Dışsal yapı kurma ihtiyacı ve sürdürme zorluğu (DEHB) vs. Katı törensel kural bağımlılığı (OKB).',
        options: [
          {
            text: 'Büyük bir hevesle yeni ajandalar ve renkli planlar yaparım ama 3 gün sonra sistemi kaybeder veya dağınıklığa teslim olurum.',
            points: { adhd: 5, ocd: 0 },
            explanation: 'DEHB yürütücü işlev zorluğu: Yapı kurma arzusu var ama sürdürülebilirlik zayıf.'
          },
          {
            text: 'Belirli kurallarım ve sıralamam vardır; bunlara uyulmadığında veya biri eşyalarımın yerini değiştirdiğinde yoğun huzursuzluk hissederim.',
            points: { adhd: 0, ocd: 5 },
            explanation: 'OKB düzen ve simetri ihtiyacı: Düzen kaygıyı dindiren bir kalkandır.'
          },
          {
            text: 'Dağınıklığımdan ve unutkanlığımdan çok korktuğum için kendime aşırı katı kontrol mekanizmaları koyarım.',
            points: { adhd: 3, ocd: 3 },
            explanation: 'DEHB zemininde gelişen telafi edici kompulsif kontrol davranışı.'
          }
        ]
      }
    ]
  },

  // 2. DEHB vs Bipolar Hipomani Ayırıcı Modülü
  adhd_vs_bipolar: {
    id: 'adhd_vs_bipolar',
    title: 'DEHB vs. Bipolar (Hipomani) Ayırıcı Tanı Modülü',
    reason: 'Yüksek zihinsel hız, konuşkanlık ve çoklu fikir üretme belirtileri tespit edildi.',
    questions: [
      {
        id: 'diff_adhd_bipolar_timeline',
        category: 'Ayırıcı Analiz: Zaman Çizelgesi ve Süreklilik',
        question: 'Bu yüksek enerji, hızlı konuşma, aklınıza onlarca fikir gelmesi ve yerinde duramama hali hayatınızda nasıl bir seyir izler?',
        clinicalNote: 'Süreğen mizaç/gelişimsel yapı (DEHB) vs. Epizodik, atak bazlı döngüler (Bipolar).',
        options: [
          {
            text: 'Çocukluğumdan beri hayatımın genel zemininde hep böyleyim; sürekli zihnim sabırsız ve hızlıdır.',
            points: { adhd: 5, bipolar: 0 },
            explanation: 'DEHB’nin nörogelişimsel süreklilik profili.'
          },
          {
            text: 'Sürekli değil; belirli dönemlerde (birkaç gün veya hafta) aşırı yükselir, sonra yerini normal veya çöküş dönemlerine bırakır.',
            points: { adhd: 0, bipolar: 6 },
            explanation: 'Bipolar spektrumun epizodik (atak bazlı) karakteri.'
          },
          {
            text: 'Genelde odaklanmakta zorlanırım ama yılda 1-2 kez haftalarca inanılmaz enerjik olduğum ataklar yaşarım.',
            points: { adhd: 3, bipolar: 4 },
            explanation: 'DEHB ve Bipolar komorbidite olasılığı.'
          }
        ]
      },
      {
        id: 'diff_adhd_bipolar_sleep',
        category: 'Ayırıcı Analiz: Uyku Biyolojisi ve Yorgunluk',
        question: 'Günde sadece 2-3 saat uyuduğunuz günlerde ertesi gün bedeniniz ne hisseder?',
        clinicalNote: 'Uyku fazı gecikmesi fakat ertesi gün bitkinlik (DEHB) vs. Biyolojik uyku ihtiyacının azalması (Hipomani).',
        options: [
          {
            text: 'Gece zihnim susmadığı için geç uyurum ama ertesi gün çok uykulu, sersem ve yorgun olurum.',
            points: { adhd: 5, bipolar: 0 },
            explanation: 'DEHB’de uyku fazı gecikmesi ve zihinsel aşırı uyarılma.'
          },
          {
            text: 'Sadece 2-3 saat uyumama rağmen kendimi günlerce bomba gibi enerjik, durdurulamaz ve uykusuzluk hissetmez halde bulurum.',
            points: { adhd: 0, bipolar: 6 },
            explanation: 'Bipolar hipomaninin en ayırt edici kardinal semptomu (uyku ihtiyacının fizyolojik olarak azalması).'
          }
        ]
      }
    ]
  },

  // 3. DEHB vs Depresyon / Tükenmişlik Ayırıcı Modülü
  adhd_vs_depression: {
    id: 'adhd_vs_depression',
    title: 'DEHB vs. Depresyon / Tükenmişlik Ayırıcı Modülü',
    reason: 'Motivasyon düşüklüğü, yataktan çıkmakta zorlanma ve erteleme belirtileri tespit edildi.',
    questions: [
      {
        id: 'diff_adhd_dep_spark',
        category: 'Ayırıcı Analiz: İlgi ve Heyecan Kıvılcımı Testi',
        question: 'Çok sevdiğiniz, tutku duyduğunuz yeni ve heyecan verici bir konu/proje önünüze gelse ne hissedersiniz?',
        clinicalNote: 'Dopaminerjik seçici hiperodak (DEHB) vs. Yaygın anhedoni ve hissizlik (Depresyon).',
        options: [
          {
            text: 'Hemen gözlerim parlar, saatlerce uykusuz kalıp o konuyu araştırabilir ve yüksek heyecanla kendimi kaptırabilirim.',
            points: { adhd: 5, depression: 0 },
            explanation: 'DEHB hiperodak yeteneği (İlgi varsa dopamin akar).'
          },
          {
            text: 'Dünyanın en güzel şeyi de gelse içimde hiçbir kıvılcım çakmaz; derin bir hissizlik ve anlamsızlık duyarım.',
            points: { adhd: 0, depression: 6 },
            explanation: 'Klinik depresyon anhedoni belirtisi (zevk alma mekanizmasının çöküşü).'
          },
          {
            text: 'Heveslenmek isterim ama bedenimde o kadar büyük bir tükenmişlik var ki elimi bile kaldıramam.',
            points: { adhd: 3, depression: 4 },
            explanation: 'Kronik nöroçeşitli tükenmişlik (Burnout) tablosu.'
          }
        ]
      },
      {
        id: 'diff_adhd_dep_self_view',
        category: 'Ayırıcı Analiz: Öz-Değer ve İçsel Diyalog',
        question: 'Bir işi yetiştiremediğinizde veya ertelediğinizde kafanızın içindeki temel ses ne söyler?',
        clinicalNote: 'Potansiyelini gerçekleştirememe çaresizliği (DEHB) vs. Varoluşsal değersizlik ve suçluluk (Depresyon).',
        options: [
          {
            text: '"Neden böyleyim, aslında yapabileceğimi ve zeki olduğumu biliyorum ama beynim bir türlü marş basmıyor!"',
            points: { adhd: 5, depression: 0 },
            explanation: 'DEHB yürütücü işlev yetersizliği çelişkisi.'
          },
          {
            text: '"Ben tamamen yetersiz, değersiz ve işe yaramaz biriyim; zaten hiçbir zaman hiçbir şeyi hak etmedim."',
            points: { adhd: 0, depression: 5 },
            explanation: 'Depresif otomatik negatif düşünce ve değersizlik şeması.'
          }
        ]
      }
    ]
  },

  // 4. Sosyal Anksiyete vs Otizm Spektrumu / Duyusal Profil Ayırıcı Modülü
  social_anxiety_vs_autism: {
    id: 'social_anxiety_vs_autism',
    title: 'Sosyal Anksiyete vs. Otizm Spektrumu Ayırıcı Modülü',
    reason: 'Sosyal ortamlarda yoğun yorgunluk ve kaçınma eğilimi tespit edildi.',
    questions: [
      {
        id: 'diff_soc_aut_mechanism',
        category: 'Ayırıcı Analiz: Sosyal Kaçınmanın Temel Nedeni',
        question: 'İnsanların olduğu bir ortama girmekten kaçındığınızda veya yorulduğunuzda, asıl sebep hangisidir?',
        clinicalNote: 'Yargılanma korkusu (Sosyal Anksiyete) vs. Sosyal kodları sezgisel çözememe ve duyusal yük (Otizm).',
        options: [
          {
            text: 'İnsanların benim hakkımda ne düşüneceği, beni yetersiz/garip bulup eleştirecekleri veya rezil olacağım korkusu.',
            points: { social_anxiety: 6, autism_sensory: 0 },
            explanation: 'Sosyal Anksiyete: Olumsuz değerlendirilme korkusu.'
          },
          {
            text: 'Sosyal kuralları, imaları ve beden dilini anlamak için sürekli zihnimde bilinçli hesap yapmaktan ve ortamdaki gürültü/ışık gibi duyusal yükten yorulmam.',
            points: { social_anxiety: 0, autism_sensory: 6 },
            explanation: 'Otizm Spektrumu: Sosyal maskeleme (masking) ve duyusal aşırı yüklenme.'
          },
          {
            text: 'Hem sosyal kuralları anlamakta zorlanıp yoruluyorum hem de hata yapıp rezil olmaktan aşırı korkuyorum.',
            points: { social_anxiety: 4, autism_sensory: 4 },
            explanation: 'Otistik zemin üzerine eklenen ikincil sosyal fobi.'
          }
        ]
      },
      {
        id: 'diff_soc_aut_alone',
        category: 'Ayırıcı Analiz: Yalnız ve Güvendeykenki Haliniz',
        question: 'Evde, tamamen yalnız ve kimsenin sizi görmediği anlarda duyusal ve davranışsal durumunuz nasıldır?',
        clinicalNote: 'Yalnızken tamamen rahatlayan anksiyete vs. Yalnızken de devam eden duyusal/rutin ihtiyaçları (Otizm).',
        options: [
          {
            text: 'Yalnızken tamamen huzurlu ve rahatımdır; hiçbir takıntılı duyusal veya iletişim kaygım kalmaz.',
            points: { social_anxiety: 5, autism_sensory: 0 },
            explanation: 'Sosyal Anksiyete sadece sosyal tehdit algılandığında tetiklenir.'
          },
          {
            text: 'Yalnızken bile kıyafetlerin kumaşı, ses hassasiyeti, belirli rutinlerime bağlılık ve özel ilgi alanlarıma dalma ihtiyacım aynen devam eder.',
            points: { social_anxiety: 0, autism_sensory: 6 },
            explanation: 'Otizm spektrumunun biyolojik ve duyusal sürekliliği.'
          }
        ]
      }
    ]
  },

  // 5. OKB vs Yaygın Anksiyete (YAB) Ayırıcı Modülü
  ocd_vs_anxiety: {
    id: 'ocd_vs_anxiety',
    title: 'OKB vs. Yaygın Anksiyete (YAB) Ayırıcı Modülü',
    reason: 'Sürekli zihinsel endişe, kontrol ve felaket beklentisi tespit edildi.',
    questions: [
      {
        id: 'diff_ocd_anx_nature',
        category: 'Ayırıcı Analiz: Düşüncelerin Niteliği ve Ritüeller',
        question: 'Zihninizi meşgul eden endişelerin konusu ve bunlarla başa çıkma şekliniz nasıldır?',
        clinicalNote: 'Gerçek yaşam endişeleri (YAB) vs. Tabu/büyülü intrüzyonlar ve nötralize edici eylemler (OKB).',
        options: [
          {
            text: 'Gündelik gerçek hayat konuları (sağlık, ekonomi, aile, iş) hakkında sürekli "ya şöyle olursa" diye kesintisiz bir endişe zinciri yaşarım; özel bir ritüelim yoktur.',
            points: { anxiety: 6, ocd: 0 },
            explanation: 'Yaygın Anksiyete Bozukluğu (YAB) profili.'
          },
          {
            text: 'Aklıma çok mantıksız veya rahatsız edici görüntüler/şüpheler (bulaşma, kapı açık kaldı mı, birine zarar verir miyim) gelir ve rahatlamak için belirli fiziksel/zihinsel şeyleri tekrarlamak zorunda kalırım.',
            points: { anxiety: 0, ocd: 6 },
            explanation: 'Obsesif Kompulsif Bozukluk (OKB) obsesyon ve kompulsiyon yapısı.'
          },
          {
            text: 'Hem genel hayat endişelerim var hem de bazı spesifik şeyleri tekrar tekrar kontrol etmeden rahat edemiyorum.',
            points: { anxiety: 4, ocd: 4 },
            explanation: 'Anksiyete ve OKB birlikteliği.'
          }
        ]
      }
    ]
  },

  // 6. Bipolar vs Duygusal Düzensizlik (BPD) Ayırıcı Modülü
  bipolar_vs_bpd: {
    id: 'bipolar_vs_bpd',
    title: 'Bipolar vs. Duygusal Düzensizlik (BPD) Ayırıcı Modülü',
    reason: 'Yoğun duygusal dalgalanmalar ve ani tepkisellik tespit edildi.',
    questions: [
      {
        id: 'diff_bipolar_bpd_triggers',
        category: 'Ayırıcı Analiz: Dalgalanmaların Süresi ve Tetikleyicisi',
        question: 'Ruh halinizdeki ani ve yoğun değişimler genellikle ne kadar sürer ve neyle tetiklenir?',
        clinicalNote: 'Biyolojik ritimli uzun dönemler (Bipolar) vs. İlişkisel tetikleyicilerle saatlik dalgalanma (BPD).',
        options: [
          {
            text: 'Genellikle dışarıdaki bir olaydan bağımsız olarak haftalarca çok enerjik veya haftalarca çok çökkün hissederim; değişimler uzun periyotludur.',
            points: { bipolar: 6, bpd_emotional: 0 },
            explanation: 'Bipolar Bozukluk biyolojik epizot yapısı.'
          },
          {
            text: 'Gün içinde bir mesaj, bir bakış veya sevdiğim birinin soğuk tavrıyla dakikalar içinde aşırı neşeden derin bir öfke veya terk edilmişlik acısına savrulurum.',
            points: { bipolar: 0, bpd_emotional: 6 },
            explanation: 'Duygusal Düzensizlik (Borderline) ilişkisel tetiklenme paterni.'
          },
          {
            text: 'Hem genel mevsimsel/dönemsel döngülerim var hem de ilişkilerimde çok fırtınalı ve tepkiselim.',
            points: { bipolar: 4, bpd_emotional: 4 },
            explanation: 'Bipolar ve Duygu Düzenleme Güçlüğü örtüşmesi.'
          }
        ]
      },
      {
        id: 'diff_bipolar_bpd_identity',
        category: 'Ayırıcı Analiz: İçsel Boşluk ve Benlik Hissi',
        question: 'Kendinizi tanımlarken "ben kimim, hayattaki amacım ne?" sorusuna verdiğiniz yanıt nasıl hissettirir?',
        clinicalNote: 'Benlik bütünlüğü korunmuş episodik dalgalanma (Bipolar) vs. Kronik kimlik karmaşası ve boşluk (BPD).',
        options: [
          {
            text: 'Kim olduğumu, değerlerimi bilirim; sadece manik dönemde kendimi dev gibi, depresyonda ise çaresiz hissederim.',
            points: { bipolar: 5, bpd_emotional: 0 },
            explanation: 'Bipolar duygudurum kayması.'
          },
          {
            text: 'İçimde kronik, dipsiz bir boşluk var; kim olduğumu tam bilmiyor gibi hisseder, ortama ve ilişkiye göre bukalemun gibi şekil alırım.',
            points: { bipolar: 0, bpd_emotional: 6 },
            explanation: 'BPD kimlik difüzyonu ve kronik içsel boşluk.'
          }
        ]
      }
    ]
  },

  // 7. Travma (TSSB) vs Yaygın Anksiyete Ayırıcı Modülü
  trauma_vs_anxiety: {
    id: 'trauma_vs_anxiety',
    title: 'Travma (TSSB) vs. Yaygın Anksiyete Ayırıcı Modülü',
    reason: 'Aşırı tetiktelik, beden alarmı ve ani irkilmeler tespit edildi.',
    questions: [
      {
        id: 'diff_trauma_anx_flashback',
        category: 'Ayırıcı Analiz: Geçmiş Anılar ve Tetikleyiciler',
        question: 'Bedeninizdeki veya zihninizdeki yoğun panik hissi başladığında, geçmişteki belirli olaylarla bir bağlantı hissediyor musunuz?',
        clinicalNote: 'İntrüzyonel travmatik anı/flashback (TSSB) vs. Genel serbest yüzen kaygı (YAB).',
        options: [
          {
            text: 'Evet; belirli sesler, kokular veya tonlamalar beni aniden geçmişte yaşadığım kötü bir ana götürür ve o anı yeniden yaşıyormuş gibi donup kalırım.',
            points: { trauma_ptsd: 6, anxiety: 0 },
            explanation: 'TSSB Flashback ve travmatik tetiklenme.'
          },
          {
            text: 'Hayır; geçmişteki spesifik bir olaydan ziyade gelecekte başıma gelebilecek olası kötü senaryolardan dolayı kaygılanırım.',
            points: { trauma_ptsd: 0, anxiety: 6 },
            explanation: 'Yaygın Anksiyete geleceğe yönelik felaketleştirme.'
          },
          {
            text: 'Geçmişte ağır deneyimlerim oldu ve bu durum beni hayatın her alanında sürekli tetikte bir insan yaptı.',
            points: { trauma_ptsd: 5, anxiety: 4 },
            explanation: 'Travma zeminli yaygın anksiyete.'
          }
        ]
      }
    ]
  },

  // 8. DEHB Alt Tipleri Derinleşme Modülü
  adhd_deep_dive: {
    id: 'adhd_deep_dive',
    title: 'DEHB Alt Tip ve Nüans Derinleşme Modülü',
    reason: 'Yüksek DEHB eğilimi tespit edildi; alt tipi netleştirmek için derinleştirildi.',
    questions: [
      {
        id: 'diff_adhd_subtypes',
        category: 'Derinleşme: Fiziksel vs Zihinsel Hiperaktivite',
        question: 'Huzursuzluk ve sabırsızlık hissiniz daha çok nerede yaşanır?',
        clinicalNote: 'Dikkatsizlik Baskın (Inattentive) vs. Hiperaktif/Dürtüsel Baskın (Hyperactive) vs. Birleşik Tip.',
        options: [
          {
            text: 'Daha çok zihnimin içinde: Dışarıdan sakin görünürüm ama kafamın içinde sürekli bir hayal dünyası, unutkanlık ve odak kopması yaşanır.',
            points: { adhd: 5 },
            subTypeTag: 'Dikkatsizlik Baskın Tip DEHB (Inattentive / ADD)'
          },
          {
            text: 'Fiziksel olarak: Ayaklarımı sallamadan duramam, sürekli kıpırdanırım, lafın arasına girerim ve sabırsızlıkla doluyumdur.',
            points: { adhd: 5 },
            subTypeTag: 'Hiperaktif / Dürtüsel Baskın Tip DEHB'
          },
          {
            text: 'Tamamen ikisi birden: Hem aşırı unutkan ve hayalperestim hem de fiziksel olarak durmakta ve sıramı beklemekte çok zorlanırım.',
            points: { adhd: 6 },
            subTypeTag: 'Birleşik Tip DEHB (Combined Type)'
          }
        ]
      }
    ]
  }
};
