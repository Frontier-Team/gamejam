import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      teal: string;
      white: string;
      turquoise: string;
      turquoiseShade: string;
      red: string;
      lilac: string;
      lilacShade: string;
      darkPink: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      marginDefault: string;
    };
  }
}
