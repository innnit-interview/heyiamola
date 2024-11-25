import styled from "@emotion/styled";
import THEME from "../theme/theme";

type ThemeColors = keyof typeof THEME.colors;
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor: keyof typeof THEME.colors;
  textColor: keyof typeof THEME.colors;
  children: React.ReactNode;
};

const StyledButton = styled.button<{
  bgColor: ThemeColors;
  textColor: ThemeColors;
}>(({ theme, bgColor, textColor }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "35px",
  padding: "10px",
  borderRadius: "100px",
  backgroundColor: theme.colors[bgColor],
  border: `1px solid ${
    bgColor === "white" ? theme.colors.violet : theme.colors[bgColor]
  }`,
  color: theme.colors[textColor],
  fontSize: theme.fontSizes.small,
  fontFamily: theme.fontFamily.primary,
  cursor: "pointer",
  [theme.mediaQueries.tablet]: {
    height: "55px",
    padding: "18px 28px",
    fontSize: theme.fontSizes.medium,
    fontFamily: theme.fontFamily.secondary,
  },
}));

const Button: React.FC<Props> = ({ bgColor, textColor, children, ...rest }) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} theme={THEME} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
