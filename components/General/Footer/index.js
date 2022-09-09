import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl">Aritra Biswas</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          Made With ❤️ by
            Aritra Biswas
        </p>
        <div className="flex text-xl gap-4">
          <Link href="#">
          <a>
            <AiFillGithub />
          </a>
          </Link>
          <Link href="#">
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
