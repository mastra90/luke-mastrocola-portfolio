import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypeBackground {
    secondary: string;
    hover: string;
    switch: string;
  }
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
    button: {
      hover: string;
    };
  }
}

const createAppTheme = (isDark: boolean) => {
  const palette = isDark
    ? {
        background: {
          default: "#0C151D",
          paper: "#171f26",
          secondary: "#262b33",
          hover: "#262b33",
          switch: "#171f26",
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
        button: {
          hover: "#262b33",
        },
      }
    : {
        background: {
          default: "#fefcf8",
          paper: "#fffbf7",
          secondary: "#f2ece8",
          hover: "#fffbf8ff",
          switch: "#f2ede9",
        },
        text: {
          primary: "#313d4f",
          secondary: "#5f6b7c",
        },
        border: {
          primary: "#ffe071",
          secondary: "#d9dbdcff",
        },
        gitHub: {
          button: "#313d4f",
          background: "#ebe7e5",
        },
        techChip: {
          primary: "#fffbf7",
          background: "#37bab2",
          type: "#37bab2",
        },
        button: {
          hover: "#fffbf8ff",
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
            //
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${palette.border.secondary}`,
            borderRadius: 8,
            backgroundColor: palette.background.paper,
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
            //
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            //
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            //
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            //
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            //
          },
        },
      },
    },
  });
};

export default createAppTheme;
