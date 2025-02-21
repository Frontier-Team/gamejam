import { Global, ThemeProvider, css } from "@emotion/react";
import React from "react";

export const theme = {
  colors: {
    teal: "#0B3239",
    white: "#FFFFFF",
    grey: "#F8F8F8",
    turquoise: "#01CDD1",
    turquoiseShade: "#00958B",
    red: "#FF222F",
    lilac: "#BA75FF",
    lilacShade: "#B061FF",
    darkPink: "#FFCCD9",
  },
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
  },
};

export const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: "Inter", sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a {
    font-family: "Pixelify Sans", sans-serif;
  }
`;

interface Props {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
};
