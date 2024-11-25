import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  textAlign?: "left" | "center" | "right";
  bold?: boolean;
  color: keyof typeof THEME.colors;
  size?: keyof typeof THEME.fontSizes;
  children: React.ReactNode;
};

const FeedbackMessageContainer = styled.div<Props>(
  ({ textAlign, bold, color, size, theme }) => ({
    width: "100%",
    color: theme.colors[color],
    textAlign: textAlign,
    fontSize: theme.fontSizes[size as unknown as "small" | "medium" | "large" | "title"],
    fontWeight: bold ? theme.fontWeights.bold : theme.fontWeights.regular,
  })
);

const FeedbackMessage: React.FC<Props> = ({
  textAlign = "left",
  bold = false,
  color = "grayMedium",
  size = "small",
  children,
}) => {
  return (
    <FeedbackMessageContainer
      textAlign={textAlign}
      bold={bold}
      color={color}
      size={size}
      theme={THEME}
    >
      {children}
    </FeedbackMessageContainer>
  );
};

export default FeedbackMessage;
