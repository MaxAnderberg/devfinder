module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable darkmode
  theme: {
    extend: {
      colors:{
        'primary-gray': "#F6F8FF",
        'primary-white': "#FEFEFE",
        'button-blue': "#0079FF",
        'button-hover': "#60ABFF",
        'dark-primary': "#141D2F",
        'dark-secondary': "#1E2A47",
        'dark-white': "#FEFEFE",
        'dark-button-blue': "#YourDarkButtonBlue",
        'dark-button-hover': "#YourDarkButtonHover",
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