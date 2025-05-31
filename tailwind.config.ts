import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        blink: "blink 1.5s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" }, // Ensure values are in string format
          "50%": { opacity: "0" },      // Ensure values are in string format
        },
      },
      colors: {
        neonGreen: '#e5d9fa',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#9b87f5",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#1A1F2C",
          foreground: "#ffffff",
        },
        sections: {
          hero: "linear-gradient(to bottom right, #330505, #000000 40%, #000000 60%, #330505)",
          about: "#808080", // Medium gray
          services: "#D3D3D3", // Light gray
          testimonials: "#36454F", // Charcoal
          footer: "#1A1A1A", // Very dark gray
        },
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#ffffff",
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
