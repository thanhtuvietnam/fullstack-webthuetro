import React, { memo, useState } from "react";
import icons from "../ultils/icons";

const { GoStarFill, GoHeart, GoHeartFill, BsFillBookmarkStarFill } = icons;

const images = ["https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/20/z4774545167182-892f96b94a7083e20fed54eda3c934d4-1_1710921546.jpg", "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/20/428612663-1063350318114967-2196901079864546030-n_1710921544.jpg", "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/20/428623093-1063350271448305-1186999777645855693-n_1710921545.jpg", "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/20/428641684-1063350231448309-1398294662907581182-n_1710921546.jpg", "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2024/03/20/z4774545167182-892f96b94a7083e20fed54eda3c934d4-1_1710921546.jpg"];

const Item = () => {
  const [isHoverHeart, setIsHoverHeart] = useState(false);
  // console.log(isHoverHeart);
  return (
    <div className="w-full flex justify-between py-4 border border-red-600 border-r-0 border-l-0 bg-[#fff9f3] p-4">
      <div className="w-2/5 flex flex-wrap gap-[2px] items-center cursor-pointer relative">
        <img src={images[0]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[1]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[2]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <img src={images[3]} alt="preview" className="w-[140px] h-[120px] object-cover" />
        <span className="bg-[rgba(0,0,0,.5)] text-white px-[5px] py-[3px] rounded-md absolute bottom-[8px] left-[5px] ">4 ảnh</span>
        <span className="absolute right-5 bottom-2.5" onMouseEnter={() => setIsHoverHeart(true)} onMouseLeave={() => setIsHoverHeart(false)}>
          {isHoverHeart ? <GoHeartFill size={28} color="#f73859"/> : <GoHeart size={28} color="white" />}
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
            Phòng Trọ Mới Tinh 100% Quận 3 Ngay Cầu Lê Văn Sỹ
          </div>
          <div className="w-[10%] flex justify-end">
            <BsFillBookmarkStarFill color="orange" size={25} />
          </div>
        </div>
        <div className="flex items-center justify-between m-2">
          <span className="text-[#16c784] font-bold text-xl">4.8 triệu/tháng</span>
          <span>18m²</span>
          <span className="cursor-pointer">Quận 3, Hồ Chí Minh</span>
          <span className="text-[#aaaaba]">Hôm nay</span>
        </div>
        <p className="text-[#8a8daa]">PHÒNG TRỌ MỚI TINH 100% QUẬN 3 NGAY CẦU LÊ VĂN SỸGiờ giấc tự do .Không chung chủRa vào vân tayBãi xe rộng rãiBếp - Cửa sổĐiện 4000kwNước nóng…</p>
        <div className="flex items-center justify-between my-3">
          <div className="flex items-center">
            <img className="w-[30px] h-[30px] object-cover rounded-full" src="https://lnsel.com/wp-content/uploads/2018/12/anon-avatar-300x300.png" alt="avar" />
            <p>Anh Tùng</p>
          </div>
          <div className="flex items-center justify-between gap-[5px]">
            <button type="button" className="bg-[#1266dd] text-[#fff] rounded-md px-2 py-1">
              goi 0889097420
            </button>
            <button type="button" className="border border-[#1266dd] rounded-[5px] px-2 py-1 hover:bg-[#1266dd] hover:text-[#fff] text-[#1266dd]">
              nhan zalo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Item);
