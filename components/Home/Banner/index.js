import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { useParallax } from "react-scroll-parallax";

export default function Banner() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);
  // Create reference to store the Typed instance itself
  const typed = useRef(null);

  // For Paralax
  const line1 = useParallax({
    speed: 10,
    translateX: ["250px", "-200px"],
  });
  const line2 = useParallax({
    speed: 10,
    translateX: ["-220px", "300px"],
  });

  useEffect(() => {
    const options = {
      strings: [
        "Web Developer",
        "Freelancer",
        //   'HTML characters &times; &copy;'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <section className="relative pt-20 md:pt-0 body-font h-screen grid place-items-center overflow-hidden">
      <div className="h-full w-1/2 absolute top-0 left-0 bg-mainBg-800" ></div>
      <div className="container py-10 mx-auto text-center z-40">
        <div className="font-bold text-base xl:text-xl text_fill">
         Hii, I am Aritra,
        </div>
        <div ref={line1.ref} className="xl:text-9xl md:text-8xl sm:text-[4.5rem] text-5xl md:w-full w-[92%] text_fill">
          I&apos;m a
        </div>
        <div ref={line2.ref} className="xl:text-9xl md:text-8xl sm:text-[4.5rem] text-5xl text_fill ">
          <span ref={el} className="font-sans" ></span>
        </div>
        <p className="text-violate-300 pt-8 md:text-xl leading-relaxed">
            Building stuff in web | Making web more fast and interactive
          </p>
      </div>
    </section>
  );
}
