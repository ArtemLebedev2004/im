/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
        colors: {
          'light-black': '#181818',
          'gray': '#848282',
          'pink': '#F9ADAD',
          'yellow': '#F2D485',
          'green': '#A1E397'
        },
        backgroundImage: {
          'hero-pattern': "url('./src/assets/icons/magnifier_black.png')",
          'footer-texture': "url('/img/footer-texture.png')",
        },
        keyframes: {
            opacity: {
              '0%': {
                  opacity: 0
              },
              '100%': {
                  opacity: 1
              }
            },
            slides: {
              '0%': {
                transform: 'translateX(100%)'
              },
              '100%': {
                transform: 'translateX(0%)'
              }
            },
            slideBack: {
              '0%': {
                transform: 'translateX(-100%)'
              },
              '100%': {
                transform: 'translateX(0%)'
              }
            },
            swimY: {
              '0%': {
                transform: 'translateY(0px)'
              },
              '100%': {
                transform: 'translateY(20px)'
              }
            }
        },

        animation: {
            opacity: "opacity 0.5s ease",
            slides: "slides 0.5s ease",
            slideBack: "slideBack 0.5s ease",
            swimY: "swimY 0.8s alternate infinite",
        },
    },
},
plugins: [
    plugin(function({ addBase, theme }) {
        addBase({
          'h1': { fontSize: theme('fontSize.5xl') },
          'h2': { fontSize: theme('fontSize.4xl') },
          'h3': { fontSize: theme('fontSize.2xl') },
        })
    })
],
}

