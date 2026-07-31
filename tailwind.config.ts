import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8D5B8",     // Warm beige
        accent: "#C17C4A",      // Terracotta
        dark: "#0F0F0F",
        "dark-2": "#1A1A1A",
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  // Removed typography plugin for now (you can add it later)
  plugins: [],
};

export default config;