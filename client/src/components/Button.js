import React, { memo } from 'react';

const Button = ({ icon, text, textColor, bgColor, onClick, fullWidth }) => {
  return (
    <button
      type='button'
      className={`flex items-center justify-center p-2 ${fullWidth && 'w-full'} ${textColor} ${bgColor} outline-none rounded-md hover:underline`}
      onClick={onClick}>
      {icon}
      <span className='ml-2'>{text}</span>
    </button>
  );
};

export default memo(Button);
