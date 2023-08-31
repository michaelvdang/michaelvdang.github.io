import React from 'react';
// images
import Logo from '../assets/logo6.png';
// import Logo from '../assets/logo.svg';
import {Link} from 'react-scroll';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        {/* logo */}
        <a href="#">
          <img className='w-20 rounded-full' src={Logo} alt="logo" />
        </a>
        {/* buttons */}
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
        {/* <button className='btn btn-sm'>Work with me</button> */}
      </div>
    </div>
  </header>;
};

export default Header;
