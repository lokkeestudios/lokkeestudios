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
        brand: "#6919ff",
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
        "glitch-1": "glitch 4s linear infinite alternate-reverse",
        "glitch-2": "glitch 2s linear infinite alternate-reverse",
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
        glitch: {
          "10.5263%": {
            clip: "rect(65px,9999px,200px,0)",
          },
          "15.7895%": {
            clip: "rect(8px,9999px,200px,0)",
          },
          "21.0526%": {
            clip: "rect(51px,9999px,159px,0)",
          },
          "26.3158%": {
            clip: "rect(6px,9999px,82px,0)",
          },
          "31.5789%": {
            clip: "rect(1px,9999px,106px,0)",
          },
          "36.8421%": {
            clip: "rect(17px,9999px,69px,0)",
          },
          "42.1053%": {
            clip: "rect(65px,9999px,144px,0)",
          },
          "47.3684%": {
            clip: "rect(1px,9999px,91px,0)",
          },
          "52.6316%": {
            clip: "rect(18px,9999px,209px,0)",
          },
          "57.8947%": {
            clip: "rect(14px,9999px,175px,0)",
          },
          "63.1579%": {
            clip: "rect(61px,9999px,107px,0)",
          },
          "68.4211%": {
            clip: "rect(73px,9999px,178px,0)",
          },
          "73.6842%": {
            clip: "rect(53px,9999px,207px,0)",
          },
          "78.9474%": {
            clip: "rect(33px,9999px,199px,0)",
          },
          "84.2105%": {
            clip: "rect(73px,9999px,144px,0)",
          },
          "89.4737%": {
            clip: "rect(79px,9999px,163px,0)",
          },
          "94.7369%": {
            clip: "rect(1px,9999px,76px,0)",
          },
          "100%": {
            clip: "rect(64px,9999px,117px,0)",
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
