/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#ffffff",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '0' },
          '10%, 30%': { opacity: '0.8' },
          '20%': { opacity: '0' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      animation: {
        flash: 'flash 0.5s ease-out',
      }
    },
  },
  plugins: [],
};
