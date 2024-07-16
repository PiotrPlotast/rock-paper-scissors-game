/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gradient-start": "#1F3757",
        "gradient-end": "#131537",
      },
      fontFamily: {
        main: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
