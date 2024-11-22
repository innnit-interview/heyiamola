import styled from "@emotion/styled";
import THEME from "../theme/theme";

type Props = {
  name: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
};

const ToggleContainer = styled.div(() => ({
  display: "flex",
  alignItems: "center",
  gap: "4px",
}));

const StyledCheckbox = styled.input(({ theme }) => ({
  width: "36px",
  height: "20px",
  backgroundColor: theme.colors.grayLight,
  borderRadius: "20px",
  position: "relative",
  outline: "none",
  transition: "background-color 0.2s",
  "&:checked": {
    backgroundColor: theme.colors.orange,
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: "16px",
    height: "16px",
    borderRadius: "50%",
    backgroundColor: theme.colors.white,
    left: "2px",
    top: "2px",
    transition: "transform 0.2s",
  },
  "&:checked:before": {
    transform: "translateX(16px)",
  },
  "&:focus": {
    boxShadow: `0 0 0 2px ${theme.colors.orange}`,
  },
}));

const StyledLabel = styled.label(({ theme }) => ({
  fontSize: theme.fontSizes.small,
  color: theme.colors.black,
}));

const Toggle: React.FC<Props> = ({ name, isChecked, onChange, labelText }) => {
  return (
    <ToggleContainer>
      <StyledCheckbox
        id={name}
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        theme={THEME}
      />
      <StyledLabel htmlFor={name} theme={THEME}>
        {labelText}
      </StyledLabel>
    </ToggleContainer>
  );
};

export default Toggle;
