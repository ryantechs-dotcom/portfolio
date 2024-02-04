import React from 'react'
import { AiFillMail, AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Main = () => {
  return (
    <div  id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div className='uppercase text-sm tracking-widest text-gray-600'>
                <p>Let's build something together</p>
                <h1 className='py-4 text-gray-700'>
                    Hi, I'm <span className= 'text-[#467197]'> Ryan </span> 
                </h1>
                <h1 className='py-2 text-gray-700'>
                     A Data Science Student
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                Ready to delve into the data, analyze patterns, and construct predictive models to tackle real-world challenges head-on. Let's harness the power of data to uncover solutions and drive impactful decision-making together.
                </p>
                <div className='flex item-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedin/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main