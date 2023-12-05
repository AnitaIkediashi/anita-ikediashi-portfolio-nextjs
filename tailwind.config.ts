import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'color-blue-100': "#1282a2",
        'color-blue-200': "#034078",
        'color-blue-300': "#001f54",
        'color-blue-400': "#0a1128",
        'color-white': "#fefcfb",
      }, 
      screens: {
        xl: '1280px'
      }
    },
  },
  plugins: [],
}
export default config
