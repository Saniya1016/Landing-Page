import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { SiAdobe } from "react-icons/si";
import { FaAirbnb } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiFramer } from "react-icons/si";
import { FaDropbox } from "react-icons/fa6";

const Community = () => {
  return (
    <div className='h-screen bg-black space-y-10'>

        <div className='flex flex-col items-center justify-center px-5 space-y-10'>

            <h1 className='text-white text-7xl font-bold text-center break-word'>EVERYTHING YOU NEED IN <br/> ONE COMMUNITY</h1>
            <h1 className='text-2xl text-gray-400'>Unleashing your digital potential for lasting success</h1>


            <div className='flex flex-row items-center justify-center p-12 space-x-16 mt-10'>

                <div className='flex flex-col items-center justify-center'>
                    <img src='./assets/mentoring.gif' className='h-40 w-40 hover:-translate-y-3'/>
                    <h1 className='text-teal-200 text-2xl font-bold'>EXPERT MENTORS</h1>
                    <h1 className='text-white text-xl'> Get personalized guidance from expert mentors to take your coding skills to the next level. </h1>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src='./assets/business-network.gif' className='h-40 w-40 hover:-translate-y-3'/>
                    <h1 className='text-teal-200 text-2xl font-bold'>NETWORKING</h1>
                    <h1 className='text-white text-xl'> Connect wiith like-minded coders from around the world and collaborate on exciting projects. </h1>
                </div>

                <div className='flex flex-col items-center justify-center'>
                    <img src='./assets/online-course.gif' className='h-40 w-40 hover:-translate-y-3'/>
                    <h1 className='text-teal-200 text-2xl font-bold'>COURSES</h1>
                    <h1 className='text-white text-xl'> Exclusive courses in Full Stack, AI, Blockchain, anm more to help you stay ahead of the curve. </h1>
                </div>

            </div>

            <div className='flex flex-row items-center justify-center space-x-10 py-14'>

                <div className='px-5'>
                    <FcGoogle className='text-4xl'/>
                    <h1 className='text-white'>Google</h1>
                </div>

                <div className='px-5'>
                    <SiAdobe className='text-red-500 text-4xl'/>
                    <h1 className='text-white'>Adobe</h1>
                </div>

                <div className='px-5'>
                    <FaDropbox className='text-blue-600 text-4xl'/>
                    <h1 className='text-white'>Dropbox</h1>
                </div>

                <div className='px-5'>
                    <FaAirbnb className='text-orange-500 text-4xl'/>
                    <h1 className='text-white'>airbnb</h1>
                </div>

                <div className='px-5'>
                    <FaFigma className='text-purple-500 text-4xl'/>
                    <h1 className='text-white'>Figma</h1>
                </div>

                <div className='px-5'>
                    <SiFramer className='text-blue-600 text-4xl'/>
                    <h1 className='text-white'>Framer</h1>
                </div>


            </div>

        </div>
      
    </div>
  )
}

export default Community
