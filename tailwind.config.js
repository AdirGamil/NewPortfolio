// tailwind.config.js
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#F6F1FF',
        darkHover: '#32004a',
        darkTheme: '#10001F',
      },
    },
  },
  plugins: [],
}

