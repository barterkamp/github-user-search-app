/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ['SpaceMono', 'monospaced'],
      },
      fontSize: {
        xs: ['11px'],
        sm: ['13px', '25px'],
        base: ['15px', '25px'],
        lg: ['16px', '24px'],
        xl: ['22px', '33px'],
        '2xl': ['26px', '38px'],
      },
      colors: {
        azure: '#0079FF',
        blueJeans: '#60ABFF',
        slateGray: '#697C9A',
        queenBlue: '#4B6A9B',
        cadetBlue: '#A0B0D9',
        gunMetal: '#2B3442',
        gunMetalDark: '#141D2F',
        yankeesBlue: '#1E2A47',
        charlestonGreen: '#222731',
        ghostWhite: '#F6F8FF',
        offWhite: '#FEFEFE',
        antiFlashWhite: '#F2F2F2',
        white: '#FFFFFF',
        tartOrange: '#F74646',
      },
      boxShadow: {
        custom: '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
      },
    },
  },
  plugins: [],
};
