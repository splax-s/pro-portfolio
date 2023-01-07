import React, {useState} from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, Name's splax", "Developer", "Network Engineer", "Computer Scientist", "Guy-who-loves-Music.tsx","<ButLovesToCodeMore/>"],
        loop: true,
        delaySpeed: 2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles/>
        <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src="https://media.licdn.com/dms/image/D4D03AQH7H3eewkf2ew/profile-displayphoto-shrink_800_800/0/1669147728701?e=1678320000&v=beta&t=vGo_bIjOhEFTHeDncYwihvjmAu7xaG5xcgJ9TY4LYAs"
        alt=""/>
        <div className='z-20'>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#f7ab0a'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='heroButton'>Projects</button>
                </Link>
                <Link href="#contact">
                <button className='heroButton'>Contact</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero
