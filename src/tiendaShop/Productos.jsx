import Prod from "./Prod";

const Produtos = ({productosFiltrados}) => {
    return ( 
        productosFiltrados.map((prod) => (
            <Prod key={prod.id} prod={prod}/>
        ))    
    );
}
 
export default Produtos;