import React from 'react';
import { text } from '../../ultils/constant';
import { Province } from '../../components';

const HomePage = () => {
  return (
    <div className='border border-red-500 w-full flex flex-col'>
      <div>
        <h1 className='text-[28px] text-center font-bold'>{text.HOME_TITLE}</h1>
        <p className='text-base text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
    </div>
  );
};

export default HomePage;
