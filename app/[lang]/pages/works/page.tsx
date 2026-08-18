'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const categoryLabels = {
  en: {
    all: 'ALL',
    sound: 'SOUND',
    image: 'IMAGE',
    performance: 'PERFORMANCE',
    installation: 'INSTALLATION',
  },
  fr: {
    all: 'TOUT',
    sound: 'SON',
    image: 'IMAGE',
    performance: 'PERFORMANCE',
    installation: 'INSTALLATION',
  },
  cn: {
    all: '全部',
    sound: '声音',
    image: '影像',
    performance: '表演',
    installation: '装置',
  },
}

const categoryKeys = ['all', 'sound', 'image', 'performance', 'installation']

const works = []

export default function Page() {
  const params = useParams()
  const lang = (params.lang as 'en' | 'fr' | 'cn') || 'en'
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredWorks =
    activeCategory === 'all'
      ? works
      : works.filter((work) => work.category === activeCategory)

  return (
    <div className="items-center w-full">
      <div className="w-full px-4 sm:px-8">

        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-12 text-sm sm:text-base">
          {categoryKeys.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`transition-all duration-300 ${
                activeCategory === category
                  ? 'blur-0'
                  : 'blur-[1.5px] hover:blur-0'
              }`}
            >
              {categoryLabels[lang][category as keyof typeof categoryLabels.en]}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 w-full">
          {filteredWorks.map((work) => (
            <div key={work.title}>
              <Link href={work.href}>
                <Image
                  src={work.image}
                  alt={work.title}
                  width={1200}
                  height={600}
                  className="w-full p-4 h-auto rounded hover:blur-sm"
                />
              </Link>

              <h1 className="text-center w-full">
                {work.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
