import React from 'react'
import Title from '../components/Title'
import contact_wal from '../assets/contact_wal.jpg'
import NewsletterBox from '../components/NewsletterBox'
function Contact() {
  return (
    <>
      <div className='text-center text-2xl pt-10 border-t' >
        <Title title1={'contact'} title2={'us'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28' >
          <img className='w-full md:max-w-[480px]' src={contact_wal} alt="not found" />
          <div className='flex flex-col justify-center items-start gap-6' >
            <p className='font-semibold text-xl text-gray-600' >our store</p>
            <p className='text-gray-500'> 7898 wills station <br />suit 450 washington,USA </p>
            <p className='text-gray-500' >tel :0987654326 <br /> Email : example@gmail.com </p>
            <p className='text-gray-500 font-semibold text-xl' >careers at forever</p>
            <p className='text-gray-500' >lear more about our team and job openings. </p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 ' >Explore bojs</button>

          </div>
      </div>
      <NewsletterBox/>
    </>
  )
}

export default Contact