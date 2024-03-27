export const path = {
  HOME: '/*',
  LOGIN: 'login',
  CHO_THUE_CAN_HO: 'cho-thue-can-ho',
  MAT_BANG_VAN_PHONG: 'mat-bang-van-phong',
  CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
  NHA_CHO_THUE: 'nha-cho-thue',
};

export const formatVietnameseToString = (keyword) => {
  return keyword
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(' ')
    .join('-');
};
