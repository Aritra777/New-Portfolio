import React from "react";

function About() {
  return (
    <div>
      <section id="about" className="bg-mainBg-800 text-fadeText body-font h-[100vh] w-full grid md:grid-cols-2 grid-cols-1">
        <div>
          <img
            src="/assets/profile.jpg"
            alt="photo"
            className="border border-black w-full h-[100vh] object-cover"
          />
        </div>
        <div className="flex justify-center pl-10 flex-col gap-4">
          <p className="sub_heading" data-aos="fade-left"> About </p>
          <p className="main_heading mb-4" data-aos="fade-left">Main Heading</p>
          <p className="md:text-lg md:max-w-4xl  " data-aos="fade-left">
            Duis et Lorem proident eiusmod excepteur voluptate culpa elit nisi
            aliquip sint elit esse sint. Adipisicing exercitation nulla et elit
            exercitation minim labore eu nostrud consequat consectetur deserunt
            anim. Laborum reprehenderit magna voluptate ut tempor voluptate
            magna consequat.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
