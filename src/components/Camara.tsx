import { Camera, CameraType } from "expo-camera";

import { useContext, useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from "react-native";
import { IconButton } from "react-native-paper";
import { useContextMensaje } from "../context/useMensajes";

export const Camara = () => {
  const [permiso, setPermiso] = useState<any>(false);
  const [tipoCamara, setTipoCamara] = useState(CameraType.back);
  const ref = useRef<any>(null);
  const mensajes = useContext(useContextMensaje);
  const [foto, setFoto] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (foto !== "") {
      if (mensajes?.mensajes !== null) {
        mensajes!.setMensajes([
          ...mensajes!.mensajes!,
          {
            texto: "",
            foto: foto,
          },
        ]);
      } else mensajes!.setMensajes([{ texto: "", foto: foto }]);
    }
  }, [foto]);

  //pedimos permisos a la camara
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setPermiso(status === "granted");
    })();
  }, []);

  if (permiso.status === null) {
    return <View />;
  }
  if (permiso.status === false) {
    return <Text>No tienes acceso a la camara</Text>;
  }

  const hacerFoto = async () => {
    const photo = await ref.current!.takePictureAsync();
    setFoto(photo.uri);
    setOpen(true);
  };

  const guardarFoto = () => {
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Modal visible={open}>
        <View>
          <TouchableOpacity>
            <IconButton
              style={styles.buttonCheck}
              icon="check"
              onPress={() => guardarFoto()}
            ></IconButton>
          </TouchableOpacity>
        </View>

        {foto && <Image style={styles.imagen} source={{ uri: foto }}></Image>}
      </Modal>
      <Camera style={styles.camara} type={tipoCamara} ref={ref}>
        <IconButton
          style={styles.buttonSwap}
          icon="swap-horizontal-circle"
          size={40}
          onPress={() => {
            setTipoCamara(
              tipoCamara === CameraType.back
                ? CameraType.front
                : CameraType.back
            );
          }}
        ></IconButton>
        <IconButton
          style={styles.buttonCircle}
          icon="circle"
          size={50}
          onPress={hacerFoto}
        ></IconButton>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  buttonCheck: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
  },
  imagen: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  camara: {
    height: "100%",
    width: "100%",
  },
  buttonSwap: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
    height:"6%",
    width:"12%",
  },
  buttonCircle: {
    alignSelf:"center",
    backgroundColor: "white",
    height:"8%",
    width:"16%",
  },
});
