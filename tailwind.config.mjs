/** @type {import('tailwindcss').Config} */
export default {
  content: ["Microsoft YaHei", "sans-serif"],
  theme: {
    extend: {
      colors: {
        primary: '#7C2D12',
        accent:  '#F4C430',
        bg:      '#FFFBEB',
        ink:     '#1C1917',
        muted:   '#7A6B5A',
      },
      fontFamily: {
        heading: ["Microsoft YaHei", "sans-serif"],
        body: ["Microsoft YaHei", "sans-serif"],
        mono:    ['Cousine', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '640px',
      },
    },
  },
  plugins: [],
};
