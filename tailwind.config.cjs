//  @type {import('tailwindcss').Config}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#191F2F",
        ico: "#BDE4E6",
        txt: "#5FF4D1",
        txt2: "#CCD6F6",
      },
    },

    fontFamily: {
      fira: ["'Fira Code'", "monospace"],
      roboto: ["'Roboto Mono'", "monospace"],
      inter: ["'Inter'", "sans-serif"],
      mon: ["'Montserrat'", "sans-serif"],
    },
  },
  plugins: [],
};
