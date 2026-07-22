/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sp': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        editorial: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        paper: '#F3F0E8',
        ink: '#171714',
        muted: '#57564F',
        faint: '#77746B',
        accent: '#A3452F',
      },
      padding: {
        '40': '25px'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
