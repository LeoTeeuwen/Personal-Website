'use client';

import { useScroll, MotionConfig, LazyMotion, domAnimation, m } from "framer-motion";
import Link from "next/link";
import WhoAmI from "./whoAmI";
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
            <WhoAmI/>
          </LazyMotion>
      </MotionConfig>
    </>
    )
}