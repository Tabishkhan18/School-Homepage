import React from 'react'
import { FaGraduationCap } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='z-10 bg-indigo-950 text-white py-10' id='footer'>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-20">
        {/* Get In Touch */}
        <div>
          <div className="logo mb-4 flex gap-1 items-center font-sans font-semibold text-xl text-white uppercase">
            Get In Touch
          </div>
          <p className='mt-4 flex gap-5 font-thin'>
            <span className=" mb-2"><FaHome size={25}/></span>123 Xyz Street,
            <br />
            Anywhere location,<br />
            Earth 616
          </p>
          <p className="mt-4 flex gap-5 font-thin">
            <span className=" mb-2"><FaPhoneAlt size={25}/></span> +91 123-456-7890 
          </p>
          <p className="mt-4 flex gap-5 font-thin">
            <span className=" mb-2"><IoIosMail size={25}/></span> example@email.com
          </p>
        </div>
        {/* Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">Useful Link</h3>
          <ul>
            <li className="mb-2">
              <a href="#" className="hover:text-indigo-500 transition-all ease-in-out duration-200 font-thin">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-indigo-500 transition-all ease-in-out duration-200 font-thin">Goals</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-indigo-500 transition-all ease-in-out duration-200 font-thin">Gallery</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-indigo-500 transition-all ease-in-out duration-200 font-thin">More</a>
            </li>
            
          </ul>
        </div>
        {/* Opening Hours */}
        <div>
          <h3 className="text-lg font-semibold mb-4 uppercase">Opening Hours</h3>
          <ul>
            <li className="mb-2 flex justify-between font-thin">
              <span>Mon-Fri</span>
              <span>08:00 A.M. to 03:00 P.M.</span>
            </li>
            <li className="mb-2 flex justify-between font-thin">
              <span>Saturday</span>
              <span>08:00 A.M. to 04:00 P.M.</span>
            </li>
            <li className="flex justify-between font-thin">
              <span>Sunday</span>
              <span className="text-red-500">Closed</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm text-white mt-8">
        Copyright © School Name 2025. All Rights Reserved
      </div>
    </footer>
  )
}

export default Footer
