import { FaRegUser } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { SiGooglemaps } from "react-icons/si";
import { BsTelephone } from "react-icons/bs";
import { RiLockPasswordLine } from "react-icons/ri";
import { useEffect, useState } from "react";


const AppUsuarios = () => {

    const [usuario, setUsuario] = useState([]);
    const [titulo, setTitulo] = useState("Mi nombre es");
    const [informacion, setInformacion] = useState("");
    const [loading, setLoading] = useState(null);

    const url = `https://randomuser.me/api/?results=1`

    const getfetch = async () => {
        try {
            setLoading(true)
            const response = await fetch(url);
            if (!response.ok) throw new Error("problema con la url") 
            const json = await response.json();
            if (json.results) {
                setUsuario(json.results)
                setInformacion(`${json.results[0].name.first} ${json.results[0].name.last}`)
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getfetch()
    }, [])

    const handleMouse = (tipo) => {
        if (usuario.length === 0) return

        switch (tipo) {

            case "nombre":
                setTitulo("Mi nombre es")
                setInformacion(`${usuario[0].name.first} ${usuario[0].name.last}`)
                break;
        
            case "mail":
                setTitulo("Mi mail es")
                setInformacion(usuario[0].email)
                break;
        
            case "nacimiento":
                setTitulo("Mi fecha de nacimiento es")
                setInformacion(usuario[0].dob.date);
                break;
        
            case "pais":
                setTitulo("Soy de")
                setInformacion(usuario[0].location.country);
                break;
        
            case "telefono":
                setTitulo("Mi numero de telefono es")
                setInformacion(usuario[0].phone);
                break;
        
            case "contraseña":
                setTitulo("Mi contraseña es")
                setInformacion(usuario[0].login.password)
                break;
        
            default:
                break;
        }
    }

    console.log(usuario);
    
    return ( 
        <div className="container">
            <header className="header">
                <h1>Generador de usuarios</h1>
            </header>
            <div className="main">
                <div className="detalles">
                    {
                        usuario.length > 0 && 
                        <>
                            <img src={usuario[0].picture.large} alt="" />
                            <p>{titulo}</p>
                            <p>{informacion}</p>
                        </>
                    }
                </div>
                <ul>
                    <li onMouseEnter={() => {handleMouse("nombre")}}><FaRegUser /></li>
                    <li onMouseEnter={() => {handleMouse("mail")}}><IoMailOpenOutline /></li>
                    <li onMouseEnter={() => {handleMouse("nacimiento")}}><IoCalendarNumberOutline /></li>
                    <li onMouseEnter={() => {handleMouse("pais")}}><SiGooglemaps /></li>
                    <li onMouseEnter={() => {handleMouse("telefono")}}><BsTelephone /></li>
                    <li onMouseEnter={() => {handleMouse("contraseña")}}><RiLockPasswordLine /></li>
                </ul>
            </div>
        </div>
    );
}
 
export default AppUsuarios;