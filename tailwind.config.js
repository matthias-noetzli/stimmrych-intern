module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Fira Sans', 'sans-serif'],
      serif: ['Merriweather', 'sans-serif']
    },
    extend: {
      margin: {
        "-nav": "-128px"
      },
      colors: {
        "st-blue": "#003B5C",
        "st-blue-dark": "#002E47",
        "st-blue-light": "#2b6282",
        "st-green": "#ddf0e7",
        "st-link": "#221FB1",
        "st-link-hover": "#5452e0",
        "st-green-hover": "#2bd477"
      },
      outline: {
        "st-blue": ['2px solid #003B5C', '0'],
      },
      gridTemplateColumns: {
       "members": "repeat(auto-fill, minmax(200px, 1fr))"
      },
    },
  },
  variants: {
    extend: {
      scale: ['active','group-hover'],
    },
  },
  plugins: [
   
  ],
}
