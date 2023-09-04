/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Bricolage Grotesque"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require('daisyui')]
};
