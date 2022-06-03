import react, { useState } from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import Conversacion from "./Conversacion";
import { EscribirMensaje } from "./EscribirMensaje";
import useContextMensaje, { IMensaje } from "../context/useMensajes";

export const Main = () => {
  const [mensajes, setMensajes] = useState<Array<IMensaje>>();

  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
      <Text
        style={{
          display: "flex",
          height:"5%",
          width:"100%",
          fontSize: 25,
          alignItems:"center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: `gainsboro`,
        }}
      >
        Chat con React Native
      </Text>
      <useContextMensaje.Provider value={ {mensajes , setMensajes} } >

      <Conversacion />

      <EscribirMensaje />

      </useContextMensaje.Provider>
    </View>
  );
};
