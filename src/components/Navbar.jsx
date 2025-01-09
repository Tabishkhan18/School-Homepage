import React from 'react'
import { Link } from 'react-scroll'
import { FaBook } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import MobileNav from './MobileNav';

const Navbar = () => {
    return (
        <nav className="navbar z-10 fixed top-0 right-0 left-0 flex justify-between items-center md:px-10 px-10 bg-indigo-950 h-20">
            <div className="logo flex gap-1 items-center font-sans font-semibold text-xl text-white">
                <FaBook size={30} />School Name
            </div>
            <div className="menu hidden md:flex">
                <ul className='flex gap-5'>
                    <li className='text-md font-thin text-white hover:text-blue-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'><Link to='home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                    <li className='text-md font-thin text-white hover:text-blue-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'><Link to='goals' spy={true} smooth={true} offset={-100} duration={500}>Goals</Link></li>
                    <li className='text-md font-thin text-white hover:text-blue-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'><Link to='gallery' spy={true} smooth={true} offset={-100} duration={500}>Gallery</Link></li>
                    <li className='text-md font-thin text-white hover:text-blue-400 transition ease-in-out duration-200 px-4 py-2 cursor-pointer'><Link to='footer' spy={true} smooth={true} offset={-100} duration={500}>More</Link></li>
                </ul>
            </div>
            <button className='text-white border-2 border-indigo-950 hover:border-white py-2 px-5 hidden text-md md:flex gap-2 font-thin transition-all ease-in-out duration-200'><IoPerson size={25} />Log In</button>
            <button className="md:hidden"> <MobileNav /></button>
        </nav>
    )
}

export default Navbar
