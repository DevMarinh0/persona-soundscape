/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        persona: {
          blue: '#0066ff',
          yellow: '#ffcc00',
          red: '#ff0000',
        }
      }
    },
  },
  plugins: [],
}