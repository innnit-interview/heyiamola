import styled from "@emotion/styled";
import THEME from "../theme/theme";

type TextInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  name: string;
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
  "&:active, &:focus": {
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.violet}`,
  },
}));

const TextInput: React.FC<TextInputProps> = ({ label, name, inputProps }) => {
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
        theme={THEME}
        type="text"
        {...inputProps}
      />
    </FieldWrapper>
  );
};

export default TextInput;
