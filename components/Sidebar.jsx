import React from 'react'
import BlurText from './BlurText'

const Sidebar = () => {
    
  return (
    <div className=" w-40 h-full flex items-center justify-center flex-auto bg-white">
        <div className="flex text-4xl justify-between items-center p-6 lg:px-8">
            <BlurText text="Bibliography" link="/biblio"/>
            <BlurText text="Works" link="/works"/>
            <BlurText text="CV" link="/cv"/>
            <BlurText text="Contact" link="/contact"/>
        </div> 
    </div>
  )
}

export default Sidebar