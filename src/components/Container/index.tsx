import React from 'react';
import Navbar from '../Navbar';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div className='bg-base-200'>
      <Navbar />
      <div className='hero min-h-screen lg:px-12'>{children}</div>
    </div>
  );
}

export default Container;
