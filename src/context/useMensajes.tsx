import React from "react";

export interface IMensaje {
  mensaje: string;
  foto: string;
}
const useContextMensaje = React.createContext<Array<IMensaje> | any>(null);

export default useContextMensaje;
