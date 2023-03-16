import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Project_Card from "./Project_Card";

const projects = [
  {
    title: "Tint and Orange",
    subTitle: "Tint&Orange is one of India's best Car Care brands.",
    description:
      "Tint&Orange is one of India's best Car Care brands aiming to revolutionize the ways automobiles can be taken care of! The company was established in 2019 and is ISO 9001: 2015 certified.",
    contributions:
    `- Improved website speed by implementing Next.js, resulting in a 25% reduction in load time.
- Streamlined user interface, resulting in a 40% decrease in bounce rate and a 15% increase in session duration.
- Collaborated with design and content teams to develop 8+ dynamic pages, enhancing user engagement and website functionality.
    `,
    img_src: "/assets/Projects/Tintandorange_Website_FrontSC.png",
    pLink:"https://www.tintandorange.com/",
    stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
  },
//   {
//     title: "T&O Dashboard",
//     subTitle: "Management system for Tint and Orange",
//     description:
//       "Tint&Orange is one of India's best Car Care brands aiming to revolutionize the ways automobiles can be taken care of! The company was established in 2019 and is ISO 9001: 2015 certified.",
//     contributions:
//     `- Improved website speed by implementing Next.js, resulting in a 25% reduction in load time.
// - Streamlined user interface, resulting in a 40% decrease in bounce rate and a 15% increase in session duration.
// - Collaborated with design and content teams to develop 8+ dynamic pages, enhancing user engagement and website functionality.
//     `,
//     img_src: "/assets/Projects/Tintandorange_dashboard.png",
//     pLink:"https://dashboard.tintandorange.com/",
//     stackUsed: ["Next.js", "Tailwind CSS", "Strapi"],
//   },
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
    contributions: `- Manual authentication system for users to log in and access the site's features
- User routes with different access levels, such as admin and sub-admin panels
- An event registration system for users to sign up for upcoming events
- Information pages about the college coding club and its activities` ,
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
                contributions={item.contributions}
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
