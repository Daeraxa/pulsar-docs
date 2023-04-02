/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        primary: "var(--primary)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        text: "var(--text)"
      },
      boxShadow: {
        "right": "2px 0px 10px black"
      },
      typography: {
        DEFAULT: {
          css: {
            "code::before": {
              content: "none"
            },
            "code::after": {
              content: "none"
            },
            color: "var(--text)",
            a: { color: "Var(--text)" },
            colde: {
              color: "var(--text)",
              "font-weight": "5000"
            },
            pre: {
              "background-color": "transparent",
              "padding": "0",
              "border": "2px solid var(--secondary)"
            },
            strong: { color: "var(--text)" },
            th: { color: "var(--text)" },
            h1: { color: "var(--text)" },
            h2: { color: "var(--text)" },
            h3: { color: "var(--text)" },
            h4: { color: "var(--text)" },
            h5: { color: "var(--text)" },
            h6: { color: "var(--text)" },
          }
        }
      }
    }
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
