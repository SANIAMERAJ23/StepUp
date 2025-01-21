import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>      

      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt voluptatem culpa saepe sunt molestiae dolore? Quia minima quis corporis.</p>
           <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos blanditiis autem nostrum! Nisi officiis quos quis neque! Veritatis dolore nesciunt, repellat labore laboriosam magnam placeat.</p>
           <b className='text-gray-800'>Our Mission</b>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt soluta ducimus voluptas maxime voluptatem, quam culpa hic facilis debitis fugiat.</p>
        </div>

      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nisi.</p>
        </div>

      </div>
      
    </div>
  )
}

export default About
