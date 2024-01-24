/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#b700ff",
          "secondary": "#0000ff",
          "accent": "#00a300",
          "neutral": "#040c12",
          "base-100": "#292e38",
          "info": "#44d7ff",
          "success": "#009663",
          "warning": "#b54c00",
          "error": "#c5193d",
        },
      },
    ],
  },

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
    },
    
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],


    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }


    }




  }
}

