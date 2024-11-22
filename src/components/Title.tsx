import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  text: string;
  color: keyof typeof THEME.colors;
};

const StyledTitle = styled.p(({ theme, color }) => ({
  width: "100%",
  color: theme.colors[color],
  fontFamily: theme.fontFamily.secondary,
  fontSize: theme.fontSizes.title,
  fontWeight: theme.fontWeights.bold,
  lineHeight: "37.5px",
  letterSpacing: "0.5px",
  textAlign: "left",
}));

const Title: React.FC<Props> = ({ text, color }) => {
  return (
    <StyledTitle color={color} theme={THEME}>
      {text}
    </StyledTitle>
  );
};

export default Title;
