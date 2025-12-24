'use client'
import React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'

const BlurText = ({text, link, float, blur}) => {

    const pathname = usePathname()
    blur = !pathname.includes(link.replace("../", ""))

    return (
        <Link href={link}>
            <h1 className={`${blur ? 'blur-xs sm:blur-sm' : ''} ${float ? 'floating p-4' : 'py-4 sm:pl-20 sm:pr-4 sm:-mr-4'}
                w-auto transition-all hover:animate-none hover:blur-none`}>
                {text}
            </h1>
        </Link>
    )
}

export default BlurText