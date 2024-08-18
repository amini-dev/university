/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.html"],
    darkMode: "class",
    theme: {
        container: {
            center: true,
            padding: ".75rem",
        },
        fontFamily: {
            irYekan: "irYekan",
            rokh: "rokh",
            fontAwesome: "Font Awesome 6 Pro",
        },
        extend: {
            screens: {
                xs: "480px",
            },
            colors: {
                dark: {
                    800: "rgb(27 52 77/1) !important;",
                    850: "rgb(14 35 56/1) !important;",
                    900: "rgb(15 30 47/1) !important;",
                },
                gray: {
                    950: "rgb(210 221 236/1)",
                },
            },
            boxShadow: {
                primary: "0 2px 12px 6px rgb(0 0 0 / 0.1)",
            },
        },
    },
    plugins: [],
};
