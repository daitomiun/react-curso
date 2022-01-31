import {
  BrowserRouter as Router,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";
import Contacto from "../pages/Contacto";
import Acerca from "../pages/Acerca";
import Error404 from "../pages/Error404";
import Home from "../pages/Home";
import MenuConceptos from "./MenuConceptos";
import Usuario from "../pages/Usuario";
import Productos from "../pages/Productos";
import ReactTopics from "../pages/ReactTopics";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "./PrivateRoute";

const ConceptosBasicos = () => {
  return (
    <div>
      <h2>hash router</h2>
      <HashRouter>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/usuario/:username" element={<Usuario />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route
            path="/about"
            element={<Navigate to="/acerca"></Navigate>}
          ></Route>
          <Route
            path="/contact"
            element={<Navigate to="/contacto"></Navigate>}
          ></Route>
          <Route path="/react/*" element={<ReactTopics />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <PrivateRoute exact path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </HashRouter>
      <hr />
      <h2>conceptos basicos</h2>
      <Router>
        <MenuConceptos />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="/usuario/:username" element={<Usuario />}></Route>
          <Route path="/productos" element={<Productos />}></Route>
          <Route
            path="/about"
            element={<Navigate to="/acerca"></Navigate>}
          ></Route>
          <Route
            path="/contact"
            element={<Navigate to="/contacto"></Navigate>}
          ></Route>
          <Route path="/react/*" element={<ReactTopics />}></Route>
          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          {/* <PrivateRoute exact path="/dashboard" element={<Dashboard />} /> */}
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </div>
  );
};
// const ConceptosBasicos = () => {
//   return (
//     <div>
//       <h2>conceptos basicos</h2>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <h3>home</h3>
//                 <p>Bienvenidos al tema de las rutas en react</p>
//               </>
//             }
//           ></Route>
//           <Route path="/acerca" element={<Acerca />}></Route>
//           <Route path="/contacto" element={<Contacto />}></Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// };

export default ConceptosBasicos;
