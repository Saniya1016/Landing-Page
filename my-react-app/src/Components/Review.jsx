import React from 'react'
import { FaBookOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiStarSFill } from "react-icons/ri";

const Review = () => {
  return (

    <div className='flex flex-col'>

        <div className='mt-8 flex flex-row justify-center space-x-12'>
            
            <div className='flex items-center space-x-2'>
                <FaBookOpen className='text-green-400 text-2xl'/>
                <h1 className='text-white font-bold text-xl'> 5+ Guides for Free</h1>
            </div>

            <div className='flex items-center space-x-2'>
                <FaGraduationCap className='text-green-400 text-2xl'/>
                <h1 className='text-white font-bold text-xl'> Exclusive Courses and Projects </h1>
            </div>

            <div className='flex items-center space-x-2'>
                <FaWhatsapp className='text-green-400 text-2xl'/>
                <h1 className='text-white font-bold text-xl'> 24/7 Whatsapp Support Group</h1>
            </div>

            <div className='flex items-center space-x-2'>
                <BsPersonWorkspace className='text-green-400 text-2xl'/>
                <h1 className='text-white font-bold text-xl'> 1:1 Free Session </h1>
            </div>
        
        </div>


        <div className='mt-96 flex flex-row justify-center space-x-12'>

            <div className='flex flex-col items-center border-2 border-white'>
                <CgProfile className='text-white text-6xl py-2'/>
                <h1 className='text-white px-5 py-5'> "This community has been a game changer for my career. The exclusive courses and personalized guidance from expert mentors has helped me take my coding skills to the next level."</h1>
                <h1 className='text-white font-bold py-4'> Arina Amatya </h1>
                <h1 className='text-white'> SWE at Google </h1>
                <div className='flex py-4'>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                </div>
            </div>

            <div className='flex flex-col items-center border-2 border-white'>
                <CgProfile className='text-white text-6xl py-2'/>
                <h1 className='text-white px-5 py-5'> "The exclusive courses and bi-weekly coding sessions have been incredibly insightful, and collaborating on open-source projects has been a great way to build my portfolio. I highly recommend this community."</h1>
                <h1 className='text-white font-bold py-4'> Krishna Kumar </h1>
                <h1 className='text-white'> SWE at Microsoft </h1>
                <div className='flex py-4'>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                </div>
            </div>

            <div className='flex flex-col items-center border-2 border-white'>
                <CgProfile className='text-white text-6xl py-2'/>
                <h1 className='text-white px-5 py-5'> "Joining this community has been one of the best decisions I've made for my career. The 24/7 Whatsapp Group has been an incredible resource for networking and collaboration. I highly recommend this community."</h1>
                <h1 className='text-white font-bold py-4'> Lucy Bodtman </h1>
                <h1 className='text-white'> SWE at Meta </h1>
                <div className='flex py-4'>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                    <RiStarSFill className='text-yellow-400 text-2xl'/>
                </div>
            </div>


        </div>

            

    </div>

  )
}

export default Review
