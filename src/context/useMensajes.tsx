import React, { useState } from "react";

export interface IMensaje {
  texto: string;
  foto: string;
}

export interface IContext {
  mensajes: IMensaje[] | null;
  setMensajes: React.Dispatch<React.SetStateAction<IMensaje[] | null>>;
}

export interface useContextMensajeProps {
  children: React.ReactNode;
}

export const useContextMensaje = React.createContext<IContext | null>(null);

export const UseContextMensajeProvider = ({
  children,
}: useContextMensajeProps) => {
  const [mensajes, setMensajes] = useState<IMensaje[] | null>(null);
  return (
    <useContextMensaje.Provider value={{ mensajes, setMensajes }}>
      {children}
    </useContextMensaje.Provider>
  );
};
