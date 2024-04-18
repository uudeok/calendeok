/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            height: {
                450: '450px',
            },
            colors: {
                'bright-blue': '#1773EF',
                'light-gray': '#D6E1E5',
                'light-green': '#19C37D',
            },
            fontSize: {
                ss: '10px',
                sm: '0.7rem',
                15: '15px',
            },
            width: {
                14: '14.28%',
                350: '350px',
            },
            fontFamily: {
                pre: ['Pretendard-Regular'],
            },
        },
    },
    plugins: [],
};
