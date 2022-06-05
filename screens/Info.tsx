import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FC } from "react";

import History from "./History";
import InfoPeople from "./InfoPeople";
import SearchPage from "./SearchPage";

const Stack = createNativeStackNavigator();

const InfoNavigator: FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name="History"
        component={History}
        options={{
          title: "Historial",
          headerShown: true,
        }}
      />
      <Stack.Group
        screenOptions={{ presentation: "modal", headerShown: false }}
      >
        <Stack.Screen name="Info" component={InfoPeople} />
        <Stack.Screen name="Search" component={SearchPage} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default InfoNavigator;
