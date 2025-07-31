import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    border: {
      primary: string;
      secondary: string;
    };
    gitHub: {
      button: string;
      background: string;
    };
    techChip: {
      primary: string;
      background: string;
      type: string;
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
          secondary: "#313940",
        },
        gitHub: {
          button: "#f1f2f4",
          background: "#313940",
        },
        techChip: {
          primary: "#0f3d3a",
          background: "#37bab2",
          type: "#37bab2",
        },
      }
    : {
        background: {
          default: "#eff0f2",
          paper: "#f5f5f5",
          secondary: "",
          buttons: "",
        },
        text: {
          primary: "#504b9e",
          secondary: "#7a77a5ff",
        },
        border: {
          primary: "#ffe071",
          secondary: "#d9dbdcff",
        },
        gitHub: {
          button: "#454e5f",
          background: "#e6e8ec",
        },
        techChip: {
          primary: "#504b9e",
          background: "#e7e6fb",
          type: "#504b9e",
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
            border: `1px solid ${palette.border.secondary}`,
            borderRadius: 8,
            backgroundColor: palette.background.secondary,
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            color: palette.techChip.primary,
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
