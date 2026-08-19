'use client'

import Link from 'next/link'
import { use, useMemo, useState } from 'react'

type Category = 'all' | 'sound' | 'image' | 'installation'

type Work = {
  year: string
  title: string
  subtitle: string
  slug: string
  categories: Exclude<Category, 'all'>[]
  tags: string[]
  image: string
}

const works: Work[] = [
  {
    year: '2025',
    title: 'La Solitude des Automates',
    subtitle: 'The Solitude of Automata',
    slug: 'la-solitude-des-automates',
    categories: ['image', 'sound'],
    tags: ['Moving Image', 'Sound', 'Film'],
    image: '/la-solitude-des-automates.jpg',
  },
]

const labels = {
  en: {
    heading: 'Selected Works',
    all: 'All',
    sound: 'Sound',
    image: 'Image',
    installation: 'Installation',
  },
  fr: {
    heading: 'Œuvres',
    all: 'Tout',
    sound: 'Son',
    image: 'Image',
    installation: 'Installation',
  },
  cn: {
    heading: '作品',
    all: '全部',
    sound: '声音',
    image: '影像',
    installation: '装置',
  },
}

export default function WorksPage({
  params,
}: {
  params: Promise<{ lang: 'en' | 'fr' | 'cn' }>
}) {
  const { lang } = use(params)
  const [active, setActive] = useState<Category>('all')

  const categories: Category[] = [
    'all',
    'sound',
    'image',
    'installation',
  ]

  const filteredWorks = useMemo(() => {
    if (active === 'all') return works
    return works.filter((work) => work.categories.includes(active))
  }, [active])

  return (
    <main className="min-h-screen bg-white px-6 pb-32 pt-[220px] md:px-10">
      <div className="mx-auto max-w-[1180px]">

        <div className="mb-20 text-[11px] uppercase tracking-[0.18em] text-black/40">
          {labels[lang].heading}
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-[220px_1fr] md:gap-24">

          <nav className="flex gap-6 overflow-x-auto md:sticky md:top-[220px] md:block md:self-start">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`block shrink-0 text-left text-[13px] transition-all duration-300 md:mb-4 ${
                  active === category
                    ? 'text-[#0F02E6]'
                    : 'text-black/35 hover:text-black'
                }`}
              >
                {labels[lang][category]}
              </button>
            ))}
          </nav>

          <section>
            {filteredWorks.map((work) => (
              <Link
                key={work.slug}
                href={`/${lang}/pages/works/${work.slug}`}
                className="group block"
              >
                <article>
                  <div className="mb-8 flex items-start justify-between gap-6">
                    <div className="font-mono text-[11px] text-black/40">
                      {work.year}
                    </div>

                    <div className="flex flex-wrap justify-end gap-x-3 text-[11px] text-black/40">
                      {work.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <h2
                    className="max-w-[900px] text-[clamp(3.4rem,6vw,6rem)] font-normal leading-[0.84] tracking-[-0.055em] text-[#0F02E6]"
                    style={{
                      fontFamily:
                        'Georgia, "Times New Roman", Times, serif',
                    }}
                  >
                    La Solitude
                    <br />
                    des Automates
                  </h2>

                  <p className="mt-7 text-[16px] italic text-black/55">
                    {work.subtitle}
                  </p>

                  <div className="mt-10 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full transition-transform duration-700 group-hover:scale-[1.01]"
                    />
                  </div>
                </article>
              </Link>
            ))}
          </section>

        </div>
      </div>
    </main>
  )
}
