import Personas from "./Personas.json"
import Persona from "./Persona.js"
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react"


function Estadis() {
  //const [Edad, setEdad] = useState([]);

  // useEffect(() => {
  //  PersonaMayor;
  // }, []);

  var cont1 = 0;
  {
    Personas.map((persona) => {
      if (persona.edad > 35) {
        return cont1++;
      }
    })
  }


  const PersonaMayor = Personas.reduce((prev, current) => {
    return parseInt(current.edad) >= parseInt(prev.edad) ? current : prev;
  })

  const PersonaMenor = Personas.reduce((prev, current) => {
    return parseInt(current.edad) <= parseInt(prev.edad) ? current : prev;
  })

  return (
  <div className="row">
  <form className="col s12">
    <div className="row">
      <div className="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
        <label for="first_name">Nombre</label>
      </div>
      <div className="input-field col s6">
        <input id="last_name" type="text" className="validate"/>
        <label for="last_name">Apellido</label>
      </div>
    </div>
    <div className="row">
      <div className="input-field col s12">
        <input id="email" type="email" className="validate"/>
        <label for="email">Email</label>
      </div>
      <div className="input-field col s6">
        <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
        <label for="first_name">Edad</label>
      </div>
    </div>

  </form>
</div>
  );
}

export default Estadis; 
