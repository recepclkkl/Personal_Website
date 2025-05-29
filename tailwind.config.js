/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
       fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        lilac: '#EEEBFF',
      },
      boxShadow: {
        'custom-xl': '0px 18px 88px -4px #18274B24',
        'custom-md': '0px 8px 28px -6px #18274B1F',
      },
    },
  },
  plugins: [],
}

