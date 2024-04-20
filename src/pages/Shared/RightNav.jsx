import React from 'react';
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram  } from 'react-icons/fa';
import Qzone from './Qzone';
const RightNav = () => {
  return (
    <div className='flex flex-col space-y-3 mb-3'>
      <h2 className='text-2xl'>Login With</h2>
      <div className='flex flex-col space-y-2'>
        <button className='btn btn-outline btn-primary'>
          <FaGoogle></FaGoogle>Login with Google{' '}
        </button>
        <button className='btn btn-outline btn-secondary'>
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>

      <h1 className='text-2xl'>Find us on</h1>
      <div className='divide-y border p-3 rounded-lg '>
        <div className='py-2 flex gap-2 items-center'>
          <FaFacebookF className='text-blue-500'></FaFacebookF>
          <span>Facebook</span>
        </div>
        <div className='py-2 flex gap-2 items-center'>
          <FaTwitter className='text-blue-400'></FaTwitter>
          <span>Twiter</span>
        </div>
        <div className='py-2 flex gap-2 items-center'>
          <FaInstagram className='text-pink-500'></FaInstagram>
          <span>Instagram</span>
        </div>
      </div>
      <div>
        <Qzone></Qzone>
      </div>
    </div>
  );
};

export default RightNav;
