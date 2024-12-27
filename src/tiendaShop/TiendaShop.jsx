import {useEffect, useState } from "react";
import { recuperarProductos } from "./recuperarProductos";
import Header from "./Header";
import Produtos from "./Productos";
import {useFiltrarProductos } from "./hooks/useFiltrarProductos";

const TiendaShop = () => {
    const [productos, setProductos] = useState([])

    const {filtrarProductos} = useFiltrarProductos();
    const productosFiltrados = filtrarProductos(productos);

    useEffect(() => {
        recuperarProductos()
            .then(data => setProductos(data))
    },[])
        
    return (
        <div className="contenedor">
            <Header/>
            <div className="main-productos">
                {
                productosFiltrados &&
                <Produtos productosFiltrados={productosFiltrados}/>
                }
            </div>
        </div>
         
    );
}
 
export default TiendaShop;