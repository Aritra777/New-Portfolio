import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Link from 'next/link'

function Project_Card({ title, subTitle, description, img_src }) {
  const [showDetails, setShowDetails] = useState(false);
  const detailsDiv = useRef(null);

  useEffect(() => {
    detailsDiv.current.addEventListener("mouseover", () => {
      setShowDetails(true);
    });
    detailsDiv.current.addEventListener("mouseout", () => {
      setShowDetails(false);
    });
  }, []);

  return (
    <div className="p-10 h-[90vh] flex flex-col justify-center relative overflow-hidden" ref={detailsDiv}>
      <div className="w-full h-full absolute top-0 left-0 -z-20 bg-black/70"></div>
      <img
        src={img_src}
        alt="project_photo"
        className={` ${showDetails ? "scale-125" : "w-full h-full"} transition-all duration-500 absolute top-0 left-0 -z-30`}
      />
      <div
        className={`flex flex-col gap-4 text-white z-10 ${showDetails ? "h-96" : "h-40" } transition-all duration-700 overflow-hidden`}
        
      >
        <p className={`md:text-8xl`}>{title}</p>
        <p className="md:text-3xl">{subTitle}</p>
            <p className="md:max-w-2xl text-base">{description}</p>
            <Button
              variant="contained"
              className="w-fit px-4 py-2 hover:px-5 transition-all "
            >
              <Link href="#">
                <a className="text-white no-underline hover:no-underline">
                  Show
                </a>
              </Link>
            </Button>
      </div>
    </div>
  );
}

export default Project_Card;
