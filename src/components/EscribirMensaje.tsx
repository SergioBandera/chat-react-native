import React, { useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { IconButton } from "react-native-paper";

export interface IMensaje {
  mensaje: string;
  foto: string;
}
export const EscribirMensaje = () => {
  const [mensaje, setMensaje] = useState<string>();

  const cogerMensaje = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => setMensaje(event.nativeEvent.text);



  return (
    <View
      style={{
        height: "25%",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        backgroundColor: "#fffaf0",
      }}
    >
      <TextInput
        style={{
          width: "90%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
        }}
        maxLength={300}
        onChange={cogerMensaje}
        placeholder="Escribe algo..."
        multiline={true}
      />
      <View>
        <IconButton
          style={{
            borderWidth: 1,
            backgroundColor: "white",
            borderColor: "black",
          }}
          icon="camera"
        />
        <IconButton
          style={{
            backgroundColor: "#4DE515",
          }}
          icon="send"
          color="white"
          onPress={() => console.log(mensaje)}
        />
      </View>
    </View>
  );
};
