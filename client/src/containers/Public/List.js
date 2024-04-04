import React from "react";
import { Button, Item } from "../../components";

const List = () => {
  return (
    <div className="w-full text-sm p-2 bg-[#fff] rounded-lg shadow-md">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 4:10 04/04/2024</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp: </span>
        <Button text="Mặc định" bgColor="bg-[#f1f1f1]" fontWeight="font-[700]" textDecoration="underline" />
        <Button text="Mới nhất" bgColor="bg-[#f1f1f1]" />
        <Button text="Có video" bgColor="bg-[#f1f1f1]" />
      </div>
      <div className="items">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default List;
