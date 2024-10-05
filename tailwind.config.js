/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: 'class', // Tambahkan baris ini
  theme: {
    extend: {
      colors: {
        'primary': '#6B46C1',
        'secondary': '#9F7AEA',
        'tertiary': '#D6BCFA',
        'background': '#FAF5FF',
        'text': '#2D3748',
        'dark-background': '#1A202C', // Tambahkan warna latar belakang dark mode
        'dark-text': '#E2E8F0', // Tambahkan warna teks dark mode
      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
      height: {
        '100': '100px',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      backdropFilter: ['responsive'],
    },
  },
}