import { useContext } from "react";
import { Contexto } from "../context/Contexto";

export const useFiltrarProductos = () => {
    const {filtros,setFiltros} = useContext(Contexto)
    
    const filtrarProductos = (productos) => {
        return productos.filter((prod) => {
            return (
                prod.precio >= filtros.precio &&
                (filtros.sistemaOp === "Todos" || filtros.sistemaOp === prod.sistema)
            );
        });
    };
    
    return {filtros, setFiltros, filtrarProductos}
}