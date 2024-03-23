const generateCode = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '123456789';
  let code = '';
  for (let index = 0; index < length - 1; index++) {
    code += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return `${code}${numbers.charAt(Math.floor(Math.random() * numbers.length))}`;
};

export default generateCode;
