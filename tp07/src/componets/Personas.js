import Personas from "./Personas.json"
import { Link } from 'react-router-dom';


function Persona() {
  return (
    <div className="App">
      {Personas.map((persona) => {
        <div key={persona.id}>
          <Link to={`persona${persona.id}`}>{persona.nombre}</Link>
        </div>
      })}
    </div>
  );
}

export default Persona;