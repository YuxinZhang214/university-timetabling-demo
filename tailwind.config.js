/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        'screen-50': '50vh',
      },margin: {
        '6.25': '25px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

