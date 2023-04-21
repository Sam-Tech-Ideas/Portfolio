import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactSection = () => {
    
  return (
    <div id="contact">
      <div class="flex flex-col text-center w-full mb-4">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Reach out to me
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Need to get in touch? Feel free to contact me via phone or email.
        </p>
      </div>
     

      <div className="flex items-center justify-center space-x-8">
        <Link href="tel:+233559911251" className="text-teal-400">
          <FiPhone size={40} />
        </Link>
        <Link href="mailto:powersam360@gmail.com" className="text-red-300">
          <FiMail size={40} />
        </Link>
        <Link href="mailto:" className="text-green-500">
          <FaWhatsapp size={40} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/samuel-agyemang-184445206/

"
          target="_blank"
          className="text-blue-500"
        >
          <FaLinkedin size={40} />
        </Link>
        <Link
          href="https://twitter.com/IdeasSamtech"
          target="_blank"
          className="text-blue-500"
        >
          <FaTwitter size={40} />
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
