import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      grayDark: string;
      grayLight: string;
      grayMedium: string;
      orange: string;
      violet: string;
      white: string;
    };
    fontSizes: {
      small: string;
      medium: string;
      large: string;
      title: string;
    };
    fontWeights: {
      bold: number;
      regular: number;
    };
  }
}
