import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Container from '../../components/Container';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function Login() {
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: () => {}
  });

  const { errors, touched, handleSubmit } = formik;

  const showOrHidePassword = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <div className='hero-content w-full flex-col lg:flex-row'>
        <div className='text-center lg:mr-11 lg:text-left'>
          <h1 className='py-6 text-5xl font-bold'>Login to create Quick Forms!</h1>
        </div>
        <div className='card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl'>
          <FormikProvider value={formik}>
            <Form autoComplete='off' noValidate onSubmit={handleSubmit} className='card-body'>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <Field name='email' className='input input-bordered' placeholder='email' />
                {touched.email && Boolean(errors.email) && (
                  <label className='label'>
                    <span className='label-text-alt text-red-400'>
                      <ErrorMessage name='email' />
                    </span>
                  </label>
                )}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <div className='join'>
                  <Field
                    placeholder='password'
                    className='input join-item input-bordered w-full'
                    type={visible ? 'text' : 'password'}
                    name='password'
                  />
                  <button type='button' className='btn join-item' onClick={showOrHidePassword}>
                    {visible ? <AiOutlineEye size={20} /> : <AiOutlineEyeInvisible size={20} />}
                  </button>
                </div>
                {touched.password && Boolean(errors.password) && (
                  <label className='label'>
                    <span className='label-text-alt text-red-400'>
                      <ErrorMessage name='password' />
                    </span>
                  </label>
                )}
              </div>
              <div className='flex items-center justify-end p-1'>
                <button type='button' className='link-hover link label-text-alt'>
                  Forgot password?
                </button>
              </div>
              <div className='form-control mt-3'>
                <button type='submit' className='btn btn-primary'>
                  Login
                </button>
              </div>
              <div className='flex items-center justify-center p-1'>
                <Link to='/' className='link-hover link label-text-alt'>
                  Dont have an account? SignUp
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </Container>
  );
}

export default Login;
