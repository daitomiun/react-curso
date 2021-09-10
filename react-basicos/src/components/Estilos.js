import React from 'react';
import "./Estilos.css";
import "./Estilos.scss";

import moduleStyles from "./Estilos.module.css";

export default function Estilos(){

    let myStyles = {
        borderRadius: ".5rem",
        margin: " 2rem auto",
        maxWidth: "50%",
    }
    return(
        <section className="estilos">
            <h2>estilos css en react</h2>
            <h3 className="bg-react"> estilos css en hoja externa</h3>
            <h3 className="bg-react" style={{borderRadius:".25rem", margin:"1rem"}}> estilos css en linea(atributo style)</h3>
            <h3 className="bg-react" style={myStyles}> estilos css en linea</h3>

            <h3 className="bg-react"> 
            Agregando normalize con <br/>
            <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>estilos con modulos</h3>
            <h3 className={moduleStyles.succes}>estilos con modulos</h3>
            <h3 className="bg-sass">estilos con sass</h3>

        </section>
    )
}