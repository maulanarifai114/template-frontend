import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    //
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    fontSize: {
      h1: ["36px", { lineHeight: "40px", fontWeight: "700" }],
      h2: ["28px", { lineHeight: "32px", fontWeight: "600" }],
      h3: ["24px", { lineHeight: "28px", fontWeight: "700" }],
      h4: ["20px", { lineHeight: "24px", fontWeight: "500" }],
      h5: ["16px", { lineHeight: "20px", fontWeight: "700" }],
      h6: ["14px", { lineHeight: "16px", fontWeight: "600" }],
      h7: ["12px", { lineHeight: "16px", fontWeight: "700" }],
      h8: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      body: ["12px", { lineHeight: "16px", fontWeight: "500" }],
      small: ["11px", { lineHeight: "16px", fontWeight: "500" }],
      bold: ["12px", { lineHeight: "16px", fontWeight: "700" }],
      italic: ["12px", { lineHeight: "16px", fontWeight: "700" }],
      link: ["12px", { lineHeight: "16px", fontWeight: "600" }],
      paragraph: ["12px", { lineHeight: "24px", fontWeight: "500" }],
      "paragraph-indent": ["12px", { lineHeight: "24px", fontWeight: "500" }],
      "extra-small": ["8px", { lineHeight: "12px", fontWeight: "500" }],
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      monospace: 'Consolas, "Courier New", monospace',
    },
    colors: {
      white: "rgb(var(--color-white) / 1)",
      black: "rgb(var(--color-black) / 1)",
      primary: {
        100: "rgb(var(--color-primary-100) / 1)",
        200: "rgb(var(--color-primary-200) / 1)",
        300: "rgb(var(--color-primary-300) / 1)",
        400: "rgb(var(--color-primary-400) / 1)",
        500: "rgb(var(--color-primary-500) / 1)",
        600: "rgb(var(--color-primary-600) / 1)",
        700: "rgb(var(--color-primary-700) / 1)",
      },
      secondary: {
        100: "rgb(var(--color-secondary-100) / 1)",
        200: "rgb(var(--color-secondary-200) / 1)",
        300: "rgb(var(--color-secondary-300) / 1)",
        400: "rgb(var(--color-secondary-400) / 1)",
        500: "rgb(var(--color-secondary-500) / 1)",
        600: "rgb(var(--color-secondary-600) / 1)",
        700: "rgb(var(--color-secondary-700) / 1)",
      },
      neutral: {
        100: "rgb(var(--color-neutral-100) / 1)",
        200: "rgb(var(--color-neutral-200) / 1)",
        300: "rgb(var(--color-neutral-300) / 1)",
        400: "rgb(var(--color-neutral-400) / 1)",
        500: "rgb(var(--color-neutral-500) / 1)",
        600: "rgb(var(--color-neutral-600) / 1)",
        700: "rgb(var(--color-neutral-700) / 1)",
        800: "rgb(var(--color-neutral-800) / 1)",
        900: "rgb(var(--color-neutral-900) / 1)",
      },
      success: {
        100: "rgb(var(--color-success-100) / 1)",
        500: "rgb(var(--color-success-500) / 1)",
        600: "rgb(var(--color-success-600) / 1)",
      },
      warning: {
        100: "rgb(var(--color-warning-100) / 1)",
        500: "rgb(var(--color-warning-500) / 1)",
        600: "rgb(var(--color-warning-600) / 1)",
      },
      danger: {
        100: "rgb(var(--color-danger-100) / 1)",
        500: "rgb(var(--color-danger-500) / 1)",
        600: "rgb(var(--color-danger-600) / 1)",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
