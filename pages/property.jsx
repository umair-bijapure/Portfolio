import React from 'react';
import propertyImg from '../public/assests/TaskPage.png';
import Image from 'next/image';
import Link from 'next/link';
import {RiRadioButtonFill} from 'react-icons/ri';
const property = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10]'/>
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={propertyImg} alt='/' />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                <h2 className='py-2'>Jr.College Acdemics Data & Docs Managment</h2>
                <h3>Python/Tkinter/SQLite/reportLab</h3>
            </div>
        </div>
        <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
            <div className='col-span-4'>
                <p>Prject</p>
                <h2>Overvew</h2>
                <p>
                    This is Desktop applicaion is built using python and tkinter framwork,tkinter helps to designe the UI designs.
                    jr.College teachers are able to import the student data into the database for which i have used SQL.
                    teachers are able to select course of respecive students.Then they can allot marks to respective subject for the students,system will calculate their,total marks,percentage,grade,rank & grace marks needed to pass the studnt if he is gonna fail in that perticula subject.
                    Now,interesting part comes in after final evaluation of each subject,they can generate reults automatically using reportlab &pyPDF2 libraries.
                     isn't it interesting futhermore this software can generate pdfs containg all the recorded marks during academic year in well organised manner, in the form of tables for each student.
                     last but not least they can generate all the data as a csv file to keep a record of students for that perticular year.
                </p>
                <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
                <button className='px-8 py-2 mt-4 '>Code</button>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl  shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>Python</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>Tkinter</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>SQlite</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>Reportlab</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>Pandas</p>
                <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill/>PyPDF2</p>
            </div>
            </div>
            </div>
        <Link href='/#projects'>
            <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>

    </div>
  );
};

export default property