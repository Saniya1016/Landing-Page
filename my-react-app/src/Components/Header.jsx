import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col pt-16'>

      <div className='flex flex-row items-center justify-between px-20 py-14 mr-8'>

        <div className='pt-20 space-x-2'>
          <h1 className='text-green-400 text-9xl font-bold font-mono leading-tight'>ATTEND LIVE</h1>
          <h1 className='text-white text-9xl font-bold font-mono'>CLASSES EVERY WEEK</h1>
          <h1 className='mt-6 text-white text-xl'>Join founders, freelancers, designers, FAANG Engineers, Indie Hackers, and more in our 24/7 Whatsapp Group for less than a cup of coffee. </h1>
          <button className='mt-8 text-white bg-green-400 rounded-full px-6 py-3 text-lg font-semibold hover:bg-green-300'> Join 24/7 Whatsapp + Discord for $5/month </button>
        </div>

        <div className='pt-20 px-5'>
          <img src='./assets/code.jpg' className='h-50 w-50 border-4 border-green-400'/>
        </div>

      </div>



    </div>
  )
}

export default Header
