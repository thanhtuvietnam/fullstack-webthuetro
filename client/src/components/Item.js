import React, { memo, useState } from "react";
import icons from "../ultils/icons";

const indexs = [0, 1, 2, 3];

const { GoStarFill, GoHeart, GoHeartFill, BsFillBookmarkStarFill } = icons;

const Item = ({ images, user, title, star, description, attributes, address }) => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  // console.log(isHoverHeart);
  return (
    <div className="w-full flex justify-between py-4 border border-red-600 border-r-0 border-l-0 bg-[#fff9f3]">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center cursor-pointer relative">
        {images.length > 0 &&
          images
            .filter((i, index) => indexs.some((i) => i === index))
            ?.map((i) => {
              return <img src={i} alt="preview" className="w-[140px] h-[120px] object-cover" />;
            })}
        <span className="bg-[rgba(0,0,0,.5)] text-white px-[5px] py-[3px] rounded-md absolute bottom-[8px] left-[5px] ">{`${images.length} ảnh`}</span>
        <span className="absolute right-5 bottom-2.5" onMouseEnter={() => setIsHoverHeart(true)} onMouseLeave={() => setIsHoverHeart(false)}>
          {isHoverHeart ? <GoHeartFill size={28} color="#f73859" /> : <GoHeart size={28} color="white" />}
        </span>
      </div>
      <div className="w-3/5">
        <div className="flex items-start justify-between gap-4 w-full">
          <div className="start-item text-[#e13427] text-[14px] font-bold uppercase cursor-pointer">
            <GoStarFill className="start-item" size="18px" color="#ffd454" />
            <GoStarFill className="start-item" size="18px" color="#ffd454" />
            <GoStarFill className="start-item" size="18px" color="#ffd454" />
            <GoStarFill className="start-item" size="18px" color="#ffd454" />
            <GoStarFill className="start-item" size="18px" color="#ffd454" />
            {title}
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkStarFill color="orange" size={25} />
          </div>
        </div>
        <div className="flex items-center justify-between m-2 gap-3">
          <span className="text-[#16c784] font-bold text-xl">{attributes?.price}</span>
          <span>{attributes?.acreage}</span>
          <span className="cursor-pointer">{address}</span>
          <span className="text-[#aaaaba]">{attributes?.published}</span>
        </div>
        <p className="text-[#8a8daa] w-full h-[50px]  whitespace-nowrap text-ellipsis overflow-hidden">{description}</p>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <img className="w-[30px] h-[30px] object-cover rounded-full" src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" alt="avar" />
            <p>{user?.name}</p>
          </div>
          <div className="flex items-center justify-between gap-[5px]">
            <button type="button" className="bg-[#1266dd] text-[#fff] rounded-md px-2 py-1">
              {`Gọi ${user?.phone}`}
            </button>
            <button type="button" className="border border-[#1266dd] rounded-[5px] px-2 py-1 hover:bg-[#1266dd] hover:text-[#fff] text-[#1266dd]">
              Nhắn zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
