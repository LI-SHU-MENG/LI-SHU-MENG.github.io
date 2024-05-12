'use client';
import Logo from '@components/Logo.jsx';
import { useState } from 'react';
import '@styles/home.css';
import BlurText from '@components/BlurText';

export default function Home() {
        //useState
        const [hovering, setHovering] = useState(false);

    return (
        <div className="h-full flex items-center justify-center flex-auto bg-white">
            <div className="flex items-center justify-center p-8 lg:px-8">
                <div className="text-6xl w-70vw lg:blur_grid">
                    <BlurText text="Bibliography" link="/biblio"/>
                    <BlurText text="Works" link="/works"/>
                    <BlurText text="CV" link="/cv"/>
                    <BlurText text="Contact" link="/contact"/>
                </div> 
            </div>
        </div>
    );
}
    