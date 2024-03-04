/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "regal-blue": "#1773EF",
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
