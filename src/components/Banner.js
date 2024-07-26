import React from 'react';
// images
import Image from '../assets/avatar3.png';
// icons
import {FaGithub, FaYoutube, FaDribbble, FaInstagram, FaDiscord} from 'react-icons/fa';
// type animation
import {TypeAnimation} from 'react-type-animation';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
import {Link} from 'react-scroll';

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
                  'Software Engineer',
                  2000,
                  'Content creator', 
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
              Aspiring software engineer eager to leverage my technical skills and passion 
              for innovation to contribute to cutting-edge projects.
            </motion.p>
            <motion.div 
              variants={fadeIn('up', 0.9)} 
              initial="hidden" 
              whileInView={'show'} 
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                {/* <button href="#contact" className='btn btn-lg'>
                    Contact me</button> */}
              <div
                className='flex items-center gap-x-12'
              >
                <a
                >
                  <Link 
                    to='work' 
                    activeClass='active'
                    smooth={true}
                    spy={true}
                    // offset={-200}
                    className='cursor-pointer w-[60px] h-[60px]'>
                      <a 
                        // href="https://github.com/michaelvdang" 
                        className='text-gradient btn-link'
                      >Portfolio</a>
                    {/* <button href="#contact" className='btn btn-lg'>
                      Contact me</button> */}
                  </Link>
                </a>
                <a 
                  href="MichaelDang_Resume.pdf" // Replace with your file path
                  download='Michael Dang - Resume.pdf'
                  className='text-gradient btn-link'
                >
                  {/* <Link 
                    // to="ModalPage.js"
                    // to='MichaelDang_Resume.pdf' 
                    // target='_blank'
                    // download='MichaelDang_Resume.pdf' 
                    // activeClass='active'
                    smooth={true}
                    spy={true}
                    offset={-200}
                    className='cursor-pointer w-[60px] h-[60px]'> */}
                        Resume
                  {/* </Link> */}
                </a>
              </div>
              {/* <a 
                href="https://github.com/michaelvdang" 
                className='text-gradient btn-link'
              >My Portfolio</a> */}
            </motion.div>
            {/* socials */}
            <motion.div 
              variants={fadeIn('right', 0.9)} 
              initial="hidden" 
              whileInView={'show'} 
              viewport={{once: false, amount: 0.1}} 
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://www.youtube.com/@MichaelDangDev'>
                <FaYoutube className='text-2xl' />
              </a>
              <a href='https://discordapp.com/channels/@me/leachim9797#0'>
                <FaDiscord className='text-2xl' />
              </a>
              <a href='https://github.com/michaelvdang'>
                <FaGithub className='text-2xl' />
              </a>
              {/* <a href='https://www.instagram.com/michaeltute/'>
                <FaInstagram className='text-2xl' />
              </a> */}
            </motion.div>
          </div>
          {/* image */}
          <motion.div 
            variants={fadeIn('left', 0.7)} 
            initial="hidden" 
            whileInView={'show'} 
            viewport={{once: false, amount: 0}} 
            className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
            <img className='w-auto mx-auto' src={Image} alt="Michael Dang" />
          </motion.div>             
        </div>
      </div>
    </section>
  )
};

export default Banner;
