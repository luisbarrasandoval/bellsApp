import { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import ICedula from "../interfaces/ICedula";

const { width, height } = Dimensions.get("screen");
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { BellsStackInfoProps, BellsStackParamList } from "../navigations/types";

const AVATAR_HOMBRE = require("../assets/hombre.png");
const AVATAR_MUJER = require("../assets/mujer.png");

const CedulaItem: FC<ICedula> = ({
  id,
  names,
  lastNames,
  nationality,
  sex,
  create_date,
  expiration_date,
  run,
  document,
}) => {
  const AVATAR = sex == "F" ? AVATAR_MUJER : AVATAR_HOMBRE;

  const navigation = useNavigation();

  return (
    <View style={styles.contenedor}>
      <View style={styles.cedula}>
        <View style={styles.headers}>
          <View style={{ width: 80, flexDirection: "row" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Ionicons name="arrow-back" size={20} color="#222" />
            </TouchableOpacity>
            <Text
              style={{ fontSize: 10, fontWeight: "bold", textAlign: "center" }}
            >
              CEDULA DE IDENTIDAD
            </Text>
          </View>
          <Image
            source={require("../assets/chile.png")}
            style={{
              width: 40,
              height: 25,
              marginHorizontal: 5,
            }}
          />
          <View>
            <Text style={{ fontWeight: "500", fontSize: 10 }}>
              REPUBLICA DE CHILE
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 10 }}>
              SERVICIO DE REGISTRO E IDENTIFICACION
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          {/* FOTO Y RUT */}
          <View style={{ marginRight: 10 }}>
            <Image source={AVATAR} style={{ width: 100, height: 130 }} />
            <Text>{run}</Text>
          </View>

          {/* DATOS */}
          <View style={{ flex: 1 }}>
            {/* apelldios */}
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 10, color: "#32467b" }}
              >
                APELLIDOS
              </Text>
              <Text style={{ fontSize: 12 }}>{lastNames}</Text>
            </View>
            {/* nombres */}
            <View>
              <Text
                style={{ fontWeight: "bold", fontSize: 10, color: "#32467b" }}
              >
                NOMBRES
              </Text>
              <Text style={{ fontSize: 12 }}>{names}</Text>
            </View>

            {/* nacionalidad y sexo */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {/* nacionalidad */}
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: "#32467b",
                    width: 150,
                  }}
                >
                  NACIONALIDAD
                </Text>
                <Text style={{ fontSize: 12 }}>{nationality}</Text>
              </View>
              {/* {sexo} */}
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 10, color: "#32467b" }}
                >
                  Sexo
                </Text>
                <Text style={{ fontSize: 12 }}>{sex}</Text>
              </View>
            </View>
            {/* NACIMIENTO Y N DOCUMENTOS */}
            <View
              style={{
                flexDirection: "row",
              }}
            >
              {/* Nacimiento */}
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: "#32467b",
                    width: 150,
                  }}
                >
                  FECHA DE NACIMIENTO
                </Text>
                <Text style={{ fontSize: 12 }}>{nationality}</Text>
              </View>
              {/* {sexo} */}
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 10, color: "#32467b" }}
                >
                  DOCUMENTO
                </Text>
                <Text style={{ fontSize: 10 }}>{document}</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
              }}
            >
              {/* Nacimiento */}
              <View>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 10,
                    color: "#32467b",
                    width: 150,
                  }}
                >
                  EMISION
                </Text>
                <Text style={{ fontSize: 12 }}>{create_date}</Text>
              </View>
              {/* {sexo} */}
              <View>
                <Text
                  style={{ fontWeight: "bold", fontSize: 10, color: "#32467b" }}
                >
                  VENCIMIENTO
                </Text>
                <Text style={{ fontSize: 10 }}>{expiration_date}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    width,
    height: 220,
  },
  cedula: {
    flex: 1,
    width: "90%",
    backgroundColor: "#eee",
    borderRadius: 3,
    alignSelf: "center",
    padding: 10,
    marginBottom: 5,
    borderWidth: 0.1
  },

  headers: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
});

export default CedulaItem;
