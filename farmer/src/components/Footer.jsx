import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <hr />
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="" />
            <p className='w-full md:w-2/3 text-gray-600'>Best fresh farm products you can order online.</p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+2 01200851056</li>
                <li>contact@Mazra3ty.com</li>
            </ul>
        </div>

      </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Mazra3ty.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
