/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "red",
          dark: "#FF6363",
        },
        secondary: {
          DEFAULT: "green",
          dark: "#C0C0C0",
        },
      },
      // backgroundImage: (theme) => ({
      //   'custom-background': "url('/src/assets/images/background.jpg')",
      // }),
    },
  },
  plugins: [],
}

