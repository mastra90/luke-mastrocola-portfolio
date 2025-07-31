import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
      secondary: string;
    };
  }
  interface PaletteOptions {
    border?: {
      primary?: string;
      secondary?: string;
    };
  }
}

const createAppTheme = (isDark: boolean) => {
  const palette = isDark
    ? {
        background: {
          default: "#0C151D",
          paper: "#171f26",
          secondary: "",
          buttons: "",
        },
        text: {
          primary: "#f1f2f4",
          secondary: "#a3abb2",
        },
        border: {
          primary: "#ffe071",
          secondary: "#a3abb2",
        },
      }
    : {
        background: {
          default: "#e9ebec",
          paper: "#ffffff",
          secondary: "",
          buttons: "",
        },
        text: {
          primary: "#3d3d3d",
          secondary: "#575757",
        },
        border: {
          primary: "#ffe071",
          secondary: "#a3abb2",
        },
      };

  return createTheme({
    palette,
    typography: {
      fontFamily: "'Poppins', sans-serif",
      h1: { fontWeight: 600 },
      body1: {},
      body2: {},
      button: {
        textTransform: "none",
      },
    },
    components: {
      MuiIconButton: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `2px solid #1a1a1a`,
            borderRadius: 8,
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            // display: 'flex',
          },
        },
      },
    },
  });
};

export default createAppTheme;
