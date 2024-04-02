import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <div className='w-full flex flex-col items-center h-full mx-auto'>
      <Header />
      <Navigation />
      <div className='w-4/5 lg:w-3/5 flex flex-col justify-start items-start mt-3 h-full'>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
