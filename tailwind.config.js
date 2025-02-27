/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'dark',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '476px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
  
  
        
        '2xl-mx': {'max': '1535px'},
        'xl-mx': {'max': '1279px'},
        'lg-mx': {'max': '1023px'},
        'bs-max': {'max':'899px'},
        'md-mx': {'max': '767px'},
        'sm-mx': {'max': '639px'},
        'xs-mx': {'max': '475px'},
        
      }
    },
  },
  plugins: [],
}

