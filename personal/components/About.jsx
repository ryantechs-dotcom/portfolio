import React from 'react'


const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#467197] '>About</p>
                <h2 className='py-4'>Who I am</h2>
                <p className='py-2 text-gray-600'> 
                    As a dedicated data science student, I am deeply passionate about leveraging analytical skills to tackle complex problems and uncover meaningful insights from data. 
                </p>
                <p className='py-2 text-gray-600'>
                With a keen interest in problem-solving and a commitment to harnessing the power of data, I aim to drive innovation and make informed decisions in diverse domains.
                </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'></p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 '>
                <img className = 'rounded-xl' src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80' alt=''/>
            </div>
        </div>
    </div>
  )
}

export default About