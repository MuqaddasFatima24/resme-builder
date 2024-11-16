// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F5591", // Blue
        secondary: "#222222", // Dark gray
        accent: "#1F5591", // Blue
        gradientStart: "#E0E7FF", // Light blue
        gradientEnd: "#EFF6FF", // Very light blue
      },
      backgroundImage: {
        'gradient-bg': "linear-gradient(to bottom right, var(--tw-color-gradientStart), var(--tw-color-gradientEnd))",
      },
    },
  },
  plugins: [],
};



