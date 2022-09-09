import React from "react";

function About() {
  return (
    <div>
      <section
        id="about"
        className="bg-mainBg-800 text-fadeText body-font h-[100vh] w-full grid md:grid-cols-2 grid-cols-1"
      >
        <div>
          <img
            src="/assets/profile.jpg"
            alt="photo"
            className="border border-black w-full h-[100vh] object-cover"
          />
        </div>
        <div className="flex justify-center pl-10 flex-col gap-4">
          <p className="sub_heading" data-aos="fade-left">
            {" "}
            About{" "}
          </p>
          <p className="main_heading mb-4" data-aos="fade-left">
            A Little About Myelf :
          </p>
          <p className="md:text-lg md:max-w-4xl text-fadeText " data-aos="fade-left">
            Hello, I'm Aritra Biswas. As you already know from my introductory
            page, I'm a Full Stack Web Developer. But there is more of me to know
            about. I'm a Indian from birth. It had been my dream to design to
            websites since I was a kid. Just kidding. Web Designing has been a
            recent compassion of mine, but by far, it is the one I most excell
            at. I always have a passion to build things.So, now, here I
            am in college, second year, trying to build my skills and knowledge
            on this advanced sector. I may be still developing, but my works
            are sincere and authentic and are made as appealing as possible. I
            hope I will be successful in captivating you with my projects.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
