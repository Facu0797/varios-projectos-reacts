import { useEffect, useState } from "react";

export const ApiUsuarios = () => {

    const [personas, setPersonas] = useState("");
    const [dataError, setDataError] = useState()
    const [pagina, setPagina] = useState(1)

    const url = `https://randomuser.me/api/?page=${pagina}&results=5&`

    useEffect(() => {
        fetch(url)
            .then(res => {
                if (!res.ok) {
                    setDataError("hay un error al recuperar los datos")
                }
                return res.json();
            })
            .then(data => {
                const {results} = data
                setPersonas(results)
            })
    }, [pagina])

    const handlePaginacion = () => {
        setPagina(pagina + 1)
    }

    return ( 
        <main>
            <h1>=identidades</h1>
            <section className="personas">
                {
                    personas && pagina &&
                    personas.map((persona) => (
                        <div key={persona.id.value}>
                            {
                                <div className="persona">
                                    <h3>Nombre: {persona.name.first}</h3>
                                    <h3>Apellido: {persona.name.last} </h3>
                                    <p>Nacimiento :{persona.dob.date.split("-",2).join(" / ")}</p>
                                    <p>Pais: {persona.location.country} </p>
                                    <img src={persona.picture.medium} alt={persona.name.last} />
                                </div>
                            }
                        </div> 
                    ))
                }
            </section>
            <button onClick={handlePaginacion}>Siguiente pagina</button>
            <p> Pagina: {pagina}</p>
        </main>    
    );
}
 
export default ApiUsuarios;