import { UserUpdateForm } from "../types";
import styled from "@emotion/styled";
import THEME from "../theme/theme";
import FeedbackMessage from "./FeedbackMessage";
import { FieldWrapper } from "./TextInput";

type TextareaInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  name: string;
  errors: { [key in keyof UserUpdateForm]?: string };
  textareaProps: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
};

const StyledTextarea = styled.textarea(({ theme }) => ({
  width: "100%",
  height: "142px",
  fontFamily: theme.fontFamily.primary,
  fontSize: theme.fontSizes.medium,
  color: theme.colors.grayDark,
  lineHeight: "24px",
  padding: "11px 16px",
  borderRadius: "6px",
  border: `1px solid ${theme.colors.grayDark}`,
  "&:active, &:focus, &:focus-visible": {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.violet}`,
    outline: 0,
  },
  "&::placeholder": {
    color: theme.colors.grayMedium,
  },
}));

const TextareaInput: React.FC<TextareaInputProps> = ({
  name,
  errors,
  ...textareaProps
}) => {
  return (
    <FieldWrapper>
      <StyledTextarea
        id={name}
        name={name}
        type="textarea"
        {...textareaProps}
        theme={THEME}
      />
      {errors[name] ? (
        <FeedbackMessage textAlign="left" color="error">
          {errors[name]}
        </FeedbackMessage>
      ) : (
        <div style={{ height: "15px" }} />
      )}
    </FieldWrapper>
  );
};

export default TextareaInput;
