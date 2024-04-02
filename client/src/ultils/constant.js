export const path = {
  HOME: '/*',
  LOGIN: 'login',
  CHO_THUE_CAN_HO: 'cho-thue-can-ho',
  MAT_BANG_VAN_PHONG: 'mat-bang-van-phong',
  CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
  NHA_CHO_THUE: 'nha-cho-thue',
};

export const text = {
  HOME_TITLE: 'Tìm kiếm chỗ thuê ưng ý',
  HOME_DESCRIPTION: 'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.',
};

export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('-');
};
