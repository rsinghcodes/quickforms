import Key from '@mui/icons-material/Key';
import { Button, FormControl, FormLabel, Input, LinearProgress, Link, Sheet, Stack, Typography } from '@mui/joy';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  const [value, setValue] = useState('');
  const minLength = 12;
  return (
    <main>
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 14,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md'
        }}
        variant='outlined'
      >
        <div>
          <Typography level='h4' component='h1'>
            <b>Welcome!</b>
          </Typography>
          <Typography level='body-sm'>Sign in to continue.</Typography>
        </div>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input name='email' type='email' placeholder='johndoe@email.com' />{' '}
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Stack
            spacing={0.5}
            sx={{
              '--hue': Math.min(value.length * 10, 120)
            }}
          >
            <Input
              type='password'
              placeholder='Type in here…'
              startDecorator={<Key />}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <LinearProgress
              determinate
              size='sm'
              value={Math.min((value.length * 100) / minLength, 100)}
              sx={{
                bgcolor: 'background.level3',
                color: 'hsl(var(--hue) 80% 40%)'
              }}
            />
            <Typography level='body-xs' sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}>
              {value.length < 3 && 'Very weak'}
              {value.length >= 3 && value.length < 6 && 'Weak'}
              {value.length >= 6 && value.length < 10 && 'Strong'}
              {value.length >= 10 && 'Very strong'}
            </Typography>
          </Stack>
        </FormControl>

        <Button sx={{ mt: 1 }}>Log in</Button>
        <Typography
          endDecorator={
            <Link component={RouterLink} to='/sign-up'>
              Sign up
            </Link>
          }
          fontSize='sm'
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default Login;
