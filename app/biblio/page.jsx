import React from 'react'
import info from '../info.js';

const page = () => {

  return (
    <div className="bg-white items-center">
        <div className="p-5 text-justify text-lg">

          {info.biography_en.split('\n').map((line, index) => (
            <p key={index}>{line} <br/></p>
          ))}

        </div>
    </div>
  )
}

export default page