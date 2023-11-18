import { InfoOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import Key from '@mui/icons-material/Key';
import { Button, FormControl, FormHelperText, FormLabel, IconButton, Input, Link, Sheet, Typography } from '@mui/joy';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Values', values);
    }
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const { errors, touched, handleSubmit, getFieldProps } = formik;

  return (
    <main>
      <Sheet
        sx={{
          width: 400,
          mx: 'auto',
          my: 16,
          py: 4,
          px: 4,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          borderRadius: 'sm'
        }}
        variant='outlined'
      >
        <div>
          <Typography level='h3' component='h3'>
            <b>Welcome!</b>
          </Typography>
          <Typography level='body-sm'>Sign in to continue.</Typography>
        </div>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <FormControl error={Boolean(errors.email && touched.email)}>
              <FormLabel>Email</FormLabel>
              <Input type='email' placeholder='Enter your email...' {...getFieldProps('email')} />
              {errors.email && touched.email && (
                <FormHelperText>
                  <InfoOutlined />
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl sx={{ mt: 2 }} error={Boolean(touched.password && errors.password)}>
              <FormLabel>Password</FormLabel>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder='Type your password...'
                startDecorator={<Key />}
                {...getFieldProps('password')}
                endDecorator={
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                }
              />
              {touched.password && errors.password && (
                <FormHelperText>
                  <InfoOutlined />
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Button type='submit' sx={{ mt: 4 }} fullWidth>
              Sign in
            </Button>
          </Form>
        </FormikProvider>
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
