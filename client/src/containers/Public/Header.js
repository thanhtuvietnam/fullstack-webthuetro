import React, { useCallback } from 'react';
import logo from '../../assets/logowithoutbg.png';
import { Button } from '../../components';
import icons from '../../ultils/icons';
import { useNavigate, Link } from 'react-router-dom';
import { path } from '../../ultils/constant';

const Header = () => {
  const navigate = useNavigate();
  const goLogin = useCallback((flag) => {
    navigate(path.LOGIN, { state: { flag } });
  }, []);
  return (
    <div className='w-1100 flex items-center justify-between bg-primary mx-auto'>
      <Link to={'/'}>
        <img
          src={logo}
          alt='logo'
          className='w-[240px] h-[70px] object-contain'
        />
      </Link>
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
          onClick={() => goLogin(false)}
        />
        <Button
          icon={<icons.IoIosLogIn />}
          text={'Đăng ký'}
          textColor='text-black'
          bgColor='bg-transparent'
          onClick={() => goLogin(true)}
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
