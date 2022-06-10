import React, { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  Modal,
  StyleSheet,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useContextMensaje, IMensaje } from "../context/useMensajes";
import { Camara } from "./Camara";

export const EscribirMensaje = () => {
  const [mensaje, setMensaje] = useState<IMensaje | null>(null);
  const mensajeContext = useContext(useContextMensaje);
  const [camara, setCamera] = useState<boolean>(false);

  const cogerMensaje = (
    event: NativeSyntheticEvent<TextInputChangeEventData>
  ) => setMensaje({ texto: event.nativeEvent.text, foto: "" });

  const enviarMensaje = () => {
    if (mensajeContext?.mensajes !== null)
      mensajeContext!.setMensajes([
        ...mensajeContext!.mensajes,
        {
          texto: mensaje!.texto,
          foto: mensaje!.foto,
        },
      ]);
    else
      mensajeContext?.setMensajes([
        { texto: mensaje!.texto, foto: mensaje!.foto },
      ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputText}
        value={mensaje?.texto}
        maxLength={300}
        onChange={cogerMensaje}
        placeholder="Escribe algo..."
        multiline={true}
      />
      <View>
        <Modal
          visible={camara}
          onRequestClose={() => {
            setCamera(false);
          }}
        >
          <Camara />
        </Modal>
        <IconButton
          style={styles.butonCamera}
          icon="camera"
          onPress={() => {
            setCamera(true);
          }}
        />
        <IconButton
          style={styles.buttonSend}
          icon="send"
          color="white"
          onPress={enviarMensaje}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: "100%",
    width: "98%",
  },
  inputText: {
    width: "90%",
  },
  butonCamera: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
  },
  buttonSend: {
    backgroundColor: "#4DE515",
  },
});
