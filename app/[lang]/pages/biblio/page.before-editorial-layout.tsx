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
      <div className="flex w-full max-w-[1700px] flex-col gap-8 md:flex-row md:items-start md:justify-start md:gap-6">

        {/* Portrait */}
        <div className="w-full md:w-[72%] md:-translate-x-20 md:translate-y-10">
          <Image
            src="/portrait.jpg"
            alt="Shumeng Li"
            width={1600}
            height={2400}
            className="h-auto w-full object-contain object-left-top"
            priority
          />
        </div>

        {/* Biography */}
        <div className="w-full text-justify text-lg leading-[1.42] md:w-[32%] md:flex-none md:pt-[20em]">
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
