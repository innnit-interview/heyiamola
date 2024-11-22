import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  text: string;
  color: string;
};

const StyledSubtitle = styled.p(({ theme, color }) => ({
  width: "100%",
  color: theme.colors[color],
  fontFamily: theme.fontFamily.secondary,
  fontSize: theme.fontSizes.large,
  fontWeight: theme.fontWeights.bold,
  lineHeight: "30px",
}));

const Subtitle: React.FC<Props> = ({ text, color }) => {
  return (
    <StyledSubtitle color={color} theme={THEME}>
      {text}
    </StyledSubtitle>
  );
};

export default Subtitle;
