import React, {Component} from "react";
import data from "../helpers/data.json"

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    );
}
export default class renderizadoElementos extends Component{
    constructor(props){
        super(props);
        this.state = {
            seasons: ["primavera ", "verano", "otoño", "invierno"],
        }
    }
    render(){
        console.log(data)
        return(
            <div>
                <h2>renderizadoElementos</h2>
                <h3> estaciones</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index)=>
                        (
                            <li key={index}>{el}</li>
                        ))
                    }
                </ol>
                <h3>Frameworks front js</h3>
                <ul>
                    {
                        data.frameworks.map((el)=> (
                        <ElementoLista key={el.id} el= {el}/>

                        ))
                    }
                </ul>
            </div>
        )
    }
}