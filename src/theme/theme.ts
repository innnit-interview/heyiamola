import { Theme } from "@emotion/react";
import { MIN_DESKTOP_WIDTH, MIN_TABLET_WIDTH } from "../utils/consts";

const THEME: Theme = {
  colors: {
    black: "#000000",
    grayDark: "#272729",
    grayLight: "#BABBC2",
    grayMedium: "#767676",
    orange: "#F7661E",
    violet: "#9466F2",
    white: "#FFFFFF",
  },
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "25px",
    title: "31.25px",
  },
  fontWeights: {
    bold: 500,
    regular: 400,
  },
  fontFamily: {
    primary: "'Soehne Buch', sans-serif",
    secondary: "'Soehne Kraeftig', sans-serif",
  },
  mediaQueries: {
    desktop: `@media (min-width: ${MIN_DESKTOP_WIDTH}px)`,
    mobile: `@media (max-width: ${MIN_TABLET_WIDTH - 1}px)`,
    tablet: `@media (min-width: ${MIN_TABLET_WIDTH}px)`,
  },
};

export default THEME;
