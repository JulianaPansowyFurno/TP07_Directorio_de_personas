import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './componets/Home.js';
import Persona from "./componets/Persona.js";
import Estadis from "./componets/Estadis.js";
import Form from "./componets/Form.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
          <Route path="/persona/:id" element={<Persona />}> </Route>
          <Route path="/estadis" element={<Estadis />}> </Route>
          <Route path="/form" element={<Form />}> </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
