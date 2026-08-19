import Link from '@node_modules/next/link'
import React from 'react'

const page = () => {
  return (
    <div className="text-6xl flex min-h-[75vh] mt-32 flex-col items-center justify-center">
      <Link href="https://www.instagram.com/jesuiswanaisa/">
        <h1 className="pl-20 sm:pl-50 blur-xs sm:blur-sm text-[#0F02E6] floating p-4 w-auto transition-all hover:animate-none hover:blur-none">
          Instagram
        </h1>
      </Link>

      <Link href="https://on.soundcloud.com/JEo7zNENYFVKDtnloX">
        <h1 className="pr-20 sm:pr-50 blur-xs sm:blur-sm text-[#0F02E6] floating p-4 w-auto transition-all hover:animate-none hover:blur-none">
          Soundcloud
        </h1>
      </Link>

      <a href="mailto:shumengli.studio@gmail.com">
        <h1 className="ml-24 blur-xs sm:blur-sm text-[#0F02E6] floating p-4 w-auto transition-all hover:animate-none hover:blur-none">
          Email
        </h1>
      </a>
    </div>
  )
}

export default page
