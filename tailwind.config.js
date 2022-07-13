module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/images/uni-bg.jpg')",
        gradient:
          " linear-gradient(to bottom, #6366f1, #928af6, #b9b0fa, #ddd7fd, #ffffff);",
      },
      backgroundColor: {
        light: "#f5f6f",
      },
      boxShadow: {
        light: "0px 1px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
