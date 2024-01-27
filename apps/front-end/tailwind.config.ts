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
      colors: {
        'primary-50': '#ede6f7',
        'primary-100': '#c7b0e7',
        'primary-200': '#ac8adc',
        'primary-300': '#8654cc',
        'primary-400': '#6e33c2',
        'primary-500': '#4a00b3',
        'primary-600': '#4300a3',
        'primary-700': '#35007f',
        'primary-800': '#290062',
        'primary-900': '#1f004b',

        'dark-blue-50': '#eae9ea',
        'dark-blue-100': '#bcbcbf',
        'dark-blue-200': '#9c9c9f',
        'dark-blue-300': '#6f6e74',
        'dark-blue-400': '#535259',
        'dark-blue-500': '#28272f',
        'dark-blue-600': '#24232b',
        'dark-blue-700': '#1c1c21',
        'dark-blue-800': '#16151a',
        'dark-blue-900': '#111014',

        'red-50': '#fbe7e7',
        'red-100': '#f4b5b5',
        'red-200': '#ee9191',
        'red-300': '#e65f5f',
        'red-400': '#e14040',
        'red-500': '#da1010',
        'red-600': '#c60f0f',
        'red-700': '#9b0b0b',
        'red-800': '#780909',
        'red-900': '#5c0707',
      },
    },
  },
  plugins: [],
}
export default config
