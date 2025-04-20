/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'bg1': "url('/bg-11.jpg')",
        'bg2': "url('/bg-2.jpg')",
        'bg3': "url('/bg-3.jpg')",
        'bg4': "url('/bg-4.jpg')",
        'bg5': "url('/bg-5.jpg')",
      },
      animation: {
        'bg-cycle': 'bgCycle 25s ease-in-out infinite',
        'fade': 'fadeIn 2s ease-in-out infinite',
      },
      keyframes: {
        bgCycle: {
          '0%': { backgroundImage: 'url(/bg-3.jpg)', opacity: '1' },
          '20%': { backgroundImage: 'url(/bg-11.jpg)', opacity: '1' },
          '40%': { backgroundImage: 'url(/bg-5.jpg)', opacity: '1' },
          '60%': { backgroundImage: 'url(/bg-4.jpg)', opacity: '1' },
          '80%': { backgroundImage: 'url(/bg-11.jpg)', opacity: '1' },
          '100%': { backgroundImage: 'url(/bg-2.jpg)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
