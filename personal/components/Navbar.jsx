import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import React, {useState, useEffect} from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true)
            } else {
                setShadow(false)
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#283d5e]' : 'fixed w-full h-20 z-100 bg-[#283d5e]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-18'>
            <Link href='/'>
            <Image 
            src="/../public/assets/skills/home.png" 
            alt='/' 
            width='125'
            height='50'
            className='h-[55px] w-[55px] m-4'
            />
            </Link>
            <div>
                <ul className='hidden md:flex text-white'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b text'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25} color="white"/>
                </div>

            </div>
        </div>


        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': ''}>
            <div className={nav ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src='/../' alt='/' width='87' height='35' />
                        <div onClick={handleNav} className='rounded-full shadow-lg shawdow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose/>
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together </p>
                    </div>
                </div>
                <div>
                    <ul className = 'py-4 flex flex-col'>
                        <Link href='/'>
                        <li className = 'py-4 text-sm'>Home</li>
                       </Link>
                        <Link href='/' >
                        <li className = 'py-4 text-sm'>About</li>
                       </Link>
                        <Link href='/' >
                        <li className = 'py-4 text-sm'>Skills</li>
                       </Link>
                        <Link href='/' >
                        <li className = 'py-4 text-sm'>Projects</li>
                       </Link>
                        <Link href='/' >
                        <li className = 'py-4 text-sm'>Contact</li>
                       </Link> 
                    </ul>
                    <div className='pt-40'>
                        <p className='uppercase tracking-widest text-[#5651e5]'> Let's connect</p>

                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>

                            <div className= 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedin/>
                            </div>
                            <div className= 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub/>
                            </div>
                            <div className= 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail/>
                            </div>
                            <div className= 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar