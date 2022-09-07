import React from 'react'
import Typed from 'typed.js';

export default function Banner() {

// Create reference to store the DOM element containing the animation
const el = React.useRef(null);
// Create reference to store the Typed instance itself
  const typed = React.useRef(null);

React.useEffect(() => {
  const options = {
      strings: [
      'Web Developer',
      'Freelancer',
    //   'HTML characters &times; &copy;'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  };
  
  // elRef refers to the <span> rendered below
  typed.current = new Typed(el.current, options);
  
  return () => {
    // Make sure to destroy Typed instance during cleanup
    // to prevent memory leaks
    typed.current.destroy();
  }
}, [])
    
  return (
    <section className="text-gray-600 body-font h-[100vh] grid place-items-center">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl md:text-9xl text-3xl mb-4 font-medium text-gray-900">Hii, I&apos;am a <br/> <span className='whitespace-pre' ref={el} > Web Developer </span> </h1>
        <p className="mb-8 md:text-xl leading-relaxed">Building stuff in web | Making web more fast and interactive </p>
      </div>
    </div>
    </section>
  )
}
