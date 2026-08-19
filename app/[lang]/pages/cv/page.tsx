'use client'

import { use, useState } from 'react'

type Lang = 'en' | 'fr' | 'cn'

type SectionKey =
  | 'education'
  | 'research'
  | 'exhibitions'
  | 'publications'
  | 'residencies'

type Entry = {
  year: string
  title: string
  detail: string
}

const cv: Record<Lang, Record<SectionKey, Entry[]>> = {
  en: {
    education: [
      {
        year: '2024–2025',
        title: 'Postgraduate Program — Filière Artistes & Métiers de l’exposition (FAME)',
        detail: 'Beaux-Arts de Paris, Paris, France',
      },
      {
        year: '2024–2025',
        title: 'Postgraduate Research-Creation Program — Année de Recherche-Création (ARRC)',
        detail: 'École normale supérieure Paris-Saclay, Saclay, France',
      },
      {
        year: '2022–2024',
        title: 'Master’s Degree — Diplôme National Supérieur d’Expression Plastique (DNSEP)',
        detail: 'École nationale supérieure d’arts de Paris-Cergy (ENSAPC), Cergy, France',
      },
      {
        year: '2023–2024',
        title: 'Exchange — BA (Hons) Fine Art',
        detail: 'Central Saint Martins, University of the Arts London, London, United Kingdom',
      },
      {
        year: '2018–2022',
        title: 'Bachelor’s Degree — Diplôme National d’Art (DNA)',
        detail: 'École nationale supérieure d’arts de Paris-Cergy (ENSAPC), Cergy, France',
      },
      {
        year: '2018–2022',
        title: 'Bachelor’s Degree — Cultural Mediation, Music pathway',
        detail: 'Université Sorbonne Nouvelle, Paris, France',
      },
    ],

    research: [
      {
        year: '2026',
        title: 'MIAN Professional Program',
        detail: 'OFQJ × ELEKTRA, Montréal, Canada',
      },
      {
        year: '2025',
        title: 'Sound Spatialisation Workshop',
        detail: 'IRCAM — Institut de Recherche et Coordination Acoustique/Musique, Paris, France',
      },
    ],

    exhibitions: [
      {
        year: '2025',
        title: 'Paradis artificiels',
        detail: 'PhotoSaintGermain × Beaux-Arts de Paris, Paris, France',
      },
      {
        year: '2025',
        title: '(…et Souffle) — Chère Melpomène, Nuit des Musées',
        detail: 'Palais des Beaux-Arts, Paris, France',
      },
      {
        year: '2025',
        title: 'La Révélation — ADAGP × Made Anywhere',
        detail: 'Fondation Fiminco, Romainville, France',
      },
      {
        year: '2025',
        title: 'Les Avant-Choses',
        detail: 'Ygrec-ENSAPC, Aubervilliers, France',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves — Festival Croisements sino-français',
        detail: '101 Art & Design Center, Changle, China',
      },
      {
        year: '2024',
        title: 'Incidental Sideshow',
        detail: 'Lethaby Gallery, Central Saint Martins, London, United Kingdom',
      },
      {
        year: '2023',
        title: 'Great Sounds Seek Silence',
        detail: 'Goldsmiths, University of London, London, United Kingdom',
      },
    ],

    publications: [
      {
        year: '2026',
        title: 'After the Center — AI, Industry and Cultural Geography from Quanzhou',
        detail: 'Zayton South Art Nexus, Quanzhou, China',
      },
      {
        year: '2024',
        title: 'Décomposer la Composition',
        detail: 'DNSEP thesis, 88 pp., ENSAPC, Cergy, France — supervised by Charlotte Charbonnel',
      },
    ],

    residencies: [
      {
        year: '2025',
        title: 'Useful Fictions',
        detail: 'Institut Polytechnique de Paris × Centre Wallonie-Bruxelles, Paris, France',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves',
        detail: 'ENSAPC × 101 Art & Design Center × NetDragon, Changle, China',
      },
    ],
  },

  fr: {
    education: [
      {
        year: '2024–2025',
        title: 'Post-diplôme — Filière Artistes & Métiers de l’exposition (FAME)',
        detail: 'Beaux-Arts de Paris, Paris, France',
      },
      {
        year: '2024–2025',
        title: 'Post-diplôme de recherche-création — Année de Recherche-Création (ARRC)',
        detail: 'École normale supérieure Paris-Saclay, Saclay, France',
      },
      {
        year: '2022–2024',
        title: 'Master — Diplôme National Supérieur d’Expression Plastique (DNSEP)',
        detail: 'École nationale supérieure d’arts de Paris-Cergy (ENSAPC), Cergy, France',
      },
      {
        year: '2023–2024',
        title: 'Échange — BA (Hons) Fine Art',
        detail: 'Central Saint Martins, University of the Arts London, Londres, Royaume-Uni',
      },
      {
        year: '2018–2022',
        title: 'Licence — Diplôme National d’Art (DNA)',
        detail: 'École nationale supérieure d’arts de Paris-Cergy (ENSAPC), Cergy, France',
      },
      {
        year: '2018–2022',
        title: 'Licence — Médiation culturelle, parcours Musique',
        detail: 'Université Sorbonne Nouvelle, Paris, France',
      },
    ],

    research: [
      {
        year: '2026',
        title: 'Programme professionnel MIAN',
        detail: 'OFQJ × ELEKTRA, Montréal, Canada',
      },
      {
        year: '2025',
        title: 'Atelier de spatialisation sonore',
        detail: 'IRCAM — Institut de Recherche et Coordination Acoustique/Musique, Paris, France',
      },
    ],

    exhibitions: [
      {
        year: '2025',
        title: 'Paradis artificiels',
        detail: 'PhotoSaintGermain × Beaux-Arts de Paris, Paris, France',
      },
      {
        year: '2025',
        title: '(…et Souffle) — Chère Melpomène, Nuit des Musées',
        detail: 'Palais des Beaux-Arts, Paris, France',
      },
      {
        year: '2025',
        title: 'La Révélation — ADAGP × Made Anywhere',
        detail: 'Fondation Fiminco, Romainville, France',
      },
      {
        year: '2025',
        title: 'Les Avant-Choses',
        detail: 'Ygrec-ENSAPC, Aubervilliers, France',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves — Festival Croisements sino-français',
        detail: '101 Art & Design Center, Changle, Chine',
      },
      {
        year: '2024',
        title: 'Incidental Sideshow',
        detail: 'Lethaby Gallery, Central Saint Martins, Londres, Royaume-Uni',
      },
      {
        year: '2023',
        title: 'Great Sounds Seek Silence',
        detail: 'Goldsmiths, University of London, Londres, Royaume-Uni',
      },
    ],

    publications: [
      {
        year: '2026',
        title: 'After the Center — AI, Industry and Cultural Geography from Quanzhou',
        detail: 'Zayton South Art Nexus, Quanzhou, Chine',
      },
      {
        year: '2024',
        title: 'Décomposer la Composition',
        detail: 'Mémoire de DNSEP, 88 p., ENSAPC, Cergy, France — dir. Charlotte Charbonnel',
      },
    ],

    residencies: [
      {
        year: '2025',
        title: 'Useful Fictions',
        detail: 'Institut Polytechnique de Paris × Centre Wallonie-Bruxelles, Paris, France',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves',
        detail: 'ENSAPC × 101 Art & Design Center × NetDragon, Changle, Chine',
      },
    ],
  },

  cn: {
    education: [
      {
        year: '2024–2025',
        title: '硕士后项目 — Filière Artistes & Métiers de l’exposition (FAME)',
        detail: '巴黎国立高等美术学院（Beaux-Arts de Paris），巴黎，法国',
      },
      {
        year: '2024–2025',
        title: '硕士后研究-创作项目 — Année de Recherche-Création (ARRC)',
        detail: '巴黎-萨克雷高等师范学院（École normale supérieure Paris-Saclay），萨克雷，法国',
      },
      {
        year: '2022–2024',
        title: '硕士 — Diplôme National Supérieur d’Expression Plastique (DNSEP)',
        detail: '巴黎-塞尔奇高等艺术学院（ENSAPC），塞尔奇，法国',
      },
      {
        year: '2023–2024',
        title: '交换学习 — BA (Hons) Fine Art',
        detail: '伦敦艺术大学中央圣马丁艺术与设计学院，伦敦，英国',
      },
      {
        year: '2018–2022',
        title: '本科 — Diplôme National d’Art (DNA)',
        detail: '巴黎-塞尔奇高等艺术学院（ENSAPC），塞尔奇，法国',
      },
      {
        year: '2018–2022',
        title: '本科 — 文化传播，音乐方向',
        detail: '巴黎第三大学（Université Sorbonne Nouvelle），巴黎，法国',
      },
    ],

    research: [
      {
        year: '2026',
        title: 'MIAN 职业项目',
        detail: 'OFQJ × ELEKTRA，蒙特利尔，加拿大',
      },
      {
        year: '2025',
        title: '声音空间化工作坊',
        detail: '法国声学与音乐研究协调中心（IRCAM），巴黎，法国',
      },
    ],

    exhibitions: [
      {
        year: '2025',
        title: 'Paradis artificiels',
        detail: 'PhotoSaintGermain × Beaux-Arts de Paris，巴黎，法国',
      },
      {
        year: '2025',
        title: '(…et Souffle) — Chère Melpomène, Nuit des Musées',
        detail: '巴黎美术宫（Palais des Beaux-Arts），巴黎，法国',
      },
      {
        year: '2025',
        title: 'La Révélation — ADAGP × Made Anywhere',
        detail: 'Fondation Fiminco，罗曼维尔，法国',
      },
      {
        year: '2025',
        title: 'Les Avant-Choses',
        detail: 'Ygrec-ENSAPC，欧贝维利耶，法国',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves — Festival Croisements sino-français',
        detail: '101 Art & Design Center，长乐，中国',
      },
      {
        year: '2024',
        title: 'Incidental Sideshow',
        detail: 'Lethaby Gallery, Central Saint Martins，伦敦，英国',
      },
      {
        year: '2023',
        title: 'Great Sounds Seek Silence',
        detail: 'Goldsmiths, University of London，伦敦，英国',
      },
    ],

    publications: [
      {
        year: '2026',
        title: 'After the Center — AI, Industry and Cultural Geography from Quanzhou',
        detail: 'Zayton South Art Nexus，泉州，中国',
      },
      {
        year: '2024',
        title: 'Décomposer la Composition',
        detail: 'DNSEP 硕士论文，88页，巴黎-塞尔奇高等艺术学院（ENSAPC），塞尔奇，法国 — 指导：Charlotte Charbonnel',
      },
    ],

    residencies: [
      {
        year: '2025',
        title: 'Useful Fictions',
        detail: '巴黎综合理工学院 × Centre Wallonie-Bruxelles，巴黎，法国',
      },
      {
        year: '2024',
        title: 'Terrestrial Waves',
        detail: 'ENSAPC × 101 Art & Design Center × NetDragon，长乐，中国',
      },
    ],
  },
}

const labels: Record<Lang, Record<SectionKey, string>> = {
  en: {
    education: 'Education',
    research: 'Programs',
    exhibitions: 'Exhibitions',
    publications: 'Writing',
    residencies: 'Residencies',
  },
  fr: {
    education: 'Formation',
    research: 'Programmes',
    exhibitions: 'Expositions',
    publications: 'Écrits',
    residencies: 'Résidences',
  },
  cn: {
    education: '教育',
    research: '项目',
    exhibitions: '展览',
    publications: '写作',
    residencies: '驻留',
  },
}

export default function CVPage({
  params,
}: {
  params: Promise<{ lang: Lang }>
}) {
  const { lang } = use(params)
  const [active, setActive] = useState<SectionKey>('exhibitions')

  const sections: SectionKey[] = [
    'exhibitions',
    'residencies',
    'research',
    'publications',
    'education',
  ]

  return (
    <main className="min-h-screen bg-white px-6 pb-28 pt-[220px] md:px-10">
      <div className="mx-auto max-w-[1180px]">

        

        <div className="grid grid-cols-1 gap-14 md:grid-cols-[230px_1fr] md:gap-24">

          <nav className="flex gap-6 overflow-x-auto pb-3 md:sticky md:top-[220px] md:block md:self-start">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActive(section)}
                className={`block shrink-0 text-left text-[13px] leading-[1.4] transition-all duration-300 md:mb-4 ${
                  active === section
                    ? 'text-[#0F02E6]'
                    : 'text-black/35 hover:text-black'
                }`}
              >
                {labels[lang][section]}
              </button>
            ))}
          </nav>

          <section>
            <h1
              className={`text-[clamp(3.8rem,6.5vw,6.8rem)] font-bold tracking-[-0.065em] text-[#0F02E6] ${
                lang === 'cn'
                  ? 'relative top-3 leading-[1]'
                  : 'leading-[0.82]'
              }`}
              style={{
                fontFamily: 'Arial, "Helvetica Neue", Helvetica, sans-serif',
                width: '100%',
                textAlign: 'right',
                marginBottom: '130px',
              }}
            >
              {labels[lang][active]}
            </h1>

            <div className="space-y-5">
              {cv[lang][active].map((entry) => (
                <div
                  key={`${entry.year}-${entry.title}`}
                  className="grid grid-cols-1 gap-1 md:grid-cols-[110px_1fr] md:gap-8"
                >
                  <div className="pt-[2px] font-mono text-[12px] text-black/45">
                    {entry.year}
                  </div>

                  <div>
                    <div className="text-[17px] leading-[1.25] tracking-[-0.015em]">
                      <span className="italic">{entry.title}</span>
                    </div>

                    <div className="mt-[3px] text-[14px] leading-[1.4] text-black/55">
                      {entry.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
