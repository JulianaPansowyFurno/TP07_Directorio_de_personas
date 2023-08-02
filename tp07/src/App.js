import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";
import Home from './componets/Home.js';
import Layout from "./componets/Layout.js";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}> </Route>
          <Route path="/Persona" element={<Home/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
