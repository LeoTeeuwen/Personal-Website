'use client';

import { useScroll, MotionConfig, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import Hero from "./hero";

export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
    <>
      <title>Home | Leo Teeuwen</title>
      <link rel="icon" type="image/png" href="/icon.png"/>

      <MotionConfig reducedMotion="user">
          <LazyMotion strict features={domAnimation}>
            <Hero/>
            <m.div
                className="fixed top-0 left-0 right-0 h-[10px] bg-third dark:bg-d-third origin-[0%] z-10"
                style={{scaleX: scrollYProgress}}
            />
            <m.h1                    
                initial={{opacity: 0, x: '-10vh'}}
                whileInView={{opacity: 1, x: 0, transition: {duration: 1}}}
                viewport={{once: true, amount: 'some', margin: '5%'}}
                id={'aboutMe'} className='dark:text-main text-d-main text-4xl border-b-4 font-medium border-third dark:border-d-third p-1 ml-[5%] mt-[5vh] sm:mt-[10vh] mb-[5vh] self-baseline w-fit;'
            >        
                Who am I?
            </m.h1>
          </LazyMotion>
      </MotionConfig>
    </>
    )
}