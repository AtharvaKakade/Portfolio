/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4e0101', // Custom primary color
        secondary: '#fff0f0', // Custom secondary color
      },
    },
  },
  plugins: [],
};
