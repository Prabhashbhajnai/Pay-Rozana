module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '027': '27rem',
      },
      colors: {
        grey: {
          50: '#eff5f3',
          100: '#ded7da',
          200: '#c2bec1',
          300: '#a8a4a7',
          400: '#8e8a8d',
          500: '#747073',
          600: '#5b575a',
          700: '#423e42',
          800: '#292429',
          900: '#120912',
        },
        aboutGreen: {
          50: '#1D5329'
        }
      }
    },
  },
  plugins: [],
}
