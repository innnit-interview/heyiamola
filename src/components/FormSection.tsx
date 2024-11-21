import styled from "@emotion/styled";

type Props = {
  chilred: React.ReactNode;
};

const StyledFormSection = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "16px",
}));

const FormSection: React.FC<Props> = ({ children }) => {
  return <StyledFormSection>{children}</StyledFormSection>;
};

export default FormSection;
