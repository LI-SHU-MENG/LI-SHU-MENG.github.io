'use client'
import React from 'react'
import Logo from '@components/Logo';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { i18n, type Locale } from "../i18n-config";

// import Example from './Example'

const Navbar = () => {
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <header className=" flex "> 
      <nav className="mx-auto h-64 flex w-screen items-center justify-between py-6 px-20" aria-label="Global">
        <div className="h-24 w-24 text-sm"><Logo/></div> 

          <div className='flex flex-row gap-4'>
            {/* {i18n.locales.map((locale) => {
              return (
                <div key={locale}>
                  <Link href={redirectedPathname(locale)}>{locale.toUpperCase()}</Link>
                </div>
              );
            })} */}
          </div>

    </nav>
    </header>
  )
}

export default Navbar