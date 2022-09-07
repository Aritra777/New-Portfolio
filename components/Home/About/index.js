import React from "react";

function About() {
  return (
    <div>
      <section className="text-gray-600 body-font h-[100vh] w-full grid md:grid-cols-2 grid-cols-1">
        <div>
          <img
            src="#"
            alt="photo"
            className="border border-black w-full h-[100vh]"
          />
        </div>
        <div className="flex justify-center pl-10 flex-col gap-4">
          <p className="sub_heading"> About </p>
          <p className="main_heading mb-4">Main Heading</p>
          <p className="md:text-lg md:max-w-4xl  ">
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
