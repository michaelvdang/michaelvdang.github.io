import React, {useState, useRef} from 'react'
import { Scroller } from 'react-scroll/modules/mixins/scroller';
import emailjs from '@emailjs/browser';
import { scroller } from 'react-scroll';
const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const public_key = process.env.REACT_APP_PUBLIC_KEY;

const ContactForm = () => {
  const contact_form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const classInvalid = 'bg-transparent focus:border-2 rounded border border-accentError py-3 placeholder:text-white transition-all';
  const classDefault = 'bg-transparent focus:border-2 rounded border-b py-3 placeholder:text-white transition-all'
  // const classDefault = 'bg-transparent border-b py-3 placeholder:text-white focus:border-accentError transition-all';
  const [emailClass, setEmailClass] = useState(classDefault);
  const [nameClass, setNameClass] = useState(classDefault);
  const classInvalidTextarea = 'bg-transparent focus:border-2 rounded border border-accentError py-12 placeholder:text-white transition-all resize-none mb-12';
  const classDefaultTextarea = 'bg-transparent focus:border-2 rounded border-b py-12 placeholder:text-white transition-all resize-none mb-12';
  const [messageClass, setMessageClass] = useState(classDefaultTextarea);

  // email validation
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showNameWarning, setShowNameWarning] = useState(false);
  const [showMessageWarning, setShowMessageWarning] = useState(false);
  const emailValidation = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(contact_form.current.recruiter_email.value);
  }
  const handleEmailChange = (e) => {
    setShowEmailWarning(false);
    setEmailClass(classDefault);
  }
  const handleNameChange = (e) => {
    setShowNameWarning(false);
    setNameClass(classDefault);
  }
  const handleMessageChange = (e) => {
    setShowMessageWarning(false);
    setMessageClass(classDefaultTextarea);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact_form.current.recruiter_name.value + 
    //     contact_form.current.recruiter_email.value + 
    //     contact_form.current.message.value);

    if (!contact_form.current.recruiter_name.value) {
      setNameClass(classInvalid);
      setShowNameWarning(true);
    }
    if (!emailValidation()) {
      setEmailClass(classInvalid);
      setShowEmailWarning(true);
    }
    if (!contact_form.current.message.value) {
      setMessageClass(classInvalidTextarea);
      setShowMessageWarning(true);
    }
    if (!contact_form.current.recruiter_name.value || !emailValidation() || !contact_form.current.message.value) {
      return;
    }    

    emailjs.sendForm(service_id, template_id, contact_form.current, public_key)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      scroller.scrollTo('contact', {
      delay: 0,
      smooth: 'easeInOutQuart',
      spy: true,
      activeClass: 'active',
      });
    }, function(error) {
      console.log('FAILED...', error);
    });
    // alert('Your message has been sent! Thank you for reaching out to me.')
    // setSubmitted(true);
    // scroller.scrollTo('contact', {
    //   // duration: 800,
    //   delay: 0,
    //   smooth: 'easeInOutQuart',
    //   spy: true,
    //   activeClass: 'active',
    // });
  };
  
  if (submitted) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">I will get back to you as soon as possible.</div>
      </>
    );
  }
  return (
    <form 
      ref={contact_form}
      onSubmit={handleSubmit}
      className='border rounded-2xl flex flex-col gap-y-6
      p-6 pb-24 border-accent'>
      <input 
        className={nameClass}
        // className='bg-transparent focus:border-2 rounded-md
        //   border-b py-3 placeholder:text-white transition-all'
        // className='bg-transparent border-b py-3 placeholder:text-white 
        //   focus:border-accent transition-all'
        placeholder='Your name*'
        type="text" 
        name="recruiter_name"
        // required
        onChange={handleNameChange}
      />
    {showNameWarning && 
      <div className='relative -top-6 text-accentError font-secondary h-0'>Please enter a name</div>
    }
    {<input 
      className={emailClass}
      // className='bg-transparent border-b py-3 placeholder:text-white 
      //   focus:border-accent transition-all'
      placeholder='Your email*'
      type="text" 
      // type="email" 
      name="recruiter_email"
      // required
      onChange={handleEmailChange}
    />}
    {showEmailWarning && 
      <div className='relative -top-6 text-accentError font-secondary h-0'>Please enter a valid email</div>
    }
    <textarea 
      className={messageClass}
      // className='bg-transparent border-b py-12 placeholder:text-white 
      //   focus:border-accent transition-all resize-none mb-12'
      placeholder='Your message*'
      name="message"
      // required
      onChange={handleMessageChange}
    ></textarea>
    {showMessageWarning && 
      <div className='relative -top-[72px] text-accentError font-secondary h-0'>Please enter a message</div>
    }
    <button 
      type='submit'
      className='btn btn-lg'>Send message</button>
    </form>
  )
}

export default ContactForm