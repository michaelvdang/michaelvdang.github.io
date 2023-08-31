import React from 'react';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';

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
              <h2 className='text-[45px] lg:text-[90px] leading-none'>
                Hire me!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form 
            variants={fadeIn('left', 0.3)}
            initial="hidden"
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6
              p-6 pb-24'>
            <input 
              className='bg-transparent border-b py-3 placeholder:text-white 
                focus:border-accent transition-all'
              placeholder='Your name'
              type="text" 
            />
            <input 
              className='bg-transparent border-b py-3 placeholder:text-white 
                focus:border-accent transition-all'
              placeholder='Your email'
              type="text" 
            />
            <textarea 
              className='bg-transparent border-b py-12 placeholder:text-white 
                focus:border-accent transition-all resize-none mb-12'
              placeholder='Your message'
            ></textarea>
            <button className='btn btn-lg'>Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
