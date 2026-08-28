export type Lang = "tr" | "en";

export type Dict = {
  /* Navigation */
  nav_adult: string;
  nav_children: string;
  nav_scales: string;
  nav_faq: string;
  nav_about: string;

  /* Header / Footer */
  footer_disclaimer: string;
  footer_legal: string;
  footer_privacy: string;
  footer_terms: string;
  footer_children: string;
  footer_history: string;
  footer_crisis: string;
  footer_contact: string;

  /* Home */
  home_doc_id: string;
  home_duration: string;
  home_storage: string;
  home_h1: string;
  home_lede: string;
  home_children_link: string;
  home_how_h2: string;
  home_how_lede: string;
  home_step1_title: string;
  home_step1_body: string;
  home_step2_title: string;
  home_step2_body: string;
  home_step3_title: string;
  home_step3_body: string;
  home_legal_note: string;
  home_legal_link: string;
  home_crisis_link: string;

  /* Cookie Consent */
  consent_body: string;
  consent_all: string;
  consent_essential: string;

  /* Start / Gate */
  gate_kicker: string;
  gate_h1: string;
  gate_lede: string;
  gate_check_adult: string;
  gate_check_crisis: string;
  gate_check_legal: string;
  gate_legal_link: string;
  gate_crisis_link: string;
  gate_begin: string;
  gate_children_link: string;

  /* Scan */
  scan_progress: string;
  scan_back: string;
  scan_confirm: string;
  scan_skip: string;
  scan_kicker_base: string;
  scan_kicker_diff: string;
  scan_pause: string;
  scan_resume: string;
  scan_stage_label_base: string;
  scan_stage_label_diff: string;
  scan_answer_label: string;

  /* Bridge (between base and diff) */
  bridge_kicker: string;
  bridge_h1: string;
  bridge_lede: string;
  bridge_continue: string;

  /* Visual battery */
  vis_kicker: string;
  vis_h1: string;
  vis_lede: string;
  vis_start: string;
  vis_skip: string;
  vis_cpt_title: string;
  vis_cpt_lede: string;
  vis_cpt_press: string;
  vis_gng_title: string;
  vis_gng_lede: string;
  vis_gng_press: string;
  vis_sens_title: string;
  vis_sens_lede: string;
  vis_sens_label: (i: number) => string;
  vis_mood_title: string;
  vis_mood_lede: string;
  vis_mood_typical_energy: string;
  vis_mood_typical_mood: string;
  vis_mood_peak_energy: string;
  vis_mood_peak_mood: string;
  vis_mood_done: string;

  /* Results */
  results_kicker: string;
  results_h1: string;
  results_lede: string;
  results_uncertain_note: string;
  results_subtype_note: string;
  results_bars_label: string;
  results_crisis_warning: string;
  results_crisis_link: string;
  results_branches_used: string;
  results_no_branches: string;
  results_btn_print: string;
  results_btn_copy: string;
  results_btn_copied: string;
  results_btn_share: string;
  results_btn_new: string;
  results_link_history: string;
  results_card_overlaps_with: string;
  results_card_discuss: string;
  results_clinician_title: string;
  results_clinician_date: string;
  results_clinician_audience_adult: string;
  results_clinician_audience_child: string;
  results_clinician_disclaimer: string;
  results_clinician_branches_none: string;
  results_clinician_branches_used: string;
  results_clinician_th_dim: string;
  results_clinician_th_raw: string;
  results_clinician_th_max: string;
  results_clinician_th_pct: string;
  results_clinician_th_band: string;
  results_no_scan_h1: string;
  results_no_scan_lede: string;
  results_no_scan_btn: string;
  results_share_social: string;

  /* History */
  history_kicker: string;
  history_h1: string;
  history_empty: string;
  history_clear: string;

  /* Share */
  share_kicker: string;
  share_h1: string;
  share_disclaimer: string;
  share_no_data: string;

  /* Children landing */
  ch_kicker: string;
  ch_h1: string;
  ch_lede: string;
  ch_open_form: string;
  ch_adult_link: string;
  ch_why_h2: string;
  ch_why_lede: string;
  ch_step1_title: string;
  ch_step1_body: string;
  ch_step2_title: string;
  ch_step2_body: string;
  ch_step3_title: string;
  ch_step3_body: string;
  ch_legal_note: string;

  /* Children scan gate */
  ch_gate_kicker: string;
  ch_gate_h1: string;
  ch_gate_lede: string;
  ch_gate_check: string;
  ch_gate_begin: string;

  /* About */
  about_kicker: string;
  about_h1: string;
  about_lede: string;
  about_how_h2: string;
  about_how_body: string;
  about_not_h2: string;
  about_not_body: string;
  about_privacy_h2: string;
  about_privacy_body: string;
  about_contact_label: string;

  /* FAQ */
  faq_kicker: string;
  faq_h1: string;
  faq_items: { q: string; a: string }[];
  faq_more: string;
  faq_legal_link: string;
  faq_privacy_link: string;

  /* Scales */
  scales_kicker: string;
  scales_h1: string;
  scales_lede: string;
  scales_dict_h2: string;
  scales_items: { id: string; body: string }[];

  /* Crisis */
  crisis_kicker: string;
  crisis_h1: string;
  crisis_lede: string;
  crisis_note: string;

  /* Contact */
  contact_kicker: string;
  contact_h1: string;
  contact_lede: string;
  contact_body: string;
  contact_note: string;

  /* Legal / Privacy / Terms */
  legal_kicker: string;
  legal_h1: string;
  privacy_kicker: string;
  privacy_h1: string;
  terms_kicker: string;
  terms_h1: string;

  /* Erase data */
  erase_btn: string;
  erase_confirm: string;
  erase_done: string;

  /* Dimension / band labels */
  band_low: string;
  band_uncertain: string;
  band_elevated: string;
  band_high: string;

  /* Not found */
  notfound_h1: string;
  notfound_back: string;

  /* Error */
  error_h1: string;
  error_retry: string;
};

export const TR: Dict = {
  nav_adult: "Yetişkin",
  nav_children: "Çocuklar",
  nav_scales: "Ölçekler",
  nav_faq: "SSS",
  nav_about: "Hakkında",

  footer_disclaimer:
    "9spectrum bir tarama aracıdır; tanı koymaz, tedavi önermez ve acil yardımın yerini tutmaz. Cevaplarınız sunucuya gönderilmez; yalnızca cihazınızdaki tarayıcıda saklanır.",
  footer_legal: "Yasal uyarı",
  footer_privacy: "Gizlilik",
  footer_terms: "Kullanım şartları",
  footer_children: "Çocuklar",
  footer_history: "Geçmiş",
  footer_crisis: "Kriz",
  footer_contact: "İletişim",

  home_doc_id: "Belge MS-01",
  home_duration: "12–20 dk",
  home_storage: "anonim (sunucu + cihaz)",
  home_h1: "Belirtiler birbirine karışır. Kaynağını netleştirelim.",
  home_lede:
    "9spectrum, dokuz psikolojik boyutta eğilim profili çıkaran iki aşamalı bir taramadır. Tanı koymaz. Sabit bir test listesi değildir: cevaplarınıza göre sistem sonuca yaklaşmak için sonraki soruları değiştirir; örtüşen örüntüleri (ör. DEHB ertelemesi ile OKB kilitlenmesi) ayırmaya yardımcı olur.",
  home_children_link: "Çocuk taraması",
  home_how_h2: "İki aşama, tek oturum",
  home_how_lede:
    "Günlük hayattan senaryolarla ilerlersiniz. Diğer sitelerdeki gibi herkese aynı soru sırası yoktur: verdiğiniz cevaplara göre sistem sonuca yaklaşmak için soru yolunu değiştirir; bazı konularda derinleşir, bazılarını atlayabilir. Yaklaşık 30–45 soru, 12–20 dakika. Bir seçeneğe dokununca devam edersiniz.",
  home_step1_title: "1. Adaptif genel tarama",
  home_step1_body:
    "DEHB, OKB, depresyon, yaygın anksiyete, bipolar spektrum, otizm / duyusal profil, sosyal anksiyete, travma ve duygu regülasyonu taranır. Cevaplarınız hangi sorunun geleceğini belirler.",
  home_step2_title: "2. Ayırıcı sorular",
  home_step2_body:
    "İki boyut birden belirgin ve birbirine yakınsa ek sorular açılır; kökeni netleştirmeye yardımcı olur.",
  home_step3_title: "3. Spektrum profili",
  home_step3_body:
    "Eğilim çubukları, belirsiz bant notu, hekim özeti, cihaz içi paylaşım bağlantısı ve geçmiş taramalar.",
  home_legal_note:
    "Bu araç tıbbi tanı, tedavi veya acil müdahalenin yerini tutmaz.",
  home_legal_link: "Yasal uyarı",
  home_crisis_link: "Kriz kaynakları",

  consent_body:
    "Bu site zorunlu çerezler ile reklam/analiz için isteğe bağlı üçüncü taraf çerezleri kullanır. Tarama cevaplarınız sunucuya gönderilmez.",
  consent_all: "Tümünü kabul et",
  consent_essential: "Yalnızca zorunlu",

  gate_kicker: "Başlamadan önce · yetişkin taraması",
  gate_h1: "Bu bir tanı görüşmesi değildir.",
  gate_lede:
    "Adaptif tarama: cevaplarınıza göre sistem sonuca yaklaşmak için sonraki soruları değiştirir. Skorlar örtüşünce ayırıcı sorular açılır. Cevaplarınız bu cihazda kalır. Bir seçeneğe dokununca devam edersiniz.",
  gate_check_adult: "18 yaşında veya daha büyüğüm.",
  gate_check_crisis:
    "Şu an aktif bir kriz içinde değilim; intihar düşüncesi veya kendime / başkasına zarar verme niyetim yok.",
  gate_check_legal:
    "Yasal uyarıyı okudum: bu tarama tanı, tedavi veya acil müdahale değildir; sonuçları kendi sorumluluğumda değerlendiririm.",
  gate_legal_link: "Yasal uyarı metni",
  gate_crisis_link: "Kriz sayfası",
  gate_begin: "Taramayı başlat",
  gate_children_link: "18 yaşından küçükseniz çocuk taramasına gidin",

  scan_progress: "İlerleme",
  scan_back: "Geri",
  scan_confirm: "Onayla",
  scan_skip: "Bu soruyu atla",
  scan_kicker_base: "Genel tarama · 1. aşama",
  scan_kicker_diff: "Ayırıcı sorular · 2. aşama",
  scan_pause: "Duraklat",
  scan_resume: "Devam et",
  scan_stage_label_base: "1. aşama",
  scan_stage_label_diff: "2. aşama",
  scan_answer_label: "Yanıt seçenekleri",

  bridge_kicker: "Sonraki adım",
  bridge_h1: "Ayırıcı sorulara geçiliyor",
  bridge_lede:
    "İki boyutun skoru birbirine yakın çıktı. Kökeni ayırt etmek için kısa ek sorular açılıyor.",
  bridge_continue: "Devam et",

  vis_kicker: "Görsel görevler",
  vis_h1: "Kısa dikkat ve duyusal görevler",
  vis_lede: "Dört kısa görev; toplam yaklaşık 5 dakika. İsterseniz atlayabilirsiniz.",
  vis_start: "Başla",
  vis_skip: "Görsel görevleri atla",
  vis_cpt_title: "Sürekli dikkat görevi",
  vis_cpt_lede: "Harf X göründüğünde boşluğa tıklayın. Diğerlerinde tıklamayın.",
  vis_cpt_press: "X için tıkla",
  vis_gng_title: "Dur–git",
  vis_gng_lede: "Yeşil daire → tıklayın. Kırmızı daire → bekleyin.",
  vis_gng_press: "Yeşil için tıkla",
  vis_sens_title: "Duyusal doku",
  vis_sens_lede: "Her dokunun sizi ne kadar gerdiğini 1–5 arasında işaretleyin.",
  vis_sens_label: (i) => `Doku ${i + 1}`,
  vis_mood_title: "Enerji ve ruh hali",
  vis_mood_lede: "Kaydırıcıları hareket ettirin.",
  vis_mood_typical_energy: "Tipik enerji",
  vis_mood_typical_mood: "Tipik ruh hali",
  vis_mood_peak_energy: "En yüksek enerji (son ay)",
  vis_mood_peak_mood: "En yüksek ruh hali (son ay)",
  vis_mood_done: "Kaydet",

  results_kicker: "Spektrum profili · tanı değildir",
  results_h1: "Öne çıkan eğilimler",
  results_lede:
    "Çubuklar bu taramadaki göreli yoğunluğu gösterir. Yüksek skor tanı anlamına gelmez. Belirsiz bant, eşiğe yakın sonuçları işaret eder; kesin yargıya varmayın, bir sağlık uzmanıyla konuşun.",
  results_uncertain_note: "Belirsiz boyutlar:",
  results_subtype_note: "Alt tip notu:",
  results_bars_label: "Boyut skorları",
  results_crisis_warning:
    "Bu taramada depresyon veya travma eğilimi yüksek çıktı. Kendinizi güvende hissetmiyorsanız 112’yi arayın.",
  results_crisis_link: "Kriz kaynakları",
  results_branches_used: "Açılan ayırıcı bölümler:",
  results_no_branches:
    "Bu taramada ek ayırıcı soru açılmadı; örtüşen yüksek eğilim çifti görülmedi.",
  results_btn_print: "Hekim özeti / PDF",
  results_btn_copy: "Özeti kopyala",
  results_btn_copied: "Kopyalandı",
  results_btn_share: "Paylaşım bağlantısı",
  results_btn_new: "Yeni tarama",
  results_link_history: "Geçmiş taramalar",
  results_card_overlaps_with: "ile karışabilir",
  results_card_discuss: "Hekimle konuşurken",
  results_clinician_title: "Hekim özeti",
  results_clinician_date: "Tarih:",
  results_clinician_audience_adult: "yetişkin",
  results_clinician_audience_child: "ebeveyn formu",
  results_clinician_disclaimer: "Tanı değildir · Resmi ölçek uygulaması değildir.",
  results_clinician_branches_none: "Ayırıcı bölüm açılmadı.",
  results_clinician_branches_used: "Ayırıcı bölümler:",
  results_clinician_th_dim: "Boyut",
  results_clinician_th_raw: "Ham",
  results_clinician_th_max: "En fazla",
  results_clinician_th_pct: "%",
  results_clinician_th_band: "Bant",
  results_no_scan_h1: "Henüz tamamlanmış bir tarama yok",
  results_no_scan_lede:
    "Sonuçlar yalnızca bu cihazda tutulur. Taramayı bitirdiğinizde profiliniz burada görünür.",
  results_no_scan_btn: "Taramaya git",
  results_share_social:
    "9spectrum ile psikolojik eğilim profilimi gördüm — tanı değil, konuşmaya yardımcı bir harita.",

  history_kicker: "Geçmiş",
  history_h1: "Önceki taramalar",
  history_empty: "Kayıtlı tarama yok.",
  history_clear: "Tüm geçmişi sil",

  share_kicker: "Paylaşılan profil",
  share_h1: "Yalnızca bir harita",
  share_disclaimer:
    "Bu sonuçlar birinin tarayıcısından paylaştığı verilerdir. Tanı değildir.",
  share_no_data: "Geçerli veri bulunamadı.",

  ch_kicker: "Çocuk taraması",
  ch_h1: "Çocuğunuzun belirtileri karışıyor olabilir. Birlikte haritalayalım.",
  ch_lede:
    "Bu sayfa çocuklar için resmi test veya tanı değildir. Ebeveynin son haftalardaki gözlemine dayanan bir ön taramadır.",
  ch_open_form: "Ebeveyn formunu aç",
  ch_adult_link: "18+ yetişkin taraması →",
  ch_why_h2: "Neden ayrı bir form?",
  ch_why_lede:
    "Yetişkin soruları iş, maskeleme ve hipomani diline yaslanır. Çocuk formunda okul, oyun, rutin ve ebeveyn gözlemi kullanılır.",
  ch_step1_title: "DEHB benzeri tablo",
  ch_step1_body: "Başlamakta zorlanma, kıpırdanma, yönergeleri kaçırma, sıra bekleyememe.",
  ch_step2_title: "Otizm / duyusal",
  ch_step2_body: "Ses–ışık–kumaş hassasiyeti, tekrarlayan oyun, ima okuma güçlüğü, plan değişince zorlanma.",
  ch_step3_title: "Kaygı ve OKB",
  ch_step3_body: "Felaket senaryoları, okul sabahı bedensel yakınmalar, yıkama veya “tam olsun” tekrarları.",
  ch_legal_note:
    "İstismar, ihmal veya çocuğun güvenliği için 183 ve 112’yi arayın. Bu formun sonucu mahkeme veya okul tanısı yerine geçmez.",

  ch_gate_kicker: "Ebeveyn formu · çocuk taraması",
  ch_gate_h1: "Bu form ebeveyn veya bakıcı tarafından doldurulur.",
  ch_gate_lede:
    "Son dört haftadaki gözlemlerinize dayanın. Tanı yoktur; okul raporu veya mahkeme belgesi değildir.",
  ch_gate_check:
    "Bu formu gönüllü olarak, çocuğun ebeveyni veya birincil bakıcısı sıfatıyla doldurduğumu onaylıyorum.",
  ch_gate_begin: "Forma başla",

  about_kicker: "Hakkında",
  about_h1: "Sakin, gizli ve tanı iddiası olmayan bir tarama",
  about_lede:
    "9spectrum, belirtileri birbirine karışan insanlar için tasarlandı. Amaç etiketlemek değil; hekimle konuşulabilir net bir harita çıkarmaktır.",
  about_how_h2: "Nasıl çalışır?",
  about_how_body:
    "Sabit bir soru listesi yoktur. Verdiğiniz cevaplara göre sistem sonuca yaklaşmak için soru yolunu değiştirir; bazı alanlarda derinleşir. Birinci aşama dokuz boyutu tarar. İkinci aşama yalnızca skorlar örtüşünce açılır: örneğin ertelemenin sıkılmadan mı yoksa şüpheden mi geldiği; sosyal yorgunluğun yargılanma korkusu mu yoksa duyusal yük mü olduğu.",
  about_not_h2: "Ne değildir?",
  about_not_body:
    "Klinik görüşme, psikometrik test bataryası veya tedavi planı değildir. Ölçek adları bilimsel dayanağı göstermek içindir; resmi ölçek uygulaması yapılmaz.",
  about_privacy_h2: "Gizlilik",
  about_privacy_body:
    "Hesap yoktur. Cevaplar sunucuya yazılmaz. Tarama bu tarayıcının yerel belleğinde kalır; silmek size aittir.",
  about_contact_label: "İletişim:",

  faq_kicker: "SSS",
  faq_h1: "Sık sorulan sorular",
  faq_items: [
    { q: "Bu bir tanı mı?", a: "Hayır. 9spectrum eğilim ve örtüşme haritası üretir. Tanıyı yalnızca yetkili bir klinisyen koyabilir." },
    { q: "Diğer testlerden farkı ne?", a: "Çoğu site herkese aynı soruları sorar. 9spectrum adaptiftir: cevaplarınıza göre sistem sonuca yaklaşmak için sonraki soruları değiştirir. İki boyut örtüşünce ayırıcı sorular açılır." },
    { q: "Cevaplarım nereye gidiyor?", a: "Sunucuya gitmiyor. Bu tarayıcının yerel belleğinde kalır. İstediğiniz zaman gizlilik sayfasından silebilirsiniz." },
    { q: "Ne kadar sürer?", a: "Çoğu kişi 12–20 dakikada bitirir. Soru sayısı ve sırası cevaplardan etkilenir (yaklaşık 30–45). Çocuk ebeveyn formu daha kısadır." },
    { q: "Çocuklar için form var mı?", a: "Evet. /cocuklar adresinde 6–17 yaş için ebeveyn formu vardır. Çocuk tek başına doldurmaz; tanı veya okul raporu değildir." },
    { q: "Görsel testler var mı?", a: "Hayır. Tarama yalnızca yazılı sorulardan oluşur; bir seçeneğe dokununca otomatik ilerler." },
    { q: "Yarıda bırakırsam ne olur?", a: "Aynı tarayıcıda kaldığınız yerden devam edebilirsiniz. Başka bir cihaza aktarılmaz." },
    { q: "Krizdeysem kullanmalı mıyım?", a: "Hayır. Acil durumda 112’yi arayın. Kriz kaynakları sayfasına bakın." },
    { q: "Ölçekler resmi mi?", a: "Hayır. Soru dili ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS, PCL-5 ve benzeri envanterlerin boyutlarından türetilmiştir; lisanslı tam form uygulanmaz." },
  ],
  faq_more: "Daha fazla bilgi:",
  faq_legal_link: "yasal uyarı",
  faq_privacy_link: "gizlilik",

  scales_kicker: "Kaynakça",
  scales_h1: "Klinik ölçekler ve boyutlar",
  scales_lede:
    "9spectrum bu ölçeklerin resmi kopyası değildir. Soru dili DSM-5-TR / ICD-11 çerçevesi ve yaygın tarama envanterlerinin boyutlarından türetilmiştir.",
  scales_dict_h2: "Boyut sözlüğü",
  scales_items: [
    { id: "ASRS-v1.1", body: "WHO / Harvard Yetişkin DEHB Öz-Bildirim Ölçeği. Yürütücü işlev, dikkat düzenleme ve dürtüsellik taraması." },
    { id: "OCI-R & Y-BOCS", body: "Obsesif Kompulsif Envanteri ve Yale–Brown OKB Ölçeği. Obsesyon, kompulsiyon ve nötralizasyon yoğunluğu." },
    { id: "PHQ-9 & Beck", body: "Hasta Sağlık Anketi-9 ve Beck Depresyon Envanteri. Anhedoni, enerji, değersizlik ve psikomotor yavaşlama." },
    { id: "GAD-7", body: "Yaygın Anksiyete Bozukluğu-7. Kronik felaketleştirme, huzursuzluk ve bedensel gerginlik." },
    { id: "MDQ", body: "Duygudurum Bozuklukları Anketi. Hipomani/mani dönemleri ve bipolar spektrum taraması." },
    { id: "AQ-10 & CAT-Q", body: "Otizm Spektrum Katsayısı kısa form ve kamufle etme (maskeleme) envanteri." },
    { id: "LSAS", body: "Liebowitz Sosyal Kaygı Ölçeği. Performans ve sosyal etkileşim kaçınması." },
    { id: "PCL-5", body: "DSM-5 TSSB Kontrol Listesi. İstenmeyen anılar, kaçınma ve aşırı uyarılmışlık." },
    { id: "DERS & MSI-BPD", body: "Duygu Düzenleme Güçlüğü Ölçeği ve McLean Borderline tarama maddeleri." },
  ],

  crisis_kicker: "Acil",
  crisis_h1: "Bu tarama kriz müdahalesi değildir",
  crisis_lede:
    "Kendinize veya başkasına zarar verme düşünceniz varsa hemen yardım alın. Yalnız değilsiniz.",
  crisis_note: "En yakın acil servise gidin veya 112’yi arayın. Uluslararası kaynak: IASP — iasp.info",

  contact_kicker: "İletişim",
  contact_h1: "Bize yazın",
  contact_lede: "Klinik acil durumlar için bu kanalı kullanmayın.",
  contact_body: "9spectrum ile ilgili soru, iş birliği veya düzeltme talepleri:",
  contact_note:
    "E-postada tarama cevaplarınızı göndermeniz gerekmez. Gönderirseniz o ileti sizin sorumluluğunuzdadır.",

  legal_kicker: "Yasal uyarı",
  legal_h1: "Yasal uyarı ve sorumluluk reddi",
  privacy_kicker: "KVKK / gizlilik",
  privacy_h1: "Gizlilik bildirimi",
  terms_kicker: "Kullanım şartları",
  terms_h1: "Kullanım şartları",

  erase_btn: "Tüm tarama verilerini sil",
  erase_confirm: "Emin misiniz? Bu işlem geri alınamaz.",
  erase_done: "Veriler silindi.",

  band_low: "Düşük eğilim",
  band_uncertain: "Belirsiz / sınırda",
  band_elevated: "Belirgin eğilim",
  band_high: "Yüksek eğilim",

  notfound_h1: "Sayfa bulunamadı",
  notfound_back: "Ana sayfaya dön",

  error_h1: "Bir hata oluştu",
  error_retry: "Yeniden dene",
};

export const EN: Dict = {
  nav_adult: "Adult",
  nav_children: "Children",
  nav_scales: "Scales",
  nav_faq: "FAQ",
  nav_about: "About",

  footer_disclaimer:
    "9spectrum is a screening tool only — it does not diagnose, prescribe treatment, or replace emergency care. Your answers stay on this device and are never sent to a server.",
  footer_legal: "Legal notice",
  footer_privacy: "Privacy",
  footer_terms: "Terms of use",
  footer_children: "Children",
  footer_history: "History",
  footer_crisis: "Crisis",
  footer_contact: "Contact",

  home_doc_id: "Form MS-01",
  home_duration: "12–20 min",
  home_storage: "anonymous (server + device)",
  home_h1: "Symptoms overlap. Let's clarify the source.",
  home_lede:
    "9spectrum is a two-stage screening that builds a tendency profile across nine psychological dimensions. It does not diagnose. It is not a fixed quiz: based on your answers, the system changes which questions come next to home in on the result — and helps separate overlapping patterns (e.g. ADHD-style delay vs. OCD paralysis).",
  home_children_link: "Child screening",
  home_how_h2: "Two stages, one session",
  home_how_lede:
    "You move through everyday scenarios. Unlike most sites that ask everyone the same list, 9spectrum is adaptive: your answers change the question path as the system homes in on the result — deepening some areas and skipping others. About 30–45 questions, 12–20 minutes. Tap an option to continue.",
  home_step1_title: "1. Adaptive general screening",
  home_step1_body:
    "ADHD, OCD, depression, generalised anxiety, bipolar spectrum, autism / sensory profile, social anxiety, trauma, and emotion regulation. Your answers determine which question comes next.",
  home_step2_title: "2. Differential questions",
  home_step2_body:
    "Extra questions open only when two dimensions are both elevated and close — to help clarify the source.",
  home_step3_title: "3. Spectrum profile",
  home_step3_body:
    "Tendency bars, uncertain-band notes, clinician summary, on-device share link, and past screenings.",
  home_legal_note:
    "This tool does not replace a medical diagnosis, treatment, or emergency care.",
  home_legal_link: "Legal notice",
  home_crisis_link: "Crisis resources",

  consent_body:
    "This site uses essential cookies and optional third-party cookies for ads and analytics. Your screening answers are never sent to a server.",
  consent_all: "Accept all",
  consent_essential: "Essential only",

  gate_kicker: "Before you start · adult screening",
  gate_h1: "This is not a clinical interview.",
  gate_lede:
    "Adaptive screening: based on your answers, the system changes which questions come next to home in on the result. When scores overlap, differential follow-ups open. Answers stay on this device. Tap an option to continue.",
  gate_check_adult: "I am 18 years of age or older.",
  gate_check_crisis:
    "I am not currently in an active crisis, having suicidal thoughts, or intending to harm myself or others.",
  gate_check_legal:
    "I have read the legal notice: this screening is not a diagnosis, treatment, or emergency care; I evaluate results at my own responsibility.",
  gate_legal_link: "Legal notice",
  gate_crisis_link: "Crisis resources",
  gate_begin: "Start screening",
  gate_children_link: "Under 18? Go to the child screening",

  scan_progress: "Progress",
  scan_back: "Back",
  scan_confirm: "Confirm",
  scan_skip: "Skip this question",
  scan_kicker_base: "General screening · Stage 1",
  scan_kicker_diff: "Differential questions · Stage 2",
  scan_pause: "Pause",
  scan_resume: "Resume",
  scan_stage_label_base: "Stage 1",
  scan_stage_label_diff: "Stage 2",
  scan_answer_label: "Answer options",

  bridge_kicker: "Next step",
  bridge_h1: "Moving to differential questions",
  bridge_lede:
    "Two dimension scores came out close. A few short follow-up questions will help clarify the source.",
  bridge_continue: "Continue",

  vis_kicker: "Visual tasks",
  vis_h1: "Short attention and sensory tasks",
  vis_lede: "Four brief tasks; about five minutes in total. You can skip them.",
  vis_start: "Start",
  vis_skip: "Skip visual tasks",
  vis_cpt_title: "Continuous attention task",
  vis_cpt_lede: "Tap when you see the letter X. Do not tap for other letters.",
  vis_cpt_press: "Tap for X",
  vis_gng_title: "Go / no-go",
  vis_gng_lede: "Green circle → tap. Red circle → wait.",
  vis_gng_press: "Tap for green",
  vis_sens_title: "Sensory texture",
  vis_sens_lede: "Rate how tense each texture makes you feel (1–5).",
  vis_sens_label: (i) => `Texture ${i + 1}`,
  vis_mood_title: "Energy and mood",
  vis_mood_lede: "Move the sliders.",
  vis_mood_typical_energy: "Typical energy",
  vis_mood_typical_mood: "Typical mood",
  vis_mood_peak_energy: "Peak energy (last month)",
  vis_mood_peak_mood: "Peak mood (last month)",
  vis_mood_done: "Save",

  results_kicker: "Spectrum profile · not a diagnosis",
  results_h1: "Leading tendencies",
  results_lede:
    "Bars show relative intensity in this screening. A high score is not a diagnosis. The uncertain band means you are near a threshold — do not over-interpret it; talk with a clinician.",
  results_uncertain_note: "Uncertain dimensions:",
  results_subtype_note: "Subtype note:",
  results_bars_label: "Dimension scores",
  results_crisis_warning:
    "Depression or trauma tendency came up high in this screening. If you do not feel safe, call your local emergency number.",
  results_crisis_link: "Crisis resources",
  results_branches_used: "Differential sections opened:",
  results_no_branches:
    "No extra differential questions were opened in this screening.",
  results_btn_print: "Clinician summary / PDF",
  results_btn_copy: "Copy summary",
  results_btn_copied: "Copied",
  results_btn_share: "Share link",
  results_btn_new: "New screening",
  results_link_history: "Past screenings",
  results_card_overlaps_with: "can overlap with",
  results_card_discuss: "When talking with a clinician",
  results_clinician_title: "Clinician summary",
  results_clinician_date: "Date:",
  results_clinician_audience_adult: "adult",
  results_clinician_audience_child: "parent form",
  results_clinician_disclaimer: "Not a diagnosis · Not an official scale administration.",
  results_clinician_branches_none: "No differential section opened.",
  results_clinician_branches_used: "Differential sections:",
  results_clinician_th_dim: "Dimension",
  results_clinician_th_raw: "Raw",
  results_clinician_th_max: "Max",
  results_clinician_th_pct: "%",
  results_clinician_th_band: "Band",
  results_no_scan_h1: "No completed screening yet",
  results_no_scan_lede:
    "Results stay on this device only. When you finish the screening, your profile appears here.",
  results_no_scan_btn: "Go to screening",
  results_share_social:
    "I reviewed my psychological tendency profile with 9spectrum — not a diagnosis, but a useful map for conversation.",

  history_kicker: "History",
  history_h1: "Past screenings",
  history_empty: "No saved screenings.",
  history_clear: "Clear all history",

  share_kicker: "Shared profile",
  share_h1: "Just a map",
  share_disclaimer:
    "These results were shared from someone's browser. Not a diagnosis.",
  share_no_data: "No valid data found.",

  ch_kicker: "Child screening",
  ch_h1: "Your child's symptoms may overlap. Let's map them together.",
  ch_lede:
    "This is not an official test or diagnosis for children. It is a parent-reported pre-screen based on recent observations.",
  ch_open_form: "Open parent form",
  ch_adult_link: "Adult screening (18+) →",
  ch_why_h2: "Why a separate form?",
  ch_why_lede:
    "Adult items use work, masking, and hypomania language. The child form uses school, play, routine, and caregiver observation.",
  ch_step1_title: "ADHD-like picture",
  ch_step1_body: "Trouble starting, fidgeting, missing instructions, difficulty waiting turns.",
  ch_step2_title: "Autism / sensory",
  ch_step2_body: "Sound–light–fabric sensitivity, repetitive play, reading implied meaning, distress when plans change.",
  ch_step3_title: "Anxiety and OCD",
  ch_step3_body: "Catastrophic worries, morning bodily complaints before school, washing or “just right” repetitions.",
  ch_legal_note:
    "For abuse, neglect, or child safety concerns, call emergency services. This form does not replace a court or school evaluation.",

  ch_gate_kicker: "Parent form · child screening",
  ch_gate_h1: "This form is completed by a parent or caregiver.",
  ch_gate_lede:
    "Base your answers on the past four weeks. No diagnosis is made; this is not a school report or legal document.",
  ch_gate_check:
    "I confirm that I am voluntarily completing this form as the child's parent or primary caregiver.",
  ch_gate_begin: "Begin form",

  about_kicker: "About",
  about_h1: "Calm, private, and free of diagnostic claims",
  about_lede:
    "9spectrum was built for people whose symptoms blur together. The goal is not to label — it is to produce a clear map you can bring to a clinician.",
  about_how_h2: "How it works",
  about_how_body:
    "There is no fixed question list. Based on your answers, the system changes the question path to home in on the result — deepening some areas. Stage one screens nine dimensions. Stage two opens only when scores overlap — for example whether delay comes from boredom or doubt, or whether social fatigue is fear of judgment or sensory load.",
  about_not_h2: "What it is not",
  about_not_body:
    "Not a clinical interview, psychometric test battery, or treatment plan. Scale names show scientific grounding; no licensed instrument is administered.",
  about_privacy_h2: "Privacy",
  about_privacy_body:
    "No account. Answers are not written to a server. The screening stays in this browser's local storage; you control deletion.",
  about_contact_label: "Contact:",

  faq_kicker: "FAQ",
  faq_h1: "Frequently asked questions",
  faq_items: [
    { q: "Is this a diagnosis?", a: "No. 9spectrum produces a tendency and overlap map. Only a licensed clinician can diagnose." },
    { q: "How is this different from other quizzes?", a: "Most sites ask everyone the same questions. 9spectrum is adaptive: based on your answers, the system changes which questions come next to home in on the result. When two dimensions overlap, differential follow-ups open." },
    { q: "Where do my answers go?", a: "Nowhere remote. They stay in this browser's local storage. You can delete them any time from the privacy page." },
    { q: "How long does it take?", a: "Most people finish in 12–20 minutes. Question count and order depend on your answers (about 30–45). The child parent form is shorter." },
    { q: "Is there a form for children?", a: "Yes. The parent form for ages 6–17 is at /en/children. Children should not complete it alone; it is not a diagnosis or school report." },
    { q: "Are there visual tasks?", a: "No. The screening is text-only; tapping an option advances automatically." },
    { q: "What if I leave halfway through?", a: "You can continue in the same browser. Progress does not transfer to another device." },
    { q: "Should I use this if I'm in crisis?", a: "No. In an emergency call your local emergency number. See the crisis resources page." },
    { q: "Are the scales official?", a: "No. Question language is derived from dimensions of ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS, PCL-5 and similar inventories. Licensed full forms are not administered." },
  ],
  faq_more: "More reading:",
  faq_legal_link: "legal notice",
  faq_privacy_link: "privacy",

  scales_kicker: "References",
  scales_h1: "Clinical scales and dimensions",
  scales_lede:
    "9spectrum is not an official reproduction of these instruments. Question language is derived from DSM-5 / ICD-11 frameworks and widely used screening inventory dimensions.",
  scales_dict_h2: "Dimension glossary",
  scales_items: [
    { id: "ASRS-v1.1", body: "WHO / Harvard Adult ADHD Self-Report Scale. Executive function, attention regulation, and impulsivity screening." },
    { id: "OCI-R & Y-BOCS", body: "Obsessive Compulsive Inventory–Revised and Yale–Brown Obsessive Compulsive Scale. Obsession, compulsion, and neutralisation intensity." },
    { id: "PHQ-9 & Beck", body: "Patient Health Questionnaire-9 and Beck Depression Inventory. Anhedonia, energy, worthlessness, and psychomotor slowing." },
    { id: "GAD-7", body: "Generalised Anxiety Disorder-7. Chronic catastrophising, restlessness, and somatic alarm." },
    { id: "MDQ", body: "Mood Disorder Questionnaire. Hypomanic/manic episodes and bipolar spectrum screening." },
    { id: "AQ-10 & CAT-Q", body: "Autism-Spectrum Quotient short form and Camouflaging Autistic Traits Questionnaire." },
    { id: "LSAS", body: "Liebowitz Social Anxiety Scale. Performance and social interaction avoidance." },
    { id: "PCL-5", body: "DSM-5 PTSD Checklist. Intrusive memories, avoidance, and hyperarousal." },
    { id: "DERS & MSI-BPD", body: "Difficulties in Emotion Regulation Scale and McLean Screening Instrument for BPD." },
  ],

  crisis_kicker: "Emergency",
  crisis_h1: "This screening is not a crisis intervention.",
  crisis_lede:
    "If you are having thoughts of harming yourself or others, please seek help immediately. You are not alone.",
  crisis_note: "Go to the nearest emergency room or call your local emergency number. International resource — IASP: iasp.info",

  contact_kicker: "Contact",
  contact_h1: "Write to us",
  contact_lede: "This inbox is not for clinical emergencies.",
  contact_body: "Questions, collaboration, or corrections about 9spectrum:",
  contact_note:
    "You do not need to include your screening answers in the email. If you do, that is your responsibility.",

  legal_kicker: "Legal",
  legal_h1: "Legal notice and disclaimer",
  privacy_kicker: "GDPR / privacy",
  privacy_h1: "Privacy notice",
  terms_kicker: "Terms",
  terms_h1: "Terms of use",

  erase_btn: "Erase all screening data",
  erase_confirm: "Are you sure? This cannot be undone.",
  erase_done: "Data erased.",

  band_low: "Low tendency",
  band_uncertain: "Uncertain / borderline",
  band_elevated: "Elevated tendency",
  band_high: "High tendency",

  notfound_h1: "Page not found.",
  notfound_back: "Go to home",

  error_h1: "Something went wrong",
  error_retry: "Try again",
};

export const DICTS: Record<Lang, Dict> = { tr: TR, en: EN };
