import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          bg:      "#09090b",
          surface: "#111113",
          card:    "#18181b",
          border:  "#27272a",
          accent:  "#6366f1",
          glow:    "#818cf8",
          text:    "#fafafa",
          muted:   "#a1a1aa",
          subtle:  "#52525b",
        },
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up":  "fade-up 0.6s ease-out forwards",
        "float":    "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out 2s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
