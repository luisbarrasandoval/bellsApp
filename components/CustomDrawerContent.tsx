import * as React from "react";
import { Image, Linking, Text, View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawerContent = (props: any) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ paddingTop: 35, paddingHorizontal: 10, flexDirection: "row" }}
      >
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/95819756?v=4",
          }}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <View>
          <Text style={{ fontSize: 14, fontWeight: "bold" }}>Luis Barra</Text>
        </View>
      </View>

      <DrawerContentScrollView
        contentContainerStyle={{
          paddingTop: 10,
        }}
      >
        <DrawerItemList {...props} />
        <DrawerItem
          label="Help"
          onPress={() => Linking.openURL("https://mywebsite.com/help")}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawerContent;
