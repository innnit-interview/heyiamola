import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      black: string;
      error: string;
      grayDark: string;
      grayLight: string;
      grayMedium: string;
      orange: string;
      success: string;
      violet: string;
      white: string;
    };
    fontFamily: {
      primary: string;
      secondary: string;
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
    mediaQueries: {
      desktop: string;
      mobile: string;
      tablet: string;
    };
  }
}
