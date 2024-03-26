import React from 'react';
import { NavLink } from 'react-router-dom';

const nav = [
  { name: 'Trang chủ', path: 'Home' },
  { name: 'Cho thuê phòng trọ', path: 'cho-thue-phong-tro' },
  { name: 'Nhà cho thuê', path: 'nha-cho-thue' },
  { name: 'cho thuê căn hộ', path: 'cho-thue-can-ho' },
  { name: 'Mặt bằng, văn phòng', path: 'mat-bang-van-phong' },
];

const notActive = 'hover:bg-secondary2 py-2 px-4';
const active = 'hover:bg-secondary2 py-2 px-4 bg-secondary2';

const Navigation = () => {
  return (
    <div className='text-white w-screen flex justify-center items-center h-[40px] bg-secondary1'>
      <div className='font-bold text-[13.3px] w-1100 flex items-center'>
        {nav?.length > 0 &&
          nav.map((item, index) => {
            return (
              <div
                key={index}
                className='h-full  flex justify-center items-center'>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => (isActive ? active : notActive)}>
                  {item.name}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
