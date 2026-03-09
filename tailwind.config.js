/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pomegranate: "#8A2226"
      },
      fontFamily: {
        sans: ["Cal Sans", "sans-serif"],
        serif: ["Cal Sans", "sans-serif"],
        script: ["Cal Sans", "sans-serif"]
      }
    }
  },
  plugins: []
};
