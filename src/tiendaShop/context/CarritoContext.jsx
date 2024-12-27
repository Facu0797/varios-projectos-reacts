import { createContext, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({children}) => {
    
    const [carritoAbierto, setCarritoAbierto] = useState(false)
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        const nuevoProducto = {...producto, cantidad:1}
        const nuevoCarrito = [...carrito];
        const estaEnCarrito = nuevoCarrito.find((prod) => (prod.id === nuevoProducto.id))
        if (!estaEnCarrito) {
            nuevoCarrito.push(nuevoProducto);
        } else {
            estaEnCarrito.cantidad += 1
        }
        setCarrito(nuevoCarrito)
    }

    const vaciarCarrito = () => {
        setCarrito([])
    }


    const toggleCarrito = () => {
        setCarritoAbierto(!carritoAbierto);
    }

    const eliminarItem = (id) => {
        // const prodAEliminar = carrito.filter((item) => item.id !== id);
        // setCarrito(prodAEliminar)
        setCarrito(estadoAnterior => estadoAnterior.filter((item) => item.id !== id))
    }

    const precioTotal = () => {
        return carrito.reduce((acc,item) => acc + item.precio * item.cantidad, 0)
    }

    return ( 
        <CarritoContext.Provider value={{carrito, agregarAlCarrito, vaciarCarrito, carritoAbierto, toggleCarrito, eliminarItem, precioTotal}}>
            {children}
        </CarritoContext.Provider>
    );
}
 
export default CarritoProvider;