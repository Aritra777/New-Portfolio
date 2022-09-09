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
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const projects = [
  {
    title: "Title 1",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/target.png",
  },
  {
    title: "Title 2",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/breaking.jpg",
  },
  {
    title: "Title 3",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/aeccc.jpg",
  },
  {
    title: "Title 4",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/stem.jpg",
  },
  {
    title: "Title 5",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/cmcdealer.jpg",
  },
  {
    title: "Title 6",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est.",
    img_src: "/assets/Projects/agcars.jpg",
  },
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
            const {title , subTitle, description, img_src} = item
            return(
                <SwiperSlide key={i}>
                    <Project_Card title={title} subTitle={subTitle} description={description} img_src={img_src} />
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
}

export default Work;
