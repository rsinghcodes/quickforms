import { BiSun } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1'>
        <Link to='/xx' className='btn btn-ghost text-xl normal-case'>
          Quick Forms
        </Link>
      </div>
      <div className='flex-none'>
        <div className='dropdown dropdown-end '>
          <button type='button' className='btn btn-circle btn-ghost'>
            <BiSun size={20} />
          </button>
        </div>
        {/* <Link to='/login' className='btn btn-primary'>
          Login
        </Link> */}
        <div className='dropdown dropdown-end'>
          <div tabIndex={0} className='avatar btn btn-circle btn-ghost'>
            <div className='w-8 rounded-full'>
              <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' alt='profile pic' />
            </div>
          </div>
          <ul tabIndex={0} className='menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow'>
            <li>
              <Link to='/' className='justify-between'>
                Profile
                <span className='badge'>New</span>
              </Link>
            </li>
            <li>
              <Link to='/'>Settings</Link>
            </li>
            <li>
              <Link to='/'>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
