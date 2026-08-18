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
    <div className="w-full px-6 pb-20 pt-[300px] sm:px-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-12 md:flex-row md:items-start md:gap-20">

        {/* Portrait */}
        <div className="w-full md:w-[60%]">
          <Image
            src="/portrait.jpg"
            alt="Shumeng Li"
            width={1600}
            height={2400}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Biography */}
        <div className="w-full text-lg leading-relaxed md:w-[32%]">
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
