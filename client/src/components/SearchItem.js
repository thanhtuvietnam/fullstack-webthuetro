import React, { memo } from 'react';

const SearchItem = ({ IconBefore, IconAfter, text, fontWeight }) => {
  return (
    <div className='bg-white p-2 rounded-md text-gray-400  py-2 px-4 w-full text-sm flex items-center justify-between h-full'>
      <div className='flex items-center gap-1 w-full'>
        {IconBefore}
        <span className={`${fontWeight && 'font-medium text-black'} w-full overflow-hidden text-ellipsis whitespace-nowrap`}>{text}</span>
      </div>
      {IconAfter}
    </div>
  );
};

export default memo(SearchItem);
