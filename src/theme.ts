import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    secondary: string;
  }
  interface Palette {
    global: {
      yellow: string;
      green: string;
      blue: string;
      purple: string;
      border: string;
    };
    button: {
      bg: string;
      hover: string;
      gradient: {
        color1: string;
        color2: string;
        color3: string;
        color4: string;
      };
    };
    portfolioCardBg: {
      bgcolor: string;
      bghover: string;
    };
    legacy: {
      blue: string;
      green: string;
      white: string;
    };
    gradient: {
      color1: string;
      color2: string;
      color3: string;
    };
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
        global: {
          yellow: "#ffe071",
          green: "#37bab2",
          blue: "#3b91f5",
          purple: "#773ff0",
          border: "#262b33",
        },
        button: {
          bg: "#171f26",
          hover: "#262b33",
          gradient: {
            color1: "#9333ea",
            color2: "#2563eb",
            color3: "#a158e6",
            color4: "#477ae7",
          },
        },
        portfolioCardBg: {
          bgcolor: "#0c151d",
          bghover: "#171f26",
        },
        legacy: {
          blue: "#171f26",
          green: "#759242",
          white: "#f2f2ef",
        },
        gradient: {
          color1: "#071133",
          color2: "#0c112e",
          color3: "#10131b",
        },
      }
    : {
        background: {
          default: "#f4fafd",
          secondary: "#f6f8fa",
          paper: "#ebf2f8",
        },
        text: {
          primary: "#1a3449",
          secondary: "#5f6b7c",
        },
        global: {
          yellow: "#ffe071",
          green: "#37bab2",
          blue: "#3b91f5",
          purple: "#773ff0",
          border: "#a3abb2",
        },
        button: {
          bg: "#ebf2f8",
          hover: "#f6fafc",
          gradient: {
            color1: "#9333ea",
            color2: "#2563eb",
            color3: "#a158e6",
            color4: "#477ae7",
          },
        },
        portfolioCardBg: {
          bgcolor: "#f1f6fc",
          bghover: "#f0f8ff",
        },
        legacy: {
          blue: "#171f26",
          green: "#759242",
          white: "#f2f2ef",
        },
        gradient: {
          color1: "#c2b7ca",
          color2: "#cbcfe9",
          color3: "#f6f7fa",
        },
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
            borderColor: palette.global.border,
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
        // styleOverrides: {
        //   root: {
        //     transition: "none",
        //   },
        // },
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
