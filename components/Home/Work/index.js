import React, { useEffect, useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import Project_Card from "./Project_Card";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  // {
  //   title: "Title 1",
  //   subTitle: "Sub Title",
  //   description:
  //     "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
  //   img_src: "/assets/Projects/target.png",
  //   pLink:"#"
  // },
  {
    title: "Breaking Copyright",
    subTitle: "A website to manage musics",
    description:
      "Breaking Copyright is like a music lybrary where you have all types of musics at the same place. Here One can search music or sort music by their artist/category names.",
    img_src: "/assets/Projects/breaking.jpg",
    pLink: "https://breakingcopyright.vercel.app/",
    stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
  },
  {
    title: "AECCC",
    subTitle: "Event Management System",
    description:
      "This a website for our college coding club. Here a normal user can see upcoming events and can register in them and can also view info about the club. It has authetication, admin panel, sub_admin panel and many more features. ",
    img_src: "/assets/Projects/aeccc.jpg",
    pLink: "https://testaeccc.web.app/",
    stackUsed: ["React.js", "Express.js", "MongoDB"]
  },
  {
    title: "Stem MicroSystem",
    subTitle: "Website for Organisation",
    description:
      "This is a multipage website made in Next.js for frontend and strapi was used as CMS.",
    img_src: "/assets/Projects/stem.jpg",
    pLink: "https://new-stem-microsystems-frontend.vercel.app/",
    stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
  },
  {
    title: "CMC Dealer",
    subTitle: "",
    description:
      "A website for a car company where a you can view their various cars and their secification and choose on basis of your choice",
    img_src: "/assets/Projects/cmcdealer.jpg",
    pLink: "https://cmcdealer.vercel.app/",
    stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
  },
  // {
  //   title: "Title 6",
  //   subTitle: "Sub Title",
  //   description:
  //     "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
  //   img_src: "/assets/Projects/agcars.jpg",
  //   pLink: "https://agcars-frontend.vercel.app/",
  //   stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
  // },
];

function Work() {
  return (
    <div className="mx-auto w-full relative" id="work">
      <div className="w-full text-center py-12">
        <p className="sub_heading">Work</p>
        <p className="main_heading">Explore My work</p>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="">
        {projects.map((item, i) => {
          const { title, subTitle, description, img_src, pLink, stackUsed } = item;
          return (
            <SwiperSlide key={i}>
              <Project_Card
                title={title}
                subTitle={subTitle}
                description={description}
                img_src={img_src}
                pLink={pLink}
                stackUsed={stackUsed}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Work;
