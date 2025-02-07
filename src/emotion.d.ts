import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      teal: string;
      white: string;
      red: string;
      lilac: string;
      darkPink: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
