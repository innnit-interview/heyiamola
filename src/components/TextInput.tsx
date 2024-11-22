import styled from "@emotion/styled";
import THEME from "../theme/theme";
import { UserUpdateForm } from "../types";
import FeedbackMessage from "./FeedbackMessage";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
  errors: { [key in keyof UserUpdateForm]?: string };
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;
};

const FieldWrapper = styled.div(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2px",
}));

const StyledLabel = styled.label(({ theme }) => ({
  width: "100%",
  color: theme.colors.grayMedium,
  fontFamily: theme.fontFamily.secondary,
  fontSize: theme.fontSizes.small,
}));

const StyledTextInput = styled.input(({ theme }) => ({
  width: "100%",
  color: theme.colors.grayMedium,
  fontSize: theme.fontSizes.medium,
  lineHeight: "24px",
  height: "48px",
  padding: "11px 16px",
  borderRadius: "6px",
  border: `1px solid ${theme.colors.grayDark}`,
  "&:active, &:focus, &:focus-visible": {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.violet}`,
    outline: 0,
  },
}));

const InputFeedbackContainer = styled.div(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  errors,
  value,
  maxLength,
  ...inputProps
}) => {
  return (
    <FieldWrapper>
      {label && (
        <StyledLabel htmlFor={name} theme={THEME}>
          {label}
        </StyledLabel>
      )}
      <StyledTextInput
        id={name}
        name={name}
        type="text"
        {...inputProps}
        theme={THEME}
      />
      <InputFeedbackContainer>
        {errors[name] && (
          <FeedbackMessage textAlign="left" color="error">
            {errors[name]}
          </FeedbackMessage>
        )}
        {maxLength && (
          <FeedbackMessage textAlign="right">
            {value.length}/100 Zeichen
          </FeedbackMessage>
        )}
      </InputFeedbackContainer>
    </FieldWrapper>
  );
};

export default TextInput;
