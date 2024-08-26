import React from 'react'
import Review from './Review'
import Pricing from './Pricing'
import Community from './Community'


const Body = () => {
  return (

    <div className='bg-black pt-16'>
      <Review/>
      <Pricing/>
      <Community/>
    </div>
  )
}

export default Body
