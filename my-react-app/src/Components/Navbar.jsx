import React from 'react'

const Navbar = () => {
  return (

    <nav className='sticky top-0 bg-blue-600 text-black w-full z-50'>

      <div className='flex items-center justify-between h-16 px-4'>

        <div className='flex items-center space-x-4'>
          <img className="h-20 w-20" src="./assets/logo.jpg" alt="Logo" />
          <h1 className='font-mono font-bold text-2xl'>CodeFreek</h1>
        </div>

        <div className='flex flex-row space-x-8'>
          <a href="#" className="font-bold hover:text-white">Home</a>
          <a href="#" className="font-bold hover:text-white">About</a>
          <a href="#" className="font-bold hover:text-white">Pricing</a>
          <a href="#" className="font-bold hover:text-white">Features</a>
        </div>

        <div className="flex">
            <button className="bg-black hover:bg-blue-300 text-white px-4 py-2 rounded-2xl">Join Community</button>
        </div>

      </div>

      
    </nav>

  )
}

export default Navbar
