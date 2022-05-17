import React from 'react'


function Project() {
  return (
      <div>
    <div className='w-full md:h-screen text-gray-300 bg-[#0a192f] py-10 ' id='Project'>
       <div className="max-w-[1000px] flex flex-col mx-auto  justify-center w-full h-full">
           <div className="">
               <h1 className='text-center text-gray-600 font-bold text-7xl my-10 ' >PROJECTS</h1>
               <p className='text-white text-center m-3 text-xl'>These are some cool  projects i have created.</p>
           </div>   
<div class="text-gray-400 body-font m-10 justify-center p-10 "  data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
{/*data-aos="fade-right"
     data-aos-offset="300"
  data-aos-easing="ease-in-sine"*/}

    <div class="flex flex-wrap w-full mb-20">
      
    <div class="flex flex-wrap -m-4">
    <div class="xl:w-1/4 md:w-1/2 p-4  ">
      <div class="relative ">
    <a class="absolute inset-0 z-10 bg-white text-center flex  items-center justify-center opacity-0 hover:opacity-50 bg-opacity-90 duration-300" href=''>
      <h1  class="tracking-wider text-2xl text-center font-bold text-black pl-1" > Bootstrap Project</h1>
      <p  className="mx-auto text-base"></p>
      </a>
        <div class=" bg-opacity-40 shadow-2xl bg-[#242484] rounded-lg relative">
          <img class="h-60 rounded w-full object-cover object-center mb-6 flex flex-wrap content-center" src="./public/img_4.jpg" alt="content"/>
          
        </div>
      </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4  ">
      <div class="relative ">
    <a class="absolute inset-0 z-10 bg-white text-center flex  items-center justify-center opacity-0 hover:opacity-50 bg-opacity-90 duration-300" href=''>
      <h1  class="tracking-wider text-2xl text-center font-bold text-black pl-1 m-1" > Bootstrap Project</h1>
      <p  className="mx-auto text-base"></p>
      </a>
        <div class=" bg-opacity-40 shadow-2xl bg-[#242484] rounded-lg relative">
          <img class="h-60 rounded w-full object-cover object-center mb-6 flex flex-wrap content-center" src="./public/img_3.jpg" alt="content"/>
          
        </div>
        
      </div>
     
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4  ">
      <div class="relative ">
    <a class="absolute inset-0 z-10 bg-white text-center flex  items-center justify-center opacity-0 hover:opacity-50 bg-opacity-90 duration-300" href=''>
      <h1  class="tracking-wider text-2xl text-center font-bold text-black pl-1" > Django App</h1>
      <p  className="mx-auto text-base"></p>
      </a>
        <div class=" bg-opacity-40 shadow-2xl bg-[#242484] rounded-lg relative">
          <img class="h-60 rounded w-full object-cover object-center mb-6 flex flex-wrap content-center" src="./public/image_1.jpg" alt="content"/>
          
        </div>
      </div>
      </div>
      {/** */}
     
      <div class="xl:w-1/4 md:w-1/2 p-4  ">
      <div class="relative ">
    <a class="absolute inset-0 z-10 bg-white text-center flex  items-center justify-center opacity-0 hover:opacity-50 bg-opacity-90 duration-300" href=''>
      <h1  class="tracking-wider text-2xl text-center font-bold text-black pl-1" > Django App</h1>
      <p  className="mx-auto text-base"></p>
      </a>
        <div class=" bg-opacity-40 shadow-2xl bg-[#242484] rounded-lg relative">
          <img class="h-60 rounded w-full object-cover object-center mb-6 flex flex-wrap content-center" src="/img_4.jpg" alt="content"/>
          
        </div>
      </div>
      </div>

     
     
    </div>
  </div>
</div>
         </div>
         

    </div>
    </div>
  )
}


export default Project


