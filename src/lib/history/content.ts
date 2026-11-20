import type { HistoryTopic } from "./types";

/**
 * Trilingual Bahá'í history — based only on official Bahá'í sources
 * (BWNS, bahai.org, Universal House of Justice, BIC).
 */
export const HISTORY_TOPICS: HistoryTopic[] = [
  {
    slug: "overview",
    title: {
      en: "Overview of Bahá'í History",
      sv: "Översikt över bahá'í-historien",
      fa: "مرور کلی تاریخ آیین بهائی",
    },
    subtitle: {
      en: "From Shiraz to a worldwide community",
      sv: "Från Shiraz till en världsomspännande gemenskap",
      fa: "از شیراز تا جامعه‌ای جهانی",
    },
    intro: {
      en: [
        "The Bahá'í Faith began with the mission entrusted by God to two Divine Messengers—the Báb and Bahá'u'lláh. It is an independent monotheistic religion that upholds the oneness of God, the oneness of religion, and the oneness of humanity, and calls every soul to investigate truth independently and to help build a peaceful global civilization.",
        "In Persian, تاریخ بهائی may refer either to the history of the Faith or to the Bahá'í calendar. This section presents the history; a dedicated page explains the Badíʻ calendar.",
        "The chronicle moves from the Báb’s declaration in Shiraz in 1844, through Bahá'u'lláh’s Revelation and forty years of exile, the ministry of ʻAbdu'l-Bahá, the Guardianship of Shoghi Effendi, and the election of the Universal House of Justice in 1963—guiding a worldwide Bahá'í community to the present day.",
      ],
      sv: [
        "Bahá'í-tron började med det uppdrag Gud anförtrodde två gudomliga budbärare—Báb och Bahá'u'lláh. Det är en självständig monoteistisk religion som värnar Guds enhet, religionernas enhet och mänsklighetens enhet, och som kallar varje själ att självständigt söka sanningen och bidra till en fredlig global civilisation.",
        "På persiska kan تاریخ بهائی syfta antingen på trons historia eller på bahá'í-kalendern. Här ges historien; en särskild sida förklarar Badíʻ-kalendern.",
        "Skildringen går från Bábs förkunnelse i Shiraz 1844, via Bahá'u'lláhs uppenbarelse och fyrtio års exil, ʻAbdu'l-Bahás mission, Shoghi Effendis förmynderskap och valet av Universella rättvisans hus 1963—som leder den världsomspännande bahá'ígemenskapen än i dag.",
      ],
      fa: [
        "آیین بهائی با رسالتی آغاز شد که خداوند به دو مظهر الهی—حضرت باب و حضرت بهاءالله—سپرده است. این آیین دینی مستقل و یکتاپرست است که وحدت خداوند، وحدت ادیان و وحدت عالم انسانی را می‌ستاید و هر نفسی را به تحری حقیقت و مشارکت در بنای تمدنی جهانی و صلح‌آمیز فرا می‌خواند.",
        "عبارت «تاریخ بهائی» می‌تواند به سرگذشت این آیین یا به گاه‌شماری بدیع اشاره کند. در این بخش تاریخ می‌آید؛ صفحهٔ جداگانه‌ای تقویم بدیع را شرح می‌دهد.",
        "این روایت از اظهار امر حضرت باب در شیراز در ۱۸۴۴ آغاز می‌شود و از ظهور و چهل سال تبعید حضرت بهاءالله، رسالت حضرت عبدالبهاء، ولایت حضرت شوقی افندی و انتخاب بیت‌العدل اعظم در ۱۹۶۳—که تا امروز جامعهٔ جهانی بهائی را هدایت می‌کند—می‌گذرد.",
      ],
    },
    milestones: [
      {
        period: {
          en: "1844–1850",
          sv: "1844–1850",
          fa: "۱۸۴۴–۱۸۵۰",
        },
        title: {
          en: "The Báb",
          sv: "Báb",
          fa: "حضرت باب",
        },
        body: {
          en: "In 1844 in Shiraz, Siyyid ʻAlí-Muḥammad took the title the Báb (“the Gate”) and announced that He had been sent by God to prepare humanity for a new age and for the coming of a Messenger greater than Himself. His teachings spread rapidly. More than twenty thousand of His followers, the Bábís, perished in massacres; the Báb Himself was publicly executed in Tabriz on 9 July 1850.",
          sv: "År 1844 i Shiraz antog Siyyid ʻAlí-Muḥammad titeln Báb (”Porten”) och förkunnade att Han sänts av Gud för att förbereda mänskligheten för en ny tid och för en budbärare större än Honom själv. Hans läror spred sig snabbt. Mer än tjugotusen av Hans följeslagare, bábíerna, dog i massakrer; Báb själv avrättades offentligt i Tabriz den 9 juli 1850.",
          fa: "در ۱۸۴۴ در شیراز، سید علی‌محمد لقب باب («دروازه») را برگزید و اعلام فرمود که از جانب خداوند آمده تا بشریت را برای عصری نو و ظهور مظهری عظیم‌تر از خود آماده سازد. تعالیم او به‌سرعت گسترش یافت. بیش از بیست‌هزار تن از پیروانش، بابیان، در قتل‌عام‌ها جان باختند؛ خود حضرت باب در ۹ ژوئیهٔ ۱۸۵۰ در تبریز در ملأ عام تیرباران شد.",
        },
      },
      {
        period: {
          en: "1852–1892",
          sv: "1852–1892",
          fa: "۱۸۵۲–۱۸۹۲",
        },
        title: {
          en: "Bahá'u'lláh",
          sv: "Bahá'u'lláh",
          fa: "حضرت بهاءالله",
        },
        body: {
          en: "Bahá'u'lláh (“the Glory of God”), born Mírzá Ḥusayn-ʻAlí in Tehran in 1817, was cast into the Síyáh-Chál dungeon in 1852 and then began forty years of exile and imprisonment. In 1863 in Baghdad He announced that He was the Universal Messenger foretold by the Báb. He revealed the Faith’s core Writings and passed away near Acre in 1892; His Shrine is the holiest place on earth for Bahá'ís.",
          sv: "Bahá'u'lláh (”Guds härlighet”), född Mírzá Ḥusayn-ʻAlí i Teheran 1817, kastades i Síyáh-Chál-fängelset 1852 och inledde sedan fyrtio års exil och fångenskap. År 1863 i Bagdad förkunnade Han att Han var den universella budbärare Báb förutsagt. Han uppenbarade trons kärnskrifter och avled nära Acre 1892; Hans helgedom är den heligaste platsen på jorden för bahá'íer.",
          fa: "حضرت بهاءالله («جلال خداوند»)، میرزا حسین‌علی زاده‌شده در تهران ۱۸۱۷، در ۱۸۵۲ به سیاه‌چال افکنده شد و سپس چهل سال تبعید و حبس آغاز گشت. در ۱۸۶۳ در بغداد اعلام فرمود که همان پیام‌آور کلی است که حضرت باب به ظهورش بشارت داده بود. آثار بنیادین آیین را نازل فرمود و در ۱۸۹۲ نزدیک عکا صعود کرد؛ روضهٔ مبارکه‌اش مقدس‌ترین نقطهٔ زمین برای بهائیان است.",
        },
      },
      {
        period: {
          en: "1892–1921",
          sv: "1892–1921",
          fa: "۱۸۹۲–۱۹۲۱",
        },
        title: {
          en: "ʻAbdu'l-Bahá",
          sv: "ʻAbdu'l-Bahá",
          fa: "حضرت عبدالبهاء",
        },
        body: {
          en: "In His Will, Bahá'u'lláh named His eldest son, ʻAbbás Effendi—ʻAbdu'l-Bahá (“Servant of Bahá”)—head of the Faith and authorized interpreter of His teachings. After release from Ottoman confinement in 1908, ʻAbdu'l-Bahá traveled through Europe and North America, encouraging Bahá'í communities and proclaiming His Father’s teachings. His Writings form part of Bahá'í sacred scripture.",
          sv: "I sitt testamente utnämnde Bahá'u'lláh sin äldste son, ʻAbbás Effendi—ʻAbdu'l-Bahá (”Bahás tjänare”)—till trons överhuvud och auktoriserad uttolkare av Hans läror. Efter frigivningen från osmansk fångenskap 1908 reste ʻAbdu'l-Bahá genom Europa och Nordamerika, uppmuntrade bahá'ígemenskaper och förkunnade Faderns läror. Hans skrifter ingår i bahá'íernas heliga texter.",
          fa: "حضرت بهاءالله در وصیت‌نامهٔ خود پسر ارشدشان، عباس افندی—حضرت عبدالبهاء («خادم بهاء»)—را سرپرست آیین و مبیّن منصوص تعالیم خویش تعیین فرمود. پس از آزادی از حصر عثمانی در ۱۹۰۸، ایشان در اروپا و آمریکای شمالی سفر کردند، جوامع بهائی را تشویق نمودند و تعالیم پدر را ابلاغ فرمودند. آثارشان بخشی از نصوص مقدّس بهائی است.",
        },
      },
      {
        period: {
          en: "1921–1957",
          sv: "1921–1957",
          fa: "۱۹۲۱–۱۹۵۷",
        },
        title: {
          en: "Shoghi Effendi, the Guardian",
          sv: "Shoghi Effendi, Förmyndaren",
          fa: "حضرت شوقی افندی، ولیّ امرالله",
        },
        body: {
          en: "ʻAbdu'l-Bahá appointed His grandson Shoghi Effendi Guardian of the Bahá'í Faith. During his ministry the Faith spread throughout the world and its local and national administrative institutions were established. With his passing in 1957 the line of hereditary leadership came to an end.",
          sv: "ʻAbdu'l-Bahá utnämnde sitt barnbarn Shoghi Effendi till Förmyndare för bahá'í-tron. Under hans mission spred sig tron världen över och dess lokala och nationella administrativa institutioner upprättades. Med hans bortgång 1957 upphörde den ärftliga ledarskapet.",
          fa: "حضرت عبدالبهاء نوهٔ خود شوقی افندی را ولیّ امر آیین بهائی تعیین فرمود. در دوران ایشان آیین در سراسر جهان گسترش یافت و مؤسسات اداری محلی و ملّی تأسیس شد. با صعود ایشان در ۱۹۵۷ سلسلهٔ رهبری موروثی پایان یافت.",
        },
      },
      {
        period: {
          en: "1963–present",
          sv: "1963–nutid",
          fa: "۱۹۶۳ تا امروز",
        },
        title: {
          en: "The Universal House of Justice",
          sv: "Universella rättvisans hus",
          fa: "بیت‌العدل اعظم",
        },
        body: {
          en: "In accordance with provisions established by Bahá'u'lláh, the Universal House of Justice was elected in 1963 to direct the affairs of the worldwide Bahá'í community. Its nine members are elected every five years by the members of the Bahá'í national administrative bodies around the world.",
          sv: "I enlighet med bestämmelser fastställda av Bahá'u'lláh valdes Universella rättvisans hus 1963 för att leda den världsomspännande bahá'ígemenskapens angelägenheter. Dess nio ledamöter väljs vart femte år av ledamöterna i bahá'íernas nationella administrativa organ världen över.",
          fa: "طبق تمهیدات حضرت بهاءالله، بیت‌العدل اعظم در ۱۹۶۳ برای ادارهٔ امور جامعهٔ بهائی جهان انتخاب شد. نُه عضو آن هر پنج سال یک‌بار توسط اعضای شوراهای اداری ملّی بهائی از سراسر جهان برگزیده می‌شوند.",
        },
      },
    ],
    sections: [
      {
        heading: {
          en: "The Covenant",
          sv: "Förbundet",
          fa: "میثاق",
        },
        paragraphs: {
          en: [
            "The distinctive unity of the Bahá'í Faith stems from explicit instructions given by Bahá'u'lláh that have assured the continuity of guidance after His passing. This line of succession—the Covenant—passed from Bahá'u'lláh to ʻAbdu'l-Bahá, and then from ʻAbdu'l-Bahá to Shoghi Effendi and the Universal House of Justice ordained by Bahá'u'lláh.",
            "A Bahá'í accepts the divine authority of the Báb and Bahá'u'lláh and of these appointed successors. Through progressive revelation, God has educated humanity through successive Manifestations—among Them Abraham, Moses, Buddha, Jesus Christ, Muḥammad, the Báb, and Bahá'u'lláh—one unfolding Faith guiding the human family toward maturity.",
          ],
          sv: [
            "Bahá'í-trons särpräglade enhet härrör från uttryckliga anvisningar från Bahá'u'lláh som säkrat vägledningens kontinuitet efter Hans bortgång. Denna successionslinje—Förbundet—gick från Bahá'u'lláh till ʻAbdu'l-Bahá, och sedan från ʻAbdu'l-Bahá till Shoghi Effendi och Universella rättvisans hus, förordnat av Bahá'u'lláh.",
            "En bahá'í erkänner Bábs och Bahá'u'lláhs gudomliga auktoritet och dessa utsedda efterträdares. Genom progressiv uppenbarelse har Gud fostrat mänskligheten genom på varandra följande Manifestationer—bland dem Abraham, Moses, Buddha, Jesus Kristus, Muḥammad, Báb och Bahá'u'lláh—en enda fortgående tro som leder människofamiljen mot mognad.",
          ],
          fa: [
            "وحدت ممتاز آیین بهائی از دستورات صریح حضرت بهاءالله برمی‌خیزد که تداوم هدایت را پس از صعود ایشان تضمین کرده است. این سلسلهٔ جانشینی—میثاق—از حضرت بهاءالله به حضرت عبدالبهاء، و سپس از حضرت عبدالبهاء به حضرت شوقی افندی و بیت‌العدل اعظم که حضرت بهاءالله مقرّر فرموده، رسیده است.",
            "بهائی مقام الهی حضرت باب و حضرت بهاءالله و این جانشینان منصوص را می‌پذیرد. از رهگذر ظهور تدریجی، خداوند بشریت را از طریق مظاهر متوالی—از جمله ابراهیم، موسی، بودا، حضرت مسیح، حضرت محمد، حضرت باب و حضرت بهاءالله—تربیت فرموده؛ آیینی یگانه که عائلهٔ بشری را به‌سوی بلوغ هدایت می‌کند.",
          ],
        },
      },
      {
        heading: {
          en: "How to explore this section",
          sv: "Hur du utforskar detta avsnitt",
          fa: "چگونه این بخش را بخوانید",
        },
        paragraphs: {
          en: [
            "Use the titles above to open each chapter: the Báb, Bahá'u'lláh, ʻAbdu'l-Bahá, the Faith in Iran, the Faith across the world, the Administrative Order, and the Badíʻ calendar. Every page draws on official Bahá'í sources.",
          ],
          sv: [
            "Använd titlarna ovan för att öppna varje kapitel: Báb, Bahá'u'lláh, ʻAbdu'l-Bahá, tron i Iran, tron över världen, den administrativa ordningen och Badíʻ-kalendern. Varje sida bygger på officiella bahá'íkällor.",
          ],
          fa: [
            "از عنوان‌های بالا هر فصل را بگشایید: حضرت باب، حضرت بهاءالله، حضرت عبدالبهاء، آیین در ایران، آیین در جهان، نظم اداری و گاه‌شماری بدیع. هر صفحه بر منابع رسمی بهائی استوار است.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "BWNS (FA) — تاریخ مختصر",
        url: "https://news.bahai.org/fa/media-information/brief-history",
      },
      {
        label: "bahai.org — Bahá'u'lláh and His Covenant",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/",
      },
    ],
  },

  {
    slug: "bab",
    title: {
      en: "The Báb",
      sv: "Báb",
      fa: "حضرت باب",
    },
    subtitle: {
      en: "1844–1850 · Herald of the Bahá'í Faith",
      sv: "1844–1850 · Bahá'í-trons förelöpare",
      fa: "۱۸۴۴–۱۸۵۰ · مبشّر آیین بهائی",
    },
    intro: {
      en: [
        "The Báb is the Herald of the Bahá'í Faith. In the middle of the nineteenth century He announced that He was the bearer of a message destined to transform humanity’s spiritual life. His mission was to prepare the way for the coming of a second Messenger from God, greater than Himself, Who would usher in an age of peace and justice.",
        "In Shiraz in 1844, Siyyid ʻAlí-Muḥammad declared that He had been sent by God to prepare humanity for a new age and for the imminent appearance of that greater Manifestation. He took the title the Báb—“Gate” in Arabic.",
      ],
      sv: [
        "Báb är bahá'í-trons förelöpare. Mitt i 1800-talet förkunnade Han att Han bar ett budskap avsett att förvandla mänsklighetens andliga liv. Hans uppdrag var att bereda vägen för en andra budbärare från Gud, större än Honom själv, som skulle inleda en tid av fred och rättvisa.",
        "I Shiraz 1844 förklarade Siyyid ʻAlí-Muḥammad att Han sänts av Gud för att förbereda mänskligheten för en ny tid och för den snara ankomsten av den större Manifestationen. Han antog titeln Báb—”Port” på arabiska.",
      ],
      fa: [
        "حضرت باب مبشّر آیین بهائی است. در میانهٔ سدهٔ نوزدهم اعلام فرمود که حامل پیامی است که مقدّر است حیات روحانی بشریت را دگرگون سازد. رسالت ایشان آماده‌ساختن راه برای ظهور مظهر دوم الهی، عظیم‌تر از خود، بود که عصر صلح و عدالت را آغاز می‌کند.",
        "در شیراز در ۱۸۴۴ سید علی‌محمد اعلام فرمود که از جانب خداوند آمده تا بشریت را برای عصری نو و ظهور قریب آن مظهر عظیم‌تر آماده سازد. لقب باب—به معنای «دروازه» در عربی—را برگزید.",
      ],
    },
    sections: [
      {
        heading: {
          en: "Station, Writings, and the Letters of the Living",
          sv: "Station, skrifter och de Levandes brev",
          fa: "مقام، آثار و حروف حی",
        },
        paragraphs: {
          en: [
            "Bahá'ís recognize the Báb as both an independent Messenger of God and the forerunner of Bahá'u'lláh. The one Whose coming He foretold would be the universal Manifestation of God sent to inaugurate an age of peace and enlightenment promised in all the world’s religions.",
            "His teachings spread rapidly across Persia. Among His earliest disciples were the Letters of the Living, who carried His message throughout the land. His Writings—among them the Bayán—set forth spiritual truths and laws for a new Day and continually directed hearts toward “Him Whom God shall make manifest.”",
          ],
          sv: [
            "Bahá'íer erkänner Báb både som en självständig Guds budbärare och som förelöpare till Bahá'u'lláh. Den vars ankomst Han förutsade skulle vara den universella Guds Manifestation sänd att inleda en tid av fred och upplysning som utlovats i alla världens religioner.",
            "Hans läror spred sig snabbt genom Persien. Bland Hans tidigaste lärjungar fanns de Levandes brev, som bar Hans budskap genom landet. Hans skrifter—däribland Bayán—framställde andliga sanningar och lagar för en ny Dag och riktade ständigt hjärtan mot ”Den som Gud skall uppenbara”.",
          ],
          fa: [
            "بهائیان حضرت باب را هم پیام‌آور الهی مستقل و هم مبشّر حضرت بهاءالله می‌شناسند. آن‌که به ظهورش وعده داد، مظهر کلی الهی است که مطابق وعدهٔ همهٔ ادیان جهان، عصر صلح و روشنایی را آغاز می‌کند.",
            "تعالیم ایشان به‌سرعت در ایران گسترش یافت. از جملهٔ اصحاب نخستین، حروف حی بودند که پیام ایشان را در سراسر دیار بردند. آثارشان—از جمله بیان—حقایق روحانی و احکام یومی جدید را بیان فرمود و پیوسته قلوب را به‌سوی «من یظهره‌الله» متوجه ساخت.",
          ],
        },
      },
      {
        heading: {
          en: "Persecution and martyrdom",
          sv: "Förföljelse och martyrskap",
          fa: "آزار و شهادت",
        },
        paragraphs: {
          en: [
            "The Báb’s teachings, which spread with great rapidity, were regarded as heretical by the clergy and government of Persia. More than twenty thousand of His followers perished in a series of massacres throughout the country.",
            "The Báb Himself was publicly executed in Tabriz on 9 July 1850. His sacred remains were later interred on Mount Carmel in Haifa, where the Shrine of the Báb stands today at the heart of the Bahá'í World Centre.",
          ],
          sv: [
            "Bábs läror, som spred sig med stor snabbhet, betraktades som kätterska av prästerskapet och regeringen i Persien. Mer än tjugotusen av Hans följeslagare dog i en serie massakrer över hela landet.",
            "Báb själv avrättades offentligt i Tabriz den 9 juli 1850. Hans heliga stoft begravdes senare på Karmelberget i Haifa, där Bábs helgedom i dag står i hjärtat av Bahá'í World Centre.",
          ],
          fa: [
            "تعالیم حضرت باب که به‌سرعت گسترش می‌یافت، از دید روحانیون و دولت ایران بدعت شمرده می‌شد. بیش از بیست‌هزار تن از پیروان ایشان در چند قتل‌عام در سراسر کشور جان باختند.",
            "خود حضرت باب در ۹ ژوئیهٔ ۱۸۵۰ در تبریز در ملأ عام تیرباران شد. جسد مطهر ایشان بعدها در کوه کرمل حیفا به خاک سپرده شد؛ جایی که امروز روضهٔ حضرت باب در قلب مرکز جهانی بهائی قرار دارد.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "BWNS (FA) — تاریخ مختصر",
        url: "https://news.bahai.org/fa/media-information/brief-history",
      },
      {
        label: "bahai.org — The Báb",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/the-bab/",
      },
    ],
  },

  {
    slug: "bahaullah",
    title: {
      en: "Bahá'u'lláh",
      sv: "Bahá'u'lláh",
      fa: "حضرت بهاءالله",
    },
    subtitle: {
      en: "1817–1892 · The Glory of God",
      sv: "1817–1892 · Guds härlighet",
      fa: "۱۸۱۷–۱۸۹۲ · جلال خداوند",
    },
    intro: {
      en: [
        "Bahá'u'lláh—the “Glory of God”—is the Promised One foretold by the Báb and all of the Divine Messengers of the past. He delivered a new Revelation from God to humanity. Thousands of verses, letters, and books flowed from His pen. In His Writings He outlined a framework for the development of a global civilization that embraces both the spiritual and material dimensions of human life. For this He endured forty years of imprisonment, torture, and exile.",
        "Born into a noble family in Tehran on 12 November 1817, Mírzá Ḥusayn-ʻAlí in His mid-twenties declined a life of privilege and became one of the leading disciples of the Báb.",
      ],
      sv: [
        "Bahá'u'lláh—”Guds härlighet”—är den utlovade som förutsagts av Báb och alla tidigare gudomliga budbärare. Han framförde en ny uppenbarelse från Gud till mänskligheten. Tusentals verser, brev och böcker flödade från Hans penna. I Hans skrifter skisserades en ram för en global civilisation som omfattar både andliga och materiella dimensioner av människolivet. För detta uthärdade Han fyrtio års fångenskap, tortyr och exil.",
        "Född i en adlig familj i Teheran den 12 november 1817 avstod Mírzá Ḥusayn-ʻAlí i tjugoårsåldern från ett liv i privilegium och blev en av Bábs främsta lärjungar.",
      ],
      fa: [
        "حضرت بهاءالله—«جلال خداوند»—همان موعودی است که حضرت باب و همهٔ مظاهر الهی گذشته به ظهورش بشارت داده‌اند. ایشان ظهور جدیدی از خداوند برای بشریت آوردند. هزاران آیه و لوح و کتاب از قلم مبارک جاری شد. در آثارشان چارچوبی برای بنای تمدنی جهانی ترسیم فرمودند که هر دو بُعد روحانی و مادی حیات انسان را در بر می‌گیرد. برای این رسالت چهل سال حبس و شکنجه و تبعید را تحمل فرمودند.",
        "میرزا حسین‌علی در ۱۲ نوامبر ۱۸۱۷ در خانواده‌ای اصیل در تهران زاده شد؛ در بیست‌وچندسالگی زندگی مرفه را کنار گذاشت و از پیروان برجستهٔ حضرت باب گشت.",
      ],
    },
    sections: [
      {
        heading: {
          en: "From the Síyáh-Chál to Acre",
          sv: "Från Síyáh-Chál till Acre",
          fa: "از سیاه‌چال تا عکا",
        },
        paragraphs: {
          en: [
            "In 1852, in the course of the persecution of the Bábís, Bahá'u'lláh was arrested, beaten, and thrown into an infamous dungeon in Tehran—the Síyáh-Chál. After four months He was released and banished from His native land—the beginning of forty years of exile and imprisonment.",
            "He was first sent to Baghdad, where He and His companions remained for ten years. In 1863, on the eve of further banishment toward what is now Turkey and then the Holy Land, Bahá'u'lláh announced that He was the Universal Messenger of God foretold by the Báb. The Riḍván festival commemorates those twelve days of Declaration.",
            "In 1868 He arrived in the Holy Land with about seventy family members and followers, sentenced by the Ottoman authorities to perpetual confinement in the prison-city of Acre. In time He was able to live outside the city walls at Bahjí, where He passed away in 1892. He was interred there; His Shrine is the Qiblih of the Bahá'í world.",
          ],
          sv: [
            "År 1852, under förföljelsen av bábíerna, arresterades Bahá'u'lláh, misshandlades och kastades i ett ökänt fängelse i Teheran—Síyáh-Chál. Efter fyra månader frigavs Han och förvisades från sitt fosterland—början på fyrtio års exil och fångenskap.",
            "Han sändes först till Bagdad, där Han och Hans följeslagare stannade i tio år. År 1863, inför vidare förvisning mot det som nu är Turkiet och sedan det Heliga landet, förkunnade Bahá'u'lláh att Han var den universella Guds budbärare som Báb förutsagt. Riḍván-festen högtidlighåller dessa tolv dagars förkunnelse.",
            "År 1868 anlände Han till det Heliga landet med omkring sjuttio familjemedlemmar och följeslagare, dömda av de osmanska myndigheterna till livstidsförvisning i fängelsestaden Acre. Med tiden kunde Han bo utanför stadsmurarna i Bahjí, där Han avled 1892. Han begravdes där; Hans helgedom är bahá'ívärldens Qiblih.",
          ],
          fa: [
            "در ۱۸۵۲، در جریان آزار بابیان، حضرت بهاءالله دستگیر، مضروب و در سیاه‌چال تهران زندانی شد. پس از چهار ماه آزاد و از وطن تبعید گشت—آغاز چهل سال تبعید و حبس.",
            "نخست به بغداد فرستاده شد و ده سال با همراهان در آنجا ماند. در ۱۸۶۳، در آستانهٔ تبعید به‌سوی ترکیهٔ کنونی و سپس ارض اقدس، اعلام فرمود که همان پیام‌آور کلی الهی است که حضرت باب بشارت داده بود. عید رضوان یاد آن دوازده روز اظهار امر است.",
            "در ۱۸۶۸ با حدود هفتاد تن از اهل بیت و اصحاب به اراضی مقدّسه وارد شد و از سوی مقامات عثمانی به حبس ابد در عکا محکوم گشت. سرانجام توانست بیرون دیوارهای شهر در بهجی ساکن شود و در ۱۸۹۲ در همان‌جا صعود فرمود. آرامگاه مبارک قبلهٔ عالم بهائی است.",
          ],
        },
      },
      {
        heading: {
          en: "Writings and the Covenant",
          sv: "Skrifter och Förbundet",
          fa: "آثار و میثاق",
        },
        paragraphs: {
          en: [
            "During those forty years of exile Bahá'u'lláh revealed books, tablets, and letters that form the core of Bahá'í sacred scripture—the equivalent of some one hundred volumes. They describe the nature of God and the purpose of human existence, set forth new religious laws, and outline a vision of a peaceful and prosperous global society.",
            "In His Will He named His eldest son, ʻAbbás Effendi—ʻAbdu'l-Bahá—head of the Faith and authorized interpreter of His teachings, establishing the Covenant that has preserved the unity of His Cause.",
          ],
          sv: [
            "Under dessa fyrtio års exil uppenbarade Bahá'u'lláh böcker, tavlor och brev som utgör kärnan i bahá'íernas heliga skrifter—motsvarande omkring hundra volymer. De beskriver Guds natur och människans existenssyfte, fastställer nya religiösa lagar och skisserar visionen av ett fredligt och blomstrande globalt samhälle.",
            "I sitt testamente utnämnde Han sin äldste son, ʻAbbás Effendi—ʻAbdu'l-Bahá—till trons överhuvud och auktoriserad uttolkare, och grundade det Förbund som bevarat Hans sakens enhet.",
          ],
          fa: [
            "طی آن چهل سال تبعید، حضرت بهاءالله کتاب‌ها و الواح و نامه‌هایی نازل فرمود که هستهٔ مرکزی آثار مقدّس بهائی را می‌سازد—معادل حدود صد مجلد. این آثار ماهیت خداوند و هدف وجود انسان را شرح می‌دهد، احکام جدید دینی می‌آورد و چشم‌انداز اجتماعی جهانی مرفه و سرشار از صلح را ترسیم می‌کند.",
            "در وصیت‌نامهٔ خود پسر ارشد، عباس افندی—حضرت عبدالبهاء—را سرپرست آیین و مبیّن منصوص تعیین فرمود و میثاقی نهاد که وحدت امرش را محفوظ داشته است.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "BWNS (FA) — تاریخ مختصر",
        url: "https://news.bahai.org/fa/media-information/brief-history",
      },
      {
        label: "bahai.org — Bahá'u'lláh",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/bahaullah/",
      },
    ],
  },

  {
    slug: "abdul-baha",
    title: {
      en: "ʻAbdu'l-Bahá",
      sv: "ʻAbdu'l-Bahá",
      fa: "حضرت عبدالبهاء",
    },
    subtitle: {
      en: "1844–1921 · Centre of the Covenant",
      sv: "1844–1921 · Förbundets centrum",
      fa: "۱۸۴۴–۱۹۲۱ · مرکز میثاق",
    },
    intro: {
      en: [
        "ʻAbdu'l-Bahá (“Servant of Bahá”), eldest son of Bahá'u'lláh, was appointed in His Father’s Will as head of the Faith and authorized interpreter of the teachings. He is known to Bahá'ís as the Centre of the Covenant. His Writings are part of Bahá'í sacred scripture.",
        "He became well known in the Haifa–Acre region for His charitable works. After the Young Turk Revolution ended His confinement in 1908, He traveled through Europe and North America to encourage nascent Bahá'í communities and to proclaim Bahá'u'lláh’s teachings to the public.",
      ],
      sv: [
        "ʻAbdu'l-Bahá (”Bahás tjänare”), Bahá'u'lláhs äldste son, utnämndes i Faderns testamente till trons överhuvud och auktoriserad uttolkare av lärorna. Bahá'íer känner Honom som Förbundets centrum. Hans skrifter ingår i bahá'íernas heliga texter.",
        "Han blev känd i Haifa–Acre-området för sina välgörande gärningar. Efter att Ungturkiska revolutionen upphävde Hans fångenskap 1908 reste Han genom Europa och Nordamerika för att uppmuntra begynnande bahá'ígemenskaper och förkunna Bahá'u'lláhs läror för allmänheten.",
      ],
      fa: [
        "حضرت عبدالبهاء («خادم بهاء»)، پسر ارشد حضرت بهاءالله، در وصیت‌نامهٔ پدر به‌عنوان سرپرست آیین و مبیّن منصوص تعالیم تعیین شد. بهائیان ایشان را مرکز میثاق می‌شناسند. آثارشان بخشی از نصوص مقدّس بهائی است.",
        "در منطقهٔ حیفا و عکا به اقدامات نوع‌دوستانه معروف بودند. پس از آنکه انقلاب ترکان جوان در ۱۹۰۸ حصر را پایان داد، برای تشویق جوامع نوپای بهائی و ابلاغ تعالیم حضرت بهاءالله به عموم، در اروپا و آمریکای شمالی سفر فرمودند.",
      ],
    },
    sections: [
      {
        heading: {
          en: "Journeys to the West",
          sv: "Resor till Väst",
          fa: "سفرها به غرب",
        },
        paragraphs: {
          en: [
            "Between 1911 and 1913 ʻAbdu'l-Bahá visited Europe and North America. He spoke in churches, synagogues, universities, and private gatherings, proclaiming the oneness of humanity, the equality of women and men, racial unity, and the promise of universal peace.",
            "These journeys strengthened the early Western Bahá'í communities and planted seeds that would later carry the Faith to every continent.",
          ],
          sv: [
            "Mellan 1911 och 1913 besökte ʻAbdu'l-Bahá Europa och Nordamerika. Han talade i kyrkor, synagogor, universitet och privata sammankomster och förkunnade mänsklighetens enhet, jämställdhet mellan kvinnor och män, rasenhet och löftet om universell fred.",
            "Dessa resor stärkte de tidiga västerländska bahá'ígemenskaperna och sådde frön som senare bar tron till varje kontinent.",
          ],
          fa: [
            "میان ۱۹۱۱ و ۱۹۱۳ حضرت عبدالبهاء اروپا و آمریکای شمالی را دیدند. در کلیساها، کنیسه‌ها، دانشگاه‌ها و مجامع خصوصی سخن گفتند و وحدت عالم انسانی، تساوی زن و مرد، وحدت نژادی و وعدهٔ صلح عمومی را ابلاغ فرمودند.",
            "این سفرها جوامع نخستین غربی را استوار ساخت و بذرهایی کاشت که بعدها آیین را به هر قاره برد.",
          ],
        },
      },
      {
        heading: {
          en: "The Will and Testament",
          sv: "Testamentet",
          fa: "الواح وصایا",
        },
        paragraphs: {
          en: [
            "ʻAbdu'l-Bahá passed away in Haifa in 1921. In His Will and Testament He appointed His grandson Shoghi Effendi Guardian of the Bahá'í Faith and outlined the future election of the Universal House of Justice, thereby continuing the Covenant established by Bahá'u'lláh.",
            "Bahá'ís commemorate annually the Day of the Covenant and the Ascension of ʻAbdu'l-Bahá.",
          ],
          sv: [
            "ʻAbdu'l-Bahá avled i Haifa 1921. I sitt testamente utnämnde Han sitt barnbarn Shoghi Effendi till Förmyndare för bahá'í-tron och skisserade det framtida valet av Universella rättvisans hus, och fortsatte därmed det Förbund Bahá'u'lláh upprättat.",
            "Bahá'íer högtidlighåller årligen Förbundets dag och ʻAbdu'l-Bahás himmelsfärd.",
          ],
          fa: [
            "حضرت عبدالبهاء در ۱۹۲۱ در حیفا صعود فرمود. در الواح وصایا نوهٔ خود شوقی افندی را ولیّ امر آیین بهائی تعیین کرد و انتخاب آیندهٔ بیت‌العدل اعظم را ترسیم نمود و بدین‌سان میثاق حضرت بهاءالله را ادامه داد.",
            "بهائیان هر سال یوم میثاق و صعود حضرت عبدالبهاء را یاد می‌کنند.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "bahai.org — ʻAbdu'l-Bahá",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/abdul-baha/",
      },
      {
        label: "bahai.org — The Covenant",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/",
      },
    ],
  },

  {
    slug: "iran",
    title: {
      en: "The Faith in Iran",
      sv: "Tron i Iran",
      fa: "آیین بهائی در ایران",
    },
    subtitle: {
      en: "Cradle of the Faith · Steadfastness under persecution",
      sv: "Trons vagga · Ståndaktighet under förföljelse",
      fa: "مهد آیین · استقامت در برابر آزار",
    },
    intro: {
      en: [
        "Iran is the birthplace of the Báb and of Bahá'u'lláh. From the earliest years, the followers of the new Faith in that land have faced severe persecution—yet they have remained steadfast in their belief and in service to their fellow citizens wherever possible.",
        "The Bahá'í International Community documents this history so that the sufferings and the constructive response of the Bahá'ís of Iran may be rightly understood.",
      ],
      sv: [
        "Iran är Bábs och Bahá'u'lláhs födelseland. Från de tidigaste åren har den nya trons följeslagare där mött svår förföljelse—ändå har de förblivit ståndaktiga i sin tro och i tjänst åt sina medmänniskor där det är möjligt.",
        "Bahá'í International Community dokumenterar denna historia så att de iranska bahá'íernas lidanden och konstruktiva svar rätt kan förstås.",
      ],
      fa: [
        "ایران زادگاه حضرت باب و حضرت بهاءالله است. از نخستین سال‌ها، پیروان آیین جدید در آن دیار با آزار شدید روبه‌رو بوده‌اند—با این‌همه در ایمان و در خدمت به هم‌وطنان، هرجا ممکن بوده، استوار مانده‌اند.",
        "جامعهٔ بین‌المللی بهائی این تاریخ را ثبت می‌کند تا رنج‌ها و پاسخ سازندهٔ بهائیان ایران به‌درستی شناخته شود.",
      ],
    },
    sections: [
      {
        heading: {
          en: "Nineteenth and early twentieth centuries",
          sv: "1800-talet och tidigt 1900-tal",
          fa: "سدهٔ نوزدهم و اوایل سدهٔ بیستم",
        },
        paragraphs: {
          en: [
            "The Báb’s teachings spread rapidly and were met with fierce opposition from clergy and state. More than twenty thousand Bábís were killed. Bahá'u'lláh Himself was imprisoned and exiled from Iran, while His followers in the homeland continued to suffer successive waves of attack.",
            "Despite these trials, Iranian Bahá'ís established schools open to children of every background, published literature, and maintained a life of devotion and service—laying foundations for the worldwide community.",
          ],
          sv: [
            "Bábs läror spred sig snabbt och mötte hårt motstånd från prästerskap och stat. Mer än tjugotusen bábíer dödades. Bahá'u'lláh själv fängslades och förvisades från Iran, medan Hans följeslagare i hemlandet fortsatte att utstå vågor av attacker.",
            "Trots prövningarna grundade iranska bahá'íer skolor öppna för barn av varje bakgrund, publicerade litteratur och upprätthöll ett liv av hängivenhet och tjänst—grunden för den världsomspännande gemenskapen.",
          ],
          fa: [
            "تعالیم حضرت باب به‌سرعت گسترش یافت و با مخالفت شدید روحانیون و دولت روبه‌رو شد. بیش از بیست‌هزار بابی کشته شدند. خود حضرت بهاءالله زندانی و از ایران تبعید گشت، در حالی که پیروان در وطن همچنان موج‌های حمله را تحمل می‌کردند.",
            "با وجود این بلایا، بهائیان ایران مدارسی گشوده به روی کودکان از هر پیشینه بنا کردند، آثار منتشر ساختند و حیات عبادت و خدمت را نگاه داشتند—بنیانی برای جامعهٔ جهانی.",
          ],
        },
      },
      {
        heading: {
          en: "Continuing adversity and steadfast response",
          sv: "Fortsatt motgång och ståndaktigt svar",
          fa: "ادامهٔ سختی و پاسخ استوار",
        },
        paragraphs: {
          en: [
            "In the twentieth century, discrimination was formalized: Bahá'í literature was banned, marriages went unrecognized, believers were dismissed from public service, and Bahá'í schools were closed. After 1979, persecution intensified. The Bahá'í International Community has recorded executions of community leaders, destruction of holy places—including the House of the Báb in Shiraz—confiscation of properties, and systematic denial of access to higher education and employment.",
            "Through every trial, the Bahá'ís of Iran have answered with non-violence, education of their youth, and a commitment to the betterment of society, remaining a luminous example of faith under oppression.",
          ],
          sv: [
            "Under 1900-talet formaliserades diskrimineringen: bahá'ílitteratur förbjöds, äktenskap erkändes inte, troende avskedades från offentlig tjänst och bahá'ískolor stängdes. Efter 1979 skärptes förföljelsen. Bahá'í International Community har dokumenterat avrättningar av gemenskapsledare, förstörelse av heliga platser—däribland Bábs hus i Shiraz—konfiskering av egendom och systematisk nekad tillgång till högre utbildning och arbete.",
            "Genom varje prövning har Irans bahá'íer svarat med ickevåld, utbildning av ungdomar och ett åtagande för samhällets förbättring—ett lysande exempel på tro under förtryck.",
          ],
          fa: [
            "در سدهٔ بیستم تبعیض رسمیت یافت: ادبیات بهائی ممنوع شد، ازدواج‌ها به رسمیت شناخته نشد، مؤمنان از خدمات دولتی رانده شدند و مدارس بهائی بسته گشت. پس از ۱۹۷۹ آزار شدت گرفت. جامعهٔ بین‌المللی بهائی اعدام رهبران جامعه، تخریب اماکن مقدّسه—از جمله بیت حضرت باب در شیراز—مصادرهٔ اموال و محرومیت نظام‌مند از تحصیلات عالی و اشتغال را ثبت کرده است.",
            "در هر بلا، بهائیان ایران با پرهیز از خشونت، تربیت جوانان و تعهد به بهبود جامعه پاسخ داده‌اند و نمونه‌ای تابناک از ایمان در زیر ستم مانده‌اند.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BIC — Historical overview of persecution in Iran",
        url: "https://iranbahaipersecution.bic.org/historical-overview",
      },
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "BWNS (FA) — تاریخ مختصر",
        url: "https://news.bahai.org/fa/media-information/brief-history",
      },
    ],
  },

  {
    slug: "world",
    title: {
      en: "The Faith Across the World",
      sv: "Tron över världen",
      fa: "آیین بهائی در جهان",
    },
    subtitle: {
      en: "A worldwide community under divine guidance",
      sv: "En världsomspännande gemenskap under gudomlig vägledning",
      fa: "جامعه‌ای جهانی تحت هدایت الهی",
    },
    intro: {
      en: [
        "During the ministry of Shoghi Effendi the Bahá'í Faith spread around the world, and its local and national administrative institutions were raised up on every continent. Under the guidance of the Universal House of Justice since 1963, that expansion has continued, embracing an ever-wider diversity of peoples.",
        "What began in nineteenth-century Iran is today a global community united by the Covenant, engaged in worship, education, and social action in thousands of localities.",
      ],
      sv: [
        "Under Shoghi Effendis mission spred sig bahá'í-tron världen över, och dess lokala och nationella administrativa institutioner restes på varje kontinent. Under Universella rättvisans hus vägledning sedan 1963 har den expansionen fortsatt och omfattat en allt större mångfald av folk.",
        "Det som började i 1800-talets Iran är i dag en global gemenskap förenad av Förbundet, engagerad i tillbedjan, utbildning och social handling på tusentals orter.",
      ],
      fa: [
        "در دوران حضرت شوقی افندی آیین بهائی در سراسر جهان گسترش یافت و مؤسسات اداری محلی و ملّی در هر قاره برپا شد. تحت هدایت بیت‌العدل اعظم از ۱۹۶۳ این گسترش ادامه یافته و تنوع روزافزون اقوام را در بر گرفته است.",
        "آنچه در ایران سدهٔ نوزدهم آغاز شد، امروز جامعه‌ای جهانی است که با میثاق متحد است و در هزاران محل به عبادت، تربیت و اقدام اجتماعی مشغول است.",
      ],
    },
    sections: [
      {
        heading: {
          en: "Opening of the West and global plans",
          sv: "Öppningen mot Väst och globala planer",
          fa: "گشایش غرب و نقشه‌های جهانی",
        },
        paragraphs: {
          en: [
            "ʻAbdu'l-Bahá’s journeys to Europe and North America (1911–1913) encouraged the earliest Western Bahá'í communities. From those foundations, believers carried the teachings onward to Latin America, Africa, the Pacific, and further across Asia.",
            "Systematic plans under the Guardian and later under the Universal House of Justice established Local and National Spiritual Assemblies throughout the world. By Ridván 1963, when the House of Justice was first elected, Bahá'ís resided in thousands of localities across some 259 countries and territories, with fifty-six National Spiritual Assemblies participating in that historic election.",
          ],
          sv: [
            "ʻAbdu'l-Bahás resor till Europa och Nordamerika (1911–1913) uppmuntrade de tidigaste västerländska bahá'ígemenskaperna. Från dessa grunder bar troende lärorna vidare till Latinamerika, Afrika, Stillahavet och vidare över Asien.",
            "Systematiska planer under Förmyndaren och senare under Universella rättvisans hus upprättade lokala och nationella andliga råd världen över. Vid Ridván 1963, när Rättvisans hus först valdes, bodde bahá'íer på tusentals orter i omkring 259 länder och territorier, med femtiosex nationella andliga råd som deltog i det historiska valet.",
          ],
          fa: [
            "سفرهای حضرت عبدالبهاء به اروپا و آمریکای شمالی (۱۹۱۱–۱۹۱۳) جوامع نخستین غربی را تشویق کرد. از آن بنیان‌ها، مؤمنان تعالیم را به آمریکای لاتین، آفریقا، اقیانوس آرام و سراسر آسیا بردند.",
            "نقشه‌های منظم تحت ولایت امر و سپس بیت‌العدل اعظم محافل روحانی محلی و ملّی را در سراسر جهان برپا ساخت. در رضوان ۱۹۶۳، هنگام نخستین انتخاب بیت‌العدل، بهائیان در هزاران محل در حدود ۲۵۹ کشور و سرزمین می‌زیستند و پنجاه‌وشش محفل ملّی در آن انتخاب تاریخی شرکت داشتند.",
          ],
        },
      },
      {
        heading: {
          en: "Growth since 1963",
          sv: "Tillväxt sedan 1963",
          fa: "رشد از ۱۹۶۳",
        },
        paragraphs: {
          en: [
            "The Universal House of Justice has guided successive global plans for the growth and consolidation of the Faith. The community that entered that era has become ever more diverse, with large numbers of believers arising in Africa, Asia, and Latin America, and with National Spiritual Assemblies now numbering more than one hundred and seventy.",
            "Houses of Worship on several continents—among them the Mashriqu'l-Adhkár in New Delhi—stand as symbols of a Faith open to all humanity.",
          ],
          sv: [
            "Universella rättvisans hus har lett på varandra följande globala planer för trons tillväxt och befästning. Gemenskapen som trädde in i den eran har blivit allt mer mångfaldig, med stora skaror av troende i Afrika, Asien och Latinamerika, och med nationella andliga råd som nu överstiger etthundrasjuttiotalet.",
            "Tillbedjanshus på flera kontinenter—däribland Mashriqu'l-Adhkár i New Delhi—står som symboler för en tro öppen för hela mänskligheten.",
          ],
          fa: [
            "بیت‌العدل اعظم نقشه‌های پیاپی جهانی برای رشد و تحکیم آیین را هدایت کرده است. جامعه‌ای که به آن عصر پای نهاد روزبه‌روز متنوّع‌تر شده، با خیزش شمار بزرگی از مؤمنان در آفریقا، آسیا و آمریکای لاتین، و با محافل ملّی که اکنون از یکصد و هفتاد فراتر است.",
            "مشارق‌الاذکار در چند قاره—از جمله مشرق‌الاذکار دهلی نو—نماد آیینی گشوده به روی همهٔ بشریت‌اند.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "UHJ — Development of the Bahá'í community since 1963",
        url: "https://universalhouseofjustice.bahai.org/development-bahai-community-since-1963/",
      },
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "bahai.org — The Covenant",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/",
      },
    ],
  },

  {
    slug: "administration",
    title: {
      en: "Administrative Order & Universal House of Justice",
      sv: "Administrativ ordning & Universella rättvisans hus",
      fa: "نظم اداری و بیت‌العدل اعظم",
    },
    subtitle: {
      en: "Guardianship and the elected world council",
      sv: "Förmynderskap och det valda världsrådet",
      fa: "ولایت امر و شورای جهانی انتخابی",
    },
    intro: {
      en: [
        "Bahá'u'lláh ordained Houses of Justice to administer the affairs of the community. ʻAbdu'l-Bahá’s Will and Testament appointed Shoghi Effendi Guardian and clarified the future Universal House of Justice. Together these provisions form the Bahá'í Administrative Order—a system without clergy, founded on consultation, election without campaigning, and collective decision-making.",
        "Shoghi Effendi devoted his ministry to translating the sacred Writings, interpreting the teachings, developing the Bahá'í World Centre on Mount Carmel, and raising Local and National Spiritual Assemblies across the globe.",
      ],
      sv: [
        "Bahá'u'lláh förordnade rättvisans hus att förvalta gemenskapens angelägenheter. ʻAbdu'l-Bahás testamente utnämnde Shoghi Effendi till Förmyndare och klarlade det framtida Universella rättvisans hus. Tillsammans bildar dessa bestämmelser bahá'íernas administrativa ordning—ett system utan prästerskap, byggt på konsultation, val utan kampanj och kollektiva beslut.",
        "Shoghi Effendi ägnade sin mission åt att översätta de heliga skrifterna, uttolka lärorna, utveckla Bahá'í World Centre på Karmelberget och resa lokala och nationella andliga råd över hela världen.",
      ],
      fa: [
        "حضرت بهاءالله بیوت عدل را برای ادارهٔ امور جامعه مقرّر فرمود. الواح وصایای حضرت عبدالبهاء شوقی افندی را ولیّ امر تعیین کرد و بیت‌العدل اعظم آینده را روشن ساخت. این احکام با هم نظم اداری بهائی را می‌سازند—سامانه‌ای بدون طبقهٔ روحانیون، بر پایهٔ مشورت، انتخاب بدون تبلیغات، و تصمیم‌گیری جمعی.",
        "حضرت شوقی افندی رسالت خود را به ترجمهٔ آثار مقدّس، تبیین تعالیم، توسعهٔ مرکز جهانی در کرمل و برپایی محافل روحانی محلی و ملّی در سراسر عالم وقف فرمود.",
      ],
    },
    sections: [
      {
        heading: {
          en: "From the Guardianship to the House of Justice",
          sv: "Från förmynderskapet till Rättvisans hus",
          fa: "از ولایت امر تا بیت‌العدل",
        },
        paragraphs: {
          en: [
            "With the passing of Shoghi Effendi in 1957 the line of hereditary Guardians ended. Following provisions established by Bahá'u'lláh, the Universal House of Justice was elected in 1963 in Haifa by the members of the National Spiritual Assemblies then existing, to direct the affairs of the worldwide Bahá'í community.",
            "Nine members are elected every five years. The House of Justice legislates on matters not expressly revealed in the sacred Texts, guides global plans for the growth of the Faith and the betterment of society, and is the apex of the Administrative Order ordained by Bahá'u'lláh.",
          ],
          sv: [
            "Med Shoghi Effendis bortgång 1957 upphörde den ärftliga förmyndarlinjen. I enlighet med Bahá'u'lláhs bestämmelser valdes Universella rättvisans hus 1963 i Haifa av ledamöterna i de dåvarande nationella andliga råden, för att leda den världsomspännande bahá'ígemenskapens angelägenheter.",
            "Nio ledamöter väljs vart femte år. Rättvisans hus lagstiftar i frågor som inte uttryckligen uppenbarats i de heliga texterna, leder globala planer för trons tillväxt och samhällets förbättring, och är spetsen i den administrativa ordning Bahá'u'lláh förordnat.",
          ],
          fa: [
            "با صعود حضرت شوقی افندی در ۱۹۵۷ سلسلهٔ ولایت موروثی پایان یافت. طبق تمهیدات حضرت بهاءالله، بیت‌العدل اعظم در ۱۹۶۳ در حیفا توسط اعضای محافل ملّی موجود انتخاب شد تا امور جامعهٔ جهانی بهائی را هدایت کند.",
            "نُه عضو هر پنج سال برگزیده می‌شوند. بیت‌العدل در اموری که در نصوص صریحاً نازل نشده تشریع می‌کند، نقشه‌های جهانی رشد آیین و بهبود جامعه را هدایت می‌نماید و رأس نظم اداری مقرّر حضرت بهاءالله است.",
          ],
        },
      },
      {
        heading: {
          en: "Local and national institutions",
          sv: "Lokala och nationella institutioner",
          fa: "مؤسسات محلی و ملّی",
        },
        paragraphs: {
          en: [
            "Wherever nine adult Bahá'ís reside, they may form a Local Spiritual Assembly. National Spiritual Assemblies coordinate the affairs of the Faith in each country. The Nineteen Day Feast, children’s classes, junior youth groups, study circles, and acts of service shape the rhythm of community life under the current global plans.",
            "This Administrative Order is an integral part of Bahá'u'lláh’s Revelation—designed to channel the spirit of His Cause into the building of a world civilization.",
          ],
          sv: [
            "Där nio vuxna bahá'íer bor kan ett lokalt andligt råd bildas. Nationella andliga råd samordnar trons angelägenheter i varje land. Nittondagsfesten, barnklasser, juniorungdomsgrupper, studiecirklar och tjänstehandlingar formar rytmen i gemenskapslivet under de nuvarande globala planerna.",
            "Denna administrativa ordning är en integrerad del av Bahá'u'lláhs uppenbarelse—avsedd att leda Hans saks ande in i byggandet av en världscivilisation.",
          ],
          fa: [
            "هرجا نُه بهائی بالغ باشند می‌توان محفل روحانی محلی تشکیل داد. محافل روحانی ملّی امور آیین را در هر کشور هماهنگ می‌کنند. ضیافت نوزده‌روزه، کلاس‌های کودکان، گروه‌های نوجوانان، حلقه‌های مطالعه و اعمال خدمت، ریتم حیات جامعه را در نقشه‌های جهانی کنونی می‌سازند.",
            "این نظم اداری جزء لاینفک ظهور حضرت بهاءالله است—برای جاری‌ساختن روح امرش در بنای تمدن جهانی.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "BWNS — Brief history",
        url: "https://news.bahai.org/media-information/brief-history",
      },
      {
        label: "UHJ — Development since 1963",
        url: "https://universalhouseofjustice.bahai.org/development-bahai-community-since-1963/",
      },
      {
        label: "bahai.org — The Universal House of Justice",
        url: "https://www.bahai.org/beliefs/bahaullah-covenant/universal-house-of-justice/",
      },
    ],
  },

  {
    slug: "calendar",
    title: {
      en: "The Badíʻ Calendar",
      sv: "Badíʻ-kalendern",
      fa: "گاه‌شماری بدیع",
    },
    subtitle: {
      en: "Nineteen months · Naw-Rúz · Ayyám-i-Há",
      sv: "Nitton månader · Naw-Rúz · Ayyám-i-Há",
      fa: "نوزده ماه · نوروز · ایّام هاء",
    },
    intro: {
      en: [
        "The Bahá'í calendar, known as the Badíʻ calendar, was introduced by the Báb. Bahá'u'lláh confirmed and adopted this calendar, fixing its commencement at the year of the Báb’s declaration in 1844.",
        "The Universal House of Justice has written that the adoption of a new calendar in each dispensation is a symbol of the power of Divine Revelation to reshape human perception of material, social, and spiritual reality.",
      ],
      sv: [
        "Bahá'í-kalendern, känd som Badíʻ-kalendern, infördes av Báb. Bahá'u'lláh bekräftade och antog denna kalender och fastställde dess början till året för Bábs förkunnelse 1844.",
        "Universella rättvisans hus har skrivit att antagandet av en ny kalender i varje dispensation är en symbol för den gudomliga uppenbarelsens kraft att omforma människans uppfattning av materiell, social och andlig verklighet.",
      ],
      fa: [
        "تقویم بهائی، معروف به گاه‌شماری بدیع، توسط حضرت باب وضع شد. حضرت بهاءالله این تقویم را تأیید و اختیار فرمود و آغاز آن را سال اظهار امر حضرت باب در ۱۸۴۴ قرار داد.",
        "بیت‌العدل اعظم نوشته است که اختیار تقویمی نو در هر دور، رمزی از قدرت ظهور الهی برای بازشکل‌دادن ادراک انسان از واقعیت مادی، اجتماعی و روحانی است.",
      ],
    },
    sections: [
      {
        heading: {
          en: "Structure of the year",
          sv: "Årets struktur",
          fa: "ساختار سال",
        },
        paragraphs: {
          en: [
            "The calendar consists of nineteen months of nineteen days each, with the addition of intercalary days known as Ayyám-i-Há. The number of these intercalary days varies according to the timing of the vernal equinox in the northern hemisphere. The Báb named each of the nineteen months after attributes of God.",
            "The Bahá'í New Year, Naw-Rúz, is astronomically fixed, coinciding with the vernal equinox. According to the Bahá'í calendar, a day is the period from sunset to sunset.",
          ],
          sv: [
            "Kalendern består av nitton månader om nitton dagar vardera, med tillägg av skottdagar kallade Ayyám-i-Há. Antalet skottdagar varierar efter tidpunkten för vårdagjämningen på norra halvklotet. Báb namngav var och en av de nitton månaderna efter Guds attribut.",
            "Bahá'ínyåret, Naw-Rúz, är astronomiskt fastställt och sammanfaller med vårdagjämningen. Enligt bahá'í-kalendern är en dag perioden från solnedgång till solnedgång.",
          ],
          fa: [
            "این تقویم از نوزده ماهِ نوزده‌روزه تشکیل شده، به‌علاوهٔ ایّام اضافی معروف به ایّام هاء. شمار این ایّام بر حسب زمان اعتدال بهاری در نیمکرهٔ شمالی تغییر می‌کند. حضرت باب هر یک از نوزده ماه را به صفات الهی نامید.",
            "سال نو بهائی، نوروز، از نظر نجومی ثابت است و با اعتدال بهاری همزمان می‌شود. در گاه‌شماری بهائی، روز از غروب تا غروب است.",
          ],
        },
      },
      {
        heading: {
          en: "Holy Days",
          sv: "Helgdagar",
          fa: "ایّام متبرکه",
        },
        paragraphs: {
          en: [
            "As the Bahá'í Era was inaugurated by twin Founders, the Holy Days include events related to the birth, declaration, and passing of both Bahá'u'lláh and the Báb. Eleven Holy Days are commemorated; on nine of them work is suspended.",
            "Among the foremost are Naw-Rúz, the twelve days of Riḍván (of which the first, ninth, and twelfth are Holy Days), the Declaration of the Báb, the Ascension of Bahá'u'lláh, the Martyrdom of the Báb, and the Twin Birthdays. The Day of the Covenant and the Ascension of ʻAbdu'l-Bahá are also observed. Official calendars are published each year on bahai.org.",
          ],
          sv: [
            "Eftersom bahá'í-eran invigdes av två grundare omfattar helgdagarna händelser knutna till födelse, förkunnelse och bortgång för både Bahá'u'lláh och Báb. Elva helgdagar högtidlighålls; på nio av dem vilar man från arbete.",
            "Bland de främsta är Naw-Rúz, Riḍváns tolv dagar (varav första, nionde och tolfte är helgdagar), Bábs förkunnelse, Bahá'u'lláhs himmelsfärd, Bábs martyrskap och tvillingfödelserna. Förbundets dag och ʻAbdu'l-Bahás himmelsfärd firas också. Officiella kalendrar publiceras varje år på bahai.org.",
          ],
          fa: [
            "چون دور بهائی با دو شارع آغاز شده، ایّام متبرکه شامل وقایع مربوط به میلاد، اظهار امر و صعود حضرت بهاءالله و حضرت باب است. یازده یوم متبرک یاد می‌شود؛ در نُه روز کار تعطیل است.",
            "از جملهٔ اعیاد بزرگ: نوروز، دوازده روز رضوان (که روز اول و نهم و دوازدهم از ایّام متبرکه‌اند)، اظهار امر حضرت باب، صعود حضرت بهاءالله، شهادت حضرت باب و میلادین. یوم میثاق و صعود حضرت عبدالبهاء نیز برگزار می‌شود. تقویم‌های رسمی هر سال در bahai.org منتشر می‌گردد.",
          ],
        },
      },
    ],
    sources: [
      {
        label: "bahai.org — The Bahá'í Calendar",
        url: "https://www.bahai.org/action/devotional-life/calendar",
      },
      {
        label: "BWNS — Style guide (Badíʻ calendar)",
        url: "https://news.bahai.org/media-information/style-guide-glossary-and-pronunciation-guide",
      },
      {
        label: "Kitáb-i-Aqdas notes (Bahá'í Reference Library)",
        url: "https://www.bahai.org/library/authoritative-texts/bahaullah/kitab-i-aqdas/",
      },
    ],
  },
];

export const HISTORY_SLUGS = HISTORY_TOPICS.map((t) => t.slug);

export function getHistoryTopic(slug: string): HistoryTopic | undefined {
  return HISTORY_TOPICS.find((t) => t.slug === slug);
}
