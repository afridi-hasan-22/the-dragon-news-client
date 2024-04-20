import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='my-container py-6'>
      <div className='w-full flex flex-col justify-center items-center space-y-5'>
        <img className='w-[471px]' src={logo} alt='' />
        <p>Journalism Without Fear or Favor</p>
        <p>{moment().format('dddd, MMMM Do YYYY')}</p>
      </div>
      <div className='mt-7 flex space-x-2 items-center  p-3'>
        <button className='py-2 px-8 text-white bg-[#D72050]'>Latest</button>
        <Marquee speed={100} className='text-red-500 '>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <div className=' mt-2'>
        <div className='navbar bg-[#F3F3F3]'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h8m-8 6h16'
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
              >
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link>About</Link>
                </li>
                
                <li>
                  <Link>Career</Link>
                </li>
              </ul>
            </div>
            
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link>Home</Link>
              </li>
              <li>
              <Link>About</Link>
              </li>
              <li>
                <Link>Career</Link>
              </li>
            </ul>
          </div>
          <div className='navbar-end flex space-x-2'>
            <p>Profile</p>
            <a className='btn btn-neutral w-28'>Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
