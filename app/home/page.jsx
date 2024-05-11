'use client';
import Logo from '@components/Logo.jsx';
import { useState } from 'react';

export default function Home() {
        //useState
        const [hovering, setHovering] = useState(false);

    return (
        <div className=" h-screen flex items-center justify-center">
            <div className="flex items-center justify-center p-6 lg:px-8">
                <div className="flex flex-nowrap gap-20 text-4xl">
                    <h1 className="blur-sm hover:blur-0 p-2">Bibliography</h1>
                    <h1 className="blur-sm hover:blur-0 p-2">Works</h1>
                    <h1 className="blur-sm hover:blur-0 p-2">CV</h1>
                    <h1 className="blur-sm hover:blur-0 p-2">Contact</h1>
                </div> 
            </div>
        </div>
    );
}
    