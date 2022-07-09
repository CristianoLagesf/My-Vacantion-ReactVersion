/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: 'url(src/assets/images/top-img.jpg)',
        bgImageCompany: 'url(src/assets/images/placas.jpg)',

      },
      backgroundColor: {
        'bg-Company': '#070335',

      },
      boxShadow: {
        'box-Card': '0px 2px 5px rgba(35,35,35,0.3)',
      },
      fontFamily: {
        PT: 'PT, sans-serif',
      },
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
          login: '#5891ff',
          5: '#050872',
          10: '#070335',
          checkout: '#1e2148'
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          10: '#FEFEFE',
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],

}
