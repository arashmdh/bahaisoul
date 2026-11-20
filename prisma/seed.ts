import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const HIDDEN_WORDS = [
  {
    quote:
      "O Son of Spirit! My first counsel is this: Possess a pure, kindly and radiant heart, that thine may be a sovereignty ancient, imperishable and everlasting.",
    source: "The Hidden Words, Arabic 1",
    author: "Bahá'u'lláh",
  },
  {
    quote:
      "O Son of Man! Veiled in My immemorial being and in the ancient eternity of My essence, I knew My love for thee; therefore I created thee, have engraved on thee Mine image and revealed to thee My beauty.",
    source: "The Hidden Words, Arabic 3",
    author: "Bahá'u'lláh",
  },
  {
    quote:
      "O Friend! In the garden of thy heart plant naught but the rose of love, and from the nightingale of affection and desire loosen not thy hold.",
    source: "The Hidden Words, Persian 3",
    author: "Bahá'u'lláh",
  },
  {
    quote:
      "O Son of Being! Thy Paradise is My love; thy heavenly home, reunion with Me. Enter therein and tarry not. This is that which hath been destined for thee in Our kingdom above and Our exalted dominion.",
    source: "The Hidden Words, Arabic 6",
    author: "Bahá'u'lláh",
  },
  {
    quote:
      "O Son of Spirit! Noble have I created thee, yet thou hast abased thyself. Rise then unto that for which thou wast created.",
    source: "The Hidden Words, Arabic 22",
    author: "Bahá'u'lláh",
  },
];

async function main() {
  const today = new Date().toISOString().slice(0, 10);
  const pick = HIDDEN_WORDS[new Date().getDate() % HIDDEN_WORDS.length];

  await prisma.dailySacredWriting.upsert({
    where: { dateKey: today },
    update: {},
    create: {
      quote: pick.quote,
      source: pick.source,
      author: pick.author,
      lang: "en",
      featured: true,
      dateKey: today,
    },
  });

  const steward = await prisma.user.upsert({
    where: { email: "steward@bahaisoul.com" },
    update: {},
    create: {
      email: "steward@bahaisoul.com",
      name: "Temple Steward",
      role: "ADMIN",
      bio: "Caretaker of the Virtual Temple.",
      languagePref: "en",
    },
  });

  const scholar = await prisma.user.upsert({
    where: { email: "scholar@bahaisoul.com" },
    update: {},
    create: {
      email: "scholar@bahaisoul.com",
      name: "Leyla Rostami",
      role: "SCHOLAR",
      bio: "Researcher of mystical texts and the Seven Valleys.",
      languagePref: "en",
      scholarProfile: {
        create: {
          username: "leyla-rostami",
          title: "Researcher & Facilitator",
          lineageHistory:
            "Studied comparative mysticism with a focus on Bahá'í sacred writings and Persian Sufi tradition.",
          resumeMarkdown:
            "## Focus\n\n- The Seven Valleys\n- Harmony of science and religion\n- Devotional arts\n",
          credentials: "M.A. Religious Studies",
          specialties: JSON.stringify([
            "Mysticism",
            "Sacred Writings",
            "Persian Literature",
          ]),
          verified: true,
        },
      },
    },
  });

  await prisma.article.upsert({
    where: { slug: "threshold-of-the-soul" },
    update: {},
    create: {
      title: "At the Threshold of the Soul",
      slug: "threshold-of-the-soul",
      contentMarkdown:
        "The journey begins not with certainty, but with a quiet turning of the heart toward the Unseen...",
      doorCategory: "METAPHYSICS",
      citationsJson: JSON.stringify([
        {
          text: "The Hidden Words",
          ref: "Arabic 1",
        },
      ]),
      authorId: scholar.id,
      publishedAt: new Date(),
      readingTime: 8,
      featured: true,
    },
  });

  console.log("Seeded sanctuary:", {
    steward: steward.email,
    scholar: scholar.email,
    daily: today,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
