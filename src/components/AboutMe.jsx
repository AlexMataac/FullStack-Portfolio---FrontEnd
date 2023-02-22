import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Image from '../assets/Program.jpg';
import {HiOutlineGift} from 'react-icons/hi';
import {HiOutlineBookOpen} from 'react-icons/hi';
import {SlGameController} from 'react-icons/sl';
import {MdOutlinePlace} from 'react-icons/md';
import {RxPerson} from 'react-icons/rx';
import {RxCalendar} from 'react-icons/rx';
import {SlGraduation} from 'react-icons/sl';

const AboutMe = () => {

    const [about, setAbout] = useState([])
    const [img, setImg] = useState([])

    useEffect(() => {
        loadAbout();
    },[]);

    const loadAbout = async () => {
        const result = await axios.get("http://localhost:8081/aboutMe")
        console.log(about)
        setAbout(result.data[0]);
        setImg(require(`../assets/${result.data[0].image}`));
    };

    const info = [
        {
            id: 1,
            childs: (
                <div className='flex gap-4'>
                <RxPerson size={30} />
                <p className='ml-1'>Name :  
                {/* Alex John Vincent O. Mataac */}
                {about.name}
                </p>
                </div>
            ),
        },
        {
            id: 2,
            childs: (
                <div className='flex gap-4'>
                <HiOutlineGift size={30}/>
                <p className='ml-1'>Birthday : 
                {/* August 31, 1999 */}
                {about.birthday}
                </p>
                </div>
            ),
        },
        {
            id: 3,
            childs: (
                <div className='flex gap-4'>
                <RxCalendar size={30} />
                <p className='ml-2'>Age : 
                {/* 23 years old */}
                {about.age}
                </p>
                </div>
            ),
        },
        {
            id: 4,
            childs: (
                <div className='flex gap-4'>
                <SlGraduation size={30} />
                <p className='ml-1'>Education :  
                {/* Bachelor of Science in Computer Engineering */}
                {about.education}
                </p>
                </div>
            ),
        },
        {
            id: 5,
            childs: (
                <div className='flex gap-4'>
                <HiOutlineBookOpen size={30} />
                <p className='ml-1'>Study : 
                {/* Emilio Aguinaldo College- Cavite */}
                {about.study}
                </p>
                </div>
            ),
        },
        {
            id: 6,
            childs: (
                <div className='flex gap-4'>
                <SlGameController size={30}  />
                <p className='ml-1'>Hobbies : 
                {/* Playing basketball, online games */}
                {about.name}
                </p>   
                </div>
            ),
        },
        {
            id: 7,
            childs: (
                <div className='flex gap-4'>
                <MdOutlinePlace size={30} />
                <p className='ml-1'>Location : 
                {/* Bacoor, Cavite */}
                {about.location}
                </p>
                </div>
            ), 
        },
       
    ]
  return (
    <div name='about me' className='w-full p-40 py-32 px-1 bg-[#243763] text-[#FFEBB7]'>
        <div className='max-w-screen-lg p-10 px-5 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-0 md:pb-10 md:pt-0'>
                <p className='md:hidden text-4xl font-bold inline border-b-4 border-[#BAD7E9]'>
                    About Me
                    </p>
                    </div>
                    <div className='items-center px-5 py-5 justify-center grid md:grid-cols-2 sm:grid-cols-1'>
                        <img src={img} alt='' className='py-5 px-5 object-scale-down h-50 md:w-max'/>
                    <div>
                        {
                            info.map(({id, childs}) => (
                                <div key={id}
                                className='flex flex-col items-start font-medium px-8 py-2 mt-4 text-white'>
                                    {childs}
                                    </div>
                            ))
                        }
                    </div>
                </div>
            </div>
           
        </div>
  )
}

export default AboutMe