import "./App.css"
import ApiPeliculas from "./api-peliculas/ApiPeliculas";
import ApiUsuarios from "./api-usuarios/ApiUsuarios";
import AppUsuarios from "./api-usuarios/AppUsuarios";
import TiendaShop from "./tiendaShop/TiendaShop";
import CarritoProvider from "./tiendaShop/context/CarritoContext";
import Provider from "./tiendaShop/context/Contexto";
import TodoList from "./todo-list/TodoList";

const App = () => {
    return ( 
        // <ApiUsuarios />
        // <ApiPeliculas />
        // < TodoList />
        // <AppUsuarios />
        <CarritoProvider>
            <Provider>
                <TiendaShop />
            </Provider>
        </CarritoProvider>
    );
}
 
export default App;