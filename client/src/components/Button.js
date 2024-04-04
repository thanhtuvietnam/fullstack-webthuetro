import React, { memo } from 'react';

const Button = ({ icon, text, textColor, bgColor, onClick, fullWidth, fontWeight, textDecoration }) => {
  return (
    <button
      type='button'
      className={`flex items-center justify-center p-2 ${fullWidth && 'w-full'} ${textColor} ${bgColor} ${fontWeight} ${textDecoration} outline-none rounded-md hover:underline`}
      onClick={onClick}>
      {icon}
      <span className='ml-2'>{text}</span>
    </button>
  );
};

export default memo(Button);
