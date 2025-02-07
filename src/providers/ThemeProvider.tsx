import { Global, ThemeProvider, css } from "@emotion/react";
import React from "react";

const theme = {
  colors: {
    teal: "#0B3239",
    white: "#FFFFFF",
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

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Pixelfy+Sans&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=GTultra&display=swap");

  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }

  body {
    font-family: "GTultra", sans-serif;
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
