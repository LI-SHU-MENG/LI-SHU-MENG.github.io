import BlurText from '@components/BlurText'
import Link from '@node_modules/next/link'
import React from 'react'

const page = () => {
    
  return (
    // <div className="items-center w-full h-full">
    //     <div className="text-center content-center w-full text-lg h-full">
    //         <a className='hover:text-pink-500'
    //          href="https://www.instagram.com/jesuiswanaisa/">Instagram</a><br/>
    //         <a className='hover:text-orange-500'
    //         href='https://on.soundcloud.com/JEo7zNENYFVKDtnloX' >Soundcloud</a><br/>

    //     </div>
    // </div>

    <div className="text-6xl flex flex-col content-center items-center h-full">
      <Link href='https://www.instagram.com/jesuiswanaisa/'>
        <h1 className='pl-20 sm:pl-50 blur-xs sm:blur-sm text-pink-500 floating p-4 w-auto transition-all hover:animate-none hover:blur-none'>
          Instagram
        </h1>
      </Link>
      <Link href='https://on.soundcloud.com/JEo7zNENYFVKDtnloX'>
        <h1 className='pr-20 sm:pr-50 blur-xs sm:blur-sm text-orange-500 floating p-4 w-auto transition-all hover:animate-none hover:blur-none'>
          Soundcloud
        </h1>
      </Link>
    </div> 
  )
}

export default page