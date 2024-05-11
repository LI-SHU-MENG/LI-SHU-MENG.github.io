'use client';
import Logo from '@components/Logo.jsx';
import { useState } from 'react';

export default function Home() {
        //useState
        const [hovering, setHovering] = useState(false);

    return (
        <div className="w-full h-screen bg-linen flex items-center justify-center ">
            <div className="w-20vw h-20vw text-3vw">
                <Logo />
            </div>
        </div>
    );
}
    