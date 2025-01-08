/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem'
      },
      colors: {
        primary: {
          DEFAULT: '#009055',
          50: '#ebfef3',
          100: '#d0fbe1',
          200: '#a4f6c8',
          300: '#6aebab',
          400: '#2fd889',
          500: '#0abf71',
          600: '#009055',
          700: '#007c4d',
          800: '#03623e',
          900: '#045034',
          950: '#012d1f'
        },
        secondary: {
          DEFAULT: '#90003c',
          50: '#ffeff2',
          100: '#ffe0e5',
          200: '#ffc5d3',
          300: '#ff96af',
          400: '#ff5b87',
          500: '#ff2263',
          600: '#ff0052',
          700: '#da0046',
          800: '#b60043',
          900: '#90003c',
          950: '#58001e'
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    }
  },
  plugins: []
}
