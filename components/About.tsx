import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
        <motion.img
        initial={{
            x:-200,
            opacity: 0
        }}
        whileInView={{
            x:0,
            opacity: 1
        }}
        viewport={{once:true}}
        transition={{duration:1.2}}
        src="https://media.licdn.com/dms/image/D4D03AQH7H3eewkf2ew/profile-displayphoto-shrink_800_800/0/1669147728701?e=1678320000&v=beta&t=vGo_bIjOhEFTHeDncYwihvjmAu7xaG5xcgJ9TY4LYAs"
        alt="img"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
        />
        <div className='space-y-10 px-0 md:px-10'>
            <h4 className="text-4xl font-semibold">Here is a{" "}
            <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
            background</h4>
            <p className="text-base">
            I'm Michael. 💯 You might also know me as Splax!, here's a little bit about me...
            As a mobile application developer with 4 years of experience, i have a strong
            background in developing and maintaining applications for iOS and Android using
            React Native. I have a deep understanding of mobile development principles and
            the ability to create intuitive and user-friendly interfaces.In addition to my
            skills in mobile development, i am also a full stack software developer with
            experience in a variety of frameworks, including React, React Native, GoLang, Django,
            Flask, Next.js, Node, and Express. This allows me to have a broad understanding of
            web development and the ability to build and maintain complete web applications from
            the front-end to the back-end.My skills in multiple frameworks make me a versatile
            and valuable asset to any team, as i have the ability to work on a wide range of
            projects and adapt to different technologies as needed. I have a strong work ethic
            and the ability to deliver high-quality code in a timely manner, making me a reliable
            and efficient team member. Overall, my combination of mobile and full stack development
            experience makes me a highly skilled and capable developer ❤️.
            </p>
        </div>
    </motion.div>
  )
}

export default About
