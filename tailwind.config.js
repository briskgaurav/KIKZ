/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      clipPath: {
        'cut-corner': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 80%)',
      },
    },
  },
  plugins: [],
};
