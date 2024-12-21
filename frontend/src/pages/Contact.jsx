import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.contact_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>We at Mazra3ty are always here to assist you. Whether you're a farmer looking to sell your produce or a customer seeking fresh, high-quality products, our team is dedicated to making your experience seamless and enjoyable.</p>
              <p>Based in the heart of Egypt, Mazra3ty is deeply rooted in supporting local farmers and fostering connections that benefit our community. We value your feedback and inquiries as we continue to grow and improve our platform.</p>
              <b className='text-gray-800'>Get in Touch</b>
              <p>Feel free to reach out to us with any questions, concerns, or suggestions. Your input helps us better serve you and enhance the Mazra3ty experience for everyone.</p>
          </div>
      </div>

      <div className=' text-xl py-4'>
          <Title text1={'HOW TO'} text2={'REACH US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Email Us:</b>
            <p className=' text-gray-600'>You can send us an email at <a href="mailto:support@mazra3ty.com" className='text-blue-600'>support@mazra3ty.com</a>, and we’ll get back to you promptly.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Call Us:</b>
            <p className=' text-gray-600'>Our support team is available at <b>+20 123 456 7890</b> to answer your queries from 9 AM to 6 PM, Sunday to Thursday.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Visit Us:</b>
            <p className=' text-gray-600'>Our office is located at: <br /> <b>123 Agriculture Road, Cairo, Egypt.</b></p>
          </div>
      </div>      
    </div>
  )
}

export default Contact