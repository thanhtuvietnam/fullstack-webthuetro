import React, { useEffect } from "react";
import { Button, Item } from "../../components";
import { getPosts } from "../../store/actions/post";
import { useDispatch, useSelector } from "react-redux";

const List = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  // console.log(posts);
  return (
    <div className="w-full text-sm p-2 bg-[#fff] rounded-lg shadow-md px-6">
      <div className="flex items-center justify-between my-3">
        <h4 className="text-xl font-semibold">Danh sách tin đăng</h4>
        <span>Cập nhật: 4:10 04/04/2024</span>
      </div>
      <div className="flex items-center gap-2 my-2">
        <span>Sắp xếp: </span>
        <Button
          text="Mặc định"
          bgColor="bg-[#f1f1f1]"
          fontWeight="font-[700]"
          textDecoration="underline"
        />
        <Button text="Mới nhất" bgColor="bg-[#f1f1f1]" />
        <Button text="Có video" bgColor="bg-[#f1f1f1]" />
      </div>
      <div className="items">
        {posts?.length > 0 &&
          posts.map((item) => {
            return (
              <Item
                key={item?.id}
                address={item?.address}
                attributes={item?.attributes}
                description={JSON.parse(item?.description)}
                images={JSON.parse(item?.images?.image)}
                star={+item.star}
                title={item?.title}
                user={item?.user}
              />
            );
          })}
      </div>
    </div>
  );
};

export default List;
