import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { apiGetCategories } from '../../services/category';
import { formatVietnameseToString } from '../../ultils/constant';

// const nav = [
//   { name: 'Trang chủ', path: 'Home' },
//   { name: 'Cho thuê phòng trọ', path: 'cho-thue-phong-tro' },
//   { name: 'Nhà cho thuê', path: 'nha-cho-thue' },
//   { name: 'cho thuê căn hộ', path: 'cho-thue-can-ho' },
//   { name: 'Mặt bằng, văn phòng', path: 'mat-bang-van-phong' },
// ];

const notActive = 'hover:bg-secondary2 py-2 px-4';
const active = 'hover:bg-secondary2 py-2 px-4 bg-secondary2';

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const response = await apiGetCategories();
      if (response?.data.err === 0) {
        setCategories(response.data.response);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className='text-white w-screen flex justify-center items-center h-[40px] bg-secondary1'>
      <div className='font-bold text-[13.3px] w-1100 flex items-center'>
        <NavLink
          to={`/`}
          className={({ isActive }) => (isActive ? active : notActive)}>
          Trang chủ
        </NavLink>
        {categories?.length > 0 &&
          categories.map((item) => {
            return (
              <div
                key={item.code}
                className='h-full  flex justify-center items-center'>
                <NavLink
                  to={`${formatVietnameseToString(item.value)}`}
                  className={({ isActive }) => (isActive ? active : notActive)}>
                  {item.value}
                </NavLink>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Navigation;
