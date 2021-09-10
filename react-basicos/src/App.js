import React from "react";
import logo from './logo.svg';
import Components from "./components/Componente";
import Propiedades from "./components/propiedades";
import Estado from "./components/estado";
import RenderizadoCondicional from "./components/renderizadoCondicional";
import RenderizadoElementos from "./components/renderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "./components/Eventos";
import ComunicacionComponentes from "./components/comunicacionComponentes";
import CicloVida from "./components/CicloVida";
import AjaxApis from "./components/AjaxApis";
import ContadorHooks from "./components/ContadorHooks";
import ScrollHooks from "./components/ScrollHooks";
import RelojHooks from "./components/RelojHooks";
import AjaxHooks from "./components/AjaxHooks";
import HooksPersonalizado from "./components/HooksPersonalizado";
import Referencias from "./components/Referencias";
import Formularios from "./components/Formularios";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilisados";




import './App.css';


function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>      
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

        </section>
        <section>
          <Components msg="hola desde fucional expresado prop"/>
          <hr></hr>
          <Propiedades 
          cadena = "esto es una cadena de texto" 
          num={19} 
          boolean={true} 
          arreglo={[1,2,3]}
          objeto={{nombre:"mateo", correo:"yo@gmail.com"}}
          funcion={num=> num*num}
          elementoReact={<i>elemento react</i>}
          componenteReact ={<Components msg="soy comoponente basado en props"/> }
          />
          <hr></hr>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
          <hr/>
          <EventosES6/>
          <hr/>
          <EventosES7/>
          <hr/>
          <MasSobreEventos/>
          <hr/>
          <ComunicacionComponentes/>
          <hr/>
          <CicloVida/>
          <hr/>
          <AjaxApis/>
          <hr/>
          <ContadorHooks titulo="seguidores"/>
          <hr/>
          <ScrollHooks/>
          <hr/>
          <RelojHooks/>
          <hr/>
          <AjaxHooks/>
          <hr/>
          <HooksPersonalizado/>  
          <hr/>
          <Referencias/>   
          <hr/>
          <Formularios/>  
          <hr/>
          <Estilos/>
          <hr/>
          <ComponentesEstilizados/>
          <br/>
          <br/>
          <br/>
          <br/>
        </section>
      </header>
    </div>
    <div></div>
    </>
  );
}

export default App;
