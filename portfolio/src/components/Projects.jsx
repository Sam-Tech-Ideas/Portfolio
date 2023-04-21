import Image from 'next/image';
import React from 'react'

const Projects = () => {
  
  const portfolio = [
    {
      id: 1,
      description: "Lawyers' landing page with a contact form and a blog.",
      stacks: "React, Tailwind, Vercel",
      url: "https://lawyer-project.vercel.app/",
      image: "/law.png",
    },

    {
      id: 2,
      description:
        "A nice looking Bootsrtap 5 portfolio site  for my students to practice their skills",
      stacks: " HTML, CSS, Bootstrap5, Vercel",
      url: "https://portfolio-bootstrap-one.vercel.app/",
      image: "/portfolio.png",
    },

    {
      id: 3,
      description: "A hospital react native app for booking appointments",
      stacks: " React Native and Tailwindcss",
      url: "",
      image: "/hosp.png",
    },

    {
      id: 4,
      description:
        "A simple flutter app for a doctors with splash screens and onboarding screens ",
      stacks: "Flutter ",
      url: "https://github.com/Sam-Tech-Ideas/medics_app",
      image: "/medics.jpg",
    },

    {
      id: 5,
      description: "",
      stacks: "",
      url: "",
      image: "",
    },

    {
      id: 6,
      image: "",
      description: "",
      stacks: "",
      url: "",
    },
  ];
  return (
    <div id='project'>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-8 mx-auto">
          <div class="flex flex-col text-center w-full mb-4">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Creative Portfolio Projects
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              Discover my passion for design and development.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {
              portfolio.map((project) => {

                return (
                  <div class="lg:w-1/3 sm:w-1/2 p-4">
                    <div class="flex relative z-0">
                      <Image
                        placeholder="blur"
                        blurDataURL={project.image}
                        layout="fill"
                        alt="gallery"
                        class="absolute inset-0 w-full h-full object-cover object-center "
                        src={project.image}
                      />
                      <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                          {project.stacks}
                        </h1>
                        <p class="leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            }

          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projects


// Creative Portfolio: 
