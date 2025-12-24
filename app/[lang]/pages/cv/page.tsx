import React from 'react'
import { getDictionary } from "@root/get-dictionary";
import { Locale } from "@root/i18n-config";


export default async function CV(props: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await props.params;
  const dictionary = await getDictionary(lang);

  return (
    <div className="items-center text-justify">
        <div className="text-pretty text-lg font-abel"> 
          {Object.entries(dictionary.cv).map(([title, years]) => (

            <div key={title} className='mb-10'>
              <h2 className='text-4xl mb-5'>{title}</h2>

              {Object.entries(years).map(([year, list]) => (
                <div key={`${title}-${year}`} className='mb-5'>
                  {(year !== "") && <h3 className='text-3xl'>{year}</h3>}

                  <div className='mb-5 grid grid-cols-[auto,1fr] gap-x-4' >
                    {Object.entries(list).map(([dates, line]) => (
                      <React.Fragment key={`${title}-${year}-${dates}`}>
                      <p className='col-start-1'>{dates}<br/></p>
                      <p>{line as React.ReactNode}<br/></p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
              </div>
          ))}
        </div>
    </div>
  );
}


// const page = ({params}) => {

//   let cv;
//   switch (info.lang) {
//     case 'en': cv = info.cv_en; break;
//     case 'fr': cv = info.cv_fr; break;
//     case 'cn': cv = info.cv_cn; break;
//     default: cv = info.cv_en; break;
//   }

//   console.log(params.lang);
    
  
// }

// export default page