module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Mulish",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1192px",
    },
    extend: {
      colors: {
        primary: "#0E1112",
        secondary: "#1C1D24",
        grey: "#484B4B",
        accent: {
          DEFAULT: "#0E1112",
          hover: "#925a2b",
        },
        paragraph: "#878e99",
      },
    },
  },
  plugins: [],
};
