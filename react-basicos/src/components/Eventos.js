import React, {Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props)
        this.state={
            contador: 0,
        }
        
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)

    }

    sumar(e){
        console.log("sumando")
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar(e){
        console.log("restar")
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return (
            <div>
                <h2>eventos en componentes de clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}



//property initializer

export class EventosES7 extends Component{

    state={
        contador: 0,
    }
    
   
    sumar = (e)=>{
        console.log("sumando")
        this.setState({
            contador: this.state.contador + 1,
        })
    }
    restar=(e)=>{
        console.log("restar")
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return (
            <div>
                <h2>eventos en componentes de clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

// function Boton(props){
//     return(
//         <button onClick={props.myOnClick}>boton hecho componente</button>
//     )
// }
const Boton = ({myOnClick}) =>(
    <button onClick={myOnClick}>boton hecho componente</button>

)

export class MasSobreEventos extends Component{

    handleClick= (e, msg)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.nativeEvent)
        console.log(msg)

    }
    render(){
        return(
            <div>
                <h2>mas sobre eventos</h2>
                <button onClick={(e)=>
                    this.handleClick(e, "hola paso msg en un evento")}>
                    saludar
                </button>
                {/*evento personalizado*/}
               { /*<Boton onClick={(e)=>
                    this.handleClick(e, "hola paso msg en un evento")}/>*/}
                <Boton myOnClick={(e)=>
                    this.handleClick(e, "hola paso msg en un evento")}/>
            </div>
        )
    }
}