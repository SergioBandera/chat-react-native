import React, { useContext, useState } from "react";
import { View, Text } from "react-native";
import useContextMensaje, { IMensaje } from "../context/useMensajes";

const Conversacion: React.FC = () => {
  //  const [mensaje, setMensaje] = useState<IMensaje>()

  const { mensajes } = useContext(useContextMensaje);

const mostrarMensajes =() =>{
    if ( mensajes !== undefined)
    return mensajes.map((mensaje:string, index:number) => (
        <View key={index}>
            <Text>{mensaje}</Text>
        </View>
    ));

}
  return (
    <View
      style={{
        height: "70%",
        backgroundColor: "#C544",
      }}
    >
      <Text
        style={{
          backgroundColor: "aqua",
        }}
      >
      </Text>
      <View>
      {mostrarMensajes()}
      </View>
    </View>
  );
};
export default Conversacion;
