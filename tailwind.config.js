const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html, js, ts}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#6919ff",
          light: "#9754ef",
        },
        neutrals: {
          900: "#0f1922",
          700: "#1f2731",
          500: "#2d353e",
          50: "#fffefa",
        },
        "success-cyan": "#48e3aa",
        "alert-red": "#ff4665",
      },
      keyframes: {
        typing: {
          "0%, 100%": { width: "0%" },
          "40%, 70%": { width: "100%" },
        },
      },
      fontFamily: {
        display: "'Roboto Condensed', sans-serif",
        body: "'Roboto', sans-serif",

        mono: ["'Roboto Mono', monospace", ...defaultTheme.fontFamily.mono],
      },
      height: {
        18: "4.5rem",
      },
      width: {
        18: "4.5rem",
      },
      borderWidth: {
        3: "3px",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      fontSize: {
        xxs: ["0.625rem", "1.1"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
