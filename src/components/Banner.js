import React from 'react';
// images
import Image from '../assets/avatar3.png';
// icons
import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden" 
              whileInView={'show'} 
              className='text-[55px] font-bold leading-[0.8] md:text-[70px] lg:text-[70px]'>
              MICHAEL <span>DANG</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial="hidden" 
              whileInView={'show'} 
              className='mb-6 text-[26px] lg:text-[30px] font-secondary
              font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation 
                sequence={[
                  'Student', 
                  2000,
                  'Software Engineer',
                  2000,
                  'Photography enthusiast',
                  2000
                ]} 
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
            />
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.7)} 
              initial="hidden" 
              whileInView={'show'} 
              className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
              in culpa qui officia deserunt mollit anim id est laborum.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.9)} 
              initial="hidden" 
              whileInView={'show'} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="#" className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn('right', 0.9)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.1}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube className='text-2xl' />
              </a>
              <a href='#'>
                <FaGithub className='text-2xl' />
              </a>
              <a href='#'>
                <FaDribbble className='text-2xl' />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('left', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0}} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='w-auto mx-auto' src={Image} alt="avatar" />
          </motion.div>             
        </div>
      </div>
    </section>
  )
};

export default Banner;
