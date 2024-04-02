import React from 'react';
import { SearchItem } from '../../components';
import icons from '../../ultils/icons';

const { BsChevronRight, IoLocationOutline, GrTag, FaCrop, FaRegBuilding, IoSearch } = icons;

const Search = () => {
  return (
    <div className=' p-[10px] bg-[#febb02] rounded-lg flex-col lg:flex-row flex items-center justify-around gap-2'>
      <SearchItem
        fontWeight
        IconBefore={<FaRegBuilding />}
        text='Phòng trọ, nhà trọ'
        IconAfter={<BsChevronRight color='rgb(156 163 175 )' />}
      />
      <SearchItem
        IconBefore={<IoLocationOutline />}
        text='Toàn quốc'
        IconAfter={<BsChevronRight color='rgb(156 163 175 )' />}
      />
      <SearchItem
        IconBefore={<GrTag />}
        text='Chọn giá'
        IconAfter={<BsChevronRight color='rgb(156 163 175 )' />}
      />
      <SearchItem
        IconBefore={<FaCrop />}
        text='Chọn diện tích'
        IconAfter={<BsChevronRight color='rgb(156 163 175 )' />}
      />
      <button
        type='button'
        className='outline-none py-2 px-4 w-full bg-[#0071c2] rounded-lg text-white flex items-center justify-center gap-2 font-medium'>
        <IoSearch />
        Tìm kiếm
      </button>
    </div>
  );
};

export default Search;
