import React from 'react'
import BlurText from './BlurText'
import { getDictionary } from "@root/get-dictionary";


export default async function Sidebar({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) {
    const navItems = [
        { text: dictionary.sidebar[0], link: "../biblio" },
        { text: dictionary.sidebar[1], link: "../works" },
        { text: dictionary.sidebar[2], link: "../cv" },
        { text: dictionary.sidebar[3], link: "../contact" }
    ]

    return (
        <div className="h-full flex sm:flex-col text-xl bg-white sm:-mt-4 justify-between sm:justify-start">
            {navItems.map((item, index) => (
            <BlurText
                key={item.link}
                text={dictionary.sidebar[index]}
                link={item.link}
                float={false}
                blur={true}
            />
            ))}
        </div>
    )
}
