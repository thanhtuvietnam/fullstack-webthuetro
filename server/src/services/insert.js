import db from '../models';
import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
// import chothuecanho from '../../data/chothuecanho.json';
// import matbangvanphong from '../../data/matbangvanphong.json';
// import nhachothue from '../../data/nhachothue.json';
import chothuephongtro from '../../data/chothuephongtro.json';
import generateCode from '../utils/generateCode';
require('dotenv').config();

const dataBody = chothuephongtro.body;

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.header?.class?.classType);
        let attributesID = v4();
        let userID = v4();
        let imagesId = v4();
        let overviewID = v4();
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributesID: attributesID,
          categoryCode: 'CTPT',
          description: JSON.stringify(item?.mainContent?.content),
          userID: userID,
          overviewID,
          imagesId,
        });
        await db.Attribute.create({
          id: attributesID,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });
        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });
        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });
        await db.Overview.create({
          id: overviewID,
          code: item?.overviewMain?.content.find((i) => i.name === 'Mã tin:')?.content,
          area: item?.overviewMain?.content.find((i) => i.name === 'Khu vực')?.content,
          type: item?.overviewMain?.content.find((i) => i.name === 'Loại tin rao:')?.content,
          target: item?.overviewMain?.content.find((i) => i.name === 'Đối tượng thuê:')?.content,
          bonus: item?.overviewMain?.content.find((i) => i.name === 'Gói tin:')?.content,
          created: item?.overviewMain?.content.find((i) => i.name === 'Ngày đăng:')?.content,
          expired: item?.overviewMain?.content.find((i) => i.name === 'Ngày hết hạn:')?.content,
        });
        await db.User.create({
          id: userID,
          name: item?.contactMain?.content.find((i) => i.name === 'Liên hệ:')?.content,
          password: hashPassword('123456'),
          phone: item?.contactMain?.content.find((i) => i.name === 'Điện thoại:')?.content,
          zalo: item?.contactMain?.content.find((i) => i.name === 'Zalo')?.content,
        });
      });
      resolve('Done!');
    } catch (error) {
      reject(error);
    }
  });
