import React from 'react'
import Image from 'next/image'
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";

export default async function Biblio(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="w-full px-6 pb-12 pt-[270px] sm:px-20 sm:pb-20">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-12 md:flex-row md:items-start md:gap-20">

        <div className="w-full md:w-[62%] md:max-w-[900px]">
          <Image
            src="/portrait.jpg"
            alt="Shumeng Li"
            width={1600}
            height={2400}
            className="h-auto w-full"
            priority
          />
        </div>

        <div className="w-full text-justify text-lg leading-relaxed md:w-[30%]">
          {dictionary.biography.split('\n').map((line, index) => (
            <p key={index} className="mb-6">
              {line}
            </p>
          ))}
        </div>

      </div>
    </div>
  )
}
