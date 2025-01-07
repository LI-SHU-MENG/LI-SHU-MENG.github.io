'use client'
import React from 'react'
import Logo from '@components/Logo.jsx';
import info from '@app/info';

// import Example from './Example'

const Navbar = () => {

    function changeLanguage(lang){
        // GlobalConfig.lang = lang;
        // info.lang = lang;
        //refresh
        // window.location.reload();
        //repaint
        // window.location.href = window
    }

  return (
    <header className=" flex "> 
          <nav className="mx-auto h-64 flex w-screen items-center justify-between py-6 px-20" aria-label="Global">

            <div className="h-24 w-24 text-sm"><Logo/></div> 

            <div className="flex flex-nowrap gap-4"> 
                <button onClick={()=>changeLanguage("en")}>EN</button>
                <button onClick={()=>changeLanguage("fr")}>FR</button> 
                <button onClick={()=>changeLanguage("cn")}>CN</button>
        </div> 

        </nav>
    </header>
  )
}

export default Navbar