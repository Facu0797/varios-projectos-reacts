import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

const Prod = ({prod}) => {

    const {agregarAlCarrito} = useContext(CarritoContext)
    const {carrito} = useContext(CarritoContext)

    return ( 
        <div className="info-productos">
            <img width={"500px"} src={prod.imagen} alt={prod.modelo} />
            <div>
                <h3>{prod.modelo}</h3>
                <p>Marca: {prod.marca}</p>
                <p>Sistema operativo: {prod.sistema}</p>
                <p>Precio: €{prod.precio}</p>
            </div>
            <button onClick={() => agregarAlCarrito(prod)}>Agregar al carrito</button>
        </div>    
    );
}
 
export default Prod;