import React from 'react'
import Title from '../components/Title'
import NewSletterBox from '../components/NewsletterBox'
import about from '../assets/about.jpg'
function About() {
  return (
    <>
      <div className='text-2xl text-center pt-8 border-t' >
        <Title title1={'about'} title2={'us'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-112.5' src={about} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
            <p>Lorem ipsum dolor sit amet consecteturexplicabo magnam saepe reprehenderit voluptate dolore facere itaque quas corrupti hic, earum necessitatibus e adipisicing elit. Quae, vel.</p>
            <p>Atque consequatur nesciunt explicabo magnam saepe reprehenderit voluptate dolore facere itaque quas corrupti hic, earum necessitatibus eexplicabo magnam saepe reprehenderit voluptate dolore facere itaque quas corrupti hic, earum necessitatibus eexplicabo magnam saepe reprehenderit voluptate dolore facere itaque quas corrupti hic, earum necessitatibus eveniet velit eius.</p>
          <b className='text-gray-800' >our mission</b>
          <p>Lorem ipsum dolor sit amimpedit quaerat, voluptate earum voluptates maxime reiciendis magni. Molestias quod nobis ipsa minima excepturi quibusdam ratione a voluptates maxime reiciendis magni. Molestias quod nobis ipsa minima excepturi quibusdam ratione a  inventore.</p>
          </div>
      </div>
          <div className='text-xl py-4' >
            <Title title1={'why'} title2={'choose us'} />
          </div>
          <div className='flex flex-col md:flex-row text-sm mb-20' >
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
              <b>Quality Assurance:</b>
              <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat facilis deleniti nulla? Culpa quaerat itaque ratione, repellendus nesciunt libero voluptates tempora eos ducimus sint? Ratione quibusdam incidunt dicta perspiciatis!</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
              <b>Covenience:</b>
              <p  className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat facilis deleniti nulla? Culpa quaerat itaque ratione, repellendus nesciunt libero voluptates tempora eos ducimus sint? Ratione quibusdam incidunt dicta perspiciatis!</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
              <b>Expectional Customer Service:</b>
              <p  className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat facilis deleniti nulla? Culpa quaerat itaque ratione, repellendus nesciunt libero voluptates tempora eos ducimus sint? Ratione quibusdam incidunt dicta perspiciatis!</p>
            </div>
          </div>
            <NewSletterBox/>
    </>
  )
}

export default About