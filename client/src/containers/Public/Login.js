import React, { useState, useEffect } from 'react';
import { InputForm, Button } from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import * as actions from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, msg, update } = useSelector((state) => state.auth);
  const [isRegister, setIsRegister] = useState(location.state?.flag);
  const [invalidFields, setInvalidFields] = useState([]);
  const [payload, setPayload] = useState({
    phone: '',
    password: '',
    name: '',
  });
  // console.log(location);
  useEffect(() => {
    setIsRegister(location.state?.flag);
  }, [location.state?.flag]);

  useEffect(() => {
    isLoggedIn && navigate('/');
  }, [isLoggedIn]);

  useEffect(() => {
    msg && Swal.fire('Oops!', msg, 'error');
  }, [msg, update]);

  const handleSubmit = async () => {
    let finalPayload = isRegister
      ? payload
      : {
          phone: payload.phone,
          password: payload.password,
        };
    let invalids = validate(finalPayload);
    if (invalids === 0) isRegister ? dispatch(actions.register(payload)) : dispatch(actions.login(payload));
    // console.log(payload);
    //
    // console.log(response);
    // console.log(invalids);
  };
  // console.log(invalidFields);

  const validate = (payload) => {
    let invalids = 0;
    let fields = Object.entries(payload);
    fields.forEach((item) => {
      if (item[1] === '') {
        setInvalidFields((prev) => [
          ...prev,
          {
            name: item[0],
            message: 'bạn không được bỏ trống ô này.',
          },
        ]);
        invalids++;
      }
    });
    fields.forEach((item) => {
      switch (item[0]) {
        case 'password':
          if (item[1].length < 6) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: 'Mật khẩu phải có tối thiểu 6 ký tự',
              },
            ]);
            invalids++;
          }
          break;
        case 'phone':
          // console.log(typeof +item[1]);
          if (!+item[1]) {
            setInvalidFields((prev) => [
              ...prev,
              {
                name: item[0],
                message: 'Sđt không hợp lệ',
              },
            ]);
            invalids++;
          }
          break;

        default:
          break;
      }
    });
    return invalids;
    // console.log(fields);
  };

  return (
    <div className='bg-white w-[600px] p-[30px] pb-[100px] rounded-md shadow-sm'>
      <h3 className='font-semibold text-[28px]'>{isRegister ? 'Đăng ký tài khoản' : 'Đăng nhập'}</h3>
      <div className='w-full flex flex-col gap-5'>
        {isRegister && (
          <InputForm
            setInvalidFields={setInvalidFields}
            invalidFields={invalidFields}
            label={'HỌ TÊN'}
            type={'name'}
            value={payload.name}
            setValue={setPayload}
          />
        )}
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
          label={'SỐ ĐIỆN THOẠI'}
          type={'phone'}
          value={payload.phone}
          setValue={setPayload}
        />
        <InputForm
          setInvalidFields={setInvalidFields}
          invalidFields={invalidFields}
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
                setPayload({
                  phone: '',
                  password: '',
                  name: '',
                });
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
                setPayload({
                  phone: '',
                  password: '',
                  name: '',
                });
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
