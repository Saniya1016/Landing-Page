import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

const Pricing = () => {
  return (
    <div className='bg-black py-20'>

        <div className='flex flex-col items-center justify-center py-60'>
            <h1 className='text-white text-7xl font-bold'>SIMPLE NO-TRICKS PRICING</h1>
            <h1 className='text-white text-xl py-5'>Everything you need to grow 10x for less than a coffee</h1>

            <div className='flex flex-row border-2 border-white rounded-lg mt-20 p-8 bg-gray-800'>

                <div className='flex flex-col items-start'>
                    <h1 className='text-white font-bold text-3xl py-5'>Premium Elite Subscription </h1>
                    <h1 className='text-white text-xl'>Join founders, freelancers, designers, FAANG Engineers, Indie Hackers, and more in our 24/7 Whatsapp Group for less than a cup of coffee</h1>

                    <h1 className='text-green-400 text-2xl font-bold py-5'> What's included </h1>

                    <div className='grid grid-cols-2 gap-10 p-4'>

                        <div className='flex flex-row items-center space-x-3'>

                            <FaCheck className='text-green-400 text-xl'/>
                            <h1 className='text-white'>Expert Mentors</h1>

                        </div>

                        <div className='flex flex-row items-center space-x-3'>

                            <FaCheck className='text-green-400 text-xl'/>
                            <h1 className='text-white'>Exclusive Courses</h1>

                        </div>

                        <div className='flex flex-row items-center space-x-3'>

                            <FaCheck className='text-green-400 text-xl'/>
                            <h1 className='text-white'>Networking & Collaboration</h1>

                        </div>

                        <div className='flex flex-row items-center space-x-3'>

                            <FaCheck className='text-green-400 text-xl'/>
                            <h1 className='text-white'> Career Guidance </h1>

                        </div>

                    </div>

                </div>

                <div className='flex flex-col items-center justify-center border-2 rounded-lg p-8 ml-8 space-y-6 bg-gray-900'>

                    <h1 className='text-white text-xl font-sans'>Less than a cup of coffee</h1>

                    <div className='flex flex-row space-x-4'>
                        <h1 className='text-white font-sans font-bold text-4xl'>$5</h1>
                        <h1 className="text-slate-500 text-4xl font-bold"> <span className="line-through"> $1000</span> </h1>
                    </div>

                    <button className='bg-green-400 text-white rounded-full px-8 py-4 hover:bg-green-200'>Join Community</button>

                    <div className='grid grid-cols-4 gap-0 p-0'>
                        
                        <IoIosContact className='text-white text-4xl -m-2'/>
                        <IoIosContact className='text-white text-4xl -m-2'/>
                        <IoIosContact className='text-white text-4xl -m-2'/>
                        <IoIosContact className='text-white text-4xl -m-2'/>
                        
                    </div>

                    <h1 className='text-white'> 100+ Active Members </h1>

                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Pricing
