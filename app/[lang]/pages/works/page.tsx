import React from 'react'
import Image from 'next/image'
import Link from '@node_modules/next/link'

const page = () => {
    
  return (
    <div className="items-center w-full">
      <div className=" text-justify text-lg w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 w-full">

          <div>
            <Link href="https://youtu.be/kCOUMsLqvIQ">
              <Image src="/fr/work1.pdf" alt="(...et Souffle)" width={1200} height={600} className="w-full p-4 h-auto rounded hover:blur-sm"/>
            </Link>
            <h1 className="text-center w-full">(...et Souffle)</h1>
          </div>

          <div>
            {/* <Link href="https://youtu.be/ABazdRpFsQQ"> */}
              <Image src="/fr/work2.pdf" alt="Hôtomate" width={1200} height={600} className="w-full p-4 h-auto rounded"/>
            {/* </Link> */}
            <h1 className="text-center w-full">Hôtomate</h1>
          </div>

          <div>
            <Link href="https://youtu.be/qb7YbpMBNBo">
              <Image src="/fr/work3.pdf" alt="Ma Négritude" width={1200} height={600} className="w-full p-4 h-auto rounded hover:blur-sm"/>
            </Link>
            <h1 className="text-center w-full">Ma Négritude</h1>
          </div>

          <div>
            <Link href="https://youtu.be/UTodi1BLsEY">
              <Image src="/fr/work4.pdf" alt="La Polyphonie du Temps" width={1200} height={600} className="w-full p-4 h-auto rounded hover:blur-sm"/>
            </Link>
            <h1 className="text-center w-full">La Polyphonie du Temps</h1>
          </div>

          <div>
            <Link href="https://youtu.be/ABazdRpFsQQ">
              <Image src="/fr/work5.pdf" alt="Dans les creux des langues" width={1200} height={600} className="w-full p-4 h-auto rounded hover:blur-sm"/>
            </Link>
            <h1 className="text-center w-full">Dans les creux des langues</h1>
          </div>
          

              
            </div>
        </div>
    </div>
  )
}

export default page