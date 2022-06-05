import { DrawerScreenProps } from "@react-navigation/drawer";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import ICedula from "../interfaces/ICedula";

type MainStackParamList = {
  Home: undefined;
};

type BellsStackParamList = {
  Info: undefined;
  New: undefined;
  InfoNavigator: undefined;
};

type InfoStackParamList = {
  History: undefined;
  Info: {people: ICedula};
  Search: undefined;
}

type MainStackHomeProps = NativeStackScreenProps<MainStackParamList, "Home">;
type BellsStackInfoProps = DrawerScreenProps<BellsStackParamList, "Info">;
type InfoStackHistoryProps = NativeStackScreenProps<InfoStackParamList, "Info">;
type InfoStackInfoProps = NativeStackScreenProps<InfoStackParamList, "Info">;

export {
  MainStackParamList,
  BellsStackParamList,
  MainStackHomeProps,
  BellsStackInfoProps,
  InfoStackHistoryProps,
  InfoStackInfoProps,
  InfoStackParamList
};
