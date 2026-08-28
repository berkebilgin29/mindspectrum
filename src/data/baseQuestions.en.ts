/**
 * 9spectrum — Stage 1: Comprehensive Roof Screening (English)
 * 9 psychological dimensions screened via clinical-derived items.
 */

import type { BaseQuestion } from "@/lib/types";
import { ADULT_EXTRA_QUESTIONS_EN } from "@/data/adultExtra.en";

const CORE_BASE_QUESTIONS_EN: BaseQuestion[] = [
  {
    id: "base_adhd_initiation",
    phase: 1,
    category: "Executive Function & Focus",
    dimension: "adhd",
    question:
      "How hard is it for you to sit down and start an important task (report, assignment, household chore, email)?",
    subtitle:
      "Wanting to do it mentally yet being unable to start for hours (task paralysis), attention constantly drifting elsewhere, procrastinating until the last minute.",
    clinicalNote: "ASRS-v1.1 Criterion 1 & Wender Utah: Prefrontal initiator spark and dopaminergic regulation.",
    options: [
      { text: "Usually no trouble — I make a plan and start within a reasonable time.", weights: { adhd: 0 } },
      { text: "I procrastinate on boring tasks sometimes but get going once things are serious.", weights: { adhd: 1 } },
      { text: "Often — starting feels almost physically painful; I fight myself for hours and push everything to the last minute.", weights: { adhd: 3, depression: 1 } },
      { text: "Almost every day in every area of my life — this initiation battle seriously undermines my potential.", weights: { adhd: 5, depression: 1 } },
    ],
  },
  {
    id: "base_adhd_hyperfocus_time",
    phase: 1,
    category: "Attention Regulation & Time Perception",
    dimension: "adhd",
    question: "How does your sense of time and focus on interesting topics work?",
    subtitle:
      "Losing track of how time passes (time blindness), consistently late to appointments, or locking on to a topic for hours while forgetting to eat.",
    clinicalNote: "ASRS-v1.1 Criterion 4: Hyperfocus and time blindness dynamics.",
    options: [
      { text: "I manage time fairly well; even if I get absorbed, I can shift focus when needed.", weights: { adhd: 0 } },
      { text: "I sometimes lose an evening to a game or show, but it doesn't derail my life.", weights: { adhd: 1 } },
      { text: "Often — I misjudge how long things will take, or I lock in on something for hours and forget everything else.", weights: { adhd: 3 } },
      { text: "My sense of time is purely 'now' and 'not now' — either zero focus or completely lost in hyperfocus.", weights: { adhd: 5 } },
    ],
  },
  {
    id: "base_adhd_restlessness",
    phase: 1,
    category: "Mental Restlessness & Impulse",
    dimension: "adhd",
    question: "How would you describe the speed of your thoughts and your level of impatience?",
    subtitle:
      "Like multiple radio stations playing in your head at once, urge to finish others' sentences, or feeling about to explode when someone explains things slowly.",
    clinicalNote: "ASRS-v1.1 Criterion 5–6: Mental hyperactivity, impulsivity, and cognitive speed regulation.",
    options: [
      { text: "My mind is generally calm; I listen patiently and can wait my turn.", weights: { adhd: 0 } },
      { text: "I get impatient sometimes but can easily control myself.", weights: { adhd: 1 } },
      { text: "My mind runs very fast; I struggle a lot with slow speakers or long queues.", weights: { adhd: 3, bipolar: 1 } },
      { text: "It's like having 5 separate voices in my head that never stop — constantly needing to move, interrupt, or chase the next stimulus.", weights: { adhd: 5, bipolar: 1 } },
    ],
  },
  {
    id: "base_ocd_intrusive",
    phase: 1,
    category: "Intrusive Thoughts & Doubt",
    dimension: "ocd",
    question: "How often do unwanted, disturbing or 'morally wrong' thoughts intrude into your mind against your will?",
    subtitle:
      "A thought that flashes like 'what if I harmed someone' or 'what if I left the gas on', followed by strong anxiety even though you know it makes no sense.",
    clinicalNote: "OCI-R / Y-BOCS Item 1: Ego-dystonic intrusive thought, obsession content, and doubt cycle.",
    options: [
      { text: "Very rarely — unpleasant thoughts come and go without sticking.", weights: { ocd: 0 } },
      { text: "Sometimes; I notice them but don't dwell on them.", weights: { ocd: 1 } },
      { text: "Often — certain thought content scares me and I feel I have to neutralise or suppress it.", weights: { ocd: 3, anxiety: 1 } },
      { text: "Almost daily — I am in a constant battle with my own mind; the thought loop takes significant time and energy.", weights: { ocd: 5, anxiety: 1 } },
    ],
  },
  {
    id: "base_ocd_rituals",
    phase: 1,
    category: "Compulsions & Rituals",
    dimension: "ocd",
    question: "To what extent do you perform repetitive actions — checking, washing, counting, ordering — to reduce inner tension?",
    subtitle:
      "Going back to check the door, washing hands until they're raw, not leaving the house unless you touch a certain object — acts that make sense only to yourself.",
    clinicalNote: "OCI-R Compulsion subscale: Ritual latency, neutralisation urge, and anxiety reduction loop.",
    options: [
      { text: "I don't feel a compulsive urge for such behaviours.", weights: { ocd: 0 } },
      { text: "I check sometimes (door, stove) but it resolves quickly.", weights: { ocd: 1 } },
      { text: "Often — I feel I must do these things; doing them calms me briefly but the doubt returns.", weights: { ocd: 3 } },
      { text: "My rituals take a significant part of my day; skipping them creates intense anxiety.", weights: { ocd: 5, anxiety: 1 } },
    ],
  },
  {
    id: "base_depression_anhedonia",
    phase: 1,
    category: "Anhedonia & Energy",
    dimension: "depression",
    question: "How much have you lost interest in or pleasure from activities you normally enjoy?",
    subtitle:
      "Not just tiredness — the sense that nothing excites or moves you; even your favourite things feel flat or meaningless.",
    clinicalNote: "PHQ-9 Item 1 & Beck Criterion: Core anhedonia, motivational anhedonia, and hedonic tone.",
    options: [
      { text: "I can still find joy; energy fluctuates but I have genuinely enjoyable moments.", weights: { depression: 0 } },
      { text: "A bit flat lately but I don't think it's serious.", weights: { depression: 1 } },
      { text: "Often — most things I used to enjoy feel hollow; it takes serious effort to even try.", weights: { depression: 3 } },
      { text: "Almost everything feels grey; I can't feel real joy or excitement about anything.", weights: { depression: 5 } },
    ],
  },
  {
    id: "base_depression_worth",
    phase: 1,
    category: "Worthlessness & Guilt",
    dimension: "depression",
    question: "How much do thoughts of worthlessness, self-blame, or excessive guilt weigh on you?",
    subtitle:
      "Not constructive self-criticism — a pervasive inner voice saying 'I am a burden', 'I'm fundamentally flawed', guilt for things that are not your fault.",
    clinicalNote: "PHQ-9 Item 6 & Beck Criterion 7: Negative cognitive triad, hopelessness, and self-schema.",
    options: [
      { text: "I criticise myself normally but don't feel fundamentally worthless.", weights: { depression: 0 } },
      { text: "At difficult times I doubt myself but it passes.", weights: { depression: 1 } },
      { text: "Often — the thought 'I am worthless / a burden / fundamentally broken' is persistent.", weights: { depression: 3 } },
      { text: "Almost always — thoughts of hopelessness and worthlessness have become my background noise.", weights: { depression: 5, trauma_ptsd: 1 } },
    ],
    skippable: true,
  },
  {
    id: "base_anxiety_worry",
    phase: 1,
    category: "Chronic Worry & Catastrophising",
    dimension: "anxiety",
    question: "How much time do you spend worrying about many different areas of life?",
    subtitle:
      "Not just real problems — free-floating worry that jumps from health to finances to relationships; the 'what ifs' never stop.",
    clinicalNote: "GAD-7 Item 2–3: Generalised, uncontrollable worry content and catastrophising bias.",
    options: [
      { text: "I worry about realistic things but it doesn't take over my day.", weights: { anxiety: 0 } },
      { text: "I worry more than average but it's manageable.", weights: { anxiety: 1 } },
      { text: "Often — worry occupies a significant part of my mental bandwidth; I can't turn it off.", weights: { anxiety: 3 } },
      { text: "Almost always — my mind is running worst-case scenarios in the background no matter what I'm doing.", weights: { anxiety: 5 } },
    ],
  },
  {
    id: "base_anxiety_physical",
    phase: 1,
    category: "Physical Tension & Somatic Alarm",
    dimension: "anxiety",
    question: "How often do you experience physical tension, restlessness, or bodily alarm signals?",
    subtitle:
      "Muscle tension, racing heart, tight chest, stomach knots, fatigue — without a clear physical reason.",
    clinicalNote: "GAD-7 Items 5–7: Somatic tension, restlessness, and autonomic hyperarousal.",
    options: [
      { text: "Rarely; my body is usually relaxed.", weights: { anxiety: 0 } },
      { text: "Occasionally in high-stress periods.", weights: { anxiety: 1 } },
      { text: "Often — my body is frequently tense, restless, or signalling alarm without a clear cause.", weights: { anxiety: 3 } },
      { text: "Almost always — chronic physical tension and worry are my baseline; I don't remember what calm feels like.", weights: { anxiety: 5 } },
    ],
  },
  {
    id: "base_bipolar_energy",
    phase: 1,
    category: "Energy & Mood Cycles",
    dimension: "bipolar",
    question: "Do you experience distinct periods where your energy, confidence, and need for sleep clearly change?",
    subtitle:
      "Periods of very high energy, racing thoughts, needing only 3-4 hours' sleep and feeling great — alternating with low or normal periods.",
    clinicalNote: "MDQ Criterion A: Hypomanic/manic episode detection, sleep need reduction, elevated mood.",
    options: [
      { text: "My mood and energy are relatively stable throughout the year.", weights: { bipolar: 0 } },
      { text: "My energy varies but I don't notice clear cycles.", weights: { bipolar: 1 } },
      { text: "Sometimes I feel distinctly 'switched on' — very productive, needing little sleep, full of ideas — lasting days.", weights: { bipolar: 3, adhd: 1 } },
      { text: "I clearly have high-energy periods: I sleep much less, my thoughts race, I feel invincible — then I crash.", weights: { bipolar: 5 } },
    ],
  },
  {
    id: "base_bipolar_impulsive",
    phase: 1,
    category: "Impulsivity & Risk-taking Cycles",
    dimension: "bipolar",
    question: "During elevated periods, how much do your impulsive decisions and risk-taking behaviour increase?",
    subtitle:
      "Large purchases, relationship decisions, business launches, very little sleep but feeling fantastic — and later regretting the consequences.",
    clinicalNote: "MDQ Criterion A: Goal-directed activity increase, decreased inhibition, reckless behaviour.",
    options: [
      { text: "I'm generally deliberate; impulsive behaviour doesn't characterise my highs.", weights: { bipolar: 0 } },
      { text: "I'm a bit more spontaneous in good moods.", weights: { bipolar: 1 } },
      { text: "Sometimes in energised periods I make big decisions quickly and later regret them.", weights: { bipolar: 3 } },
      { text: "In my high periods I spend excessively, make major plans, and act on impulse — and I've paid serious consequences.", weights: { bipolar: 5 } },
    ],
  },
  {
    id: "base_autism_social",
    phase: 1,
    category: "Social Communication & Masking",
    dimension: "autism_sensory",
    question: "How much effort do you put into understanding and adapting to social rules and unspoken norms?",
    subtitle:
      "Consciously learning 'what you're supposed to do', not getting implied messages, exhausting effort to seem 'normal', feeling like an actor in social situations.",
    clinicalNote: "AQ-10 Item 2 & CAT-Q: Social camouflage/masking effort, mentalising load.",
    options: [
      { text: "Social rules feel fairly intuitive; I navigate them without unusual effort.", weights: { autism_sensory: 0 } },
      { text: "I sometimes think about social dynamics but it's not exhausting.", weights: { autism_sensory: 1 } },
      { text: "Often — I consciously learn rules; conversations drain me and I feel like a different person to fit in.", weights: { autism_sensory: 3, social_anxiety: 1 } },
      { text: "Almost always — social interaction requires immense processing; I mask constantly and am exhausted afterwards.", weights: { autism_sensory: 5, social_anxiety: 1 } },
    ],
  },
  {
    id: "base_autism_sensory",
    phase: 1,
    category: "Sensory Sensitivity",
    dimension: "autism_sensory",
    question: "How much do sensory inputs — sound, light, texture, smell — overwhelm or disturb you beyond what others seem to experience?",
    subtitle:
      "Seams in clothing, background noise in crowded places, fluorescent lights — creating strong discomfort or causing shutdown, while others around you don't seem affected.",
    clinicalNote: "AQ-10 Item 1 & DSM-5 Section B4: Sensory hyper/hypo-reactivity threshold.",
    options: [
      { text: "Most sensory environments are comfortable for me.", weights: { autism_sensory: 0 } },
      { text: "Some environments bother me but nothing unusual.", weights: { autism_sensory: 1 } },
      { text: "Often — certain sounds, textures or lights create strong discomfort; I avoid or leave such environments.", weights: { autism_sensory: 3 } },
      { text: "Sensory input in normal environments is frequently overwhelming; I feel genuine distress or need to shut down.", weights: { autism_sensory: 5 } },
    ],
  },
  {
    id: "base_social_anxiety_performance",
    phase: 1,
    category: "Social Performance Anxiety",
    dimension: "social_anxiety",
    question: "How much do fear of judgment and avoidance of social situations affect your daily life?",
    subtitle:
      "Not just shyness — intense anxiety about saying something wrong, replaying conversations for hours afterwards, avoiding group events or presentations.",
    clinicalNote: "LSAS Performance subscale: Anticipatory anxiety, scrutiny fear, and post-event processing.",
    options: [
      { text: "I can handle most social situations without significant anxiety.", weights: { social_anxiety: 0 } },
      { text: "Presentations or formal events make me nervous but I get through them.", weights: { social_anxiety: 1 } },
      { text: "Often — I avoid social situations or endure them with intense anxiety; I replay events for hours.", weights: { social_anxiety: 3 } },
      { text: "Social anxiety severely limits my life; I avoid many situations and the anticipation is debilitating.", weights: { social_anxiety: 5 } },
    ],
  },
  {
    id: "base_trauma_intrusion",
    phase: 1,
    category: "Intrusive Memories & Hypervigilance",
    dimension: "trauma_ptsd",
    question: "Do memories or images from past difficult or traumatic experiences intrude uninvited?",
    subtitle:
      "Flashback-like images, nightmares, or bodily reactions triggered by a smell/sound/image — as if being pulled back in time.",
    clinicalNote: "PCL-5 Cluster B: Re-experiencing/intrusion symptoms — involuntary distressing memories.",
    options: [
      { text: "Difficult past events don't intrude unexpectedly on my daily life.", weights: { trauma_ptsd: 0 } },
      { text: "Sometimes a memory flashes up but it's not disturbing.", weights: { trauma_ptsd: 1 } },
      { text: "Sometimes — certain memories or images intrude uninvited and cause distress.", weights: { trauma_ptsd: 3, anxiety: 1 } },
      { text: "Often — intrusive images/memories/bodily sensations disrupt my daily functioning.", weights: { trauma_ptsd: 5, depression: 1 } },
    ],
    skippable: true,
  },
  {
    id: "base_trauma_avoidance",
    phase: 1,
    category: "Avoidance & Emotional Numbness",
    dimension: "trauma_ptsd",
    question: "How much do you avoid certain thoughts, feelings, people or places linked to distressing events?",
    subtitle:
      "Not watching certain films, not visiting certain places, emotional numbness — shutting off to avoid being overwhelmed.",
    clinicalNote: "PCL-5 Cluster C: Avoidance symptoms — cognitive and behavioural numbing.",
    options: [
      { text: "I don't feel a strong need to avoid reminders of past events.", weights: { trauma_ptsd: 0 } },
      { text: "There are a few things I prefer not to think about, but it doesn't affect my life much.", weights: { trauma_ptsd: 1 } },
      { text: "Often — I actively avoid people, places or thoughts that trigger reminders.", weights: { trauma_ptsd: 3 } },
      { text: "Avoidance and emotional numbness are a major part of how I cope; they significantly limit my life.", weights: { trauma_ptsd: 5, depression: 1 } },
    ],
    skippable: true,
  },
  {
    id: "base_bpd_dysregulation",
    phase: 1,
    category: "Emotional Dysregulation",
    dimension: "bpd_emotional",
    question: "How quickly and intensely do your emotions shift, and how hard is it to recover from emotional waves?",
    subtitle:
      "Intense emotion from nowhere — rage, despair or euphoria — collapsing your day; then recovering or swinging to the opposite within hours.",
    clinicalNote: "DERS / MSI-BPD: Emotional reactivity, lability, and impulse dyscontrol.",
    options: [
      { text: "My emotions shift normally; I can usually stabilise without much disruption.", weights: { bpd_emotional: 0 } },
      { text: "Emotionally sensitive — intense sometimes, but I manage.", weights: { bpd_emotional: 1 } },
      { text: "Often — my mood swings are fast and intense; recovery takes hours and can derail my whole day.", weights: { bpd_emotional: 3, depression: 1 } },
      { text: "Almost always — emotional storms come on and I can't regulate; I feel at the mercy of intense feelings.", weights: { bpd_emotional: 5, depression: 1 } },
    ],
  },
  {
    id: "base_bpd_identity",
    phase: 1,
    category: "Identity & Relationship Instability",
    dimension: "bpd_emotional",
    question: "How stable is your sense of who you are, and how consistent are your close relationships?",
    subtitle:
      "Shifting fundamentally who you are depending on who you're with, idealising then suddenly devaluing people, intense fear of abandonment.",
    clinicalNote: "MSI-BPD Items: Identity disturbance, splitting, and abandonment anxiety.",
    options: [
      { text: "I have a fairly clear sense of who I am; my relationships are generally stable.", weights: { bpd_emotional: 0 } },
      { text: "I adapt in different social situations but my core self is stable.", weights: { bpd_emotional: 1 } },
      { text: "Often — I feel very different depending on who I'm with; relationships go from intense closeness to sudden distance.", weights: { bpd_emotional: 3, social_anxiety: 1 } },
      { text: "My sense of self is very unstable; relationships are intense and turbulent; I have an intense fear of being left.", weights: { bpd_emotional: 5 } },
    ],
  },
];

export const BASE_QUESTIONS_EN: BaseQuestion[] = [
  ...CORE_BASE_QUESTIONS_EN,
  ...ADULT_EXTRA_QUESTIONS_EN,
];
