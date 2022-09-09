import Script from "next/script";
import React, { useEffect, useRef, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import Link from 'next/link'
 
function Navbar() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

  return (
    <>
    <div className={`py-2 fixed backdrop-blur-sm left-0 right-0 top-0 z-[100000] transition-all duration-500 ${
        typeof window !== 'undefined' && scrollPosition >= screen.height - 100
          ? 'backdrop-blur-md bg-mainBg-800/70 text-violate-300 shadow-md top-0'
          : ' bg-transparent -top-1000'
      }`}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center  mb-4 md:mb-0">
          <span className="ml-3 text-xl text_fill">
            <Link href="/" >
            <a>
              Aritra Biswas
            </a>
            </Link>
            </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="#about">
          <a className="mr-5 hover:text-gray-900">About</a>
          </Link>
          <Link href="#work">
          <a className="mr-5 hover:text-gray-900">Work</a>
          </Link>
          <Link href="#contact">
          <a className="mr-5 hover:text-gray-900">Contact</a>
          </Link>
        <div className="flex text-xl gap-4">
          <Link href="https://github.com/Aritra777" >
          <a>
            <AiFillGithub />
          </a>
          </Link>
          <Link href="https://www.linkedin.com/in/aritra-biswas-13718b228/" >
          <a>
            <AiFillLinkedin />
          </a>
          </Link>
        </div>
        </nav>
      </div>
    </div>
    </>
  );
}

export default Navbar;
