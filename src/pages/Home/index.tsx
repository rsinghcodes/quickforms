import { ErrorMessage, Field, Form, FormikProvider, useFormik } from 'formik';
import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import Container from '../../components/Container';

const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, 'Fullname is too short!')
    .max(50, 'Fullname is too long!')
    .required('Fullname is required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .max(30, 'Password is too long!')
    .required('Password is required')
});

function Home() {
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      fullname: '',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: () => {}
  });

  const { errors, touched, handleSubmit } = formik;

  const showOrHidePassword = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <div className='hero-content flex-col lg:flex-row'>
        <div className='text-center lg:mr-11 lg:text-left'>
          <h1 className='text-5xl font-bold'>Sign up to create Quick Forms!</h1>
          <p className='py-6'>
            Quick Forms is a form application similar to Google Forms. Users can create forms or survey forms and share
            links with others so that they can fill out and submit the forms.
          </p>
        </div>
        <div className='card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl'>
          <FormikProvider value={formik}>
            <Form autoComplete='off' noValidate onSubmit={handleSubmit} className='card-body'>
              <div className='form-control'>
                <div className='label'>
                  <span className='label-text'>Full Name</span>
                </div>
                <Field name='fullname' className='input input-bordered' placeholder='fullname' />
                {touched.fullname && Boolean(errors.fullname) && (
                  <label className='label'>
                    <span className='label-text-alt text-red-400'>
                      <ErrorMessage name='fullname' />
                    </span>
                  </label>
                )}
              </div>
              <div className='form-control'>
                <div className='label'>
                  <span className='label-text'>Email</span>
                </div>
                <Field name='email' type='email' className='input input-bordered' placeholder='email' />
                {touched.email && Boolean(errors.email) && (
                  <label className='label'>
                    <span className='label-text-alt text-red-400'>
                      <ErrorMessage name='email' />
                    </span>
                  </label>
                )}
              </div>
              <div className='form-control'>
                <div className='label'>
                  <span className='label-text'>Password</span>
                </div>
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
              <div className='form-control mt-6'>
                <button type='submit' className='btn btn-primary'>
                  Sign up
                </button>
              </div>
              <div className='flex items-center justify-center p-1'>
                <Link to='/login' className='link-hover link label-text-alt'>
                  Already have an account? Login
                </Link>
              </div>
            </Form>
          </FormikProvider>
        </div>
      </div>
    </Container>
  );
}

export default Home;
