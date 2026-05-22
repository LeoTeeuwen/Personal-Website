import { m } from 'framer-motion';
import Link from "next/link";

type Projects = {
    name: string,
    description: string,
    date: string,
    tags: string[],
    page?: string,
    github?: string,
}

const otherProjects: Projects[] = [
    {
        name: "Basic Website",
        description: "A fan creation of a Weyland Yutani Website from the \"Alien\" series",
        date: "October 2024",
        tags: ["JavaScript", "HTML/CSS"],
        page: undefined,
        github: 'https://github.com/LeoTeeuwen/basic-website',
    },
    {
        name: "Photon Laser Tag",
        description: "Website with integrated socket management to manage a Laser Tag game with real physical hardware.",
        date: "August 2025 - December 2025",
        tags: ["NextJS", "Socket Programming", "Python", "PostgreSQL"],
        page: undefined,
        github: 'https://github.com/LeoTeeuwen/Photon-SE',
    },
    {
        name: "Basic Unity Game",
        description: "An experiment to do some basic work on game dev, I am working to see if I can create a basic combat system.",
        date: "January 2026 - May 2026",
        tags: ["Unity", "C#", "OOP", "Finite State Machines"],
        page: undefined,
        github: 'https://github.com/LeoTeeuwen/Hello_World',
    },
    {
        name: "Page Element Modifier",
        description: "A chrome extension that allows the user to manually remove elements on a page by a simple key bind. Also known as \"Manual AdBlocker\".",
        date: "January 2026",
        tags: ["Javascript", "JQuery", "Chrome Extension"],
        page: undefined,
        // TODO maybe make a page for showing this tool off?
        github: 'https://github.com/LeoTeeuwen/page-element-modifier',
    },
];


export default function Repos() {
    
    return (
        <>
            <m.h1                    
                initial={{opacity: 0, y: '5vh'}}
                whileInView={{opacity: 1, y: 0, transition: {duration: 1}}}
                viewport={{once: true, amount: 'some', margin: '10%'}}
                id={'aboutMe'} className='dark:text-main text-d-main self-center text-4xl border-b-4 font-medium border-third dark:border-d-third p-1 ml-[5%] mt-[5vh] sm:mt-[10vh] mb-[5vh] self-baseline w-fit;'
            >        
                My Projects
            </m.h1>
            <div className='flex flex-wrap m-10 justify-around gap-y-10 gap-x-5'>
                {otherProjects.map(project => {
                return (
                    <m.div
                    initial={{opacity: 0, y: '25%'}}
                    whileInView={{opacity: 1, y: '0', transition: {duration: 1, ease: 'easeOut'}}}
                    viewport={{once: true, amount: 'some', margin: '5%'}}
                    key={project.name}
                    className='bg-a-main dark:bg-d-a-main p-8 rounded-xl shadow-lg min-h-full flex flex-col max-[400px]:w-[300px] w-[400px] p-4 rounded-md border-b-4'
                    >
                    <p className='text-3xl font-semibold mb-2 bottom-border w-fit'>{project.name}</p>
                    <p className='text-sm dark:text-d-second mb-3'>{project.date}</p>
                    <p className='text-base'>{project.description}</p>
                    <div className='flex flex-wrap gap-3 mt-4 mb-3'>
                        {project.tags.length != 0 && project.tags.map(tag => {
                        return (
                            <p key={tag} className='text-sm text-a-main dark:text-d-main bg-second dark:bg-a-main font-semibold w-fit px-3 py-1 rounded-2xl'>{tag}</p>
                        );
                        })}
                    </div>
                    <div className="mt-auto flex flex-col sm:flex-row justify-between">
                        {project.github && <Link href={project.github} className='' target='_blank'><p className='robot-learn-more'>View Code</p></Link>}
                        {project.page && <Link href={project.page} className=''><p className='robot-learn-more'>Learn More</p></Link>}
                    </div>
                    </m.div>
                )
                })}
            </div>
        </>
    )
}