/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffffff',   // White
          100: '#fefefe',
          200: '#fcfcfc',
          300: '#fafafa',
          400: '#f8f8f8',
          500: '#f5f5f5',
          600: '#eeeeee',
          700: '#e0e0e0',
          800: '#bdbdbd',
          900: '#9e9e9e'
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12'
        },
        black: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8eaed',
          300: '#dadce0',
          400: '#bdc1c6',
          500: '#9aa0a6',
          600: '#80868b',
          700: '#5f6368',
          800: '#3c4043',
          900: '#000000'
        },
        filipino: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
          'orange-light': '#fb923c',
          black: '#000000',
          white: '#ffffff',
          'warm-white': '#fefefe',
          'dark-orange': '#c2410c'
        },
        accent: {
          white: '#ffffff',
          orange: '#f97316',
          black: '#000000',
          'orange-light': '#fb923c',
          'orange-dark': '#ea580c'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'noto': ['Noto Serif', 'serif'],
        'chalk': ['"Schoolbell"', '"Kalam"', 'cursive', 'sans-serif'],
        'blackboard': ['"Walter Turncoat"', '"Fredoka One"', 'cursive', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};