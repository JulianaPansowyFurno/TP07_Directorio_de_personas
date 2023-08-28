import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './componets/Home.js';
import Layout from "./componets/Layout.js";
import Persona from "./componets/Persona.js";
import Estadis from "./componets/Estadis.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/persona/:id" element={<Persona />}> </Route>
          <Route path="/estadis" element={<Estadis />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
