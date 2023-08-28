import Personas from "./Personas.json"
import { Link } from 'react-router-dom';
import React from "react";



function Home() {
  return (

    <div className="App">
      <Link to={`/estadis`}>estadisticas</Link>
      {Personas.map((persona) => {
        return(
          <div key={persona.id}>
            <Link to={`/persona/${persona.id}`}>{persona.nombre}</Link>
          </div>
        );
    })}

    </div>
  );
}
export default Home;