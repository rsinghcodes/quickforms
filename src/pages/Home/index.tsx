import Container from '../../components/Container';

function Home() {
  return (
    <Container>
      <div className='hero-content flex-col lg:mx-auto lg:flex-row'>
        <div className='text-center lg:mr-11 lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign Up now to create Quick Forms!</h1>
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
              <input name='password' type='text' placeholder='password' className='input input-bordered' />
              <div className='label'>
                <a href='/' className='link-hover link label-text-alt'>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='form-control mt-6'>
              <button type='submit' className='btn btn-primary'>
                Sign up
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Home;
