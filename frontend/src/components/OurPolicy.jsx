import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
  <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
  
  <div className='flex-1 sm:w-1/3'>
    <img src={assets.delivery_icon} className='w-12 m-auto mb-5'  />
    <p className='font-semibold text-green-700'>Fast delivery</p>
    <p className='text-gray-400'>We offer fast delivery 24/7</p>
  </div>

  <div className='flex-1 sm:w-1/3'>
    <img src={assets.fresh_icon} className='w-12 m-auto mb-3'  />
    <p className='font-semibold text-green-700'>Freshness</p>
    <p className='text-gray-400'>We always produce fresh products</p>
  </div>

  <div className='flex-1 sm:w-1/3'>
    <img src={assets.support_img} className='w-12 m-auto mb-5' />
    <p className='font-semibold text-green-700'>Best customer support</p>
    <p className='text-gray-400'>We provide 24/7 customer support</p>
  </div>
</div>

  )
}

export default OurPolicy
