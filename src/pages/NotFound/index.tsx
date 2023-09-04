import { BiHomeSmile } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';

function NotFound() {
  return (
    <Container>
      <div className='hero-content text-center'>
        <div className='max-w-md'>
          <h1 className='text-5xl font-bold'>404 - Not Found!</h1>
          <p className='py-6'>
            Oops! The page you&apos;re looking for could not be found. Please try searching for it or go back to the
            homepage.
          </p>
          <Link to='/' className='btn btn-primary'>
            <BiHomeSmile size={20} />
            Go to Home
          </Link>
        </div>
      </div>
    </Container>
  );
}
export default NotFound;
