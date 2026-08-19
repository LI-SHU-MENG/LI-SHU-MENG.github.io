import React from 'react'
import Image from 'next/image'
import { getDictionary } from '@root/get-dictionary'
import { Locale } from '@root/i18n-config'

export default async function Biblio(props: {
  params: Promise<{ lang: Locale }>
}) {
  const { lang } = await props.params
  const dictionary = await getDictionary(lang)

  return (
    <div className="w-full pr-4 pb-0 pt-[220px] sm:pr-8">
      <div className="mx-auto flex w-full max-w-[1080px] flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">

        {/* Portrait */}
        <div className="w-full md:w-[46%] md:ml-16 md:translate-y-10">
          <Image
            src="/portrait.jpg"
            alt="Shumeng Li"
            width={1600}
            height={2400}
            className="h-auto w-full -translate-y-6 object-contain object-left-top md:-translate-y-24"
            priority
            quality={100}
            sizes="(min-width: 768px) 72vw, 100vw"
            style={{ imageRendering: "auto" }}
          />
        </div>

        {/* Biography */}
        <div className="w-full text-justify text-lg leading-[1.42] md:w-[32%] md:flex-none md:pt-[29em]">
          {dictionary.biography
            .split('\n')
            .filter(Boolean)
            .map((line, index) => (
              <p key={index} className="mb-6">
                {line}
              </p>
            ))}
        </div>

      </div>
    </div>
  )
}
