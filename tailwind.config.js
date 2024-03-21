/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#b55152",
        "gray-50": "#9e3c3d",
        "gray-100": "#7a2728",
        "red-500": "#671d1e",
        "primary-100": "#f5f1f0",
        "primary-300": "#e6e2e1",
        "primary-500": "#d9d5d4",
        "secondary-300": "#eb8e54",
        "secondary-500": "#cf6e32",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", 'sans-serif']
      },
    },
    screens: {
      xs: "480px", // extra small
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}