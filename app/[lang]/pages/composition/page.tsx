import ShowreelPlayer from '@components/ShowreelPlayer'

type Lang = 'en' | 'fr' | 'cn'

const content = {
  en: {
    subtitle: ['ORIGINAL MUSIC & SOUND DESIGN', 'FOR FILM, FASHION & VISUAL MEDIA'],
    description:
      'Shumeng Li composes original music and designs sound for film, fashion and visual media. Moving between composition, field recording and spatial sound, she creates precise sonic worlds that shape rhythm, atmosphere and narrative. Based in Paris and available for international commissions.',
    services: ['COMPOSITION', 'SOUND DESIGN', 'MOVING IMAGE', 'SPATIAL SOUND'],
    contact: 'FOR COMMISSIONS & COLLABORATIONS',
    availability: 'PARIS · AVAILABLE INTERNATIONALLY',
  },
  fr: {
    subtitle: ['MUSIQUE ORIGINALE ET DESIGN SONORE', 'POUR LE CINÉMA, LA MODE ET LES MÉDIAS VISUELS'],
    description:
      'Shumeng Li compose des musiques originales et crée des univers sonores pour le cinéma, la mode et les médias visuels. Entre composition, prise de son de terrain et spatialisation, elle construit des paysages sonores précis qui façonnent le rythme, l’atmosphère et la narration. Basée à Paris, elle est disponible pour des commandes et collaborations internationales.',
    services: ['COMPOSITION', 'DESIGN SONORE', 'IMAGE EN MOUVEMENT', 'SON SPATIALISÉ'],
    contact: 'COMMANDES & COLLABORATIONS',
    availability: 'PARIS · DISPONIBLE POUR DES PROJETS INTERNATIONAUX',
  },
  cn: {
    subtitle: ['为电影、时尚与视觉媒体', '创作原创音乐与声音设计'],
    description:
      '李舒萌为电影、时尚与视觉媒体创作原创音乐与声音设计。她在作曲、田野录音与声音空间化之间展开实践，通过精确的声音结构塑造节奏、氛围与叙事。现居巴黎，可承接国际委托与合作。',
    services: ['作曲', '声音设计', '动态影像', '声音空间化'],
    contact: '委托与合作',
    availability: '巴黎 · 接受国际项目',
  },
} satisfies Record<Lang, {
  subtitle: string[]
  description: string
  services: string[]
  contact: string
  availability: string
}>

export default async function CompositionPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = await params
  const t = content[lang] ?? content.en

  return (
    <main className="min-h-screen bg-white px-6 pb-32 pt-[220px] md:px-10">
      <div className="mx-auto max-w-[1180px]">
        <header className="mb-16 md:mb-24">
          <h1
            className="text-[clamp(3.6rem,9vw,8.5rem)] font-normal leading-[0.78] tracking-[-0.06em] text-[#0F02E6]"
            style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
          >
            COMPOSITION
          </h1>

          <div className="mt-10 text-[11px] uppercase leading-[1.55] tracking-[0.18em] text-black/40">
            {t.subtitle.map((line) => (
              <div key={line}>{line}</div>
            ))}
          </div>
        </header>

        <section id="showreel" className="mb-24 scroll-mt-[220px] md:mb-32">
          <h2
            className="mb-10 text-[clamp(2.8rem,6vw,5.8rem)] font-normal leading-[0.84] tracking-[-0.055em] text-[#0F02E6]"
            style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}
          >
            SHOWREEL 2026
          </h2>
          <div className="mx-auto w-full">
            <ShowreelPlayer />
            <div className="mt-4 text-[11px] uppercase tracking-[0.14em] text-black/40">
              02:15
            </div>
          </div>
        </section>

        <section className="mb-28 md:pl-[316px]">
          <p className="max-w-[720px] text-[17px] leading-[1.55]">
            {t.description}
          </p>
        </section>

        <section className="mb-32 border-t border-black/20 pt-5 md:mb-40">
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-[12px] uppercase tracking-[0.12em] md:grid-cols-4">
            {t.services.map((service) => (
              <div key={service}>{service}</div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 border-t border-black/20 pt-5 md:grid-cols-[220px_1fr] md:gap-24">
          <div className="text-[11px] uppercase tracking-[0.14em] text-[#0F02E6]">
            {t.contact}
          </div>
          <div className="text-[12px] uppercase leading-[1.7] tracking-[0.12em]">
            <a
              href="mailto:shumengli.studio@gmail.com"
              className="text-[#0F02E6] transition-opacity duration-200 hover:opacity-45"
            >
              shumengli.studio@gmail.com
            </a>
            <div className="text-black/50">{t.availability}</div>
          </div>
        </section>
      </div>
    </main>
  )
}
