import { useEffect, useRef, useState } from "react";

const API_KEY = "93a092c2"
const URL_API = `https://www.omdbapi.com/?apikey=93a092c2&s=spiderman`

const ApiPeliculas = () => {
    const [input, setInput] = useState("");
    const [peliculas, setPeliculas] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const busquedaAnterior = useRef(input);
    
    const fetchPeliculas = async (query) => {
        if (input === busquedaAnterior.current) return // Si la busqueda es la misma que la anterior
        try {
            setLoading(true)
            busquedaAnterior.current = input;
            const respuesta = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`);
            if (!respuesta.ok) throw new Error("Error al conectar con la api");
            const json = await respuesta.json();
            if (!json.Search) {
                setPeliculas([])
                setError('No se encontraron resultados');
                return;
            }
            setPeliculas(json.Search)
            setError(null)

        } catch (error) {
            setError("Ocurrio un error al buscar las peliculas, intenta nuevamente mas tarde")
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === "") {
            setError("No se puede buscar una pelicula vacia");
            return;
        }
        if (input.length < 4) {
            setError("Por favor, escribe al menos 4 letras");
            return;
        }
        fetchPeliculas(input)
    }

    const handleChange = (e) => {
        const nuevoInput = e.target.value
        if (nuevoInput.startsWith(" ")) return
        setInput(nuevoInput)
        fetchPeliculas(nuevoInput)
        setError(null)
    }

    return ( 
        <main>
            <h1>Peliculas</h1>
            <form action="">
                <input value={input} onChange={handleChange} type="text" placeholder="Spiderman,Troya,Avengers"/>
                <button onClick={handleSubmit}>Buscar</button>
            </form>
                {error && <p style={{color: "red"}}>{error}</p>}
            <section className="seccion-peliculas">
                {loading
                    ? <p className="cargando">Cargando...</p> 
                    : peliculas.map((pelicula) => (
                        <div className="peliculas" key={pelicula.imdbID}>
                            <h3>{pelicula.Title}</h3>
                            <img src={pelicula.Poster} alt={pelicula.Title} />
                            <p>{pelicula.Year}</p>
                        </div>
                    ))
                }
            </section>
        </main>    
    );
}
 
export default ApiPeliculas;