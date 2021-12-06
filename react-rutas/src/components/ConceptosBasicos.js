import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Contacto from "../pages/Contacto";
import Acerca from "../pages/Acerca";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>conceptos basicos</h2>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <h3>home</h3>
                <p>Bienvenidos al tema de las rutas en react</p>
              </>
            }
          ></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default ConceptosBasicos;
