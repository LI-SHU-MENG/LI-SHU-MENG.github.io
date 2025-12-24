import React from 'react'
import Image from 'next/image'

const page = () => {
    
  return (
    <div className="items-center w-full">
        <div className="p-5 text-justify text-lg w-full">
            <div className="flex flex-col gap-4 w-full">
              <Image src="/fr/work1.pdf"
                alt="Work1"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />

              <Image src="/fr/work2.pdf"
                alt="Work2"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />

              <Image src="/fr/work3.pdf"
                alt="Work3"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />

              <Image src="/fr/work4.pdf"
                alt="Work4"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />

              <Image src="/fr/work5.pdf"
                alt="Work5"
                width={1200}
                height={600}
                className="w-full h-auto rounded"
              />
              
    

              
            </div>
        </div>
    </div>
  )
}

export default page