import React, { memo } from 'react';

const InputForm = ({ label, type }) => {
  return (
    <div className=' flex flex-col'>
      <label
        htmlFor='phone'
        className='text-[12.6px]'>
        {label}
      </label>
      <input
        type={type}
        id='phone'
        className='text-xl outline-none bg-[#e8f0fe] p-2.5 rounded-md font-bold'
      />
    </div>
  );
};

export default memo(InputForm);
