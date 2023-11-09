import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button, Link, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import TwoSidedLayout from '../../components/TwoSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography level='h1' fontWeight='xl' fontSize='clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)'>
        A large headlinerer about our product features & services
      </Typography>
      <Typography fontSize='lg' textColor='text.secondary' lineHeight='lg'>
        A descriptive secondary text placeholder. Use it to explain your business offer better.
      </Typography>
      <Button size='lg' endDecorator={<ArrowForward fontSize='small' />}>
        Get Started
      </Button>
      <Typography>
        Already a member?{' '}
        <Link component={RouterLink} to='/login' fontWeight='lg'>
          Sign in
        </Link>
      </Typography>
    </TwoSidedLayout>
  );
}
