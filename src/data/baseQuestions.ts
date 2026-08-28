/**
 * 9spectrum - 1. Aşama: Kapsamlı Çatı Tarama ve Genel Triyaj Soru Bankası
 * 9 temel psikolojik boyutu çok yönlü (dikkat, takıntı, duygudurum, kaygı, biyolojik ritim,
 * sosyal/duyusal işleme, duygu regülasyonu, travma ve bipolar) tarayan kapsamlı klinik soru.
 */

import type { BaseQuestion } from "@/lib/types";
import { ADULT_EXTRA_QUESTIONS } from "@/data/adultExtra";

const CORE_BASE_QUESTIONS: BaseQuestion[] = [
  // 1. DEHB: Yürütücü İşlevler ve Başlama Felci
  {
    id: 'base_adhd_initiation',
    phase: 1,
    category: 'Yürütücü İşlevler & Odak',
    dimension: 'adhd',
    question: 'Yapmanız gereken önemli bir işin (rapor, ödev, ev düzeni, e-posta) başına oturmak sizin için ne kadar zordur?',
    subtitle: 'Zihnen yapmak isteyip saatlerce başlayamama (başlatma felci), dikkatin sürekli başka şeylere kayması ve son dakikaya kadar erteleme.',
    clinicalNote: 'ASRS-v1.1 Kriter 1 & Wender Utah: Prefrontal korteks başlatıcı kıvılcım (marş motoru) ve dopaminerjik regülasyon analizi.',
    options: [
      { text: 'Genellikle zorlanmam; planımı yapar ve makul sürede başlarım.', weights: { adhd: 0 } },
      { text: 'Bazen sıkıcı işlerde ertelediğim olur ama ciddileşince toparlarım.', weights: { adhd: 1 } },
      { text: 'Sık sık; başlamak adeta fiziksel bir acı gibi gelir, saatlerce kendimle savaşırım ve son ana ertelerim.', weights: { adhd: 3, depression: 1 } },
      { text: 'Neredeyse her gün ve hayatımın her alanında; bu başlatma savaşı potansiyelimi gerçekleştirmemi ciddi biçimde baltalıyor.', weights: { adhd: 5, depression: 1 } }
    ]
  },

  // 2. DEHB: Zaman Algısı & Hiperodak
  {
    id: 'base_adhd_hyperfocus_time',
    phase: 1,
    category: 'Dikkat Düzenleme & Zaman Algısı',
    dimension: 'adhd',
    question: 'Zaman algınız ve ilginizi çeken konulara odaklanma şekliniz nasıl işler?',
    subtitle: 'Zamanın nasıl geçtiğini anlayamama (zaman körlüğü), randevulara geç kalma veya aşırı ilgilendiğiniz bir konuya saatlerce kilitlenip yemek yemeyi bile unutma.',
    clinicalNote: 'ASRS-v1.1 Kriter 4: Hiperodaklanma (Hyperfocus) ve zaman körlüğü (Time Blindness) dinamiği.',
    options: [
      { text: 'Zamanımı dengeli yönetirim; bir işe çok dalsam bile gerektiğinde odağımı değiştirebilirim.', weights: { adhd: 0 } },
      { text: 'Bazen sevdiğim bir oyuna/diziye dalarım ama genel hayatımı aksatmaz.', weights: { adhd: 1 } },
      { text: 'Sık sık bir şeyin ne kadar süreceğini yanlış hesaplarım veya ilgimi çeken bir şeye saatlerce kilitlenip diğer her şeyi unuturum.', weights: { adhd: 3 } },
      { text: 'Zaman algım tamamen "şimdi" ve "şimdi değil"den ibarettir; ya sıfır odaklanırım ya da dünyadan kopup hiperodakta kaybolurum.', weights: { adhd: 5 } }
    ]
  },

  // 3. DEHB: Zihinsel Hız & Sabırsızlık
  {
    id: 'base_adhd_restlessness',
    phase: 1,
    category: 'Zihinsel Huzursuzluk & Dürtü',
    dimension: 'adhd',
    question: 'Kafanızın içindeki düşünce hızı ve sabırsızlık düzeyiniz nasıldır?',
    subtitle: 'Zihinde aynı anda birden fazla radyonun çalması gibi sürekli gürültü, insanların lafını tamamlama isteği veya uzun açıklamaları dinlerken içsel patlama hissi.',
    clinicalNote: 'ASRS-v1.1 Kriter 5-6: Zihinsel hiperaktivite, dürtüsellik ve bilişsel hız regülasyonu.',
    options: [
      { text: 'Zihnim genellikle sakindir, insanları sabırla dinler ve sıramı bekleyebilirim.', weights: { adhd: 0 } },
      { text: 'Bazen sabırsızlanırım ama kendimi kolayca kontrol ederim.', weights: { adhd: 1 } },
      { text: 'Zihnim sürekli çok hızlı çalışır; yavaş konuşan insanlara tahammül etmekte veya uzun kuyruklarda durmakta çok zorlanırım.', weights: { adhd: 3, bipolar: 1 } },
      { text: 'Kafamın içinde hiç susmayan 5 ayrı ses/düşünce var gibi; sürekli hareket etme, araya girme veya yeni bir uyarana atlama ihtiyacı hissederim.', weights: { adhd: 5, bipolar: 1 } }
    ]
  },

  // 4. OKB: Şüphe ve Kontrol Ritüelleri
  {
    id: 'base_ocd_checking',
    phase: 1,
    category: 'Zihinsel Döngüler & Şüphe',
    dimension: 'ocd',
    question: 'Kapıyı kilitlediğinizden, ocağı kapattığınızdan veya bir hata yapmadığınızdan emin olmak için ne sıklıkla tekrar tekrar kontrol etme ihtiyacı duyarsınız?',
    subtitle: 'Kafanızda "ya kapatmadıysam, ya başıma bir felaket gelirse" şüphesini bir türlü susturamama ve rahatlamak için defalarca bakma.',
    clinicalNote: 'Y-BOCS & OCI-R Kontrol Alt Boyutu: Patolojik şüphe ve güvenlik arayışı kompulsiyonları.',
    options: [
      { text: 'Normal; bir kez kontrol eder ve aklımdan çıkarırım.', weights: { ocd: 0 } },
      { text: 'Bazen evden çıkarken şüpheye düşüp bir kez daha baktığım olur.', weights: { ocd: 1 } },
      { text: 'Sık sık; emin olmama rağmen içimdeki huzursuzluğu dindirmek için 2-3 kez kontrol etmeden rahat edemem.', weights: { ocd: 3, anxiety: 1 } },
      { text: 'Sürekli; kontroller hayatımı esir almış durumda, bazen fotoğrafını çeker veya geri dönüp saatlerce kontrol ederim.', weights: { ocd: 5, anxiety: 2 } }
    ]
  },

  // 5. OKB: İntrüzyonel (İstem Dışı) Tabu Düşünceler & Nötralizasyon
  {
    id: 'base_ocd_intrusions',
    phase: 1,
    category: 'Takıntılı Düşünceler & Zihinsel Ritüeller',
    dimension: 'ocd',
    question: 'Aklınıza ahlakınıza, inançlarınıza veya değerlerinize tamamen zıt, korkutucu veya saçma istem dışı düşünceler/görüntüler gelir mi?',
    subtitle: 'Sevdiklerinize zarar verme korkusu, bulaşma/kirlenme takıntısı veya bu düşünceleri yok etmek için zihninizde sayı sayma, dua okuma ya da kelime tekrarlama.',
    clinicalNote: 'OCI-R Obsesyon ve Nötralizasyon Boyutu: Ego-distonik istilacı düşünceler ve zihinsel kompulsiyonlar.',
    options: [
      { text: 'Hayır, aklıma gelen düşünceleri önemsemem ve kolayca geçer gider.', weights: { ocd: 0 } },
      { text: 'Bazen saçma düşünceler gelir ama üzerinde durmam.', weights: { ocd: 1 } },
      { text: 'Bu düşünceler bende yoğun suçluluk ve korku yaratır; zihnimden kovmak için belirli kelimeleri veya hareketleri tekrarlarım.', weights: { ocd: 3, anxiety: 1 } },
      { text: 'Çok yoğun; bu davetsiz düşünceler beni dehşete düşürüyor, onları "nötralize" etmek için zihinsel ritüeller yapmaktan tükeniyorum.', weights: { ocd: 5, anxiety: 2 } }
    ]
  },

  // 6. Depresyon: Anhedoni ve İlgi Kaybı
  {
    id: 'base_dep_anhedonia',
    phase: 1,
    category: 'Duygudurum & Zevk Alma Kapasitesi',
    dimension: 'depression',
    question: 'Son birkaç aydır, eskiden sizi heyecanlandıran ve keyif veren aktivitelere (hobiler, müzik, arkadaş buluşmaları) karşı hissiniz nasıl?',
    subtitle: 'Hayatın tadının tamamen kaçması, derin bir boşluk, renksizlik ve duygusal bir uyuşma hali.',
    clinicalNote: 'PHQ-9 Madde 1: Anhedoni (Klinik depresyonun en temel kardinal belirtisi).',
    options: [
      { text: 'Hobilerimden ve günlük aktivitelerimden keyif almaya devam ediyorum.', weights: { depression: 0 } },
      { text: 'Bazen yorgunluktan hevesim kaçabiliyor ama genellikle zevk alırım.', weights: { depression: 1 } },
      { text: 'Belirgin bir hissizlik var; eskiden sevdiğim şeyleri yaparken bile içimde hiçbir duygu uyanmıyor.', weights: { depression: 3 } },
      { text: 'Tamamen duygusal bir uyuşma ve anlamsızlık içindeyim; hiçbir şey beni neşelendirmiyor ve motive etmiyor.', weights: { depression: 5 } }
    ]
  },

  // 7. Depresyon: Beden Ağırlığı & Değersizlik Şeması
  {
    id: 'base_dep_worthlessness',
    phase: 1,
    category: 'Enerji & Öz-Değer',
    dimension: 'depression',
    question: 'Sabahları güne başlarken bedeninizdeki enerji düzeyi ve kendiniz hakkındaki içsel düşünceleriniz nasıldır?',
    subtitle: 'Yataktan kalkmanın tonlarca ağırlık gibi gelmesi, basit bir duş almanın bile aşırı yorması ve "ben yetersizim/yüküm" düşünceleri.',
    clinicalNote: 'PHQ-9 Madde 4-6 & Beck Depresyon: Psikomotor yavaşlama ve negatif kognitif üçlü (kendilik değeri).',
    options: [
      { text: 'Genellikle dinlenmiş uyanırım ve kendime güvenirim.', weights: { depression: 0 } },
      { text: 'Yoğun haftalarda yorgun hissederim ama kendimi suçlamam.', weights: { depression: 1 } },
      { text: 'Sık sık bedenimde ağır bir kurşun yükü varmış gibi kalkarım ve kendimi sürekli başarısız hissederim.', weights: { depression: 3, adhd: 1 } },
      { text: 'Her sabah uyanmak bir ızdırap; kendimi tamamen işe yaramaz ve etrafımdaki herkese sadece bir yük olarak görüyorum.', weights: { depression: 5 } }
    ]
  },

  // 8. Yaygın Anksiyete: Kronik Felaketleştirme
  {
    id: 'base_anx_worry',
    phase: 1,
    category: 'Kaygı & Felaket Beklentisi',
    dimension: 'anxiety',
    question: 'Geleceğe dair belirsizlikler karşısında zihniniz otomatik olarak nasıl bir senaryo üretir?',
    subtitle: 'En ufak bir belirsizlikte (örneğin bir telefonun açılmaması veya işteki bir gelişme) hemen en korkunç ihtimali kurup saatlerce endişelenme.',
    clinicalNote: 'GAD-7 Madde 1-3: Yaygın anksiyete, belirsizlik tahammülsüzlüğü ve aşırı ruminasyon.',
    options: [
      { text: 'Olayları olduğu gibi değerlendirir, gereksiz senaryolar kurmam.', weights: { anxiety: 0 } },
      { text: 'Bazen stresli konularda kaygılanırım ama sakinleşmeyi başarırım.', weights: { anxiety: 1 } },
      { text: 'Sık sık; zihnim sürekli "ya en kötüsü olursa" diyerek durmaksızın felaket senaryoları üretir ve beni tüketir.', weights: { anxiety: 3 } },
      { text: 'Zihnim günün 24 saati açık bir felaket jeneratörü gibi; kaygılanacak bir konu biter bitmez hemen yeni bir kaygı konusu bulur.', weights: { anxiety: 5 } }
    ]
  },

  // 9. Anksiyete & Panik: Bedensel Alarm Belirtileri
  {
    id: 'base_anx_somatic',
    phase: 1,
    category: 'Somatik Beden Alarmı & Panik',
    dimension: 'anxiety',
    question: 'Vücudunuzda belirgin bir sebep yokken kasılmalar, kalp çarpıntısı, nefes açlığı veya aniden gelen panik nöbetleri yaşar mısınız?',
    subtitle: 'Göğüste sıkışma hissi, çeneyi sıkma, mide-bağırsak hassasiyeti ve "kontrolü kaybediyorum / delireceğim" korkusu.',
    clinicalNote: 'Beck Anksiyete & Panik Skalası: Otonomik sempatik hiperaktivasyon ve panik bozukluğu belirtileri.',
    options: [
      { text: 'Hayır; bedenim genellikle rahattır ve derin nefes alabilirim.', weights: { anxiety: 0 } },
      { text: 'Sadece çok heyecanlandığımda hafif çarpıntı olur.', weights: { anxiety: 1 } },
      { text: 'Sık sık; omuzlarım hep taş gibi kasılıdır, göğsümde bir baskı veya nefes darlığı hissederim.', weights: { anxiety: 3, trauma_ptsd: 1 } },
      { text: 'Çok yoğun; aniden gelen dehşet verici panik ataklar (ölecekmişim veya bayılacakmışım hissi) hayatımı kısıtlıyor.', weights: { anxiety: 5, trauma_ptsd: 2 } }
    ]
  },

  // 10. Bipolar: Hipomanik Yükselme & Uyku İhtiyacının Azalması
  {
    id: 'base_bipolar_highs',
    phase: 1,
    category: 'Enerji Döngüleri & Yükselmeler',
    dimension: 'bipolar',
    question: 'Hayatınızda, en az birkaç gün süren, normalden çok daha az uyuduğunuz (örneğin 2-3 saat) ama kendinizi olağanüstü enerjik ve durdurulamaz hissettiğiniz dönemler oldu mu?',
    subtitle: 'Aşırı özgüven, fikirlerin zihinde uçuşması, çok hızlı konuşma ve birdenbire büyük projelere atılma.',
    clinicalNote: 'MDQ (Mood Disorder Questionnaire) Kriter 1-3: Hipomani ve manik epizot taraması.',
    options: [
      { text: 'Hayır; enerjim ve uyku ihtiyacım dengelidir, uykusuz kaldığımda çok yorulurum.', weights: { bipolar: 0 } },
      { text: 'Bazen güzel bir haber aldığımda 1 gün çok neşeli olurum ama uykum normaldir.', weights: { bipolar: 1 } },
      { text: 'Evet; birkaç gün süren, adeta uykuya ihtiyaç duymadığım ve inanılmaz üretken/coşkulu olduğum net dönemler yaşadım.', weights: { bipolar: 3, adhd: 1 } },
      { text: 'Evet, çok belirgin; bu dönemlerde kendimi tanrısal güçte hisseder, çılgınca para harcar veya büyük riskler alır, ardından derin bir çöküşe girerim.', weights: { bipolar: 5 } }
    ]
  },

  // 11. Bipolar: Döngüsel Dalgalanmalar
  {
    id: 'base_bipolar_cycles',
    phase: 1,
    category: 'Duygudurum Kutupları & Döngüler',
    dimension: 'bipolar',
    question: 'Hayatınızın genel akışı nasıldır: Stabil bir çizgide mi yoksa haftalarca süren "zirve dönemleri" ile aylarca süren "çöküş dönemleri" arasında mı gider gelir?',
    subtitle: 'Dış etkenlerden bağımsız olarak mevsimsel veya dönemsel olarak değişen kutuplu ruh halleri.',
    clinicalNote: 'HCL-32: İki uçlu duygudurum döngüselliği ve ötimik aralıkların varlığı.',
    options: [
      { text: 'Ruh halim dış olaylara bağlı olarak ufak iniş çıkışlar gösterse de genel olarak dengeli bir çizgidedir.', weights: { bipolar: 0 } },
      { text: 'Bazen birkaç gün neşesiz olurum ama haftalarca süren aşırı uçlar yaşamam.', weights: { bipolar: 1 } },
      { text: 'Hayatım dönemsel bloklar halindedir; kimi aylar aşırı sosyal ve hiper-aktifiz, kimi aylar ise eve kapanır ve kimseyle konuşmam.', weights: { bipolar: 4, depression: 2 } },
      { text: 'Tamamen döngüsel bir fırtına; manik/hipomanik yüksek dönemler ile depresif çöküşler arasında savrulup duruyorum.', weights: { bipolar: 5, depression: 2 } }
    ]
  },

  // 12. Otizm / Nöroçeşitlilik: Sosyal Maskeleme (Masking)
  {
    id: 'base_aut_masking',
    phase: 1,
    category: 'Sosyal İletişim & Maskeleme',
    dimension: 'autism_sensory',
    question: 'İnsanlarla konuşurken göz teması kurmak, doğru mimikleri yapmak ve sohbette ne zaman araya gireceğinizi hesaplamak sizi nasıl etkiler?',
    subtitle: 'Sohbeti doğal bir akış gibi değil de adeta kafanızda bir tiyatro rolü oynuyormuş (sosyal maskeleme) gibi bilinçli yönetmek ve eve dönünce tükenmek.',
    clinicalNote: 'CAT-Q & AQ-10: Sosyal kamufle etme (masking) ve nörotipik iletişim kodlarını bilişsel kompanse etme yükü.',
    options: [
      { text: 'Sosyal iletişim benim için tamamen doğaldır, ekstra bir çaba harcamadan rahatça sohbet ederim.', weights: { autism_sensory: 0, social_anxiety: 0 } },
      { text: 'Bazen kalabalık ortamlarda yorulurum ama sohbet kurallarını düşünmem gerekmez.', weights: { autism_sensory: 1 } },
      { text: 'Sosyal ortamlarda sürekli "şu an doğru mu duruyorum, göz teması çok mu oldu" diye bilinçli hesap yapar ve sonrasında çok tükenirim.', weights: { autism_sensory: 3, social_anxiety: 2 } },
      { text: 'Sosyal etkileşim adeta yabancı bir dil gibi; tüm hayatım boyunca insanları taklit ederek maskeleme yaptım ve artık sosyal bataryam tamamen bitti.', weights: { autism_sensory: 5, social_anxiety: 2 } }
    ]
  },

  // 13. Otizm / Nöroçeşitlilik: Duyusal Aşırı Yüklenme (Sensory Overload) & Rutin
  {
    id: 'base_aut_sensory_routine',
    phase: 1,
    category: 'Duyusal Hassasiyet & Rutin İhtiyacı',
    dimension: 'autism_sensory',
    question: 'Parlak ışıklar, uğultulu ortamlar, kıyafet etiketleri veya planların aniden değişmesi sizde nasıl bir tepki yaratır?',
    subtitle: 'Duyusal uyaranların sinir sisteminde cızırtı gibi acı vermesi, belirli kumaşlara dokunamama ve öngörülebilir rutin bozulduğunda yaşanan yoğun öfke/dağılma.',
    clinicalNote: 'DSM-5 ASD Kriter B1-B4: Duyusal hipo/hiper reaktivite ve aynılıkta ısrar.',
    options: [
      { text: 'Işık, ses veya kumaşlar beni rahatsız etmez; plan değişikliklerine kolayca uyum sağlarım.', weights: { autism_sensory: 0 } },
      { text: 'Çok gürültülü yerleri sevmem ama dayanabilirim.', weights: { autism_sensory: 1 } },
      { text: 'Belirli sesler (çiğneme, uğultu, florasan), ışıklar veya etiket batması beni çıldırtabilir; planlarım değiştiğinde çok dağılırım.', weights: { autism_sensory: 3 } },
      { text: 'Duyusal dünya benim için aşırı acı verici ve yorucu; sürekli kulaklık takmak, belirli dokulardan kaçınmak ve katı rutinlerime sığınmak zorundayım.', weights: { autism_sensory: 5 } }
    ]
  },

  // 14. Sosyal Anksiyete: Olumsuz Değerlendirilme Korkusu
  {
    id: 'base_soc_evaluation',
    phase: 1,
    category: 'Sosyal Yargılanma & Çekinme',
    dimension: 'social_anxiety',
    question: 'Topluluk içinde konuşurken, yeni biriyle tanışırken veya telefonda görüşme yaparken kafanızdaki temel kaygı nedir?',
    subtitle: '"Rezil olacağım, saçma bir şey söyleyeceğim, ellerim titreyecek veya yüzüm kızaracak ve herkes ne kadar yetersiz olduğumu görecek" korkusu.',
    clinicalNote: 'LSAS (Liebowitz Sosyal Kaygı Ölçeği): Performans ve sosyal etkileşim anksiyetesi.',
    options: [
      { text: 'İnsanların önünde konuşmaktan çekinmem, rahatça kendimi ifade ederim.', weights: { social_anxiety: 0 } },
      { text: 'Önemli sunumlarda hafif heyecanlanırım ama hayatımı etkilemez.', weights: { social_anxiety: 1 } },
      { text: 'Sık sık; insanların beni yargılayacağı korkusuyla geri planda kalır, telefon açmaktan veya toplulukta konuşmaktan kaçınırım.', weights: { social_anxiety: 3 } },
      { text: 'Sosyal ortamlar benim için bir kabus; yargılanma dehşeti yüzünden iş ve eğitim hayatımı sınırlandırıyor, insanlardan tamamen kaçıyorum.', weights: { social_anxiety: 5 } }
    ]
  },

  // 15. Sosyal Anksiyete: Sosyal Sonrası Ruminasyon
  {
    id: 'base_soc_ruminating',
    phase: 1,
    category: 'Sosyal Sonrası Zihinsel Hesaplaşma',
    dimension: 'social_anxiety',
    question: 'Bir arkadaş buluşması veya toplantı bittikten sonraki saatlerde zihniniz neyle meşgul olur?',
    subtitle: 'Söylediğiniz her kelimeyi, yaptığınız her hareketi zihninizde geriye sarıp "Acaba yanlış bir şey dedim mi, beni komik mi buldular?" diye kendini hırpalama.',
    clinicalNote: 'Clark & Wells Kognitif Modeli: Post-event processing (Olay sonrası ruminasyon).',
    options: [
      { text: 'Buluşma biter bitmez hayatıma devam ederim, geriye dönüp düşünmem.', weights: { social_anxiety: 0 } },
      { text: 'Gerçekten tuhaf bir durum olduysa biraz aklıma gelir ama çabuk geçer.', weights: { social_anxiety: 1 } },
      { text: 'Sık sık; sohbet bittikten sonra saatlerce kendi söylediğim şeyleri düşünüp utanır ve kendime kızarım.', weights: { social_anxiety: 3, anxiety: 1 } },
      { text: 'Günlerce o anları kafamda tekrar tekrar oynatıp acı çekerim; bu yüzden insan içine çıkmak istemem.', weights: { social_anxiety: 5, anxiety: 1 } }
    ]
  },

  // 16. Duygusal Düzensizlik (BPD): İlişkisel Terk Edilme Hassasiyeti
  {
    id: 'base_bpd_abandonment',
    phase: 1,
    category: 'Duygu Regülasyonu & Terk Edilme Korkusu',
    dimension: 'bpd_emotional',
    question: 'Önem verdiğiniz birinin mesajınıza geç cevap vermesi veya ses tonundaki hafif bir soğukluk sizde nasıl bir duygu fırtınası koparır?',
    subtitle: 'Anında "Beni artık sevmiyor, benden bıktı, terk edecek" dehşetine kapılma, derin bir panik, öfke veya yalvarma/uzaklaşma uçlarına savrulma.',
    clinicalNote: 'MSI-BPD & DERS: Gerçek veya hayali terk edilmeye karşı aşırı duyarlılık ve afektif instabilite.',
    options: [
      { text: 'Olağan karşılarım; işi vardır veya yorgundur der, rahatsız olmam.', weights: { bpd_emotional: 0 } },
      { text: 'Biraz merak edebilirim ama büyük bir kriz yaşamam.', weights: { bpd_emotional: 1 } },
      { text: 'İçime derin bir panik ve terk edilme acısı çöker; karşı tarafa öfkelenebilir veya aşırı alınganlık gösterebilirim.', weights: { bpd_emotional: 3 } },
      { text: 'Dünyam başıma yıkılmış gibi hissederim; dakikalar içinde aşırı sevgiden yoğun nefrete veya derin bir boşluğa savrulup kendime/ilişkiye zarar verici tepkiler veririm.', weights: { bpd_emotional: 5 } }
    ]
  },

  // 17. Duygusal Düzensizlik (BPD): Kronik Boşluk & Siyah-Beyaz Algı
  {
    id: 'base_bpd_emptiness',
    phase: 1,
    category: 'İçsel Boşluk & Kimlik Bütünlüğü',
    dimension: 'bpd_emotional',
    question: 'İç dünyanızda kronik bir boşluk hissi, kim olduğunuzu tam bilememe veya insanları "ya kusursuz melek ya da en büyük düşman" olarak uçlarda görme eğiliminiz var mı?',
    subtitle: 'Duyguların sıfırdan yüze saniyeler içinde fırlaması, sakin kalmakta zorlanma ve içsel acıyı dindirmek için fevri eylemlere başvurma.',
    clinicalNote: 'DSM-5 BPD Kriter 3-7: Splitting (kutuplaştırma), kronik boşluk hissi ve kimlik karmaşası.',
    options: [
      { text: 'Hayır; kim olduğumu bilirim, insanları artıları ve eksileriyle dengeli değerlendiririm.', weights: { bpd_emotional: 0 } },
      { text: 'Bazen yalnız hissettiğim olur ama derin bir boşluk duygusu çekmem.', weights: { bpd_emotional: 1 } },
      { text: 'Sık sık içimde tarif edemediğim dipsiz bir boşluk hissederim; insanlara dair hislerim çok hızlı değişir.', weights: { bpd_emotional: 3 } },
      { text: 'Sürekli; göğsümün ortasında dev bir kara delik var gibi, fırtınalı duygularımı dindiremiyor ve kim olduğumu hiç bilmiyormuş gibi hissediyorum.', weights: { bpd_emotional: 5 } }
    ]
  },

  // 18. Travma / TSSB: İstilacı Anılar & Sürekli Alarm (Flashback / Hypervigilance)
  {
    id: 'base_trauma_flashback',
    phase: 1,
    category: 'Geçmiş Travmatik Deneyimler & Tetikleyiciler',
    dimension: 'trauma_ptsd',
    skippable: true,
    question: 'Geçmişte yaşadığınız sarsıcı bir olay, kayıp veya zorlu dönemler zihninize beklenmedik anlarda flashback (yeniden yaşıyormuş gibi) olarak hücum ediyor mu?',
    subtitle: 'Küçük bir ses, koku veya tonda aniden irkilme, sırtını kapıya dönmekten rahatsız olma ve sinir sisteminin sürekli "tehlike var" modunda kalması.',
    clinicalNote: 'PCL-5: İntrüzyonel travmatik anılar, kaçınma ve fizyolojik aşırı uyarılmışlık (Hyperarousal).',
    options: [
      { text: 'Hayır; geçmiş deneyimlerim zihnimi istila etmez, kendimi güvende hissederim.', weights: { trauma_ptsd: 0 } },
      { text: 'Bazen kötü anıları hatırlar üzülürüm ama bedensel bir şok veya donma yaşamam.', weights: { trauma_ptsd: 1 } },
      { text: 'Sık sık; belirli tetikleyicilerle o kötü anlar gözümün önüne gelir, kalbim çarpar ve sürekli bir tehlike varmış gibi tetikte yaşarım.', weights: { trauma_ptsd: 3, anxiety: 1 } },
      { text: 'Çok yoğun; geçmiş henüz bitmemiş gibi bedenimde yaşıyor; kabuslar, ani irkilmeler ve duygusal uyuşma hayatımı felç ediyor.', weights: { trauma_ptsd: 5, anxiety: 2 } }
    ]
  }
];

export const BASE_QUESTIONS: BaseQuestion[] = [
  ...CORE_BASE_QUESTIONS,
  ...ADULT_EXTRA_QUESTIONS,
];
