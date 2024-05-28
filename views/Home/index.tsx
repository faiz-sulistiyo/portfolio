import { Spinner } from '@/components'
import { SectionAbout, SectionHome, SectionProject } from '@/sections'
import { Tables } from '@/types/supabase'
import React from 'react'

export type Project = Tables<"projects"> & {
    project_images: Tables<"project_images">[]
}
export type About = Tables<"about">
export type Socmed = {
    instagram: string | null
    github: string | null
    linkedin: string | null
}

type HomeViewProps = {
    projects: Project[]
    about: About;
};

const HomeView: React.FC<HomeViewProps> = ({ projects, about }) => {
    const socmed: Socmed = {
        github: about.github,
        instagram: about.instagram,
        linkedin: about.linkedin
    }

    return (
        <div className='flex flex-col gap-20'>
            <SectionHome socmed={socmed} />
            <SectionAbout data={about} />
            <SectionProject data={projects} />
        </div>
    )
}

export default HomeView