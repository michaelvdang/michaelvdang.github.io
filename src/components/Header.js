import React from 'react';
// images
import Logo from '../assets/logo6.png';
// import Logo from '../assets/logo.svg';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img className='w-20 rounded-full' src={Logo} alt="logo" />
        </a>
        {/* buttons */}
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
