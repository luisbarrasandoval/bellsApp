import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BellsNavigator from "./Bells";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { MainStackParamList } from "./types";

const Drawer = createDrawerNavigator<MainStackParamList>();

function MainNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerType: "back",
      }}
      drawerContent={CustomDrawerContent}
    >
      <Drawer.Screen
        name="Home"
        component={BellsNavigator}
        options={{
          title: "Campaña actual",
        }}
      />
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}

export default MainNavigator;
