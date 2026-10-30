import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// Create Custom Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },

  typography: {
    fontFamily: "Arial, sans-serif",

    h4: {
      fontWeight: 600,
    },

    h6: {
      fontWeight: 500,
    },
  },
});

// Render React Application
const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
//avtar, badge, circular progress, drawer, switch, tab