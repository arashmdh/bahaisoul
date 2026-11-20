import type { Locale } from "@/lib/i18n/dictionaries";

export type LocalizedString = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export type ScholarKind = "steward" | "researcher";

export type ScholarCategory =
  | "mysticism"
  | "science"
  | "arts"
  | "social"
  | "family"
  | "education"
  | "history"
  | "music"
  | "youth";

export type ScholarArticle = {
  id: string;
  title: LocalizedString;
  doorSlug?: string;
  href?: string;
};

export type ScholarMilestone = {
  year?: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type ScholarWork = {
  id: string;
  title: LocalizedString;
  body: LocalizedString;
};

export type ScholarPerson = {
  slug: string;
  kind: ScholarKind;
  stewardSeat?: number; // 1–9 for Temple Stewards
  active: boolean;
  founder?: boolean;
  isFeatured?: boolean;
  name: LocalizedString;
  role: LocalizedString;
  badge?: LocalizedString;
  pressBadge?: LocalizedString;
  focus: LocalizedList;
  categories: ScholarCategory[];
  bioShort: LocalizedString;
  bio: LocalizedString;
  portrait?: string; // public path; undefined = geometric avatar
  avatarHue?: number; // for SVG placeholder
  milestones?: ScholarMilestone[];
  articles?: ScholarArticle[];
  featuredQuote?: LocalizedString;
  selectedWorks?: ScholarWork[];
  comingSoon?: boolean;
};

export const SCHOLAR_CATEGORIES: {
  id: ScholarCategory | "all";
  label: LocalizedString;
}[] = [
  { id: "all", label: { en: "All", sv: "Alla", fa: "همه" } },
  {
    id: "mysticism",
    label: { en: "Mysticism", sv: "Mystik", fa: "عرفان" },
  },
  {
    id: "science",
    label: {
      en: "Science & Religion",
      sv: "Vetenskap & religion",
      fa: "علم و دین",
    },
  },
  {
    id: "arts",
    label: { en: "Arts & Culture", sv: "Konst & kultur", fa: "هنر و فرهنگ" },
  },
  {
    id: "social",
    label: {
      en: "Social Transformation",
      sv: "Social förvandling",
      fa: "تحول اجتماعی",
    },
  },
  {
    id: "family",
    label: { en: "Family", sv: "Familj", fa: "خانواده" },
  },
];

const stewardFocus: Array<{
  seat: number;
  slug: string;
  nameFa: string;
  nameEn: string;
  nameSv: string;
  focus: LocalizedList;
  categories: ScholarCategory[];
  hue: number;
}> = [
  {
    seat: 3,
    slug: "steward-iii",
    nameFa: "امین سوم",
    nameEn: "Steward III",
    nameSv: "Förvaltare III",
    focus: {
      fa: ["هنر و خوشنویسی", "زیبایی مقدس"],
      en: ["Arts & Calligraphy", "Sacred Beauty"],
      sv: ["Konst & kalligrafi", "Helig skönhet"],
    },
    categories: ["arts"],
    hue: 52,
  },
  {
    seat: 4,
    slug: "steward-iv",
    nameFa: "امین چهارم",
    nameEn: "Steward IV",
    nameSv: "Förvaltare IV",
    focus: {
      fa: ["علم و دین", "هماهنگی دانش"],
      en: ["Science & Religion", "Harmony of Knowledge"],
      sv: ["Vetenskap & religion", "Kunskapens harmoni"],
    },
    categories: ["science"],
    hue: 195,
  },
  {
    seat: 5,
    slug: "steward-v",
    nameFa: "امین پنجم",
    nameEn: "Steward V",
    nameSv: "Förvaltare V",
    focus: {
      fa: ["تربیت خانواده", "آموزش کودکان"],
      en: ["Family Education", "Child Development"],
      sv: ["Familjeutbildning", "Barnutveckling"],
    },
    categories: ["family", "education"],
    hue: 145,
  },
  {
    seat: 6,
    slug: "steward-vi",
    nameFa: "امین ششم",
    nameEn: "Steward VI",
    nameSv: "Förvaltare VI",
    focus: {
      fa: ["عدالت اجتماعی", "کرامت انسانی"],
      en: ["Social Justice", "Human Dignity"],
      sv: ["Social rättvisa", "Mänsklig värdighet"],
    },
    categories: ["social"],
    hue: 12,
  },
  {
    seat: 7,
    slug: "steward-vii",
    nameFa: "امین هفتم",
    nameEn: "Steward VII",
    nameSv: "Förvaltare VII",
    focus: {
      fa: ["موسیقی نیایشی", "نغمه‌های مقدس"],
      en: ["Devotional Music", "Sacred Song"],
      sv: ["Andaktsmusik", "Helig sång"],
    },
    categories: ["music", "arts"],
    hue: 280,
  },
  {
    seat: 8,
    slug: "steward-viii",
    nameFa: "امین هشتم",
    nameEn: "Steward VIII",
    nameSv: "Förvaltare VIII",
    focus: {
      fa: ["توانمندسازی جوانان", "خدمت نسل نو"],
      en: ["Youth Empowerment", "Rising Generations"],
      sv: ["Ungdomsengagemang", "Kommande generationer"],
    },
    categories: ["youth", "education"],
    hue: 220,
  },
  {
    seat: 9,
    slug: "steward-ix",
    nameFa: "امین نهم",
    nameEn: "Steward IX",
    nameSv: "Förvaltare IX",
    focus: {
      fa: ["تاریخ آیین", "میراث مقدس"],
      en: ["History of the Faith", "Sacred Heritage"],
      sv: ["Trons historia", "Heligt arv"],
    },
    categories: ["history"],
    hue: 320,
  },
];

export const stewards: ScholarPerson[] = [
  {
    slug: "arash-mamdouh",
    kind: "steward",
    stewardSeat: 1,
    active: true,
    founder: true,
    isFeatured: true,
    name: {
      en: "Arash Mamdouh",
      sv: "Arash Mamdouh",
      fa: "آرش ممدوح",
    },
    role: {
      fa: "بنیان‌گذار · موسیقی‌دان، مخترع، پژوهشگر عرفان و معمار فناوری‌های نوین",
      en: "Founder · Musician, Inventor, Mystical Researcher & Technologist",
      sv: "Grundare · Musiker, uppfinnare, mystikforskare & teknolog",
    },
    badge: {
      fa: "بنیان‌گذار و پژوهشگر عرفانی",
      en: "Founder & Mystical Researcher",
      sv: "Grundare & Mystisk forskare",
    },
    focus: {
      fa: [
        "عرفان و آگاهی معنوی",
        "موسیقی و هنر قدسی",
        "فناوری اطلاعات و هوش مصنوعی",
        "نوآوری و آفرینش خلاق",
        "تحری حقیقت و حقوق برابر",
      ],
      en: [
        "Mysticism & Spiritual Consciousness",
        "Music & Sacred Art",
        "Information Technology & AI",
        "Invention & Creative Spirit",
        "Investigation of Truth & Equal Rights",
      ],
      sv: [
        "Mystik & andligt medvetande",
        "Musik & sakral konst",
        "Informationsteknologi & AI",
        "Uppfinningsrikedom & skaparkraft",
        "Sanningssökande & lika rättigheter",
      ],
    },
    categories: ["mysticism", "arts", "music", "science", "social"],
    bioShort: {
      fa: "بنیان‌گذار «روح بهائی»، فارغ‌التحصیل موسیقی، دارنده دو ثبت اختراع و پژوهشگر پیوند میان عرفان، هنر و فناوری‌های نوین.",
      en: "Founder of Bahá’í Soul, music graduate, holder of two registered patents, and explorer of the bridge between mysticism, art, and modern technology.",
      sv: "Grundare av Bahá’í Soul, utbildad musiker, innehavare av två registrerade patent och utforskare av bron mellan mystik, konst och modern teknologi.",
    },
    bio: {
      fa: `آرش ممدوح، بنیان‌گذار معبد مجازی «روح بهائی»، مسیر زندگی خود را از همان دوران کودکی با کنجکاوی بی‌پایان نسبت به کشف رازهای هستی، ساختن ایده‌های نو و پرسش‌هایی فراتر از ظاهر جهان آغاز کرد. او تحصیلات متوسطه خود را در دبیرستان ماندگار «البرز» تهران به پایان رساند؛ محیطی که روحیه پرسشگری، پژوهش علمی و ژرف‌اندیشی را در او پرورش داد و پس از آن با دنبال کردن عشق دیرینه‌اش به هنر، در رشته موسیقی فارغ‌التحصیل شد.

ذهن کاوشگر و خلاق او همواره در پی پیوند دادن دنیای هنر، علم و فناوری بوده است؛ مسیری که به ثبت دو اختراع (Patent) و فعالیت گسترده در حوزه فناوری اطلاعات (IT) و طراحی سامانه‌های دیجیتال نوین انجامید. از سال‌های کودکی، تجربه‌های درونی، شهودهای معنوی و نشانه‌هایی ذهنی او را به سوی درک معنای پنهان زندگی سوق می‌داد—پرسش‌هایی که در گذر زمان همچون قطعات یک پازل در ذهن او شکل می‌گرفتند. در اکتبر ۲۰۱۷ به سوئد مهاجرت کرد و مسیر زندگی و خدمت خود را در این سرزمین ادامه داد.

در سال‌های بعد، مطالعه و تأمل در آثار و تعالیم حضرت بهاءالله و حضرت عبدالبهاء برای او نقطه‌ی عطفی بود که بسیاری از آن پرسش‌ها و دریافت‌های درونی سال‌های کودکی را معنا بخشید و هماهنگی شگفت‌انگیزی میان عقلانیت علمی، روح خلاق انسانی و عرفان الهی پیش روی او گشود. این هم‌نوایی، انگیزه اصلی او برای پذیرش آیین بهائی و وقف دانش فنی و هنری‌اش در راه ساخت فضاهای معنوی شد.

آرش به «روح خلاق» در وجود هر انسان باور دارد و معتقد است که حقیقت تنها در سایه آزادی اندیشه، آزادی بیان و گفت‌وگوی صادقانه شکوفا می‌شود. دغدغه همیشگی او پاسداشت کرامت انسانی، حقوق برابر برای همگان و ایستادگی آگاهانه و مسالمت‌آمیز در برابر بی‌عدالتی از طریق آگاهی‌بخشی و خلق ابزارهای نوین روشنگری است.`,
      en: `Arash Mamdouh, Founder of the Bahá’í Soul Virtual Temple, began his journey in early childhood with an insatiable curiosity to uncover the hidden mysteries of existence, invent new solutions, and ask questions beyond the surface of the material world. He completed his secondary education at the historic Alborz High School in Tehran—an environment that nurtured scientific rigor and deep inquiry—and later followed his lifelong devotion to sound and harmony by earning a degree in Music.

Driven by an inventive mind and a deep passion for Information Technology (IT) and building novel digital experiences, Arash has continuously bridged art, engineering, and spiritual philosophy—a creative path reflected in his two registered patents and innovative technical work. From a young age, inner reflections, intuitive experiences, and subtle spiritual signs guided him toward seeking life's deeper meaning, gradually forming like pieces of an unfolding puzzle. In October 2017 he immigrated to Sweden, where he has continued his life of inquiry, creation, and service.

Encountering and studying the Writings of Bahá’u’lláh and ‘Abdu’l-Bahá became a defining turning point that unlocked those lifelong inquiries, revealing a profound harmony between scientific reason, the creative human spirit, and divine mysticism. This resonance inspired him to embrace the Bahá’í Faith and dedicate his technical and artistic gifts to building sanctuaries of contemplation.

Guided by faith in the Creative Spirit within every human being and the conviction that truth flourishes through freedom of conscience and expression, Arash is deeply committed to human dignity, equal rights, and peaceful enlightenment—creating Bahá’í Soul as a tranquil space where independent seekers can discover truth with their own eyes.`,
      sv: `Arash Mamdouh, grundare av Bahá’í Soul, påbörjade sin resa redan i barndomen med en outtröttlig nyfikenhet att utforska tillvarons dolda dimensioner, uppfinna nya lösningar och söka svar bortom den materiella ytan. Han genomförde sin gymnasieutbildning vid det anrika Alborz-gymnasiet i Teheran – en miljö som formade hans vetenskapliga nyfikenhet och djupsinne – och följde därefter sin livslånga kärlek till tonkonsten genom att ta examen i musik.

Med ett uppfinningsrikt sinne och en stark passion för informationsteknologi (IT) och digitalt skapande har Arash ständigt förenat konst, teknik och andlig filosofi – en skapande bana som bland annat resulterat i två registrerade patent. Redan från unga år ledde inre reflektioner, intuition och andliga tecken honom mot att söka livets djupare sammanhang, likt bitar i ett pussel som långsamt föll på plats. I oktober 2017 invandrade han till Sverige, där han fortsatt sitt liv av sökande, skapande och tjänst.

Mötet med Bahá’u’lláhs och ‘Abdu’l-Bahás skrifter blev en avgörande vändpunkt som gav svar på barndomens frågor och visade på en djup harmoni mellan förnuft, mänsklig skaparkraft och gudomlig mystik. Denna insikt ledde honom till bahá’í-tron och inspirerade honom att förena sin tekniska och musikaliska bakgrund i skapandet av denna digitala fristad.

Med en stark tro på den skapande anden i varje människa och övertygelsen att sanningen blomstrar genom tanke- och yttrandefrihet engagerar sig Arash för mänsklig värdighet, lika rättigheter och fredligt upplysningsarbete.`,
    },
    portrait: "/images/scholars/founder.jpg",
    featuredQuote: {
      fa: "آگاهی آغازِ بیداری روح است و آفرینشِ خلاق، زبانِ زنده خداوندی در وجود انسان.",
      en: "Consciousness is the dawn of the soul’s awakening, and creative invention is the living language of the Divine within humanity.",
      sv: "Medvetenhet är gryningen för själens uppvaknande, och kreativt skapande är det gudomligas levande språk inom människan.",
    },
    selectedWorks: [
      {
        id: "education",
        title: {
          fa: "تحصیلات",
          en: "Education",
          sv: "Utbildning",
        },
        body: {
          fa: "دبیرستان البرز تهران و فارغ‌التحصیل رشته موسیقی.",
          en: "Alborz High School (Tehran) & Bachelor’s Degree in Music.",
          sv: "Alborz-gymnasiet (Teheran) & examen i musik.",
        },
      },
      {
        id: "patents",
        title: {
          fa: "اختراع و ثبت پتنت",
          en: "Invention & Patents",
          sv: "Uppfinning & patent",
        },
        body: {
          fa: "دارنده ۲ ثبت اختراع؛ شورِ کشف و مهندسی در خدمت آفرینش.",
          en: "Holder of 2 registered patents—driven by a lifelong passion for discovery and engineering.",
          sv: "Innehavare av 2 registrerade patent — driven av livslång nyfikenhet och ingenjörskonst.",
        },
      },
      {
        id: "bahaisoul",
        title: {
          fa: "معماری دیجیتال و IT",
          en: "Digital Architecture & IT",
          sv: "Digital arkitektur & IT",
        },
        body: {
          fa: "خالق و معمار «روح بهائی» (bahaisoul.com)—پیوند هندسهٔ مقدس، تأمل تعاملی و فناوری وب.",
          en: "Creator & architect of Bahá’í Soul (bahaisoul.com)—uniting sacred geometry, interactive contemplation, and modern web technology.",
          sv: "Skapare och arkitekt av Bahá’í Soul (bahaisoul.com) — förenar helig geometri, interaktiv kontemplation och modern webbteknik.",
        },
      },
      {
        id: "philosophy",
        title: {
          fa: "فلسفهٔ بنیادین",
          en: "Core Philosophy",
          sv: "Kärnfilosofi",
        },
        body: {
          fa: "تحری حقیقت، روح خلاق، حقوق برابر انسان‌ها و آزادی وجدان.",
          en: "Independent investigation of truth, the Creative Spirit, equal human rights, and freedom of conscience.",
          sv: "Självständig sanningssökning, den skapande anden, lika mänskliga rättigheter och samvetsfrihet.",
        },
      },
    ],
    milestones: [
      {
        year: "Alborz",
        title: {
          en: "Alborz High School",
          sv: "Alborz-gymnasiet",
          fa: "دبیرستان البرز",
        },
        body: {
          en: "Historic Tehran schooling that forged inquiry, rigor, and depth.",
          sv: "Anrik utbildning i Teheran som formade nyfikenhet, stringens och djup.",
          fa: "آموزش ماندگار تهران که پرسشگری، دقت و ژرفا را پرورد.",
        },
      },
      {
        year: "Music",
        title: {
          en: "Degree in Music",
          sv: "Examen i musik",
          fa: "فارغ‌التحصیلی موسیقی",
        },
        body: {
          en: "Lifelong devotion to sound and harmony as sacred language.",
          sv: "Livslång hängivenhet till ton och harmoni som heligt språk.",
          fa: "عشق دیرینه به صدا و هماهنگی چون زبان قدسی.",
        },
      },
      {
        year: "Patents",
        title: {
          en: "Two Registered Patents",
          sv: "Två registrerade patent",
          fa: "دو ثبت اختراع",
        },
        body: {
          en: "Invention bridging engineering ingenuity and creative spirit.",
          sv: "Uppfinningar som förenar ingenjörskonst och skaparkraft.",
          fa: "اختراع در پیوند نبوغ مهندسی و روح خلاق.",
        },
      },
      {
        year: "Oct 2017",
        title: {
          en: "Immigration to Sweden",
          sv: "Invandring till Sverige",
          fa: "مهاجرت به سوئد",
        },
        body: {
          en: "Began a new chapter of life, creation, and service in Sweden.",
          sv: "Påbörjade ett nytt kapitel av liv, skapande och tjänst i Sverige.",
          fa: "آغاز فصلی نو از زندگی، آفرینش و خدمت در سوئد.",
        },
      },
      {
        year: "Founding",
        title: {
          en: "Bahá’í Soul",
          sv: "Bahá’í Soul",
          fa: "روح بهائی",
        },
        body: {
          en: "A digital sanctuary where seekers discover truth with their own eyes.",
          sv: "En digital fristad där sökare upptäcker sanningen med egna ögon.",
          fa: "حرمگاهی دیجیتال تا جویندگان حقیقت را با چشم خویش بیابند.",
        },
      },
    ],
    articles: [
      {
        id: "mysticism-door",
        title: {
          en: "On Mystical Wayfaring",
          sv: "Om mystiskt sökande",
          fa: "دربارهٔ سیر و سلوک عرفانی",
        },
        doorSlug: "mysticism",
        href: "/doors/mysticism",
      },
      {
        id: "scholars-door",
        title: {
          en: "Scholarship without Clergy",
          sv: "Lärdom utan prästerskap",
          fa: "پژوهش در آیینی بی‌روحانیون",
        },
        doorSlug: "scholars",
        href: "/scholars",
      },
      {
        id: "arts-door",
        title: {
          en: "Creative Spirit & Sacred Art",
          sv: "Skapande ande & sakral konst",
          fa: "روح خلاق و هنر قدسی",
        },
        doorSlug: "arts",
        href: "/doors/arts",
      },
    ],
  },
  {
    slug: "shoja-gheshmi",
    kind: "steward",
    stewardSeat: 2,
    active: true,
    isFeatured: true,
    name: {
      fa: "شجاع‌الدین اشعری قشمی (شجاع)",
      en: "Shojaeddin Ashari Gheshmi (Shoja)",
      sv: "Shojaeddin Ashari Gheshmi (Shoja)",
    },
    role: {
      fa: "امین معبد · هنرمند برجسته، سازنده سازهای اصیل و پژوهشگر عرفان، نجوم و علوم باطنی",
      en: "Temple Steward · Master Musician, Luthier & Scholar of Mysticism, Esoteric Sciences & Astrology",
      sv: "Tempelväktare · Mästerlig musiker, instrumentmakare & forskare inom mystik, esoterisk visdom och astrologi",
    },
    badge: {
      fa: "امین برجسته و هنرمند عارف",
      en: "Featured Steward & Master Artist",
      sv: "Framstående väktare & mästerkonstnär",
    },
    pressBadge: {
      fa: "پیام صلح و آشتی در رسانه‌های سوئد · Nerikes Allehanda",
      en: "Peace & reconciliation acclaimed in Swedish media · Nerikes Allehanda",
      sv: "Budskap om fred & försoning i svensk media · Nerikes Allehanda",
    },
    focus: {
      fa: [
        "عرفان و ماوراءالطبیعه",
        "نجوم و ستاره‌شناسی معنوی",
        "علوم غریبه و اسرار باطنی",
        "موسیقی قدسی و سازسازی (عود)",
        "صلح، آشتی و کرامت انسانی",
      ],
      en: [
        "Mysticism & Metaphysics",
        "Celestial Astrology",
        "Classical Esoteric Sciences",
        "Sacred Music & Oud Craftsmanship",
        "Reconciliation & Human Dignity",
      ],
      sv: [
        "Mystik & metafysik",
        "Himmelsk astrologi",
        "Klassisk esoterisk visdom",
        "Sakral musik & oud-hantverk",
        "Försoning & mänsklig värdighet",
      ],
    },
    categories: ["mysticism", "arts", "music", "social"],
    bioShort: {
      fa: "هنرمند برجسته، استاد ساخت سازهای اصیل و پژوهشگر عمیق در حوزه عرفان، نجوم و علوم باطنی؛ صدای صلح، بخشش و نور ستارگان در تاریک‌ترین لحظات.",
      en: "Renowned musician, master luthier, and deep scholar of mysticism, astrology, and esoteric wisdom—a poetic voice of reconciliation and starlight in times of darkness.",
      sv: "Framstående musiker, instrumentmakare och djup kännare av mystik, astrologi och esoterisk visdom – en poetisk röst för försoning och stjärnljus i mörka tider.",
    },
    bio: {
      fa: `شجاع‌الدین اشعری قشمی (شجاع)، زاده و بالیده جزیره اسرارآمیز قشم در خلیج فارس، هنرمندی برجسته، سازنده چیره‌دست سازهای اصیل همچون «عود» و پژوهشگری ژرف‌نگر در حوزه‌های عرفان، ماوراءالطبیعه، نجوم و علوم غریبه است. او از همان دوران کودکی در شب‌های پرستاره جنوب ایران، شیفته اسرار آسمان، نظم کیهانی و پیوند میان نغمه‌های موسیقی و عوالم روحانی بود.

شجاع سال‌ها با دستان هنرمند خود در کارگاه سازسازی به چوب جان بخشید و موسیقی را نه صرفاً به عنوان هنر، بلکه به مثابه نردبانی برای عروج روح و زبان مشترک دل‌ها دنبال کرد. پس از مهاجرت به سوئد و سکونت در شهر اوربرو (Örebro)، او در فوریه ۲۰۲۵ از حادثه تلخ تیراندازی در مدرسه «کمپوس ریسبرگسکا» جان سالم به در برد؛ تجربه‌ای عمیق که او را نه به سوی خشم، بلکه به سوی خلق قطعه موسیقی جاودانه «ستارگان قطبی» (Polstjärnor) برای یادبود قربانیان و نگارش نامه‌های شاعرانه و الهام‌بخش درباره صلح، همبستگی و بخشش به پادشاه سوئد، نخست‌وزیر و نهادهای مدنی سوق داد.

به باور او، هر قدر هم که شبِ زندگی تاریک باشد، ستارگان همواره راه را به انسان نشان می‌دهند و نور روح انسانی فراتر از ویرانی‌ها باقی می‌ماند. حضور او در جمع امینان معبد مجازی «روح بهائی»، پیوندی زنده میان هنر قدسی، حکمت نجومی و عرفان عملی است.`,
      en: `Born and raised on the mystical island of Qeshm in the Persian Gulf, Shojaeddin Ashari Gheshmi (Shoja) is an acclaimed musician, master luthier of traditional instruments such as the oud, and a profound scholar of mysticism, metaphysics, celestial astrology, and classical esoteric sciences. Since childhood beneath the star-filled skies of southern Iran, he has been captivated by the hidden architecture of the cosmos and the bridge between sacred sound and the spiritual realms.

For years in his own workshop, Shoja breathed soul into wood through instrument-making, approaching music not merely as performance, but as a ladder for the ascent of the soul. After relocating to Örebro, Sweden, he survived the tragic February 2025 attack at Campus Risbergska—an ordeal he transformed into a message of healing by composing the poignant piano piece 'Polstjärnor' (North Stars) in honor of the victims, and writing poetic letters of gratitude, dignity, and societal reconciliation to the King and Queen of Sweden, the Prime Minister, and local clergy.

As Shoja reflects, no matter how dark life becomes, the stars always illuminate a path for humanity, and the light of the soul endures beyond earthly sorrow. As a Steward of Bahá’í Soul, he brings together sacred artistry, astronomical wisdom, and lived spiritual resilience.`,
      sv: `Född och uppvuxen på den mytomspunna ön Qeshm i Persiska viken är Shojaeddin Ashari Gheshmi (Shoja) en framstående musiker, mästerlig instrumentmakare av bland annat oud, och en djup kännare av mystik, metafysik, astrologi och klassisk esoterisk visdom. Redan som barn under södra Irans stjärnhimmel fascinerades han av universums dolda ordning och sambandet mellan musikens klanger och själens världar.

I sin egen verkstad gav Shoja under många år liv åt trä genom sitt hantverk, där musiken för honom alltid varit en stege för själens upphöjelse. Efter flytten till Örebro överlevde han den tragiska skolattacken på Campus Risbergska i februari 2025 – en prövning han mötte genom att komponera det vemodiga pianostycket ”Polstjärnor” till minne av offren samt skriva poetiska brev om försoning, medmänsklighet och respekt till kungaparet, statsministern och kyrkan.

Som Shoja själv uttrycker det lyser stjärnorna alltid upp en väg för människan hur mörkt livet än är, och själens ljus består. Som en av tempelväktarna på Bahá’í Soul förenar han sakral konst, kosmisk visdom och levande försoning.`,
    },
    portrait: "/images/scholars/shoja.jpg",
    featuredQuote: {
      fa: "هر قدر هم که زندگی تاریک باشد، ستارگان همواره راهی برای انسان روشن می‌کنند؛ ما می‌مانیم و حضور عزیزانمان را در قلب‌هایمان حس می‌کنیم.",
      en: "No matter how dark life is, the stars always light up a path for humanity; we remain, and we still feel their presence in our hearts.",
      sv: "Hur mörkt livet än är så lyser alltid stjärnorna upp en väg för människan; vi är kvar, men vi känner ändå deras närvaro i våra hjärtan.",
    },
    selectedWorks: [
      {
        id: "polstjarnor",
        title: {
          fa: "ستارگان قطبی (Polstjärnor)",
          en: "Polstjärnor (North Stars)",
          sv: "Polstjärnor",
        },
        body: {
          fa: "قطعهٔ پیانو؛ ادای احترام به نور، خاطره و پیوستگی روحانی.",
          en: "Piano tribute dedicated to light, memory, and spiritual continuity.",
          sv: "Pianohybrid tillägnad ljus, minne och andlig kontinuitet.",
        },
      },
      {
        id: "oud-craft",
        title: {
          fa: "سازسازی قدسی — عود",
          en: "Sacred Craftsmanship — Oud",
          sv: "Sakral hantverkskonst — oud",
        },
        body: {
          fa: "ساخت دستی عود و سازهای آکوستیک سنتی با روح چوب و نغمه.",
          en: "Handcrafted traditional oud lutes and acoustic instruments.",
          sv: "Handgjorda traditionella oud-lutar och akustiska instrument.",
        },
      },
      {
        id: "letters",
        title: {
          fa: "نامه‌های مدنی و روحانی",
          en: "Civic & Spiritual Letters",
          sv: "Medborgerliga & andliga brev",
        },
        body: {
          fa: "نامه‌هایی دربارهٔ کرامت انسانی، آشتی و وحدت خطاب به دربار سلطنتی سوئد، نخست‌وزیر و Nikolaikyrkan در اوربرو.",
          en: "Letters on human dignity, reconciliation, and unity to the Swedish Royal Court, Prime Minister, and Nikolaikyrkan in Örebro.",
          sv: "Brev om mänsklig värdighet, försoning och enhet till kungahuset, statsministern och Nikolaikyrkan i Örebro.",
        },
      },
      {
        id: "esoteric",
        title: {
          fa: "پژوهش عرفانی و نجومی",
          en: "Esoteric & Astrological Research",
          sv: "Esoterisk & astrologisk forskning",
        },
        body: {
          fa: "مطالعات دربارهٔ هماهنگی کیهانی، متافیزیک و نمادشناسی عرفانی.",
          en: "Studies on celestial harmony, metaphysics, and mystical symbolism.",
          sv: "Studier om kosmisk harmoni, metafysik och mystisk symbolik.",
        },
      },
    ],
    milestones: [
      {
        year: "Qeshm",
        title: {
          en: "Island of Stars",
          sv: "Stjärnornas ö",
          fa: "جزیرهٔ ستارگان",
        },
        body: {
          en: "Childhood beneath southern Iran’s night sky—music and cosmos as one inquiry.",
          sv: "Barndom under södra Irans natthimmel — musik och kosmos som en enda fråga.",
          fa: "کودکی زیر آسمان شب جنوب ایران—موسیقی و کیهان چون یک پرسش.",
        },
      },
      {
        year: "Workshop",
        title: {
          en: "Breathing Soul into Wood",
          sv: "Att ge trä en själ",
          fa: "جان بخشیدن به چوب",
        },
        body: {
          en: "Years as a master luthier—oud craftsmanship as sacred service.",
          sv: "År som mästerlig instrumentmakare — oud-hantverk som helig tjänst.",
          fa: "سال‌ها سازسازی عود به‌مثابهٔ خدمت قدسی.",
        },
      },
      {
        year: "2025",
        title: {
          en: "Polstjärnor & Letters of Light",
          sv: "Polstjärnor & ljusets brev",
          fa: "ستارگان قطبی و نامه‌های نور",
        },
        body: {
          en: "From survival at Campus Risbergska to music and reconciliation for Sweden.",
          sv: "Från överlevnad på Campus Risbergska till musik och försoning för Sverige.",
          fa: "از نجات در کمپوس ریسبرگسکا تا موسیقی و آشتی برای سوئد.",
        },
      },
    ],
    articles: [
      {
        id: "arts-door",
        title: {
          en: "Sacred Sound & the Soul’s Ladder",
          sv: "Sakral klang & själens stege",
          fa: "نغمهٔ قدسی و نردبان روح",
        },
        doorSlug: "arts",
        href: "/doors/arts",
      },
      {
        id: "mysticism-door",
        title: {
          en: "Stars, Silence & Metaphysics",
          sv: "Stjärnor, tystnad & metafysik",
          fa: "ستارگان، سکوت و ماوراء",
        },
        doorSlug: "mysticism",
        href: "/doors/mysticism",
      },
    ],
  },
  ...stewardFocus.map(
    (s): ScholarPerson => ({
      slug: s.slug,
      kind: "steward",
      stewardSeat: s.seat,
      active: false,
      comingSoon: true,
      name: { en: s.nameEn, sv: s.nameSv, fa: s.nameFa },
      role: {
        en: "Temple Steward — Seat Reserved",
        sv: "Tempelförvaltare — plats reserverad",
        fa: "امین معبد — جایگاه محفوظ",
      },
      badge: {
        en: "Steward Seat Available",
        sv: "Förvaltarsäte ledigt",
        fa: "جایگاه امین معبد",
      },
      focus: s.focus,
      categories: s.categories,
      bioShort: {
        en: "Profile coming soon — a steward seat for the Virtual Temple’s ninefold circle.",
        sv: "Profil kommer snart — en förvaltarplats i templets niofaldiga cirkel.",
        fa: "در حال تکمیل رزومه — جایگاه امین در حلقهٔ نُه‌گانهٔ معبد مجازی.",
      },
      bio: {
        en: "This steward seat is reserved for a dedicated caretaker of the Virtual Temple. Full biography and service record will appear here once the seat is filled.",
        sv: "Denna förvaltarplats är reserverad för en hängiven vårdare av det virtuella templet. Full biografi publiceras när platsen tillsätts.",
        fa: "این جایگاه امین برای نگاهبان متعهد معبد مجازی محفوظ است. بیوگرافی کامل پس از تکمیل جایگاه در اینجا خواهد آمد.",
      },
      avatarHue: s.hue,
      milestones: [],
      articles: [],
    })
  ),
];

export const researchers: ScholarPerson[] = [
  {
    slug: "leyla-rostami",
    kind: "researcher",
    active: true,
    name: {
      en: "Leyla Rostami",
      sv: "Leyla Rostami",
      fa: "لیلا رستمی",
    },
    role: {
      en: "Scholar of Mysticism & the Seven Valleys",
      sv: "Forskare i mystik & De sju dalarna",
      fa: "پژوهشگر عرفان و هفت وادی",
    },
    focus: {
      en: ["Seven Valleys", "Persian Mystical Literature", "Spiritual Psychology"],
      sv: ["De sju dalarna", "Persisk mystiklitteratur", "Andlig psykologi"],
      fa: ["هفت وادی", "ادبیات عرفانی فارسی", "روان‌شناسی معنوی"],
    },
    categories: ["mysticism"],
    bioShort: {
      en: "Explores mystical texts as living maps of the soul’s journey.",
      sv: "Utforskar mystiska texter som levande kartor över själens resa.",
      fa: "آثار عرفانی را چون نقشه‌های زندهٔ سفر روح می‌کاود.",
    },
    bio: {
      en: "Leyla’s research traces the Seven Valleys as a contemporary path of spiritual psychology—bridging classical Persian mysticism with the Bahá’í revelation. She writes for seekers who wish to walk the valleys with both heart and intellect.",
      sv: "Leylas forskning följer De sju dalarna som en samtida väg i andlig psykologi — från klassisk persisk mystik till bahá’í-uppenbarelsen. Hon skriver för sökare som vill vandra med både hjärta och intellekt.",
      fa: "پژوهش لیلا هفت وادی را چون مسیر معاصر روان‌شناسی معنوی می‌بیند—پلی میان عرفان کلاسیک فارسی و وحی بهائی. او برای جویندگانی می‌نویسد که می‌خواهند با قلب و خرد در وادی‌ها گام بردارند.",
    },
    avatarHue: 42,
    articles: [
      {
        id: "valleys",
        title: {
          en: "Walking the Seven Valleys Today",
          sv: "Att vandra De sju dalarna idag",
          fa: "پیمودن هفت وادی امروز",
        },
        doorSlug: "mysticism",
        href: "/doors/mysticism",
      },
    ],
    milestones: [
      {
        title: {
          en: "Thesis on the Valleys",
          sv: "Avhandling om dalarna",
          fa: "رساله دربارهٔ وادی‌ها",
        },
        body: {
          en: "Comparative reading of Attar and Bahá’u’lláh’s Seven Valleys.",
          sv: "Jämförande läsning av Attar och Bahá’u’lláhs De sju dalarna.",
          fa: "خوانش تطبیقی عطار و هفت وادی حضرت بهاءالله.",
        },
      },
    ],
  },
  {
    slug: "daniel-okafor",
    kind: "researcher",
    active: true,
    name: {
      en: "Daniel Okafor",
      sv: "Daniel Okafor",
      fa: "دانیل اوکافور",
    },
    role: {
      en: "Science, Religion & Public Discourse",
      sv: "Vetenskap, religion & offentligt samtal",
      fa: "علم، دین و گفت‌وگوی عمومی",
    },
    focus: {
      en: ["Harmony of Science & Religion", "Ethics of Technology", "Education"],
      sv: ["Vetenskap & religions harmoni", "Tekniketik", "Utbildning"],
      fa: ["هماهنگی علم و دین", "اخلاق فناوری", "آموزش"],
    },
    categories: ["science", "education"],
    bioShort: {
      en: "Bridges laboratory reason with revelatory insight for a shared public good.",
      sv: "Bygger broar mellan laboratoriets förnuft och uppenbarelsens insikt.",
      fa: "خرد آزمایشگاهی را با بصیرت وحی برای خیر عمومی پیوند می‌دهد.",
    },
    bio: {
      en: "Daniel writes on how scientific literacy and spiritual principles can inform ethical technology, climate responsibility, and education without forcing a false conflict between reason and faith.",
      sv: "Daniel skriver om hur vetenskaplig bildning och andliga principer kan forma etisk teknik, klimatansvar och utbildning utan falsk konflikt mellan förnuft och tro.",
      fa: "دانیل دربارهٔ این می‌نویسد که چگونه سواد علمی و اصول روحانی می‌توانند فناوری اخلاقی، مسئولیت اقلیمی و آموزش را بدون تعارض ساختگی میان عقل و ایمان شکل دهند.",
    },
    avatarHue: 198,
    articles: [
      {
        id: "science-door",
        title: {
          en: "No Conflict: Science Beside Revelation",
          sv: "Ingen konflikt: vetenskap bredvid uppenbarelse",
          fa: "بی‌تعارض: علم در کنار وحی",
        },
        doorSlug: "science-religion",
        href: "/doors/science-religion",
      },
    ],
  },
  {
    slug: "sara-nielsen",
    kind: "researcher",
    active: true,
    name: {
      en: "Sara Nielsen",
      sv: "Sara Nielsen",
      fa: "سارا نیلسن",
    },
    role: {
      en: "Social Transformation & Community Building",
      sv: "Social förvandling & samhällsbyggande",
      fa: "تحول اجتماعی و جامعه‌سازی",
    },
    focus: {
      en: ["Grassroots Action", "Gender Equality", "Consultative Culture"],
      sv: ["Gräsrotsarbete", "Jämställdhet", "Rådgivande kultur"],
      fa: ["عمل محلی", "برابری جنسیتی", "فرهنگ مشورت"],
    },
    categories: ["social", "family"],
    bioShort: {
      en: "Studies how consultation and equality reshape neighborhoods from within.",
      sv: "Studerar hur rådslag och jämlikhet omformar grannskap inifrån.",
      fa: "می‌کاود که مشورت و برابری چگونه محله‌ها را از درون دگرگون می‌کنند.",
    },
    bio: {
      en: "Sara documents community-building processes inspired by Bahá’í principles—especially how shared decision-making and the equality of women and men become practical habits of culture.",
      sv: "Sara dokumenterar samhällsbyggande processer inspirerade av bahá’í-principer — särskilt hur gemensamt beslutsfattande och jämställdhet blir praktiska kulturvanor.",
      fa: "سارا فرآیندهای جامعه‌سازی الهام‌گرفته از اصول بهائی را مستند می‌کند—به‌ویژه اینکه تصمیم‌گیری مشترک و برابری زن و مرد چگونه به عادت‌های عملی فرهنگ بدل می‌شوند.",
    },
    avatarHue: 160,
    articles: [
      {
        id: "community-door",
        title: {
          en: "Consultation as a Civic Virtue",
          sv: "Rådslag som medborgerlig dygd",
          fa: "مشورت به‌مثابهٔ فضیلت مدنی",
        },
        doorSlug: "society",
        href: "/doors/society",
      },
    ],
  },
  {
    slug: "mina-farahani",
    kind: "researcher",
    active: true,
    name: {
      en: "Mina Farahani",
      sv: "Mina Farahani",
      fa: "مینا فراهانی",
    },
    role: {
      en: "Sacred Arts & Contemplative Practice",
      sv: "Helig konst & kontemplativ praktik",
      fa: "هنر مقدس و ممارست تأملی",
    },
    focus: {
      en: ["Visual Devotion", "Temple Architecture", "Creative Worship"],
      sv: ["Visuell andakt", "Tempelarkitektur", "Kreativ tillbedjan"],
      fa: ["نیایش بصری", "معماری معبد", "عبادت خلاق"],
    },
    categories: ["arts"],
    bioShort: {
      en: "Sees art as a door of worship—form, light, and silence in service of the soul.",
      sv: "Ser konst som en tillbedjansdörr — form, ljus och tystnad i själens tjänst.",
      fa: "هنر را دری به عبادت می‌بیند—فرم، نور و سکوت در خدمت روح.",
    },
    bio: {
      en: "Mina’s essays connect Bahá’í Houses of Worship, calligraphy, and contemporary sacred art as companions to prayer—never spectacle, always invitation.",
      sv: "Minas essäer länkar bahá’í tillbedjanshus, kalligrafi och samtida helig konst som följeslagare till bön — aldrig spektakel, alltid inbjudan.",
      fa: "مقالات مینا مشرق‌الاذکارها، خوشنویسی و هنر مقدس معاصر را چون همراهان دعا می‌بیند—نه نمایش، بلکه دعوت.",
    },
    avatarHue: 300,
    articles: [
      {
        id: "arts-door",
        title: {
          en: "When Architecture Becomes Prayer",
          sv: "När arkitektur blir bön",
          fa: "وقتی معماری دعا می‌شود",
        },
        doorSlug: "arts",
        href: "/doors/arts",
      },
      {
        id: "gallery",
        title: {
          en: "Temples Across Continents",
          sv: "Tempel över kontinenter",
          fa: "معابد در قاره‌ها",
        },
        href: "/gallery",
      },
    ],
  },
  {
    slug: "jonas-berg",
    kind: "researcher",
    active: true,
    name: {
      en: "Jonas Berg",
      sv: "Jonas Berg",
      fa: "یوناس برگ",
    },
    role: {
      en: "Family Life & Moral Education",
      sv: "Familjeliv & moralisk fostran",
      fa: "زندگی خانوادگی و تربیت اخلاقی",
    },
    focus: {
      en: ["Parenting", "Virtues Education", "Home as Sanctuary"],
      sv: ["Föräldraskap", "Dygdutbildning", "Hemmet som helgedom"],
      fa: ["فرزندپروری", "تربیت فضائل", "خانه چون حرمگاه"],
    },
    categories: ["family", "education"],
    bioShort: {
      en: "Writes for parents cultivating homes of prayer, learning, and kindness.",
      sv: "Skriver för föräldrar som odlar hem av bön, lärande och vänlighet.",
      fa: "برای والدینی می‌نویسد که خانه‌هایی از دعا، آموختن و مهربانی می‌سازند.",
    },
    bio: {
      en: "Jonas focuses on the family as the first community of practice—where the investigation of truth, courtesy, and service begin in everyday rhythms.",
      sv: "Jonas fokuserar på familjen som den första praktikgemenskapen — där sanningssökande, artighet och tjänst börjar i vardagens rytmer.",
      fa: "تمرکز یوناس بر خانواده به‌عنوان نخستین جامعهٔ عمل است—جایی که تحری حقیقت، ادب و خدمت در ریتم روزانه آغاز می‌شود.",
    },
    avatarHue: 25,
    articles: [
      {
        id: "family-door",
        title: {
          en: "The Home as a Small Temple",
          sv: "Hemmet som ett litet tempel",
          fa: "خانه چون معبدی کوچک",
        },
        doorSlug: "family",
        href: "/doors/family",
      },
    ],
  },
];

export const allScholars: ScholarPerson[] = [...stewards, ...researchers];

export function getScholarBySlug(slug: string): ScholarPerson | undefined {
  return allScholars.find((s) => s.slug === slug);
}

export function getResearchersByCategory(
  category: ScholarCategory | "all"
): ScholarPerson[] {
  if (category === "all") return researchers;
  return researchers.filter((r) => r.categories.includes(category));
}
