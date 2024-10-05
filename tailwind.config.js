/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Fredoka": ["Fredoka", 'sans-serif'],
        "Babes": ["Bebas Neue", 'sans-serif'],
        "DMSans":['DM Sans','sans-serif']
      }
  },
},
  plugins: [],
}
