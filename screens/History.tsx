import { FC, useEffect, useLayoutEffect, useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import { getData } from "../data";

import { Ionicons } from "@expo/vector-icons";
import { InfoStackHistoryProps } from "../navigations/types";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Calendar } from "react-native-calendars";

const AVATAR_HOMBRE = require("../assets/hombre.png");
const AVATAR_MUJER = require("../assets/mujer.png");

const DATA = getData(5);

const History: FC<InfoStackHistoryProps> = ({ navigation }) => {
  const [data, setData] = useState(DATA);
  const [showCalendar, setShowCalendar] = useState(false);
  const { width, height } = useWindowDimensions();

  const translateY = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring(showCalendar ? 0 : -320),
        },
      ],
    };
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
            width: 20 * 3 + 20,
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Search");
            }}
          >
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowCalendar((e) => !e);
            }}
          >
            <Ionicons
              name={showCalendar ? "calendar" : "calendar-outline"}
              size={20}
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setData([...data.reverse()]);
            }}
          >
            <Ionicons name="filter" size={20} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <Animated.View style={[rStyle]}>
      <View>
        <Calendar
          style={{
            height: 320,
          }}
        />
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.listOption}
              onPress={() => {
                navigation.navigate("Info", {
                  people: item,
                });
              }}
            >
              <Image
                source={item.sex == "M" ? AVATAR_HOMBRE : AVATAR_MUJER}
                style={styles.avatar}
              />
              <View
                style={{
                  position: "absolute",
                  left: 65,
                }}
              >
                <Text style={{ fontSize: 14 }}>
                  {item.names} {item.lastNames}
                </Text>
                <Text style={{ fontSize: 12 }}>{item.run}</Text>
              </View>

              <Ionicons name="caret-forward" size={20} color="black" />
            </TouchableOpacity>
          );
        }}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  listOption: {
    width: "92%",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#ccc",
    alignSelf: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  avatar: {
    width: 50,
    height: 50,
  },
});

export default History;
