import "./App.css";
import React, { useEffect, useState } from "react";

import Home from "./Home";
import Navbar from "./js/components/Navbar";
import Hero from "./js/components/Hero";
import { createTheme, ThemeProvider } from "@material-ui/core";

import CssBaseline from "@material-ui/core/CssBaseline";

import Aos from "aos";
import Loader from "./js/components/Loader";
import { fireConfetti } from "./js/components/confetti";


const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
  },
  overrides: {
    MuiButtonBase: {
      root: {
        justifyContent: "flex-start",
      },
    },
    MuiButton: {
      root: {
        textTransform: undefined,
        padding: "12px 16px",
      },
      startIcon: {
        marginRight: 8,
      },
      endIcon: {
        marginLeft: 8,
      },
    },
  },
});

const App = () => {

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Loader />
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default App;
