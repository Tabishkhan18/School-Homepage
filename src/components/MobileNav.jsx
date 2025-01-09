import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { IoPerson } from "react-icons/io5";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <label className="flex flex-col gap-2 w-8 cursor-pointer" onClick={toggleMenu}>
                <div
                    className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 ${isOpen ? 'rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]' : ''
                        }`}
                ></div>
                <div
                    className={`rounded-2xl h-[3px] w-full bg-white duration-500 ${isOpen ? '-rotate-45' : ''
                        }`}
                ></div>
                <div
                    className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end ${isOpen ? 'rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]' : ''
                        }`}
                ></div>
            </label>

            <div
                className={`fixed top-16 right-0 w-3/4 h-full bg-indigo-950 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="p-4 flex flex-col items-center">
                    <ul className="mt-4 flex flex-col items-center">
                        <li className="my-2 font-thin text-md text-white hover:text-blue-400 transition ease-in-out duration-200 px-2 py-2 cursor-pointer"><Link to='home' spy={true} smooth={true} offset={-100} duration={500} >Home</Link></li>
                        <li className="my-2 font-thin text-md text-white hover:text-blue-400 transition ease-in-out duration-200 px-2 py-2 cursor-pointer"><Link to='goals' spy={true} smooth={true} offset={-100} duration={500} >Goals</Link></li>
                        <li className="my-2 font-thin text-md text-white hover:text-blue-400 transition ease-in-out duration-200 px-2 py-2 cursor-pointer"><Link to='gallery' spy={true} smooth={true} offset={-100} duration={500} >Gallery</Link></li>
                        <li className="my-2 font-thin text-md text-white hover:text-blue-400 transition ease-in-out duration-200 px-2 py-2 cursor-pointer"><Link to='footer' spy={true} smooth={true} offset={-100} duration={500} >More</Link></li>
                    </ul>
                    <button className='text-white border-2 border-indigo-950 hover:border-white text-md px-10 py-4 flex my-10 justify-center gap-2 font-thin transition-all ease-in-out duration-200'><IoPerson size={25} />Log In</button>
                </div>
            </div>

        </div>
    );
};

export default MobileNav
