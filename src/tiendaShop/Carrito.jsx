import { useContext } from "react";
import { IoCartSharp } from "react-icons/io5";
import { CarritoContext } from "./context/CarritoContext";
import ItemEnCarrito from "./ItemEnCarrito";

const Carrito = () => {
    const {carrito, vaciarCarrito, carritoAbierto, toggleCarrito, precioTotal} = useContext(CarritoContext);

    const cantidadProdCarrito = Number(carrito.length)

    return ( 
        <div className="carrito-contenedor">
            <div className="carrito">
                {carrito.length > 0 ? <div className="numerito-carrito">{cantidadProdCarrito}</div> : ""}
                <IoCartSharp onClick={toggleCarrito} className="carrito-icon" />
            </div>
            <div className={`carrito-lateral ${carritoAbierto ? "abierto" : ""}`}>
                <h2>Carrito de compras</h2>
                {carrito &&
                    carrito.map((item) => (
                        <ItemEnCarrito key={item.id} item={item}/>
                    ))    
                }
                {carrito.length > 0 && <p>Precio total: €{precioTotal()} </p> }
                {carrito.length === 0  
                    ? <p>Tu carrito está vacío.</p> 
                    : <button onClick={vaciarCarrito}>Vaciar carrito</button>
                }
                <button onClick={toggleCarrito}>Cerrar</button>
            </div>
        </div>
    );
}
 
export default Carrito;