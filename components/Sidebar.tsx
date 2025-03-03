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
        <div className="h-full flex flex-col text-xl bg-white">
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
