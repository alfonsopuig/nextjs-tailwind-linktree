/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        skin: {
          base: 'var(--color-text-base)',
          inverted: 'var(--color-text-inverted)',      
        },
      },
      backgroundColor: {
        skin: {
          base: 'var(--color-bg-base)',
          buttonBase: 'var(--color-button-base)', 
          buttonBaseHover: 'var(--color-button-base-hover)',  
        },
      },
      backgroundImage: {
        'linearGradient':
          "linear-gradient(to bottom, var(--color-gradient-from), var(--color-gradient-to))",
      },
      borderColor: {
        skin: {             
          buttonBorder: 'var(--color-button-border-base)',
          buttonBorderHover: 'var(--color-button-border-base-hover)',
        },
      },
    },
  },
  plugins: [],
}
