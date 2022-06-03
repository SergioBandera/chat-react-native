import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { IconButton } from "react-native-paper";
import useContextMensaje, { IMensaje } from "../context/useMensajes";


export const EscribirMensaje = () => {
  const [mensaje, setMensaje] = useState<string>("");
  const {setMensajes, mensajes} = useContext(useContextMensaje)

  const cogerMensaje = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => setMensaje(event.nativeEvent.text);

  
  
  const guardarMensaje = () =>{
    if (mensajes)
    setMensajes([...mensajes, mensaje])
    else setMensajes([mensaje])
    setMensaje("")
  }
  
  // useEffect(() => {
  //   console.log(mensaje)
  //   setMensaje("")

  // }, [mensajes])
  

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
        value={mensaje}
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
          onPress={guardarMensaje}
        />
      </View>
    </View>
  );
};
