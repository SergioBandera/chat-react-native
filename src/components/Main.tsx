import react from "react";
import Constants from "expo-constants";
import { Text, View } from "react-native";
import Conversacion from "./Conversacion";
import { EscribirMensaje } from "./EscribirMensaje";

export const Main = () => {
  const mensaje1: string = "esta sera la conversacion";
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
        
      <Conversacion mensaje={mensaje1} />

      <EscribirMensaje />
    </View>
  );
};
