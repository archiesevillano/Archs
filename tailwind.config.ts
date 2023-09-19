import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'jost': ['Jost', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
        'mukta': ['Mukta', 'sans-serif'],
        'quicksand': ['Quicksand', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#e95050',
          200: '#e92121'
        },
        secondary: {
          100: '#333333',
          200: '#111111'
        },
        random: {
          red: '#ff7878',
          gray: '#a8a8a8',
          dark: '#222222',
        },
        body: {
          plain: '#f2f2f2',
        }
      }

    },
  },
  plugins: [],
}
export default config
