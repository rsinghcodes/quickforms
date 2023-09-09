import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import Container from '../../components/Container';

function Home() {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <Container>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:mr-11 lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign up to create Quick Forms!</h1>
          <p className='py-6'>
            Quick Forms is a form application similar to Google Forms. Users can create forms or survey forms and share
            links with others so that they can fill out and submit the forms.
          </p>
        </div>
        <form className='card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl'>
          <div className='card-body'>
            <div className='form-control'>
              <div className='label'>
                <span className='label-text'>Full Name</span>
              </div>
              <input type='text' placeholder='fullname' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <div className='label'>
                <span className='label-text'>Email</span>
              </div>
              <input type='text' placeholder='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <div className='label'>
                <span className='label-text'>Password</span>
              </div>
              <div className='join'>
                <input
                  placeholder='password'
                  className='input join-item input-bordered w-full'
                  type={visible ? 'text' : 'password'}
                />
                <button type='button' className='btn join-item' onClick={handleChange}>
                  {visible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                </button>
              </div>{' '}
            </div>
            <div className='form-control mt-6'>
              <button type='button' className='btn btn-primary'>
                Sign up
              </button>
            </div>
            <div className='flex items-center justify-center p-1'>
              <Link to='/login' className='link-hover link label-text-alt'>
                Already have an account? Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Home;
