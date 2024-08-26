/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7a4ae4',
        secondary: '#382760',
        font: '#fffefe',
        background: '#0f0716',
      },
      backgroundClip: {
        text: 'text',
      },
    },
  },
  variants: {
    backgroundClip: ['responsive'],
  },
  plugins: [],
};
