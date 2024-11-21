import UserUpdateModal from "./components/UserUpdateModal";
import styled from "@emotion/styled";
import THEME from "./theme/theme";

const ModalWrapper = styled.div(({ theme }) => ({
  [theme.mediaQueries.desktop]: {
    display: "fixed",
    top: 0,
    left: 0,
    minWidth: "100vw",
    minHeight: "100vh",
    backgroundColor: theme.colors.grayLight,
    zIndex: 0,
    pointerEvents: "none",
  },
}));

function App() {
  return (
    <ModalWrapper theme={THEME}>
      {/* Please note that the username is hardcoded in this example. In a real-world application, we would fetch the user data from an API or retrieve it from UserContext (useContext).*/}
      <UserUpdateModal userName="Erika Musterfrau" />
    </ModalWrapper>
  );
}

export default App;
