import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "foreground": "var(--foreground)",
        "foreground-menu": "var(--foreground-menu)",
        "background": "var(--background)",
        "secondary": "var(--secondary)",
        "primary": "var(--primary)",
        "border": "var(--border)",
      }
    },
  },
  plugins: [],
};
export default config;
