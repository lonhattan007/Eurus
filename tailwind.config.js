/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        card: '0 10px 20px 0 rgba(0,0,0,.25)',
      },
      colors: {
        primary: '#3b71ca',
        cream: '#fff0e1',
        dark: '#28272b',
      },
      fontSize: {},
    },
  },
  plugins: [],
};
