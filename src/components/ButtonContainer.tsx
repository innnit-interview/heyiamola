import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const StyledContainer = styled.div(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}));

const ButtonContainer: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default ButtonContainer;
