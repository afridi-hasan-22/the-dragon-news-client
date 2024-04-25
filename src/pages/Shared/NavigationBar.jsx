import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { toast } from 'react-toastify';

const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(result => {
      toast.success('Logged Out Successfully')
    }).catch(error => {
      console.log(error.message);
      toast.error('Something Worng')
    })
  }
  return (
    <div className='my-container'>
      <div className=''>
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
            {user && <img className='w-[2rem]' src={user.photoURL} alt='' />}
            {user ? (
              <Link>
                <button onClick={handleLogOut} className='btn btn-neutral w-28'>Logout</button>
              </Link>
            ) : (
              <Link to='/login'><button className='btn btn-neutral w-28'>Login</button></Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
