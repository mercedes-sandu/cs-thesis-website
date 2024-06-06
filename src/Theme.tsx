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
    listP: React.CSSProperties;
    codeP: React.CSSProperties;
    inlineCodeP: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    siteHeader?: React.CSSProperties;
    sectionHeader?: React.CSSProperties;
    sectionSubheader?: React.CSSProperties;
    sectionP?: React.CSSProperties;
    footerP?: React.CSSProperties;
    listP?: React.CSSProperties;
    codeP?: React.CSSProperties;
    inlineCodeP?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    siteHeader: true;
    sectionHeader: true;
    sectionSubheader: true;
    sectionP: true;
    footerP: true;
    listP: true;
    codeP: true;
    inlineCodeP: true;
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
      1: "#3E4558",
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
      fontSize: "32px",
      fontWeight: 400,
      letterSpacing: "8px",
    },
    sectionHeader: {
      fontFamily: "Manrope",
      fontSize: "48px",
      fontWeight: 600,
      letterSpacing: "8px",
    },
    sectionSubheader: {
      fontFamily: "Manrope",
      fontSize: "32px",
      fontWeight: 600,
      letterSpacing: "4px",
    },
    sectionP: {
      fontFamily: "Manrope",
      fontSize: "22px",
      textAlign: "justify",
      fontWeight: 400,
      textIndent: "64px",
      lineHeight: "42px",
    },
    footerP: {
      fontFamily: "Manrope",
      fontSize: "18px",
      fontWeight: 400,
    },
    listP: {
      fontFamily: "Manrope",
      fontSize: "22px",
      fontWeight: 400,
      textAlign: "justify",
      lineHeight: "42px",
    },
    codeP: {
      fontFamily: "monospace",
      fontSize: "16px",
      fontWeight: 400,
    },
    inlineCodeP: {
      fontFamily: "monospace",
      fontSize: "22px",
      fontWeight: 400,
      textAlign: "justify",
      lineHeight: "42px",
    }
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
          listP: "p",
          codeP: "p",
          inlineCodeP: "p",
        },
      },
    },
  },
});
