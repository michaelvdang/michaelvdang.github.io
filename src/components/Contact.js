import React, {useState} from 'react';
//motion
import {motion} from 'framer-motion';
// variants
import {fadeIn} from '../variants';
import ContactForm from './ContactForm';

const Contact = () => {
  // const [submitted, setSubmitted] = useState(false);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const inputs = e.target.elements;
  //   const data = {};
    
  //   for (let i = 0; i < inputs.length; i++) {
  //     if (inputs[i].name) {
  //       data[inputs[i].name] = inputs[i].value;
  //     }
  //   }
  //   alert(data);

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
  //   .then(function(response) {
  //      console.log('SUCCESS!', response.status, response.text);
  //      setSubmitted(true);

       
       
  //   }, function(error) {
  //      console.log('FAILED...', error);
  //   });
    
  //   if (submitted) {
  //     return (
  //       <>
  //         <div className="text-2xl">Thank you!</div>
  //         <div className="text-md">We'll be in touch soon.</div>
  //       </>
  //     );
  //   }
  // };
    
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
