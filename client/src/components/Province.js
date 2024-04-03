import React from 'react';
import { location } from '../ultils/constant';
import { ProvinceBtn } from './index';

const Province = () => {
  return (
    <div className='flex items-center gap-5 justify-center py-5 shadow-md'>
      {location.map((item) => {
        return (
          <ProvinceBtn
            key={item.id}
            image={item.image}
            name={item.name}
          />
        );
      })}
    </div>
  );
};

export default Province;
