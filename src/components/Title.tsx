import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  text: string;
  color: string;
};

const StyledTitle = styled.p(({ theme, color }) => ({
  color: theme.colors[color],
  fontSize: theme.fontSizes.title,
  fontWeight: theme.fontWeights.bold,
  lineHeight: "37.5px",
  letterSpacing: "0.5px",
}));

const Title: React.FC<Props> = ({ text, color }) => {
  return (
    <StyledTitle color={color} theme={THEME}>
      {text}
    </StyledTitle>
  );
};

export default Title;
