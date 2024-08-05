/** @type {import('tailwindcss').Config} */
import background from './src/images/bgcolor.png'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    rotate: {
             '-180': '-180deg',
              '-90': '-90deg',
             '-45': '-45deg',
              '0': '0',
              '45': '45deg',
              '90': '90deg',
             '135': '135deg',
              '180': '180deg',
             '270': '270deg',
            },
    extend: {},
  plugins: [],
  },
}
