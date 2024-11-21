import styled from "@emotion/styled";

type Props = {
  chilred: React.ReactNode;
};

const StyledContainer = styled.div(() => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "26px",
}));

const ButtonContainer: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ButtonContainer;
