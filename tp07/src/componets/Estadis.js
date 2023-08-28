import Personas from "./Personas.json"
import Persona from "./Persona.js"
import { Link } from 'react-router-dom';


function Estadis() {
    var cont=0;
    return (
        <div className="App">
          {Personas.map((persona) => {
            if (persona.edad > 35) {
              cont++;
            }
          })}
        <p>Mayores de 35: {cont}</p>;

        </div>
      );
}

export default Estadis; 