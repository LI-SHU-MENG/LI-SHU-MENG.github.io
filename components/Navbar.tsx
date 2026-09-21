'use client'

import React, { useEffect, useRef, useState } from 'react'
import Logo from '@components/Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '../i18n-config'

const Navbar = ({ dictionary }: { dictionary: any }) => {
  const pathname = usePathname()
  const [showHeader, setShowHeader] = useState(true)
  const lastScrollY = useRef(0)

  const lang = pathname?.split('/')[1] || 'fr'

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setShowHeader(true)
      } else if (currentScrollY > lastScrollY.current) {
        setShowHeader(false)
      } else if (currentScrollY < lastScrollY.current) {
        setShowHeader(true)
      }

      lastScrollY.current = currentScrollY
    }

    lastScrollY.current = window.scrollY
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/'

    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  const navItems = [
    { text: dictionary.sidebar[0], link: `/${lang}/pages/biblio` },
    { text: dictionary.sidebar[1], link: `/${lang}/pages/works` },
    { text: dictionary.sidebar[2], link: `/${lang}/pages/composition` },
    { text: dictionary.sidebar[3], link: `/${lang}/pages/cv` },
    { text: dictionary.sidebar[4], link: `/${lang}/pages/media` },
    { text: dictionary.sidebar[5], link: `/${lang}/pages/contact` },
  ]

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full bg-white transition-all duration-500 ${
        showHeader
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="mx-auto flex h-[184px] w-full flex-col bg-white px-3 sm:px-6 md:px-10">
        <div className="flex h-[126px] shrink-0 items-center justify-center overflow-hidden">
          <Logo />
        </div>

        <div className="flex h-[58px] min-w-0 items-center justify-between gap-3 pb-3 text-[10px] sm:gap-6 sm:text-[12px] md:text-[13px]">
          <nav
            className="flex min-w-0 items-baseline gap-3 overflow-x-auto whitespace-nowrap sm:gap-4 md:gap-6"
            aria-label="Global"
          >
            {navItems.map((item) => {
              const normalizedPath = pathname?.replace(/\/$/, '')
              const normalizedLink = item.link.replace(/\/$/, '')
              const active =
                normalizedPath === normalizedLink ||
                (normalizedLink.endsWith('/pages/works') &&
                  normalizedPath?.startsWith(`${normalizedLink}/`))

              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={`shrink-0 transition-all duration-300 ${
                    active ? 'blur-0' : 'blur-[2.4px] hover:blur-0'
                  }`}
                >
                  {item.text}
                </Link>
              )
            })}
          </nav>

          <div className="flex shrink-0 items-baseline gap-2 whitespace-nowrap sm:gap-3">
            {i18n.locales.map((locale) => (
              <Link
                key={locale}
                href={redirectedPathname(locale)}
                className={`transition-all duration-300 ${
                  pathname.startsWith(`/${locale}`)
                    ? 'blur-0'
                    : 'blur-[1.5px] hover:blur-0'
                }`}
              >
                {locale === 'cn' ? '中' : locale.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
