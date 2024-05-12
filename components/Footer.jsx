import React from 'react'

const Footer = () => {
  return (
    <header className="flex "> 
          <nav className="mx-auto h-64 flex w-screen items-center justify-between p-6 lg:px-8 bg-white" aria-label="Global">

            <div className="h-24 w-24 text-sm"></div> 

            <div className="gap-4"> 
                <div>©2024 LI Shumeng</div>
                <div>Design: LI Shumeng</div>
                <div>Development: <a className=" animate-pulse text-blue-600 hover:text-blue-400" href="https://qingyuan.games/">
                    YAO Qingyuan
                    </a></div>
        </div> 

        </nav>
    </header>
  )
}

export default Footer