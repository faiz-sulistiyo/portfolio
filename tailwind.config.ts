import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./views/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      animation: {
        'spin-5': 'spin 5s linear infinite',
        'fade-down': 'fadeDown 1000ms ease-in-out',
        'fade-up': 'fadeUp 1000ms ease-in-out',
      },
      keyframes: {
        fadeDown: {
          '0%': { opacity: "0", transform: 'translateY(-50px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
        fadeUp: {
          '0%': { opacity: "0", transform: 'translateY(50px)' },
          '100%': { opacity: "1", transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "spanish-gray": "#6f6f6f",
      },
      fontSize: {
        "9xl": "7.75rem"
      }
    },
  },
  plugins: [],
};
export default config;
