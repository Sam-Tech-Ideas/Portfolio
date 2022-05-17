import React from 'react'

function Contact() {
  return (
      <div>
    <div className='bg-[#0a192f] w-full md:h-screen flex justify-center items-center p-4' id='Contact'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
          <div className=" py-10 mt-10">
             <h1 className='text-6xl  text-gray-600  text-center font-extrabold' >CONTACT ME</h1>
                <p className='text-center text-white mt-5 text-lg'>Reach out to me for your secured fullstack web apps.</p>
          </div>
          <input type="text" className='bg-blue-200 p-2' placeholder='Name' name='name' />
          <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-blue-200' />
            <textarea name="message" id="" cols="30" rows="10" placeholder='Please write something' className='p-2 bg-blue-200'></textarea>
            <button className='text-white border-2 rounded-md hover:text-black hover:bg-blue-200 px-4 py-3 my-8 mx-auto flex items center'>Lets Get in Touch</button>
      </form>
    </div>
    </div>
  )
}

export default Contact