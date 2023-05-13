module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // Enable darkmode
  theme: {
    extend: {
      colors:{
        'primary-blue': "#141D2F",
        'button-blue': "#0079FF",
        'button-hover': "#60ABFF",
        'dark-primary-blue': "#FFF",
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