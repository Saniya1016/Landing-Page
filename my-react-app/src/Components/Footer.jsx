import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black w-full h-20 space-x-10'>

      <div className='flex flex-row items-center justify-between px-10'>

        <div className='flex items-center space-x-4'>
            <img className="h-20 w-20" src="./assets/logo.jpg" alt="Logo" />
            <h1 className='font-mono text-xl text-white'>CodeFreek</h1>
        </div>

        <div>
          <h1 className='text-gray-400'> 2023 DSA Revision</h1>
        </div>

        <div className='flex flex-row items-center space-x-4'>
          <FaTwitter className='text-gray-400'/>
          <FaYoutube className='text-gray-400'/>
          <FaLinkedin className='text-gray-400'/>
          <FaInstagramSquare className='text-gray-400'/>
        </div>

      </div>
      
    </div>
  )
}

export default Footer
