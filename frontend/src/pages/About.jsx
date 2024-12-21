import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Mazra3ty was created to bridge the gap between farmers and customers, enabling a direct connection that eliminates the need for middlemen. Our platform empowers farmers to sell their fresh produce and products directly to customers, ensuring fair pricing and transparency.</p>
              <p>Since its launch, Mazra3ty has been committed to building a community-driven marketplace that prioritizes trust, quality, and sustainability. We offer a diverse range of farm-fresh products that cater to the needs of both farmers and customers, fostering a mutually beneficial relationship.</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Mazra3ty is to create a seamless and sustainable platform where farmers can thrive and customers can access fresh, high-quality produce. We aim to revolutionize the agricultural trade by promoting fairness, transparency, and convenience.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Fresh and Authentic Products:</b>
            <p className=' text-gray-600'>We ensure that all products listed on Mazra3ty are sourced directly from farmers, guaranteeing freshness and authenticity.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Empowering Local Farmers:</b>
            <p className=' text-gray-600'>By connecting farmers directly to customers, we help them earn fair prices for their hard work and dedication.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience and Transparency:</b>
            <p className=' text-gray-600'>Our easy-to-use platform ensures a hassle-free experience for both farmers and customers, with complete transparency in pricing and transactions.</p>
          </div>
      </div>      
    </div>
  )
}

export default About