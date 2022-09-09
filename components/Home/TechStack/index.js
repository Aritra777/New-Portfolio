import React, { useState } from "react";

const stacks = [
  {
    name: "HTML",
    area: "Frontend",
    img: "html5.svg"
  },
  {
    name: "CSS",
    area: "Frontend",
    img: "css3.svg"
  },
  {
    name: "JAVASCRIPT",
    area: "Frontend, Backend",
    img: "javascript.svg"
  },
  {
    name: "Tailwind CSS",
    area: "Frontend",
    img: "tailwind.svg"
  },
  {
    name: "React.js",
    area: "Frontend",
    img: "react.svg"
  },
  {
    name: "Next.js",
    area: "Frontend",
    img: "nextjs.svg"
  },
  {
    name: "Redux",
    area: "Frontend",
    img: "redux.svg"
  },
  {
    name: "Node.js",
    area: "Backend",
    img: "nodejs.svg"
  },
  {
    name: "Express.js",
    area: "Backend",
    img: "express.svg"
  },
  {
    name: "MongoDB",
    area: "Backend",
    img: "mongodb.svg"
  },
  {
    name: "Mongoose",
    area: "Backend",
    img: "mongoose.jpeg"
  },
  {
    name: "Strapi",
    area: "CMS",
    img: "strapi.jpeg"
  },
  {
    name: "Firebase",
    area: "Backend",
    img: "firebase.svg"
  },
  {
    name: "Vercel",
    area: "Deployment",
    img: "vercel.jpeg"
  },
  {
    name: "Heroku",
    area: "Deployment",
    img: "heroku.svg"
  },
  {
    name: "Git",
    area: "",
    img: "git.svg"
  },
  {
    name: "Github",
    area: "",
    img: "github.jpeg"
  },
  {
    name: "VsCode",
    area: "IDE",
    img: "vscode.jpeg"
  },
];

function TechStack() {
  const [stacklen, setStacklen] = useState(12)
  const handleLength = () => {
    if(stacklen != stacks.length){
      setStacklen(stacks.length)
    }
    else{
      setStacklen(12)
    }
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sub_heading">Tech Stacks</h1>
          <p className="main_heading">Tech Stacks that I am familier with</p>
        </div>
        <div className="flex flex-wrap -m-2">
          {stacks.slice(0,stacklen).map((stack, i) => {
            const { name, area,img } = stack;
            return (
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={i}>
                <div className={`h-full flex items-center border-gray-200 border p-4 rounded-lg text-black `}>
                  <img
                    alt="stack"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={`/assets/TechStacks/${img}`}
                  />
                  <div className="flex-grow">
                    <h2 className=" title-font font-medium">
                      {name}
                    </h2>
                    <p className="">{area}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <p className="w-full pt-6 text-xs md:text-sm text-center text-mainBg-300 " onClick={handleLength} >{stacklen == stacks.length ? "Show Less..." : "Show All..."}</p>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
