const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,astro,js,ts}"],

  theme: {
    extend: {
      fontFamily: {
        mono: ["'Roboto Mono', monospace", ...defaultTheme.fontFamily.mono],
        display: [
          "'Roboto Condensed', sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        body: ["'Roboto', sans-serif", ...defaultTheme.fontFamily.sans],
      },
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
      animation: {
        "loader-fade-out":
          "loader-fade-out 1.2s cubic-bezier(0.82, 0, 0.36, 1) 0.2s",
        "loader-logo-fade-out":
          "loader-logo-fade-out 0.75s cubic-bezier(0.82, 0, 0.36, 1)",
      },
      keyframes: {
        "loader-fade-out": {
          "95%, 100%": { top: "-100%" },
        },
        "loader-logo-fade-out": {
          "60%": { opacity: 0 },
          "100%": {
            opacity: 0,
            transform: "scale(0)",
          },
        },
      },
      fontSize: {
        xxs: ["0.625rem", "1.1"],
      },
    },
  },
  plugins: [],
};
