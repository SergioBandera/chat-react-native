import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { useContextMensaje, IMensaje } from "../context/useMensajes";

const Conversacion: React.FC = () => {


  const mensajes = useContext(useContextMensaje);

  const mostrarMensajes = () => {
    if (mensajes?.mensajes !== null)
      return mensajes!.mensajes!.map(
        ({ texto, foto }: IMensaje, index: number) => (
          <View key={index} style={ styles.container }>
            {foto === "" ? (
              <Text
                style={styles.textoMapa}
              >
                {texto}
              </Text>
            ) : (
              <Image style={styles.imagenMap} source={{ uri: foto }}></Image>
            )}
          </View>
        )
      );
  };
  return <View style={styles.container}>{mostrarMensajes()}</View>;
};
export default Conversacion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagenMap: {
    width: 300,
    height: 300,
    margin: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  textoMapa:{
    backgroundColor: "#b4db95",
    padding: 5,
    margin: 5,
    flex: 1,
    borderColor: "#ced0ce",
    borderWidth: 1,
    borderRadius: 15,
    marginLeft: 5,
  }
});
