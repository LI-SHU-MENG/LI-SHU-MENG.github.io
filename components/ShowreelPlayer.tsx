'use client'

import { useRef, useState } from 'react'

const VIDEO_ID = 'VxiBDd_XE94'

export default function ShowreelPlayer() {
  const [playing, setPlaying] = useState(false)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  const sendPlayerCommand = (func: string, args: unknown[] = []) => {
    iframeRef.current?.contentWindow?.postMessage(
      JSON.stringify({ event: 'command', func, args }),
      '*'
    )
  }

  const playWithSound = () => {
    setPlaying(true)
    sendPlayerCommand('unMute')
    sendPlayerCommand('setVolume', [100])
    sendPlayerCommand('playVideo')
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-black">
      <iframe
        ref={iframeRef}
        src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=0&mute=0&playsinline=1&rel=0&modestbranding=1&controls=1`}
        title="Shumeng Li — Composition and Sound Design Showreel 2026"
        className={`absolute inset-0 h-full w-full ${playing ? '' : 'pointer-events-none'}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />

      {!playing && (
        <button
          type="button"
          onClick={playWithSound}
          className="group absolute inset-0 z-10 block h-full w-full overflow-hidden text-white"
          aria-label="Play showreel with sound"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt="Shumeng Li showreel YouTube preview"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
          />
          <span className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
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
