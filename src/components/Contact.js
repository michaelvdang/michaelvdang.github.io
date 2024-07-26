import React, {useState} from 'react';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
import ContactForm from './ContactForm';

const Contact = () => {
    
  return (
    <section id='contact' className='py-16 lg:section'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-y-4'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 flex justify-start items-center'>
            <div>
              <h4 className='text-[28px] uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch 
              </h4>
              {/* <h2 className='text-[45px] lg:text-[90px] leading-none'>
                Hire me!
              </h2> */}
            </div>
          </motion.div>
          {/* form */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 '
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
