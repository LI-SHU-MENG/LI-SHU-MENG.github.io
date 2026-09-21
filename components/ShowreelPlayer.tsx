'use client'

import { useState } from 'react'

const VIDEO_ID = 'VxiBDd_XE94'

export default function ShowreelPlayer() {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="aspect-video w-full overflow-hidden bg-black">
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=0&playsinline=1&rel=0&modestbranding=1`}
          title="Shumeng Li — Composition and Sound Design Showreel 2026"
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block h-full w-full overflow-hidden text-white"
          aria-label="Play showreel with sound"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)] transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-5">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/80 bg-black/10 backdrop-blur-[2px] transition-transform duration-300 group-hover:scale-105 md:h-20 md:w-20">
              <span className="ml-1 block h-0 w-0 border-y-[8px] border-l-[13px] border-y-transparent border-l-white md:border-y-[10px] md:border-l-[16px]" />
            </span>
            <span className="text-[11px] tracking-[0.18em] md:text-[12px]">
              PLAY — SOUND ON
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
