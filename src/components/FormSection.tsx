import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
};

const StyledFormSection = styled.div(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: "16px",
}));

const FormSection: React.FC<Props> = ({ children }) => {
  return <StyledFormSection>{children}</StyledFormSection>;
};

export default FormSection;
