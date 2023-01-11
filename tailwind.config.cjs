//  @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#191F2F",
        txt: "#5FF4D1",
        txt2: "#CCD6F6",
      },
      animation: {
        slideup: "slideup 1s ease-in-out",
      },
      keyframes: {
        slideup: {
          from: { opacity: 0, transform: "translateY(25%)" },
          to: { opacity: 1, transform: "none" },
        },
      },
    },

    fontFamily: {
      fira: ["'Fira Code'", "monospace"],
      inter: ["'Inter'", "sans-serif"],
    },
  },
  plugins: [],
};
