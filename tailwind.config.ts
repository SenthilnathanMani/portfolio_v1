import type { Config } from "tailwindcss";


export default {
    darkMode: "class",
    content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
    theme: {
        extend: {
            transitionTimingFunction: {
                smooth: "cubic-bezier(0.4, 0, 0.2, 1)"
            }
        }
    },
    plugins: []
} satisfies Config