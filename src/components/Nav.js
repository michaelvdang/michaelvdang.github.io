import React from 'react';
import {BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs';
import {Link} from 'react-scroll';

const links = [
  {
    id: 1,
    text: 'home',
    icon: <BiHomeAlt />,
    offset: -200,
  },
  {
    id: 2,
    text: 'about',
    icon: <BiUser />,
    offset: 0,
  },
  {
    id: 3,
    text: 'specialty',
    icon: <BsClipboardData />,
    offset: 0,
  },
  {
    id: 4,
    text: 'work',
    icon: <BsBriefcase />,
    offset: 0,
  },
  {
    id: 5,
    text: 'contact',
    icon: <BsChatSquareText />,
    offset: 0,
  },
];

const Nav = () => {
  
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className='w-full bg-black/20 h-[96px] backdrop-blur-2xl
        rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl
        text-white/50'>
          {links.map(link => {
            const {id, text, icon, offset} = link;
            return (
              <Link 
                key={id}
                to={text}
                activeClass='active'
                smooth='easeInOutQuart'
                // smooth={true}
                spy={true}
                offset={offset}
                className='cursor-pointer w-[60px] h-[60px] flex items-center
                justify-center'>
                {icon}
              </Link>
            )
            })}
          {/* <Link 
            to='home' 
            activeClass='active'
            smooth={true}
            spy={true}
            offset={-200}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center'>
            <BiHomeAlt />
          </Link>
          <Link 
            to='about' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center'>
            <BiUser />
          </Link>
          <Link 
            to='specialty' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center'>
            <BsClipboardData />
          </Link>
          <Link 
            to='work' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center'>
            <BsBriefcase />
          </Link>
          <Link 
            to='contact' 
            activeClass='active'
            smooth={true}
            spy={true}
            className='cursor-pointer w-[60px] h-[60px] flex items-center
            justify-center'>
            <BsChatSquareText />
          </Link> */}
        </div>
      </div>
    </nav>
  )
  ;
};

export default Nav;
