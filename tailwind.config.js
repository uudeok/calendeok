/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-blue": "#1773EF",
        "light-gray": "#D6E1E5",
      },
      fontSize: {
        sm: "0.7rem",
      },
      width: {
        14: "14.28%",
      },
    },
  },
  plugins: [],
};
