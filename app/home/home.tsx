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
                id={'aboutMe'} className='section-title'
            >        
                Who am I?
            </m.h1>

            <div style={{display: "flex", flexDirection: "column"}}>
              <p>Yo Waddup Chain</p>
              <Link href="/resume">Resume</Link>
              <Link href="/hiddenTab">Link to what is going to be cool little side thing!</Link>
              <img src="/loadingScreen.png" style={{height: "15%", width: "15%"}}/>
            </div>
          </LazyMotion>
      </MotionConfig>
    </>
    )
}