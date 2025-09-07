import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    secondary: string;
  }
  interface Palette {
    green: string;
    yellow: string;
    border: string;
    buttonHover: string;
    portfolioCardBg: string;
    portfolioCardBgHover: string;
  }
}

const createAppTheme = (isDark: boolean) => {
  const palette = isDark
    ? {
        background: {
          default: "#081118",
          secondary: "#171f26",
          paper: "#0C151D",
        },
        text: {
          primary: "#f1f2f4",
          secondary: "#a3abb2",
        },
        green: "#37bab2",
        yellow: "#ffe071",
        border: "#262b33",
        buttonHover: "#262b33",
        portfolioCardBg: "#0c151d",
        portfolioCardBgHover: "#171f26",
      }
    : {
        background: {
          default: "#fefcf8",
          secondary: "#f2ede9",
          paper: "#f2ede9",
        },
        text: {
          primary: "#1a3449",
          secondary: "#5f6b7c",
        },
        green: "#37bab2",
        yellow: "#ffe071",
        border: "#a3abb2",
        buttonHover: "#fffbf8",
        portfolioCardBg: "#fefcf8",
        portfolioCardBgHover: "#f2ede9",
      };

  return createTheme({
    palette,
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: { fontWeight: 600 },
      h3: { fontWeight: 500 },
      h5: { fontWeight: 500 },
      body1: {},
      body2: { color: palette.text.secondary },
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: "none",
            backgroundColor: "transparent",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: palette.text.secondary,
            borderColor: palette.border,
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: palette.green,
            "&:hover": {
              "& .card-icon": {
                color: palette.green,
              },
              "& .card-text": {
                color: palette.green,
                textUnderlineOffset: 5,
              },
              "& .card-arrow": {
                transform: "translate(1px, -1px)",
              },
            },
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: palette.text.primary,
            fontSize: 16,
          },
        },
      },
      MuiIconButton: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            color: palette.text.primary,
            backgroundColor: palette.background.secondary,
          },
        },
      },
    },
  });
};

export default createAppTheme;
