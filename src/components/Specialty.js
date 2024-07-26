import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import {Link} from 'react-scroll';

// specialties data
const specialties = [
  {
    name: 'Full-Stack Development',
    // microservices, RESTful APIs, algorithms, data structures, databases, and more
    description: 'I possess expertise in microservices architecture, RESTful API development, and proficiency in SQL and NoSQL databases, coupled with a strong foundation in algorithms and data structures.',
    // description: 'I am a passionate software engineer driven by the challenge of building innovative solutions, leveraging my expertise in coding and problem-solving to create impactful and efficient software applications.',
    link: 'https://github.com/michaelvdang',
  },
  {
    name: 'Teamwork and Collaboration',
    // agile development, communication, documentation, and more
    description: 'I thrive in collaborative environments, leveraging Agile practices to streamline teamwork. My strong communication skills, coupled with my ability to create comprehensive documentation, facilitate seamless collaboration and project success.',
    // description: 'I am a team player with a strong work ethic, able to collaborate effectively with others to achieve shared goals and objectives.',
    link: '',
  },
  {
    // problem solving and adaptability
    name: 'Problem Solving and Adaptability',
    description: 'I excel in problem-solving and adaptability, consistently tackling complex challenges with creative solutions. My ability to adapt to evolving situations makes me an asset in dynamic environments.',
    // description: 'I am a creative problem solver with a passion for learning, able to adapt quickly to new environments and technologies to deliver exceptional results.',
    link: '',
  },
  // {
  //   name: 'UI/UX Design',
  //   description: 'I am dedicated to crafting user-centric designs that harmoniously blend aesthetics and functionality, aiming to create intuitive and memorable digital experiences.',
  //   // description: 'I am passionate about creating intuitive and visually engaging user experiences that seamlessly blend aesthetics and functionality. With a keen eye for detail and a deep understanding of user-centered design principles, I aim to craft interfaces that not only meet users\' needs but also delight and inspire.',
  //   link: 'https://github.com/michaelvdang',
  // },
  // {
  //   name: 'Machine Learning',
  //   description: 'I am an aspiring data scientist with a keen interest in machine learning, eager to leverage data-driven approaches to solve real-world problems and uncover meaningful patterns.',
  //   link: 'https://github.com/michaelvdang',
  // },
  {
    name: 'Frameworks and Languages',
    description: `Frameworks: Reactjs, Expressjs, FastAPI, MariaDB, MongoDB, Redis, Git, Numpy, Pandas, OpenCV, Tensorflow
    Languages: C++, Python, SQL, HTML, CSS, JavaScript`,
    // name: 'Computer Programming',
    // description: 'I am an enthusiastic computer programmer dedicated to crafting clean and optimized code to bring ideas to life and solve complex challenges.',
    link: 'https://github.com/michaelvdang',
  },
]

const Specialties = () => {
  return (
  <section className='section' id='specialty'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        {/* text & image */}
        <motion.div 
          variants={fadeIn('right', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat 
          mix-blend-lighten mb-12 lg:mg-0'
        >
          <h2 className='h2 text-accent mb-6'>Areas of Expertise</h2>
          <h3 className='h3 max-w-[455px] mb-16'>
          Aspiring Software Engineer Seeking Opportunities to Innovate and Build Exceptional Digital Solutions
          {/* Software engineer adept in coding and problem-solving, driven to 
          create efficient and impactful solutions for a dynamic tech landscape */}
          {/* Proficient in C++, Python, SQL, and web development technologies 
          (React, Expressjs, FastAPI), backed by a strong understanding of 
          algorithms and data structures. */}
          </h3>
          <Link 
            to='contact' 
            activeClass='active'
            smooth={true}
            spy={true}
            alt='Michael Dang'
            // offset={-200}
            className='cursor-pointer w-[60px] h-[60px]'>
            <button href="#contact" className='btn btn-lg'>
              Contact me</button>
          </Link>

        </motion.div>
        {/* specialties */}
        <motion.div 
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={'show'}
          viewport={{once: false, amount: 0.3}}
          className='flex-1'
        >
          {/* specialties list */}
          <div>
            {specialties.map((service, index) => {
              // destructure service
              const {name, description, link} = service;
              return (
                <div className='flex border-b border-white/20 py-6' key={index}>
                  <div className='max-w-[525px] flex-1'>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                      {name}
                    </h4>
                    <p className='font-secondary leading-tight whitespace-pre-line'>{description}</p>
                  </div>
                  {/* <div className='flex flex-col items-end'>
                    <a href={link} className='flex btn w-9 h-9 mb-[42px] justify-center items-center'>
                      <BsArrowUpRight/>
                    </a>
                    <a href={link} className='text-gradient text-sm'>
                      Learn more
                    </a>
                  </div> */}
                </div>
              )
            })
            }
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Specialties;
