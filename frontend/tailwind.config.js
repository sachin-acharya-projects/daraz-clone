/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                custom: "0 0px 5px rgba(0, 0, 0, 0.4)",
                "custom-soft": "0 0px 60px -15px rgba(0, 0, 0, 0.4)",
            },
            colors: {
                primary: {
                    DEFAULT: "#ff5e5e",
                    dark: "#d64a4a",
                },
            },
        },
    },
    plugins: [],
}
