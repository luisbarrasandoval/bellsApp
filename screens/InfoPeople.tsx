import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { FC, useEffect } from "react";
import { Text, View } from "react-native";
import CedulaItem from "../components/CedulaItem";
import { InfoStackInfoProps } from "../navigations/types";

const InfoPeople: FC<InfoStackInfoProps> = ({ navigation, route }) => {
  const { people } = route.params;

  useEffect(() => {
    navigation.setOptions({
      title: "Historial",
    });
  }, []);

  return (
    <View style={{ paddingTop: 40, alignItems: "center", backgroundColor:"#eee" }}>
      
      <CedulaItem {...people} />
      <View
        style={{
          backgroundColor: "#fff",
          width: "95%",
          height: "100%",
          borderRadius: 5,
          top: -50,
          zIndex: -1,
        }}
      ></View>
    </View>
  );
};

export default InfoPeople;
