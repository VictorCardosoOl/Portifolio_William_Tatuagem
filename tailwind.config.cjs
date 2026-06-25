/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./App.tsx",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      '4xl': '2560px',
    },
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        'screen-3xl': '1920px',
        'screen-4xl': '2400px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      fontSize: {
        'fluid-hero': 'clamp(3rem, 15vw, 12rem)',
        'fluid-h1': 'clamp(2.5rem, 8vw, 6rem)',
        'fluid-h2': 'clamp(2rem, 6vw, 4.5rem)',
        'fluid-h3': 'clamp(1.5rem, 4vw, 3rem)',
        'fluid-body': 'clamp(1rem, 1.5vw, 1.25rem)',
      },
      colors: {
        "paper-light": "#F6F5F0",
        "paper-dark": "#0F0F0F",
        "paper-warm": "#E8E6E1",
        primary: "#1A1A1A",
        "ink-black": "#1A1A1A",
        "ink-dark": "#3D3D3D",
        "ink-medium": "#8C8C8C",
        "ink-light": "#D4D3D0",
        "accent-clay": "#C95D46",
        "accent-sepia": "#685A4F",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "serif"],
        sans: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        'ultra': '0.25em',
        'mega': '0.35em',
      },
      borderRadius: {
        'arch': '20rem 20rem 0 0',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
