/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      animation: {
        pulse: 'pulse 0.7s ease-out infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 var(--pulse-color)' },
          '50%': { boxShadow: '0 0 0 8px var(--pulse-color)' },
        },
      },
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      boxShadow: {
        'box-shadow': '3px 5px 24px 0px rgba(15,7,22,0.75);',
        '-webkit-box-shadow': ' 3px 5px 24px 0px rgba(15,7,22,0.75);',
        '-moz-box-shadow': '3px 5px 24px 0px rgba(15,7,22,0.75);',
      },
      colors: {
        primary: '#8E64E8',
        secondary: '#382760',
        font: '#fffefe',
        background: '#0f0716',
      },
      backgroundClip: {
        text: 'text',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle,  #2a1f33 0%, #0f0716  30%)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  variants: {
    backgroundClip: ['responsive'],
  },
  plugins: [require('tailwindcss-animate')],
};
