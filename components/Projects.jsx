import React from 'react'
import propertyImg from '../public/assests/TaskPage.png'
// import propertyImg from '../public/assests/TaskPage.png'
// import propertyImg from '../public/assests/TaskPage.png'
import Image from 'next/image';
import Link from 'next/link';
import ProjectItem from './ProjectItem';
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className=''>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                    title='Jr.College Acdemics Data & Docs Managment' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property'
                />

                <ProjectItem 
                    title='Jr.College Acdemics Data & Docs Managment' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property'
                />

                <ProjectItem 
                    title='Jr.College Acdemics Data & Docs Managment' 
                    backgroundImg={propertyImg} 
                    projectUrl='/property'
                />
            </div>
        </div>
    </div>
  );
};

export default Projects