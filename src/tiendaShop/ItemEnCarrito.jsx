import { useContext } from "react";
import { CarritoContext } from "./context/CarritoContext";

const ItemEnCarrito = ({item}) => {

    const {eliminarItem} = useContext(CarritoContext);

    return ( 
        <div className="item-carrito">
            <img src={item.imagen} alt="" />
            <h3>{item.modelo}</h3>
            <p>Precio: €{item.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => eliminarItem(item.id)}>X</button>
        </div>        
    );
}
 
export default ItemEnCarrito;