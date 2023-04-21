import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";

const ContactSection = () => {
    
  return (
    <div>
      <div className="text-center py-6 mx-8 ">
        <h1 className="text-2xl font-bold text-black">Reach out to me</h1>
        <p className="text-gray-600">
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
