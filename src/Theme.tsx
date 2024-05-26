import { createTheme, SimplePaletteColorOptions } from "@mui/material";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface PaletteColorOptions
    extends SimplePaletteColorOptions,
      ColorPartial {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
  }

  interface PaletteColor extends ColorPartial {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
    5?: string;
    6?: string;
    7?: string;
    8?: string;
    9?: string;
    10?: string;
    11?: string;
  }
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    siteHeader: React.CSSProperties;
    sectionHeader: React.CSSProperties;
    sectionSubheader: React.CSSProperties;
    sectionP: React.CSSProperties;
    footerP: React.CSSProperties;
    codeHeader: React.CSSProperties;
    codeP: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    siteHeader?: React.CSSProperties;
    sectionHeader?: React.CSSProperties;
    sectionSubheader?: React.CSSProperties;
    sectionP?: React.CSSProperties;
    footerP?: React.CSSProperties;
    codeHeader?: React.CSSProperties;
    codeP?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    siteHeader: true;
    sectionHeader: true;
    sectionSubheader: true;
    sectionP: true;
    footerP: true;
    codeHeader: true;
    codeP: true;
  }
}

const breakpoints = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export const accentColors = [
  "#446fcb",
  "#a081cf",
  "#ed94c0",
  "#52b0c4",
  "#36c397",
  "#b98b55",
  "#7eaf55",
  "#f45953",
  "#f2b53a",
  "#2bbe3e",
];

export const theme = createTheme({
  palette: {
    text: {
      primary: "#f0f0f0",
    },
    background: {
      default: "#121212",
    },
    primary: {
      main: "#f0f0f0",
      1: "#303030",
    },
    secondary: {
      main: "#cfcfcf",
      1: "#292C34",
      2: "#446fcb",
      3: "#a081cf",
      4: "#ed94c0",
      5: "#52b0c4",
      6: "#36c397",
      7: "#b98b55",
      8: "#7eaf55",
      9: "#f45953",
      10: "#f2b53a",
      11: "#2bbe3e",
    },
  },
  breakpoints: {
    values: { ...breakpoints },
    unit: "px",
  },
  typography: {
    siteHeader: {
      fontFamily: "Manrope",
      fontSize: "2rem",
      fontWeight: 400,
      letterSpacing: "0.5rem",
    },
    sectionHeader: {
      fontFamily: "Manrope",
      fontSize: "3rem",
      fontWeight: 600,
      letterSpacing: "0.5rem",
    },
    sectionSubheader: {
      fontFamily: "Manrope",
      fontSize: "2rem",
      fontWeight: 600,
      letterSpacing: "0.25rem",
    },
    sectionP: {
      fontFamily: "Manrope",
      fontSize: "1.6rem",
      textAlign: "justify",
      fontWeight: 400,
      textIndent: "4rem",
      lineHeight: "3rem",
    },
    footerP: {
      fontFamily: "Manrope",
      fontSize: "1.4rem",
      fontWeight: 400,
    },
    codeP: {
      fontFamily: "monospace",
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          siteHeader: "h1",
          sectionHeader: "h1",
          sectionSubheader: "h2",
          sectionP: "p",
          footerP: "p",
          codeHeader: "h1",
          codeP: "p",
        },
      },
    },
  },
});
