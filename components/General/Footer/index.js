import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto w-full flex justify-between items-center space-y-4 md:space-y-0 sm:flex-row flex-col">
        <div className="flex flex-col md:flex-row">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Aritra Biswas</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Made With ❤️ by Aritra Biswas
          </p>
        </div>
        <div className="flex text-xl gap-4">
          <Link href="https://github.com/Aritra777">
          <a>
            <AiFillGithub />
          </a>
          </Link>
          <Link href="https://www.linkedin.com/in/aritra-biswas-13718b228/">
          <a>
            <AiFillLinkedin />
          </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
