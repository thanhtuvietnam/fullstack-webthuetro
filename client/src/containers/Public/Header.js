import React, { useCallback } from 'react';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../components';
import icons from '../../ultils/icons';
import { useNavigate } from 'react-router-dom';
import { path } from '../../ultils/constant';

const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback(() => {
    navigate(path.LOGIN);
  }, []);
  return (
    <div className='w-1100 flex items-center justify-between bg-primary mx-auto'>
      <img
        src={logo}
        alt='logo'
        className='w-[240px] h-[70px] object-contain'
      />
      <div className='flex items-center gap-0'>
        <small>Phongtro123.com xin chào</small>
        <Button
          icon={<icons.IoMdHeartHalf />}
          text={'Yêu thích'}
          textColor='text-black'
          bgColor='bg-transparent'
        />
        <Button
          icon={<icons.AiOutlineUser />}
          text={'Đăng nhập'}
          textColor='text-black'
          bgColor='bg-transparent'
          onClick={goLogin}
        />
        <Button
          icon={<icons.IoIosLogIn />}
          text={'Đăng ký'}
          textColor='text-black'
          bgColor='bg-transparent'
          onClick={goLogin}
        />
        <Button
          icon={<icons.CiCirclePlus />}
          text={'Đăng tin miễn phí'}
          textColor='text-black'
          bgColor='bg-[#f73859]'
        />
      </div>
    </div>
  );
};
export default Header;
