import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1248px] w-full h-full ex-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    Let's Explore!!
                </p>
                <h1 className='py-4 text-gray-700'>Hi,I'm <span className='text-[#5651e5]'>Umair</span></h1>
                <h1 className='py-2 text-gray-700'>
                    A Desktop Aplications & Front-End Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                    I'm desktop application and web developer specializing in building(and ocassionall designing)
                    exceptional digital experiences.Currently, I'm focused on building responsive front-end web 
                    applications while learning back-end techologies.

                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaLinkedinIn/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <FaGithub/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Main;
