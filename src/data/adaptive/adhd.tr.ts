import type { AdaptiveQuestion } from "@/lib/adaptive/types";
import type { Weights } from "@/lib/types";

function axisSum(axes: Record<string, number>, exclude: string[] = []): number {
  return Object.entries(axes).reduce(
    (sum, [key, val]) => (exclude.includes(key) ? sum : sum + val),
    0,
  );
}

function adhdOption(text: string, axes: Record<string, number>) {
  const clinical = axisSum(axes, ["CP"]);
  const adhd =
    clinical === 0 ? 0 : Math.min(5, Math.max(1, Math.round(clinical * 0.85)));
  return { text, axes, weights: { adhd } satisfies Weights };
}

export const ADHD_QUESTIONS_TR: AdaptiveQuestion[] = [
  {
    id: "adhd_s1",
    module: "adhd",
    category: "Günlük Zaman & Başlatma",
    question:
      "Saat 14.20'de evden çıkman gerekiyor. Saat 13.52 ve yaklaşık 15 dakika süreceğini bildiğin bir işin var. Ne yaparsın?",
    subtitle: "Çıkış öncesi kısa görev — aktivasyon ve zaman yapılandırması.",
    tags: ["micro-friction"],
    options: [
      adhdOption("Çıkmadan önce hallederim yoksa kafama takılır.", { AT: 0, EO: 0, EX: 0, CP: 0 }),
      adhdOption("Önemli olsaydı daha önce yapardım, döndüğümde hallederim.", { AT: 2, EO: 1, EX: 0, CP: 0 }),
      adhdOption("Başlarım, arada saate bakarak ne kadar vaktim kaldığını takip ederim.", { AT: 1, EO: 0, EX: 0, CP: 2 }),
      adhdOption("Çıkış için gerekenleri toparladıktan sonra kalan zamana göre karar veririm.", { AT: 1, EO: 1, EX: 0, CP: 1 }),
      adhdOption("Duruma göre değişir.", { AT: 0, EO: 0, EX: 0, CP: 0 }),
    ],
  },
  {
    id: "adhd_s2",
    module: "adhd",
    category: "İlgi & Ödül Dinamiği",
    question:
      "Bir akşam arkadaşının evindesin. Uzun zamandır izlediği bir dizinin yeni sezonu yaklaşıyor; \"Kaldığımız yerden birkaç bölüm izleyelim mi?\" diyor. Ertesi gün erken kalkmanız gerekmiyor.",
    subtitle: "Yoğun ilgi sonrası ara — ilginin davranışı otomatik başlatmaması.",
    tags: ["interest-activation"],
    options: [
      adhdOption("Kabul ederim, böylece yeni sezon çıkmadan yetişebiliriz.", { IR: 0, AT: 0, EO: 0 }),
      adhdOption("En son nerede kaldığımızı hatırlamaya çalışırım, ona göre cevap veririm.", { IR: 0, AT: 0, EO: 1 }),
      adhdOption("Olabilir derim; zaten buluşunca ne yapacağımız netleşir.", { IR: 2, AT: 1, EO: 0 }),
      adhdOption("O akşam yapabileceğimiz başka şeyleri de düşünürüm.", { IR: 1, AT: 0, EO: 0 }),
      adhdOption("Önce yeni sezonun fragmanına bakarım, sonra karar veririm.", { IR: 1, AT: 0, EO: 0 }),
    ],
  },
  {
    id: "adhd_s3",
    module: "adhd",
    category: "Karar & İlgi Asimetrisi",
    question:
      "Akşam belirli bir yemek yapmak istiyorsun; bir malzeme eksik. Evde başka yemek malzemeleri var. Eksik malzemenin evde yapılabileceğini fark ediyorsun ama nasıl yapılacağını bilmiyorsun. 1 saat sonra ne yapıyor olursun?",
    subtitle: "İlgi/efor asimetrisi — yüksek ilgide ekstra efor kabul edilebilir hale gelir.",
    tags: ["interest-activation"],
    options: [
      adhdOption("İlk düşündüğüm kolay yemeği yapıp yemişimdir bile.", { IR: 0, AT: 0, EO: 0, IN: 0 }),
      adhdOption("İki yemeğin de nasıl yapılacağına bakar, ona göre karar veririm.", { IR: 1, AT: 0, EO: 1, IN: 0 }),
      adhdOption("İlk önce kolay yemeği yapar karnımı doyururum, ardından ikinci yemeği yaparım.", { IR: 1, AT: 0, EO: 0, IN: 0 }),
      adhdOption("İlk istediğim yemeği yapmaya çalışır, eksik olan kısmı kendim hazırlarım.", { IR: 2, AT: 0, EO: 0, IN: 1 }),
      adhdOption("Ne yapacağıma karar vermek düşündüğümden uzun sürdüğü için uygulamadan sipariş veririm.", { IR: 0, AT: 1, EO: 1, IN: 0 }),
    ],
  },
  {
    id: "adhd_s4",
    module: "adhd",
    category: "Dürtü & Karar",
    question:
      "Kışlık alışverişte beğendiğin bir ceket var; fiyat uygun, yakınların da beğendi. Hangisi daha çok içine siner?",
    subtitle: "Olumlu ödül ortaya çıkınca kararı hızlı kapatma eğilimi.",
    tags: ["quick-reward"],
    options: [
      adhdOption("Üzerimde nasıl durduğuna bakar, benzerlerini de gördükten sonra karar veririm.", { IN: 0, EO: 0, CP: 0 }),
      adhdOption("Üzerimde beğendiysem ve fiyatı uygunsa o mağazadayken alırım.", { IN: 1, EO: 0, CP: 0 }),
      adhdOption("Diğer seçeneklere ve internetteki fiyatlara da baktıktan sonra karar veririm.", { IN: 0, EO: 1, CP: 0 }),
      adhdOption("O anda karar vermem; alışverişin ilerleyen kısmında hâlâ istiyorsam geri dönerim.", { IN: 0, EO: 0, CP: 1 }),
      adhdOption("Evdeki kıyafetlerimle ne kadar kullanabileceğimi düşünüp ona göre karar veririm.", { IN: 0, EO: 0, CP: 0 }),
    ],
  },
  {
    id: "adhd_s5",
    module: "adhd",
    category: "Sosyal Görev Yönetimi",
    question:
      "Sevdiğin bir arkadaşından gün ortasında uzun, hal hatır soran bir mesaj aldın. O an müsait sayılırsın ama konunun uzayabileceğini biliyorsun. Ne yaparsın?",
    subtitle: "Görevi küçültme, erteleme veya uygun ana taşıma stratejileri.",
    options: [
      adhdOption("Hemen birkaç cümle yazar, duruma göre devam ederim.", { AT: 0, CP: 0 }),
      adhdOption("Okur, uzun yazabileceğim sakin bir ana bırakırım.", { AT: 1, CP: 0 }),
      adhdOption("Kısa bir cevap yazıp akşam konuşmayı teklif ederim.", { AT: 0, CP: 1 }),
      adhdOption("O an açmam, günün sonunda dönerim.", { AT: 1, CP: 1 }),
      adhdOption("Yazmak yerine arayıp konuşurum.", { AT: 0, CP: 0 }),
    ],
  },
  {
    id: "adhd_s6",
    module: "adhd",
    category: "Çocukluk Örüntüsü",
    question: "Çocukluk yıllarını genellikle nasıl anlatırlar?",
    subtitle: "Çocuklukta ADHD ile uyumlu olabilecek davranış örüntüleri.",
    options: [
      adhdOption("Kendi halinde, sevdiği bir şey olduğunda uzun süre onunla oyalanabilen biri.", { CH: 1, IR: 1, HY: 0 }),
      adhdOption("Meraklı, yeni gördüğü şeyleri denemeyi ve farklı şeylerle uğraşmayı seven biri.", { CH: 1, IR: 1, HY: 0 }),
      adhdOption("Uzun süre boş oturmayan, kendine genellikle yapacak bir şey bulan biri.", { CH: 2, IR: 0, HY: 2 }),
      adhdOption("İnsanlarla kolay iletişim kuran, arkadaşlarıyla vakit geçirmekten hoşlanan biri.", { CH: 0, IR: 0, HY: 0 }),
      adhdOption("Ne yapacağı genellikle belli olan, düzene kolay uyum sağlayan biri.", { CH: 0, IR: 0, HY: 0 }),
    ],
  },
  {
    id: "adhd_s7",
    module: "adhd",
    category: "Duygusal Reaktivite",
    question:
      "Arkadaşın anahtarı cebinde unutmuş; çilingir çağırdınız, işten erken çıktın. Sonra anahtar pantolon cebinden düşünce arkadaşın gülmeye başlıyor. O anda nasıl tepki verirsin?",
    subtitle: "Hızlı duygusal yükseliş ve inhibisyon.",
    tags: ["fast-emotion"],
    options: [
      adhdOption("İlk anda sert tepki verebilirim ama biraz sonra konuyu uzatmak istemem.", { ER: 2, IN: 2 }),
      adhdOption("O an durumu idare ederim ama sonrasında bir daha bende kalmasını istemem.", { ER: 1, IN: 0 }),
      adhdOption("Olayın geldiği noktaya sinirlerim bozulur ve ben de gülmeye başlarım.", { ER: 1, IN: 0 }),
      adhdOption("Çilingir masrafını ve işten erken çıkmamı nasıl telafi edeceğimizi konuşurum.", { ER: 0, IN: 0 }),
      adhdOption("Çok sinirlenirim ve o an ne düşündüğümü açıkça belli ederim.", { ER: 2, IN: 1 }),
    ],
  },
  {
    id: "adhd_s8",
    module: "adhd",
    category: "Mikro Engeller & Tamamlama",
    question:
      "Bir form dolduruyorsun. Her \"ileri\" dediğinde sayfanın en üstüne dönüyor ve tekrar aşağı kaydırman gerekiyor. Formun bitmesine çok az kalmış. Ne yaparsın?",
    subtitle: "Küçük sürtünmenin görevi kesmesi.",
    tags: ["micro-friction"],
    options: [
      adhdOption("Kalan birkaç soruyu tamamlar, formu bitiririm.", { EO: 0, ER: 0, AT: 0 }),
      adhdOption("Birkaç kez daha olunca formu kapatıp daha sonra tamamlarım.", { EO: 2, ER: 1, AT: 1 }),
      adhdOption("Her seferinde biraz daha hızlı aşağı kaydırıp devam ederim.", { EO: 0, ER: 1, AT: 0 }),
      adhdOption("Neden böyle olduğunu anlamaya çalışırım.", { EO: 1, ER: 0, AT: 0 }),
      adhdOption("Form önemli değilse doldurmakla uğraşmam.", { EO: 1, ER: 0, AT: 0 }),
    ],
  },
  {
    id: "adhd_s9",
    module: "adhd",
    category: "Erteleme & Aciliyet",
    question:
      "Telefonunun depolama alanı dolmuş; o an çekmen gereken önemli bir fotoğraf yok. Ne yaparsın?",
    subtitle: "Aciliyet oluşmadan davranışın başlamaması.",
    options: [
      adhdOption("Müsait olduğumda galeriye girip gereksiz fotoğraf ve videoları topluca temizlerim.", { EO: 0, AT: 1, EX: 0, IR: 0 }),
      adhdOption("Birkaç büyük video veya gereksiz dosyayı silip yeterli alan açarım.", { EO: 1, AT: 0, EX: 1, IR: 0 }),
      adhdOption("Galeriye girmişken uzun zamandır gereksiz olan başka şeyleri de temizlemeye başlarım.", { EO: 1, AT: 0, EX: 0, IR: 1 }),
      adhdOption("Şimdilik birkaç dosya silerim, tekrar dolduğunda yeniden yer açarım.", { EO: 2, AT: 1, EX: 2, IR: 0 }),
      adhdOption("Dosyaları silmek yerine bulut/depolama gibi başka bir çözüm kullanırım.", { EO: 0, AT: 0, EX: 0, IR: 0 }),
    ],
  },
  {
    id: "adhd_s10",
    module: "adhd",
    category: "Deadline & Yapı",
    question:
      "Kredi kartı ekstren geldi, borç hesapta hazır. Son ödeme tarihine 10 gün var. Genellikle ne zaman ödersin?",
    subtitle: "Dış deadline veya kendi yapılandırman olmadan görevin başlamaması.",
    options: [
      adhdOption("Ekstre geldiğini gördüğümde veya aynı gün içinde öderim.", { EX: 0, AT: 0, CP: 0 }),
      adhdOption("Bankacılık uygulamasına başka bir işlem için girdiğimde öderim.", { EX: 1, AT: 1, CP: 0 }),
      adhdOption("Son ödeme tarihi yaklaşınca öderim.", { EX: 2, AT: 2, CP: 0 }),
      adhdOption("Son günü beklememek için kendime daha erken bir gün belirlerim.", { EX: 0, AT: 0, CP: 2 }),
      adhdOption("Ne zaman ödeyeceğim aydan aya değişir.", { EX: 1, AT: 1, CP: 0 }),
    ],
  },
];
