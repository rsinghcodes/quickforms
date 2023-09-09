import Container from '../../components/Container';

function Profile() {
  return (
    <Container>
      <div className='flex flex-col justify-start'>
        <div className='card bg-base-100'>
          <div className='card-body'>
            <h2 className='card-title'>Account Management!</h2>
            <p>Hi test@gmail.com, edit your information on the app.</p>
            <div className='form-control'>
              <div className='label'>
                <span className='label-text'>Full Name</span>
              </div>
              <input type='text' placeholder='fullname' value='Raghvendra Singh' className='input input-bordered' />
            </div>
            <div className='form-control'>
              <div className='label'>
                <span className='label-text'>New Password</span>
              </div>
              <input type='text' placeholder='new password' className='input input-bordered' value='Test@123' />
            </div>
            <div className='card-actions justify-end'>
              <button type='button' className='btn btn-primary'>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
