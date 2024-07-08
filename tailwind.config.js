/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spaceMono: ["SpaceMono", "monospaced"],
      },
      fontSize: {
        "xs": ["11px"],
        "sm": ["13px", "25px"],
        "base": ["15px", "25px"],
        "lg": ["16px", "24px"],
        "xl": ["22px", "33px"],
        "2xl": ["26px", "38px"],
      },
      colors: {
        azure: "#0079FF",
        slateGray: "#697C9A",
        queenBlue: "#4B6A9B",
        gunMetal: "#2B3442",
        gunMetalDark: "#141D2F",
        yankeesBlue: "#1E2A47",
        charlestonGreen: "#222731",
        ghostWhite:"#F6F8FF",
        offWhite: "#FEFEFE",
        white: "#FFFFFF",
        tartOrange: "#F74646",
      },
    },
  },
  plugins: [],
}
