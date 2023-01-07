import { motion } from 'framer-motion'
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { BeakerIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'

type Props = {
}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
  };

const Contact = (props: Props) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:shakaikhanoba@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    };
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center overflow-hidden">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
        <div className="space-y-10 px:0 md:px-10 max-w-6xl flex flex-col">
                <h4 className='text-4xl font-semibold text-center'>
                    I have got just what you need.{" "}
                  <span className="underline decoration-[#f7ab0a]/50">Lets Talk.</span>{" "}
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+2348163203767</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">shakaikhanoba@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">4-6, Abike Wilson St, Paradise estate, Lakowe, Lagos, Nigeria</p>
                    </div>
                </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                        <div  className="flex space-x-2">
                            <input {...register('name')} placeholder="Name" type="text" className="contactInput"/>
                            <input {...register('email')} placeholder='Email' type="email" className="contactInput"/>
                        </div>
                        <input {...register('subject')} placeholder='Subject' type="text" className="contactInput"/>

                        <textarea {...register('message')} placeholder='Message' className="contactInput"/>

                        <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">submit</button>
                    </form>

              </div>
    </motion.div>
  )
}

export default Contact
