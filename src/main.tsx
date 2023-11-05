import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(18, 22, 33)",
        },
      },
    },
  },
  typography: {
    h1: {
      fontSize: 30,
      fontWeight: 500,
    },
    fontFamily: ["Roboto"].join(","),
  },
});

theme = responsiveFontSizes(theme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
