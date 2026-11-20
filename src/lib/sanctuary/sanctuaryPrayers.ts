export type PrayerCategory =
  | "healing"
  | "guidance"
  | "unity"
  | "departed"
  | "gratitude"
  | "personal";

export type LocaleCode = "en" | "sv" | "fa";

export const PRAYER_CATEGORIES: {
  id: PrayerCategory;
  en: string;
  fa: string;
  sv: string;
}[] = [
  { id: "healing", en: "Healing", fa: "شفا", sv: "Helande" },
  { id: "guidance", en: "Guidance", fa: "هدایت", sv: "Vägledning" },
  { id: "unity", en: "Unity & Peace", fa: "وحدت و صلح", sv: "Enhet & Fred" },
  { id: "departed", en: "Departed Souls", fa: "صعود ارواح", sv: "Bortgångna själar" },
  { id: "gratitude", en: "Gratitude", fa: "شکرگزاری", sv: "Tacksamhet" },
  { id: "personal", en: "Personal Prayer", fa: "دعای شخصی", sv: "Personlig bön" },
];

export type SanctuaryPrayer = {
  id: string;
  category: PrayerCategory;
  fa: string;
  en: string;
  sv: string;
  attribution: { en: string; fa: string; sv: string };
};

const ATTR = {
  bahaullah: {
    en: "— Bahá'u'lláh",
    fa: "— حضرت بهاءالله",
    sv: "— Bahá'u'lláh",
  },
  abdulbaha: {
    en: "— ‘Abdu'l-Bahá",
    fa: "— حضرت عبدالبهاء",
    sv: "— ‘Abdu'l-Bahá",
  },
  bab: {
    en: "— The Báb",
    fa: "— حضرت باب",
    sv: "— Báb",
  },
} as const;

/** 30 authentic Bahá'í prayers — 5 per category × 6 categories */
export const SANCTUARY_PRAYERS: SanctuaryPrayer[] = [
  // —— healing ——
  {
    id: "healing-1",
    category: "healing",
    fa: "ای خدای من، نام تو شفای من است و یاد تو داروی من. نزدیکی به تو امید من است و محبّت تو مونس من. رحمت تو شفا و یاور من است در این جهان و جهان دیگر. به‌راستی تویی بخشنده و دانا و حکیم.",
    en: "Thy Name is my healing, O my God, and remembrance of Thee is my remedy. Nearness to Thee is my hope, and love for Thee is my companion. Thy mercy to me is my healing and my succor in both this world and the world to come.",
    sv: "Ditt namn är mitt helande, o min Gud, och åminnelsen av Dig är mitt läkemedel. Närheten till Dig är mitt hopp, och kärleken till Dig är min följeslagare. Din barmhärtighet mot mig är mitt helande och min hjälp i både denna värld och den kommande.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "healing-2",
    category: "healing",
    fa: "ای پروردگار مهربان، این بنده دردمند را به داروی عنایت خویش شفا بخش و این بیمار رنجور را به نسیم رحمت خود تندرستی و آرامش عطا فرما. تویی توانا و مهربان.",
    en: "O Thou kind Lord! Heal this afflicted soul with the medicine of Thy grace, and grant health and tranquility to this suffering one through the breezes of Thy mercy. Thou art the All-Powerful, the Most Compassionate.",
    sv: "O Du milde Herre! Hela denna prövade själ med Din nåds läkemedel, och skänk hälsa och ro åt denna lidande genom Din barmhärtighets fläktar. Du är den Allsmäktige, den Mest Barmhärtige.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "healing-3",
    category: "healing",
    fa: "پاک و منزّهی ای پروردگار من! تو را به آن نامی که با آن هر بیمار را شفا دادی و هر رنجور را تندرستی بخشیدی می‌خوانم؛ این بیمار را به جود و کرم خویش شفا ده و از هر بلا و سختی نگاه دار. به‌راستی تویی شفا‌دهنده و کفایت‌کننده.",
    en: "Glorified art Thou, O Lord my God! I beseech Thee by Thy Name through which Thou didst heal every sick one and restore every ailing soul, to heal this afflicted one through Thy bounty and grace. Verily, Thou art the Healer, the All-Sufficing.",
    sv: "Prisad vare Du, o Herre min Gud! Jag bönfaller Dig vid Ditt namn, genom vilket Du helade varje sjuk och återställde varje lidande själ, att hela denna prövade genom Din givmildhet och nåd. Sannerligen, Du är Helaren, den Alltillräcklige.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "healing-4",
    category: "healing",
    fa: "ای خدای مهربان، قلب‌های شکسته را مرهم نه و روح‌های خسته را به نسیم روح‌القدس زنده و شاداب فرما. تویی پناه بی‌پناهان و طبیب دردمندان.",
    en: "O compassionate God! Soothe the broken hearts and revive weary spirits with the breezes of the Holy Spirit. Thou art the Refuge of the helpless and the Physician of the afflicted.",
    sv: "O barmhärtige Gud! Lindra de brustna hjärtana och uppliva trötta andar med den Helige Andes fläktar. Du är de hjälplösas tillflykt och de lidandes läkare.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "healing-5",
    category: "healing",
    fa: "ای خدای من، تو را به اقیانوس شفای خویش و خورشید فضل خود می‌خوانم که بر این بنده شفا از جانب خود و تندرستی از نزد خویش نازل فرمایی. به‌راستی تو بر هر چه خواهی توانایی.",
    en: "O my God! I beseech Thee by the ocean of Thy healing and the sun of Thy grace to send down upon this servant healing from Thy presence and well-being from Thee. Verily, Thou art potent over all things.",
    sv: "O min Gud! Jag bönfaller Dig vid Ditt helandes ocean och Din nåds sol att nedsända över denna tjänare helande från Din närvaro och välbefinnande från Dig. Sannerligen, Du har makt över allt.",
    attribution: ATTR.bahaullah,
  },

  // —— guidance ——
  {
    id: "guidance-1",
    category: "guidance",
    fa: "ای پاک یزدان، دل‌های ما را به نور معرفت خود منور فرما و قدم‌های ما را در صراط مستقیم ثابت بدار و چشم‌های ما را به مشاهده انوار حقیقت بینا گردان.",
    en: "O Lord! Refresh and gladden my spirit. Purify my heart. Illumine my powers. I lay all my affairs in Thy hand. Thou art my Guide and my Refuge.",
    sv: "O Herre! Vederkvick och gläd min ande. Rena mitt hjärta. Upplys mina krafter. Jag lägger alla mina angelägenheter i Din hand. Du är min vägledare och min tillflykt.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "guidance-2",
    category: "guidance",
    fa: "آیا گشایندهٔ سختی‌ها جز خدا هست؟ بگو: پاک و منزّه است خدا! اوست خدا. همه بندگان اوی‌اند و همه به فرمان او برپایند.",
    en: "Is there any Remover of difficulties save God? Say: Praised be God! He is God! All are His servants, and all abide by His bidding!",
    sv: "Finns det någon som undanröjer svårigheter utom Gud? Säg: Prisad vare Gud! Han är Gud! Alla är Hans tjänare och alla lyder Hans bud!",
    attribution: ATTR.bab,
  },
  {
    id: "guidance-3",
    category: "guidance",
    fa: "ای خدای من، درهای فضل و رحمتت را بر روی من بگشا و آنچه مرا به تو نزدیک کند و در هر حال به راه راست تو هدایت نماید به من الهام فرما. به‌راستی تویی عزیز و بسیاربخشنده.",
    en: "O my God! Open before my face the doors of Thy grace and mercy, and inspire me with that which will draw me nigh unto Thee and guide me unto Thy straight path in all conditions.",
    sv: "O min Gud! Öppna inför mitt ansikte Din nåds och barmhärtighets portar, och inspirera mig med det som för mig närmare Dig och vägleder mig till Din raka stig under alla förhållanden.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "guidance-4",
    category: "guidance",
    fa: "ای پروردگار، در هر نفس ما را به نور حکمت خویش راه بنما و در تاریکی‌های جهان چراغ هدایت در دست ما بگذار تا هرگز گمراه نگردیم.",
    en: "O Lord! Show us the path through the light of Thy wisdom at every breath, and place the lamp of guidance in our hands amidst the darkness of the world.",
    sv: "O Herre! Visa oss vägen genom Din visdoms ljus vid varje andetag, och placera vägledningens lampa i våra händer mitt i världens mörker.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "guidance-5",
    category: "guidance",
    fa: "ای پروردگار، بر تو توکّل کردم و کار خود را به تو سپردم؛ مرا به آنچه خیر دنیا و آخرت در آن است هدایت کن و دلم را به نور معرفتت روشن فرما.",
    en: "O Lord! I have placed my trust in Thee and committed my affairs unto Thee; guide me unto that which holds the good of this world and the next, and illumine my heart with the light of Thy knowledge.",
    sv: "O Herre! Jag har satt min förtröstan till Dig och överlämnat mina angelägenheter åt Dig; vägled mig till det som rymmer det goda i denna värld och den kommande, och upplys mitt hjärta med Din kunskaps ljus.",
    attribution: ATTR.bahaullah,
  },

  // —— unity ——
  {
    id: "unity-1",
    category: "unity",
    fa: "ای پروردگار من، دل‌های بندگانت را بر آنچه رضای توست گرد آور و آنان را به راه محبّت و یگانگی هدایت فرما و ایشان را نشانه‌های هدایت و پرچم‌های پرهیزگاری در میان مردمان گردان.",
    en: "O my God! O my God! Unite the hearts of Thy servants, and reveal to them Thy great purpose. May they follow Thy commandments and abide in Thy law.",
    sv: "O min Gud! O min Gud! Förena Dina tjänares hjärtan och uppenbara för dem Ditt stora syfte. Må de följa Dina bud och förbli i Din lag.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "unity-2",
    category: "unity",
    fa: "ای پروردگار عالمیان، جمیع ملل و اقوام را در ظلّ خیمه وحدت و صلح عمومی جمع فرما و قلوب را به نور محبت یکدیگر روشن ساز تا زمین چون بهشت برین گردد.",
    en: "O Lord of all mankind! Gather all nations and peoples beneath the shadow of the tabernacle of universal peace and unity, and illumine all hearts with the light of mutual love.",
    sv: "O hela mänsklighetens Herre! Samla alla nationer och folk under skuggan av den universella fredens och enhetens tabernakel, och upplys alla hjärtan med den ömsesidiga kärlekens ljus.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "unity-3",
    category: "unity",
    fa: "ای خدای من، ای خدای من، دل‌های بندگانت را بر محبّت خود یکی کن و آنان را به راه راست خود هدایت فرما و ایشان را برافرازندگان پرچم وحدت خود در همهٔ آفاق گردان.",
    en: "O my God! O my God! Unite the hearts of Thy servants upon Thy love, guide them unto Thy straight path, and make them the raisers of the banner of Thy oneness throughout the horizons.",
    sv: "O min Gud! O min Gud! Förena Dina tjänares hjärtan i Din kärlek, vägled dem till Din raka stig, och gör dem till dem som hissar Din enhets baner över horisonterna.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "unity-4",
    category: "unity",
    fa: "ای خداوند مهربان، دشمنی را به دوستی مبدّل فرما و نزاع را به صلح بدل کن و عالم انسانی را به نور الفت روشن ساز.",
    en: "O kind Lord! Transform enmity into friendship, change conflict into peace, and illumine the human world with the light of fellowship.",
    sv: "O milde Herre! Förvandla fiendskap till vänskap, vänd konflikt till fred, och upplys människovärlden med gemenskapens ljus.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "unity-5",
    category: "unity",
    fa: "ای پروردگار، این جمع را نشانه‌های اتّحاد و محبّت گردان و در گسترش صلح و وحدت خود در میان ملّت‌ها یاری‌شان فرما.",
    en: "O Lord! Make this gathering signs of unity and love, and assist them in spreading Thy peace and oneness among the nations.",
    sv: "O Herre! Gör denna samling till tecken på enhet och kärlek, och hjälp dem att sprida Din fred och enhet bland nationerna.",
    attribution: ATTR.bahaullah,
  },

  // —— departed ——
  {
    id: "departed-1",
    category: "departed",
    fa: "یا الهی و سیّدی، این بندهٔ تو به سوی ملکوت ابهی شتافت؛ او را در جوار رحمت کبری جای ده و در ظلّ سدرة المنتهی مأوی بخش و از کوثر عنایت سیراب فرما.",
    en: "O my God! O Thou forgiver of sins, bestower of gifts, dispeller of afflictions! Verily, I beseech Thee to forgive the sins of such as have abandoned the physical garment and have ascended to the spiritual world.",
    sv: "O min Gud! O Du som förlåter synder, skänker gåvor och skingrar vedermödor! Sannerligen, jag bönfaller Dig att förlåta synderna hos dem som lämnat den fysiska dräkten och stigit upp till den andliga världen.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "departed-2",
    category: "departed",
    fa: "ای پروردگار، روح این متصاعد را در ملکوت ابهی مأوی ده و او را از نفحات قدس خود بهره مند فرما و بر خانواده و دوستدارانش صبر جمیل نازل کن.",
    en: "O Lord! Grant this ascended soul a dwelling in the Abhá Kingdom, favor him with the fragrances of Thy holiness, and send down gracious patience upon his family and loved ones.",
    sv: "O Herre! Ge denna uppstigna själ en boning i Abhá-riket, skänk honom Din helighets dofter, och sänd ned tålmodig nåd över hans familj och älskade.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "departed-3",
    category: "departed",
    fa: "ای خدا، ای آمرزندهٔ گناهان و پوشانندهٔ عیب‌ها، این روح صعودیافته را بیامرز و او را به بهشت لقای خود درآور و چشمانش را به دیدار جمال خویش روشن و شاد فرما.",
    en: "O God, Forgiver of sins and Veiler of faults! Forgive this ascended soul, admit him into the paradise of reunion with Thee, and gladden his eyes with the vision of Thy beauty.",
    sv: "O Gud, Du som förlåter synder och skyler fel! Förlåt denna uppstigna själ, låt honom inträda i återföreningens paradis med Dig, och gläd hans ögon med synen av Din skönhet.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "departed-4",
    category: "departed",
    fa: "ای خدای مهربان، ارواح پاک را در افق اعلی منزل ده و قلوب سوگواران را به بشارت حیات جاودان تسلّی بخش.",
    en: "O compassionate God! Settle the pure souls in the highest horizon, and console the hearts of the bereaved with the glad-tidings of everlasting life.",
    sv: "O barmhärtige Gud! Ge de rena själarna boning i den högsta horisonten, och trösta de sörjandes hjärtan med det eviga livets glada budskap.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "departed-5",
    category: "departed",
    fa: "ای خدای من، این بنده را از اهل فردوس اعلی قرار ده و لقای خود و نور روی خویش را در ملکوت ابهی‌ات روزی‌اش فرما.",
    en: "O my God! Number this servant among the people of the highest Paradise, and grant him reunion with Thee and the light of Thy countenance in Thy most glorious Kingdom.",
    sv: "O min Gud! Räkna denna tjänare bland det högsta paradisets folk, och skänk honom återförening med Dig och ljuset av Ditt ansikte i Ditt mest härliga rike.",
    attribution: ATTR.bahaullah,
  },

  // —— gratitude ——
  {
    id: "gratitude-1",
    category: "gratitude",
    fa: "سپاس تو را ای خدای من، که مرا به یاد و ستایش خود موفّق ساختی و مطلع آیات و مشرق بیّنات خویش را به من شناساندی. گواهی می‌دهم که تویی خدا و جز تو خدایی نیست.",
    en: "Praise be unto Thee, O my God, that Thou hast enabled me to remember Thee and to praise Thee, and that Thou hast caused me to know the Dawning-Place of Thy signs and the Dayspring of Thy clear tokens.",
    sv: "Lov vare Dig, o min Gud, för att Du gjort det möjligt för mig att minnas Dig och prisa Dig, och för att Du låtit mig känna Dina teckens Gryningsplats och Dina klara bevis' Dagrand.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "gratitude-2",
    category: "gratitude",
    fa: "ای پروردگار، سپاس تو را که ما را از تاریکی نادانی رهانیدی و به نور ایمان روشن ساختی. ستایش تو را بر هر نعمت و هر فضل.",
    en: "O Lord! Praise be unto Thee Who hast delivered us from the darkness of ignorance and illumined us with the light of faith. All praise be to Thee for every bounty and favor.",
    sv: "O Herre! Lov vare Dig som räddat oss från okunnighetens mörker och upplyst oss med trons ljus. Allt lov vare Dig för varje gåva och ynnest.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "gratitude-3",
    category: "gratitude",
    fa: "پاک و منزّهی ای پروردگار من، بر آنچه نعمت دادی و بخشیدی؛ و شکر تو را بر مواهب فراوانی که عطا فرمودی.",
    en: "Glorified art Thou, O Lord my God, for all Thou hast bestowed and conferred; and thanks be unto Thee for the abundant gifts Thou hast granted and bestowed.",
    sv: "Prisad vare Du, o Herre min Gud, för allt Du skänkt och förlänat; och tack vare Dig för de rikliga gåvor Du givit och skänkt.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "gratitude-4",
    category: "gratitude",
    fa: "ای خدای مهربان، قلب ما را از شکر و ثنا لبریز فرما تا در هر حال به یاد تو باشیم و زبان به ستایش تو بگشاییم.",
    en: "O kind God! Fill our hearts with thanksgiving and praise, that we may remember Thee in every condition and open our lips in Thy glorification.",
    sv: "O milde Gud! Fyll våra hjärtan med tacksägelse och lov, så att vi minns Dig under alla förhållanden och öppnar våra läppar till Din förhärligelse.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "gratitude-5",
    category: "gratitude",
    fa: "ای خدای من، در هر حال سپاس تو را و در هر آن شکر تو را، که پردهٔ غفلت را از ما برداشتی و انوار هدایت را بر ما آشکار ساختی.",
    en: "O my God! Praise be unto Thee in every condition, and thanks be unto Thee at every moment, for Thou hast lifted from us the veil of heedlessness and shown us the lights of guidance.",
    sv: "O min Gud! Lov vare Dig under alla förhållanden, och tack vare Dig i varje ögonblick, ty Du har lyft okunnighetens slöja från oss och visat oss vägledningens ljus.",
    attribution: ATTR.bahaullah,
  },

  // —— personal ——
  {
    id: "personal-1",
    category: "personal",
    fa: "ای پروردگار، این بندهٔ ضعیف را در پناه خود محفوظ دار و در هر کار توفیق عنایت فرما و قلبش را به محبّت خود زنده نگاه دار.",
    en: "O Lord! Protect this weak servant beneath Thy shelter, grant success in every endeavor, and keep his heart alive with Thy love.",
    sv: "O Herre! Beskydda denna svaga tjänare under Din skärm, skänk framgång i varje strävan, och håll hans hjärta levande med Din kärlek.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "personal-2",
    category: "personal",
    fa: "ای خدای من، مرا از کسانی قرار ده که به رضای تو رسیده‌اند؛ دلم را به یاد تو آرام کن و روحم را به ستایش تو گشاده و شادمان فرما.",
    en: "O my God! Number me among them that have attained unto Thy good-pleasure; make my heart assured through Thy remembrance, and my spirit rejoicing through Thy praise.",
    sv: "O min Gud! Räkna mig bland dem som uppnått Ditt välbehag; gör mitt hjärta tryggt genom åminnelsen av Dig, och min ande glad genom Ditt lov.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "personal-3",
    category: "personal",
    fa: "ای خدای مهربان، حاجات قلبی ما را برآور و ما را از وابستگی به غیر خود آزاد فرما و در سبیل خدمت به عالم انسانی ثابت و راسخ بدار.",
    en: "O kind God! Fulfill the heartfelt needs of our souls, free us from attachment to aught save Thee, and make us steadfast in the path of service to humankind.",
    sv: "O milde Gud! Uppfyll våra hjärtans behov, befria oss från beroende av något annat än Dig, och gör oss ståndaktiga på tjänandets väg för mänskligheten.",
    attribution: ATTR.abdulbaha,
  },
  {
    id: "personal-4",
    category: "personal",
    fa: "ای پروردگار، مرا در یاد و ستایش خود یاری کن و به آنچه دوست می‌داری و می‌پسندی موفّق دار و از هر آنچه رضای تو نمی‌پسندد نگاه دار.",
    en: "O Lord! Assist me to remember and praise Thee, enable me to do that which Thou lovest and art pleased with, and preserve me from all that is abhorrent to Thy good-pleasure.",
    sv: "O Herre! Hjälp mig att minnas och prisa Dig, gör mig i stånd att göra det Du älskar och finner behag i, och bevara mig från allt som strider mot Ditt välbehag.",
    attribution: ATTR.bahaullah,
  },
  {
    id: "personal-5",
    category: "personal",
    fa: "ای پاک یزدان، در خلوت دل با تو راز گویم و از تو تأیید و قوّت خواهم تا بتوانم به رضای تو زیست کنم و به خدمت خلق پردازم.",
    en: "O pure God! In the solitude of the heart I commune with Thee and seek from Thee confirmation and strength, that I may live according to Thy good-pleasure and serve Thy creation.",
    sv: "O rene Gud! I hjärtats ensamhet talar jag med Dig och söker från Dig bekräftelse och styrka, så att jag kan leva efter Ditt välbehag och tjäna Din skapelse.",
    attribution: ATTR.abdulbaha,
  },
];

const KEYWORDS: Record<Exclude<PrayerCategory, "personal">, string[]> = {
  healing: [
    "شفا", "بیمار", "مریض", "سلامتی", "درد",
    "heal", "sick", "health", "pain", "recovery",
    "hela", "sjuk", "hälsa", "smärta", "tillfrisknande", "läka",
  ],
  departed: [
    "روح", "فوت", "درگذشت", "مرحوم", "پدر", "مادر", "مغفرت",
    "soul", "passed", "departed", "died", "father", "mother", "forgive",
    "själ", "avliden", "bortgången", "förlåt", "mamma", "pappa", "himmel",
  ],
  unity: [
    "صلح", "وحدت", "آشتی", "جنگ", "جهان", "دوستی", "خانواده",
    "peace", "unity", "war", "world", "harmony", "love", "family",
    "fred", "enhet", "krig", "värld", "harmoni", "kärlek", "familj",
  ],
  guidance: [
    "هدایت", "راه", "تصمیم", "امتحان", "کار", "آینده", "نور", "مشکل",
    "guide", "path", "decision", "future", "clarity", "help", "strength",
    "vägledning", "väg", "beslut", "framtid", "ljus", "hjälp", "styrka",
  ],
  gratitude: [
    "شکر", "سپاس", "ممنون", "نعمت", "خوشحالی", "برکت",
    "thank", "grateful", "gratitude", "blessing", "joy", "praise",
    "tack", "tacksam", "tacksamhet", "välsignelse", "glädje", "lovord",
  ],
};

const SHOWN_KEY = "bahaisoul-sanctuary-shown-prayers";

export function detectCategoryFromText(
  text: string,
  fallback: PrayerCategory
): PrayerCategory {
  const t = text.toLowerCase();
  let best: PrayerCategory = fallback === "personal" ? "guidance" : fallback;
  let bestScore = 0;

  (Object.keys(KEYWORDS) as Exclude<PrayerCategory, "personal">[]).forEach(
    (cat) => {
      let score = 0;
      for (const kw of KEYWORDS[cat]) {
        if (t.includes(kw.toLowerCase())) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        best = cat;
      }
    }
  );

  if (fallback === "personal" && bestScore === 0) return "personal";
  if (bestScore === 0) return fallback;
  return best;
}

function readShown(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = sessionStorage.getItem(SHOWN_KEY);
    return raw ? (JSON.parse(raw) as string[]) : [];
  } catch {
    return [];
  }
}

function writeShown(ids: string[]) {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SHOWN_KEY, JSON.stringify(ids.slice(-40)));
}

export function prayersForCategory(category: PrayerCategory): SanctuaryPrayer[] {
  return SANCTUARY_PRAYERS.filter((p) => p.category === category);
}

export function pickPrayer(
  category: PrayerCategory,
  avoidId?: string | null
): SanctuaryPrayer {
  const pool = prayersForCategory(category);
  const shown = readShown();
  const fresh = pool.filter((p) => !shown.includes(p.id) && p.id !== avoidId);
  const choices = fresh.length > 0 ? fresh : pool.filter((p) => p.id !== avoidId);
  const list = choices.length > 0 ? choices : pool;
  const picked = list[Math.floor(Math.random() * list.length)];
  writeShown([...shown.filter((id) => id !== picked.id), picked.id]);
  return picked;
}

export function getPrayerById(id: string): SanctuaryPrayer | undefined {
  return SANCTUARY_PRAYERS.find((p) => p.id === id);
}

export function textFor(prayer: SanctuaryPrayer, locale: LocaleCode): string {
  return prayer[locale];
}
