module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
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
        text: '#6F5643',
        bg: '#ECE6C2',
        bgDarker: '#F8F6E8',
        primary: '#D2A24C',
        secondary: '#CC6B49',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            strong: {
              color: '#CC6B49',
            },
            '--tw-prose-quotes': theme('colors.secondary'),
            '--tw-prose-quote-borders': theme('colors.secondary'),
            '--tw-prose-captions': theme('colors.secondary'),
            '--tw-prose-code': theme('colors.secondary'),
            '--tw-prose-pre-code': theme('colors.secondar'),
            '--tw-prose-pre-bg': theme('colors.secondary'),
          },
        },
      }),

    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

