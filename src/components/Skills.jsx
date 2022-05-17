import React from 'react'
import  { SiDjango, SiPython, SiTailwindcss } from 'react-icons/si'
import { FaBootstrap,  FaReact } from 'react-icons/fa'

function Skills() {
  return (
    <div className=' bg-[#0a192f] pt-20 'id='Skills' >
        <h1 className='text-7xl text-gray-600  text-center font-extrabold py-10 mb-10' >SKILLS</h1>
        <p className='text-white text-center text-xl'>These are the technologies i use.</p>
      <div className="max-w-full mx-auto justify-center flex py-12" id='Skills' >
    

        <div className="flex flex-wrap justify-center pt-2" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="flex flex-col w-60 p-10 overflow-hidden bg-[#1c2d47] m-5 shadow-2xl text-blue-500 rounded-xl">
         <FaReact color='#2196f3' size={50} className='mx-auto sm:text-4xl text-xl'/>
        <p className='mt-6  sm:text-4xl  text-center text-white text-xl'>React</p>
      </div>
      <div className="flex flex-col w-60 p-10 overflow-hidden bg-[#1c2d47] m-5 shadow-2xl text-blue-500 rounded-xl">
         <SiTailwindcss color='#2196f3' size={50} className='mx-auto sm:text-4xl text-xl'/>
        <p className='mt-6  sm:text-4xl  text-center text-white text-xl'>Tailwind</p>
      </div>
      <div className="flex flex-col w-60 p-10 overflow-hidden bg-[#1c2d47] m-5  shadow-2xl text-blue-500 rounded-xl">
         <FaBootstrap color='violet' size={50} className='mx-auto sm:text-4xl text-xl'/>
        <p className='mt-6  sm:text-4xl  text-center text-white text-xl'>Bootstrap</p>
      </div>
      <div className="flex flex-col w-60 p-10 overflow-hidden bg-[#1c2d47]  m-5 shadow-2xl text-green-500 rounded-xl">
         <SiDjango color='teal' size={50} className='mx-auto sm:text-4xl text-xl'/>
        <p className='mt-6  sm:text-4xl  text-center text-white text-xl'>Django</p>
      </div>
      <div className="flex flex-col w-60 p-10 overflow-hidden bg-[#1c2d47] m-5 shadow-2xl text-blue-300 rounded-xl">
         <SiPython color='yellow' size={50} className='mx-auto sm:text-4xl text-xl'/>
        <p className='mt-6  sm:text-4xl font-italic text-center text-white text-xl'>Python</p>
      </div>
      </div>
      </div>
    </div>
  )
}

export default Skills