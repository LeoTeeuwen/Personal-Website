'use client';

import Link from "next/link";
import { m } from 'framer-motion';
import { GithubIcon, GmailIcon, LinkedInIcon } from "../components/icons";
import Image from "next/image";
import { useEffect, useState } from "react";

function Socials() {
  return (
    <div className="flex flex-row justify-around mt-3 gap-x-4 text-main">
      <Link href={"https://github.com/LeoTeeuwen"} className='' target='_blank'>
        <button type="button"
          className="mb-2 flex rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
          <GithubIcon/>
          GitHub
        </button>
      </Link>
      <Link href={"https://www.linkedin.com/in/leo-teeuwen-560a3b2a9"} className='' target='_blank'>
        <button type="button"
          className="mb-2 flex rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
          <LinkedInIcon/>
          Linkedin
        </button>
      </Link>
      <Link href="/resume" className='' target='_blank'>
        <button type="button"
          className="mb-2 flex rounded bg-[#ea4335] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
          <span className="me-2 [&>svg]:h-4 [&>svg]:w-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 384 512">
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
            </svg>
          </span>
          Resume
        </button>
      </Link>
    </div>
  )
}

export default function Hero() {

  return (
    <>
        <Image src="/tempBackground.png" fill alt="Loading..." className="aspect-16:9 w-full"/>
        <div className="background-size: cover relative" style={{height: "100vh", display: "flex"}}>
            <m.div        
                initial={{opacity: 0, y: '25%'}}
                animate={{opacity: 1, y: '0', transition:{ duration: 1 }}}
                viewport={{once: true, amount: 'some', margin: '5%'}}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit h-fit bg-black p-4 rounded-md border-b-4"
            >
                <h1 className="text-d-main dark:text-main text-xl md:text-2xl lg:text-4xl font-bold text-center whitespace-nowrap">Hello, I am Leo Teeuwen</h1>
                <Socials/>
            </m.div>
        </div>
    </>
  );
}