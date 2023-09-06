import Personas from "./Personas.json"
import { Link } from 'react-router-dom';
import React from "react";

function Home() {
  return (

    <div className="Padre">
      <br></br>
      <Link className='BTN' to={`/estadis`}>Estadisticas</Link>
      <br></br>
      <Link className='BTN' to={`/form`}>Form</Link>
      <br></br>

      {Personas.map((persona) => {
        return(
          <div key={persona.id} >
              <Link to={`/persona/${persona.id}`} className='Persona'>{persona.nombre}</Link>
            <br></br>
          </div>
        );
    })}

    </div>
  );
}
export default Home;