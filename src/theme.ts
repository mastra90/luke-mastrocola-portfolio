import { createTheme } from "@mui/material/styles";

const palette = {
  background: {
    default: "#000000",
    paper: "",
    secondary: "",
    buttons: "",
  },
  text: {
    primary: "#ffffff",
    dark: "",
  },
};

const theme = createTheme({
  palette,
  typography: {
    fontFamily: "'IBM Plex Sans', sans-serif",
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
          borderRadius: 8
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

export default theme;
