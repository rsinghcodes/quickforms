import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

function Login() {
  const [visible, setVisible] = useState(false);

  const handleChange = () => {
    setVisible(!visible);
  };
  return (
    <Container>
      <div className='hero-content w-full flex-col lg:flex-row'>
        <div className='text-center lg:mr-11 lg:text-left'>
          <h1 className='py-6 text-5xl font-bold'>Login to create Quick Forms!</h1>
        </div>
        <div className='card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl'>
          <div className='card-body'>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Email</span>
              </label>
              <input type='text' placeholder='email' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <label className='label'>
                <span className='label-text'>Password</span>
              </label>
              <div className='join'>
                <input
                  placeholder='password'
                  className='input join-item input-bordered w-full'
                  type={visible ? 'text' : 'password'}
                />
                <button type='button' className='btn join-item' onClick={handleChange}>
                  {visible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                </button>
              </div>
            </div>
            <div className='flex items-center justify-end p-1'>
              <button type='button' className='link-hover link label-text-alt'>
                Forgot password?
              </button>
            </div>
            <div className='form-control mt-3'>
              <button type='button' className='btn btn-primary'>
                Login
              </button>
            </div>
            <div className='flex items-center justify-center p-1'>
              <Link to='/' className='link-hover link label-text-alt'>
                Dont have an account? SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
