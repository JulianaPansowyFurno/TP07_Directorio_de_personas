import Personas from "./Personas.json"
import Persona from "./Persona.js"
import { Link } from 'react-router-dom';
import React, { useState } from "react"


function Estadis() {
  const [mayores, setMayores] = useState([]);
    var cont1=0;
    {Personas.map((persona) => {
      if (persona.edad > 35) {
        cont1++;
      }
    })}

    function getOldestPeople() {
      const maxAge = Math.max(...Personas.map(person => person.age));
      return Personas.filter(person => person.age === maxAge).map(person => person.name);
    }
    // setMayores(Personas.map((pers) => {
    //   if(pers.edad >= 18)
    //   {
    //     return setMayores(...mayores, pers.nombre);
    //   }
      //const oldestPeople = Personas.filter(persona => persona.age >= 18);
      console.log(getOldestPeople())
      //const youngestPeople = people.filter(person => person.age === Math.min(...people.map(p => p.age)));
    // }))
    return (
        <div className="App">
          
        <p>Mayores de 35: {cont1}</p>
        <p>Mayores : </p>

        </div>
      );
}

export default Estadis; 