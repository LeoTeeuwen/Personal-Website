'use client';

import Link from "next/link";
import { m } from 'framer-motion';

export default function Hero() {
    
    
  return (
    <>
    <div className="relative" style={{backgroundColor: "#3ce8da", height: "100vh"}}>
        <m.div        
            initial={{opacity: 0, y: '25%', x: '-50%'}}
            animate={{opacity: 1, y: '0', x: '-50%', transition:{ duration: 1 }}}
            viewport={{once: true, amount: 'some', margin: '5%'}}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-black p-4 rounded-md border-b-4"
        >
            <img src="/loadingScreen.png"/>
        </m.div>
    </div>
    </>
  );
}