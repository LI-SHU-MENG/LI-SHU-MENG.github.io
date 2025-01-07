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

  // console.log(GlobalConfig.lang);
    
  return (
    <div className="items-center text-justify">
        <div className="p-5 text-pretty text-lg font-abel"> 
          {Object.entries(cv).map(([title, years]) => (

            <div className='mb-10'>
              <h2 className='text-4xl mb-5'>{title}</h2>

              {Object.entries(years).map(([year, list]) => (
                <div className='mb-5'>
                {(year !== "") && <h3 className='text-3xl'>{year}</h3>}

                <grid className='mb-5 grid grid-cols-[auto,1fr] gap-x-4' >
                  {Object.entries(list).map(([dates, line]) => (
                    <>
                    <p className='col-start-1'>{dates}<br/></p>
                    <p>{line}<br/></p>
                    </>
                  ))}
                </grid>
                </div>
              ))}
              </div>
          ))}
        </div>
    </div>
  )
}

export default page