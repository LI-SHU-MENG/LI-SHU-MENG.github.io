// 'use client';
import Logo from '@components/Logo';

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
    