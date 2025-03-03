// 'use client';
import Logo from '@components/Logo';
import { i18n } from '@root/i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}

export default async function Home()
{
    //go to /welcome 
    // redirect('/welcome')

    return (
        <div className="w-full h-screen bg-linen flex items-center justify-center">
            <div className="w-20vw h-20vw text-3vw">
                <Logo />
            </div>
        </div>
    );
}
    