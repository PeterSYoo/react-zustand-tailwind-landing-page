/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        textBgLight: "url('/img/light/text-bg.png')",
        textBgDark: "url('/img/dark/text-bg.png')",
      },
      fontFamily: {
        lexend: ['"Lexend"'],
      },
    },
  },
  plugins: [],
};
