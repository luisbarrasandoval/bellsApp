import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import Information from "../screens/Information";
import Scan from "../screens/Scan";
import History from "../screens/History";
import InfoNavigator from "../screens/Info";

const Tab = createBottomTabNavigator();

export default function BellsNavigator<BellsStackParamList>() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Info"
        component={Information}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="bulb-outline" size={size} color={color} />
          ),
          title: "Información",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="New"
        component={Scan}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-add" size={size} color={color} />
          ),
          title: "Nuevo",
        }}
      />
      <Tab.Screen
        name="InfoNavigator"
        component={InfoNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-list" size={size} color={color} />
          ),
          title: "Historial",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
