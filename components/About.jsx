import React from 'react'

const About = () => {
  return (
    <div id='about' className=' w-full md:h-screen full screen p-2 flex  items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'> Who I Am</h2>
                <p className='py-2 text-gray-600'>
                    I am en exceptionall fast and creative developer
                </p>
                <p className='py-2 text-gray-600'>
                    I have spent the last 2 year learing and developing Desktop & Web applicaions(freelancing projects) for vaarious Organisations.
                    I alwasy Wanted to collaborated,co-ordinated,communicate with different kind of people that is why i am good at some communication and presentation skills.
                </p>

            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rouded-xl flex items-center justify-center p-4 hover:scale-105  ease-in duration-300'>
                <img className='rounded-xl' src="/assests/A.jpeg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default About