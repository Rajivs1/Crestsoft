import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          bg:      "var(--brand-bg)",
          surface: "var(--brand-surface)",
          card:    "var(--brand-card)",
          border:  "var(--brand-border)",
          accent:  "#6366f1",
          glow:    "#818cf8",
          text:    "var(--brand-text)",
          muted:   "var(--brand-muted)",
          subtle:  "var(--brand-subtle)",
        },
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "glow": {
          "0%":   { opacity: "0.4", transform: "scale(1)" },
          "100%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "slide-up": {
          "0%":   { opacity: "0", transform: "translateY(40px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "blur-in": {
          "0%":   { opacity: "0", filter: "blur(12px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%":      { backgroundPosition: "100% 50%" },
        },
        "tilt": {
          "0%, 100%": { transform: "rotate(-1deg)" },
          "50%":      { transform: "rotate(1deg)" },
        },
      },
      animation: {
        "fade-up":      "fade-up 0.7s ease-out forwards",
        "float":        "float 6s ease-in-out infinite",
        "float-slow":   "float 9s ease-in-out 2s infinite",
        "shimmer":      "shimmer 2.5s linear infinite",
        "glow":         "glow 3s ease-in-out infinite alternate",
        "slide-up":     "slide-up 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "blur-in":      "blur-in 0.6s ease-out forwards",
        "gradient-x":   "gradient-x 6s ease infinite",
        "tilt":         "tilt 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
