import React from 'react';
import Navbar from '../Navbar';

interface Props {
  children: React.ReactNode;
}

function Container({ children }: Props) {
  return (
    <div>
      <Navbar />
      <div className='hero min-h-[90vh] bg-base-200 lg:px-10'>{children}</div>
    </div>
  );
}

export default Container;
