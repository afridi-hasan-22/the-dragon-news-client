import React, { useContext } from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Header = () => {
  const {user} = useContext(AuthContext)
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
     
    </div>
  );
};

export default Header;
