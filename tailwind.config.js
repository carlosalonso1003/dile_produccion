/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-up": "fade-up 1s ease-in-out",
        "fade-up-delay-1": "fade-up 1s ease-in-out 1s",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "fade-up-delay-1": {
          "0%": {
            opacity: 0,
            transform: "translateY(100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      },
      boxShadow: {
        custom: "10px 10px 10px rgba(0, 0, 0, 0.5)",
      },
      colors: {
        secondary: {
          50: "#fffaeb",
          100: "#feefc7",
          200: "#fdde8a",
          300: "#fdc74c",
          400: "#fcb42e",
          500: "#f68d0a",
          600: "#da6805",
          700: "#b54708",
          800: "#93370d",
          900: "#782e0f",
          950: "#451503",
        },

        primary: {
          50: "#eff8ff",
          100: "#dfefff",
          200: "#b7e1ff",
          300: "#78caff",
          400: "#30b0ff",
          500: "#0595f2",
          600: "#0077cf",
          700: "#005ea7",
          800: "#02518c",
          900: "#084372",
          950: "#052a4c",
        },
      },
      screens: {
        smm: "400px",
        "2smm": "520px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
