import { fontFamily } from "tailwindcss/defaultTheme";

import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "18px",
        sm: "1.25rem",
        md: "1.75rem",
        lg: "2rem",
        xl: "2rem",
      },
      screens: {
        sm: "686px",
        md: "768px",
        lg: "1024px",
        xl: "1183px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1183px",
    },
    extend: {
      borderRadius: {
        DEFAULT: "10px",
      },
      linearGradients: {
        // Example gradients
        "purple-to-magenta": ["90deg", "#5B0BFF", "#8E2DE2"],
        "blue-to-green": ["90deg", "#0575E6", "#00F260"],
      },
      colors: {
        bg: "#070724",
        primary: {
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
        },
        purple: {
          400: "#BA9CFF",
          500: "#5721CC",
          600: "#3C0F9E",
        },
        blue: {
          400: "#4BA5FF",
          500: "#0575E6",
          600: "#0762BD",
        },
      },
      fontFamily: {
        sans: ["var(--font-geologica)", "Arial", ...fontFamily.sans],
      },
      fontSize: {
        h1: "45px",
        h2: "15px",
        lead: "20px",
      },
      keyframes: {},
      spacing: {
        site: "1183px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwindcss-gradients")],
} satisfies Config;
