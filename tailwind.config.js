module.exports = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        WorkSans: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        "3xxl": "1.75rem",
        "mini-lg": "1.063rem",
        "4.5xl": [
          "2.7rem",
          {
            lineHeight: "2.5rem",
          },
        ],
        md: ["0.95rem", { "line-height": "1.5rem" }],
      },
      colors: {
        "primary-50": "#EAEBEB",
        "primary-100": "#BEBEBF",
        "primary-200": "#939596",
        "primary-300": "#7C7E80",
        "primary-400": "#636669",
        "primary-500": "#474B4E",
        primary: "#292F32",
        "primary-700": "#1D2123",
        "primary-800": "#0F1212",
        "primary-900": "#090A0A",
        "light-blue": "#E6E5FF",
        "primary-link": "#4317FF",
        "primary-lightLink": "#8D8BFF",
      },
    },
  },
  variants: {},
  plugins: [],
}
