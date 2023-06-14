/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#413535',
        'main': '#312626',
        'main1': '#F9F3F2',
        'additional1': '#E6BEBD',
        'additional2': '#B28A87',
        'accent': '#C85048'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'darkGrotesque': ['Darker Grotesque', 'sans-serif']
      },
      backgroundImage: {
        'heroImage': "url('/images/HeroBackgroundImage.png')",
      }      
    },
  },
  plugins: [],
}
