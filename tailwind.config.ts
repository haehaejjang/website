import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F7F7F5",
        surface: "#FFFFFF",
        ink: "#111111",
        muted: "#666666",
        line: "#DDDDDD",
        accent: "#B7A7FF",
        "accent-soft": "#C8BFFF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1180px",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
