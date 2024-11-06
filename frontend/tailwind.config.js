/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#004AAD",
        secondary: "#D10505",
      },
      screens: {
        sm: "640px", // min-width: 640px
        md: "768px", // min-width: 768px
        lg: "1024px", // min-width: 1024px
        xl: "1280px", // min-width: 1280px
        "2xl": "1536px", // min-width: 1536px
        sx: { max: "640px" }, // max-width: 640px
      },
    },
  },
  plugins: [],
};
