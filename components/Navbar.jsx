'use client'
import React from 'react'
import Logo from '@components/Logo.jsx';

// import Example from './Example'

const Navbar = () => {

    function changeLanguage(lang){
        console.log(lang)
    }

  return (
    <header className=" flex "> 
          <nav className="mx-auto h-64 flex w-screen items-center justify-between py-6 px-20 bg-white" aria-label="Global">

            <div className="h-24 w-24 text-sm"><Logo/></div> 

            <div className="flex flex-nowrap gap-4"> 
                <a onClick={()=>changeLanguage("en")}>EN</a>
                <a onClick={()=>changeLanguage("fr")}>FR</a> 
                <a onClick={()=>changeLanguage("cn")}>CN</a>
        </div> 

        </nav>
    </header>
  )
}

export default Navbar