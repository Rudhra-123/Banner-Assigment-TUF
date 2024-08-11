module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-out forwards',
      },
      colors: {
        'blue-500': '#4299e1',
        'blue-600': '#3182ce',
        'yellow-300': '#faf089',
        'yellow-400': '#f6e05e',
      },
      borderRadius: {
        'lg': '0.5rem',
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
