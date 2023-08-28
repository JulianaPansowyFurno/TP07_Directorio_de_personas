import Personas from "./Personas.json"
import { useParams } from "react-router-dom";


function Persona() {
  const {id} = useParams();
  const persona = Personas.find((elem) => elem.id === id)
  console.log(persona + "persona")
  return (
    <div className="App">
          <div>
             <p>{persona.id}</p>
            <p>{persona.apellido}</p>
            <p>{persona.email}</p>
            <p>{persona.edad}</p>
          </div>
    </div>
  );
}

export default Persona;   