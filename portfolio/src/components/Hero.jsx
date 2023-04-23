import { Button } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="about">
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am a Software Developer
            </h1>
            <p class="mb-8 leading-relaxed">
              Meet
              <span className="font-bold  text-teal-600"> Samuel Agyemang</span>
              , a talented computer scientist and software developer passionate
              about creating effective technological solutions. With an eye for
              detail and a dedication to excellence, Samuel has helped countless
              clients bring their visions to life. Ready to take on any
              challenge, Samuel is committed to delivering high-quality work
              that exceeds expectations and inspires others to do their best.
              Let's work together to create something amazing.
            </p>
            <div class="flex w-full md:justify-start justify-center items-end">
              <button class="inline-flex text-white bg-green-300 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded text-lg">
                <a href="#contact">Hire Me!</a>
              </button>
              <a href="/resume.docx" download>
                <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Download resume
                </button>
              </a>
            </div>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              width={400}
              height={200}
              class="object-cover object-center rounded"
              alt="hero"
              src="/Programming.gif"
              blurDataURL="/Programming.gif"
              placeholder="blur"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;

{/* <div class="pt-12 border-t-2 border-gray-100 text-center">
  <a
    class="relative group inline-block py-4 px-7 font-semibold text-orange-900 hover:text-orange-50 rounded-full bg-orange-50 transition duration-300 overflow-hidden"
    href="#"
  >
    <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
    <span class="relative">See More Articles</span>
  </a>
</div>; */}