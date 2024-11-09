/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          nunito: ['Nunito', 'sans-serif'],
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

