import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaJs, FaJsSquare, FaNode, FaPython, FaReact} from 'react-icons/fa'
import { SiDjango, SiFirebase, SiFlask, SiMongodb, SiMysql, SiPostgresql, SiRedux, SiTailwindcss, SiTypescript } from 'react-icons/si'
import {RiFlutterFill} from 'react-icons/ri'
import { Tooltip } from '@material-tailwind/react'

const Skills = () => {
const skill = [
    {
        id: 1,
        icon: <FaPython size={40} />,

    },

    {
        id: 2,
        icon: <FaReact size={40} />,
    },

    {
        id: 3,
        icon: <RiFlutterFill size={40} />,
    },

    {
        id: 4,
        icon: <FaHtml5 size={40} />,
    },

    {
        id: 5,
        icon: <FaCss3 size={40} />,
    },

    {
        id: 6,
        icon: <SiDjango size={40} />,
    },

    {
        id: 7,
        icon: <SiRedux size={40} />,
    },

    {
        id: 8,
        icon: <FaBootstrap size={40} />,
    },

    {
        id: 9,
        icon: <SiTailwindcss size={40} />,
    },

    {
        id: 10,
        icon: <SiPostgresql size={40} />,
    },

    {
        id: 11,
        icon: <SiFirebase size={40} />,
    },

    {
        id: 12,
        icon: <FaNode size={40} />,
    }

]
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-6 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Unlocking Possibilities with Versatile Skills
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                Experience in modern web and mobile development technologies and programming languages, I am able to deliver a wide range of solutions to meet your needs.
        

            </p>
          </div>
          <div class="flex flex-wrap -m-4 text-center">
            {
                skill.map((item) => {
                    return (
                        <div class="p-4 md:w-1/6 sm:w-1/3 ">
                            <div class=" px-4 py-6 rounded-lg">
                                {item.icon}
                            </div>
                        </div>
                    )
                }
                )
            }

           


          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills


//  <Tooltip
//       content="Material Tailwind"
//       animate={{
//         mount: { scale: 1, y: 0 },
//         unmount: { scale: 0, y: 25 },
//       }}
//     >
//       <Button variant="gradient">Show Tooltip</Button>
//     </Tooltip>