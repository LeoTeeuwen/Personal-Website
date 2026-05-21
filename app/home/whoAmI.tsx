'use client';

import { m } from 'framer-motion';
import Image from "next/image";

export default function WhoAmI() {
    return (
        <>
            <m.h1                    
                initial={{opacity: 0, x: '-10vh'}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                viewport={{once: true, amount: 'some', margin: '5%'}}
                id={'aboutMe'} className='dark:text-main text-d-main self-center text-4xl border-b-4 font-medium border-third dark:border-d-third p-1 ml-[5%] mt-[5vh] sm:mt-[10vh] mb-[5vh] self-baseline w-fit;'
            >        
                Who am I?
            </m.h1>
            <div className='flex items-center flex-col'>
                <div className='max-w-[1500px] mx-[5%] bg-about-me-background dark:bg-d-about-me-background flex flex-col md:flex-row items-center rounded-2xl p-4 shadow-xl'>
                    <p className='text-d-main font-medium text-sm md:text-2xl md:w-2/3 whitespace-pre-line md:mx-4'>
                    {`I am studying Computer Science at the University of Arkansas!

                    I have lots of experience with Mobile Development, Web Dev, and Dev Ops.

                    I enjoy horror video games, internet series, and difficulty in my media.`}</p>
                    <m.div
                    initial={{opacity: 0, scale: 0.7}}
                    whileInView={{opacity: 1, scale: 1, transition: {duration: 1}}}            
                    viewport={{once: true, amount: 'some'}}
                    className='md:w-1/3 m-4'
                    >
                        <Image width={4000} height={4000} priority src="/loadingScreen.png" alt="Image of self" className='h-max w-max rounded-xl' />
                    </m.div>
                </div>
            </div>
        </>
    )
}