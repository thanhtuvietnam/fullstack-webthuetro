import React, { memo } from 'react';

const InputForm = ({ label, type, value, setValue }) => {
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
        value={value}
        onChange={(e) => setValue((prev) => ({ ...prev, [type]: e.target.value }))}
      />
    </div>
  );
};

export default memo(InputForm);
