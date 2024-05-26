"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useState } from 'react'
import logo from '@/assets/logo-dark.png';
import { MdDownload } from 'react-icons/md';

type HeaderProp = {
    className?: string
    resume:string | null
}

const Header: React.FC<HeaderProp> = ({ className, resume }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const isScrolled = useMemo(() => scrollPosition > 20, [scrollPosition])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div className={`${isScrolled ? "top-0 py-4 px-8" : "top-0 p-0"} transition-all w-full sticky overflow-hidden z-50`}>
            <div className={`${isScrolled && "bg-opacity-60 rounded-2xl border backdrop-blur-lg"} bg-white max-lg:px-4 px-10 py-5 flex justify-between items-center`}>
                <div className='flex items-center gap-4 max-lg:gap-1'>
                    <div className="relative w-8 h-8 lg:w-8 lg:h-8">
                        <Image alt='faiz sulistiyo' src={logo} layout="fill" objectFit="contain" />
                    </div>
                    <div className={`flex flex-col text-xs text-spanish-gray font-medium`}>
                        <span>Faiz&apos;s</span>
                        <span>Portfolio</span>
                    </div>
                </div>
                <div className='flex text-gray-950 font-medium gap-6 items-center text-sm max-lg:hidden'>
                    <Link href="/" >Home</Link>
                    <Link href="#about" >About</Link>
                    <Link href="#project" >Projects</Link>
                    <Link href={resume??""} aria-label='faiz-resume' target='_blank' className='flex items-center gap-1'>Dowload Resume <MdDownload /></Link>
                </div>
                <div className='lg:hidden flex flex-col w-6 gap-1.5 relative cursor-pointer' onClick={toggleMenu}>
                    <span className={`block w-full h-0.5 bg-gray-900 rounded origin-center transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${menuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-gray-900 rounded transition-opacity duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${menuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-full h-0.5 bg-gray-900 rounded origin-center transition-transform duration-500 ease-[cubic-bezier(0.77,0.2,0.05,1.0)] ${menuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header