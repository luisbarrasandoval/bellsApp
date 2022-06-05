import { FC } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { BellsStackInfoProps } from "../navigations/types";

const Information: FC<BellsStackInfoProps> = ({ navigation }) => {
  const objetivos = [
    {
      name: "Objetivo 1",
      description:
        "If you need to keep the text from wrapping around the bullet, you will actually need to use multiple components, as suggested in the question. For example:",
    },
    {
      name: "Objetivo 2",
      description:
        "Potentially, the easiest way would be just to use a unicode character for the bullet. That way you don't have wrap a bunch of components together.",
    },
  ];

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Bienvenido!</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.openDrawer();
          }}
        >
          <Ionicons name="menu" size={32} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.subtitle}>
        Estas en la campaña <Text style={styles.bellsName}>{"Hola Mundo"}</Text>
      </Text>

      {/* Informacion */}
      <View style={{ marginBottom: 10 }}>
        <Text style={styles.sectionTitle}>Descripcion</Text>
        <Text>
          is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently
          with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </Text>
      </View>

      {/* Objetivos */}
      <View>
        <Text style={styles.sectionTitle}>Objetivos: </Text>
        {objetivos.map((objetivo) => (
          <View>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <View
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: 10,
                  backgroundColor: "#222",
                  marginRight: 5,
                }}
              />

              <Text>{objetivo.name}</Text>
            </TouchableOpacity>
            <Text>{objetivo.description}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 42,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 14,
    marginBottom: 20,
  },

  bellsName: {
    fontWeight: "bold",
    fontStyle: "italic",
    backgroundColor: "#eee",
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Information;
