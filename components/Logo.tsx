'use client';
import { useState } from "react";
import '@styles/logo.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Logo = ({ variant = 'landing' }: { variant?: 'landing' | 'header' }) => {
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'fr';

    const LI = <><h1>L</h1><h1>I</h1></>;
    const SHU = <><h1>S</h1><h1>H</h1><h1>U</h1></>;
    const MENG = <><h1>M</h1><h1>E</h1><h1>N</h1><h1>G</h1></>;

    const WA = <><h1>W</h1><h1>A</h1></>;
    const NAI = <><h1>N</h1><h1>A</h1><h1>I</h1></>;
    const SA = <><h1>S</h1><h1>A</h1></>;

    const [hovering, setHovering] = useState(false);

    const isLanding = variant === 'landing';
    const titleClass = isLanding
        ? 'h-25 cursor-pointer flex justify-between'
        : 'flex h-[108px] w-[108px] cursor-pointer flex-col justify-between text-[14px] sm:text-[15px]';

    const rowClass = isLanding
        ? 'w-25 text-center flex flex-nowrap justify-between'
        : 'flex w-full flex-nowrap justify-between text-center';

    return (
        <Link
            type="button"
            href={`/${lang}/home`}
            onMouseOver={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className="inline-block"
        >
            <div id="title-box" className={titleClass}>
                <div className={rowClass}>{hovering ? WA : LI}</div>
                <div className={rowClass}>{hovering ? NAI : SHU}</div>
                <div className={rowClass}>{hovering ? SA : MENG}</div>
            </div>
        </Link>
    )
}

export default Logo
