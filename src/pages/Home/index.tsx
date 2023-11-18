import ArrowForward from '@mui/icons-material/ArrowForward';
import { Button, Link, Typography } from '@mui/joy';
import { Link as RouterLink } from 'react-router-dom';
import TwoSidedLayout from '../../components/TwoSidedLayout';

export default function HeroLeft01() {
  return (
    <TwoSidedLayout>
      <Typography level='h1' fontWeight='xl' fontSize='clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)'>
        Create an online form as easily as creating a document
      </Typography>
      <Typography fontSize='lg' textColor='text.secondary' lineHeight='lg'>
        Select from multiple question types, drag-and-drop questions, and customize values as easily as pasting a list.{' '}
      </Typography>
      <Button size='lg' endDecorator={<ArrowForward fontSize='small' />}>
        Create Forms
      </Button>
      <Typography>
        Already a member?{' '}
        <Link component={RouterLink} to='/sign-in' fontWeight='lg'>
          Sign in
        </Link>
      </Typography>
    </TwoSidedLayout>
  );
}
