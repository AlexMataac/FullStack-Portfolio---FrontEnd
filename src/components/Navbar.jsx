import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [navbar, setNavbar] = useState([])

    useEffect(() => {
        loadNavbar();
    },[])

    const loadNavbar = async () => {
        const result = await axios.get("http://localhost:8081/navbar")
        console.log(navbar)
        setNavbar(result.data[0])
    }

    const links = [
        {
            id: 1,
            link: '/',
            offset: 0,
            linkname: (`${navbar.home}`)
            
        },
        {
            id: 2,
            link: 'aboutme',
            offset: 0,
            linkname: (`${navbar.aboutMe}`)
        },
        {
            id: 3,
            link: 'resume',
            offset: -100,
            linkname: (`${navbar.resume}`)
        },
        {
            id: 4,
            link: 'experience',
            offset: -100,
            linkname: (`${navbar.experience}`)
        },
        {
            id: 5,
            link: 'project',
            offset: -80,
            linkname: (`${navbar.project}`)
        },
        {
            id: 6,
            link: 'contactme',
            offset: -80,
            linkname: (`${navbar.contactMe}`)
        },
    ]
  return (
    <div className='flex justify-between items-center w-full z-50 p-5 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>
                {/* Vincent */}
                {navbar.logo}
                </h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map(({id, link, offset, linkname}) => (
                <li 
                key={id}
                className='px-4 cursor-pointer capitalize font-medium 
                text-gray-500 hover:scale-105 duration-200  active:bg-amber-500'
                >
                    <Link to={link} >
                        {linkname}
                        </Link>
                </li>
            ))}
        </ul>
        

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute
            top-0 left-0 w-screen h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 '>
    
                {links.map(({id, link, linkname }) => (
                    <li 
                    key={id}
                    className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                        {linkname}
                        </Link>
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default Navbar