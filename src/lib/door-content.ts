import type { DoorSlug } from "./doors";
import { HIDDEN_WORDS, type HiddenWord } from "./hidden-words";

export type DoorLocaleContent = {
  quote: string;
  citation: string;
  articleTitle: string;
  articleBody: string;
};

export type DoorChamber = {
  en: DoorLocaleContent;
  fa: DoorLocaleContent;
};

/** Exact Persian Hidden Word number for each door (Bahá’u’lláh, کلمات مکنونه). */
export const DOOR_HIDDEN_WORD: Record<DoorSlug, number> = {
  metaphysics: 2, // eternal nest / soul’s journey
  mysticism: 1, // mystic nightingale
  family: 29, // training, nurture, mother’s womb
  arts: 16, // mystic tongues / melody
  society: 54, // the poor are My trust
  "science-religion": 33, // seeds of divine wisdom & knowledge
  devotional: 32, // candle of the heart / remembrance
  scholars: 80, // trees bearing fruit — service & crafts
  "seekers-path": 9, // eye of truth / certainty
};

function hwByNumber(n: number): HiddenWord {
  const w = HIDDEN_WORDS.find((h) => h.number === n);
  if (!w) throw new Error(`Hidden Word Persian №${n} not found`);
  return w;
}

function citations(n: number) {
  return {
    en: `Bahá’u’lláh, The Hidden Words (Persian), №${n}`,
    fa: `حضرت بهاءالله، کلمات مکنونهٔ فارسی، شمارهٔ ${n}`,
  };
}

function quotePair(n: number): Pick<DoorLocaleContent, "quote" | "citation"> & {
  faQuote: string;
  faCitation: string;
} {
  const w = hwByNumber(n);
  const c = citations(n);
  return {
    quote: w.en,
    citation: c.en,
    faQuote: w.fa,
    faCitation: c.fa,
  };
}

const ARTICLES: Record<
  DoorSlug,
  { en: { title: string; body: string }; fa: { title: string; body: string } }
> = {
  metaphysics: {
    en: {
      title: "Beyond the Veil: The Architecture of the Spiritual Worlds",
      body: "In the Bahá’í Writings, physical existence is described as a brief embryonic stage compared to the vastness of the spiritual worlds of God. Just as an unborn child develops eyes and ears in the womb for a world it cannot yet comprehend, human beings cultivate spiritual virtues—love, detachment, justice, and wisdom—as wings for the soul's eternal ascent. Death is not extinction, nor is it a static end; rather, it is a birth into an infinite realm of consciousness (‘Álam-i-Malakút) where the soul continues to discover the boundless attributes of its Creator.",
    },
    fa: {
      title: "آن‌سوی پرده: هندسه عوالم روحانی و سفر جاودان روح",
      body: "در آثار بهائی، حیات جسمانی در مقایسه با وسعت عوالم روحانی الهی همچون دوران جنینی توصیف شده است. همان‌گونه که جنین در رحم مادر چشم و گوش را برای جهانی که هنوز درک نمی‌کند پرورش می‌دهد، انسان نیز در این عالم فضایل معنوی همچون عشق، انقطاع، عدالت و حکمت را به عنوان بال‌هایی برای پرواز ابدی روح می‌پروراند. مرگ نیستی یا پایان حرکت نیست؛ بلکه تولدی دوباره در اقلیم بی‌کران آگاهی (عالم ملکوت) است که در آن روح پیوسته به کشف صفات نامحدود خالق خویش ادامه می‌دهد.",
    },
  },
  mysticism: {
    en: {
      title: "The Wayfarer’s Map: Walking the Seven Valleys of the Soul",
      body: "Revealed by Bahá’u’lláh in Baghdad, The Seven Valleys (Haft-Vádí) traces the inner transformation of the mystic seeker across seven spiritual stations: Search, Love, Knowledge, Unity, Contentment, Wonderment, and True Poverty and Absolute Nothingness. Rather than asking the seeker to flee from the world into isolation, Bahá’u’lláh reveals that the true spiritual journey occurs within the chambers of the human heart—where ego dissolves into divine love and every atom of creation reflects the light of the Beloved.",
    },
    fa: {
      title: "نقشه راه سالک: سیر در هفت وادی عشق و معرفت",
      body: "کتاب «هفت وادی» که در بغداد از قلم حضرت بهاءالله نازل شد، مراحل تحول درونی سالک را در هفت منزل روحانی ترسیم می‌کند: وادی طلب، عشق، معرفت، توحید، استغنا، حیرت و فقر حقیقی و فنا. در این نگاه عرفانی، سالک برای یافتن حقیقت نیازی به گوشه‌نشینی و ترک دنیا ندارد؛ بلکه سفر حقیقی در اعماق قلب انسان رخ می‌دهد؛ جایی که «منِ» خودخواه در آتش عشق الهی ذوب می‌شود و هر ذره از هستی آیینه‌دار جمال محبوب می‌گردد.",
    },
  },
  family: {
    en: {
      title: "The Sacred Hearth: Raising Luminous Souls in a Fragmented Age",
      body: "Within the Bahá’í worldview, the family is a microcosm of human society—a sacred workshop where the habits of consultation, equality between women and men, and unconditional love are first practiced. Spiritual education is not merely the memorization of moral rules, but the awakening of a child’s innate nobility, treating every young soul as a mine rich in gems of inestimable value waiting to be polished through love and wisdom.",
    },
    fa: {
      title: "کانون مقدس: پرورش ارواح نورانی در عصر پراکندگی",
      body: "در جهان‌بینی بهائی، خانواده خُرده‌جهانی از جامعه انسانی است؛ کارگاهی مقدس که در آن مشورت، برابری زن و مرد، و عشق بی‌قید نخستین‌بار تمرین می‌شود. تربیت روحانی صرفاً حفظ قواعد اخلاقی نیست، بلکه بیدار کردن شرافت فطری کودک است؛ هر روح جوان چون معدنی سرشار از جواهر بی‌بها که با عشق و حکمت صیقل می‌یابد.",
    },
  },
  arts: {
    en: {
      title: "Sacred Beauty: Art as a Pathway of the Spirit",
      body: "In the Bahá’í vision, the arts are not ornaments of leisure but instruments of revelation—music, calligraphy, architecture, and story that lift the heart toward unity. When beauty is wedded to truth, culture itself becomes a form of worship, translating the ineffable into forms that every soul can approach.",
    },
    fa: {
      title: "زیبایی مقدس: هنر به‌مثابه راه روح",
      body: "در نگاه بهائی، هنر آرایهٔ تفنن نیست بلکه ابزار کشف است—موسیقی، خوشنویسی، معماری و روایت که قلب را به‌سوی وحدت برمی‌کشد. وقتی زیبایی با حقیقت پیوند می‌خورد، فرهنگ خود شکلی از عبادت می‌شود و آنچه ناگفتنی است را به صورتی درمی‌آورد که هر روحی بتواند نزدیک شود.",
    },
  },
  society: {
    en: {
      title: "Building the World Anew: Unity as a Social Principle",
      body: "Bahá’í social teaching begins with the oneness of humanity—not as sentiment, but as a structural principle for justice, governance, and peace. From the equality of women and men to the elimination of extremes of wealth and poverty, this door opens onto a civilization oriented toward consultation, trustworthiness, and the well-being of the whole.",
    },
    fa: {
      title: "ساختن جهان نو: وحدت به‌مثابه اصل اجتماعی",
      body: "تعالیم اجتماعی بهائی از وحدت نوع انسان آغاز می‌شود—نه به‌عنوان احساس، بلکه به‌عنوان اصل ساختاری عدالت، حکمرانی و صلح. از برابری زن و مرد تا رفع تضادهای ثروت و فقر، این دروازه به تمدنی می‌گشاید که بر مشورت، امانت و سعادت کل استوار است.",
    },
  },
  "science-religion": {
    en: {
      title: "Two Wings of One Flight: Harmony of Science and Faith",
      body: "Far from opposing one another, science and religion are portrayed in the Bahá’í Writings as complementary modes of knowing—reason and revelation in dialogue. When either wing is broken, ascent falters; when both are strong, civilization rises toward clarity, compassion, and material–spiritual balance.",
    },
    fa: {
      title: "دو بال یک پرواز: هماهنگی علم و دین",
      body: "در آثار بهائی، علم و دین نه رقیب که دو شیوهٔ مکمل معرفت‌اند—عقل و وحی در گفت‌وگو. هرگاه یکی از این دو بال شکسته باشد، عروج ناتمام می‌ماند؛ و چون هر دو نیرومند باشند، تمدن به‌سوی روشنی، شفقت و تعادل مادی–روحانی برمی‌خیزد.",
    },
  },
  devotional: {
    en: {
      title: "The Quiet Flame: Prayer as Presence",
      body: "Devotion in the Bahá’í sense is both solitude and gathering—private prayer that remakes the heart, and communal worship that remakes community. This door invites the seeker into still remembrance, sacred song, and the living practice of turning toward God amid the noise of the age.",
    },
    fa: {
      title: "شعلهٔ آرام: دعا به‌مثابه حضور",
      body: "عبادت در معنای بهائی هم خلوت است و هم جمع—دعای فردی که قلب را بازمی‌سازد و نیایش جمعی که جامعه را. این دروازه جوینده را به ذکر آرام، نغمهٔ مقدس و عمل زندهٔ توجه به خدا در میان هیاهوی عصر فرامی‌خواند.",
    },
  },
  scholars: {
    en: {
      title: "Lamps of Learning: Scholarship in a Clergy-Free Faith",
      body: "Without a clergy, the Bahá’í community relies on independent investigation and the humble service of scholars, historians, and educators. This door gathers resumes, talks, and research that bridge revelation and contemporary thought—never as authority over souls, but as companions on the path of understanding.",
    },
    fa: {
      title: "چراغ‌های دانایی: پژوهش در آیینی بی‌روحانیون",
      body: "بدون طبقهٔ روحانی، جامعهٔ بهائی بر تحری حقیقت و خدمت فروتنانهٔ پژوهشگران، مورخان و مربیان تکیه دارد. این دروازه رزومه، گفتار و تحقیقاتی را گرد می‌آورد که وحی را به اندیشهٔ معاصر پیوند می‌زند—نه به‌عنوان سلطه بر نفوس، بلکه به‌عنوان همراهانی در مسیر فهم.",
    },
  },
  "seekers-path": {
    en: {
      title: "A Guided Ascent: Study Paths for the Seeker",
      body: "The seeker’s path is deliberate: reading, reflection, conversation, and service woven into a rhythm of growth. This door offers guided study routes across the Nine Doors—starting places for those newly arriving at the Threshold and deepening tracks for those already walking in search of certitude.",
    },
    fa: {
      title: "عروج هدایت‌شده: مسیرهای مطالعه برای جوینده",
      body: "راه جوینده آگاهانه است: خواندن، تأمل، گفت‌وگو و خدمت در ریتمی از رشد. این دروازه مسیرهای مطالعهٔ هدایت‌شده در میان نُه در را پیش می‌نهد—نقاط آغاز برای تازه‌واردان به آستانه، و مسیرهای تعمیق برای آنان که در طلب یقین گام می‌زنند.",
    },
  },
};

function buildDoor(slug: DoorSlug): DoorChamber {
  const n = DOOR_HIDDEN_WORD[slug];
  const q = quotePair(n);
  const a = ARTICLES[slug];
  return {
    en: {
      quote: q.quote,
      citation: q.citation,
      articleTitle: a.en.title,
      articleBody: a.en.body,
    },
    fa: {
      quote: q.faQuote,
      citation: q.faCitation,
      articleTitle: a.fa.title,
      articleBody: a.fa.body,
    },
  };
}

export const DOOR_CONTENT: Record<DoorSlug, DoorChamber> = {
  metaphysics: buildDoor("metaphysics"),
  mysticism: buildDoor("mysticism"),
  family: buildDoor("family"),
  arts: buildDoor("arts"),
  society: buildDoor("society"),
  "science-religion": buildDoor("science-religion"),
  devotional: buildDoor("devotional"),
  scholars: buildDoor("scholars"),
  "seekers-path": buildDoor("seekers-path"),
};

export function getDoorContent(slug: string): DoorChamber | undefined {
  return DOOR_CONTENT[slug as DoorSlug];
}

/** Scholars directory opening Word — service, education, and fruit for others. */
export function getScholarsHiddenWord(): HiddenWord {
  return hwByNumber(DOOR_HIDDEN_WORD.scholars);
}
