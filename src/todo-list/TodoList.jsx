import { useState } from "react";

const TodoList = () => {

    const [input, setInput] = useState("");
    const [tareas, setTareas] = useState([]);
    const [error, setError] = useState("");

    const handlechange = (e) => {
        const nuevoInput = e.target.value
        if (nuevoInput.startsWith(" ")) return
        if (nuevoInput.startsWith(Number(nuevoInput))) return
        setInput(nuevoInput)
    }

    const handleAgregar = (e) => {
        e.preventDefault();

        const nuevaTarea = [...tareas];
        
        if (input === "") {
            setError("No puede agregar una tarea vacia");
            return;
        }

        if (nuevaTarea.includes(input)) {
            setError("Ya existe esta tarea");
            setInput("");
            return;
        }

        if (input !== "") {
            nuevaTarea.push(input);
            setTareas(nuevaTarea);
            setInput("");
            setError("");
        }
    }

    const handleBorrar = (tarea) => {
        const tareasActualizadas = tareas.filter(t => t !== tarea)
        setTareas(tareasActualizadas)
    }

    return ( 
        <>
            <div className="todo-list">
                <form action="" onSubmit={handleAgregar}>
                    <input value={input} onChange={handlechange} type="text" placeholder="limpiar, ordenar..."/>
                    <button>Agregar</button>
                </form>
                <div className="tareas">
                        {
                            tareas && tareas.map((tarea, index) => (
                                <div key={index} className="tareas-t">
                                    <div className="tarea">
                                        <p className="tarea-p" >{tarea}</p>
                                        <input className="check" type="checkbox" />
                                    </div>
                                    <button onClick={() => handleBorrar(tarea)}>Borrar</button>
                                </div>
                            ))
                        }
                    { error && <p style={{color: "red"}}>{error}</p> }
                </div>
            </div>
        </>
    );
}
 
export default TodoList;