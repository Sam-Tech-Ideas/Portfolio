import { Typography } from "@material-tailwind/react";
import Link from "next/link";
import { FaArrowAltCircleUp, FaGithub } from "react-icons/fa";
import { animateScroll } from "react-scroll";

export default function Footer() {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-center">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span class="ml-3 text-xl">SamTechIdeas</span>
        </a>

        <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Made with ❤️ by SamTechIdeas
        </p>
        <div className="p-4">
          <Link href="https://github.com/Sam-Tech-Ideas">
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
      <div>
        <a  className=""
          onClick={() =>
            animateScroll.scrollToTop({ duration: 500, offset: -50 })
          }
        >
          <FaArrowAltCircleUp size={40} className="text-teal-300 fixed right-2 bottom-5" />
        </a>
      </div>
    </footer>
  );
}
