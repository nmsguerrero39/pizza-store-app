/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "play-hr": ["'Playwrite HR Lijeva'", "cursive"],
        sans: ["'Roboto'", "sans-serif"],
      },
      backgroundImage: {
        "hero-section": "url('../src/assets/images/background-image.avif')",
      },
    },
  },
  plugins: [],
};
