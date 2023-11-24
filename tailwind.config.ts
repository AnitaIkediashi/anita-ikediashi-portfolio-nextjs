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
        'color-gray-100': "#f8f9fa",
        'color-gray-200': "#dde7c7",
        'color-green-100': "#bfd8bd",
        'color-green-200': "#98c9a3",
        'color-black': "#343a40",
      }
    },
  },
  plugins: [],
}
export default config
