import React from 'react'

const Footer = () => {
  return (
    <header className="flex "> 
          <nav className="mx-auto h-64 flex w-screen items-center justify-end p-6 lg:px-8 bg-white" aria-label="Global">


            <div className="gap-4 text-xs self-end text-end"> 
                <div>©2024 LI Shumeng</div>
                <div>Design: LI Shumeng</div>
                <div>Development:
                  <a className="animate-pulse text-blue-600 hover:text-blue-400 ml-1" href="https://mrvny.github.io/#/home">
                    Qingyuan
                  </a>
                </div>
        </div> 

        </nav>
    </header>
  )
}

export default Footer