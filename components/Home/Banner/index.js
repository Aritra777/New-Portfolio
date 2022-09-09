import React from "react";
import Typed from "typed.js";
import { useParallax } from "react-scroll-parallax";

export default function Banner() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  // For Paralax
  // const line1 = useParallax({
  //   speed: 10,
  //   translateX: ["-280px" , "100px"],
  // });
  const line1 = useParallax({
    speed: 10,
    translateX: ["250px", "-200px"],
  });
  const line2 = useParallax({
    speed: 10,
    translateX: ["-200px", "300px"],
  });

  React.useEffect(() => {
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
    <section className="text-black pt-20 md:pt-0 body-font h-screen grid place-items-center overflow-hidden">
      <div className="container py-10 mx-auto text-center">
        <div className="font-bold text-base xl:text-xl">
          Hii, I am Aritra,
        </div>
        <div ref={line1.ref} className="sm:text-4xl xl:text-9xl md:text-8xl text-3xl">
          I&apos;m a
        </div>
        <div ref={line2.ref} className="sm:text-4xl xl:text-9xl md:text-8xl text-3xl">
          <span ref={el}>Web Developer</span>
        </div>
        <p className="text-gray-600 pt-8 md:text-xl leading-relaxed">
            Building stuff in web | Making web more fast and interactive
          </p>
      </div>
    </section>
  );
}
