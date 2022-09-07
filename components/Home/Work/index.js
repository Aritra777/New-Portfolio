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
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est. Ipsum dolore cillum enim reprehenderit id exercitation. Incididunt nulla exercitation reprehenderit non cillum officia consectetur velit officia esse fugiat esse eiusmod. Duis sit sit commodo proident ipsum incididunt incididunt dolor veniam.",
    img_src: "/assets/target.png",
  },
  {
    title: "Title 2",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est. Ipsum dolore cillum enim reprehenderit id exercitation. Incididunt nulla exercitation reprehenderit non cillum officia consectetur velit officia esse fugiat esse eiusmod. Duis sit sit commodo proident ipsum incididunt incididunt dolor veniam.",
    img_src: "#",
  },
  {
    title: "Title 3",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est. Ipsum dolore cillum enim reprehenderit id exercitation. Incididunt nulla exercitation reprehenderit non cillum officia consectetur velit officia esse fugiat esse eiusmod. Duis sit sit commodo proident ipsum incididunt incididunt dolor veniam.",
    img_src: "#",
  },
  {
    title: "Title 4",
    subTitle: "Sub Title",
    description:
      "Ea adipisicing irure proident voluptate laborum nisi qui adipisicing do ullamco consectetur. Labore non minim sit et ea nostrud fugiat nulla. Laborum sit eu aliqua ipsum excepteur mollit officia elit elit. Cillum occaecat Lorem commodo nostrud et fugiat est. Ipsum dolore cillum enim reprehenderit id exercitation. Incididunt nulla exercitation reprehenderit non cillum officia consectetur velit officia esse fugiat esse eiusmod. Duis sit sit commodo proident ipsum incididunt incididunt dolor veniam.",
    img_src: "#",
  },
];

function Work() {
    useEffect(() => {
        AOS.init({
          duration : 2000,
        //   anchorPlacement: "center-center",
          startEvent:"Project_Card" ,
        once: false
          
        });
      }, []);
  return (
    <div className="w-full h-[100vh] my-20 border border-black relative">
      <div className="w-full text-center py-12">
        <p className="sub_heading">Work</p>
        <p className="main_heading">Explore My work</p>
      </div>
    {/* <div className="absolute bottom-0 left-0 w-full h-1/2 swiper_shadow z-20" ></div> */}
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
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
