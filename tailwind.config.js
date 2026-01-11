/** @type {import('tailwindcss').Config} */

import sky = require('tailwindcss/colors');

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
