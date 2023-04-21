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
        class:"text-yellow-500",
        name:"Python"


    },

    {
        id: 2,
        icon: <FaReact size={40} />,
        class:"text-blue-500",
        name:"React"
    },

    {
        id: 3,
        icon: <RiFlutterFill size={40} />,
        class:"text-blue-500",
        name:"Flutter"
    },

    {
        id: 4,
        icon: <FaHtml5 size={40} />,
        class:"text-yellow-500",
        name:"HTML"
    },

    {
        id: 5,
        icon: <FaCss3 size={40} />,
        class:"text-blue-500",
        name:"CSS"
    },

    {
        id: 6,
        icon: <SiDjango size={40} />,
        class:"text-green-500",
        name:"Django"
    },

    {
        id: 7,
        icon: <SiRedux size={40} />,
        class:"text-purple-500",
        name:"Redux"
    },

    {
        id: 8,
        icon: <FaBootstrap size={40} />,
        class:"text-purple-500",
        name:"Bootstrap"
    },

    {
        id: 9,
        icon: <SiTailwindcss size={40} />,
        class:"text-blue-500",
        name:"Tailwind",

    },

    {
        id: 10,
        icon: <SiPostgresql size={40} />,
        class:"text-blue-500",
        name:"PostgreSQL"
    },

    {
        id: 11,
        icon: <SiFirebase size={40} />,
        class:"text-yellow-500",
        name:"Firebase"
    },

    {
        id: 12,
        icon: <FaNode size={40} />,
        class:"text-green-500"  ,
        name:"Node"

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
          <div class="flex flex-wrap -m-4 text-center justify-center items-center">
            {
                skill.map((item) => {
                    return (
                      <Tooltip
                        content={item.name}
                        animate={{
                          mount: { scale: 1, y: 0 },
                          unmount: { scale: 0, y: 25 },
                        }}
                      >
                        <div class="p-4 md:w-1/6 sm:w-1/3 ">
                          <div class={item.class}>{item.icon}</div>
                        </div>
                      </Tooltip>
                    );
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
     
//     >
//       <Button variant="gradient">Show Tooltip</Button>
//     </Tooltip>