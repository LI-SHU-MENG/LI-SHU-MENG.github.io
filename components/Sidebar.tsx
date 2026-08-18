'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Sidebar = ({ dictionary }: { dictionary: any }) => {
  const pathname = usePathname()
  const isBiography = pathname?.includes('/pages/biblio')
  const [showControls, setShowControls] = useState(true)

  const lang = pathname?.split('/')[1] || 'fr'

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

  const navItems = [
    { text: dictionary.sidebar[0], link: `/${lang}/pages/biblio` },
    { text: dictionary.sidebar[1], link: `/${lang}/pages/works` },
    { text: dictionary.sidebar[2], link: `/${lang}/pages/cv` },
    { text: dictionary.sidebar[3], link: `/${lang}/pages/contact` },
  ]

  return (
    <div
      className={`fixed left-12 top-[110px] z-50 flex -translate-y-1/2 flex-row items-center gap-6 whitespace-nowrap text-xl
        transition-all duration-500
        ${
          showControls
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 blur-[3px] pointer-events-none'
        }`}
    >
      {navItems.map((item) => {
        const active =
          pathname?.replace(/\/$/, '') === item.link.replace(/\/$/, '')

        return (
          <Link
            key={item.link}
            href={item.link}
            className={`transition-all duration-300 ${
              active
                ? 'blur-0'
                : 'blur-[3.6px] hover:blur-0'
            }`}
          >
            {item.text}
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
