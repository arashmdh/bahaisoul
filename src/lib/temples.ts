export type TempleRegion =
  | "all"
  | "americas"
  | "asia"
  | "africa"
  | "europe"
  | "oceania"
  | "holy-land"
  | "designs";

export type TempleLocaleText = {
  title: string;
  location: string;
  description: string;
};

export type TempleImage = {
  id: string;
  src: string;
  /** Lightweight preview for the mosaic grid; full `src` loads in the lightbox. */
  thumb?: string;
  region: Exclude<TempleRegion, "all">;
  year?: string;
  featured?: boolean;
  span?: "tall" | "wide" | "hero";
  en: TempleLocaleText;
  sv: TempleLocaleText;
  fa: TempleLocaleText;
};

/** Optimized mosaic preview path for a temple image. */
export function templeThumb(img: Pick<TempleImage, "src" | "thumb">): string {
  if (img.thumb) return img.thumb;
  const file = img.src.split("/").pop() ?? "";
  const stem = file.replace(/\.(jpe?g|png|webp|avif)$/i, "");
  return `/temples/thumbs/${stem}.jpg`;
}

export const TEMPLE_REGIONS: {
  id: TempleRegion;
  label: { en: string; sv: string; fa: string };
}[] = [
  { id: "all", label: { en: "All", sv: "Alla", fa: "همه" } },
  { id: "americas", label: { en: "Americas", sv: "Amerika", fa: "قاره آمریکا" } },
  { id: "asia", label: { en: "Asia", sv: "Asien", fa: "آسیا" } },
  { id: "africa", label: { en: "Africa", sv: "Afrika", fa: "آفریقا" } },
  { id: "europe", label: { en: "Europe", sv: "Europa", fa: "اروپا" } },
  { id: "oceania", label: { en: "Oceania", sv: "Oceanien", fa: "اقیانوسیه" } },
  { id: "holy-land", label: { en: "Holy Land", sv: "Heliga landet", fa: "ارض اقدس" } },
  { id: "designs", label: { en: "New Designs", sv: "Nya design", fa: "طرح‌های نو" } },
];

export const TEMPLE_IMAGES: TempleImage[] = [
  {
    id: "haifa-terraces",
    src: "/temples/the_bahai_temple_in_haifa_israel-web.jpg",
    region: "holy-land",
    year: "1909–1953",
    featured: true,
    span: "hero",
    en: {
      title: "Shrine of the Báb & Terraced Gardens",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "Known as the Queen of Carmel, the golden-domed Shrine of the Báb crowns nineteen luminous terraces — a UNESCO World Heritage sanctuary where geometry, garden, and devotion ascend as one.",
    },
    sv: {
      title: "Bábs helgedom & terrasserade trädgårdar",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Känd som Karmels drottning. Den gyllene kupolen och nitton terrasser bildar ett UNESCO-världsarv där geometri, trädgård och andakt stiger tillsammans.",
    },
    fa: {
      title: "مقام اعلی و باغ‌های مطبق",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "ملکهٔ کرمل؛ گنبد زرین مقام اعلی بر فراز نوزده تراس نورانی، میراث جهانی یونسکو، جایی که هندسه، باغ و نیایش یکی می‌شوند.",
    },
  },
  {
    id: "lotus-dusk",
    src: "/temples/1543580799-86501houseofworship-web.jpg",
    region: "asia",
    year: "1986",
    featured: true,
    span: "wide",
    en: {
      title: "Lotus Temple at Twilight",
      location: "New Delhi, India",
      description:
        "Twenty-seven marble petals open like a lotus at dusk. One of the world’s most visited buildings, this House of Worship offers silent prayer to every soul who enters.",
    },
    sv: {
      title: "Lotustemplet i skymning",
      location: "New Delhi, Indien",
      description:
        "Tjugosju marmorblad öppnar sig som en lotus i skymningen. Ett av världens mest besökta hus för tillbedjan — öppet för varje sökande själ.",
    },
    fa: {
      title: "معبد نیلوفر در گرگ‌ومیش",
      location: "دهلی نو، هند",
      description:
        "بیست‌وهفت گلبرگ مرمرین همچون نیلوفر در غروب می‌شکفد. یکی از پربازدیدترین معابد جهان، گشوده به روی هر جوینده.",
    },
  },
  {
    id: "santiago-reflection",
    src: "/temples/1675459809-bahai-chile.jpeg",
    region: "americas",
    year: "2016",
    featured: true,
    span: "wide",
    en: {
      title: "Temple of South America — Blue Hour",
      location: "Santiago, Chile",
      description:
        "Nine translucent wings of cast glass and marble glow above a still reflecting pool in the Andean foothills — architecture as living light.",
    },
    sv: {
      title: "Sydamerikas tempel — blå timmen",
      location: "Santiago, Chile",
      description:
        "Nio genomskinliga vingar av gjutet glas och marmor lyser över en spegeldamm i Andernas fot — arkitektur som levande ljus.",
    },
    fa: {
      title: "معبد آمریکای جنوبی — ساعت آبی",
      location: "سانتیاگو، شیلی",
      description:
        "نه بال نیمه‌شفاف از شیشه و مرمر بر فراز آبِ آینه‌وار در دامنهٔ آند می‌درخشند — معماری چون نور زنده.",
    },
  },
  {
    id: "wilmette-mother",
    src: "/temples/wilmette-web.jpg",
    region: "americas",
    year: "1953",
    span: "tall",
    en: {
      title: "Mother Temple of the West",
      location: "Wilmette, Illinois, USA",
      description:
        "The first Bahá'í House of Worship in the Western Hemisphere. Its lace-like concrete tracery weaves symbols of the world’s great religions into a single luminous dome.",
    },
    sv: {
      title: "Västerlandets modertempel",
      location: "Wilmette, Illinois, USA",
      description:
        "Det första bahá'íska tillbedjanshuset på västra halvklotet. Spetsiga betongmönster väver världens religioners symboler in i en lysande kupol.",
    },
    fa: {
      title: "معبد مادر غرب",
      location: "ویلمِت، ایلینوی، آمریکا",
      description:
        "نخستین مشرق‌الاذکار بهائی در نیمکرهٔ غربی. نقش‌برجسته‌های توری‌مانند، نماد ادیان جهان را در گنبدی نورانی می‌تنند.",
    },
  },
  {
    id: "wilmette-detail",
    src: "/temples/ppkpjkxpn-web.jpg",
    region: "americas",
    year: "1953",
    span: "tall",
    en: {
      title: "Wilmette — Looking Toward the Dome",
      location: "Wilmette, Illinois, USA",
      description:
        "From the base, the eye rises through carved columns bearing the Cross, Crescent, and Star of David — a vertical hymn to the oneness of religion.",
    },
    sv: {
      title: "Wilmette — blick mot kupolen",
      location: "Wilmette, Illinois, USA",
      description:
        "Från basen stiger blicken genom pelare med kors, månskära och Davidsstjärna — en vertikal hymn till religionernas enhet.",
    },
    fa: {
      title: "ویلمِت — نگاه به سوی گنبد",
      location: "ویلمِت، ایلینوی، آمریکا",
      description:
        "از پایه، نگاه از میان ستون‌های منقوش با صلیب، هلال و ستارهٔ داوود بالا می‌رود — سرودی عمودی برای وحدت ادیان.",
    },
  },
  {
    id: "wilmette-garden",
    src: "/temples/baha-i_temple_-_wilmette-_il-web.jpg",
    region: "americas",
    year: "1953",
    en: {
      title: "Wilmette among the Gardens",
      location: "Wilmette, Illinois, USA",
      description:
        "White quartz concrete against Midwestern sky — a continental temple designed as a gathering place for all peoples.",
    },
    sv: {
      title: "Wilmette bland trädgårdarna",
      location: "Wilmette, Illinois, USA",
      description:
        "Vit kvartsbeting mot Mellanvästerns himmel — ett kontinentalt tempel tänkt som mötesplats för alla folk.",
    },
    fa: {
      title: "ویلمِت در میان باغ‌ها",
      location: "ویلمِت، ایلینوی، آمریکا",
      description:
        "بتن کوارتز سفید در برابر آسمان میدوست — معبدی قاره‌ای برای گردهم‌آیی همهٔ اقوام.",
    },
  },
  {
    id: "lotus-aerial",
    src: "/temples/1209273-master.jpg",
    region: "asia",
    year: "1986",
    span: "wide",
    en: {
      title: "Lotus Temple from Above",
      location: "New Delhi, India",
      description:
        "Nine turquoise pools mirror the marble petals. From the air, the temple reads as sacred geometry set within the living city.",
    },
    sv: {
      title: "Lotustemplet från ovan",
      location: "New Delhi, Indien",
      description:
        "Nio turkosblå dammar speglar marmorbladen. Från luften läses templet som helig geometri mitt i den levande staden.",
    },
    fa: {
      title: "معبد نیلوفر از فراز",
      location: "دهلی نو، هند",
      description:
        "نه حوض فیروزه‌ای گلبرگ‌های مرمر را بازمی‌تاباند. از هوا، معبد هندسهٔ مقدس در دل شهر زنده است.",
    },
  },
  {
    id: "lotus-classic",
    src: "/temples/the_baha-i_house_of_worship_near_new_delhi-_known_as_the_lotus_temple.jpg",
    region: "asia",
    year: "1986",
    en: {
      title: "Lotus Temple — Daylight Petals",
      location: "New Delhi, India",
      description:
        "Architect Fariborz Sahba’s lotus form invites the seeker into cool silence — a flower of stone opening toward the Infinite.",
    },
    sv: {
      title: "Lotustemplet — dagsljusets blad",
      location: "New Delhi, Indien",
      description:
        "Fariborz Sahbas lotusform bjuder sökaren in i sval tystnad — en stenblomma som öppnar sig mot det Oändliga.",
    },
    fa: {
      title: "معبد نیلوفر — گلبرگ‌های روز",
      location: "دهلی نو، هند",
      description:
        "فرم نیلوفر فریبرز صحبا جوینده را به سکوت خنک فرامی‌خواند — گلی از سنگ که به سوی بی‌نهایت می‌گشاید.",
    },
  },
  {
    id: "santiago-interior-dusk",
    src: "/temples/070845_00_tmpl_n80_lrg-web.jpg",
    region: "americas",
    year: "2016",
    span: "wide",
    en: {
      title: "Santiago Prayer Hall at Dusk",
      location: "Santiago, Chile",
      description:
        "Warm wood, swirling marble veils, and the Andes beyond the glass — an interior that dissolves the boundary between sanctuary and sky.",
    },
    sv: {
      title: "Santiagos bönesal i skymning",
      location: "Santiago, Chile",
      description:
        "Varmt trä, virvlande marmor och Anderna bortom glaset — ett interiör där gränsen mellan helgedom och himmel upplöses.",
    },
    fa: {
      title: "تالار دعا در سانتیاگو هنگام غروب",
      location: "سانتیاگو، شیلی",
      description:
        "چوب گرم، پرده‌های مرمرین چرخان، و کوه‌های آند فراسوی شیشه — فضایی که مرز حرم و آسمان را محو می‌کند.",
    },
  },
  {
    id: "santiago-interior-ceiling",
    src: "/temples/chile-south-america-494f.jpg",
    region: "americas",
    year: "2016",
    span: "tall",
    en: {
      title: "Looking Up — The Greatest Name",
      location: "Santiago, Chile",
      description:
        "Nine translucent wings spiral toward the oculus, where the Greatest Name rests in light — geometry as devotion.",
    },
    sv: {
      title: "Uppåt — Det Största Namnet",
      location: "Santiago, Chile",
      description:
        "Nio genomskinliga vingar spiralerar mot oculus, där Det Största Namnet vilar i ljuset — geometri som andakt.",
    },
    fa: {
      title: "نگاه به بالا — اسم اعظم",
      location: "سانتیاگو، شیلی",
      description:
        "نه بال نیمه‌شفاف به‌سوی روزن مرکزی می‌پیچند، جایی که اسم اعظم در نور آرمیده — هندسه چون نیایش.",
    },
  },
  {
    id: "santiago-windows",
    src: "/temples/chile-andes-render.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Marble Veils & Mountain Light",
      location: "Santiago, Chile",
      description:
        "Triangulated Portuguese marble frames views of the Andean hills — craft and landscape in quiet conversation.",
    },
    sv: {
      title: "Marmorslöjor & bergsljus",
      location: "Santiago, Chile",
      description:
        "Triangulerad portugisisk marmor ramar in Andernas kullar — hantverk och landskap i stilla samtal.",
    },
    fa: {
      title: "پردهٔ مرمر و نور کوهستان",
      location: "سانتیاگو، شیلی",
      description:
        "مرمر پرتغالیِ مثلثی منظرهٔ تپه‌های آند را قاب می‌گیرد — گفت‌وگوی آرام صنعت و طبیعت.",
    },
  },
  {
    id: "santiago-aerial",
    src: "/temples/52958-preview_low_1020-6_52958_sc_v2com.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Santiago from the Air",
      location: "Santiago, Chile",
      description:
        "A nine-petaled spiral seen from above — paths and pools radiating like a living mandala in the foothills.",
    },
    sv: {
      title: "Santiago från luften",
      location: "Santiago, Chile",
      description:
        "En niobladig spiral sedd ovanifrån — stigar och dammar som strålar ut som en levande mandala.",
    },
    fa: {
      title: "سانتیاگو از آسمان",
      location: "سانتیاگو، شیلی",
      description:
        "مارپیچ نه‌گلبرگ از فراز — مسیرها و حوض‌ها چون ماندالای زنده در دامنهٔ تپه‌ها.",
    },
  },
  {
    id: "santiago-path",
    src: "/temples/canada-temple.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Approach through the Forest",
      location: "Santiago, Chile",
      description:
        "A stone path through wildflowers leads to nine glass wings nestled in evergreen — arrival as pilgrimage.",
    },
    sv: {
      title: "Vägen genom skogen",
      location: "Santiago, Chile",
      description:
        "En stenstig genom vildblommor leder till nio glasvingar bland evigt grönt — ankomst som pilgrimsfärd.",
    },
    fa: {
      title: "راه از میان جنگل",
      location: "سانتیاگو، شیلی",
      description:
        "مسیر سنگی از میان گل‌های وحشی به نه بال شیشه‌ای در دل سبزه‌زار می‌رسد — ورود چون زیارت.",
    },
  },
  {
    id: "santiago-andes-glow",
    src: "/temples/battambang-prize.jpg",
    region: "americas",
    year: "2016",
    span: "wide",
    en: {
      title: "Beacon against the Andes",
      location: "Santiago, Chile",
      description:
        "At dusk the temple becomes a lantern against dark mountain silhouettes — soft fire held in glass and stone.",
    },
    sv: {
      title: "Fyr mot Anderna",
      location: "Santiago, Chile",
      description:
        "I skymningen blir templet en lykta mot mörka bergssilhuetter — mjuk eld fångad i glas och sten.",
    },
    fa: {
      title: "چراغ در برابر آند",
      location: "سانتیاگو، شیلی",
      description:
        "در غروب، معبد فانوسی می‌شود در برابر سیاهی کوه‌ها — آتشی نرم در شیشه و سنگ.",
    },
  },
  {
    id: "santiago-day",
    src: "/temples/bahai-santiago-chile-benjamin-gremler-2mbk06jtjmo-unsplash-1024x576-1.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Santiago in Daylight",
      location: "Santiago, Chile",
      description:
        "Hariri Pontarini’s award-winning temple under open sky — nine wings catching Andean light.",
    },
    sv: {
      title: "Santiago i dagsljus",
      location: "Santiago, Chile",
      description:
        "Hariri Pontarinis prisbelönta tempel under öppen himmel — nio vingar som fångar Andernas ljus.",
    },
    fa: {
      title: "سانتیاگو در روشنای روز",
      location: "سانتیاگو، شیلی",
      description:
        "معبد برنده‌جایزهٔ حریری پونتارینی زیر آسمان باز — نه بال که نور آند را می‌گیرند.",
    },
  },
  {
    id: "santiago-exterior",
    src: "/temples/bahai-temple-of-south-america_content_76adbcc4-web.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Wings of Cast Glass",
      location: "Santiago, Chile",
      description:
        "Close study of the temple’s crystalline skin — each panel a facet of quiet brilliance.",
    },
    sv: {
      title: "Vingar av gjutet glas",
      location: "Santiago, Chile",
      description:
        "Närstudie av templets kristallina yta — varje panel en facet av stilla glans.",
    },
    fa: {
      title: "بال‌های شیشهٔ ریخته‌گری",
      location: "سانتیاگو، شیلی",
      description:
        "نمای نزدیک پوست بلورین معبد — هر پنل وجهی از درخشش آرام.",
    },
  },
  {
    id: "panama",
    src: "/temples/1072895-master.jpg",
    region: "americas",
    year: "1972",
    en: {
      title: "Mother Temple of Latin America",
      location: "Panama City, Panama",
      description:
        "An egg-white dome rises above terracotta buttresses and tropical lawn — the continental House of Worship for Central America.",
    },
    sv: {
      title: "Latinamerikas modertempel",
      location: "Panama City, Panama",
      description:
        "En äggvit kupol reser sig över terrakotta och tropisk gräsmatta — kontinentens tillbedjanshus för Centralamerika.",
    },
    fa: {
      title: "معبد مادر آمریکای لاتین",
      location: "پاناماسیتی، پاناما",
      description:
        "گنبد سفید بیضی بر فراز دیوارهای سفالین و چمن استوایی — مشرق‌الاذکار قاره‌ای آمریکای مرکزی.",
    },
  },
  {
    id: "kampala",
    src: "/temples/ugandatemple.jpg",
    region: "africa",
    year: "1961",
    en: {
      title: "Mother Temple of Africa",
      location: "Kampala, Uganda",
      description:
        "On Kikaaya Hill, a sage-green dome and wide veranda welcome all. Africa’s continental House of Worship stands in quiet tropical grace.",
    },
    sv: {
      title: "Afrikas modertempel",
      location: "Kampala, Uganda",
      description:
        "På Kikaayahöjden välkomnar en salviagrön kupol och bred veranda alla. Afrikas kontinentala tillbedjanshus i tropisk stillhet.",
    },
    fa: {
      title: "معبد مادر آفریقا",
      location: "کامپالا، اوگاندا",
      description:
        "بر تپهٔ کیکایا، گنبد سبز مریم‌گلی و رواق گشاده همه را می‌پذیرد. مشرق‌الاذکار قاره‌ای آفریقا در وقار استوایی.",
    },
  },
  {
    id: "langenhain-lattice",
    src: "/temples/2016_bahai_house_of_worship_langenhain_1_ks01-web.jpg",
    region: "europe",
    year: "1964",
    span: "wide",
    en: {
      title: "European House of Worship",
      location: "Langenhain, Germany",
      description:
        "A lattice dome of light above the Taunus hills — Europe’s Mother Temple, open as a lantern of unity.",
    },
    sv: {
      title: "Europas tillbedjanshus",
      location: "Langenhain, Tyskland",
      description:
        "En gallerkupol av ljus över Taunushöjderna — Europas modertempel, öppen som en lyktas enhet.",
    },
    fa: {
      title: "مشرق‌الاذکار اروپا",
      location: "لانگن‌هاین، آلمان",
      description:
        "گنبد مشبک نور بر فراز تپه‌های تاونوس — معبد مادر اروپا، چون فانوس وحدت.",
    },
  },
  {
    id: "langenhain-day",
    src: "/temples/3746630-master.jpg",
    region: "europe",
    year: "1964",
    en: {
      title: "Langenhain under Clear Sky",
      location: "Hofheim-Langenhain, Germany",
      description:
        "Diamond apertures diminish toward the apex. Twenty-seven pillars lean inward — modernist devotion in white concrete and glass.",
    },
    sv: {
      title: "Langenhain under klar himmel",
      location: "Hofheim-Langenhain, Tyskland",
      description:
        "Rutiga öppningar förminskas mot toppen. Tjugosju pelare lutar inåt — modernistisk andakt i vit betong och glas.",
    },
    fa: {
      title: "لانگن‌هاین زیر آسمان صاف",
      location: "هوفهایم-لانگن‌هاین، آلمان",
      description:
        "روزن‌های لوزی به‌سوی رأس کوچک می‌شوند. بیست‌وهفت ستون به درون خم می‌شوند — نیایش مدرن در بتن و شیشه.",
    },
  },
  {
    id: "sydney-sunny",
    src: "/temples/2285692-master-web.jpg",
    region: "oceania",
    year: "1961",
    en: {
      title: "Mother Temple of the Antipodes",
      location: "Ingleside, Sydney, Australia",
      description:
        "Beige stone and white tracery among eucalyptus — Oceania’s continental House of Worship, dedicated in 1961.",
    },
    sv: {
      title: "Antipodernas modertempel",
      location: "Ingleside, Sydney, Australien",
      description:
        "Beige sten och vit spets bland eukalyptus — Oceanien s kontinentala tillbedjanshus, invigt 1961.",
    },
    fa: {
      title: "معبد مادر آنتیپودها",
      location: "اینگلساید، سیدنی، استرالیا",
      description:
        "سنگ بژ و نقش توری سفید میان اکالیپتوس — مشرق‌الاذکار قاره‌ای اقیانوسیه، تقدیس‌شده در ۱۹۶۱.",
    },
  },
  {
    id: "sydney-storm",
    src: "/temples/df9719_16fe44d84c3845b2827ee56f3526b9d0-mv2_d_5115_3352_s_4_2-web.jpg",
    region: "oceania",
    year: "1961",
    span: "wide",
    en: {
      title: "Sydney under Dramatic Sky",
      location: "Ingleside, Sydney, Australia",
      description:
        "Storm light breaks over the nine-sided dome — a sanctuary holding calm within the weather of the world.",
    },
    sv: {
      title: "Sydney under dramatisk himmel",
      location: "Ingleside, Sydney, Australien",
      description:
        "Stormljus bryter över den niosidiga kupolen — en helgedom som håller stillhet mitt i världens väder.",
    },
    fa: {
      title: "سیدنی زیر آسمان دراماتیک",
      location: "اینگلساید، سیدنی، استرالیا",
      description:
        "نور توفان بر گنبد نه‌ضلعی می‌شکند — حرمگاهی که آرامش را در دل هوا نگه می‌دارد.",
    },
  },
  {
    id: "sydney-forest",
    src: "/temples/sydney-alt.jpg",
    region: "oceania",
    year: "1961",
    en: {
      title: "Sydney among the Bushland",
      location: "Ingleside, Sydney, Australia",
      description:
        "Nestled in northern Sydney bushland, the temple’s dome rises from native forest like a quiet white flame.",
    },
    sv: {
      title: "Sydney bland bushland",
      location: "Ingleside, Sydney, Australien",
      description:
        "Mitt i norra Sydneys bushland reser sig templets kupol ur den inhemska skogen som en stilla vit låga.",
    },
    fa: {
      title: "سیدنی در میان بیشه",
      location: "اینگلساید، سیدنی، استرالیا",
      description:
        "در بیشهٔ شمال سیدنی، گنبد معبد از جنگل بومی چون شعلهٔ سفید آرام برمی‌خیزد.",
    },
  },
  {
    id: "battambang-dusk",
    src: "/temples/battambang-local-dusk.jpg",
    thumb: "/temples/thumbs/battambang-local-dusk.jpg",
    region: "asia",
    year: "2017",
    en: {
      title: "Bahá’í Local House of Worship — Battambang",
      location: "Battambang, Cambodia",
      description:
        "Khmer-inspired roofs glow at blue hour. One of the first Bahá’í local Houses of Worship — rooted in place, open to all.",
    },
    sv: {
      title: "Bahá’í lokalt tillbedjanshus — Battambang",
      location: "Battambang, Kambodja",
      description:
        "Khmerinspirerade tak lyser i blå timmen. Ett av de första bahá’íska lokala tillbedjanshusen — rotat i platsen, öppet för alla.",
    },
    fa: {
      title: "مشرق‌الاذکار محلی بهائی — باتامبانگ",
      location: "باتامبانگ، کامبوج",
      description:
        "بام‌های ملهم از هنر خمر در ساعت آبی می‌درخشند. از نخستین مشرق‌الاذکارهای محلی بهائی — ریشه در مکان، گشوده به همه.",
    },
  },
  {
    id: "battambang-night",
    src: "/temples/battambang-local-night.jpg",
    thumb: "/temples/thumbs/battambang-local-night.jpg",
    region: "asia",
    year: "2017",
    span: "tall",
    en: {
      title: "Battambang Bahá’í Temple under Moonlight",
      location: "Battambang, Cambodia",
      description:
        "Warm lantern light beneath a moonlit sky — a community-crafted Bahá’í House of Worship where local heritage meets universal prayer.",
    },
    sv: {
      title: "Battambang bahá’ítempel under månsken",
      location: "Battambang, Kambodja",
      description:
        "Varmt lyktljus under månhimmel — ett community-byggt bahá’í tillbedjanshus där lokalt arv möter universell bön.",
    },
    fa: {
      title: "معبد بهائی باتامبانگ زیر نور ماه",
      location: "باتامبانگ، کامبوج",
      description:
        "نور گرم فانوس زیر آسمان مهتابی — مشرق‌الاذکار بهائی ساختهٔ جامعه، جایی که میراث محلی با دعای جهانی می‌آمیزد.",
    },
  },
  {
    id: "haifa-day",
    src: "/temples/western-galilee-tour4.jpg",
    region: "holy-land",
    year: "1909–1953",
    span: "wide",
    en: {
      title: "Terraces in Daylight",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "Cypress, palm, and stone stairways climb toward the golden dome — a path of ascent through cultivated beauty.",
    },
    sv: {
      title: "Terrasser i dagsljus",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Cypress, palm och stenstrappor stiger mot den gyllene kupolen — en väg uppåt genom odlad skönhet.",
    },
    fa: {
      title: "تراس‌ها در روشنای روز",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "سرو، نخل و پلکان سنگی به‌سوی گنبد زرین بالا می‌روند — مسیر عروج از میان زیبایی پرورده.",
    },
  },
  {
    id: "cameroon-design",
    src: "/temples/1778683507-design-unveiled-for-first-bahai-temple-cameroon-00-web.jpg",
    region: "designs",
    year: "Design",
    en: {
      title: "House of Worship — Cameroon Design",
      location: "Cameroon",
      description:
        "A newly unveiled design: earth-toned brick, faceted roof, and nine welcoming doors — African materials speaking a universal language.",
    },
    sv: {
      title: "Tillbedjanshus — Kameruns design",
      location: "Kamerun",
      description:
        "En nyavtäckt design: jordfärgad tegel, facetterat tak och nio välkomnande dörrar — afrikanska material i ett universellt språk.",
    },
    fa: {
      title: "مشرق‌الاذکار — طرح کامرون",
      location: "کامرون",
      description:
        "طرحی تازه رونمایی‌شده: آجر خاکی، بام چندوجهی و نه در گشوده — مصالح آفریقایی به زبان جهانی.",
    },
  },
  {
    id: "bihar-aerial",
    src: "/temples/1588173126-1421temple-design-biha-indialeading-image4-3-web.jpg",
    region: "designs",
    year: "Design",
    span: "wide",
    en: {
      title: "Bahá’í House of Worship — Bihar Sharif Aerial",
      location: "Bihar Sharif, India",
      description:
        "Terracotta dome and star-shaped gardens from above — a Bahá’í local House of Worship envisioned as sacred landscape.",
    },
    sv: {
      title: "Bahá’í tillbedjanshus — Bihar Sharif från luften",
      location: "Bihar Sharif, Indien",
      description:
        "Terrakottakupa och stjärnformade trädgårdar från ovan — ett bahá’í lokalt tillbedjanshus tänkt som heligt landskap.",
    },
    fa: {
      title: "مشرق‌الاذکار بهائی — طرح هوایی بیهاری شریف",
      location: "بیهاری شریف، هند",
      description:
        "گنبد سفالین و باغ‌های ستاره‌ای از فراز — مشرق‌الاذکار محلی بهائی چون منظرهٔ مقدس.",
    },
  },
  {
    id: "bihar-path",
    src: "/temples/bihar-sharif-approach.jpg",
    thumb: "/temples/thumbs/bihar-sharif-approach.jpg",
    region: "designs",
    year: "Design",
    en: {
      title: "Bahá’í House of Worship — Bihar Sharif Approach",
      location: "Bihar Sharif, India",
      description:
        "Honeycomb brick arches and a winding red path — a Bahá’í local House of Worship rising from the earth of Bihar itself.",
    },
    sv: {
      title: "Bahá’í tillbedjanshus — Bihar Sharif ankomst",
      location: "Bihar Sharif, Indien",
      description:
        "Honungskaksbågar i tegel och en slingrande röd stig — ett bahá’í lokalt tillbedjanshus som växer ur Bihars egen jord.",
    },
    fa: {
      title: "مشرق‌الاذکار بهائی — مسیر ورود بیهاری شریف",
      location: "بیهاری شریف، هند",
      description:
        "قوس‌های آجری لانه‌زنبوری و مسیر سرخ پیچان — مشرق‌الاذکار محلی بهائی که از خاک بیهار برمی‌خیزد.",
    },
  },
  {
    id: "concept-lattice",
    src: "/temples/bahai-lattice-concept.jpg",
    thumb: "/temples/thumbs/bahai-lattice-concept.jpg",
    region: "designs",
    year: "Concept",
    en: {
      title: "Bahá’í House of Worship — Lattice Concept",
      location: "Bahá’í architectural vision",
      description:
        "A diamond-lattice Bahá’í sanctuary glowing at golden hour — contemporary form carrying the eternal nine-door invitation.",
    },
    sv: {
      title: "Bahá’í tillbedjanshus — gallerkupolskoncept",
      location: "Bahá’í arkitektonisk vision",
      description:
        "En bahá’í gallerhelgedom som lyser i guldtimmen — samtida form med den eviga inbjudan genom nio dörrar.",
    },
    fa: {
      title: "مشرق‌الاذکار بهائی — طرح گنبد مشبک",
      location: "چشم‌انداز معماری بهائی",
      description:
        "مشرق‌الاذکار مشبک بهائی در ساعت طلایی — فرمی معاصر با دعوت ازلی نه در.",
    },
  },
  {
    id: "kinshasa-plaza",
    src: "/temples/bahai-temple-1.jpg",
    region: "africa",
    year: "2023",
    featured: true,
    span: "wide",
    en: {
      title: "House of Worship — Kinshasa",
      location: "Kinshasa, Democratic Republic of the Congo",
      description:
        "Terracotta lattice rising among palms — a continental temple whose woven geometry honors Congolese craft and the oneness of humanity.",
    },
    sv: {
      title: "Tillbedjanshus — Kinshasa",
      location: "Kinshasa, Demokratiska republiken Kongo",
      description:
        "Terrakottagaller bland palmer — ett kontinentalt tempel vars vävda geometri hedrar kongolesiskt hantverk och mänsklighetens enhet.",
    },
    fa: {
      title: "مشرق‌الاذکار — کینشاسا",
      location: "کینشاسا، جمهوری دموکراتیک کنگو",
      description:
        "مشبک سفالین میان نخل‌ها — معبدی قاره‌ای که هندسهٔ بافته‌اش صنعت کنگویی و وحدت بشر را حرمت می‌نهد.",
    },
  },
  {
    id: "kinshasa-aerial",
    src: "/temples/bahai-temple-6.jpg",
    region: "africa",
    year: "2023",
    en: {
      title: "Kinshasa from Above — Star & Water",
      location: "Kinshasa, Democratic Republic of the Congo",
      description:
        "A nine-pointed roof floats on turquoise pools, the Greatest Name at its crown — sacred geometry made landscape.",
    },
    sv: {
      title: "Kinshasa från ovan — stjärna & vatten",
      location: "Kinshasa, Demokratiska republiken Kongo",
      description:
        "Ett niouddigt tak flyter på turkosblå dammar, med Det Största Namnet i kronan — helig geometri som landskap.",
    },
    fa: {
      title: "کینشاسا از فراز — ستاره و آب",
      location: "کینشاسا، جمهوری دموکراتیک کنگو",
      description:
        "بام نه‌پر روی حوض‌های فیروزه‌ای شناور است و اسم اعظم بر تاج آن — هندسهٔ مقدس چون منظره.",
    },
  },
  {
    id: "kinshasa-dusk",
    src: "/temples/hope-perspective.jpg",
    region: "africa",
    year: "2023",
    span: "wide",
    en: {
      title: "Kinshasa at Dusk — Mirror Pool",
      location: "Kinshasa, Democratic Republic of the Congo",
      description:
        "Golden light against indigo twilight, doubled in still water — hope made visible as architecture.",
    },
    sv: {
      title: "Kinshasa i skymning — spegeldamm",
      location: "Kinshasa, Demokratiska republiken Kongo",
      description:
        "Gyllene ljus mot indigoblå skymning, dubblerad i stilla vatten — hopp synligt som arkitektur.",
    },
    fa: {
      title: "کینشاسا در غروب — حوض آینه‌وار",
      location: "کینشاسا، جمهوری دموکراتیک کنگو",
      description:
        "نور زرین در برابر شامگاه نیلی، دوبرابر در آب آرام — امید چون معماری پدیدار.",
    },
  },
  {
    id: "congo-design-render",
    src: "/temples/congo-temple-design.jpg",
    region: "designs",
    year: "Design",
    en: {
      title: "First Temple in Congo — Design Unveiled",
      location: "Democratic Republic of the Congo",
      description:
        "An unveiled vision for the DRC: warm spire, rhythmic eaves, and gardens that invite an entire people to prayer.",
    },
    sv: {
      title: "Första templet i Kongo — design",
      location: "Demokratiska republiken Kongo",
      description:
        "En avtäckt vision för Kongo: varm spira, rytmiska takutsprång och trädgårdar som bjuder in ett helt folk till bön.",
    },
    fa: {
      title: "نخستین معبد کنگو — رونمایی طرح",
      location: "جمهوری دموکراتیک کنگو",
      description:
        "چشم‌اندازی رونمایی‌شده برای کنگو: منارهٔ گرم، بام‌های موج‌دار، و باغ‌هایی که مردمی را به دعا می‌خوانند.",
    },
  },
  {
    id: "congo-sunburst",
    src: "/temples/congo-architect-reflects.jpg",
    region: "africa",
    year: "2023",
    span: "tall",
    en: {
      title: "Kinshasa — Sunburst Tower",
      location: "Kinshasa, Democratic Republic of the Congo",
      description:
        "Sun flares through the upper arches of a mosaic tower — light as the first word of worship.",
    },
    sv: {
      title: "Kinshasa — solglimtstornet",
      location: "Kinshasa, Demokratiska republiken Kongo",
      description:
        "Solen bryter genom tornbågarna — ljuset som tillbedjans första ord.",
    },
    fa: {
      title: "کینشاسا — برج نور خورشید",
      location: "کینشاسا، جمهوری دموکراتیک کنگو",
      description:
        "خورشید از کمان‌های بالای برج می‌گذرد — نور به‌مثابهٔ نخستین کلام عبادت.",
    },
  },
  {
    id: "canada-national-night",
    src: "/temples/canada-national-design-18.jpg",
    region: "designs",
    year: "Design",
    span: "wide",
    en: {
      title: "Canada’s National Temple — Night Design",
      location: "Canada",
      description:
        "Nine warm petals glow in a northern forest at night — a national House of Worship envisioned as a lantern among the trees.",
    },
    sv: {
      title: "Kanadas nationella tempel — natt",
      location: "Kanada",
      description:
        "Nio varma blad lyser i en nordlig skog om natten — ett nationellt tillbedjanshus som en lykta bland träden.",
    },
    fa: {
      title: "معبد ملی کانادا — طرح شب",
      location: "کانادا",
      description:
        "نه گلبرگ گرم در جنگل شمالی شب می‌درخشند — مشرق‌الاذکار ملی چون فانوس میان درختان.",
    },
  },
  {
    id: "canada-national-forest",
    src: "/temples/bahai-national-house-of-worship.jpg",
    region: "designs",
    year: "Design",
    span: "tall",
    en: {
      title: "Canada’s National Temple — Forest Setting",
      location: "Canada",
      description:
        "Petal façades rising through pine and fern — a design that lets the temple belong to the land before it belongs to the sky.",
    },
    sv: {
      title: "Kanadas nationella tempel — skog",
      location: "Kanada",
      description:
        "Bladfasader mellan tall och ormbunkar — en design där templet tillhör marken innan det tillhör himlen.",
    },
    fa: {
      title: "معبد ملی کانادا — در جنگل",
      location: "کانادا",
      description:
        "نماهای گلبرگی میان کاج و سرخس — طرحی که معبد را پیش از آسمان به زمین می‌سپارد.",
    },
  },
  {
    id: "santiago-entrance-night",
    src: "/temples/entrance-night.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Santiago Entrance at Twilight",
      location: "Santiago, Chile",
      description:
        "Leaves on cobblestone, birds in violet sky, and nine glowing wings — the threshold of South America’s Temple.",
    },
    sv: {
      title: "Santiagos entré i skymning",
      location: "Santiago, Chile",
      description:
        "Löv på kullersten, fåglar i violett himmel och nio lysande vingar — tröskeln till Sydamerikas tempel.",
    },
    fa: {
      title: "ورودی سانتیاگو در گرگ‌ومیش",
      location: "سانتیاگو، شیلی",
      description:
        "برگ روی سنگفرش، پرندگان در آسمان بنفش، و نه بال درخشان — آستانهٔ معبد آمریکای جنوبی.",
    },
  },
  {
    id: "png-inauguration",
    src: "/temples/png-inauguration.jpg",
    thumb: "/temples/thumbs/png-inauguration.jpg",
    region: "oceania",
    year: "2024",
    featured: true,
    span: "wide",
    en: {
      title: "Papua New Guinea — House of Worship Inaugurated",
      location: "Port Moresby region, Papua New Guinea",
      description:
        "Woven lattice glowing at sunset: Oceania’s continental temple opens its nine doors amid tropical gardens and a sky washed in rose and violet.",
    },
    sv: {
      title: "Papua Nya Guinea — tillbedjanshus invigt",
      location: "Port Moresby-regionen, Papua Nya Guinea",
      description:
        "Vävt galler som lyser i solnedgången: Oceanienens kontinentala tempel öppnar nio dörrar bland tropiska trädgårdar under en rosaviolett himmel.",
    },
    fa: {
      title: "پاپوآ گینهٔ نو — افتتاح مشرق‌الاذکار",
      location: "منطقهٔ پورت مورزبی، پاپوآ گینهٔ نو",
      description:
        "مشبک بافته در غروب می‌درخشد: معبد قاره‌ای اقیانوسیه نه در خود را میان باغ‌های استوایی و آسمان گلگون می‌گشاید.",
    },
  },
  {
    id: "png-handwoven",
    src: "/temples/png-handwoven.jpg",
    thumb: "/temples/thumbs/png-handwoven.jpg",
    region: "oceania",
    year: "2024",
    en: {
      title: "Papua New Guinea — Handwoven Dome at Blue Hour",
      location: "Papua New Guinea",
      description:
        "Diamond windows like stars in a woven sky — local craft and sacred geometry meet under indigo twilight.",
    },
    sv: {
      title: "Papua Nya Guinea — handvävd kupol",
      location: "Papua Nya Guinea",
      description:
        "Rutfönster som stjärnor i en vävd himmel — lokalt hantverk och helig geometri under indigo skymning.",
    },
    fa: {
      title: "پاپوآ گینهٔ نو — گنبد دست‌بافت در ساعت آبی",
      location: "پاپوآ گینهٔ نو",
      description:
        "پنجره‌های لوزی چون ستاره در آسمان بافته — صنعت محلی و هندسهٔ مقدس در شامگاه نیلی.",
    },
  },
  {
    id: "uhj-arc-mount-carmel",
    src: "/temples/uhj-arc-mount-carmel.jpg",
    thumb: "/temples/thumbs/uhj-arc-mount-carmel.jpg",
    region: "holy-land",
    year: "1983–2001",
    featured: true,
    span: "wide",
    en: {
      title: "The Arc — Seat of the Universal House of Justice",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "White marble colonnades and turquoise roofs along the Arc: the administrative heart of the Bahá’í Faith set in cypress gardens above Haifa.",
    },
    sv: {
      title: "Bågen — Universella rättvisans hus",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Vit marmor och turkosa tak längs Bågen: trons administrativa hjärta bland cypressträdgårdar ovanför Haifa.",
    },
    fa: {
      title: "قوس کرمل — مقر بیت‌العدل اعظم",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "ستون‌های مرمرین و بام‌های فیروزه‌ای در امتداد قوس: قلب اداری امر در باغ‌های سرو بر فراز حیفا.",
    },
  },
  {
    id: "bahai-world-centre-arc",
    src: "/temples/bahai-world-centre-arc.jpg",
    thumb: "/temples/thumbs/bahai-world-centre-arc.jpg",
    region: "holy-land",
    year: "Holy Land",
    span: "hero",
    en: {
      title: "Bahá’í World Centre — The Arc Gardens",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "Aerial sweep of the Arc buildings and terraced lawns — geometry, greenery, and the city of Haifa sharing one mountain.",
    },
    sv: {
      title: "Bahá’í världscentrum — Bågens trädgårdar",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Flygvy över Bågens byggnader och terrasserade gräsmattor — geometri, grönska och Haifa på samma berg.",
    },
    fa: {
      title: "مرکز جهانی بهائی — باغ‌های قوس",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "نمای هوایی بناهای قوس و چمن‌های مطبق — هندسه، سبزی و شهر حیفا بر یک کوه.",
    },
  },
  {
    id: "bahai-world-centre-green",
    src: "/temples/bahai-world-centre-green.jpg",
    thumb: "/temples/thumbs/bahai-world-centre-green.jpg",
    region: "holy-land",
    year: "Holy Land",
    en: {
      title: "Mount Carmel — Arc Among the Cypress",
      location: "Haifa, Israel",
      description:
        "Emerald lawns, fan-shaped paths, and classical domes — the World Centre nestled into the Carmel hillside.",
    },
    sv: {
      title: "Karmelberget — Bågen bland cypresser",
      location: "Haifa, Israel",
      description:
        "Smaragdgröna gräsmattor, solfjäderformade stigar och klassiska kupoler — världscentrumet i Karmels sluttning.",
    },
    fa: {
      title: "کوه کرمل — قوس میان سروها",
      location: "حیفا، اسرائیل",
      description:
        "چمن زمردی، مسیرهای بادبزنی و گنبدهای کلاسیک — مرکز جهانی در دامنهٔ کرمل.",
    },
  },
  {
    id: "shrine-night-ben-gurion",
    src: "/temples/shrine-night-ben-gurion.jpg",
    thumb: "/temples/thumbs/shrine-night-ben-gurion.jpg",
    region: "holy-land",
    year: "Night",
    featured: true,
    span: "tall",
    en: {
      title: "Shrine of the Báb — Night from Ben Gurion Avenue",
      location: "Haifa, Israel",
      description:
        "Nineteen terraces of light climb Mount Carmel; the golden dome crowns a vertical path of devotion above the city’s night traffic.",
    },
    sv: {
      title: "Bábs helgedom — natt från Ben Gurion-avenyn",
      location: "Haifa, Israel",
      description:
        "Nitton ljusterrasser klättrar upp Karmel; den gyllene kupolen kröner en vertikal andaktsväg över nattens stad.",
    },
    fa: {
      title: "مقام اعلی — شب از خیابان بن‌گوریون",
      location: "حیفا، اسرائیل",
      description:
        "نوزده تراس نور از کوه کرمل بالا می‌روند؛ گنبد زرین تاج راه عمودی نیایش بر فراز شب شهر است.",
    },
  },
  {
    id: "shrine-bab-garden-close",
    src: "/temples/shrine-bab-garden-close.jpg",
    thumb: "/temples/thumbs/shrine-bab-garden-close.jpg",
    region: "holy-land",
    year: "1909–1953",
    en: {
      title: "Shrine of the Báb — Among Cypress & Palms",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "Golden dome against Mediterranean sky, framed by cypress, palms, and the quiet geometry of the gardens.",
    },
    sv: {
      title: "Bábs helgedom — bland cypress och palmer",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Gyllene kupol mot medelhavshimmel, inramad av cypress, palmer och trädgårdarnas stilla geometri.",
    },
    fa: {
      title: "مقام اعلی — میان سرو و نخل",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "گنبد زرین در برابر آسمان مدیترانه، در قاب سرو، نخل و هندسهٔ آرام باغ‌ها.",
    },
  },
  {
    id: "shrine-garden-landscape",
    src: "/temples/shrine-garden-landscape.jpg",
    thumb: "/temples/thumbs/shrine-garden-landscape.jpg",
    region: "holy-land",
    year: "Gardens",
    span: "wide",
    en: {
      title: "Queen of Carmel — Garden Path",
      location: "Haifa, Israel",
      description:
        "Palms, flower beds, and a pale gravel path lead the eye to the golden dome — pilgrimage made landscape.",
    },
    sv: {
      title: "Karmels drottning — trädgårdsstig",
      location: "Haifa, Israel",
      description:
        "Palmer, blomsterrabatter och en ljus grusväg leder blicken till den gyllene kupolen — pilgrimskap som landskap.",
    },
    fa: {
      title: "ملکهٔ کرمل — مسیر باغ",
      location: "حیفا، اسرائیل",
      description:
        "نخل، باغچهٔ گل و مسیر شن روشن چشم را به گنبد زرین می‌برد — زیارت چون منظره.",
    },
  },
  {
    id: "haifa-terraces-day",
    src: "/temples/haifa-terraces-day.jpg",
    thumb: "/temples/thumbs/haifa-terraces-day.jpg",
    region: "holy-land",
    year: "Terraces",
    en: {
      title: "Terraces of Light — Daytime Ascent",
      location: "Mount Carmel, Haifa, Israel",
      description:
        "The central staircase rises through emerald lawns and palms toward the Shrine — a daylight hymn of symmetry.",
    },
    sv: {
      title: "Ljusterrasser — dagsstigning",
      location: "Karmelberget, Haifa, Israel",
      description:
        "Den centrala trappan stiger genom smaragdgröna gräsmattor och palmer mot helgedomen — en dagspsalm i symmetri.",
    },
    fa: {
      title: "تراس‌های نور — صعود روزانه",
      location: "کوه کرمل، حیفا، اسرائیل",
      description:
        "پلکان مرکزی از میان چمن زمردی و نخل‌ها به سوی مقام اعلی می‌رود — سرود روز در تقارن.",
    },
  },
  {
    id: "akko-monument-gardens",
    src: "/temples/akko-monument-gardens.jpg",
    thumb: "/temples/thumbs/akko-monument-gardens.jpg",
    region: "holy-land",
    year: "Design",
    en: {
      title: "Akko — Monument & Gardens Vision",
      location: "Acre (Akko), Israel",
      description:
        "A night rendering of radiating paths and nine-fold geometry — new sacred gardens envisioned near the Holy Land’s northern shore.",
    },
    sv: {
      title: "Akko — monument & trädgårdsvision",
      location: "Akko, Israel",
      description:
        "En nattrendering av strålande stigar och niofaldig geometri — nya heliga trädgårdar vid det heliga landets nordkust.",
    },
    fa: {
      title: "عکا — چشم‌انداز بنای یادبود و باغ‌ها",
      location: "عکا، اسرائیل",
      description:
        "رندر شبانهٔ مسیرهای شعاعی و هندسهٔ نه‌گانه — باغ‌های مقدسی نو در ساحل شمالی ارض اقدس.",
    },
  },
  {
    id: "lotus-delhi-night",
    src: "/temples/lotus-delhi-night.jpg",
    thumb: "/temples/thumbs/lotus-delhi-night.jpg",
    region: "asia",
    year: "1986",
    en: {
      title: "Lotus Temple — Illuminated Petals",
      location: "New Delhi, India",
      description:
        "Marble petals floodlit against indigo night — the House of Worship opening nine silent invitations to prayer.",
    },
    sv: {
      title: "Lotustemplet — belysta blad",
      location: "New Delhi, Indien",
      description:
        "Marmorblad belysta mot indigo natt — tillbedjanshuset öppnar nio tysta inbjudningar till bön.",
    },
    fa: {
      title: "معبد نیلوفر — گلبرگ‌های نورانی",
      location: "دهلی نو، هند",
      description:
        "گلبرگ‌های مرمرین در شب نیلی — مشرق‌الاذکار با نه دعوت خاموش به دعا.",
    },
  },
  {
    id: "lotus-reflection-pool",
    src: "/temples/lotus-reflection-pool.jpg",
    thumb: "/temples/thumbs/lotus-reflection-pool.jpg",
    region: "asia",
    year: "1986",
    span: "wide",
    en: {
      title: "Lotus Temple — Mirror Pool",
      location: "New Delhi, India",
      description:
        "The lotus doubled in still water: starburst lights and white marble reflected as one quiet prayer.",
    },
    sv: {
      title: "Lotustemplet — spegeldamm",
      location: "New Delhi, Indien",
      description:
        "Lotusen dubblerad i stilla vatten: stjärnljus och vit marmor speglas som en enda stilla bön.",
    },
    fa: {
      title: "معبد نیلوفر — حوض آینه",
      location: "دهلی نو، هند",
      description:
        "نیلوفر دوبرابر در آب آرام: نورهای ستاره‌ای و مرمر سفید چون یک دعا.",
    },
  },
  {
    id: "santiago-interior",
    src: "/temples/santiago-interior.jpg",
    thumb: "/temples/thumbs/santiago-interior.jpg",
    region: "americas",
    year: "2016",
    en: {
      title: "Santiago Interior — Light Through Wings",
      location: "Santiago, Chile",
      description:
        "Translucent marble panels and curved wooden benches — South America’s Temple as a vessel of soft daylight.",
    },
    sv: {
      title: "Santiago interiör — ljus genom vingar",
      location: "Santiago, Chile",
      description:
        "Genomskinliga marmorpaneler och böjda träbänkar — Sydamerikas tempel som ett kärl av mjukt dagsljus.",
    },
    fa: {
      title: "درون سانتیاگو — نور از میان بال‌ها",
      location: "سانتیاگو، شیلی",
      description:
        "ورقه‌های مرمر نیمه‌شفاف و نیمکت‌های چوبی خمیده — معبد آمریکای جنوبی چون ظرف نور نرم.",
    },
  },
  {
    id: "kinshasa-hero-dusk",
    src: "/temples/kinshasa-hero-dusk.jpg",
    thumb: "/temples/thumbs/kinshasa-hero-dusk.jpg",
    region: "africa",
    year: "2023",
    span: "wide",
    en: {
      title: "Kinshasa — Gathering at Dusk",
      location: "Kinshasa, Democratic Republic of the Congo",
      description:
        "Friends gather on the steps as the woven dome glows against a violet sky — Africa’s continental temple alive with welcome.",
    },
    sv: {
      title: "Kinshasa — samling i skymning",
      location: "Kinshasa, Demokratiska republiken Kongo",
      description:
        "Vänner samlas på trapporna medan den vävda kupolen lyser mot en violett himmel — Afrikas kontinentala tempel fullt av välkomnande.",
    },
    fa: {
      title: "کینشاسا — گردهمایی در غروب",
      location: "کینشاسا، جمهوری دموکراتیک کنگو",
      description:
        "دوستان بر پله‌ها گرد می‌آیند و گنبد بافته در آسمان بنفش می‌درخشد — معبد قاره‌ای آفریقا سرشار از استقبال.",
    },
  },
];
