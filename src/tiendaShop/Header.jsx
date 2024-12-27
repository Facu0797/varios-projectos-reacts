import { useId } from "react";
import {useFiltrarProductos } from "./hooks/useFiltrarProductos";
import { IoCartSharp } from "react-icons/io5";
import Carrito from "./Carrito";

const Header = () => {

    const {filtros, setFiltros} = useFiltrarProductos();
    const idFiltroCategoria = useId();
    const idFiltroPrecio = useId();

    const handleChangePrecio = (e) => {
        setFiltros(estadoAnterior => ({
            ...estadoAnterior,
            precio:e.target.value
        }))
    }
    const handleChangeCategoria = (e) => {
        setFiltros(estadoAnterior => ({
            ...estadoAnterior,
            sistemaOp:e.target.value
        }))
    }

    return ( 
        <header className="header-tienda">
            <h1>Tienda Shop</h1>

            <div className="filtros">

                <div className="rango-precio">
                    <label htmlFor={idFiltroPrecio}>Precio</label>
                    <input value={filtros.precio} onChange={handleChangePrecio} type="range" id={idFiltroPrecio} min="0" max="1200"/>
                    <span>${filtros.precio}</span>
                </div>
                
                <div className="categoria">
                    <label htmlFor={idFiltroCategoria}>Categoria</label>
                    <select onChange={handleChangeCategoria} id={idFiltroCategoria}>
                        <option value="Todos">Todos</option>
                        <option value="Android">Android</option>
                        <option value="Feature phone">Feature Phone</option>
                        <option value="BlackBerry">Black Berry</option>
                    </select>
                </div>
                
            </div>
                <Carrito />
        </header>    
    );
}
 
export default Header;