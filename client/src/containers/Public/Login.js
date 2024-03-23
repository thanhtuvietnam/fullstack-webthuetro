import React, { useState, useEffect } from 'react';
import { InputForm, Button } from '../../components';
import { useLocation } from 'react-router-dom';
import { apiRegister } from '../../services/auth';
import * as actions from '../../store/actions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: '',
  });
  // console.log(location);
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);
  const handleSubmit = async () => {
    console.log(payload);
    dispatch(actions.register(payload));
    // console.log(response);
  };

  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-[28px]'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
      <div className='w-full flex flex-col gap-5'>
        {isRegister && (
          <InputForm
            label={'HỌ TÊN'}
            type={'name'}
            value={payload.name}
            setValue={setPayload}
          />
        )}
        <InputForm
          label={'SỐ ĐIỆN THOẠI'}
          type={'phone'}
          value={payload.phone}
          setValue={setPayload}
        />
        <InputForm
          label={'MẬT KHẨU'}
          type={'password'}
          value={payload.password}
          setValue={setPayload}
        />
        <Button
          text={isRegister ? 'Đăng ký' : 'Đăng nhập'}
          bgColor='bg-secondary1'
          textColor='text-white'
          fullWidth
          onClick={handleSubmit}
        />
      </div>
      <div className='mt-7 flex items-center justify-between '>
        {isRegister ? (
          <small>
            Bạn đã có tài khoản?
            <span
              onClick={() => {
                setIsRegister(false);
              }}
              className='text-blue-500 hover:underline cursor-pointer'>
              Đăng nhập ngay
            </span>
          </small>
        ) : (
          <>
            <small className='text-[blue] hover:text-[orange] cursor-pointer'>Bạn quên mật khẩu?</small>
            <small
              onClick={() => {
                setIsRegister(true);
              }}
              className='text-[blue] hover:text-[orange] cursor-pointer'>
              Tạo tài khoản mới
            </small>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
