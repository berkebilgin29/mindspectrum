/**
 * 9spectrum — Clinical Condition Data Bank (English)
 * Structured according to DSM-5 and ICD-11 criteria.
 */

import type { ConditionsData } from "@/lib/types";

export const CONDITIONS_DATA_EN: ConditionsData = {
  adhd: {
    id: "adhd",
    name: "ADHD (Attention Deficit Hyperactivity Disorder)",
    shortName: "ADHD",
    dsmCode: "DSM-5 314.0x / ICD-11 6A05",
    tagline: "Executive function, dopamine regulation, and attention management differences",
    accentColor: "#7A2634",
    category: "Neurodevelopmental",
    clinicalScale: "ASRS-v1.1 (WHO / Harvard) & Wender Utah",
    description:
      "ADHD is a neurodevelopmental condition arising from differences in the executive function network governing attention, impulse control, motivation, and working memory in the prefrontal cortex. The core characteristic is not an inability to pay attention, but an inability to regulate attention the way the brain is prompted to.",
    coreTraits: [
      "Task Paralysis: Procrastinating on uninteresting tasks and expending enormous mental effort just to start",
      "Hyperfocus: Locking in on an interesting topic for hours while losing all sense of time",
      "Time Blindness: Difficulty estimating durations and sticking to plans",
      "Internal Restlessness / Mental Hyperactivity: A constant sense of multiple channels running simultaneously",
      "Working Memory Weakness: Short-term forgetting, losing objects",
      "Impulsive Reactivity & Rejection Sensitive Dysphoria (RSD): Disproportionately intense emotional response to criticism",
    ],
    overlappingWith: [
      {
        targetId: "ocd",
        targetName: "OCD (Obsessive Compulsive Disorder)",
        distinctionSummary:
          "ADHD procrastination stems from low arousal / dopamine deficit; OCD procrastination arises from fear of making mistakes or the belief that 'if it's not perfect, disaster follows'.",
        keyDifferential:
          "The ADHD mind randomly jumps to new stimuli; the OCD mind becomes fixated on an unwanted doubt or neutralising ritual.",
      },
      {
        targetId: "depression",
        targetName: "Depression & Burnout",
        distinctionSummary:
          "The person with ADHD wants to act but their brain's starter motor won't fire. The person with depression feels there is no point in acting (anhedonia and hopelessness).",
        keyDifferential:
          "In ADHD, an exciting new topic instantly sparks energy; in clinical depression, even that spark has gone out.",
      },
      {
        targetId: "bipolar",
        targetName: "Bipolar (Hypomania)",
        distinctionSummary:
          "ADHD hyperactivity has been a continuous baseline since childhood. Bipolar hypomania arrives in cyclical episodes lasting days or weeks.",
        keyDifferential:
          "In ADHD there is a need to sleep but trouble falling asleep; in bipolar hypomania the person sleeps 2–3 hours and feels refreshed.",
      },
    ],
    doctorDiscussionPoints: [
      "Give concrete examples of how often you struggle to finish tasks you start in daily life.",
      "Mention whether this was present in childhood (school years, report cards, forgetting things).",
      "Describe moments when you got so absorbed in a topic you forgot basic needs (hyperfocus).",
      "Share how caffeine or stimulants affect you — calming or causing palpitations.",
    ],
  },

  ocd: {
    id: "ocd",
    name: "OCD (Obsessive Compulsive Disorder)",
    shortName: "OCD",
    dsmCode: "DSM-5 300.3 / ICD-11 6B20",
    tagline: "Intrusive thoughts, doubt cycle, and neutralising rituals",
    accentColor: "#5C6478",
    category: "Neuropsychiatric / Anxiety Spectrum",
    clinicalScale: "OCI-R & Y-BOCS (Yale-Brown)",
    description:
      "OCD is defined by uncontrollable intrusive thoughts (obsessions) entering the mind and repetitive behaviours or mental acts (compulsions) performed to temporarily relieve that anxiety. Even when the person knows the thought is irrational, they cannot stop the 'what if?' doubt.",
    coreTraits: [
      "Constant Doubt & Safety-seeking: Checking doors, stoves, locks repeatedly",
      "Just-right / Symmetry Need: Repeating something until it feels 'exactly right'",
      "Mental Neutralisation: Trying to ward off a bad thought with a good word, prayer, or number",
      "Contamination and Pollution Anxiety: Excessive protection from germs or moral contamination",
      "Unwanted Taboo Thoughts: Guilt over intrusions contrary to one's moral values",
      "Inflated Responsibility: Feeling fully in control of preventing all negative events",
    ],
    overlappingWith: [
      {
        targetId: "adhd",
        targetName: "ADHD",
        distinctionSummary:
          "OCD tries to manage anxiety by building checklists; ADHD wants to build order but can't sustain it due to forgetfulness and executive difficulties.",
        keyDifferential:
          "OCD's loss of focus comes from trying to silence intrusions; ADHD's loss of focus comes from getting bored and chasing new stimuli.",
      },
      {
        targetId: "anxiety",
        targetName: "Generalised Anxiety Disorder (GAD)",
        distinctionSummary:
          "GAD worries continuously about real-life concerns (health, finances). OCD typically revolves around taboos or rituals the person knows are irrational.",
        keyDifferential:
          "GAD does not involve specific neutralising acts (compulsions); OCD has specific physical/mental rituals performed to gain relief.",
      },
    ],
    doctorDiscussionPoints: [
      "Share the intrusive repeating thoughts you can't shake — don't hesitate, your clinician has heard it all.",
      "Describe how many hours a day you spend managing these thoughts and what actions you take.",
      "Express how intense the distress is when you resist performing your rituals.",
    ],
  },

  anxiety: {
    id: "anxiety",
    name: "Generalised Anxiety & Panic Spectrum",
    shortName: "Anxiety",
    dsmCode: "DSM-5 300.02 / ICD-11 6B00",
    tagline: "Overactive sympathetic nervous system, chronic catastrophising, and somatic alarm",
    accentColor: "#7A2634",
    category: "Anxiety Disorders",
    clinicalScale: "GAD-7 & Beck Anxiety Inventory",
    description:
      "An anxiety disorder is the nervous system continuously sounding the alarm even when there is no concrete threat. It causes muscle tension, racing heart, shortness of breath, and an endless stream of worst-case scenarios in the mind.",
    coreTraits: [
      "Chronic Catastrophising: Automatically imagining the worst outcome in ambiguous situations",
      "Somatic Symptoms: Chest tightness, muscle tension, jaw clenching, digestive sensitivity",
      "Restless Anticipation: A constant 'on-edge' feeling as if bad news is about to arrive",
      "Sleep Onset Difficulty: Mind flooding with worries about the day and the future when getting into bed",
      "Intolerance of Uncertainty: Intense helplessness and distress in situations outside one's control",
      "Panic Attacks: Sudden inability to breathe, feeling of choking or fainting",
    ],
    overlappingWith: [
      {
        targetId: "adhd",
        targetName: "ADHD",
        distinctionSummary:
          "Chronic forgetting and fear of not keeping up can lead over time to secondary anxiety.",
        keyDifferential:
          "Anxiety fills the mind with worry even in quiet environments; ADHD can stay calm and focused when a dopamine-interesting topic is found.",
      },
      {
        targetId: "social_anxiety",
        targetName: "Social Anxiety",
        distinctionSummary:
          "Generalised anxiety targets all areas of life; social anxiety specifically locks on to moments of social scrutiny.",
        keyDifferential:
          "If you are at ease when alone but anxious around people, Social Anxiety is more likely.",
      },
    ],
    doctorDiscussionPoints: [
      "Specify which times of day your anxiety intensifies and where you feel it in your body.",
      "Describe whether you experience sudden intense panic attacks.",
      "Explain how much this anxiety restricts your daily tasks and social life.",
    ],
  },

  depression: {
    id: "depression",
    name: "Depression & Mood Collapse",
    shortName: "Depression",
    dsmCode: "DSM-5 296.xx / ICD-11 6A70",
    tagline: "Anhedonia, energy loss, worthlessness, and psychomotor slowing",
    accentColor: "#5C6478",
    category: "Mood Disorders",
    clinicalScale: "PHQ-9 & Beck Depression Inventory (BDI)",
    description:
      "Depression is a multidimensional clinical picture in which the brain's reward mechanism, energy production, and cognitive speed become blunted. The person experiences complete absence of feeling (anhedonia) about formerly enjoyable activities; even simple daily tasks become insurmountable burdens.",
    coreTraits: [
      "Anhedonia: Complete inability to find pleasure in previously enjoyable things; emotional numbness",
      "Cognitive Fog & Indecision: Slowing of thought, inability to make even simple decisions",
      "Psychomotor Slowing: The body feeling like it weighs tonnes",
      "Sleep and Appetite Disruption: Oversleeping or waking too early; marked appetite loss",
      "Chronic Worthlessness: Holding oneself entirely responsible for negative events",
      "Hopelessness About the Future: A rigid belief that things will never improve",
    ],
    overlappingWith: [
      {
        targetId: "adhd",
        targetName: "ADHD Burnout",
        distinctionSummary:
          "ADHD burnout is a flat battery from years of trying to conform to neurotypical expectations.",
        keyDifferential:
          "In depression the core feeling is 'I am worthless'; in ADHD it is 'I have the potential but the starter motor won't fire'.",
      },
    ],
    doctorDiscussionPoints: [
      "Explain how long this lack of motivation and energy has been ongoing.",
      "Describe changes in your sleep and appetite patterns.",
      "Tell your clinician whether you have had periods of the opposite — extreme energy — at any point in your life.",
    ],
  },

  bipolar: {
    id: "bipolar",
    name: "Bipolar Spectrum (Mood Cycling)",
    shortName: "Bipolar Spectrum",
    dsmCode: "DSM-5 296.8x / ICD-11 6A60",
    tagline: "Periodic oscillation of energy, sleep, and motivation between manic/hypomanic and depressive poles",
    accentColor: "#7A2634",
    category: "Mood Disorders",
    clinicalScale: "MDQ (Mood Disorder Questionnaire) & HCL-32",
    description:
      "Bipolar disorder involves mood oscillating between two opposite poles (mania/hypomania and depression) over periods of weeks or months. In a high phase the person can work for days on 2–3 hours of sleep, exuding excessive confidence; followed by a deep depressive phase.",
    coreTraits: [
      "Periodic Hypomania/Mania: Days of high energy, racing ideas, jumping from project to project",
      "Reduced Need for Sleep: Feeling refreshed after just a few hours",
      "Overconfidence & Impulsive Decisions: Spending or taking risks one would not normally consider",
      "Flight of Ideas & Rapid Speech: Thoughts moving faster than words",
      "Cyclical Depression: Deep withdrawal following the high phase",
      "Euthymic Intervals: Periods of complete balance between episodes",
    ],
    overlappingWith: [
      {
        targetId: "bpd_emotional",
        targetName: "Borderline Emotional Dysregulation",
        distinctionSummary:
          "Bipolar swings last weeks and relate to biological rhythms. BPD swings occur within hours/days and are triggered by relational events.",
        keyDifferential:
          "Bipolar episodes unfold largely independently of external events.",
      },
    ],
    doctorDiscussionPoints: [
      "Have there been periods where you slept very little and felt unstoppable?",
      "During those periods, did you make large impulsive spending decisions or take reckless actions you later regretted?",
      "Let your clinician know if anyone in your family has a bipolar or mood disorder diagnosis.",
    ],
  },

  autism_sensory: {
    id: "autism_sensory",
    name: "Autism Spectrum & Neurodiversity (Sensory/Communication)",
    shortName: "Autism / Neurodiversity",
    dsmCode: "DSM-5 299.00 / ICD-11 6A02",
    tagline: "Fatigue from reading social cues, sensory sensitivities, and need for routine",
    accentColor: "#5C6478",
    category: "Neurodevelopmental Spectrum",
    clinicalScale: "AQ-10 & CAT-Q (Camouflaging Inventory)",
    description:
      "The autism spectrum is a neurodevelopmental difference in how the brain processes social communication cues, environmental stimuli, and information. Constant conscious masking in social settings can lead to intense burnout.",
    coreTraits: [
      "Social Masking: Consciously calculating facial expressions, eye contact, and conversational turns — then crashing afterwards",
      "Sensory Overload: Nervous system overwhelmed by noise, fluorescent light, or fabric textures",
      "Deep Specialised Interests: Intense passionate connection to a specific topic",
      "Need for Routine and Predictability: Inner equilibrium disturbed by unexpected changes in plans",
      "Preference for Direct Communication: Difficulty decoding implication and subtext; preferring clarity",
      "Regulation Need: Needing to be alone and sensorially reset during stress",
    ],
    overlappingWith: [
      {
        targetId: "social_anxiety",
        targetName: "Social Anxiety",
        distinctionSummary:
          "Social anxiety knows the social rules but fears being judged. Autism tires because social rules are not intuitive to decode.",
        keyDifferential:
          "If your sensory sensitivities and need for routine persist even when alone, the autism spectrum is indicated.",
      },
    ],
    doctorDiscussionPoints: [
      "Describe how long you can stay in loud, brightly lit environments.",
      "Share whether you feel like you're playing a role in social settings (masking).",
      "Tell your clinician about your specialist interests and how attached you are to your routines.",
    ],
  },

  social_anxiety: {
    id: "social_anxiety",
    name: "Social Anxiety Disorder (Social Phobia)",
    shortName: "Social Anxiety",
    dsmCode: "DSM-5 300.23 / ICD-11 6B04",
    tagline: "Fear of negative evaluation and humiliation in social situations",
    accentColor: "#7A2634",
    category: "Anxiety Disorders",
    clinicalScale: "LSAS (Liebowitz Social Anxiety Scale)",
    description:
      "Social Anxiety Disorder is an intense and persistent fear of environments where the person may be scrutinised, criticised, or humiliated.",
    coreTraits: [
      "Fear of Negative Evaluation: The belief that others will find them inadequate",
      "Post-Social Rumination: Replaying 'did I say something wrong?' in the mind after a conversation",
      "Fear of Visible Physical Symptoms: Worrying that blushing or hand trembling will be noticed",
      "Performance Avoidance: Avoiding presentations or phone calls with strangers",
    ],
    overlappingWith: [
      {
        targetId: "autism_sensory",
        targetName: "Autism Spectrum",
        distinctionSummary:
          "In social anxiety the person over-anticipates what others think. In autism the person has difficulty intuiting the other's intent.",
        keyDifferential:
          "If you are completely at ease one-to-one with a close friend, Social Anxiety is more likely.",
      },
    ],
    doctorDiscussionPoints: [
      "Describe the mental processes in the days before and after entering social situations.",
      "Mention situations where this anxiety has held you back in your career or education.",
    ],
  },

  trauma_ptsd: {
    id: "trauma_ptsd",
    name: "Post-Traumatic Stress & Triggers (PTSD)",
    shortName: "PTSD / Trauma",
    dsmCode: "DSM-5 309.81 / ICD-11 6B40",
    tagline: "Re-experiencing past traumatic events through intrusive memories and hyperarousal",
    accentColor: "#7A2634",
    category: "Trauma and Stressor-Related",
    clinicalScale: "PCL-5 (DSM-5 PTSD Checklist)",
    description:
      "PTSD is the brain's threat-processing system getting stuck after a severe event or ongoing neglect/abuse. Even though the event is in the past, the nervous system responds as if the danger is still present.",
    coreTraits: [
      "Intrusive Memories (Flashbacks): Feeling as if reliving the event when triggered by a scent or sound",
      "Avoidance Behaviour: Avoiding places, people, or feelings that trigger reminders",
      "Hypervigilance: Constantly scanning the environment as if danger is imminent",
      "Emotional Numbing: Difficulty feeling positive emotions; feeling estranged from the world",
    ],
    overlappingWith: [
      {
        targetId: "anxiety",
        targetName: "Generalised Anxiety",
        distinctionSummary:
          "Generalised anxiety fears uncertainty about the future; PTSD avoids re-experiencing a past trauma.",
        keyDifferential:
          "If your anxiety suddenly explodes around specific memories or similar sounds/smells, a trauma origin is likely.",
      },
    ],
    doctorDiscussionPoints: [
      "Describe past experiences that trigger bodily reactions (racing heart, trembling) when you think of them.",
      "Identify specific trigger situations that suddenly pull you back to the past.",
    ],
  },

  bpd_emotional: {
    id: "bpd_emotional",
    name: "Emotional Dysregulation & Intense Reactivity",
    shortName: "Emotional Dysregulation / BPD",
    dsmCode: "DSM-5 301.83 / ICD-11 6D11.5",
    tagline: "Rapid emotional swings, intense abandonment sensitivity, and identity instability",
    accentColor: "#7A2634",
    category: "Personality and Emotion Regulation",
    clinicalScale: "MSI-BPD & DERS (Difficulties in Emotion Regulation Scale)",
    description:
      "Emotional Dysregulation is a low threshold for emotional pain combined with great difficulty regulating experienced emotions. A perceived abandonment can create intense emptiness and rage.",
    coreTraits: [
      "Rapid Emotional Swings: Shifting from intense joy to deep despair or rage within hours in a single day",
      "Abandonment Terror: Extreme reactions to real or imagined separation",
      "Black-and-White Thinking (Splitting): Seeing people as either perfect or enemies",
      "Chronic Inner Emptiness: A deep sense of meaninglessness and not knowing who one is",
    ],
    overlappingWith: [
      {
        targetId: "bipolar",
        targetName: "Bipolar Disorder",
        distinctionSummary:
          "Bipolar episodes last weeks. BPD swings are instantly triggered by a relational event (like a late reply to a message).",
        keyDifferential:
          "If your mood shifts according to how someone is treating you within a single day, BPD is foremost.",
      },
    ],
    doctorDiscussionPoints: [
      "Describe the inner storms you experience when you sense even a hint of coldness in a relationship.",
      "Share how frequently your emotions rise and fall within a single day.",
    ],
  },
};
