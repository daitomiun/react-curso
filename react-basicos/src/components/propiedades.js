import React from "react" ;
import PropTypes from "prop-types"

export default  function Propiedades (props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.num}</li>
                <li>{props.boolean?"verdadero":"falso"}</li>
                <li>{props.arreglo.join(",")}</li>
                <li>{props.objeto.nombre + " -"  + props.objeto.correo}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
            </ul>
        </div>
    )
}

Propiedades.defaultProps ={
    porDefecto: "las props",
};

Propiedades.propTypes ={
    num: PropTypes.number.isRequired,
}