import React from 'react';
import { Search } from './index';
import { text } from '../../ultils/constant';

const HomePage = () => {
  return (
    <div className='border border-red-500 w-full flex flex-col'>
      <Search />
      <div>
        <h1 className='text-[28px] text-center font-bold'>{text.HOME_TITLE}</h1>
        <p>{text.HOME_DESCRIPTION}</p>
      </div>
    </div>
  );
};

export default HomePage;
