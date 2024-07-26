import React from "react";
//motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// img
import Img1 from "../assets/wordle.png";
// import Img1 from '../assets/gh-page.jpg';
// import Img1 from '../assets/portfolio-img1.png';
import Img2 from "../assets/color-tracing.jpg";
// import Img2 from '../assets/portfolio-img2.png';
import Img3 from "../assets/ai-image-generator.jpg";
// import Img3 from '../assets/gh-page-2.jpg';
// import Img3 from '../assets/portfolio-img3.png';

const projects = [
  {
    id: 1,
    type: "Software Engineering",
    title: "Full-stack Application - Wordle",
    img: Img1,
    link: "https://michaeldang.dev/wordle/",
  },
  {
    id: 2,
    type: "Machine Learning",
    title: "Computer Vision - Object Detection",
    img: Img2,
    link: "https://github.com/michaelvdang/OpenCV-color-tracing",
  },
  {
    id: 3,
    type: "Software Engineering",
    title: "Full-stack Application - OpenAI Image Generator",
    img: Img3,
    link: "https://github.com/michaelvdang/openAI-image-generator",
  },
];

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="mb-6">
              <h2 className="h2 leading-tight text-accent">
                Recent Project <br />
                Showcase
              </h2>
              <p className="max-w-sm mb-16">
                Explore my recent projects, ranging from web development to
                machine learning
              </p>
              <a href="https://github.com/michaelvdang">
                <button className="btn btn-lg">View all projects</button>
              </a>
            </div>
            {/* image */}
            <a href={projects[0].link} alt='Michael Dang'>
              <div
                className="group relative overflow-hidden border-2
              border-white/50 rounded-xl"
              >
                {/* overlay */}
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute
                  transition-all duration-300 z-10"
                ></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-300"
                  src={projects[0].img}
                  alt="Michael Dang"
                  // alt={projects[0].title}
                />
                {/* pretitle */}
                <div
                  className="absolute top-full left-12 group-hover:top-24
                transition-all duration-500 z-20"
                >
                  <span className="text-gradient">{projects[0].type}</span>
                </div>
                {/* title */}
                <div
                  className="absolute top-full left-12 group-hover:top-32
                transition-all duration-700 z-20"
                >
                  <span className="text-3xl text-white">
                    {projects[0].title}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            {/* image */}
            {/* <a href={projects[1].link}> */}
            <div
              className="group relative overflow-hidden border-2
            border-white/50 rounded-xl"
            >
              <iframe
                width="100%"
                height="340"
                src="https://www.youtube.com/embed/Dlicha5EqDw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen="true"
              ></iframe>
              {/* overlay */}
              {/* <div className='group-hover:bg-black/70 w-full h-full absolute
                z-10 transition-all duration-300'></div> */}
              {/* img */}
              {/* <img 
                className='group-hover:scale-125 transition-all duration-300' 
                src={projects[1].img} 
                alt={projects[1].title} /> */}
              {/* pretitle */}
              {/* <div className='absolute top-full left-12 group-hover:top-24
                z-20 transition-all duration-500'>
                <span className='text-gradient'>
                  {projects[1].type}
                </span>
              </div> */}
              {/* title */}
              {/* <div className='absolute top-full left-12 group-hover:top-32
                z-20 transition-all duration-700'>
                <span className='text-3xl text-white'>{projects[1].title}</span>
              </div> */}
            </div>
            {/* </a> */}
            {/* image */}
            <a href={projects[2].link}>
              <div
                className="group relative overflow-hidden border-2
              border-white/50 rounded-xl"
              >
                {/* overlay */}
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute
                z-10 transition-all duration-300"
                ></div>
                {/* img */}
                <img
                  className="group-hover:scale-125 transition-all duration-300"
                  src={projects[2].img}
                  alt="Michael Dang"
                  // alt={projects[2].title}
                />
                {/* pretitle */}
                <div
                  className="absolute top-full left-12 group-hover:top-24
                z-20 transition-all duration-500"
                >
                  <span className="text-gradient">{projects[2].type}</span>
                </div>
                {/* title */}
                <div
                  className="absolute top-full left-12 group-hover:top-32
                z-20 transition-all duration-700"
                >
                  <span className="text-3xl text-white">
                    {projects[2].title}
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
