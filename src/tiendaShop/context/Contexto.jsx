import { createContext, useState } from "react";

export const Contexto = createContext();

const Provider = ({children}) => {
    const [filtros, setFiltros] = useState({ sistemaOp:"Todos", precio:0})

    return ( 
        <Contexto.Provider value={{filtros, setFiltros}}>
            {children}
        </Contexto.Provider>
    );
}
 
export default Provider;