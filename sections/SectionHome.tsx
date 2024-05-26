import CircularText from '@/components/CircularText';
import { Socmed } from '@/views/Home';
import Link from 'next/link';
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

type SectionHomeProps = {
    socmed: Socmed
}

const SectionHome:React.FC<SectionHomeProps> = ({socmed}) => {
    return (
        <div id='#' className='flex pt-16 flex-col gap-20 items-center justify-center'>
            <div className='w-[80%] flex flex-col justify-center items-start relative'>
                <span className='text-xl max-lg:text-l text-spanish-gray'>Hello People!</span>
                <h1 className='max-lg:text-6xl leading-tight text-9xl font-bold'>I'm Faiz,<br /> A Software Engineer.</h1>
                <div className='absolute top-14 right-20 max-lg:hidden rounded-full'>
                    <CircularText/>
                </div>
            </div>

            <div className='flex gap-5 items-center'>
                <Link href={socmed.github??""} aria-label='faiz-github' target='_blank' className='p-4 rounded-full border-2'>
                    <FaGithub size={24}/>
                </Link>
                <Link href={socmed.linkedin??""} aria-label='faiz-linkedin' target='_blank' className='p-4 rounded-full border-2'>
                    <FaLinkedin size={24}/>
                </Link>
                <Link href={socmed.instagram??""} aria-label='faiz-instagram' target='_blank' className='p-4 rounded-full border-2'>
                    <FaInstagram size={24}/>
                </Link>
            </div>
        </div>
    )
}

export default SectionHome