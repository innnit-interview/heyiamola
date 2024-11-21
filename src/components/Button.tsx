import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  bgColor: string;
  textColor: string;
  children: React.ReactNode;
};

const StyledButton = styled.p(({ theme, bgColor, textColor }) => ({
  display: "grid",
  placeItems: "center",
  height: "55px",
  padding: "18px 28px",
  borderRadius: "100px",
  backgroundColor: theme.colors[bgColor],
  border:
    bgColor === "white"
      ? `1px solid ${theme.colors.violet}`
      : `1px solid ${theme.colors.bgColor}`,
  color: theme.colors[textColor],
  fontSize: theme.fontSizes.medium,
  fontWeight: theme.fontWeights.bold,
  lineHeight: "19.2px",
  cursor: "pointer",
}));

const Button: React.FC<Props> = ({ bgColor, textColor, children }) => {
  return (
    <StyledButton bgColor={bgColor} textColor={textColor} theme={THEME}>
      {children}
    </StyledButton>
  );
};

export default Button;
