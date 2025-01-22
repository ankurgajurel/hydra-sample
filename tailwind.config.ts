import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#302C42",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "header-button-secondary": "linear-gradient(to right, #8176AF, #C0B7E8)",
      }
    },
  },
  plugins: [],
} satisfies Config;
