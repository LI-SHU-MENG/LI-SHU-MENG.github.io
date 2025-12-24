import React from 'react'
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";


export default async function Biblio(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="bg-white items-center">
        <div className="text-justify text-lg">

          {dictionary.biography.split('\n').map((line, index) => (
            <p key={index}>{line} <br/><br/></p>
          ))}

        </div>
    </div>
  )
}