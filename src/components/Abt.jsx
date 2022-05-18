import React from 'react'

function Abt() {
  return (
    <div>
         <div className='bg-[#0a192f]' id='About'>
             <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
     <h1 className='text-7xl text-gray-600  text-center font-extrabold py-10'>ABOUT ME</h1>
      <p className='text-2xl font-bold text-center text-gray-400'>Hey!</p>
      <p className='text-base sm:text-xl  text-center text-gray-300 leading-relaxed mt-4 '>I'm a second year computer science student and a passionate fullstack web developer focused on creating secured and scalable web applications using Python(Django) for backend and 
      Javascript (React) as frontend technologies.Technically proficient and analytical problem solver with calm and focused demeanor.
     <a href="Resume.pdf" download><button className='text-white border-2 rounded-md hover:text-black hover:bg-blue-200 px-3 py-3  mx-auto flex items center mt-5 '>Download Resume</button></a>
      </p>
      </div>
      </div>

    </div>
  )
}

export default Abt
