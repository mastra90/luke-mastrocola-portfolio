import { createTheme } from "@mui/material/styles";

const palette = {
  background: {
    default: "black",
    paper: "",
    secondary: "",
    buttons: "",
  },
  text: {
    primary: "white",
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
          // display: 'flex',
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
