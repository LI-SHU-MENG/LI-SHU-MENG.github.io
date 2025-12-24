/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            width: {
                "20vw": "20vw",
                "70vw": "70vw"
            },
            height: {
                "20vw": "20vw"
            },
            colors: {
                "linen": "#F9F8F7"
            },
            flex:{
                "column-nowrap" : "column nowrap"
            },
            fontSize:{
                "3vw": "3vw"
            },
            // blur: {
            //     "xs": "1px",
            //     "sm": "2px",
            // }
        },
        fontFamily: {
            abel: ['Abel', 'sans-serif'],
        }
    },
    plugins: [],
};
