import UserUpdateModal from "./components/UserUpdateModal";

function App() {
  // Please note that the username is hardcoded in this example.
  // In a real-world application, we would fetch the user data from an API
  // or retrieve it from UserContext (useContext).
  return <UserUpdateModal userName="Erika Musterfrau" />;
}

export default App;
