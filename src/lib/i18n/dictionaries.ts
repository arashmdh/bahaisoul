export type Locale = "en" | "sv" | "fa";

export const LOCALES: { code: Locale; label: string; dir: "ltr" | "rtl" }[] = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "sv", label: "Svenska", dir: "ltr" },
  { code: "fa", label: "فارسی", dir: "rtl" },
];

export const dictionaries = {
  en: {
    brand: "Bahá'í Soul",
    brandSub: "Virtual Temple",
    nav: {
      doors: "Nine Doors",
      about: "About",
      history: "History",
      sanctuary: "Sanctuary",
      gallery: "Gallery",
      scholars: "Scholars",
      dashboard: "Dashboard",
      enter: "Enter",
    },
    history: {
      eyebrow: "Sacred chronicle",
      menu: "Topics",
      choose: "Choose a title below to read each chapter of the Faith’s story.",
      milestones: "Key historical milestones",
      sources: "Sources",
    },
    gallery: {
      count: "{n} sacred spaces",
    },
    hero: {
      headline: "A sanctuary for the contemplative heart",
      support:
        "Explore the mystical, cultural, and communal dimensions of the Bahá'í Faith through nine luminous doors.",
      ctaPrimary: "Cross the Threshold",
      ctaSecondary: "Enter the Sanctuary",
    },
    doors: {
      heading: "The Nine Doors",
      sub: "Each door opens onto a pillar of spiritual inquiry.",
    },
    quote: {
      heading: "Word of the Day",
      reflect: "Reflect",
      reflecting: "Close reflection",
      prompt: "What does this word awaken in your heart today?",
      namePh: "Your name",
      send: "Share with the Temple",
      sending: "Sending…",
      sent: "Your reflection was received.",
      sendError: "Could not send. Please try again.",
      recent: "Recent reflections",
      next: "Next",
      prev: "Previous",
      viewAll: "View all 82",
      today: "Today",
      persian: "Persian Hidden Words",
      source: "The Hidden Words",
      author: "Bahá'u'lláh",
    },
    presence: {
      alone: "You are alone in the sanctuary",
      one: "1 soul is present",
      many: "{n} souls are present",
    },
    audio: {
      on: "Ambience on",
      off: "Ambience off",
    },
    footer: {
      reverence: "Built in reverence · A digital House of Worship for seekers",
    },
  },
  sv: {
    brand: "Bahá'í Soul",
    brandSub: "Virtuellt tempel",
    nav: {
      doors: "Nio dörrar",
      about: "Om",
      history: "Historia",
      sanctuary: "Helgedom",
      gallery: "Galleri",
      scholars: "Forskare",
      dashboard: "Instrumentpanel",
      enter: "Stig in",
    },
    history: {
      eyebrow: "Helig krönika",
      menu: "Ämnen",
      choose: "Välj en titel nedan för att läsa varje kapitel i trons historia.",
      milestones: "Viktiga historiska milstolpar",
      sources: "Källor",
    },
    gallery: {
      count: "{n} heliga platser",
    },
    hero: {
      headline: "En helgedom för det kontemplativa hjärtat",
      support:
        "Utforska den bahá'íska trons mystiska, kulturella och gemenskapliga dimensioner genom nio lysande dörrar.",
      ctaPrimary: "Träd över tröskeln",
      ctaSecondary: "Gå in i helgedomen",
    },
    doors: {
      heading: "De nio dörrarna",
      sub: "Varje dörr öppnar sig mot en pelare av andlig undersökning.",
    },
    quote: {
      heading: "Dagens ord",
      reflect: "Reflektera",
      reflecting: "Stäng reflektion",
      prompt: "Vad väcker detta ord i ditt hjärta idag?",
      namePh: "Ditt namn",
      send: "Dela med templet",
      sending: "Skickar…",
      sent: "Din reflektion har mottagits.",
      sendError: "Kunde inte skicka. Försök igen.",
      recent: "Senaste reflektioner",
      next: "Nästa",
      prev: "Föregående",
      viewAll: "Visa alla 82",
      today: "Idag",
      persian: "Persiska Dolda Orden",
      source: "The Hidden Words",
      author: "Bahá'u'lláh",
    },
    presence: {
      alone: "Du är ensam i helgedomen",
      one: "1 själ är närvarande",
      many: "{n} själar är närvarande",
    },
    audio: {
      on: "Atmosfär på",
      off: "Atmosfär av",
    },
    footer: {
      reverence: "Byggt i vördnad · Ett digitalt tillbedjanshus för sökare",
    },
  },
  fa: {
    brand: "بهائی سول",
    brandSub: "معبد مجازی",
    nav: {
      doors: "نُه در",
      about: "درباره",
      history: "تاریخ",
      sanctuary: "حرم",
      gallery: "گالری",
      scholars: "پژوهشگران",
      dashboard: "پیشخوان",
      enter: "ورود",
    },
    history: {
      eyebrow: "سیرهٔ مقدّس",
      menu: "موضوعات",
      choose: "عنوان زیر را برگزینید تا هر فصل از تاریخ آیین را بخوانید.",
      milestones: "نقاط عطف تاریخی",
      sources: "منابع",
    },
    gallery: {
      count: "{n} مکان مقدس",
    },
    hero: {
      headline: "حرمگاهی برای قلب تأمل‌گر",
      support:
        "ابعاد عرفانی، فرهنگی و اجتماعی آیین بهائی را از رهگذر نُه در نورانی کاوش کنید.",
      ctaPrimary: "از آستانه بگذرید",
      ctaSecondary: "وارد حرم شوید",
    },
    doors: {
      heading: "نُه در",
      sub: "هر در به ستونی از جست‌وجوی روحانی می‌گشاید.",
    },
    quote: {
      heading: "کلام روز",
      reflect: "تأمل",
      reflecting: "بستن تأمل",
      prompt: "امروز این کلام چه چیزی را در قلب شما بیدار می‌کند؟",
      namePh: "نام شما",
      send: "ارسال به معبد",
      sending: "در حال ارسال…",
      sent: "تأمل شما دریافت شد.",
      sendError: "ارسال نشد. دوباره تلاش کنید.",
      recent: "تأمل‌های اخیر",
      next: "بعدی",
      prev: "قبلی",
      viewAll: "مشاهدهٔ هر ۸۲",
      today: "امروز",
      persian: "کلمات مکنونۀ فارسی",
      source: "کلمات مکنونه",
      author: "حضرت بهاءالله",
    },
    presence: {
      alone: "تنها در حرم هستید",
      one: "یک روح حاضر است",
      many: "{n} روح حاضرند",
    },
    audio: {
      on: "فضای صوتی روشن",
      off: "فضای صوتی خاموش",
    },
    footer: {
      reverence: "ساخته‌شده با حرمت · خانه‌ای مجازی برای جویندگان",
    },
  },
} as const;

export type Dictionary = {
  brand: string;
  brandSub: string;
  nav: {
    doors: string;
    about: string;
    history: string;
    sanctuary: string;
    gallery: string;
    scholars: string;
    dashboard: string;
    enter: string;
  };
  history: {
    eyebrow: string;
    menu: string;
    choose: string;
    milestones: string;
    sources: string;
  };
  gallery: {
    count: string;
  };
  hero: {
    headline: string;
    support: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  doors: {
    heading: string;
    sub: string;
  };
  quote: {
    heading: string;
    reflect: string;
    reflecting: string;
    prompt: string;
    namePh: string;
    send: string;
    sending: string;
    sent: string;
    sendError: string;
    recent: string;
    next: string;
    prev: string;
    viewAll: string;
    today: string;
    persian: string;
    source: string;
    author: string;
  };
  presence: {
    alone: string;
    one: string;
    many: string;
  };
  audio: {
    on: string;
    off: string;
  };
  footer: {
    reverence: string;
  };
};
