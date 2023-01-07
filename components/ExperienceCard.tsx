import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80">
        <motion.img
         initial={{
            y:-100,
            opacity: 0
        }}
        whileInView={{
            y:0,
            opacity: 1
        }}
        viewport={{once:true}}
        transition={{duration:1.2}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0VOxovAI0fvb1f6RMRdYxpQ3zBqYg9oqgzA&usqp=CAU"
        alt="img"
        />
        <div className="px-0 md:px-10">
            <h4 className="text-4xl font-light">Business Intern</h4>
            <p className="font-bold text-2xl mt-1">Huawei</p>
            <div className="flex space-x-2 my-2">
                <img
                className='h-10 w-10 rounded-full'
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt=""
                />
                <img
                className='h-10 w-10 rounded-full'
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt=""
                />
                <img
                className='h-10 w-10 rounded-full'
                src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
                alt=""
                />
            </div>
            <p className="uppercase py-5 text-gray-500">Started Work... - Ended...</p>

            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>Summary  Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary  Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary  Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary  Summary Points Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary  Summary Points Summary Points Summary Points Summary Points Summary Points </li>
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
