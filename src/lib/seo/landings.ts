import type { DimensionId } from "@/lib/types";

export type LandingConfig = {
  dimensionId: DimensionId;
  trSlug: string;
  enSlug: string;
  tr: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    lede: string;
    adaptiveTitle: string;
    adaptiveBody: string;
    cta: string;
    faq: { q: string; a: string }[];
  };
  en: {
    title: string;
    description: string;
    keywords: string[];
    h1: string;
    lede: string;
    adaptiveTitle: string;
    adaptiveBody: string;
    cta: string;
    faq: { q: string; a: string }[];
  };
};

const ADAPTIVE_TR =
  "Sabit bir test listesi değildir. Cevaplarınıza göre sistem sonuca yaklaşmak için sonraki soruları değiştirir; bazı alanlarda derinleşir. Yaklaşık 30–45 soru, 12–20 dakika. İki boyut birlikte yükselirse ayırıcı sorular açılır. Cevaplar sunucuya gitmez.";
const ADAPTIVE_EN =
  "Not a fixed quiz. Based on your answers, the system changes which questions come next to home in on the result — deepening some areas (~30–45 questions, 12–20 min). When two dimensions score close, differential follow-ups open. Answers never leave your device.";

export const LANDING_PAGES: LandingConfig[] = [
  {
    dimensionId: "adhd",
    trSlug: "dehb-testi",
    enSlug: "adhd-test",
    tr: {
      title: "DEHB (ADHD) testi — ücretsiz, adaptif tarama",
      description:
        "ASRS-v1.1 tabanlı DEHB testi. Tanı değil; dikkat, dürtüsellik ve erteleme eğilimi. Cevaplara göre değişen sorular, OKB/kaygı ile ayırıcı bölüm. Ücretsiz, gizli.",
      keywords: [
        "DEHB testi",
        "ADHD testi",
        "DEHB testi online",
        "ücretsiz DEHB testi",
        "ASRS testi",
        "dikkat eksikliği testi",
        "ADHD test Türkçe",
      ],
      h1: "DEHB (ADHD) testi — adaptif, ücretsiz tarama",
      lede:
        "Dikkat, dürtüsellik ve erteleme belirtilerini ASRS-v1.1 boyutlarıyla tarayan iki aşamalı bir taramadır. Resmi tanı testi değildir; OKB ve kaygı ile karışan örüntüleri ayırmaya yardımcı olur.",
      adaptiveTitle: "Cevaplarınıza göre sistem soruları değiştirir",
      adaptiveBody: ADAPTIVE_TR,
      cta: "DEHB taramasını başlat",
      faq: [
        {
          q: "Bu resmi ASRS-v1.1 testi mi?",
          a: "Hayır. Soru dili ASRS boyutlarından türetilmiştir; lisanslı tam form uygulanmaz. Eğilim haritası üretir, tanı koymaz.",
        },
        {
          q: "DEHB ile OKB nasıl ayrılır?",
          a: "Her iki boyut da yükselirse ayırıcı sorular açılır: erteleme sıkılmadan mı, şüpheden mi geliyor?",
        },
        {
          q: "Sonuçları kim görür?",
          a: "Kimse. Cevaplar yalnızca tarayıcınızda kalır; sunucuya gönderilmez.",
        },
      ],
    },
    en: {
      title: "ADHD test — free adaptive screening",
      description:
        "ASRS-v1.1–based ADHD screening. Not a diagnosis. Adaptive questions; differential section when ADHD overlaps OCD or anxiety. Free and private.",
      keywords: [
        "ADHD test",
        "ADHD test online",
        "free ADHD test",
        "ASRS screening",
        "attention deficit test",
        "ADHD quiz",
      ],
      h1: "ADHD test — adaptive, free screening",
      lede:
        "Two-stage screening for attention, impulsivity, and delay patterns using ASRS-v1.1 dimensions. Not an official diagnostic test; helps separate ADHD from OCD and anxiety overlap.",
      adaptiveTitle: "Questions change to home in on your result",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start ADHD screening",
      faq: [
        {
          q: "Is this the official ASRS-v1.1?",
          a: "No. Question language is derived from ASRS dimensions; licensed full forms are not administered.",
        },
        {
          q: "How is ADHD separated from OCD?",
          a: "When both dimensions are elevated, differential questions open — delay from boredom vs. doubt.",
        },
        {
          q: "Who sees my answers?",
          a: "No one. Answers stay in your browser only.",
        },
      ],
    },
  },
  {
    dimensionId: "ocd",
    trSlug: "okb-testi",
    enSlug: "ocd-test",
    tr: {
      title: "OKB testi — obsesyon ve kompulsiyon taraması",
      description:
        "OCI-R / Y-BOCS boyutlarında OKB testi. Takıntı, ritüel ve şüphe döngüsü. Adaptif sorular; DEHB ile ayırıcı bölüm. Ücretsiz, cihazda gizli.",
      keywords: ["OKB testi", "obsesif kompulsif test", "OCI-R online", "OKB belirtileri testi", "takıntı testi"],
      h1: "OKB testi — adaptif obsesyon taraması",
      lede:
        "Obsesyon, kompulsiyon ve nötralizasyon eğilimini tarayan iki aşamalı tarama. Tanı değildir; DEHB veya kaygı ile örtüşen belirtilerde ayırıcı sorular açılır.",
      adaptiveTitle: "Skorlarınıza göre ek sorular açılır",
      adaptiveBody: ADAPTIVE_TR,
      cta: "OKB taramasını başlat",
      faq: [
        { q: "OKB testi tanı koyar mı?", a: "Hayır. Eğilim profili üretir; tanı yalnızca klinisyen koyabilir." },
        { q: "OKB ile DEHB farkı nasıl anlaşılır?", a: "Ayırıcı bölümde ertelemenin kaynağı — şüphe döngüsü mü, düşük uyarılma mı — netleştirilir." },
        { q: "Ne kadar sürer?", a: "Çoğu kişi 12–20 dakikada bitirir; soru sayısı cevaplarınıza göre değişir." },
      ],
    },
    en: {
      title: "OCD test — obsession and compulsion screening",
      description:
        "OCD screening based on OCI-R / Y-BOCS dimensions. Adaptive questions; differential section vs ADHD. Free, private, not a diagnosis.",
      keywords: ["OCD test", "OCD test online", "obsessive compulsive test", "OCI-R screening", "intrusive thoughts test"],
      h1: "OCD test — adaptive obsession screening",
      lede:
        "Screens obsession, compulsion, and neutralisation tendency. Not a diagnosis; differential questions when OCD overlaps ADHD or anxiety.",
      adaptiveTitle: "Follow-up questions open based on your scores",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start OCD screening",
      faq: [
        { q: "Does this diagnose OCD?", a: "No. It produces a tendency profile only." },
        { q: "OCD vs ADHD?", a: "Differential section clarifies whether delay comes from doubt loops or low arousal." },
        { q: "How long?", a: "Most people finish in 12–20 minutes; question count adapts to answers." },
      ],
    },
  },
  {
    dimensionId: "depression",
    trSlug: "depresyon-testi",
    enSlug: "depression-test",
    tr: {
      title: "Depresyon testi — PHQ-9 tabanlı tarama",
      description:
        "PHQ-9 ve Beck boyutlarında depresyon testi. Anhedoni, enerji, değersizlik. Adaptif soru yolu; DEHB ile ayırıcı bölüm. Ücretsiz.",
      keywords: ["depresyon testi", "PHQ-9 online", "depresyon belirtileri testi", "ücretsiz depresyon testi", "Beck depresyon"],
      h1: "Depresyon testi — adaptif duygudurum taraması",
      lede:
        "Depresyon eğilimini anhedoni, enerji kaybı ve değersizlik boyutlarında tarar. Tanı değildir; DEHB veya kaygı ile karışan tablolarda ayırıcı sorular devreye girer.",
      adaptiveTitle: "Cevaplarınıza göre soru seti genişler veya daralır",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Depresyon taramasını başlat",
      faq: [
        { q: "PHQ-9 resmi uygulaması mı?", a: "Hayır. Boyut dili türetilmiştir; klinik PHQ-9 skoru üretmez." },
        { q: "Depresyon mu DEHB mi?", a: "Her iki boyut yakınsa ayırıcı sorular açılır." },
        { q: "Krizde kullanmalı mıyım?", a: "Hayır. Acil durumda 112; kriz sayfamıza bakın." },
      ],
    },
    en: {
      title: "Depression test — PHQ-9 based screening",
      description:
        "Depression screening using PHQ-9 and Beck dimensions. Adaptive path; differential vs ADHD. Free, not a diagnosis.",
      keywords: ["depression test", "PHQ-9 online", "depression screening", "free depression test", "am I depressed quiz"],
      h1: "Depression test — adaptive mood screening",
      lede:
        "Screens depression tendency across anhedonia, energy, and worthlessness. Not a diagnosis; differential questions when overlapping ADHD or anxiety.",
      adaptiveTitle: "Question path adapts to your responses",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start depression screening",
      faq: [
        { q: "Official PHQ-9?", a: "No. Derived language; not a licensed PHQ-9 score." },
        { q: "Depression vs ADHD?", a: "Differential section opens when both dimensions are close." },
        { q: "Use in crisis?", a: "No. Call emergency services if unsafe." },
      ],
    },
  },
  {
    dimensionId: "anxiety",
    trSlug: "anksiyete-testi",
    enSlug: "anxiety-test",
    tr: {
      title: "Anksiyete testi — GAD-7 tabanlı tarama",
      description:
        "GAD-7 boyutlarında yaygın anksiyete testi. Felaketleştirme, huzursuzluk, bedensel gerginlik. Adaptif sorular; sosyal kaygı ve DEHB ayırıcısı.",
      keywords: ["anksiyete testi", "GAD-7 online", "kaygı testi", "panik testi", "yaygın anksiyete testi"],
      h1: "Anksiyete testi — adaptif kaygı taraması",
      lede:
        "Yaygın anksiyete eğilimini kronik kaygı, felaket senaryoları ve bedensel alarm boyutlarında tarar. Tanı değildir.",
      adaptiveTitle: "Kaygı profilinize göre soru akışı değişir",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Anksiyete taramasını başlat",
      faq: [
        { q: "GAD-7 resmi mi?", a: "Hayır. Boyut türetmesidir." },
        { q: "Sosyal kaygıdan farkı?", a: "Dokuz boyut birlikte taranır; skorlar yakınsa ayırıcı sorular açılır." },
        { q: "Ücretsiz mi?", a: "Evet, hesap gerekmez." },
      ],
    },
    en: {
      title: "Anxiety test — GAD-7 based screening",
      description:
        "Generalised anxiety screening (GAD-7 dimensions). Adaptive questions; separates social anxiety and ADHD overlap. Free.",
      keywords: ["anxiety test", "GAD-7 online", "anxiety quiz", "generalised anxiety test", "free anxiety test"],
      h1: "Anxiety test — adaptive worry screening",
      lede:
        "Screens chronic worry, catastrophising, and somatic tension. Not a diagnosis; nine dimensions screened together.",
      adaptiveTitle: "Flow changes based on your anxiety profile",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start anxiety screening",
      faq: [
        { q: "Official GAD-7?", a: "No. Derived screening language." },
        { q: "Vs social anxiety?", a: "Both dimensions screened; differential when scores overlap." },
        { q: "Free?", a: "Yes, no account required." },
      ],
    },
  },
  {
    dimensionId: "bipolar",
    trSlug: "bipolar-testi",
    enSlug: "bipolar-test",
    tr: {
      title: "Bipolar testi — MDQ spektrum taraması",
      description:
        "MDQ tabanlı bipolar spektrum testi. Hipomani/mani ve döngüsel enerji. Adaptif tarama; DEHB ile ayırıcı bölüm. Ücretsiz.",
      keywords: ["bipolar testi", "MDQ testi", "bipolar belirtileri testi", "mani testi", "iki uçlu duygudurum testi"],
      h1: "Bipolar testi — adaptif spektrum taraması",
      lede:
        "Bipolar spektrum eğilimini enerji, uyku ve motivasyon salınımları boyutunda tarar. Tanı değildir; DEHB hiperaktivitesi ile karışım ayırılır.",
      adaptiveTitle: "Duygudurum profiline göre ek sorular",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Bipolar taramasını başlat",
      faq: [
        { q: "Bipolar tanısı koyar mı?", a: "Hayır. Eğilim haritasıdır." },
        { q: "DEHB ile fark?", a: "Ayırıcı bölümde sürekli dikkat dağınıklığı mı, dönemsel enerji artışı mı sorulur." },
        { q: "Gizli mi?", a: "Evet, cevaplar cihazınızda kalır." },
      ],
    },
    en: {
      title: "Bipolar test — MDQ spectrum screening",
      description:
        "Bipolar spectrum screening (MDQ dimensions). Adaptive questions; differential vs ADHD. Free, not a diagnosis.",
      keywords: ["bipolar test", "MDQ screening", "bipolar quiz", "mania test online", "mood disorder test"],
      h1: "Bipolar test — adaptive spectrum screening",
      lede:
        "Screens bipolar spectrum tendency across energy, sleep, and motivation cycles. Not a diagnosis; separates from ADHD hyperactivity.",
      adaptiveTitle: "Extra questions based on mood profile",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start bipolar screening",
      faq: [
        { q: "Diagnosis?", a: "No. Tendency map only." },
        { q: "Vs ADHD?", a: "Differential asks about continuous vs episodic energy patterns." },
        { q: "Private?", a: "Yes — on-device only." },
      ],
    },
  },
  {
    dimensionId: "autism_sensory",
    trSlug: "otizm-testi",
    enSlug: "autism-test",
    tr: {
      title: "Otizm testi — AQ-10 ve duyusal profil taraması",
      description:
        "Yetişkin otizm spektrum testi (AQ-10, CAT-Q boyutları). Duyusal yük, sosyal ipuçları, rutin. Adaptif; kaygı ile ayırıcı. Ücretsiz.",
      keywords: ["otizm testi yetişkin", "AQ-10 testi", "otizm spektrum testi", "duyusal hassasiyet testi", "maskeleme testi"],
      h1: "Otizm testi — yetişkin adaptif tarama",
      lede:
        "Otizm / duyusal profil eğilimini iletişim yorgunluğu, duyusal hassasiyet ve rutin ihtiyacı boyutunda tarar. Tanı değildir.",
      adaptiveTitle: "Duyusal ve sosyal skorlara göre soru yolu",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Otizm taramasını başlat",
      faq: [
        { q: "Resmi otizm tanısı mı?", a: "Hayır. Ön tarama ve hekim görüşmesi hazırlığıdır." },
        { q: "Sosyal kaygıdan fark?", a: "Ayırıcı bölümde yargılanma korkusu mu duyusal yük mü ayrılır." },
        { q: "Maskeleme (camouflaging)?", a: "CAT-Q boyutlarından türetilmiş sorular dahildir." },
      ],
    },
    en: {
      title: "Autism test — AQ-10 adult screening",
      description:
        "Adult autism/sensory profile screening (AQ-10, CAT-Q). Adaptive questions; vs social anxiety. Free, not a diagnosis.",
      keywords: ["autism test adult", "AQ-10 online", "autism screening", "sensory overload test", "autism quiz"],
      h1: "Autism test — adaptive adult screening",
      lede:
        "Screens autism/sensory profile across communication fatigue, sensory sensitivity, and routine need. Not a diagnosis.",
      adaptiveTitle: "Questions adapt to sensory and social scores",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start autism screening",
      faq: [
        { q: "Official autism diagnosis?", a: "No. Pre-screening for clinician discussion." },
        { q: "Vs social anxiety?", a: "Differential separates fear of judgment vs sensory load." },
        { q: "Masking?", a: "Includes CAT-Q–derived camouflaging dimensions." },
      ],
    },
  },
  {
    dimensionId: "social_anxiety",
    trSlug: "sosyal-kaygi-testi",
    enSlug: "social-anxiety-test",
    tr: {
      title: "Sosyal kaygı testi — LSAS taraması",
      description:
        "Liebowitz sosyal kaygı testi boyutları. Performans ve etkileşim kaçınması. Adaptif; otizm/duyusal ile ayırıcı. Ücretsiz.",
      keywords: ["sosyal kaygı testi", "sosyal fobi testi", "LSAS online", "sosyal anksiyete testi"],
      h1: "Sosyal kaygı testi — adaptif LSAS taraması",
      lede:
        "Sosyal anksiyete eğilimini performans ve etkileşim kaygısı boyutunda tarar. Otizm/duyusal yük ile karışım ayırılır.",
      adaptiveTitle: "Sosyal ve duyusal skorlar yakınsa ayırıcı açılır",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Sosyal kaygı taramasını başlat",
      faq: [
        { q: "LSAS resmi uygulaması mı?", a: "Hayır. Boyut türetmesidir." },
        { q: "Utangaçlık mı sosyal fobi mi?", a: "Eğilim profili verir; tanı klinisyene aittir." },
        { q: "Gizlilik?", a: "Sunucuya veri gönderilmez." },
      ],
    },
    en: {
      title: "Social anxiety test — LSAS screening",
      description:
        "Social anxiety screening (LSAS dimensions). Adaptive; differential vs autism/sensory. Free, not a diagnosis.",
      keywords: ["social anxiety test", "social phobia test", "LSAS online", "performance anxiety test"],
      h1: "Social anxiety test — adaptive LSAS screening",
      lede:
        "Screens performance and interaction avoidance. Separates social fear from autism/sensory overload when scores overlap.",
      adaptiveTitle: "Differential opens when social and sensory scores align",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start social anxiety screening",
      faq: [
        { q: "Official LSAS?", a: "No. Derived screening." },
        { q: "Shyness vs disorder?", a: "Tendency profile only — clinician diagnoses." },
        { q: "Privacy?", a: "No server upload." },
      ],
    },
  },
  {
    dimensionId: "trauma_ptsd",
    trSlug: "travma-testi",
    enSlug: "trauma-test",
    tr: {
      title: "Travma testi — PCL-5 TSSB taraması",
      description:
        "PCL-5 boyutlarında travma / TSSB testi. İstilacı anılar, kaçınma, aşırı uyarılma. Hassas maddeler atlanabilir. Adaptif, gizli.",
      keywords: ["TSSB testi", "travma testi", "PCL-5 online", "PTSD testi", "travma sonrası stres testi"],
      h1: "Travma testi — adaptif PCL-5 taraması",
      lede:
        "Travma eğilimini istilacı anılar, kaçınma ve hipervigilans boyutunda tarar. Hassas sorular atlanabilir. Tanı değildir.",
      adaptiveTitle: "Travma maddeleri atlanabilir; akış bozulmaz",
      adaptiveBody:
        "Travma ile ilgili soruları atlayabilirsiniz; tarama devam eder. Diğer boyutlarda cevaplarınıza göre sistem sonuca yaklaşmak için soruları değiştirir. Cevaplar cihazınızda kalır.",
      cta: "Travma taramasını başlat",
      faq: [
        { q: "PCL-5 resmi mi?", a: "Hayır. Türetilmiş tarama dilidir." },
        { q: "TSSB tanısı koyar mı?", a: "Hayır." },
        { q: "Krizdeysem?", a: "112 veya kriz kaynaklarımız." },
      ],
    },
    en: {
      title: "Trauma test — PCL-5 PTSD screening",
      description:
        "Trauma/PTSD screening (PCL-5 dimensions). Sensitive items skippable. Adaptive, private, not a diagnosis.",
      keywords: ["PTSD test", "trauma test online", "PCL-5 screening", "PTSD quiz"],
      h1: "Trauma test — adaptive PCL-5 screening",
      lede:
        "Screens trauma tendency across intrusions, avoidance, and hyperarousal. Sensitive items can be skipped. Not a diagnosis.",
      adaptiveTitle: "Trauma items optional; path adapts elsewhere",
      adaptiveBody:
        "You may skip trauma-related questions and continue. Elsewhere, based on your answers, the system changes questions to home in on the result. On-device only.",
      cta: "Start trauma screening",
      faq: [
        { q: "Official PCL-5?", a: "No. Derived language." },
        { q: "Diagnosis?", a: "No." },
        { q: "In crisis?", a: "Emergency services or our crisis page." },
      ],
    },
  },
  {
    dimensionId: "bpd_emotional",
    trSlug: "duygu-regulasyonu-testi",
    enSlug: "emotion-regulation-test",
    tr: {
      title: "Duygu regülasyonu testi — DERS taraması",
      description:
        "DERS ve MSI-BPD boyutlarında duygu regülasyonu testi. Yoğun tepkisellik, terk edilme hassasiyeti. Adaptif, ücretsiz.",
      keywords: ["duygu regülasyonu testi", "DERS testi", "borderline testi", "duygusal düzensizlik testi", "BPD tarama"],
      h1: "Duygu regülasyonu testi — adaptif tarama",
      lede:
        "Duygu regülasyonu eğilimini hızlı duygusal salınım ve yoğun tepkisellik boyutunda tarar. Tanı değildir; bipolar ve travma ile ayırılır.",
      adaptiveTitle: "Duygudurum ve travma skorlarına göre ayırıcı",
      adaptiveBody: ADAPTIVE_TR,
      cta: "Duygu regülasyonu taramasını başlat",
      faq: [
        { q: "Borderline tanısı mı?", a: "Hayır. Regülasyon eğilimi haritasıdır." },
        { q: "Bipolar ile fark?", a: "Ayırıcı sorular döngüsel enerji mi duygusal reaktivite mi ayırır." },
        { q: "Ücretsiz mi?", a: "Evet." },
      ],
    },
    en: {
      title: "Emotion regulation test — DERS screening",
      description:
        "Emotion regulation screening (DERS, MSI-BPD dimensions). Adaptive; vs bipolar and trauma. Free, not a diagnosis.",
      keywords: ["emotion regulation test", "DERS screening", "BPD test online", "emotional dysregulation quiz"],
      h1: "Emotion regulation test — adaptive screening",
      lede:
        "Screens emotion regulation tendency across reactivity and intensity swings. Not a diagnosis; separated from bipolar and trauma.",
      adaptiveTitle: "Differential based on mood and trauma scores",
      adaptiveBody: ADAPTIVE_EN,
      cta: "Start emotion regulation screening",
      faq: [
        { q: "Borderline diagnosis?", a: "No. Regulation tendency map." },
        { q: "Vs bipolar?", a: "Differential separates cyclical energy vs emotional reactivity." },
        { q: "Free?", a: "Yes." },
      ],
    },
  },
];

export const LANDING_BY_TR_SLUG = Object.fromEntries(
  LANDING_PAGES.map((p) => [p.trSlug, p]),
) as Record<string, LandingConfig>;

export const LANDING_BY_EN_SLUG = Object.fromEntries(
  LANDING_PAGES.map((p) => [p.enSlug, p]),
) as Record<string, LandingConfig>;

export function landingPath(config: LandingConfig, lang: "tr" | "en"): string {
  return lang === "tr" ? `/${config.trSlug}` : `/en/${config.enSlug}`;
}
