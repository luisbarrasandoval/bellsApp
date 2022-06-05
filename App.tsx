import { NavigationContainer } from "@react-navigation/native";
import MainNavigator from "./navigations/Main";

const theme = {
  dark: false,
  colors: {
    primary: "#32467b",
    background: "#fff",
    card: "#fff",
    text: "#000",
    border: "#eee",
    notification: "#000",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
