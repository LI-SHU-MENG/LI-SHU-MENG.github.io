'use client';
import { useState } from "react";
import '@styles/logo.css';
import Link from 'next/link';

const Logo = () => {

    const LI = <><h1>L</h1><h1>I</h1></>;
    const SHU = <><h1>S</h1><h1>H</h1><h1>U</h1></>;
    const MENG = <><h1>M</h1><h1>E</h1><h1>N</h1><h1>G</h1></>;

    const WA = <><h1>W</h1><h1>A</h1></>;
    const NAI = <><h1>N</h1><h1>A</h1><h1>I</h1></>;
    const SA = <><h1>S</h1><h1>A</h1></>;

    //usestate
    const [hovering, setHovering] = useState(false);

    return (
            <Link 
                type="button" href="/en/home"
                onMouseOver={()=>{setHovering(true)}}
                onMouseLeave={()=>{setHovering(false)}}>
                    <div id="title-box" className="w-full h-full cursor-pointer flex justify-between">
                    <div className="text-center flex flex-nowrap justify-between">
                        {hovering ? WA : LI}
                    </div><div className="text-center flex flex-nowrap justify-between">
                        {hovering ? NAI : SHU}
                    </div><div className="text-center flex flex-nowrap justify-between">
                        {hovering ? SA : MENG}
                    </div>
                    </div>
            </Link>
    )
}

export default Logo