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
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "Space Grotesk",
          "system-ui",
          "sans-serif",
        ],
        hand: ["var(--font-hand)", "cursive"],
      },
      colors: {
        brand: {
          bg: "var(--brand-bg)",
          surface: "var(--brand-surface)",
          card: "var(--brand-card)",
          border: "var(--brand-border)",
          accent: "#E85D3F",
          text: "var(--brand-text)",
          muted: "var(--brand-muted)",
          subtle: "var(--brand-subtle)",
        },
        ivory: "#FCFAF6",
        cream: "#F5F0E8",
        charcoal: "#151515",
        coral: "#E85D3F",
        "burnt-orange": "#C9472D",
        peach: "#F7C5B5",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(40px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out 1s infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "slide-up":
          "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
