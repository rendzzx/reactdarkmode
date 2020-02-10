import React from "react";
import logo from "./assets/svg/logo.svg";
import "./assets/css/App.css";

import { ThemeProvider } from "styled-components";
import {
  useDarkMode,
  lightTheme,
  darkTheme,
  GlobalStyles,
  Toggle
} from "./switchtheme";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <img src={logo} className="App-logo" alt="logo" />
        <h1 align="center">React Test</h1>
        <h1 align="center">
          It's a {theme === "light" ? "light theme" : "dark theme"}!
        </h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </>
    </ThemeProvider>
  );
}

export default App;
