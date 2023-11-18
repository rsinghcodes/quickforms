import { InfoOutlined, Visibility, VisibilityOff } from '@mui/icons-material';
import Key from '@mui/icons-material/Key';
import { Button, FormControl, FormHelperText, FormLabel, IconButton, Input, Link, Sheet, Typography } from '@mui/joy';
import { Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  fullname: Yup.string().min(2).max(30).required('Full name is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

function Signup() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: '',
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
          <Typography level='body-sm'>Sign up to continue.</Typography>
        </div>
        <FormikProvider value={formik}>
          <Form noValidate onSubmit={handleSubmit}>
            <FormControl error={Boolean(errors.fullname && touched.fullname)}>
              <FormLabel>Full name</FormLabel>
              <Input type='text' placeholder='Enter your full name' {...getFieldProps('fullname')} />
              {errors.fullname && touched.fullname && (
                <FormHelperText>
                  <InfoOutlined />
                  {errors.fullname}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl sx={{ mt: 2 }} error={Boolean(errors.email && touched.email)}>
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
              Sign up
            </Button>
          </Form>
        </FormikProvider>
        <Typography
          endDecorator={
            <Link component={RouterLink} to='/sign-in'>
              Sign in
            </Link>
          }
          fontSize='sm'
          sx={{ alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
}

export default Signup;
