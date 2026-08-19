import React from 'react'

const Footer = () => {
  return (
    <footer className="mt-24 w-full bg-white py-6 text-center text-[11px] font-light leading-[1.25] text-[#0F02E6]">
      <div>© 2026 LI Shumeng</div>
      <div>Design: Shumeng</div>
      <div>
        Development:{' '}
        <a
          href="https://mrvny.github.io/#/home"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-200 hover:opacity-50 hover:underline"
        >
          Qingyuan ↗
        </a>
      </div>
    </footer>
  )
}

export default Footer
