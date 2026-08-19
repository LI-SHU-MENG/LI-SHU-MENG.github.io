'use client'

import { ReactNode, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollFade({
  children,
}: {
  children: ReactNode
}) {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)

  const parts = pathname?.split('/').filter(Boolean) ?? []
  const worksIndex = parts.indexOf('works')
  const isWorkDetail =
    worksIndex !== -1 && Boolean(parts[worksIndex + 1])

  useEffect(() => {
    if (!isWorkDetail) {
      setVisible(true)
      return
    }

    const handleScroll = () => {
      setVisible(window.scrollY < 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isWorkDetail])

  return (
    <div
      className={`transition-all duration-500 ${
        isWorkDetail
          ? visible
            ? 'opacity-100 blur-0 pointer-events-auto'
            : 'opacity-0 blur-[3px] pointer-events-none'
          : 'opacity-100 blur-0 pointer-events-auto'
      }`}
    >
      {children}
    </div>
  )
}
