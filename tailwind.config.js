/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'violet':{
        'soft':'#9D71FD',
        'dark':'#543E81'
      },
      'light': {
        200:'#E8E6EC',
        400:'#A39CB5',
        700:'#5F517D'
      },
      'purple':{
        100:'#F2EFFE',
        300:'#D7CFFD'
      },
    },
    screens: {
      'sm': '640px',
      'md': '870px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}