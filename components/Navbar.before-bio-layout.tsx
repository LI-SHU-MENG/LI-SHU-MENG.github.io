'use client'
import React, { useEffect, useState } from 'react'
import Logo from '@components/Logo';
import { usePathname } from "next/navigation";
import Link from 'next/link'
import { i18n, type Locale } from "../i18n-config";

// import Example from './Example'

const Navbar = () => {
  const pathname = usePathname();
  const isBiography = pathname?.includes('/pages/biblio');
  const [showControls, setShowControls] = useState(!isBiography);

  useEffect(() => {
    if (!isBiography) {
      setShowControls(true);
      return;
    }

    const handleScroll = () => {
      setShowControls(window.scrollY < 80);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBiography]);

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <header className="fixed left-0 top-0 z-40 w-full bg-white"> 
      <nav className="mx-auto flex w-screen flex-col items-center py-6 px-6 sm:px-20 sm:py-15" aria-label="Global">
        <div className="fixed left-1/2 top-6 z-50 -translate-x-1/2 text-sm">
          <Logo/>
        </div>

        <div className="my-6 w-full border-t border-black/20"></div> 

          <div className={`absolute right-6 top-[265px] flex flex-row gap-4 sm:right-20
          transition-all duration-500
          ${showControls
            ? 'opacity-100 blur-0 pointer-events-auto'
            : 'opacity-0 blur-[3px] pointer-events-none'
          }`}>
            {i18n.locales.map((locale) => {
              return (
                <div key={locale}>
                  <Link
  href={redirectedPathname(locale)}
  className={`transition-all duration-300 ${
    pathname.startsWith(`/${locale}`)
      ? 'blur-0'
      : 'blur-[1.5px] hover:blur-0'
  }`}
>
  {locale === 'cn' ? '中' : locale.toUpperCase()}
</Link>
                </div>
              );
            })}
          </div>

    </nav>
    </header>
  )
}

export default Navbar