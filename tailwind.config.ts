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
        "button-secondary": "linear-gradient(to right, #8176AF, #C0B7E8)",
        "form-radial":
          "radial-gradient(circle farthest-side at center, #403A5F, #211E2E)",
        "feature-card":
          "radial-gradient(circle farthest-side at center, #433D60, #211E2E)",
      },
    },
  },
  plugins: [],
} satisfies Config;
