export const redocOptions = {
  nativeScrollbars: true,
  untrustedSpec: true,
  jsonSampleExpandLevel: "all",
  pathInMiddlePanel: true,
  hideSchemaTitles: true,
  expandResponses: "200",
  theme: {
    colors: {
      primary: {
        main: "#018565",
        light: "#969696",
        dark: "#000",
        contrastText: "#fff"
      },
      text: {
        primary: "#111",
        secondary: "#969696"
      }
    },
    schema: {
      linesColor: "LightGray",
    },
    spacing: {
      sectionVertical: "10"
    },
    typography: {
      fontFamily: '"Fellix", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
      links: {
        color: "#018565",
        visited: "#018565",
        hover: "#f8b1af"
      },
      code: {
        fontFamily: ({ typography }) => '"Source Code Pro", "Operator", Menlo, DejaVu Sans Mono, Monaco, Consolas, "Courier New", monospace;',
      },
    },
    menu: {
      backgroundColor: "#fafafa",
      textColor: "#111",
      arrow: {
        color: "#585858"
      },
      width: "300px"
    },
    rightPanel: {
      width: "35%"
    },
    logo: {
      gutter: "20px 20px 20px 20px"
    }
  }
};
