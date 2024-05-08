import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../../Hooks/useTitle';


const Register = () => {
  const {createUser} = useContext(AuthContext);
  useTitle('Register')
  const [accepted, setAccepted] = useState(false)
  const handleCheckbox = (event) => {
    setAccepted(event.target.checked);
  }
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    createUser(email,password).then(result => {
      toast.success('Registration succesfully')
    }).catch(error => {
      console.log(error.message);
      toast.error('Somrthing wrong')
    })
  }
  return (
    <div className='my-container'>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row-reverse'>
          <div className='text-center lg:text-left'>
            <h1 className='text-5xl font-bold'>Register Now</h1>
            <p className='py-6'>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className='card shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
            <form onSubmit={handleRegister} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  type='text'
                  name='photo'
                  placeholder='Photo URL'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  name='email'
                  placeholder='email'
                  className='input input-bordered'
                  required
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  name='password'
                  placeholder='password'
                  className='input input-bordered'
                  required
                />
                
              </div>
              <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Remember me</span>
    <input type="checkbox" onClick={handleCheckbox} className="checkbox checkbox-success" />
  </label>
</div>
              <div className='form-control mt-6'>
                <button type='submit' disabled={!accepted} className='btn btn-primary'>
                  Register
                </button>
              </div>
              <p className='text-center'>
                Already have an account ? please{' '}
                <span className='text-blue-500'>
                  <Link to='/login'>Login</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
