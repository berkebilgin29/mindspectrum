# MindSpectrum — Aşama 1 Senaryo Havuzu ve Gizli Puanlama Matrisi

*Prototip 0.2 — 35 soruluk davranış katmanı (ADHD dışı) • İç kullanım / geliştirme notu*

> **Önemli:** Bu maddeler klinik olarak valide edilmiş ölçekler değildir. Adı geçen ölçeklerin (OCI-R, Y-BOCS, PHQ-9, GAD-7, LSAS, AQ-10, CAT-Q, MDQ, PCL-5, DERS-16, MSI-BPD) yapı ve alt boyutlarından türetilmiş, davranışsal senaryolara gömülmüş prototip maddelerdir. Sonuç ekranı hiçbir koşulda tanı koymamalıdır.

**Toplam:** 35 soru — 25 core + 10 ext. Dağılım: Obsesif Kompulsif Spektrum 4 • Depresif Belirti Örüntüsü 5 • Yaygın Anksiyete 4 • Sosyal Anksiyete 4 • Otizm Spektrumu & Maskeleme 5 • Bipolar Spektrum 4 • Travma 4 • Duygu Regülasyon Güçlüğü 5


## 1. Gizli eksenler

### OKB — Obsesif Kompulsif Spektrum  
*Psikometrik temel: OCI-R / Y-BOCS*

| Kod | Eksen |
| --- | --- |
| `OBS` | Obsession — istenmeyen tekrarlayıcı düşünce, zihinsel meşguliyet |
| `COM` | Compulsion — kontrol, yıkama, tekrar, zihinsel nötralizasyon |
| `SYM` | Symmetry & 'not just right' — düzen, simetri, tam olma hissi |
| `RSP` | Inflated responsibility — abartılmış sorumluluk, düşünce-eylem kaynaşması |
| `DIS` | Distress & Interference — ritüel engellenince sıkıntı, işlev kaybı |

### DEP — Depresif Belirti Örüntüsü  
*Psikometrik temel: PHQ-9 / BDI-II*

| Kod | Eksen |
| --- | --- |
| `ANH` | Anhedonia — ilgi ve zevk kaybı, ödül sönümlenmesi |
| `ENR` | Energy & psychomotor — efor eşiği, yavaşlama, somatik ağırlık |
| `NCG` | Negative cognition — değersizlik, suçluluk, umutsuzluk (Beck üçlüsü) |
| `SLP` | Sleep & circadian — uyku mimarisi, sabah aktivasyonu |

### YAB — Yaygın Anksiyete  
*Psikometrik temel: GAD-7*

| Kod | Eksen |
| --- | --- |
| `WOR` | Worry — kontrol edilemeyen endişe, felaketleştirme |
| `TNS` | Somatic tension — kas gerginliği, otonomik uyarılma, interosepsiyon |
| `IRR` | Irritability — tahammülsüzlük, çabuk öfkelenme |
| `IUC` | Intolerance of uncertainty — belirsizliğe tahammülsüzlük, güvence arayışı |

### SOS — Sosyal Anksiyete  
*Psikometrik temel: LSAS*

| Kod | Eksen |
| --- | --- |
| `PRF` | Performance anxiety — izlenme, performans anı korkusu |
| `ITA` | Interaction anxiety — etkileşim başlatma, otorite, hak arama |
| `AVD` | Avoidance & safety behaviour — kaçınma ve güvenlik davranışları |
| `PEV` | Post-event processing — olay sonrası zihinsel tekrar/otopsi |

### OTZ — Otizm Spektrumu & Maskeleme  
*Psikometrik temel: AQ-10 / CAT-Q*

| Kod | Eksen |
| --- | --- |
| `SEN` | Sensory processing — duyusal aşırı duyarlılık, aşırı yüklenme |
| `RIG` | Rigidity & monotropism — rutin bağlılığı, geçiş güçlüğü, derin ilgi |
| `CAM` | Camouflaging — maskeleme, asimilasyon, kompansasyon, bilişsel yük |
| `SCM` | Social communication — örtük kural, ima, bağlam okuma |

### BIP — Bipolar Spektrum  
*Psikometrik temel: MDQ*

| Kod | Eksen |
| --- | --- |
| `HYP` | Hypomania & grandiosity — basınçlı konuşma, özgüven artışı, düşünce uçuşması |
| `CYC` | Cycling — dış olaydan bağımsız, epizodik, kendiliğinden döngü |
| `SLD` | Sleep need decrease — uyku ihtiyacında azalma (uyuyamama DEĞİL) |
| `RSK` | Risk & disinhibition — dürtüsel büyük kararlar, aşırı harcama |

### TSB — Travma / TSSB  
*Psikometrik temel: PCL-5*

| Kod | Eksen |
| --- | --- |
| `INR` | Intrusion — istemsiz anı, rüya, flashback, tetiklenmiş reaktivite |
| `AVT` | Avoidance — travma çağrıştıranlardan eforlu kaçınma |
| `ARO` | Hyperarousal — hipervijilans, irkilme, uyku/konsantrasyon |
| `NCM` | Negative cognition & mood — güvensizlik, uyuşma, yabancılaşma |
| `DSC` | Dissociation — kopma, depersonalizasyon, zaman kaybı, donma |

### DDR — Duygu Regülasyon Güçlüğü / Sınır Örüntüler  
*Psikometrik temel: DERS-16 / MSI-BPD*

| Kod | Eksen |
| --- | --- |
| `EMR` | Emotional reactivity — hızlı yükselme, uzamış sönümlenme |
| `FOA` | Fear of abandonment — reddedilme/terk edilme hassasiyeti |
| `IMP` | Impulsivity under distress — sıkıntı anında dürtüsel eylem |
| `IDN` | Identity & emptiness — kronik boşluk, kimlik dalgalanması |
| `STR` | Limited strategies — duyguyu kabul edememe, netlik yokluğu, çaresizlik |

**Tüm modüllerde ortak:**

| Kod | Eksen |
| --- | --- |
| `FUN` | Functional interference — günlük işlev, iş/okul/ilişki üzerindeki etki |

**Etiketler:**

- `ADHD` — ADHD lehine ayırt edici cevap — ADHD modülüne bonus taşır, bu modülde puan üretmez
- `SAFETY` — Güvenlik katmanını tetikler
- `GATE_A` — Kapı sorusu — 'olay yok' yanıtı modülün kalanını atlatır

Puan ölçeği: **0** = sinyal yok • **1** = zayıf/olası • **2** = belirgin. `ADHD` etiketli şıklar bu modülde puan üretmez, ADHD matrisine bonus taşır.


## 2. Soru bazlı gizli matris


### Obsesif Kompulsif Spektrum

#### `OCD-01` — Gönderilmiş mesajın kontrolü  
*core*

> Bir işi/başvuruyu bitirdin ve önemli bir e-postayı veya mesajı gönderdin. 'Gönder'e bastıktan sonraki birkaç saat genellikle nasıl geçer?

| Şık | Cevap | `OBS` | `COM` | `SYM` | `RSP` | `DIS` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **A** | Sekmeyi kapatır, aklımdan çıkarır, başka işime geçerim. | 0 | 0 | 0 | 0 | 0 | 0 | Nötr; kapanma becerisi sağlıklı. |
| **B** | Bir kez gönderilenlere bakıp gittiğini teyit eder, sonra kapatırım. | 0 | 1 | 0 | 0 | 0 | 0 | Tek seferlik uyumsal kontrol. |
| **C** | Aynı mesajı defalarca açıp okurum; yazım hatası, eksik ek veya yanlış anlaşılacak bir cümle var mı diye tararım. Kontrolü bıraktığımda bile içim rahat etmez. | 1 | 2 | 0 | 0 | 1 | 0 | Tekrarlayıcı kontrol + güvence sağlamama; Y-BOCS zaman/sıkıntı kriteri. |
| **D** | Zaten göndermem saatler sürer; cümleyi 'tam doğru' formüle edemediğim sürece gönder tuşuna basamam, defalarca yeniden yazarım. | 1 | 0 | 2 | 0 | 1 | 1 | 'Not just right' + mükemmeliyetçi felç; görev gecikmesi. |
| **E** | Yanlış bir şey yazdıysam karşı tarafın zarar göreceği veya işin benim yüzümden bozulacağı düşüncesi günlerce aklımdan çıkmaz. | 2 | 0 | 0 | 2 | 1 | 0 | Abartılmış sorumluluk + obsesif ruminasyon. |

#### `OCD-02` — Bulaşma ve ara temas  
*core*

> Toplu taşımadan indin, yol boyunca tutamağa tutundun. Eve gitmeden önce markete uğraman gerekiyor. Bu ara süreçte ellerinle ilgili genellikle ne yaşarsın?

| Şık | Cevap | `OBS` | `COM` | `RSP` | `DIS` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **A** | Ellerimin 'kirli' olduğu düşüncesi zihnimden gitmez; eve varana kadar yüzüme, telefonuma, çantama dokunmamaya çalışırım ve eve girer girmez kıyafetlerimi değiştiririm. | 2 | 2 | 0 | 2 | 1 | OCI-R yıkama boyutu; kaçınma + ritüel + belirgin işlev yükü. |
| **B** | Ellerimi hiç düşünmem, doğrudan markete girerim. | 0 | 0 | 0 | 0 | 0 | Nötr. |
| **C** | Markette bir şeye dokunmadan önce mutlaka dezenfektan kullanmam gerekir; yanımda yoksa alışveriş boyunca huzursuz olurum. | 0 | 1 | 0 | 1 | 0 | Ritüele bağımlı rahatlama; engellenince sıkıntı. |
| **D** | Eve varınca normal şekilde ellerimi yıkarım, o kadar. | 0 | 0 | 0 | 0 | 0 | Uyumsal hijyen. |
| **E** | Kendi ellerimden çok, benim yüzümden evdeki birine bir şey bulaştıracağım düşüncesi rahatsız eder. | 1 | 0 | 2 | 1 | 0 | Sorumluluk odaklı bulaşma; başkasına zarar teması. |

#### `OCD-03` — İstenmeyen düşünceye tepki  
*core*

> Herkesin zihnine zaman zaman kendi değerleriyle hiç uyuşmayan, istemediği, rahatsız edici düşünceler gelebilir. Böyle bir düşünce aklına düştüğünde genellikle ne olur?

| Şık | Cevap | `OBS` | `COM` | `RSP` | `DIS` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **A** | Tuhaf bir düşünce diye geçer, üzerinde durmam. | 0 | 0 | 0 | 0 | 0 | Normalize etme; sağlıklı bilişsel esneklik. |
| **B** | Bunu düşünmüş olmam bile beni endişelendirir; 'demek ki içimde böyle bir şey var' diye kendimi sorgular, saatlerce bunun hesabını yaparım. | 2 | 0 | 1 | 1 | 0 | Düşünce-eylem kaynaşması (TAF) ve ahlaki obsesyon. |
| **C** | Rahatsız olurum ama 'beyin işte' deyip devam ederim. | 0 | 0 | 0 | 0 | 0 | Uyumsal mesafelenme. |
| **D** | Düşünceyi kafamdan atmak için içimden bir şeyler sayarım, tekrar ederim veya 'iyi' bir düşünceyle üstünü kapatmaya çalışırım. | 1 | 2 | 0 | 1 | 0 | Zihinsel nötralizasyon — görünmez kompulsiyon (OCI-R obsesyon alt boyutu). |
| **E** | O düşünceyi tetikleyen ortamdan, kişiden veya nesneden sonrasında uzak durmaya başlarım. | 1 | 1 | 0 | 2 | 1 | Obsesyona bağlı davranışsal kaçınma; yaşam alanının daralması. |

#### `OCD-04` — Tekrar ve 'tam olma' hissi  
***ext** (koşullu)*

> Bir metni okurken, merdiven çıkarken veya bir eşyayı yerleştirirken 'belli bir sayıya kadar' ya da 'doğru hissedene kadar' tekrar etme ihtiyacı duyar mısın?

| Şık | Cevap | `COM` | `SYM` | `DIS` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Hayır, böyle bir ihtiyacım hiç olmadı. | 0 | 0 | 0 | 0 | Sinyal yok. |
| **B** | Bir cümleyi tekrar okuduğum olur ama sebebi dikkatimin kaymış olması, bir his değil. | 0 | 0 | 0 | 0 | `ADHD` Dikkat kayması kaynaklı tekrar — OKB değil, ADHD lehine. |
| **C** | Böyle tekrarlarım olur ama sadece çok stresli dönemlerde artar. | 0 | 1 | 1 | 0 | Stresle tetiklenen subklinik ritüel. |
| **D** | Bir paragrafı 'içime sinene' kadar tekrar okurum; anlamış olsam bile o his gelmezse devam edemem. | 0 | 2 | 1 | 1 | Saf 'not just right experience'; anlama değil his kriteri. |
| **E** | Belirli sayılara veya çift sayılara göre hareket ederim; ters gelirse baştan başlarım. | 1 | 2 | 1 | 0 | Sayma kompulsiyonu ve simetri kuralı. |


### Depresif Belirti Örüntüsü

#### `DEP-01` — Sevilen aktivitenin tadı  
*core*

> Uzun süredir keyif aldığın bir şey var (bir hobi, bir dizi, müzik, oyun). Son iki haftayı düşün: bu şeyle aranda ne oldu?

| Şık | Cevap | `ANH` | `ENR` | `NCG` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Keyif almıyorum ama alışkanlıktan devam ediyorum; yaparken içimde hiçbir şey olmuyor. | 2 | 0 | 0 | Klasik anhedoni; uyaran var, ödül yanıtı yok. |
| **B** | Hâlâ aynı keyfi alıyorum. | 0 | 0 | 0 | Anhedoni yok. |
| **C** | Keyif alacağımı biliyorum ama başlamak için gereken enerjiyi bulamıyorum. | 0 | 2 | 0 | Ödül korunmuş, aktivasyon bozulmuş — anhedoni değil efor eşiği. |
| **D** | Başlatıyorum, on dakika sonra 'bunu neden yapıyorum' deyip kapatıyorum, içim boş kalıyor. | 2 | 0 | 1 | Ödül sönümlenmesi + anlamsızlık bilişi. |
| **E** | İlgim başka bir şeye kaydı, yenisinden gayet keyif alıyorum. | 0 | 0 | 0 | `ADHD` Yenilik arayışı; ADHD ilgi döngüsü lehine. |

#### `DEP-02` — Temel öz bakım eşiği  
*core*

> Duş almak, bulaşıkları yıkamak, çamaşır asmak gibi temel işler son dönemde sende nasıl işliyor?

| Şık | Cevap | `ENR` | `NCG` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Rutin; düşünmeden yaparım. | 0 | 0 | 0 | Normal aktivasyon. |
| **B** | Erteliyorum ama gün içinde mutlaka hallediyorum. | 1 | 0 | 0 | Hafif efor artışı. |
| **C** | Yapmam gerektiğini biliyorum, kendime kızıyorum ama bedenim hareket etmiyor; bu da beni daha da kötü hissettiriyor. | 2 | 2 | 1 | Psikomotor yavaşlama + suçluluk döngüsü (kendini besleyen kısır döngü). |
| **D** | Duş almak veya kıyafet değiştirmek gibi en basit şeyler gözümde dağ gibi büyüyor, günlerce erteleyebiliyorum. | 2 | 0 | 2 | Belirgin işlev kaybı; PHQ-9 madde 4/8 karşılığı. |
| **E** | Başlarsam bitiririm, sorun başlamakta; ilgimi çeken bir şey olsa hemen kalkarım. | 1 | 0 | 0 | `ADHD` İlgi bağımlı aktivasyon — dopaminerjik efor eşiği, duygudurum değil. |

#### `DEP-03` — Övgüyü alabilme  
*core*

> Biri sana içtenlikle bir iltifat etti ya da yaptığın bir iş için teşekkür etti. İçinde ne olur?

| Şık | Cevap | `ANH` | `NCG` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Sevinirim, teşekkür ederim, gün boyu iyi hissettirir. | 0 | 0 | Sağlıklı öz-değer. |
| **B** | 'Beni gerçekten tanısa böyle demezdi' diye düşünürüm; övgüyü içeri alamam. | 0 | 2 | Olumluyu diskalifiye etme; içselleştirilmiş değersizlik. |
| **C** | İyi hissederim ama etkisi çok kısa sürer. | 0 | 1 | Zayıf pozitif afekt kalıcılığı. |
| **D** | Rahatsız olurum, konuyu değiştiririm; ilgi odağı olmak beni gerer. | 0 | 0 | Sosyal Anksiyete lehine (performans kaygısı), depresif biliş değil. |
| **E** | Hiçbir şey hissetmem; ne övgü ne eleştiri bana ulaşıyor gibi. | 2 | 1 | Duygusal uyuşma (numbing) — TSSB NCM ekseniyle çapraz kontrol edilmeli. |

#### `DEP-04` — Uyku mimarisi  
*core*

> Gece yatağa girdikten sonraki süreç ve sabah uyanışın son dönemde nasıl?

| Şık | Cevap | `ENR` | `NCG` | `SLP` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Yarım saat içinde uyurum, sabah normal kalkarım. | 0 | 0 | 0 | Sağlıklı uyku mimarisi. |
| **B** | Çok uyuyorum, on saati geçtiği oluyor, yine de hiç dinlenmemiş uyanıyorum. | 2 | 0 | 2 | Hipersomni + 'leaden paralysis' — atipik depresyon örüntüsü. |
| **C** | Uykuya dalamıyorum; zihnimde gün içindeki sahneler ve yarın olacaklar dönüp duruyor. | 0 | 0 | 1 | Anksiyete kaynaklı uyku başlangıç güçlüğü — YAB WOR ekseniyle çapraz kontrol. |
| **D** | Uyuyabiliyorum ama sabaha karşı dörtte beşte uyanıp bir daha uyuyamıyorum; sabahlar günün en ağır saati. | 1 | 1 | 2 | Erken uyanma + diurnal varyasyon — melankolik özellikler. |
| **E** | Gece saatleri benim en canlı olduğum zaman; gün bitmesin diye uykuyu bilerek erteliyorum. | 0 | 0 | 1 | `ADHD` Gecikmiş faz / 'intikam uykusu erteleme' — ADHD ile sık birlikte. |

#### `DEP-05` — Gelecek tasavvuru  
***ext** (koşullu)*

> Senden önümüzdeki altı ay için somut bir plan yazman istense, zihninde ne olur?

| Şık | Cevap | `ANH` | `ENR` | `NCG` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Somut hedeflerim var, oturup yazabilirim. | 0 | 0 | 0 | 0 | Korunmuş gelecek yönelimi. |
| **B** | Plan yaparım ama tutacağına inanmam. | 0 | 0 | 1 | 0 | Düşük öz-yeterlik beklentisi. |
| **C** | Çok fazla plan yaparım ama hiçbirini uygulamaya geçiremem. | 0 | 0 | 0 | 0 | `ADHD` Niyet-eylem boşluğu — yürütücü işlev, umutsuzluk değil. |
| **D** | Aklıma hiçbir şey gelmiyor; gelecek benim için gri ve boş bir alan. | 1 | 0 | 2 | 0 | Gelecek yönelimli anhedoni; Beck üçlüsünün 'gelecek' ayağı. |
| **E** | 'Nasıl olsa bir şey değişmeyecek' hissi o kadar güçlü ki plan yapmayı anlamsız buluyorum. | 0 | 1 | 2 | 1 | Umutsuzluk (hopelessness) — sonuç ekranında ayrıca izlenmeli. |


### Yaygın Anksiyete

#### `GAD-01` — Endişe zinciri  
*core*

> Küçük bir aksilik oldu: bir fatura gecikti ya da bir mesaja beklediğin sürede dönülmedi. Bunu fark ettikten sonraki yarım saatte zihninde ne olur?

| Şık | Cevap | `WOR` | `TNS` | `IUC` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Sonra hallederim deyip işime devam ederim. | 0 | 0 | 0 | Sağlıklı tolerans. |
| **B** | Kesin bilgiye ulaşana kadar rahat edemem; arar, sorar, teyit ederim. | 1 | 0 | 2 | Belirsizlik intoleransı + güvence arayışı (OKB'den farkı: felaket sorumluluğu değil bilinmezlik). |
| **C** | Endişelenirim ama on beş dakika içinde dağılır. | 1 | 0 | 0 | Normal, sönümlenen endişe. |
| **D** | Zihnim bir 'ya şöyle olursa' zincirine girer ve zincir kendi kendine büyür; durdurmak elimde değil. | 2 | 0 | 1 | GAD-7 çekirdek maddesi: endişenin kontrol edilemezliği. |
| **E** | Düşünceyi bastırmak için hemen bir şeye dalarım; sessiz kalırsam geliyorlar. | 1 | 1 | 0 | Bilişsel kaçınma ile endişe yönetimi. |

#### `GAD-02` — Dinlenme anındaki beden  
*core*

> Akşam, yapılacak bir şey kalmadı, kanepede oturuyorsun. Bedeninde ne oluyor?

| Şık | Cevap | `WOR` | `TNS` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Bedenim gevşemez; omuzlarım ve çenem sürekli kasılı, ancak biri söyleyince fark ederim. | 0 | 2 | GAD-7 kas gerginliği; kronik tonik uyarılma. |
| **B** | Boş kalınca huzursuzlanırım, kalkıp bir şey yapmam gerekir. | 1 | 1 | `ADHD` Motor huzursuzluk — ADHD hiperaktivite ile ayrıştırılmalı. |
| **C** | Rahatlarım, gerçekten dinlenirim. | 0 | 0 | Parasempatik geçiş sağlıklı. |
| **D** | Rahatlarım ama uzun sürerse 'bir şeyi yapmadım' suçluluğu gelir. | 1 | 1 | Dinlenmeye tahammülsüzlük; üretkenlik anksiyetesi. |
| **E** | Kalp atışımı, nefesimi, midemi fark eder, 'bir şey mi oluyor' diye takip ederim. | 1 | 2 | Artmış interosepsiyon + sağlık kaygısı bileşeni. |

#### `GAD-03` — Tükenme ve tahammül  
*core*

> Yoğun bir haftanın dördüncü günündesin. Ufak bir aksilik oldu: biri sözünü kesti ya da bir şey ters gitti.

| Şık | Cevap | `TNS` | `IRR` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Normal bir tepki veririm, geçer. | 0 | 0 | Nötr. |
| **B** | Sesim yükselir, sonra pişman olurum. | 0 | 2 | Dışa vuran irritabilite. |
| **C** | İçimde orantısız bir öfke kabarır, sonra bunu yaşadığım için kendime kızarım. | 1 | 2 | GAD-7 irritabilite maddesi + ikincil suçluluk. |
| **D** | Kimseye bir şey demem ama içim titrer, günün kalanı mahvolur. | 2 | 1 | İçe vuran uyarılma; somatik yansıma. |
| **E** | Yorgunum diye kabul ederim, üzerinde durmam. | 0 | 0 | Sağlıklı atıf. |

#### `GAD-04` — Sevdiğine ulaşamama  
***ext** (koşullu)*

> Sevdiğin biri telefonunu birkaç saattir açmıyor ve nerede olduğunu bilmiyorsun.

| Şık | Cevap | `WOR` | `TNS` | `IUC` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Meşguldür der, beklerim. | 0 | 0 | 0 | 0 | Nötr. |
| **B** | Ulaşana kadar peş peşe arar, başkalarına sorarım; ulaşınca rahatlarım ama ertesi hafta aynısı olur. | 1 | 0 | 2 | 1 | Güvence arayışı döngüsü; kısa vadeli rahatlama endişeyi pekiştirir. |
| **C** | Merak ederim ama üzerine gitmem. | 0 | 0 | 0 | 0 | Nötr. |
| **D** | Zihnimde kaza ve hastalık senaryoları canlanır; hastane isimleri bile aklıma gelir. | 2 | 0 | 1 | 0 | Felaketleştirme; imgesel endişe üretimi. |
| **E** | İçimde bir sıkışma olur; mide bulantısı, titreme gibi bedensel belirtiler verir. | 1 | 2 | 0 | 0 | Somatik dominant anksiyete yanıtı. |


### Sosyal Anksiyete

#### `SAD-01` — Telefonla arama  
*core*

> Bir kuruma telefon açman gerekiyor: randevu almak, bilgi sormak ya da bir işlemi iptal ettirmek. Numarayı tuşlamadan önceki ve sonraki süreç nasıl geçer?

| Şık | Cevap | `PRF` | `ITA` | `AVD` | `PEV` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **A** | Ararken sesim titrer, kelimeleri karıştırırım; karşı tarafın beni tuhaf bulacağını düşünürüm. | 2 | 1 | 0 | 0 | 0 | LSAS 'telefonla konuşma' performans maddesi + otonomik yanıt. |
| **B** | Ne diyeceğimi zihnimde prova ederim, sonra ararım. | 0 | 1 | 0 | 0 | 0 | Bilişsel prova; hafif etkileşim kaygısı. |
| **C** | Aklıma geldiği anda ararım. | 0 | 0 | 0 | 0 | 0 | Asertif; sinyal yok. |
| **D** | Aramayı günlerce ertelerim; mümkünse yazılı kanaldan hallederim, olmuyorsa iş yarım kalır. | 0 | 1 | 2 | 0 | 1 | LSAS kaçınma boyutu; işlevsel maliyet kabul ediliyor. |
| **E** | Ararım ama kapattıktan sonra konuşmayı kafamda tekrar tekrar oynatır, 'şunu neden dedim' derim. | 0 | 0 | 0 | 2 | 0 | Olay sonrası işlemleme (post-event processing) — sosyal anksiyetenin bakım mekanizması. |

#### `SAD-02` — Herkes oturmuşken içeri girmek  
*core*

> Geç kaldın. Kapıyı açtığında toplantı/ders/yemek çoktan başlamış ve herkes oturmuş olacak.

| Şık | Cevap | `PRF` | `ITA` | `AVD` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Bütün gözlerin üzerimde olduğunu hissederim; yüzüm kızarır, nasıl yürüdüğümü unuturum. | 2 | 0 | 0 | Yoğun performans kaygısı + kendine odaklı dikkat (self-focused attention). |
| **B** | Girer, boş bir yere otururum. | 0 | 0 | 0 | Nötr. |
| **C** | Kapının önünde bekler, uygun bir an kollarım; bulamazsam hiç girmem. | 1 | 0 | 2 | Önleyici kaçınma; ortama girmeme kararı. |
| **D** | Girerim ama en arkaya, en görünmez yere otururum. | 1 | 0 | 1 | Kısmi kaçınma / güvenlik davranışı. |
| **E** | Girmeden önce bir bahane hazırlarım; kimse sormasa bile açıklama yaparım. | 1 | 1 | 0 | Önleyici hesap verme; olumsuz değerlendirme beklentisi. |

#### `SAD-03` — Otorite karşısında itiraz  
*core*

> Bir toplantıda ya da derste söylenen şeyin yanlış olduğunu biliyorsun ve düzeltebilecek bilgin var.

| Şık | Cevap | `PRF` | `ITA` | `AVD` | `PEV` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | O anda söylerim. | 0 | 0 | 0 | 0 | Asertif davranış. |
| **B** | Toplantıdan sonra özel olarak söylerim. | 0 | 1 | 1 | 0 | Grup önünden kaçınıp ikili kanala taşıma. |
| **C** | Söylerim ama sonrasında saatlerce 'çok mu sert oldum, ne düşündüler' diye zihnimde çeviririm. | 0 | 0 | 0 | 2 | Olay sonrası otopsi; davranış korunmuş, maliyet bilişsel. |
| **D** | Söylemem; 'ya ben yanlış anladıysam, herkesin önünde rezil olurum' derim. | 1 | 2 | 0 | 0 | Olumsuz değerlendirilme korkusu (FNE) davranışı tamamen bloke ediyor. |
| **E** | Otorite figürüne karşı özellikle susarım; eşitimle konuşurken hiç sorun yaşamam. | 0 | 2 | 0 | 0 | LSAS otorite ile etkileşim alt boyutu; bağlama özgü kaygı. |

#### `SAD-04` — Kalabalıkta idare etme stratejisi  
***ext** (koşullu)*

> Tanımadığın insanların çoğunlukta olduğu bir ortamdasın ve bir süre orada kalman gerekiyor. Kendini nasıl 'idare edersin'?

| Şık | Cevap | `PRF` | `ITA` | `AVD` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Özel bir şey yapmam, doğal davranırım. | 0 | 0 | 0 | Nötr. |
| **B** | Yanımda mutlaka tanıdık biri olmalı; yalnız gitmem, gidersem çok kısa kalırım. | 0 | 1 | 2 | Bağımlı güvenlik davranışı; yükü başkasına devretme. |
| **C** | Çok konuşur, espri yaparım; içim titrese de dışarıdan son derece rahat görünürüm. | 1 | 1 | 0 | Aşırı telafi (overcompensation) — Otizm CAM ekseniyle çapraz kontrol gerekir. |
| **D** | Sürekli telefonla ilgilenirim veya elimde bir bardak/çanta tutarım. | 0 | 0 | 2 | Güvenlik nesnesi; mikro-kaçınma. |
| **E** | Bir köşede kalır, kimseyle göz teması kurmam, sorulmadıkça konuşmam. | 0 | 1 | 2 | Pasif kaçınma; yargılanma riskini minimize etme. |


### Otizm Spektrumu & Maskeleme

#### `ASD-01` — Örtük ifade ve ima  
*core*

> Biri sana 'bir ara buluşalım' dedi ya da 'iyiyim' dedi ama tonundan başka bir şey seziliyor. Bu tür ifadeleri nasıl işlersin?

| Şık | Cevap | `RIG` | `CAM` | `SCM` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Ne demek istediğini bağlamdan doğal olarak anlarım. | 0 | 0 | 0 | Örtük bağlam okuma otomatik. |
| **B** | Söylediğini olduğu gibi alırım; sonradan 'aslında öyle demek istememişti' dendiğinde şaşırırım. | 0 | 0 | 2 | Literal işlemleme; pragmatik dil farklılığı (AQ-10). |
| **C** | Anlarım ama anlamak için bilinçli olarak analiz etmem gerekir; kendiliğinden gelmez. | 0 | 2 | 1 | CAT-Q kompansasyon: sosyal çıkarımın algoritmik olarak yapılması. |
| **D** | Sürekli alt anlam ararım; 'acaba bana kızdı mı' diye düşünürüm. | 0 | 0 | 0 | Sosyal Anksiyete lehine (tehdit yanlılığı), pragmatik güçlük değil. |
| **E** | Bu tür belirsiz ifadeler beni yorar; net ve açık konuşulmasını tercih ederim. | 1 | 0 | 1 | Belirsiz sosyal girdi maliyeti; netlik tercihi. |

#### `ASD-02` — İlgi alanının derinliği  
*core*

> İlgi duyduğun konularla ilişkin nasıl? Süresini, derinliğini ve günündeki yerini düşün.

| Şık | Cevap | `RIG` | `SCM` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Birkaç hobim var, dengeli şekilde ilgilenirim. | 0 | 0 | Nötr. |
| **B** | Sürekli yeni konulara atlarım; birkaç hafta yoğun ilgilenip tamamen bırakırım. | 0 | 0 | `ADHD` Yenilik odaklı hiperfokus döngüsü — monotropizm değil. |
| **C** | Bir konuya girdiğimde sistematik ve derinlemesine öğrenirim; yıllardır aynı konu ilgimi çeker ve anlatmaya başlayınca durmakta zorlanırım. | 2 | 1 | Monotropik derin ilgi + infodumping; süreklilik kriteri kritik. |
| **D** | İlgi alanım hakkında konuşurken karşımdakinin sıkıldığını çok geç fark ederim. | 1 | 2 | Karşılıklılık (reciprocity) ve geri bildirim okuma farklılığı. |
| **E** | İlgi alanım günümün büyük kısmını alır; ona ulaşamadığım günlerde kendimi düzensiz ve huzursuz hissederim. | 2 | 0 | İlgi alanının regülasyon işlevi görmesi. |

#### `ASD-03` — Doku, etiket ve yemek  
*core*

> Kıyafet etiketleri, belirli kumaşlar veya yemek dokularıyla ilişkin nasıl?

| Şık | Cevap | `SEN` | `RIG` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Belirli bir kumaş veya doku bedenimde tahammül edilemez bir rahatsızlık yaratır; o kıyafeti giyemem. Bu bir tercih değil, fiziksel bir imkânsızlık gibi. | 2 | 1 | Taktil hipersensitivite; tercih değil eşik farkı. |
| **B** | Bazı etiketleri keserim ama çok da önemli bir mesele değil. | 1 | 0 | Hafif hassasiyet. |
| **C** | Fark etmem bile. | 0 | 0 | Sağlıklı duyusal filtreleme. |
| **D** | Belirli yemek dokuları midemi bulandırır; yıllardır aynı sınırlı yemek listesiyle idare ederim. | 2 | 2 | ARFID benzeri kısıtlı örüntü — otizmde sık; beslenme açısından ayrıca ele alınmalı. |
| **E** | Yalnızca stresli dönemlerde hassaslaşırım. | 1 | 0 | Duruma bağlı duyusal eşik düşüşü. |

#### `ASD-04` — Sosyal günün ertesi  
***ext** (koşullu)*

> Yoğun bir sosyal veya iş gününün ERTESİ günü sende genellikle ne olur?

| Şık | Cevap | `SEN` | `RIG` | `CAM` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Normal şekilde devam ederim. | 0 | 0 | 0 | 0 | Nötr. |
| **B** | Yorgun olurum ama akşama kalmaz geçer. | 0 | 0 | 0 | 0 | Nörotipik sosyal yorgunluk. |
| **C** | Bir 'kapanma' yaşarım: konuşmak, mesaj atmak, karar vermek bile zor gelir; toparlanmam bir iki gün sürer. | 1 | 0 | 2 | 2 | Shutdown / otistik tükenmişlik; maskeleme borcunun ödenmesi. |
| **D** | Toparlanmak için aynı rutini tekrarlamam gerekir: aynı yemek, aynı dizi, aynı oda. | 0 | 2 | 1 | 0 | Öngörülebilirlik yoluyla regülasyon. |
| **E** | Yorgunluğum daha çok 'ne düşündüler, ne dedim' kaygısıyla ilgilidir. | 0 | 0 | 0 | 0 | Sosyal Anksiyete lehine (ruminasyon), işlemci tükenmesi değil. |

#### `ASD-05` — Geçişler ve kendini düzenleme  
***ext** (koşullu)*

> Bir işten diğerine geçmen gerekiyor: çalışmayı bırakıp yemeğe oturmak, oyunu kapatıp dışarı çıkmak gibi.

| Şık | Cevap | `SEN` | `RIG` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Kolayca geçerim. | 0 | 0 | Yüksek bilişsel esneklik. |
| **B** | Kolay geçerim ama o kadar sık geçerim ki hiçbirini bitiremem. | 0 | 0 | `ADHD` Görev değiştirme fazlalığı — geçiş güçlüğünün tersi. |
| **C** | Geçişler bana zor gelir; bir işi bitirmeden diğerine geçemem, yarıda kalan iş zihnimde asılı kalır. | 0 | 2 | Monotropik dikkat; görev kapanışı ihtiyacı. |
| **D** | Yoğunlaştığım şeyden koparılmak beni orantısız derecede sinirlendirir. | 1 | 2 | Zorunlu geçişe karşı yoğun intolerans. |
| **E** | Stres veya heyecan anında bacak sallamak, parmak oynatmak, ileri geri yürümek gibi tekrarlayan hareketler beni sakinleştirir ve bunu bilerek kullanırım. | 1 | 1 | Kendini düzenleyici tekrarlayıcı hareket (stimming) — ADHD huzursuzluğundan farkı: sakinleştirici işlev. |


### Bipolar Spektrum

#### `BIP-01` — Normalden farklı dönemler  
*core*

> Geçmişe dönüp baktığında, kendini 'her zamanki halimden belirgin şekilde farklı' hissettiğin, birkaç gün ya da birkaç hafta süren dönemler oldu mu?

| Şık | Cevap | `HYP` | `CYC` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Bu dönemleri çevremdekiler fark eder; 'sen bu aralar bir tuhafsın, çok hızlısın' derler. | 2 | 1 | Dış gözlemci doğrulaması — MDQ'nun en ayırt edici maddelerinden. |
| **B** | Oldu ama her seferinde bir olaya bağlıydı: yeni bir aşk, yeni bir iş, tatil. | 0 | 0 | Reaktif duygudurum — bipolar aleyhine önemli bulgu. |
| **C** | Enerjim gün içinde bile hızla değişir; sabah bir türlü, akşam bambaşka olurum. | 0 | 1 | Ultradiyen dalgalanma — BPD duygu regülasyonuyla çapraz kontrol gerekir. |
| **D** | Hayır, böyle dönemlerim olmadı. | 0 | 0 | Sinyal yok. |
| **E** | Sebepsiz başlayan dönemlerde çok daha üretken, konuşkan ve girişken olurum; sonra aynı sebepsizlikle sönerim. | 1 | 2 | Otonom (dış olaydan bağımsız) epizodik döngü — MDQ çekirdek mantığı. |

#### `BIP-02` — Yüksek dönemdeki kararlar  
*core*

> Böyle yüksek enerjili bir dönemdeyken verdiğin kararlar, normal halinden farklılaşır mı?

| Şık | Cevap | `HYP` | `RSK` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Hayır, kararlarım değişmez. | 0 | 0 | Stabilite. |
| **B** | Riskli bir şey yapmam ama o dönemde kendimi olağanüstü yetenekli ve özel hissederim. | 2 | 0 | Grandiyözite; davranışa dönüşmemiş hipomanik biliş. |
| **C** | Alışverişe eğilimliyim ama bu her zaman böyle, belirli bir döneme bağlı değil. | 0 | 0 | `ADHD` Süreklilik gösteren dürtüsellik — epizodik değil, ADHD lehine. |
| **D** | İş bırakma, taşınma, yeni bir işe girişme gibi büyük kararları o dönemlerde aniden veririm. | 2 | 2 | Amaca yönelik faaliyette epizodik artış + disinhibisyon. |
| **E** | Normalde asla yapmayacağım harcamalar yaparım, sonra hesaba bakınca şaşırırım. | 1 | 2 | MDQ aşırı harcama maddesi. |

#### `BIP-03` — Az uykuyla ertesi gün  
*core*

> Az uyuduğun bir gecenin ertesi günü genellikle nasıl olursun? (Uyuyamamak ile uykuya ihtiyaç duymamak arasındaki farkı düşünerek cevapla.)

| Şık | Cevap | `HYP` | `CYC` | `SLD` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Yorgun olurum, kahve olmadan gün geçmez. | 0 | 0 | 0 | Normal fizyolojik yanıt. |
| **B** | Uyuyamıyorum ve bu beni bitiriyor; uyumak istiyorum ama olmuyor. | 0 | 0 | 0 | İnsomnia — uyku ihtiyacında azalma DEĞİL; depresyon/anksiyete lehine. |
| **C** | Üç dört saat uyumama rağmen zinde uyanırım ve bu birkaç gün üst üste sürebilir. | 1 | 0 | 2 | Azalmış uyku ihtiyacı — hipomani/maninin en özgül belirtisi. |
| **D** | İlgi çekici bir şey varsa uykuyu unuturum ama iş bitince yorgunluk üzerime çöker. | 0 | 0 | 0 | `ADHD` Hiperfokus kaynaklı uykusuzluk; yorgunluk hissi korunmuş. |
| **E** | Az uyuduğum dönemlerde sinirli, tahammülsüz ve hızlı olurum. | 1 | 1 | 1 | Disforik (irritabl) hipomani örüntüsü. |

#### `BIP-04` — Dönem sonrası  
***ext** (koşullu)*

> Yüksek enerjili bir dönem sona erdikten sonra ne olur?

| Şık | Cevap | `HYP` | `CYC` | `RSK` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Böyle bir dönem yaşamadım. | 0 | 0 | 0 | 0 | Sinyal yok. |
| **B** | Sonrasında günlerce, bazen haftalarca çukura düşerim; o dönemde başlattığım işler yarım kalır. | 0 | 2 | 0 | 2 | Epizot sonrası depresif geçiş + işlevsel enkaz — spektrum lehine güçlü bulgu. |
| **C** | Böyle bir iniş yaşamam, sadece normale dönerim. | 0 | 1 | 0 | 0 | Zayıf döngü kanıtı. |
| **D** | O dönemde söylediklerimden, harcadıklarımdan veya kurduğum ilişkilerden sonradan utanırım. | 1 | 0 | 2 | 1 | Epizot içi disinhibisyonun geriye dönük tanınması. |
| **E** | İniş ve çıkış aynı gün içinde iç içe olabiliyor; hem çok enerjik hem çok kötü hissedebiliyorum. | 1 | 2 | 0 | 0 | Karma özellikler (mixed features) — klinik olarak öncelikli değerlendirme gerektirir. |


### Travma / TSSB

#### `PTS-01` — Kapı sorusu: anıların gelme biçimi  
*core • kapı: `PTS_GATE`*

> Geçmişinde, hatırladığında bugün hâlâ bedeninde bir tepki oluşturan zor bir olay ya da dönem var mı? Varsa, bu anılar sana nasıl geliyor?

| Şık | Cevap | `INR` | `AVT` | `ARO` | `DSC` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Böyle bir olay veya dönem yok. | 0 | 0 | 0 | 0 | `GATE_A` Kapı kapalı: PTS-02/03/04 atlanır, yalnızca başka modüllerde ARO/DSC sinyali varsa PTS-04 sorulur. |
| **B** | Var ama artık düşündüğümde sakin kalabiliyorum. | 0 | 0 | 0 | 0 | İşlenmiş anı; patolojik sinyal yok. |
| **C** | Var; istemediğim anlarda ben çağırmadan zihnime düşüyor ve o anda bedenim de tepki veriyor. | 2 | 0 | 1 | 0 | PCL-5 istemsiz anı + tetiklenmiş fizyolojik reaktivite. |
| **D** | Var; rüyalarımda görüyorum ya da sebebini bilmediğim bir tedirginlikle uyanıyorum. | 2 | 0 | 1 | 0 | Travmatik rüya / uyku dönemi yeniden yaşantılama. |
| **E** | Var ama hatırlamamaya çalışıyorum; detayları zaten net hatırlamıyorum. | 0 | 2 | 0 | 1 | İçsel kaçınma + disosiyatif amnezi bileşeni. |

#### `PTS-02` — Yeni bir ortama girerken  
*core • yalnızca `PTS_GATE` açıksa*

> Tanımadığın bir mekâna girdiğinde ilk yaptığın şey nedir?

| Şık | Cevap | `INR` | `ARO` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Rahatça bir yere oturur, ortamla ilgilenmem. | 0 | 0 | Nötr. |
| **B** | Kalabalık beni bunaltır, sesler ve ışık rahatsız eder. | 0 | 0 | Otizm duyusal profili lehine; tehdit taraması değil. |
| **C** | Çıkışları, kimlerin bulunduğunu ve kimin arkamda kaldığını otomatik olarak tararım; bunu düşünerek yapmam, kendiliğinden olur. | 0 | 2 | PCL-5 hipervijilans; otomatikleşmiş tehdit taraması. |
| **D** | İnsanların beni izleyip izlemediğine bakarım. | 0 | 0 | Sosyal Anksiyete lehine; tehdit değil değerlendirilme odağı. |
| **E** | Ani seslerde beklenenden çok daha sert irkilirim ve toparlamam uzun sürer. | 1 | 2 | Abartılı irkilme yanıtı + yavaş otonomik toparlanma. |

#### `PTS-03` — Dünyaya ve insanlara bakış  
*core • yalnızca `PTS_GATE` açıksa*

> Son dönemde insanlara ve dünyaya dair içinde yerleşmiş temel his hangisi?

| Şık | Cevap | `AVT` | `NCM` | `DSC` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | 'Kimseye tam güvenilmez, ne zaman ne olacağı belli olmaz' düşüncesi bende bir inanç hâline geldi. | 0 | 2 | 0 | PCL-5 kalıcı olumsuz inanç; dünya şemasının değişmesi. |
| **B** | İnsanlara genel olarak güvenirim, dünya makul bir yer. | 0 | 0 | 0 | Nötr. |
| **C** | Yakınlarımdan bile uzaklaştığımı, aramızda görünmez bir mesafe olduğunu hissediyorum. | 1 | 2 | 0 | Yabancılaşma (detachment); ilişkisel çekilme. |
| **D** | Duygularımı eskisi gibi hissedemiyorum; sevinmem de üzülmem de sanki camın arkasından. | 0 | 2 | 1 | Duygusal uyuşma (numbing) — Depresyon ANH ekseniyle çapraz kontrol. |
| **E** | Olan şeyde bir şekilde benim de payım olduğu düşüncesinden kurtulamıyorum. | 0 | 2 | 0 | Çarpıtılmış kendini suçlama — travma sonrası özgül biliş. |

#### `PTS-04` — Yoğun anlarda kopma  
***ext** (koşullu)*

> Çok stresli ya da tetiklenmiş bir andan sonra kendini nasıl bulursun?

| Şık | Cevap | `ARO` | `DSC` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Böyle bir şey yaşamam. | 0 | 0 | 0 | Sinyal yok. |
| **B** | Bazen bir süre 'orada olmadığımı', kendimi dışarıdan izliyormuş gibi hissederim. | 0 | 2 | 0 | Depersonalizasyon/derealizasyon — PCL-5 disosiyatif alt tip. |
| **C** | Donup kalırım; konuşamam, hareket edemem, sonrasında çok yorulurum. | 1 | 2 | 0 | Tonik immobilite / dorsal vagal kapanma. |
| **D** | Bazı zaman aralıklarını hatırlamadığımı fark ederim; nasıl eve geldiğimi bilmediğim olur. | 0 | 2 | 1 | Zaman kaybı — klinik değerlendirmede öncelikli. |
| **E** | Tam tersine, aşırı hareketli ve konuşkan olurum. | 1 | 0 | 0 | Sempatik hiperaktivasyon yönünde yanıt. |


### Duygu Regülasyon Güçlüğü / Sınır Örüntüler

#### `EDR-01` — Duygunun eğrisi  
*core*

> Seni üzen ya da kızdıran bir olay yaşadın. Duygunun YÜKSELME hızını ve SÖNME süresini düşün.

| Şık | Cevap | `EMR` | `STR` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Şiddeti orta ama sönmesi çok uzun sürüyor; saatlerce, bazen günlerce eski halime dönemiyorum. | 2 | 1 | Uzamış baseline dönüş süresi — BPD'nin en özgül parametrelerinden. |
| **B** | Ne hissettiğimi tam adlandıramam; sadece kötü bir şey olduğunu bilirim. | 0 | 2 | DERS duygusal netlik eksikliği (lack of clarity). |
| **C** | Yaşarım, bir süre sonra kendiliğinden geçer. | 0 | 0 | Sağlıklı regülasyon. |
| **D** | Duyguyu hissettiğim an için kendime kızarım; 'böyle hissetmemeliyim' derim. | 0 | 2 | DERS duyguları kabul etmeme (nonacceptance). |
| **E** | Duygu çok hızlı ve çok şiddetli geliyor; sıfırdan yüze saniyeler içinde çıkıyorum. | 2 | 0 | Yüksek duygusal reaktivite; düşük eşik. |

#### `EDR-02` — Tonun değişmesi  
*core*

> Yakın olduğun biri her zamankinden daha kısa ve mesafeli cevaplar vermeye başladı. Somut bir sebep yok.

| Şık | Cevap | `EMR` | `FOA` | `FUN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Yorgundur der, üzerinde durmam. | 0 | 0 | 0 | Güvenli bağlanma. |
| **B** | Sorarım, konuşurum, netleştiririm. | 0 | 0 | 0 | Uyumsal ilişkisel strateji. |
| **C** | İçimde hemen 'bir şey yaptım, bana kızdı' alarmı çalar; doğrulayana kadar rahat edemem. | 1 | 2 | 0 | Reddedilme hassasiyeti (RSD) — ADHD ve Sosyal Anksiyete ile örtüşebilir. |
| **D** | Ben de soğurum ve geri çekilirim; 'önce o yaklaşsın' derim. | 1 | 1 | 0 | Önleyici terk etme (preemptive withdrawal). |
| **E** | Bu his beni öyle sarar ki o gün başka hiçbir işe odaklanamam. | 1 | 2 | 2 | İlişkisel tetikleyicinin işlevi tamamen bloke etmesi. |

#### `EDR-03` — Sıkıntı anındaki eylem  
*core*

> Yoğun bir duygusal sıkıntı anındasın. O anki tipik davranışın hangisi?

| Şık | Cevap | `EMR` | `IMP` | `STR` | Gizli yorum |
| --- | --- | --- | --- | --- | --- |
| **A** | Sakinleşmek için nefes, yürüyüş, konuşma gibi bildiğim yollara giderim. | 0 | 0 | 0 | Etkin başa çıkma repertuvarı. |
| **B** | O an beni rahatlatacağını bildiğim ama sonradan zarar göreceğim ani kararlar alırım: ani mesaj, ani ayrılık, ani istifa. | 1 | 2 | 0 | DERS dürtü kontrol güçlüğü; sıkıntının eylemle boşaltılması. |
| **C** | Kontrolsüz harcama veya aşırı yeme gibi şeylerle bastırmaya çalışırım. | 0 | 2 | 1 | Dürtüsel regülasyon stratejisi. |
| **D** | Kimseyle konuşmam, tamamen kapanırım; ne yapacağımı bilmediğim için hiçbir şey yapmam. | 0 | 0 | 2 | DERS stratejilere sınırlı erişim (limited access to strategies). |
| **E** | Öfkemi çevremdekilere yansıtırım, sonrasında pişman olurum. | 2 | 1 | 0 | Dışa vuran reaktivite + ikincil suçluluk. |

#### `EDR-04` — Uzun süre yalnız kalmak  
***ext** (koşullu)*

> Kimseyle görüşmeden, tek başına uzun bir süre geçirdiğinde içinde ne olur?

| Şık | Cevap | `FOA` | `IDN` | Gizli yorum |
| --- | --- | --- | --- | --- |
| **A** | Kendimle iyi vakit geçiririm. | 0 | 0 | Stabil içsel dünya. |
| **B** | Yalnızlık beni dinlendirir; sosyal borçtan kurtulmuş olurum. | 0 | 0 | Otizm/içe dönüklük lehine — boşluk hissi içermiyor. |
| **C** | İçimde tarifsiz bir boşluk açılır; doldurmak için sürekli bir şeye ihtiyaç duyarım: telefon, dizi, biri. | 0 | 2 | MSI-BPD kronik boşluk hissi. |
| **D** | Kim olduğumu ve ne istediğimi tam bilemediğimi fark ederim; başkaları yokken tanımsız kalıyorum. | 1 | 2 | Kimlik karmaşası; ötekine bağımlı psişik varoluş. |
| **E** | Düşüncelerim beni yorar, sürekli meşgul olmam gerekir. | 0 | 0 | YAB lehine (endişe kaçınması), kimlik boşluğu değil. |

#### `EDR-05` — İlişkilerin seyri  
***ext** (koşullu)*

> Yakın ilişkilerinin yıllar içindeki genel seyri hangisine benziyor?

| Şık | Cevap | `EMR` | `FOA` | `IMP` | `IDN` | Gizli yorum |
| --- | --- | --- | --- | --- | --- | --- |
| **A** | Uzun yıllardır aynı yakın çevrem var; ilişkiler istikrarlı. | 0 | 0 | 0 | 0 | Stabil bağlanma örüntüsü. |
| **B** | İnsanlarla mesafeli olurum, çok yakınlaşmam. | 0 | 0 | 0 | 0 | Kaçınmacı örüntü / otizm — dalgalanma içermiyor. |
| **C** | İlişkilerim çok yoğun başlar; kısa sürede aşırı yakınlaşırız, sonra bir kırılmayla tamamen biter. | 1 | 2 | 0 | 1 | Yoğun ve istikrarsız ilişki örüntüsü (MSI-BPD). |
| **D** | Aynı kişiye bir gün hayran olup ertesi gün hiç değer vermediğimi fark ederim. | 2 | 1 | 0 | 2 | Bölme (splitting): idealizasyon–değersizleştirme salınımı. |
| **E** | Terk edilme ihtimalini sezdiğim anda, o gerçekleşmeden ben bitiririm. | 0 | 2 | 1 | 0 | Terk edilmeyi önlemek için çılgınca çaba — tersine çevrilmiş biçimi. |


## 3. Aşama 2 — Dinamik ayırıcı tanı dallanması

Bu senaryolar 35 sorunun **içinde değildir**; yalnızca tetiklendiklerinde gösterilir. Mevcut belgendeki A–D senaryolarına ek olarak E–K aşağıdadır.

### DX-E — OKB vs. Yaygın Anksiyete

**Tetiklenme:** `OKB.OBS ≥ 60 VE YAB.WOR ≥ 60`

**Mekanizma çatışması:** İkisinde de zihin durmaz. Ayrım İÇERİKTE ve BİÇİMDE: YAB'de endişe gerçek hayat problemleri üzerine, dille/cümlelerle akar ve kişi bunu 'kendi düşüncem' olarak sahiplenir. OKB'de düşünce ego-distoniktir (bana ait değilmiş gibi), sıklıkla imge/dürtü biçimindedir ve bir nötralizasyon eylemi doğurur.

**Ayrıştırıcı soru:** Zihnini meşgul eden düşünceler için hangisi daha doğru?

- **A)** Düşündüklerim gerçek hayat meseleleri: para, sağlık, iş, sevdiklerimin başına gelebilecekler. Bunlar benim düşüncelerim, sadece durduramıyorum.  
  → *Hedef: YAB — Worry*
- **B)** Aklıma gelen şey bana ait değilmiş gibi, saçma, hatta kim olduğuma tamamen ters. Geldiğinde onu etkisizleştirmek için bir şey yapmam veya bir şey düşünmem gerekiyor.  
  → *Hedef: OKB — Obsesyon + nötralizasyon*
- **C)** İkisi de var ama biri diğerinden çok daha baskın değil.  
  → *Hedef: Komorbid — her iki modül de açık bırakılır*

### DX-F — Depresyon vs. Otistik Tükenmişlik vs. ADHD aktivasyon

**Tetiklenme:** `DEP.ENR ≥ 65 VE (OTZ.CAM ≥ 60 VEYA ADHD.AT ≥ 65)`

**Mekanizma çatışması:** Üçünde de 'yapamıyorum' var. Depresyonda ödül değeri düşmüştür (istemiyorum). Otistik tükenmişlikte kapasite tükenmiştir ve dinlenme+düşük uyaranla geri gelir. ADHD'de istek de kapasite de vardır, eksik olan aktivasyondur ve ilgi/aciliyet geldiğinde anında döner.

**Ayrıştırıcı soru:** Yapman gerekeni yapamadığın bir günde, o an içinde olan şeyi en iyi hangisi anlatıyor?

- **A)** İstek yok. Yapsam da bir şey hissetmeyeceğimi biliyorum; ödül tarafı kapanmış gibi.  
  → *Hedef: Depresyon — Anhedoni/Anerji*
- **B)** İstek var ama sistemim çökmüş; sessiz, karanlık ve yalnız bir yerde birkaç gün geçirirsem kapasitem geri geliyor.  
  → *Hedef: Otizm — Autistic burnout*
- **C)** İstek de var, enerji de var; başlayamıyorum. Son dakikada bir aciliyet oluşunca aynı iş bir anda mümkün hale geliyor.  
  → *Hedef: ADHD — Executive activation*
- **D)** O gün beni bir insan ilişkisi sarstı ve toparlanamadım.  
  → *Hedef: Duygu regülasyon — ilişkisel tetikleyici*

### DX-G — Sosyal Anksiyete vs. Depresif Çekilme

**Tetiklenme:** `SOS.AVD ≥ 65 VE DEP.ANH ≥ 60`

**Mekanizma çatışması:** İkisinde de davet reddedilir. Sosyal anksiyetede İSTEK VARDIR, korku engeller — kişi gidememekten pişmanlık duyar. Depresif çekilmede istek yoktur; gitse de keyif alamayacaktır.

**Ayrıştırıcı soru:** Bir daveti reddettikten sonra, o akşam evdeyken içinde ne olur?

- **A)** Keşke gidebilseydim diye hayıflanırım; korkum yüzünden kaçırdığım için kendime kızarım.  
  → *Hedef: Sosyal Anksiyete — istek korunmuş*
- **B)** Rahatlarım ama sonra hiçbir şey de yapmam; evde de bir şeyden keyif almam.  
  → *Hedef: Depresyon — anhedoni*
- **C)** Rahatlarım ve akşamımı gerçekten iyi geçiririm; sosyalleşmemek benim için kayıp değil.  
  → *Hedef: Otizm/içe dönüklük — kayıp algısı yok*

### DX-H — Bipolar Spektrum vs. Sınır Duygusal İstikrarsızlık

**Tetiklenme:** `BIP.CYC ≥ 65 VE DDR.EMR ≥ 65`

**Mekanizma çatışması:** En kritik ve en sık karıştırılan ayrım. Bipolar duygudurum epizodu GÜNLER-HAFTALAR sürer, dış olaydan bağımsız başlar ve uyku/enerji/aktivite birlikte değişir. BPD dalgalanması SAATLER sürer, neredeyse her zaman ilişkisel bir tetikleyiciye bağlıdır ve uyku ihtiyacı azalmaz.

**Ayrıştırıcı soru:** Duygu durumunun değiştiği dönemleri düşün: SÜRE ve BAŞLANGIÇ hangisine benziyor?

- **A)** Saatler içinde değişir. Neredeyse her seferinde birinin bana yaptığı/yapmadığı bir şeyle başlar. Kişi düzelirse ben de düzelirim.  
  → *Hedef: BPD — ilişkisel tetikleyici, saatlik döngü*
- **B)** Günlerce, bazen haftalarca sürer. Nasıl başladığını bilemem; kimse bir şey yapmamıştır. O dönemde uykum, enerjim ve ne kadar iş çıkardığım hep birlikte değişir.  
  → *Hedef: Bipolar — otonom epizot*
- **C)** İkisi de oluyor: hem ilişkisel fırtınalar hem de sebepsiz uzun dönemler.  
  → *Hedef: Komorbid olasılığı — ikisi de açık bırakılır*

### DX-I — TSSB Hipervijilansı vs. Yaygın Anksiyete

**Tetiklenme:** `TSB.ARO ≥ 65 VE YAB.WOR ≥ 65`

**Mekanizma çatışması:** İkisinde de 'tetikte olma' vardır. YAB geleceğe dönüktür ve bilişseldir ('ya olursa'). TSSB geçmişe dönüktür ve bedenseldir: tehdit zaten yaşanmıştır, sinir sistemi hâlâ o ana göre kalibredir.

**Ayrıştırıcı soru:** Tetikte olduğun anlarda zihninde ne var?

- **A)** Gelecekte olabilecek kötü şeylerin senaryoları; henüz olmamış ama olabilecek şeyler.  
  → *Hedef: YAB — anticipatory worry*
- **B)** Bir düşünce yok. Bedenim önce tepki veriyor, ne olduğunu sonra anlıyorum; genelde bir ses, koku veya görüntü tetikliyor.  
  → *Hedef: TSSB — somatik/duyusal tetiklenme*
- **C)** İkisi de; ama bedensel olan çok daha ani ve şiddetli.  
  → *Hedef: Karma tablo — TSSB önceliklendirilir*

### DX-J — Unipolar Depresyon vs. Bipolar Depresyon

**Tetiklenme:** `DEP toplam ≥ 65 VE (BIP.HYP ≥ 45 VEYA BIP.SLD ≥ 45)`

**Mekanizma çatışması:** Sonuç ekranı yalnızca depresyon gösterirse, geçmişte hipomanik dönem bulunan bir kişi eksik yönlendirilmiş olur. Bu ayrım tarama ürününün en yüksek klinik değer ürettiği noktalardan biridir.

**Ayrıştırıcı soru:** Şu anki halinden bağımsız olarak, HAYATININ HERHANGİ BİR DÖNEMİNDE en az birkaç gün süren, az uykuyla dinç kaldığın ve normalinden belirgin şekilde hızlı/girişken olduğun bir dönem oldu mu?

- **A)** Hayır, hiç olmadı.  
  → *Hedef: Unipolar örüntü*
- **B)** Evet, en az bir kez oldu ve çevremdekiler de fark etti.  
  → *Hedef: Bipolar spektrum sinyali — sonuç metnine eklenir*
- **C)** Emin değilim; iyi hissettiğim dönemleri 'normal' mi yoksa 'fazla' mı sayacağımı bilmiyorum.  
  → *Hedef: Belirsiz — profesyonel değerlendirme önerisi güçlendirilir*

### DX-K — OKB Ritüeli vs. Otistik Rutin

**Tetiklenme:** `OKB.SYM ≥ 65 VE OTZ.RIG ≥ 65`

**Mekanizma çatışması:** Dışarıdan ikisi de 'değişmeyen düzen'dir. OKB ritüeli ANKSİYETEYİ AZALTMAK için yapılır; kişi genelde onu saçma bulur ve ondan kurtulmak ister. Otistik rutin ise ÖNGÖRÜLEBİLİRLİK VE HUZUR ÜRETİR; kişi onu sevmektedir, sorun yalnızca bozulduğunda çıkar.

**Ayrıştırıcı soru:** Değişmeyen düzenini/rutinini nasıl tanımlarsın?

- **A)** Yapmazsam kötü bir şey olacağı ya da içimin rahat etmeyeceği hissiyle yaparım. Aslında saçma olduğunu biliyorum ve keşke yapmak zorunda olmasam.  
  → *Hedef: OKB — anksiyete azaltıcı ritüel, ego-distonik*
- **B)** Rutinim benim düzenim; onu seviyorum ve iyi hissettiriyor. Sorun ancak biri onu bozduğunda çıkıyor.  
  → *Hedef: Otizm — öngörülebilirlik, ego-sintonik*
- **C)** Başlangıçta huzur veriyordu ama artık esiri gibiyim.  
  → *Hedef: Karma — her iki modül de açık bırakılır*


## 4. Çapraz eşleşme katmanı

| Kombinasyon | Gizli örüntü | Bonus | Not |
| --- | --- | --- | --- |
| DEP-02-E + DEP-01-C + DEP-05-C | İlgi bağımlı efor asimetrisi: ödül korunmuş, aktivasyon bozuk | `ADHD.AT +3, DEP.ENR −2` | Depresif anerji değil dopaminerjik efor eşiği. Depresyon skorunu DÜŞÜRÜR. |
| OCD-01-D + OCD-04-D | 'Not just right' örüntüsünün iki farklı bağlamda tekrarı | `OKB.SYM +3` |  |
| OCD-01-E + OCD-02-E | Abartılmış sorumluluk temasının bağımsız senaryolarda tekrarı | `OKB.RSP +3` |  |
| DEP-03-E + PTS-03-D | Duygusal uyuşmanın hem depresif hem travmatik bağlamda görülmesi | `TSB.NCM +2, DEP.ANH +1` | Numbing atıfı TSSB'ye kaydırılır; DX-I tetiklenebilir. |
| GAD-01-B + GAD-04-B | Güvence arayışı döngüsünün tekrarı | `YAB.IUC +3` | OKB.COM ile ayrımı için DX-E önerilir. |
| SAD-01-E + SAD-03-C | Olay sonrası işlemlemenin iki bağımsız senaryoda tekrarı | `SOS.PEV +3` |  |
| SAD-04-C + ASD-04-C | Dışarıdan rahat görünürken içeride yüksek maliyet: maskeleme | `OTZ.CAM +3` | Sosyal anksiyeteden çok kompansasyon lehine; DX-C tetiklenir. |
| ASD-01-C + ASD-04-C | Algoritmik sosyal işlemleme + sonrasında kapanma | `OTZ.CAM +3, OTZ.FUN +1` |  |
| ASD-03-A + ASD-03-D + PTS-02-B | Duyusal intoleransın çoklu modalitede tekrarı | `OTZ.SEN +3` |  |
| BIP-01-E + BIP-03-C | Otonom döngü + azalmış uyku ihtiyacının birlikteliği | `BIP.CYC +3, BIP.SLD +2` | MDQ 'aynı dönemde birlikte' kriterinin karşılığı. DX-B ve DX-H tetiklenir. |
| BIP-01-A + BIP-04-D | Dış gözlemci doğrulaması + geriye dönük pişmanlık | `BIP.HYP +3` | En yüksek özgüllüklü kombinasyon. |
| BIP-01-C + EDR-01-A + EDR-02-C | Saatlik dalgalanma + ilişkisel tetikleyici | `DDR.EMR +3, BIP.CYC −2` | Bipolar döngü değil duygu regülasyon güçlüğü. DX-H zorunlu tetiklenir. |
| EDR-02-E + EDR-05-C | Reddedilme hassasiyetinin ilişki örüntüsüne dönüşmesi | `DDR.FOA +3` |  |
| PTS-01-E + PTS-04-B/C/D | Kaçınma + disosiyasyon birlikteliği | `TSB.DSC +3, TSB.AVT +1` | PCL-5 disosiyatif alt tip; sonuç metninde ayrıca belirtilir. |
| PTS-02-C + GAD-02-A | Hipervijilansın hem sosyal hem bedensel ölçümde görünmesi | `TSB.ARO +2` | DX-I tetiklenir. |
| Herhangi 3 modülde FUN ≥ 2 | Çoklu alanda işlevsel etki | `GLOBAL.FUN +3` | Sonuç metninde 'birden fazla yaşam alanında etki' ifadesi açılır. |

## 5. Adaptif yönlendirme
```
KATMAN 0 — Sabit çekirdek (35 soru)
  ADHD 10 (mevcut matris) + core 25 = 35 soru. Herkese sorulur, sıra karıştırılır.

KATMAN 1 — Koşullu genişletme (ext, 10 soru)
  Bir modülün core sorularından herhangi birinde ≥2 ağırlık toplanmışsa o modülün ext sorusu açılır.
    OKB     → OCD-04     (OBS+COM+SYM+DIS ≥ 3 ise)
    DEP     → DEP-05     (NCG ≥ 2 ise)
    YAB     → GAD-04     (WOR veya IUC ≥ 2 ise)
    SOS     → SAD-04     (AVD ≥ 2 ise)
    OTZ     → ASD-04, ASD-05  (CAM veya RIG veya SEN ≥ 2 ise)
    BIP     → BIP-04     (CYC veya HYP ≥ 2 ise)
    TSB     → PTS-04     (PTS_GATE açık VE (INR veya DSC ≥ 2) ise)
    DDR     → EDR-04, EDR-05  (FOA veya EMR veya STR ≥ 2 ise)

KATMAN 2 — Kapı kuralı
  PTS-01 = A → PTS-02 ve PTS-03 atlanır. Ancak başka modüllerde ARO/DSC benzeri sinyal
  (GAD-02-E, EDR-01-A, ASD-04-C) varsa PTS-04 yine de sorulur.

KATMAN 3 — Ayırıcı tanı (Aşama 2)
  Tetiklenen her DX senaryosu sorulur. Aynı anda en fazla 3 DX gösterilir;
  fazlası varsa en yüksek çakışma skoruna sahip 3 tanesi seçilir. Sıralama:
  DX-H > DX-J > DX-B > DX-A > DX-K > DX-F > DX-I > DX-E > DX-C > DX-D > DX-G

TOPLAM UZUNLUK
  Minimum: 35 soru (hiç sinyal yoksa)  •  Tipik: 40–45  •  Maksimum: 35 + 10 + 3 = 48
  Ortalama tamamlama: 12–16 dakika.
```

## 6. Puanlama ve normalizasyon
```
1) HAM PUAN
   Eksen ham = Σ (seçilen şıkkın o eksendeki ağırlığı) + çapraz eşleşme bonusları

2) NORMALİZASYON
   Eksen skoru = (ham / o eksende alınabilecek teorik maksimum) × 100
   ext sorular sorulmadıysa maksimum da düşer — payda dinamik hesaplanmalı,
   yoksa kısa test alan kullanıcı yapay olarak yüksek skorlanır. (En sık yapılan hata budur.)

3) MODÜL SKORU  (klinik ölçek yapısına göre ağırlıklı, eşit değil)
   OKB = OBS×.25 + COM×.25 + SYM×.20 + RSP×.15 + DIS×.15
   DEP = ANH×.30 + ENR×.25 + NCG×.30 + SLP×.15
   YAB = WOR×.35 + TNS×.25 + IUC×.25 + IRR×.15
   SOS = PRF×.30 + ITA×.30 + AVD×.25 + PEV×.15
   OTZ = SEN×.25 + RIG×.25 + CAM×.30 + SCM×.20
   BIP = HYP×.30 + CYC×.30 + SLD×.25 + RSK×.15
   TSB = INR×.25 + AVT×.20 + ARO×.20 + NCM×.20 + DSC×.15
   DDR = EMR×.30 + FOA×.25 + IMP×.20 + IDN×.15 + STR×.10

4) İŞLEV ÇARPANI
   FUN skoru < 20 ise modül skoru ×0.85 uygulanır.
   Gerekçe: DSM'de her tanının ortak kriteri klinik olarak anlamlı sıkıntı/işlev bozukluğudur.
   İşlev etkilenmiyorsa örüntü vardır ama klinik anlam zayıftır.

5) EŞİKLER (prototip — valide edilmemiştir)
   0–34   Belirgin örüntü yok
   35–54  Zayıf/dağınık örüntü
   55–74  Tutarlı örüntü — değerlendirme düşünülebilir
   75–100 Güçlü ve çok eksenli örüntü — kapsamlı değerlendirme önerilir
   Referans: PHQ-9'da 10 ham puan ≈ 37/100; PCL-5'te 33 ham puan ≈ 41/100;
   DERS-16'da >51 ham ≈ 55/100; MSI-BPD'de 7/10 ≈ 70/100.

6) GEÇERLİK KATMANI (yanıt seti tespiti)
   • Tüm cevaplar aynı harf → sonuç gösterme, testi tekrarlat.
   • Soru başına medyan süre < 3 sn → "hızlı tamamlama" uyarısı, skor güvenilirliği düşük etiketi.
   • Aynı eksende zıt yönlü cevaplar (ör. BIP-03-C + BIP-03 karşıtı) → tutarlılık katsayısı düşürülür.
   • Tutarlılık katsayısı 0.6–1.2 aralığında; aynı mekanizma farklı bağlamda tekrarlıyorsa artar.
```

## 7. Güvenlik katmanı
```
Gizli senaryo katmanında BİLİNÇLİ OLARAK intihar/kendine zarar maddesi YOKTUR. Sebebi:
riskin senaryo içine gizlenmesi hem ölçüm hem de etik açıdan hatalıdır — risk doğrudan sorulur
ve doğrudan yönlendirilir.

KONUMLANDIRMA
  Testin SONUNDA, gizli puanlamadan tamamen ayrı, tek ekranlık doğrudan bir modül olarak sorulur.
  Ekran başlığı nötr olmalı: "Son bir soru" değil, "Güvenlik" ne de dramatik bir başlık;
  önerilen: "Son bölüm — kendi iyiliğin için"

MADDE (PHQ-9 madde 9 karşılığı, doğrudan, gizli puanlamasız)
  "Son iki hafta içinde, yaşamak istemediğini ya da kendine zarar vermeyi düşündüğün oldu mu?"
    A) Hayır, hiç
    B) Aklıma geldi ama üzerinde durmadım
    C) Sık sık aklıma geliyor
    D) Bu konuda bir şey yapmayı düşündüm

TETİKLENME VE DAVRANIŞ
  B  → sonuç ekranının en üstünde sabit destek kutusu.
  C/D → sonuç ekranı GÖSTERİLMEDEN ÖNCE tam ekran destek sayfası. Skor daha sonra gösterilebilir
        ama önce destek gelir. "Devam et" butonu bulunmalı, kilitlenmemeli.
  Ayrıca DEP-05-E (umutsuzluk) + DEP-03-E (uyuşma) + EDR-03-B/C (dürtüsellik) kombinasyonu
  da B seviyesindeki destek kutusunu açar.

ÜRÜN KURALLARI
  • Yöntem, araç veya "ne kadarı tehlikeli" türü hiçbir bilgi hiçbir yerde bulunmasın.
  • Sonuç ekranında hiçbir koşulda tanı etiketi kullanılmasın.
  • "Yüksek risk", "ciddi", "tehlikeli" gibi alarmist dil yerine örüntü dili kullanılsın.
  • Destek numaraları HARD-CODE EDİLMEMELİ; yayın öncesi ve periyodik olarak
    T.C. Sağlık Bakanlığı ve Türkiye Psikiyatri Derneği kaynaklarından doğrulanmalı.
    (Not: 182, MHRS randevu hattı olarak da kullanılıyor; kriz hattı olarak sunulmadan önce
     güncel durumu mutlaka teyit et. 112 acil tıbbi durumlar için tartışmasız doğrudur.)
  • KVKK: cevaplar sağlık verisi sayılır (özel nitelikli kişisel veri, KVKK m.6).
    Açık rıza, ayrı aydınlatma metni ve tercihen anonim/istemci-tarafı skorlama gerekir.
```

## 8. Sonuç ekranı dili

Tek bir yüzde yerine **eksen bazlı profil** gösterilmeli. Modül adı yerine eksen adı öne çıkarılmalı ("Duyusal İşlemleme: 78" "Otizm: %78"den hem daha doğru hem daha az damgalayıcıdır).

**Düşük örüntü (0–34):** Bu alanda tutarlı bir davranış örüntüsü oluşmadı. Bu sonuç herhangi bir durumu dışlamaz; tarama araçları belirtiler örtük veya dönemsel olduğunda düşük sonuç verebilir.

**Orta örüntü (35–54):** Bazı alanlarda benzer davranışlar tekrar ediyor ancak profil tüm eksenlerde aynı güçte değil. Belirtilerin günlük hayatını ne kadar etkilediğini izlemek faydalı olabilir.

**Tutarlı örüntü (55–74):** Yanıtlarında [eksen adı] ile ilişkilendirilen davranış örüntüleri farklı ve birbirinden bağımsız senaryolarda tutarlı biçimde tekrar ediyor. Doğrulanmış bir ölçekle yapılacak değerlendirme netlik sağlayabilir.

**Güçlü örüntü (75–100):** Yanıtlarında [eksen adı] ekseninde yüksek tutarlılıkla tekrar eden bir örüntü var ve bu örüntü günlük işlevini, ilişkilerini ve enerji yönetimini etkiliyor gibi görünüyor. Bu bir kusur değil, nörobiyolojik veya yaşantısal bir işlemleme farklılığıdır. Kapsamlı bir klinik değerlendirme faydalı olacaktır.

**Yasaklı ifadeler:** "…sın/…sınız" (tanı atfı), "%X ihtimalle", "teşhis", "hastalık", "risk altındasın", "ciddi durum". **Kullanılacak dil:** "örüntü", "eksen", "işlemleme farklılığı", "tutarlılık", "değerlendirme düşünülebilir".


## 9. Geliştirme notları

- Şık harfleri arasında sabit bir yön yoktur; yüksek sinyalli cevaplar bilinçli olarak A–E arasına dağıtılmıştır. Frontend'de şıkları ayrıca karıştırmayın, matris harf sırasına bağlıdır.
- Her modülde en az bir şık, o modülün DIŞINDAKİ bir tanının lehine yazılmıştır (ayırıcı çapa). Bunlar yanlış pozitifi düşüren en kritik maddelerdir; kısaltma yaparken bunları silmeyin.
- ADHD etiketli şıklar mevcut ADHD matrisine (`IR`, `AT`, `EO`, `IN`, `HY`) bonus taşır. Eşleme: DEP-01-E→IR+1, DEP-02-E→AT+2/IR+1, DEP-04-E→AT+1, DEP-05-C→EO+2, OCD-04-B→EO+1, GAD-02-B→HY+2, ASD-02-B→IR+2, ASD-05-B→EO+2, BIP-02-C→IN+2, BIP-03-D→IR+2.
- ext sorular sorulmadığında normalizasyon paydası da düşmelidir. Bu tek başına en sık yapılan ve en çok yanlış pozitif üreten hatadır.
- Mevcut belgendeki 21 senaryo bu 35 ile içerik olarak çakışmıyor; birlikte 56 maddelik bir havuz oluşturur. B formu olarak test-tekrar test veya A/B madde analizi için kullanılabilir.
- Gerçek kullanım öncesi: madde analizi, iç tutarlılık (Cronbach α), faktör yapısı, duyarlılık/özgüllük ve valide edilmiş ölçeklerle (PHQ-9, GAD-7, PCL-5, LSAS, AQ-10, MDQ, DERS-16) eş zamanlı geçerlik karşılaştırması gerekir.
- Yayın öncesi hukuki kontrol: KVKK m.6 özel nitelikli kişisel veri, açık rıza metni, ayrı aydınlatma metni, veri saklama süresi. App Store 1.4.1 ve Google Play Health apps politikası tıbbi iddia içeren uygulamalar için ek gereklilik getirir — 'tanı' kelimesi mağaza açıklamasında geçmemeli.

---
*Prototip 0.2 — 35 soruluk davranış katmanı (ADHD dışı)*