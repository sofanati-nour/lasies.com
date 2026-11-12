import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./libs/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: { DEFAULT: "#F7F2E8", dark: "#EDE4D1", light: "#FBF8F2" },
        olive: {
          950: "#121811",
          900: "#1B2419",
          800: "#263222",
          700: "#35442F",
          600: "#4F5F47",
        },
        gold: { light: "#E5CB82", DEFAULT: "#C9A23A", dark: "#8C6B16" },
        ink: { DEFAULT: "#1C1E19", muted: "#5E6157" },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "hero-fade": {
          "0%": { opacity: "0" },
          "6%": { opacity: "1" },
          "33%": { opacity: "1" },
          "39%": { opacity: "0" },
          "100%": { opacity: "0" },
        },
        "ken-burns": {
          from: { transform: "scale(1.02)" },
          to: { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.2, 0.7, 0.2, 1) both",
        marquee: "marquee 40s linear infinite",
        "hero-fade": "hero-fade 21s linear infinite",
        "ken-burns": "ken-burns 21s ease-out infinite alternate",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
