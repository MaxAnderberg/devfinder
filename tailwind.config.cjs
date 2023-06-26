module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable darkmode
  theme: {
    extend: {
      colors:{
        'primary-gray': "#F6F8FF",
        'primary-white': "#FEFEFE",
        'secondary-gray': "#2B3442",
        'secondary-white': "#4B6A9B",
        'button-blue': "#0079FF",
        'button-hover': "#60ABFF",
        'dark-primary': "#141D2F",
        'dark-accent': "#222731",
        'dark-secondary': "#1E2A47",
        'dark-white-secondary': "#697C9A",
        'dark-white': "#FEFEFE",
        'button-hover': "#90A4D4",
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark']
    },
  },
  plugins: [],
};