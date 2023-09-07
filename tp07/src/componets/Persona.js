import Personas from "./Personas.json"
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";


function Persona() {
  const {id} = useParams();
  const persona = Personas.find((elem) => elem.id === id)
  console.log(persona + "persona")
  return (
    <div className="per">
            <h1>Datos personales:</h1>
            <h3>Id: {persona.id}</h3>
            <h3>Apellido: {persona.apellido}</h3>
            <h3>Email: {persona.email}</h3>
            <h3>Edad: {persona.edad}</h3>
        </div>
  );
}

export default Persona;   