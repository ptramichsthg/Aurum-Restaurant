/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#d4af35",
                "background-light": "#f8f7f6",
                "background-dark": "#201d12",
                "surface-dark": "#302c1c",
                "text-gold-muted": "#c3b998",
                // Keeping previous ones just in case, but mapped effectively
                'aurum-black': '#201d12',
                'aurum-gold': '#d4af35',
                'aurum-gray': '#302c1c',
                'aurum-offwhite': '#f8f7f6',
            },
            fontFamily: {
                "display": ["Montserrat", "sans-serif"],
                "serif": ["Cormorant Garamond", "serif"],
                // Keeping defaults for compatibility
                sans: ["Montserrat", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
