import { Link } from 'react-router-dom';
import Container from '../../components/Container';

function Login() {
  return (
    <Container>
      <div className='hero-content w-full flex-col'>
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
              <input type='text' placeholder='password' className='input input-bordered' />
            </div>
            <div className='form-control mt-6'>
              <button type='button' className='btn btn-primary'>
                Login
              </button>
            </div>
            <Link to='/' className='link-hover link label-text-alt'>
              Dont have an account? SignUp
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Login;
