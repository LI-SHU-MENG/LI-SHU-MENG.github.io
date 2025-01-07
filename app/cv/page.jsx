import React from 'react'
import info from '../info.js';

const page = () => {

  let cv;
  switch (info.lang) {
    case 'en': cv = info.cv_en; break;
    case 'fr': cv = info.cv_fr; break;
    case 'cn': cv = info.cv_cn; break;
    default: cv = info.cv_en; break;
  }
    
  return (
    <div className="items-center text-justify">
        <div className="p-5 text-pretty text-lg font-abel"> 
          {Object.entries(cv).map(([key, value]) => (

            <div className='mb-10'>
              <h2 className='text-4xl mb-5'>{key}</h2>

              {(Array.isArray(value))&&(
                value.map((line, index) => (
                  <p key={index}>{line} <br/></p>
                ))
              )}

              {(!Array.isArray(value))&&(
                Object.entries(value).map(([key2, value2]) => (
                  
                  <div className='mb-5'>
                    <h3 className='text-3xl'>{key2}</h3>
                    {value2.map((line, index) => (
                      <p key={index}>{line} <br/></p>
                    ))}
                  </div>
                  
                ))
              )}
            
            </div>

          ))}
          
        </div>
    </div>
  )
}

export default page