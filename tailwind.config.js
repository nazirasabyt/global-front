/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../public/img/hero.png')",
        "section-map": "url('../public/img/map.png')",
      },
      colors: {
        "brand-clr": "#8DD3BB",
        "salmon-clr": "#FF8682",
        "gray-primary": "#112211",
      },

      width: {
        "90vw": "90vw",
        "80vw": "80vw",
        "70vw": "70vw",
        "80%": "80%",
        "90%": "90%",
        "98%": "98%",
      },
      height: {
        "103px": "103px",
        "300px": "300px",
        "580px": "580px",
        "60vh": "60vh",
        "85vh": "85vh",
        "88vh": "88vh",
      },

      inset: {
        "2px": "2px",
        "3px": "3px",
        "500px": "500px",
        "5%": "5%",
      },
      gap: {
        "10px": "10px",
      },
      margin: {
        "5px": "5px",
        "6px": "6px",
      },
      padding: {
        "2px": "2px",
        "5px": "5px",
        "7px": "7px",
      },
      brightness: {
        0.9: "0.9",
      },
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
