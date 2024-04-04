import React from 'react';
import { text } from '../../ultils/constant';
import { Province } from '../../components';
import { List, Sidebar } from './index';

const HomePage = () => {
  return (
    <div className='w-full flex flex-col'>
      <div>
        <h1 className='text-[28px] text-center font-bold'>{text.HOME_TITLE}</h1>
        <p className='text-base text-[#65676b]'>{text.HOME_DESCRIPTION}</p>
      </div>
      <Province />
      <div className='w-full flex items-center justify-center gap-4'>
        <div className='w-[70%]'>
          <List />
        </div>
        <div className='w-[30%]'>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
