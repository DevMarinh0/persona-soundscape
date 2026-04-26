// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        persona: {
          p3: '#252a7d',
          p4: '#f9a825',
          p5: '#d32f2f',
          dark: '#0a0a0a',
          card: '#1a1a1a',
          border: '#2a2a2a'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}