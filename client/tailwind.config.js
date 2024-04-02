/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      width: {
        1100: '1100px',
      },
      backgroundColor: {
        primary: 'rgb(245, 245, 245)',
        secondary1: 'rgb(18, 102, 221)',
        secondary2: 'rgb(247, 56, 89)',
      },
      border: ['hover', 'focus'],
      maxWidth: {
        600: '600px',
        1100: '1100px',
      },
    },
  },
  plugins: [],
};
