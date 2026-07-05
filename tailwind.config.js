/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: colors.slate,
      blue: colors.blue,
      sky: colors.sky,
      purple: colors.purple,
      rose: colors.rose,
      violet: colors.violet,
      slate: colors.slate,
      emerald: colors.emerald,
      mist: {
          50: 'oklch(96.3% 0.002 197.1)',
          100: 'oklch(92.5% 0.005 214.3)',
          200: 'oklch(87.2% 0.007 219.6)',
          300: 'oklch(72.3% 0.014 214.4)',
          400: 'oklch(56% 0.021 213.5)',
          500: 'oklch(56% 0.021 213.5)',
          600: 'oklch(45% 0.017 213.2)',
          700: 'oklch(37.8% 0.015 216)',
          800: 'oklch(27.5% 0.011 216.9)',
          900: 'oklch(21.8% 0.008 223.9)',
          950: 'oklch(14.8% 0.004 228.8)',
        },
    },
    fontFamily: {
      sans: ['Geist Variable', 'sans-serif'],
      mono: ['Geist Mono', 'monospace'],
      display: ['Unbounded Variable', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
