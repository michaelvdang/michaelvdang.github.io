import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
const service_id = process.env.REACT_APP_SERVICE_ID;
const template_id = process.env.REACT_APP_TEMPLATE_ID;
const public_key = process.env.REACT_APP_PUBLIC_KEY;

const ContactForm = () => {
  const contact_form = useRef();
  const [submitted, setSubmitted] = useState(false);
  const classInvalid = 'bg-transparent border border-red-600 py-3 placeholder:text-white focus:border-accent transition-all';
  const classDefault = 'bg-transparent border-b py-3 placeholder:text-white focus:border-accent transition-all';
  const [emailClass, setEmailClass] = useState(classDefault);
  const [nameClass, setNameClass] = useState(classDefault);
  const [messageClass, setMessageClass] = useState(classDefault);

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
    setMessageClass(classDefault);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact_form.current.recruiter_name.value + 
    //     contact_form.current.recruiter_email.value + 
    //     contact_form.current.message.value);
    if (!contact_form.current.recruiter_name.value) {
      setNameClass(classInvalid);
      setShowNameWarning(true);
      return;
    }
    if (!emailValidation()) {
      setEmailClass(classInvalid);
      setShowEmailWarning(true);
      return;
    }
    if (!contact_form.current.message.value) {
      setMessageClass(classInvalid);
      setShowMessageWarning(true);
      return;
    }
    
    // emailjs.sendForm(service_id, template_id, contact_form.current, public_key)
    // .then(function(response) {
    //    console.log('SUCCESS!', response.status, response.text);
    //    setSubmitted(true);
    // }, function(error) {
      //    console.log('FAILED...', error);
      // });
      alert('Your message has been sent!');
      setSubmitted(true);
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
      p-6 pb-24'>
    <input 
      className='bg-transparent border-b py-3 placeholder:text-white 
        focus:border-accent transition-all'
      placeholder='Your name*'
      type="text" 
      name="recruiter_name"
      // required
      onChange={handleNameChange}
    />
    {showNameWarning && 
      <div className='relative -top-6 text-red-600 font-secondary h-0'>Please enter a name</div>
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
      <div className='relative -top-6 text-red-600 font-secondary h-0'>Please enter a valid email</div>
    }
    <textarea 
      className='bg-transparent border-b py-12 placeholder:text-white 
        focus:border-accent transition-all resize-none mb-12'
      placeholder='Your message*'
      name="message"
      // required
      onChange={handleMessageChange}
    ></textarea>
    {showMessageWarning && 
      <div className='relative -top-6 text-red-600 font-secondary h-0'>Please enter a message</div>
    }
    <button 
      type='submit'
      className='btn btn-lg'>Send message</button>
    </form>
  )
}

export default ContactForm