module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'blink': '1.4s cubic-bezier(0.4, 0, 0.6, 1) blink infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 90 },
        }
      },
      screens: {
        'lg': '1230px',
      },
      colors: {
        text: '#D9D9D9',
        bg: '#222222',
        bgDarker: '#3f3f3f',
        primary: '#BC4B51',
        secondary: '#7678ED',
      },
    },
  },
  plugins: [
  ],
}

