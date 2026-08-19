type Lang = 'en' | 'fr' | 'cn'

const content = {
  en: {
    section: 'Media / 01',
    type: 'Essay · 1 August 2026',
    subtitle:
      'AI, industrial transformation and a new cultural geography from Quanzhou',
    read: 'Read article ↗',
  },
  fr: {
    section: 'Médias / 01',
    type: 'Essai · 1 août 2026',
    subtitle:
      'IA, transformation industrielle et nouvelle géographie culturelle depuis Quanzhou',
    read: 'Lire l’article ↗',
  },
  cn: {
    section: '媒体 / 01',
    type: '文章 · 2026年8月1日',
    subtitle:
      '人工智能、工业转型与来自泉州的新文化地理',
    read: '阅读文章 ↗',
  },
} satisfies Record<Lang, {
  section: string
  type: string
  subtitle: string
  read: string
}>

export default async function MediaPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const t = content[lang] ?? content.en

  return (
    <main className="min-h-screen bg-white px-8 pb-24 pt-[240px]">
      <section className="mx-auto max-w-[1180px]">
        <article className="grid grid-cols-1 gap-16 md:grid-cols-[180px_1fr] md:gap-20">

          <div className="text-sm uppercase tracking-[0.12em] leading-relaxed">
            <div className="text-[#0F02E6]">{t.section}</div>

            <div className="mt-4 text-black/50">
              {t.type}
            </div>
          </div>

          <a
            href="https://www.zaytonsouth.com/journal/quanzhou-ai-after-the-center"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="max-w-[850px]">

              <h1
                className="text-[clamp(3.8rem,9vw,8.5rem)] font-normal leading-[0.78] tracking-[-0.06em] text-[#0F02E6]"
                style={{
                  fontFamily:
                    'Georgia, "Times New Roman", Times, serif',
                }}
              >
                After
                <br />
                the Center
              </h1>

              <p className="mt-10 max-w-[620px] text-[clamp(1.35rem,2.2vw,2.2rem)] leading-[1.05] tracking-[-0.03em]">
                {t.subtitle}
              </p>

              <div className="mt-16 border-t border-black/20 pt-5 text-sm leading-relaxed">
                <div>Shumeng Li</div>
                <div>Zayton South Art Nexus</div>

                <div className="mt-5 text-[#0F02E6] transition-opacity duration-200 group-hover:opacity-40">
                  {t.read}
                </div>
              </div>

            </div>
          </a>

        </article>
      </section>
    </main>
  )
}
