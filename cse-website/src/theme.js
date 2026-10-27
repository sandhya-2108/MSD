import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#123c69",
    },
    secondary: {
      main: "#f4a261",
    },
    background: {
      default: "#f7f9fc",
    },
  },

  typography: {
    fontFamily: "Arial, Helvetica, sans-serif",

    h1: {
      fontWeight: 700,
    },

    h2: {
      fontWeight: 700,
    },

    h3: {
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;