'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import BlurText from './BlurText'

const Sidebar = ({ dictionary }: { dictionary: any }) => {
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

  const navItems = [
    { text: dictionary.sidebar[0], link: '../biblio' },
    { text: dictionary.sidebar[1], link: '../works' },
    { text: dictionary.sidebar[2], link: '../cv' },
    { text: dictionary.sidebar[3], link: '../contact' },
  ]

  return (
    <div
      className={
        isBiography
          ? `fixed left-6 top-[265px] z-50 flex flex-row gap-8 text-xl
             transition-all duration-500 sm:left-20
             ${
               showControls
                 ? 'opacity-100 blur-0 pointer-events-auto'
                 : 'opacity-0 blur-[3px] pointer-events-none'
             }`
          : 'h-full flex sm:flex-col text-xl bg-white sm:-mt-4 justify-between sm:justify-start'
      }
    >
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

export default Sidebar
