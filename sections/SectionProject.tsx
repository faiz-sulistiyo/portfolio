"use client"
import { Project } from '@/views/Home';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';

type SectionProjectProps = {
    data: Project[];
}
const SectionProject: React.FC<SectionProjectProps> = ({ data }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const containerHeight = useMemo(() => !isOpen ? 320 + 160 : "fit-content", [isOpen]);

    return (
        <div className='flex flex-col gap-20'>
            <div className="m-scroll h-[300px] max-lg:h-[160px]">
                <div className="m-scroll__title text-7xl max-lg:text-5xl font-bold">
                    <div>
                        <div id='featured-work' className='flex gap-6 mx-3 items-center'>
                            Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' /> Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' /> Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' />
                        </div>
                        <div id='featured-work' className='flex gap-6 mx-3 items-center'>
                            Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' /> Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' /> Featured Work <div className='h-3 w-3 bg-black rounded-full flex-shrink-0' />
                        </div>
                    </div>
                </div>
            </div>
            <div className={`relative w-[80%] overflow-hidden mx-auto grid max-lg:grid-cols-1 grid-cols-3 gap-4`} style={{
                height: containerHeight,
                transition: "height 0.15s ease-out"
            }}>
                {data.map((item) => {
                    return <Link
                        target='_blank'
                        href={item.redirect_link ?? ""}
                        key={item.id}
                        className={`${!item.redirect_link && "pointer-events-none cursor-default"} h-80 border-2 rounded-lg hover:bg-slate-100 bg-slate-300 transition-all`}>
                        <h1>{item.name}</h1>
                        <p>{item.description}</p>
                    </Link>
                })}
                {!isOpen && (
                    <div className='h-full w-full z-20 absolute bottom-0 bg-gradient-to-t from-white flex justify-center items-end p-6'>
                        <button onClick={() => setIsOpen(true)} className='bg-white border-2 rounded-full px-4 py-2'>Read More</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SectionProject;
