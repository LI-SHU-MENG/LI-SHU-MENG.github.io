'use client'

import React, { ReactNode, useEffect, useState } from 'react'

export default function ScrollFade({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 80)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`transition-all duration-500 ${
        visible
          ? 'opacity-100 blur-0 pointer-events-auto'
          : 'opacity-0 blur-[3px] pointer-events-none'
      }`}
    >
      {children}
    </div>
  )
}
