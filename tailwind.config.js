/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        'sapphire-blue': '#073B4C',
        'burgundy': '#611224',
        'pure-white': '#ffffff',
        'white-5': 'rgba(255, 255, 255, 0.05)',
        'white-10': 'rgba(255, 255, 255, 0.1)',
        'white-20': 'rgba(255, 255, 255, 0.2)',
        'white-30': 'rgba(255, 255, 255, 0.3)',
        'sapphire-10': 'rgba(7, 59, 76, 0.1)',
        'sapphire-20': 'rgba(7, 59, 76, 0.2)',
        'sapphire-30': 'rgba(7, 59, 76, 0.3)',
        'burgundy-10': 'rgba(97, 18, 36, 0.1)',
        'burgundy-20': 'rgba(97, 18, 36, 0.2)',
        'burgundy-30': 'rgba(97, 18, 36, 0.3)',
      },
      boxShadow: {
        'neon-magenta': '0 0 20px rgba(255, 0, 204, 0.5)',
        'neon-indigo': '0 0 20px rgba(51, 51, 153, 0.5)',
        'neon-white': '0 0 20px rgba(255, 255, 255, 0.3)',
      },
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
      },
      animation: {
        "horizontal-scroll": "horizontal-scroll linear 16s infinite ",
        "horizontal-scroll-2": "horizontal-scroll-2 linear 16s infinite ",
      },
      keyframes: {
        "horizontal-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "horizontal-scroll-2": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
