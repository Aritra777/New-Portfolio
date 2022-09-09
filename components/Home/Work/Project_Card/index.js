import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
    <Link href="#">
      <a>
          <div
            className="md:p-10 p-2 md:h-[90vh] h-[50vh] flex flex-col justify-center relative overflow-hidden"
            ref={detailsDiv}
            >
                <div className="w-full h-full absolute top-0 left-0 -z-20 bg-mainBg-800/70"></div>
                <img
                  src={img_src}
                  alt="project_photo"
                  className={` ${
                    showDetails && "scale-125"
                  } w-full h-full object-cover transition-all duration-500 absolute top-0 left-0 -z-30`}
                  />
                <div
                  className={`flex flex-col md:gap-4 gap-2 text-white z-10 ${
                    showDetails ? "md:h-96 h-80" : "lg:h-40 md:h-32 h-20"
                  } transition-all duration-700 overflow-hidden`}
                >
                  <p className={`lg:text-8xl md:text-7xl text-3xl`}>{title}</p>
                  <p className="lg:text-3xl md:text-4xl text-xl">{subTitle}</p>
                  <p className="lg:max-w-2xl md:text-xl text-sm">{description}</p>
                </div>
          </div>
        </a>
      </Link>
  );
}

export default Project_Card;
