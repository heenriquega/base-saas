import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

ReactDOM.render(
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
