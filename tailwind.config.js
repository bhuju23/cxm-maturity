/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        'accent-red': '#FF4242',
        'reso-dark': '#FE520B',
        'reso-light': '#F6CA45',
        'reso-gray': '#C1C5CA',
        'reso-lightorange': '#FFF2EC',
        'reso-orange': '#F04701',

        yellow: {
          500: '#FE520B',
          600: '#F04B23'
        },
        navy: {
          100: '#D3D0DC',
          200: '#A6A1B9',
          300: '#7A7397',
          700: '#17191B',
          800: '#0F1119'
        },
        gray: {
          50: '#EEEEEE',
          100: '#E6E8EA',
          200: '#F6F6F3',
          250: '#A1A1A1',
          300: '#C8C9CB',
          350: '#848C94',
          400: '#E7E8E8',
          450: '#E6E8E9',
          500: '#76797B',
          550: '#BABABA',
          600: '#54585A',
          700: '#3F4244',
          800: '#2A2C2D',
          900: '#151617',
          1000: '#505255',
          1100: '#454749'
        }
      },
      stroke: (theme) => ({
        ...theme('colors')
      }),
      fill: (theme) => ({
        ...theme('colors')
      }),
      borderWidth: {
        default: '1px',
        0: '0',
        2: '2px',
        3: '3px',
        4: '4px'
      },
      boxShadow: {
        sm: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        md: '2px 4px 8px 0px #00000040',
        DEFAULT: '0 3px 6px 0 rgba(0, 0, 0, 0.32)',
        'sm-right': '1px 0 2px rgba(0, 0, 0, 0.2)',
        lg: '0 3px 16px 0 rgba(0, 0, 0, 32%)'
      },
      backgroundColor: (theme) => ({
        ...theme('colors')
      }),
      fontFamily: {
        sans: ['montserrat', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '2.5rem', // 40px
        '6xl': '3rem', // 48px
        '7xl': '4rem', // 64px
        '8xl': '5rem', // 80px
        '9xl': '6rem' // 96px
      }
    },
    screens: {
      sm: '640px',
      md: '800px',
      lg: '1025px',
      xl: '1280px',
      exl: '1400px'
    }
  },
  // eslint-disable-next-line global-require
  plugins: [],
  
}

