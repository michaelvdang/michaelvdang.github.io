import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion 
import {motion} from 'framer-motion';
// variant
import {fadeIn} from '../variants';
import Image from '../assets/be2.png';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    // threshold: 0.5, // works for phones
  });
  
  return (
    <section className='section' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center 
        lg:gap-x-20 lg:gap-y-0 '>
          {/* img */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] min-h-[250px] 
            mix-blend-normal bg-top'>
              {/* <img src={Image} alt="about" className='h-96' /> */}
            </motion.div>
          {/* text */}
          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1'>
            <h2 className='h2 text-accent'>About me.</h2>
            <h3 className='h3 mb-4'>I am a full-stack engineer and designer based in 
              Orange County, California with a Masters Degree in Computer Science</h3>
            <p className='mb-6'>
              As a dedicated master's graduate with a passion for software engineering 
              and web development, I bring hands-on experience in crafting dynamic 
              applications using React, Expressjs, and FastAPI. My proficiency in languages 
              like C++, Python, and SQL, coupled with a strong foundation in algorithms and 
              data structures, positions me to contribute effectively to impactful projects 
              in the realm of technology.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-teritary text-gradient mb-2'>
                  {inView ? <CountUp start={0} end={15} duration={3} delay={1} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Projects <br /> Completed
                </div>
              </div>
              {/* <div>
                <div className='text-[40px] font-teritary text-gradient my-2'>
                  {inView ? <CountUp start={0} end={2} duration={3} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div>
                <div className='text-[40px] font-teritary text-gradient my-2'>
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                  +
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Satisfied <br /> Customers1
                </div>
              </div> */}
            </div>
            <div className='flex gap-x-8 items-center'>
              <div>
                <Link 
                  to='contact' 
                  activeClass='active'
                  smooth={true}
                  spy={true}
                  // offset={-200}
                  className='cursor-pointer w-[60px] h-[60px]'>
                  <button href="#contact" className='btn btn-lg'>
                    Contact me</button>
                </Link>
              </div>
              <a href='https://github.com/michaelvdang' className='text-gradient btn-link'>
                My Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
};

export default About;
