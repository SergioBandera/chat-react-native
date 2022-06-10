import { ScrollView, Text, View, StyleSheet } from "react-native";
import Conversacion from "./Conversacion";
import { EscribirMensaje } from "./EscribirMensaje";
import { UseContextMensajeProvider } from "../context/useMensajes";

export const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Chat con React Native</Text>
      <UseContextMensajeProvider>
        <ScrollView style={styles.conversacion}>
          <Conversacion />
        </ScrollView>
        <View style={styles.escribirMensaje}>
          <EscribirMensaje />
        </View>
      </UseContextMensajeProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "10%",
    width: "100%",
    fontSize: 25,
    textAlign: "center",
    alignContent: "center",
    textAlignVertical: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  conversacion: {
    height: "65%",
    maxHeight: "70%",
    backgroundColor: "#ebe9e0",
    borderColor: "black",
    borderWidth: 1,
    borderTopWidth: 0,
  },
  escribirMensaje: {
    height: "20%",
    width: "100%",
    borderColor: "black",
    borderWidth: 1,
    borderTopWidth: 0,
  },
});
