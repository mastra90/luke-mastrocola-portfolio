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
      avatar: string;
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
      themeIconHover: string;
      themeButtonHover: string;
    };
  }
}

const createAppTheme = (isDark: boolean) => {
  const palette = isDark
    ? {
        background: {
          // default: "#0C151D",
          default: "#081118",
          paper: "#0C151D",
          secondary: "#262b33",
          hover: "#262b33",
          switch: "#171f26",
        },
        text: {
          primary: "#f1f2f4",
          secondary: "#a3abb2",
        },
        border: {
          primary: "#313940",
          avatar: "#ffe071",
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
          themeIconHover: "#262b33",
          themeButtonHover: "#ffe071",
        },
      }
    : {
        background: {
          default: "#fefcf8",
          paper: "#f2ede9",
          secondary: "#f2ece8",
          hover: "#fffbf8ff",
          switch: "#f2ede9",
        },
        text: {
          primary: "#313d4f",
          secondary: "#5f6b7c",
        },
        border: {
          primary: "#a3abb2",
          avatar: "#ffe071",
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
          themeIconHover: "#262b33",
          themeButtonHover: "#ffe071",
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
            "&:hover": {
              background: "none",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            border: `1px solid ${palette.border.primary}`,
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
            "&:hover": {
              "& .card-icon": {
                color: palette.techChip.background,
              },
              "& .card-text": {
                color: palette.techChip.background,
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
            color: palette.gitHub.button,
            fontSize: 16,
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
