import type { DoorSlug } from "./doors";

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

export const DOOR_CONTENT: Record<DoorSlug, DoorChamber> = {
  metaphysics: {
    en: {
      quote:
        "Know thou of a truth that the soul, after its separation from the body, will continue to progress until it attaineth the presence of God, in a state and condition which neither the revolution of ages and centuries, nor the changes and chances of this world, can alter.",
      citation:
        "Bahá’u’lláh, Gleanings from the Writings of Bahá’u’lláh, LXXXI",
      articleTitle: "Beyond the Veil: The Architecture of the Spiritual Worlds",
      articleBody:
        "In the Bahá’í Writings, physical existence is described as a brief embryonic stage compared to the vastness of the spiritual worlds of God. Just as an unborn child develops eyes and ears in the womb for a world it cannot yet comprehend, human beings cultivate spiritual virtues—love, detachment, justice, and wisdom—as wings for the soul's eternal ascent. Death is not extinction, nor is it a static end; rather, it is a birth into an infinite realm of consciousness (‘Álam-i-Malakút) where the soul continues to discover the boundless attributes of its Creator.",
    },
    fa: {
      quote:
        "بدان که روح بعد از صعود از بدن ترقی خواهد نمود تا به مقام حضور الهی فائز گردد در حالی و شأنی که انقلاب قرون و اعصار و تغییرات و تبدلات این عالم آن را تغییر ندهد.",
      citation: "حضرت بهاءالله، منتخباتی از آثار حضرت بهاءالله",
      articleTitle: "آن‌سوی پرده: هندسه عوالم روحانی و سفر جاودان روح",
      articleBody:
        "در آثار بهائی، حیات جسمانی در مقایسه با وسعت عوالم روحانی الهی همچون دوران جنینی توصیف شده است. همان‌گونه که جنین در رحم مادر چشم و گوش را برای جهانی که هنوز درک نمی‌کند پرورش می‌دهد، انسان نیز در این عالم فضایل معنوی همچون عشق، انقطاع، عدالت و حکمت را به عنوان بال‌هایی برای پرواز ابدی روح می‌پروراند. مرگ نیستی یا پایان حرکت نیست؛ بلکه تولدی دوباره در اقلیم بی‌کران آگاهی (عالم ملکوت) است که در آن روح پیوسته به کشف صفات نامحدود خالق خویش ادامه می‌دهد.",
    },
  },
  mysticism: {
    en: {
      quote:
        "O My Brother! Until thou enter the Egypt of love, thou shalt never come to the Joseph of the Beauty of the Friend; and until, like Jacob, thou forsake thine outward eyes, thou shalt never open the eye of thine inward being.",
      citation: "Bahá’u’lláh, The Seven Valleys",
      articleTitle: "The Wayfarer’s Map: Walking the Seven Valleys of the Soul",
      articleBody:
        "Revealed by Bahá’u’lláh in Baghdad, The Seven Valleys (Haft-Vádí) traces the inner transformation of the mystic seeker across seven spiritual stations: Search, Love, Knowledge, Unity, Contentment, Wonderment, and True Poverty and Absolute Nothingness. Rather than asking the seeker to flee from the world into isolation, Bahá’u’lláh reveals that the true spiritual journey occurs within the chambers of the human heart—where ego dissolves into divine love and every atom of creation reflects the light of the Beloved.",
    },
    fa: {
      quote:
        "ای برادر من، تا به مصر عشق در نیایی به یوسف جمال دوست واصل نشوی و تا چون یعقوب از چشم ظاهری نگذری چشم باطن نگشایی.",
      citation: "حضرت بهاءالله، هفت وادی",
      articleTitle: "نقشه راه سالک: سیر در هفت وادی عشق و معرفت",
      articleBody:
        "کتاب «هفت وادی» که در بغداد از قلم حضرت بهاءالله نازل شد، مراحل تحول درونی سالک را در هفت منزل روحانی ترسیم می‌کند: وادی طلب، عشق، معرفت، توحید، استغنا، حیرت و فقر حقیقی و فنا. در این نگاه عرفانی، سالک برای یافتن حقیقت نیازی به گوشه‌نشینی و ترک دنیا ندارد؛ بلکه سفر حقیقی در اعماق قلب انسان رخ می‌دهد؛ جایی که «منِ» خودخواه در آتش عشق الهی ذوب می‌شود و هر ذره از هستی آیینه‌دار جمال محبوب می‌گردد.",
    },
  },
  family: {
    en: {
      quote:
        "The integrity of the family bond must be constantly considered, and the rights of the individual members must not be transgressed... All these rights and prerogatives must be conserved, yet the unity of the family must be sustained.",
      citation: "‘Abdu’l-Bahá, The Promulgation of Universal Peace",
      articleTitle:
        "The Sacred Hearth: Raising Luminous Souls in a Fragmented Age",
      articleBody:
        "Within the Bahá’í worldview, the family is a microcosm of human society—a sacred workshop where the habits of consultation, equality between women and men, and unconditional love are first practiced. Spiritual education is not merely the memorization of moral rules, but the awakening of a child’s innate nobility, treating every young soul as a mine rich in gems of inestimable value waiting to be polished through love and wisdom.",
    },
    fa: {
      quote:
        "پیوند خانواده باید همواره محفوظ بماند و حقوق هیچ یک از اعضای خانواده نباید پایمال گردد... تمامی این حقوق باید رعایت شود و در عین حال وحدت و یگانگی خانواده پایدار بماند.",
      citation: "حضرت عبدالبهاء، خطابات",
      articleTitle: "کانون مقدس: پرورش ارواح نورانی در عصر پراکندگی",
      articleBody:
        "در جهان‌بینی بهائی، خانواده خُرده‌جهانی از جامعه انسانی است؛ کارگاهی مقدس که در آن مشورت، برابری زن و مرد، و عشق بی‌قید نخستین‌بار تمرین می‌شود. تربیت روحانی صرفاً حفظ قواعد اخلاقی نیست، بلکه بیدار کردن شرافت فطری کودک است؛ هر روح جوان چون معدنی سرشار از جواهر بی‌بها که با عشق و حکمت صیقل می‌یابد.",
    },
  },
  arts: {
    en: {
      quote:
        "Arts, crafts and sciences uplift the world of being, and are conducive to its exaltation. Knowledge is as wings to man’s life, and a ladder for his ascent.",
      citation: "Bahá’u’lláh, Epistle to the Son of the Wolf",
      articleTitle: "Sacred Beauty: Art as a Pathway of the Spirit",
      articleBody:
        "In the Bahá’í vision, the arts are not ornaments of leisure but instruments of revelation—music, calligraphy, architecture, and story that lift the heart toward unity. When beauty is wedded to truth, culture itself becomes a form of worship, translating the ineffable into forms that every soul can approach.",
    },
    fa: {
      quote:
        "صنایع و علوم سبب علوّ عالم وجود است و سبب ترقّی آن. علم چون بال حیات انسان است و نردبان صعود او.",
      citation: "حضرت بهاءالله، لوح ابن ذئب",
      articleTitle: "زیبایی مقدس: هنر به‌مثابه راه روح",
      articleBody:
        "در نگاه بهائی، هنر آرایهٔ تفنن نیست بلکه ابزار کشف است—موسیقی، خوشنویسی، معماری و روایت که قلب را به‌سوی وحدت برمی‌کشد. وقتی زیبایی با حقیقت پیوند می‌خورد، فرهنگ خود شکلی از عبادت می‌شود و آنچه ناگفتنی است را به صورتی درمی‌آورد که هر روحی بتواند نزدیک شود.",
    },
  },
  society: {
    en: {
      quote:
        "The earth is but one country, and mankind its citizens.",
      citation: "Bahá’u’lláh, Gleanings from the Writings of Bahá’u’lláh",
      articleTitle: "Building the World Anew: Unity as a Social Principle",
      articleBody:
        "Bahá’í social teaching begins with the oneness of humanity—not as sentiment, but as a structural principle for justice, governance, and peace. From the equality of women and men to the elimination of extremes of wealth and poverty, this door opens onto a civilization oriented toward consultation, trustworthiness, and the well-being of the whole.",
    },
    fa: {
      quote: "ارض یک وطن است و جمیع بشر اهل آن.",
      citation: "حضرت بهاءالله، منتخباتی از آثار",
      articleTitle: "ساختن جهان نو: وحدت به‌مثابه اصل اجتماعی",
      articleBody:
        "تعالیم اجتماعی بهائی از وحدت نوع انسان آغاز می‌شود—نه به‌عنوان احساس، بلکه به‌عنوان اصل ساختاری عدالت، حکمرانی و صلح. از برابری زن و مرد تا رفع تضادهای ثروت و فقر، این دروازه به تمدنی می‌گشاید که بر مشورت، امانت و سعادت کل استوار است.",
    },
  },
  "science-religion": {
    en: {
      quote:
        "Religion and science are the two wings upon which man’s intelligence can soar into the heights, with which the human soul can progress.",
      citation: "‘Abdu’l-Bahá, Paris Talks",
      articleTitle: "Two Wings of One Flight: Harmony of Science and Faith",
      articleBody:
        "Far from opposing one another, science and religion are portrayed in the Bahá’í Writings as complementary modes of knowing—reason and revelation in dialogue. When either wing is broken, ascent falters; when both are strong, civilization rises toward clarity, compassion, and material–spiritual balance.",
    },
    fa: {
      quote:
        "علم و دین دو بالند که عقل انسان بدان‌ها پرواز کند و روح بشر ترقی نماید.",
      citation: "حضرت عبدالبهاء، خطابات پاریس",
      articleTitle: "دو بال یک پرواز: هماهنگی علم و دین",
      articleBody:
        "در آثار بهائی، علم و دین نه رقیب که دو شیوهٔ مکمل معرفت‌اند—عقل و وحی در گفت‌وگو. هرگاه یکی از این دو بال شکسته باشد، عروج ناتمام می‌ماند؛ و چون هر دو نیرومند باشند، تمدن به‌سوی روشنی، شفقت و تعادل مادی–روحانی برمی‌خیزد.",
    },
  },
  devotional: {
    en: {
      quote:
        "Intone, O My servant, the verses of God that have been received by thee… that the hearts of those yet asleep may awaken.",
      citation: "Bahá’u’lláh, The Kitáb-i-Aqdas",
      articleTitle: "The Quiet Flame: Prayer as Presence",
      articleBody:
        "Devotion in the Bahá’í sense is both solitude and gathering—private prayer that remakes the heart, and communal worship that remakes community. This door invites the seeker into still remembrance, sacred song, and the living practice of turning toward God amid the noise of the age.",
    },
    fa: {
      quote:
        "ای بندهٔ من، آیات الهی را که به تو رسیده تلاوت کن… تا دل‌های خفته بیدار شوند.",
      citation: "حضرت بهاءالله، کتاب اقدس",
      articleTitle: "شعلهٔ آرام: دعا به‌مثابه حضور",
      articleBody:
        "عبادت در معنای بهائی هم خلوت است و هم جمع—دعای فردی که قلب را بازمی‌سازد و نیایش جمعی که جامعه را. این دروازه جوینده را به ذکر آرام، نغمهٔ مقدس و عمل زندهٔ توجه به خدا در میان هیاهوی عصر فرامی‌خواند.",
    },
  },
  scholars: {
    en: {
      quote:
        "The first duty prescribed by God for His servants is the recognition of Him Who is the Dayspring of His Revelation… Whoso attaineth unto this… hath attained unto all good.",
      citation: "Bahá’u’lláh, The Kitáb-i-Aqdas",
      articleTitle: "Lamps of Learning: Scholarship in a Clergy-Free Faith",
      articleBody:
        "Without a clergy, the Bahá’í community relies on independent investigation and the humble service of scholars, historians, and educators. This door gathers resumes, talks, and research that bridge revelation and contemporary thought—never as authority over souls, but as companions on the path of understanding.",
    },
    fa: {
      quote:
        "اول فریضه‌ای که خدا بر بندگان مقرر داشته عرفان مشرق وحی اوست… هر که به این فائز شد به همهٔ خیر فائز گشت.",
      citation: "حضرت بهاءالله، کتاب اقدس",
      articleTitle: "چراغ‌های دانایی: پژوهش در آیینی بی‌روحانیون",
      articleBody:
        "بدون طبقهٔ روحانی، جامعهٔ بهائی بر تحری حقیقت و خدمت فروتنانهٔ پژوهشگران، مورخان و مربیان تکیه دارد. این دروازه رزومه، گفتار و تحقیقاتی را گرد می‌آورد که وحی را به اندیشهٔ معاصر پیوند می‌زند—نه به‌عنوان سلطه بر نفوس، بلکه به‌عنوان همراهانی در مسیر فهم.",
    },
  },
  "seekers-path": {
    en: {
      quote:
        "The essence of these words is this: they that tread the path of faith… must cleanse themselves of all that is earthly—their ears from idle talk, their minds from vain imaginings…",
      citation: "Bahá’u’lláh, The Kitáb-i-Íqán",
      articleTitle: "A Guided Ascent: Study Paths for the Seeker",
      articleBody:
        "The seeker’s path is deliberate: reading, reflection, conversation, and service woven into a rhythm of growth. This door offers guided study routes across the Nine Doors—starting places for those newly arriving at the Threshold and deepening tracks for those already walking in search of certitude.",
    },
    fa: {
      quote:
        "خلاصهٔ این کلمات آنکه سالکان سبیل ایمان… باید خود را از آنچه ارضی است پاک کنند—گوش را از سخنان بیهوده و ذهن را از اوهام…",
      citation: "حضرت بهاءالله، کتاب ایقان",
      articleTitle: "عروج هدایت‌شده: مسیرهای مطالعه برای جوینده",
      articleBody:
        "راه جوینده آگاهانه است: خواندن، تأمل، گفت‌وگو و خدمت در ریتمی از رشد. این دروازه مسیرهای مطالعهٔ هدایت‌شده در میان نُه در را پیش می‌نهد—نقاط آغاز برای تازه‌واردان به آستانه، و مسیرهای تعمیق برای آنان که در طلب یقین گام می‌زنند.",
    },
  },
};

export function getDoorContent(slug: string): DoorChamber | undefined {
  return DOOR_CONTENT[slug as DoorSlug];
}
