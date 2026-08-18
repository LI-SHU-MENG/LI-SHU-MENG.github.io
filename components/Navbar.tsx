'use client'

import React, { useEffect, useState } from 'react'
import Logo from '@components/Logo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { i18n, type Locale } from '../i18n-config'

const Navbar = () => {
  const pathname = usePathname()
  const isBiography = pathname?.includes('/pages/biblio')
  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    if (!isBiography) {
      setShowControls(true)
      return
    }

    const handleScroll = () => {
      setShowControls(window.scrollY < 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isBiography])

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return '/'

    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <header
      className={`fixed left-0 top-0 z-40 w-full bg-white transition-all duration-500 ${
        isBiography
          ? showControls
            ? 'opacity-100 blur-0 pointer-events-auto'
            : 'opacity-0 blur-[3px] pointer-events-none'
          : 'opacity-100 blur-0 pointer-events-auto'
      }`}
    >
      <nav
        className="relative mx-auto flex h-[220px] w-full items-center justify-center bg-white"
        aria-label="Global"
      >
        {/* Logo 始终居中并保持显示 */}
        <div className="z-50 text-sm">
          <Logo />
        </div>

        {/* Biography 页面：语言栏在 Logo 右边 */}
        {isBiography && (
          <div
            className={`absolute right-12 top-1/2 z-50 flex -translate-y-1/2 flex-row gap-3
              transition-all duration-500
              ${
                showControls
                  ? 'opacity-100 blur-0 pointer-events-auto'
                  : 'opacity-0 blur-[3px] pointer-events-none'
              }`}
          >
            {i18n.locales.map((locale) => (
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
            ))}
          </div>
        )}

        {/* 其他页面的语言栏 */}
        {!isBiography && (
          <div className="absolute right-6 top-1/2 z-50 flex -translate-y-1/2 flex-row gap-4 sm:right-20">
            {i18n.locales.map((locale) => (
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
            ))}
          </div>
        )}
      </nav>

      {/* 横线永远在 Logo 区域下方 */}
      
    </header>
  )
}

export default Navbar
