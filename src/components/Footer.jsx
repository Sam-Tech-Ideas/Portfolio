import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'






function Footer() {
  return (
      <div>
    <div className='bg-[#0a192f] border-t-3/2  flex justify-center'>
      <div className="flex justify-center mt-4">
           <a href="" className='text-2xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:bg-white hover:text-black rounded-full'>
               <FaGithub/>
           </a>
          </div>
          <div className="flex justify-center mt-4">
           <a href="" className='text-2xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-white hover:text-blue-500 rounded-full'>
               <FaLinkedin/>
           </a>
          </div>
          <div className="flex justify-center mt-4">
           <a href="" className='text-2xl m-1 p-1 sm:m-2 sm:p-2 text-white hover:bg-white hover:text-black rounded-full'>
               <FaEnvelope/>
           </a>
          </div>
          <div className="flex justify-center mt-4">
           <a href="" className='text-2xl m-1 p-1 sm:m-2 sm:p-2 text-green-400 hover:bg-white hover:text-green-400 rounded-full'>
               <FaWhatsapp/>
           </a>
          </div>  
    </div>
    </div>
  )
}

export default Footer