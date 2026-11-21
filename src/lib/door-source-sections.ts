import type { DoorSlug } from "./doors";

/** A paraphrased commentary block; its source URL feeds the bottom sources list. */
export type DoorSourceSection = {
  title: string;
  paragraphs: string[];
  source: { label: string; url: string };
};

type BilingualSection = { en: DoorSourceSection; fa: DoorSourceSection };

function sec(
  url: string,
  en: { title: string; paragraphs: string[]; linkLabel: string },
  fa: { title: string; paragraphs: string[]; linkLabel: string }
): BilingualSection {
  return {
    en: {
      title: en.title,
      paragraphs: en.paragraphs,
      source: { label: en.linkLabel, url },
    },
    fa: {
      title: fa.title,
      paragraphs: fa.paragraphs,
      source: { label: fa.linkLabel, url },
    },
  };
}

const BT = {
  immortalSoul: "https://bahaiteachings.org/immortal-soul-and-afterlife/",
  hiddenNature: "https://bahaiteachings.org/hidden-nature-life-after-death/",
  seekingSelf: "https://bahaiteachings.org/seeking-self-knowledge/",
  selfReflection:
    "https://bahaiteachings.org/what-is-self-reflection-why-important/",
  valleysLight:
    "https://bahaiteachings.org/bahaullahs-seven-valleys-mystical-journey-light/",
  valleysGrowth:
    "https://bahaiteachings.org/seven-valleys-spiritual-growth-development/",
  symbolsMean: "https://bahaiteachings.org/what-do-the-bahai-symbols-mean/",
  symbolsScripture:
    "https://bahaiteachings.org/seeing-nature-and-the-world-symbolically/",
  dreamsSoul: "https://bahaiteachings.org/dreams-and-visions-of-the-soul/",
  dreamsSleep:
    "https://bahaiteachings.org/exploring-the-deep-mystery-of-sleep-and-dreams/",
  somethingElse: "https://bahaiteachings.org/is-there-something-else-out-there/",
  caseLife: "https://bahaiteachings.org/case-life-beyond-earth/",
  scienceSpace: "https://bahaiteachings.org/science-space-spirituality/",
  ufoThreat: "https://bahaiteachings.org/why-do-we-see-ufos-threat/",
  lifePlanets: "https://bahaiteachings.org/bahai-writings-life-planets/",
  everyPlanet: "https://bahaiteachings.org/every-planet-its-own-creatures/",
  artsPower:
    "https://bahaiteachings.org/drawing-on-the-spiritual-power-of-the-arts/",
  artistsCiv:
    "https://bahaiteachings.org/why-we-need-artists-to-perfect-civilization/",
  musicLadder:
    "https://bahaiteachings.org/using-music-as-a-ladder-for-the-soul/",
  musicAwaken:
    "https://bahaiteachings.org/can-music-melody-awaken-true-nature/",
  artArchitecture:
    "https://bahaiteachings.org/art-architecture-unite-proclaim-bahai-message/",
  sacredMusicTemple:
    "https://bahaiteachings.org/transported-rapture-sacred-music/",
  fourLoves:
    "https://bahaiteachings.org/defining-four-different-types-of-love/",
  loveUnity:
    "https://bahaiteachings.org/eternal-rule-concentrating-our-hearts-on-love-and-unity/",
} as const;

const SECTIONS: Record<DoorSlug, BilingualSection[]> = {
  "worlds-beyond": [
    sec(
      BT.immortalSoul,
      {
        title: "The Immortal Soul and the Afterlife",
        linkLabel: "Ray Zimmerman, “The Immortal Soul and the Afterlife”",
        paragraphs: [
          "Personal commentary on BahaiTeachings.org reflects on death as a passage rather than an extinguishing: across many faith traditions, the next world is described as joy and liberation for the soul, even while those who remain feel genuine grief. The essay draws a Bahá’í parallel with the Hidden Words—death as a “messenger of joy”—and with the womb analogy shared by mystics: birth into a freer realm looks like loss only from the side that stays behind.",
          "In this reading, the afterlife is not a remote geography but a spiritual condition close to the living. Souls who have passed may still accompany loved ones through prayer and, at times, through dreams; their radiance is described in the Writings as advancing the world. Progress in the next life continues without end, and those still on earth can aid that progress by prayer and good works offered in the name of the departed.",
        ],
      },
      {
        title: "روح جاودان و حیات پس از مرگ",
        linkLabel: "ری زیمرمن، «روح جاودان و حیات پس از مرگ»",
        paragraphs: [
          "تفسیر شخصی در BahaiTeachings.org مرگ را گذر می‌بیند نه خاموشی: در بسیاری از ادیان، جهان بعد برای روح شادی و رهایی است، هرچند بازماندگان اندوه راستین دارند. مقاله به کلمات مکنونه اشاره می‌کند—مرگ چون «پیام‌آور شادی»—و به تشبیه رحم نزد عارفان: تولد در اقلیمی آزادتر، از سوی آنان که می‌مانند، گاه چون فقدان دیده می‌شود.",
          "در این خوانش، حیات پس از مرگ جغرافیا‌ی دور نیست؛ حالی روحانی نزدیک به زندگان است. نفوس متصاعد ممکن است از راه دعا—و گاه رؤیا—همراه محبوبان بمانند؛ و پرتو آنان در آثار، سبب پیشرفت عالم وصف شده است. ترقی در جهان بعد بی‌پایان است، و آنان که هنوز در زمین‌اند می‌توانند با دعا و اعمال خیر به نام متصاعدان، آن سیر را یاری کنند.",
        ],
      }
    ),
    sec(
      BT.hiddenNature,
      {
        title: "The Hidden Nature of Life After Death",
        linkLabel: "Joseph Roy Sheppherd, “The Hidden Nature of Life After Death”",
        paragraphs: [
          "This commentary stresses that the soul and the afterlife can only be spoken of by analogy. The soul is neither a laboratory object nor a mere idea; messengers of God have therefore used familiar images—parables, womb and birth, dreams—to intimate what mind alone cannot measure. Bahá’u’lláh’s teaching that the soul is a heavenly gem, and that the world beyond differs from this one as this world differs from the womb, frames earthly life as spiritual gestation.",
          "Virtues grown here—love, kindness, selflessness—are likened to limbs that seemed useless in the womb yet become essential after birth. Neglect of the soul in this life can hinder development, while prayer, meditation, obedience, and service nourish it. Eternal life, the essay concludes, has already begun: conception, birth, life, and death are stages on one continuum, and the immortal soul carries faculties that only later fully appear.",
        ],
      },
      {
        title: "ماهیت پنهان حیات پس از مرگ",
        linkLabel: "جوزف روی شپرد، «ماهیت پنهان حیات پس از مرگ»",
        paragraphs: [
          "این تفسیر تأکید می‌کند که روح و حیات پس از مرگ را تنها به تشبیه می‌توان گفت. روح نه شیء آزمایشگاهی است و نه صرف ایده؛ از این‌رو پیامبران با تصاویر آشنا—مثل، رحم و تولد، رؤیا—به آنچه عقل به‌تنهایی اندازه نمی‌گیرد اشاره کرده‌اند. تعلیم حضرت بهاءالله که روح گوهری آسمانی است و جهان بعد با این جهان چنان فرق دارد که این جهان با رحم، حیات زمینی را چون دوران جنینی روحانی می‌نهد.",
          "فضایل پروریده‌شده اینجا—عشق، مهربانی، ایثار—چون اندام‌هایی‌اند که در رحم بی‌مصرف می‌نمودند و پس از تولد ضروری می‌شوند. غفلت از روح در این عالم رشد را کند می‌کند؛ دعا، مراقبه، اطاعت و خدمت آن را می‌پرورند. نتیجهٔ مقاله: حیات ابدی همین اکنون آغاز شده؛ حمل، تولد، زندگی و مرگ منازل یک پیوسته‌اند و روح جاودان قوایی دارد که بعدتر آشکار می‌شود.",
        ],
      }
    ),
  ],

  "self-knowledge": [
    sec(
      BT.seekingSelf,
      {
        title: "Seeking Self-Knowledge",
        linkLabel: "Makeena Rivers, “Seeking Self-Knowledge”",
        paragraphs: [
          "This personal essay starts from Bahá’u’lláh’s warning that true loss is a life spent in ignorance of one’s own self. Knowing oneself means recognizing a dual nature—a higher spiritual orientation and a lower material pull—and choosing, day by day, which leads. Prayer, meditation, journaling, and honest counsel help, yet the Writings point further: we discover the higher self most clearly through service to the common good.",
          "Because human beings are communal, self-knowledge ripens in relationship. Unity does not demand uniformity; each person brings distinct gifts. Honoring the nobility in others while contributing one’s own capacities becomes a path both to purpose and to knowing God—the aim that gives every lesser decision its direction.",
        ],
      },
      {
        title: "در طلب خودشناسی",
        linkLabel: "مکینا ریورز، «در طلب خودشناسی»",
        paragraphs: [
          "این مقالهٔ شخصی از هشدار حضرت بهاءالله آغاز می‌کند که زیان حقیقی عمری است که در جهل از نفس سپری شود. خودشناسی یعنی شناخت طبیعت دوگانه—گرایش روحانی برتر و کشش مادی فروتر—و انتخاب روزانه که کدام راهبر باشد. دعا، مراقبه، نوشتن و مشورت صادقانه یاری می‌کند، اما آثار فراتر می‌برند: نفس برتر بیش‌تر در خدمت به خیر عمومی آشکار می‌شود.",
          "چون انسان موجودی اجتماعی است، خودشناسی در رابطه می‌رسد. وحدت یک‌شکلی نمی‌خواهد؛ هر کس موهبتی جدا دارد. حرمت نهادن به شرافت دیگران و سهم‌دادن از استعداد خویش، هم راه غایت است و هم راه عرفان خدا—هدفی که به هر تصمیم کوچک جهت می‌دهد.",
        ],
      }
    ),
    sec(
      BT.selfReflection,
      {
        title: "What Is Self-Reflection and Why Is It Important?",
        linkLabel:
          "Radiance Talley, “What Is Self-Reflection and Why Is it Important?”",
        paragraphs: [
          "Self-reflection, in this commentary, is careful thought about one’s behavior and beliefs—an hour of which tradition prefers to decades of unreflective worship. Bahá’u’lláh urges knowing what leads to loftiness or baseness, and bringing oneself to account each day before an unheralded reckoning. Reflection is thus not a New Year ritual alone but a daily spiritual habit.",
          "‘Abdu’l-Bahá’s counsel to compare today with yesterday—thanking God for growth, repenting where needed, and asking for stronger love—turns reflection into forward motion. Facing the world’s weight, the essay argues, retreat into distraction is understandable; yet returning inward restores purpose and renews the will to serve others.",
        ],
      },
      {
        title: "خوداندیشی چیست و چرا مهم است؟",
        linkLabel: "رِیدیِنس تَلی، «خوداندیشی چیست و چرا مهم است؟»",
        paragraphs: [
          "خوداندیشی در این تفسیر، فکر دقیق دربارهٔ رفتار و باورهاست—ساعتی از آن که حدیث بر هفتاد سال عبادت بی‌تفکر ترجیح می‌دهد. حضرت بهاءالله به شناخت آنچه به علو یا پستی می‌کشاند فرامی‌خوانند و به محاسبهٔ نفس هر روز پیش از حساب ناگهانی. پس محاسبه تنها رسم سال نو نیست؛ عادت روزانهٔ روحانی است.",
          "نصیحت حضرت عبدالبهاء—سنجیدن امروز با دیروز، شکر بر رشد، توبه بر قصور، و طلب عشق قوی‌تر—محاسبه را به حرکت پیش‌برنده بدل می‌کند. در برابر سنگینی جهان، گریز به سرگرمی فهمیدنی است؛ اما بازگشت به باطن غایت را بازمی‌گرداند و ارادهٔ خدمت را تازه می‌کند.",
        ],
      }
    ),
  ],

  "seven-valleys": [
    sec(
      BT.valleysLight,
      {
        title: "The Mystical Journey Toward the Light",
        linkLabel:
          "Thomas von Lutterotti, “Baha’u’llah’s Seven Valleys: the Mystical Journey Towards the Light”",
        paragraphs: [
          "This essay situates The Seven Valleys within the Sufi heritage of Attar’s Conference of the Birds—souls as birds crossing valleys of search, love, knowledge, detachment, unity, amazement, and poverty—while stressing that Bahá’u’lláh reveals a new tablet, not a copy. The seventh valley is named True Poverty and Absolute Nothingness: dying to self and living in God, poor in creation’s claims and rich in the Desired One.",
          "Unlike images of becoming identical with the Godhead, Bahá’í mysticism keeps the creature forever distinct from the Creator; nearness is to the mirrors of light—the Manifestations—not absorption into the Essence. The goal is a heart emptied of self so that only the Beloved remains before the gaze—a relief, not a metaphysical collapse of identity.",
        ],
      },
      {
        title: "سفر عرفانی به‌سوی نور",
        linkLabel:
          "توماس فون لوتروتی، «هفت وادی حضرت بهاءالله: سفر عرفانی به‌سوی نور»",
        paragraphs: [
          "این مقاله هفت وادی را در میراث تصوف—منطق‌الطیر عطار و پرندگان سالک در وادی‌های طلب، عشق، معرفت، استغنا، توحید، حیرت و فقر—می‌نهد، اما تأکید می‌کند که حضرت بهاءالله لوحی نو نازل فرموده‌اند نه رونوشت. وادی هفتم «فقر حقیقی و فنا» نام دارد: مردن از خود و زیستن در خدا، فقیر از دعوی خلق و غنی از محبوب.",
          "برخلاف تصویری که مخلوق را عین خالق می‌کند، عرفان بهائی تمایز ابدی خلق و حق را نگاه می‌دارد؛ قرب به آیینه‌های نور—مظاهر الهی—است نه حلول در ذات. غایت، قلبی خالی از خود است تا تنها محبوب پیش چشم بماند—آسودگی، نه فروپاشی هویت.",
        ],
      }
    ),
    sec(
      BT.valleysGrowth,
      {
        title: "Seven Valleys of Spiritual Growth and Development",
        linkLabel:
          "Behrooz Sabet, “Seven Valleys of Spiritual Growth and Development”",
        paragraphs: [
          "Called Bahá’u’lláh’s greatest mystical composition by Shoghi Effendi and a “guide for human conduct” by ‘Abdu’l-Bahá, The Seven Valleys maps stages: Search, Love, Knowledge, Unity, Contentment, Wonderment, and True Poverty and Absolute Nothingness. Search requires patience, purity, and freedom from blind imitation; Love burns the harvest of mere reason in the fire of yearning.",
          "As love and understanding unite, true knowledge yields unity, then contentment and awe before God’s glory—until the seeker knows how little is known and rests in humble emptiness before the Divine. The valleys are not escape from society but a social mysticism: knowing one’s shortcomings and walking an inner path that bears fruit in character and conduct.",
        ],
      },
      {
        title: "هفت وادی رشد و تکامل روحانی",
        linkLabel: "بهروز ثابت، «هفت وادی رشد و تکامل روحانی»",
        paragraphs: [
          "حضرت شوقی افندی این اثر را بزرگ‌ترین ترکیب عرفانی حضرت بهاءالله خوانده‌اند و حضرت عبدالبهاء آن را «راهنمای سلوک انسان»؛ هفت وادی منازل طلب، عشق، معرفت، توحید، استغنا، حیرت و فقر حقیقی و فنا را می‌نمایاند. طلب صبر و طهارت و رهایی از تقلید کور می‌خواهد؛ عشق خرمن عقل صرف را در آتش شوق می‌سوزاند.",
          "چون عشق و فهم یکی شوند، معرفت راستین به توحید، سپس استغنا و حیرت در برابر جلال حق می‌رسد—تا سالک بداند چه اندک می‌داند و در فقر فروتن در برابر حق بیارامد. وادی‌ها گریز از جامعه نیستند؛ عرفان اجتماعی‌اند: شناخت قصور خویش و سیری درونی که در خلق و رفتار ثمر می‌دهد.",
        ],
      }
    ),
  ],

  "sacred-symbols": [
    sec(
      BT.symbolsMean,
      {
        title: "What Do the Bahá’í Symbols Mean?",
        linkLabel: "Maya Kaathryn Bohnhoff, “What Do the Baha’i Symbols Mean?”",
        paragraphs: [
          "Commentary on BahaiTeachings.org explains the nine-pointed star through the abjad value of “Bahá,” the nine years from the Báb’s declaration to Bahá’u’lláh’s revelation in the Síyáh-Chál, and nine as the fullest single digit—wholeness that Houses of Worship embody with nine sides open to every soul.",
          "The ringstone symbol maps God, Manifestation, and creation as three horizontal lines joined by a vertical line often read as the Holy Spirit, with twin stars for the Báb and Bahá’u’lláh. The Greatest Name calligraphy—Yá Bahá’u’l-Abhá—concentrates remembrance into visible beauty. Together these signs point to progressive revelation and the unity of humanity under one God.",
        ],
      },
      {
        title: "نمادهای بهائی چه معنایی دارند؟",
        linkLabel: "مایا کاترین بونهوف، «نمادهای بهائی چه معنایی دارند؟»",
        paragraphs: [
          "تفسیر در BahaiTeachings.org ستارهٔ نُه‌پر را با ارزش ابجد «بهاء»، نه سال از اظهار حضرت باب تا ظهور حضرت بهاءالله در سیاه‌چال، و نه چون کامل‌ترین رقم یکانه‌—کمالی که مشارق‌الاذکار با نه ضلع گشوده به هر نفس مجسم می‌کنند—تبیین می‌کند.",
          "نماد نگین، حق و ظهور و خلق را چون سه خط افقی با خط عمودی—که اغلب روح‌القدس خوانده می‌شود—پیوند می‌دهد و دو ستاره برای حضرت باب و حضرت بهاءالله. خوشنویسی اسم اعظم—یا بهاءالابهی—ذکر را به زیبایی مرئی بدل می‌کند. این نشانه‌ها با هم به ظهور تدریجی و وحدت بشر زیر یک خدا اشاره دارند.",
        ],
      }
    ),
    sec(
      BT.symbolsScripture,
      {
        title: "How to Understand Spiritual Symbols in Scripture",
        linkLabel:
          "Deborah Clark Vance, “How to Understand the Spiritual Symbols in Divine Scriptures”",
        paragraphs: [
          "‘Abdu’l-Bahá distinguishes sensible knowledge (what the senses grasp) from intelligible realities—love, mind, spirit—which can only be spoken by casting them into sensible forms. Holy books therefore overflow with symbols; reading them only literally misses their spiritual freight, as when Song of Songs language of bride and bridegroom points beyond the physical.",
          "Bahá’u’lláh’s Book of Certitude trains the seeker to read scripture with the inner eye and to see every created thing as a token of God. Learning that symbolic language—in text and in nature—opens analogies for community life itself: diverse elements, patiently joined, can become fertile soil for a shared consciousness.",
        ],
      },
      {
        title: "چگونه نمادهای روحانی کتب آسمانی را بفهمیم",
        linkLabel:
          "دبورا کلارک ونس، «چگونه نمادهای روحانی کتب آسمانی را بفهمیم»",
        paragraphs: [
          "حضرت عبدالبهاء معرفت محسوس را از حقایق معقول—عشق، عقل، روح—جدا می‌سازند؛ حقایق معقول را جز در قالب محسوس نمی‌توان گفت. از این‌رو کتب قدسی از رمز سرشارند؛ خواندن صرف ظاهر بار روحانی را از دست می‌دهد، چنان‌که زبان عروس و داماد در غزل غزل‌ها فراتر از جسم اشاره می‌کند.",
          "کتاب ایقان جوینده را به خواندن با چشم باطن و دیدن هر مخلوق چون آیت خدا می‌آموزد. آموختن این زبان رمزی—در متن و در طبیعت—تمثیل‌هایی برای حیات جامعه می‌گشاید: عناصر گوناگون، اگر شکیبا به هم آمیزند، می‌توانند خاک بارور آگاهی مشترک شوند.",
        ],
      }
    ),
  ],

  "dreams-intuition": [
    sec(
      BT.dreamsSoul,
      {
        title: "Dreams and Visions of the Soul",
        linkLabel: "David Langness, “Dreams and Visions of the Soul”",
        paragraphs: [
          "Science still debates which brain processes produce dreams; Bahá’í commentary treats the dream as a treasury of mysteries placed in creation so that philosophers cannot deny worlds beyond the senses. In The Seven Valleys, the sleeper enters a far city without moving feet, sees without eyes, and may later witness in waking life what was shown in sleep.",
          "‘Abdu’l-Bahá likens the soul to light and the body to a lantern: in dreams the light shines without the glass. Mental faculties are properties of the soul; the mind needs a sound body to appear, yet the soul remains free—active in sleep and waking, sometimes solving what waking reason cannot. Dreams thus evidence the soul’s superiority over matter.",
        ],
      },
      {
        title: "رؤیاها و مکاشفات روح",
        linkLabel: "دیوید لانگنس، «رؤیاها و مکاشفات روح»",
        paragraphs: [
          "علم هنوز در جدل است که کدام فرایند مغزی رؤیا می‌سازد؛ تفسیر بهائی رؤیا را خزانهٔ اسراری می‌داند که در خلقت نهاده شده تا فیلسوفان نتوانند عوالم فراتر از حس را انکار کنند. در هفت وادی، خفته بی‌حرکت پا به شهری دور درمی‌آید، بی‌چشم می‌بیند، و شاید سال‌ها بعد در بیداری همان را که در خواب دیده شاهد شود.",
          "حضرت عبدالبهاء روح را به نور و جسم را به فانوس تشبیه می‌فرمایند: در رؤیا نور بی‌شیشه می‌درخشد. قوای ذهنی صفات روح‌اند؛ ذهن برای ظهور به جسم سالم نیاز دارد، اما روح آزاد می‌ماند—در خواب و بیداری فعال، گاه گشایندهٔ آنچه عقل بیدار نمی‌تواند. پس رؤیا گواه برتری روح بر ماده است.",
        ],
      }
    ),
    sec(
      BT.dreamsSleep,
      {
        title: "Exploring the Deep Mystery of Sleep and Dreams",
        linkLabel:
          "Patricia O’Connor, “Exploring the Deep Mystery of Sleep and Dreams”",
        paragraphs: [
          "Morning Bahá’í prayers speak of awakening from sleep and of what God may reveal in the night as a foundation for love in waking life—suggesting sleep is an alternate consciousness, not mere blank rest. The same Seven Valleys passage on dreams invites pondering two worlds: outer waking life and the inner world of sleep.",
          "Neuroscience’s Default Mode Network—more active in quiet repose and sleep than in focused tasking—offers a parallel language for shifting from “inner being” to “outer being.” Honoring that transition with tea, stillness, and remembrance of dreams is framed as both spiritual practice and care for mental and physical health in a sleep-deprived age.",
        ],
      },
      {
        title: "کاوش راز ژرف خواب و رؤیا",
        linkLabel: "پاتریشیا اوکانر، «کاوش راز ژرف خواب و رؤیا»",
        paragraphs: [
          "ادعیهٔ صبحگاهی بهائی از بیدار شدن از خواب و از آنچه خدا ممکن است در شب آشکار سازد—چون بنیاد عشق در بیداری—سخن می‌گویند؛ خواب را آگاهی بدیل می‌نمایانند نه صرف خاموشی. همان فقرهٔ هفت وادی دربارهٔ رؤیا به تأمل در دو جهان فرامی‌خواند: جهان ظاهر بیداری و جهان باطن خواب.",
          "شبکهٔ حالت پیش‌فرض در عصب‌شناسی—فعال‌تر در آرامش و خواب تا در تکلیف متمرکز—زبانی موازی برای گذر از «بودن درون» به «بودن بیرون» می‌دهد. حرمت این گذر با چای، سکوت و یادکرد رؤیاها هم عمل روحانی است و هم مراقبت از سلامت در عصر محرومیت از خواب.",
        ],
      }
    ),
  ],

  "cosmic-harmony": [
    sec(
      BT.somethingElse,
      {
        title: "Is There Something Else Out There?",
        linkLabel: "Mateen Taghizadeh, “Is There Something Else Out There?”",
        paragraphs: [
          "Prompted by public discussion of unidentified aerial phenomena, this essay turns to Bahá’u’lláh’s statement that every fixed star has its planets and every planet its creatures beyond human count. Forms of life elsewhere need not resemble earthly humans; curiosity about the cosmos pairs with humility about what “man”—the being capable of knowing and loving God—means across creation.",
          "The oneness of humanity, the author suggests, can stretch the imagination toward kinship with whatever life shares this connected universe. Exploration should proceed with compassion and a resolve for peace—first among nations on Earth, and in principle with any neighbors the heavens may one day disclose.",
        ],
      },
      {
        title: "آیا چیزی دیگر آن‌جا هست؟",
        linkLabel: "متین تقی‌زاده، «آیا چیزی دیگر آن‌جا هست؟»",
        paragraphs: [
          "با برانگیختگی بحث‌های عمومی دربارهٔ پدیده‌های هوایی ناشناخته، این مقاله به بیان حضرت بهاءالله بازمی‌گردد که هر ستارهٔ ثابت سیارات خود و هر سیاره مخلوقات خود را دارد—فراتر از شمار بشر. حیات در جای دیگر لازم نیست شبیه انسان زمینی باشد؛ کنجکاوی کیهانی با فروتنی دربارهٔ معنای «انسان»—موجود قادر به عرفان و حب خدا—همراه است.",
          "وحدت نوع انسان، به گمان نویسنده، می‌تواند خیال را به‌سوی خویشاوندی با هر حیاتی که در این کیهان پیوسته سهیم است بگشاید. اکتشاف باید با شفقت و عزم صلح پیش رود—نخست میان ملل زمین، و در اصل با هر همسایه‌ای که آسمان روزی آشکار کند.",
        ],
      }
    ),
    sec(
      BT.caseLife,
      {
        title: "The Case for Life Beyond Earth",
        linkLabel: "David Langness, “The Case for Life Beyond Earth”",
        paragraphs: [
          "Science still cannot prove whether Earth is alone; exoplanet discoveries make life elsewhere statistically plausible, yet evidence remains incomplete. Turning to revelation, the essay highlights Bahá’u’lláh’s clear affirmation of creatures on every planet and ‘Abdu’l-Bahá’s wonder at unfathomable stellar systems—an invitation to humility before cosmic mystery.",
          "Personal sightings and cultural fascination with unidentified craft do not settle the question; they keep the heart asking. For now, the Writings offer assurance that creation is vast and inhabited in ways human intellect has not yet mapped, while science continues its patient search.",
        ],
      },
      {
        title: "دلیل حیات فراتر از زمین",
        linkLabel: "دیوید لانگنس، «دلیل حیات فراتر از زمین»",
        paragraphs: [
          "علم هنوز نمی‌تواند اثبات کند زمین تنهاست؛ کشف سیارات فراخورشیدی حیات در جای دیگر را از نظر آماری محتمل می‌سازد، اما شواهد ناتمام است. مقاله با رجوع به وحی، تصریح حضرت بهاءالله بر مخلوقات هر سیاره و شگفتی حضرت عبدالبهاء در برابر نظام‌های ستاره‌ای بی‌کران را برجسته می‌کند—دعوت به فروتنی در برابر راز کیهان.",
          "مشاهدات شخصی و شیفتگی فرهنگی به اشیای پرندهٔ ناشناس مسئله را فیصله نمی‌دهد؛ قلب را در پرسش نگه می‌دارد. فعلاً آثار اطمینان می‌دهند که خلقت وسیع و مسکون است به شیوه‌هایی که عقل هنوز نقشه‌اش را نکشیده، در حالی که علم جستجوی شکیبای خود را ادامه می‌دهد.",
        ],
      }
    ),
    sec(
      BT.scienceSpace,
      {
        title: "Science, Space and Spirituality",
        linkLabel: "David Langness, “Science, Space and Spirituality”",
        paragraphs: [
          "Instruments that peer into the first galaxies are costly; this commentary defends such inquiry as an expression of the Bahá’í principle that science and religion are two wings of one bird. The rational soul and the mind work together: curiosity is spiritual as well as intellectual.",
          "Seeking light from early stars, studying planetary origins, and asking whether we are alone are framed as ways the human spirit acquaints itself with heavenly realities. Wonder at the cosmos is not a luxury opposed to justice on Earth, but part of what it means to be fully human seekers.",
        ],
      },
      {
        title: "علم، فضا و روحانیت",
        linkLabel: "دیوید لانگنس، «علم، فضا و روحانیت»",
        paragraphs: [
          "ابزاری که به نخستین کهکشان‌ها می‌نگرد پرهزینه است؛ این تفسیر چنین پژوهش را بیان اصل بهائی می‌داند که علم و دین دو بال یک پرنده‌اند. روح عاقل و ذهن با هم کار می‌کنند: کنجکاوی هم روحانی است هم عقلی.",
          "جستجوی نور ستارگان نخستین، مطالعهٔ پیدایش سیارات، و پرسش از تنهایی ما، راه‌هایی وصف می‌شوند که روح انسان با حقایق آسمانی آشنا می‌شود. شگفتی در برابر کیهان تجملی مخالف عدالت روی زمین نیست؛ بخشی از معنای جویندگی کامل انسانی است.",
        ],
      }
    ),
    sec(
      BT.ufoThreat,
      {
        title: "Why Do We See UFOs as a Threat?",
        linkLabel: "Susan Gammage, “Why Do We See UFOs as a Threat?”",
        paragraphs: [
          "Popular culture often trains fear of the alien; this essay asks why hostility is assumed when peaceful contact is equally imaginable. Citing Bahá’u’lláh on planetary creatures and the House of Justice’s note that other worlds might send probes as Earth has, it urges shifting from sensationalism to scientific study of unidentified phenomena.",
          "Bahá’í emphasis on the oneness of humanity and the harmony of science and religion suggests that any future cosmic encounter should be imagined through cooperation, not conquest. Planetary peace on Earth remains the rehearsal for a wider ethic of universal kinship.",
        ],
      },
      {
        title: "چرا یوفوها را تهدید می‌بینیم؟",
        linkLabel: "سوزان گَمِج، «چرا یوفوها را تهدید می‌بینیم؟»",
        paragraphs: [
          "فرهنگ عامه اغلب ترس از بیگانه را آموزش می‌دهد؛ این مقاله می‌پرسد چرا خصومت فرض می‌شود وقتی تماس مسالمت‌آمیز نیز متصور است. با استناد به بیان حضرت بهاءالله دربارهٔ مخلوقات سیارات و اشارهٔ بیت‌العدل که عوالم دیگر شاید چون زمین کاوشگر فرستند، از انتقال از هیجان به پژوهش علمی پدیده‌های ناشناخته دفاع می‌کند.",
          "تأکید بهائی بر وحدت نوع انسان و هماهنگی علم و دین پیشنهاد می‌کند هر دیدار کیهانی آینده را باید از دریچهٔ همکاری دید نه فتح. صلح سیاره‌ای روی زمین تمرین اخلاقی خویشاوندی وسیع‌تر است.",
        ],
      }
    ),
    sec(
      BT.lifePlanets,
      {
        title: "What the Bahá’í Writings Say About Life on Other Planets",
        linkLabel:
          "Sagar Bhatia, “What the Bahá’í Writings Say About Life On Other Planets”",
        paragraphs: [
          "Surveying exoplanet science beside Bahá’u’lláh’s affirmation of countless creatures, this piece notes that absence of evidence is not evidence of absence. The nature of extraterrestrial beings awaits scientific discovery; religion and science together keep the question open without superstition.",
          "Meanwhile the priority remains planetary unity at home. If contact ever comes, the same spiritual law that binds hearts to the Creator—and calls humanity one family—would orient interplanetary relations toward recognition of one God and one moral horizon.",
        ],
      },
      {
        title: "آثار بهائی دربارهٔ حیات در سیارات دیگر",
        linkLabel:
          "ساگار باتیا، «آثار بهائی دربارهٔ حیات در سیارات دیگر»",
        paragraphs: [
          "این نوشته علم سیارات فراخورشیدی را کنار تصریح حضرت بهاءالله بر مخلوقات بی‌شمار می‌نهد و یادآوری می‌کند فقدان دلیل، دلیل فقدان نیست. ماهیت باشندگان فرازمینی در انتظار کشف علمی است؛ دین و علم با هم پرسش را بی‌خرافه باز نگه می‌دارند.",
          "در عین حال اولویت، وحدت سیاره‌ای در خانه است. اگر تماسی رخ دهد، همان قانون روحانی که قلوب را به خالق می‌بندد—و بشر را یک خانواده می‌خواند—روابط میان‌سیاره‌ای را به‌سوی عرفان یک خدا و یک افق اخلاقی جهت می‌دهد.",
        ],
      }
    ),
    sec(
      BT.everyPlanet,
      {
        title: "Every Planet Its Own Creatures",
        linkLabel: "“Every Planet its Own Creatures,” BahaiTeachings.org",
        paragraphs: [
          "A childhood of stargazing opens into Bahá’u’lláh’s nineteenth-century declaration that every planet has its creatures, and ‘Abdu’l-Bahá’s teaching that stellar bodies are peopled with beings suited to their elements—not necessarily with earthly states of consciousness. Wonder replaces the arrogance of assuming Earth is creation’s only home.",
          "Looking up, we see light from the past; looking through revelation, we find a cosmos already affirmed as inhabited. The invitation is simple: go outside, lift the eyes, and let humility and awe share the same sky.",
        ],
      },
      {
        title: "هر سیاره مخلوقات خود را دارد",
        linkLabel: "«هر سیاره مخلوقات خود را دارد»، BahaiTeachings.org",
        paragraphs: [
          "کودکی در تماشای ستارگان به تصریح قرن‌نوزدهمی حضرت بهاءالله می‌رسد که هر سیاره مخلوقات خود را دارد، و به تعلیم حضرت عبدالبهاء که اجرام ستاره‌ای مسکون‌اند به باشندگانی متناسب با عناصر خویش—نه لزوماً با آگاهی زمینی. شگفتی جای غرور فرض تنها بودن زمین را می‌گیرد.",
          "چون سر بلند کنیم نور گذشته را می‌بینیم؛ چون به وحی بنگریم کیهانی را می‌یابیم که پیش‌تر مسکون تصدیق شده. دعوت ساده است: بیرون برو، چشم بردار، و بگذار فروتنی و حیرت یک آسمان را شریک شوند.",
        ],
      }
    ),
  ],

  "sacred-arts": [
    sec(
      BT.musicLadder,
      {
        title: "Using Music as a Ladder for the Soul",
        linkLabel: "Peter Gyulay, “Using Music as a Ladder for the Soul”",
        paragraphs: [
          "Bahá’u’lláh makes music lawful and names it a ladder whereby souls may be lifted toward the realm on high—yet warns against making it wings to self and passion. The essay reads this as placing melody beside prayer, meditation, and good works: a means of spiritual ascent when the heart turns toward God.",
          "‘Abdu’l-Bahá distinguishes divine music that exhilarates the spirit from earthly music that chiefly moves the body, and urges bringing earthly tunes into harmony with celestial melody—especially by setting the verses of God to song. Conscience, not fashion, judges which music raises the soul and which feeds the lower self.",
        ],
      },
      {
        title: "موسیقی چون نردبان روح",
        linkLabel: "پیتر گیولای، «استفاده از موسیقی چون نردبان روح»",
        paragraphs: [
          "حضرت بهاءالله شنیدن موسیقی را حلال می‌فرمایند و آن را نردبانی می‌نامند که نفوس را به‌سوی عوالم عالیه برکشد—و هشدار می‌دهند که بال نفس و هوی نشود. مقاله این را در کنار دعا، مراقبه و اعمال خیر می‌نهد: وسیلهٔ عروج روحانی وقتی قلب به‌سوی خدا روی آورد.",
          "حضرت عبدالبهاء موسیقی الهی را که روح را بهجت بخشد از موسیقی زمینی که بیشتر بر جسم اثر کند جدا می‌کنند و به هماهنگی نغمهٔ ارضی با لحن سماوی می‌خوانند—به‌ویژه با گذاشتن آیات الهی بر آهنگ. وجدان، نه مد، داوری می‌کند کدام موسیقی روح را بالا برد و کدام نفس سفلی را تغذیه کند.",
        ],
      }
    ),
    sec(
      BT.musicAwaken,
      {
        title: "Can Music and Melody Awaken Our True Nature?",
        linkLabel:
          "Shadi Toloui-Wallace, “Can Music and Melody Awaken Our True Nature?”",
        paragraphs: [
          "Drawing on ‘Abdu’l-Bahá, this essay treats melody as material vibration with spiritual consequence: music is food of the soul, uplifts the spirit, and works powerfully on pure children’s hearts—hence the call to teach every child something of music and to vivify schools with song.",
          "Whatever already lives in the heart—love or hatred, compassion or anger—melody intensifies. Music can reassert a soul’s kinder nature after a wave of irritation, and a pure voice joined to pure intention multiplies generosity. Melodies thus become a mirror and a magnifier of the listener’s inner state.",
        ],
      },
      {
        title: "آیا موسیقی و نغمه طبیعت راستین ما را بیدار می‌کند؟",
        linkLabel:
          "شادی طلوعی‌والاس، «آیا موسیقی و نغمه طبیعت راستین ما را بیدار می‌کند؟»",
        paragraphs: [
          "با تکیه بر حضرت عبدالبهاء، این مقاله نغمه را ارتعاش مادی با پیامد روحانی می‌بیند: موسیقی غذای روح است، جان را بالا می‌برد، و بر قلوب پاک کودکان سخت اثر می‌کند—از این رو هر کودک باید چیزی از موسیقی بداند و مدارس با سرود زنده شوند.",
          "هرچه در قلب باشد—عشق یا کینه، شفقت یا خشم—نغمه آن را شدت می‌بخشد. موسیقی می‌تواند طبیعت مهربان‌تر روح را پس از موجی از آزردگی بازآورد، و صوت پاک با نیت پاک سخاوت را چند برابر کند. بدین‌سان ملودی‌ها آینه و ذره‌بین حال درونی شنونده می‌شوند.",
        ],
      }
    ),
    sec(
      BT.sacredMusicTemple,
      {
        title: "Transported by the Rapture of Sacred Music",
        linkLabel:
          "Shadi Toloui-Wallace, “Transported by the Rapture of Sacred Music”",
        paragraphs: [
          "In the Mashriqu’l-Adhkár, sacred texts are chanted or sung a cappella—voices alone, without instruments—so that melody serves the Word rather than spectacle. ‘Abdu’l-Bahá praises music as a science worthy at the Threshold of God, urging hymns that enrapture gatherings and bring earthly song into celestial harmony.",
          "Musical style may vary by culture; what matters is dignity, clarity of the sacred text, and the heart’s attraction. Temple music aims to make scripture more accessible than speech alone—sensual beauty harnessed to understanding, not to entertainment for its own sake.",
        ],
      },
      {
        title: "ربایش موسیقی قدسی",
        linkLabel:
          "شادی طلوعی‌والاس، «ربایش موسیقی قدسی»",
        paragraphs: [
          "در مشرق‌الاذکار، نصوص مقدس بی‌ساز خوانده یا سروده می‌شوند—تنها صوت—تا نغمه در خدمت کلام باشد نه تماشا. حضرت عبدالبهاء موسیقی را علمی ستوده در آستان حق می‌خوانند و سرودهایی می‌خواهند که محافل را به وجد آرند و نغمهٔ ارضی را با لحن سماوی هماهنگ کنند.",
          "سبک موسیقایی می‌تواند به فرهنگ‌ها گوناگون باشد؛ آنچه مهم است وقار، وضوح متن مقدس، و جذب قلب است. موسیقی معبد می‌کوشد کلام را دسترس‌پذیرتر از سخنِ تنها سازد—زیبایی حسی در خدمت فهم، نه تفنن به‌خاطر خود.",
        ],
      }
    ),
    sec(
      BT.artsPower,
      {
        title: "Drawing on the Spiritual Power of the Arts",
        linkLabel: "Anne Gordon Perry, “Drawing on the Spiritual Power of the Arts”",
        paragraphs: [
          "Recent guidance from the Universal House of Justice names the arts alongside public health and the environment as powers that enhance community life. Bahá’u’lláh praises arts, crafts, and sciences as means of exalting the world and urges deference to artists and craftsmen.",
          "‘Abdu’l-Bahá calls all art a gift of the Holy Spirit—harmony, poetry, painting as praise—and tells an artist that striving to perfect one’s craft is worship akin to prayer in the temple. In an age of renewal, a “new art” and the stage as a future pulpit signal how creativity can move hearts from narrow identity toward global belonging.",
        ],
      },
      {
        title: "بهره‌گیری از نیروی روحانی هنرها",
        linkLabel: "آن گوردون پری، «بهره‌گیری از نیروی روحانی هنرها»",
        paragraphs: [
          "هدایت اخیر بیت‌العدل اعظم هنرها را در کنار بهداشت عمومی و محیط‌زیست از نیروهای تقویت حیات جامعه می‌نامد. حضرت بهاءالله صنایع و علوم را سبب علو عالم می‌ستایند و به حرمت هنرمندان و صنعتگران فرامی‌خوانند.",
          "حضرت عبدالبهاء همهٔ هنر را موهبت روح‌القدس می‌خوانند—هماهنگی، شعر، نقاشی چون ستایش—و به هنرمندی می‌فرمایند کوشش در کمال صنعت عبادتی است چون دعا در معبد. در عصر تجدید، «هنر نو» و صحنه چون منبر آینده نشان می‌دهد خلاقیت چگونه قلوب را از هویت تنگ به‌سوی تعلق جهانی می‌برد.",
        ],
      }
    ),
    sec(
      BT.artistsCiv,
      {
        title: "Why We Need Artists to Perfect Civilization",
        linkLabel:
          "Mike Solomon, “Why We Need Artists to Perfect Civilization”",
        paragraphs: [
          "In Bahá’í usage, “art” often means striving for perfection in whatever one does—not only gallery craft. Refining appearance, kindness, justice, industry, and care for nature are all artistic labors; work itself is exalted to the rank of worship. Creativity is a feedback loop of self-awareness—a ladder toward God when intent seeks the good.",
          "The Báb links perfecting handiwork with certitude in God’s perfection and commands servants to produce work with utmost perfection so that earth may be built anew. ‘Abdu’l-Bahá rejoices when an artist takes pains: the closer the craft to perfection, the closer the soul to God. Civilization needs such makers of beauty and meaning.",
        ],
      },
      {
        title: "چرا برای کمال تمدن به هنرمندان نیاز داریم",
        linkLabel:
          "مایک سولومون، «چرا برای کمال تمدن به هنرمندان نیاز داریم»",
        paragraphs: [
          "در کاربرد بهائی، «هنر» اغلب یعنی کوشش برای کمال در هر کار—نه فقط صنعت گالری. پیراستن ظاهر، مهربانی، عدالت، صنعت و مراقبت از طبیعت همه کار هنری‌اند؛ خود کار به رتبهٔ عبادت رفعت یافته است. خلاقیت حلقهٔ بازخورد خودآگاهی است—نردبانی به‌سوی خدا وقتی نیت خیر بجوید.",
          "حضرت باب کمال صنعت را با یقین به کمال صنع الهی پیوند می‌دهند و بندگان را به تولید با نهایت اتقان می‌خوانند تا زمین نو ساخته شود. حضرت عبدالبهاء از کوشش هنرمند شاد می‌شوند: هرچه صنعت به کمال نزدیک‌تر، روح به خدا نزدیک‌تر. تمدن به چنین آفرینندگان زیبایی و معنا نیاز دارد.",
        ],
      }
    ),
    sec(
      BT.artArchitecture,
      {
        title: "Art and Architecture Unite to Proclaim the Bahá’í Message",
        linkLabel:
          "Jennifer Campbell, “Art and Architecture Unite to Proclaim the Bahá’í Message”",
        paragraphs: [
          "The Wilmette Mashriqu’l-Adhkár shows how architecture, ornament, calligraphy of the Writings, and gardens proclaim unity without sermon. Nine sides and doorways, interlacing symbols of the world’s religions, and verses of Bahá’u’lláh on façade and alcove make form itself a teaching—beauty as invitation to one Creator.",
          "Craft and landscape complete the message: reflecting pools, diverse plantings, and meditative grounds express unity in diversity. Open to every soul, the House of Worship treats visual art and sacred geometry as companions to prayer—architecture that elevates civilization by gathering humanity under one luminous roof.",
        ],
      },
      {
        title: "هنر و معماری در اعلام پیام بهائی",
        linkLabel:
          "جنیفر کمبل، «هنر و معماری در اعلام پیام بهائی»",
        paragraphs: [
          "مشرق‌الاذکار ویلمت نشان می‌دهد چگونه معماری، تزیین، خوشنویسی آثار، و باغ‌ها وحدت را بی‌منبر اعلام می‌کنند. نُه ضلع و در، نمادهای درهم‌تنیدهٔ ادیان جهان، و آیات حضرت بهاءالله بر نما و محراب، خودِ صورت را تعلیم می‌سازند—زیبایی چون دعوت به‌سوی یک خالق.",
          "صنعت و منظر پیام را کامل می‌کنند: آب‌نماها، گیاهان گوناگون، و زمین‌های مراقبه وحدت در کثرت را بیان می‌دارند. گشوده به هر نفس، معبد هنر بصری و هندسهٔ قدسی را همراه دعا می‌داند—معماری‌ای که تمدن را با گردآوردن بشریت زیر یک سقف نورانی رفعت می‌بخشد.",
        ],
      }
    ),
  ],

  "love-alchemy": [
    sec(
      BT.fourLoves,
      {
        title: "Defining the Four Different Types of Love",
        linkLabel:
          "Radiance Talley, “Defining the 4 Different Types of Love”",
        paragraphs: [
          "Drawing on ‘Abdu’l-Bahá, this essay maps four loves. First: God’s love for humanity—the grace that grants physical life and, through the Holy Spirit, eternal life. Second: humanity’s love for God—faith and attraction to the divine; Bahá’u’lláh’s “Love Me, that I may love thee” shows that receiving divine love depends on turning toward Him, and this upward love becomes the root of philanthropy.",
          "Third: God’s love for His own Identity—the Beauty reflected in creation’s mirrors, supremely in the Manifestations, and potentially in every heart cleansed to reflect divine attributes; through one ray of this love all other love exists. Fourth: human love for one another—seeing God’s beauty in another soul. Conditional fascination fades; true love endures and founds unity. Hearts first aglow with love of God can burn with kindness for every stranger.",
        ],
      },
      {
        title: "تعریف چهار گونهٔ محبت",
        linkLabel: "رِیدیِنس تَلی، «تعریف چهار گونهٔ محبت»",
        paragraphs: [
          "با تکیه بر حضرت عبدالبهاء، این مقاله چهار عشق را می‌نمایاند. نخست: عشق خدا به انسان—فضلی که حیات جسمانی می‌بخشد و از روح‌القدس حیات ابدی. دوم: عشق انسان به خدا—ایمان و جذب به حق؛ «مرا دوست بدار تا تو را دوست بدارم» نشان می‌دهد دریافت عشق الهی به روی‌آوردن وابسته است و این عشق صعودی ریشهٔ خدمت به بشر می‌شود.",
          "سوم: عشق خدا به هویت خویش—جمالی منعکس در آیینه‌های خلق، به کمال در مظاهر، و بالقوه در هر قلبی که برای انعکاس صفات الهی صیقل یابد؛ از یک پرتو این عشق همهٔ عشق‌های دیگر هست. چهارم: عشق انسان به انسان—دیدن جمال خدا در روح دیگری. شیفتگی مشروط می‌میرد؛ عشق راستین می‌ماند و بنیاد وحدت است. قلوبی که نخست به عشق خدا روشن شوند می‌توانند برای هر بیگانه‌ای به مهر بسوزند.",
        ],
      }
    ),
  ],

  "spiritualizing-world": [
    sec(
      BT.loveUnity,
      {
        title: "The Eternal Rule: Concentrating Hearts on Love and Unity",
        linkLabel:
          "Jennifer Campbell, “The Eternal Rule: Concentrating Our Hearts on Love and Unity”",
        paragraphs: [
          "Echoing the Buddhist saying that hatred ceases only by love, this commentary centers ‘Abdu’l-Bahá’s charge: concentrate every thought of the heart on love and unity. A thought of war is to be opposed by a stronger thought of peace; hatred destroyed by a more powerful love. Positive spiritual desire, sincerely held, can spread until it becomes the desire of many minds.",
          "Love is defined as the Holy Spirit’s eternal breath—the bond in the realities of things, the law of the age, the force that builds true civilization. While nations think of warfare and self, Bahá’ís are called to be peacemakers, mindful of others, awake. Concentrating the heart on love and unity is thus the daily alchemy that spiritualizes a wounded world.",
        ],
      },
      {
        title: "قانون ابدی: تمرکز قلوب بر عشق و وحدت",
        linkLabel:
          "جنیفر کمبل، «قانون ابدی: تمرکز قلوب بر عشق و وحدت»",
        paragraphs: [
          "با پژواک سخن بودا که نفرت جز به عشق باز نمی‌ایستد، این تفسیر بر امر حضرت عبدالبهاء تکیه می‌کند: همهٔ افکار قلب را بر عشق و وحدت متمرکز کن. فکر جنگ را با فکر قوی‌تر صلح پاسخ ده؛ نفرت را با عشقی نیرومندتر نابود کن. آرزوی روحانی مثبت، اگر خالص باشد، می‌تواند گسترش یابد تا آرزوی ذهن‌های بسیار شود.",
          "عشق نفس ابدی روح‌القدس تعریف می‌شود—پیوند در حقایق اشیا، قانون عصر، نیرویی که تمدن راستین می‌سازد. وقتی ملل به جنگ و خود می‌اندیشند، بهائیان به صلح‌سازی، توجه به دیگران و بیداری خوانده می‌شوند. تمرکز قلب بر عشق و وحدت کیمیای روزانه‌ای است که جهان زخمی را روحانی می‌کند.",
        ],
      }
    ),
  ],
};

export function getDoorSourceSections(slug: DoorSlug): {
  en: DoorSourceSection[];
  fa: DoorSourceSection[];
} {
  const list = SECTIONS[slug] ?? [];
  return {
    en: list.map((s) => s.en),
    fa: list.map((s) => s.fa),
  };
}
