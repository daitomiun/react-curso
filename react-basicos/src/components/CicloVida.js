import { findAllByDisplayValue } from '@testing-library/react'
import React ,{Component} from 'react'

class Reloj extends Component{
    constructor(props){
        super(props)
    }
    componentWillUnmount(){
        console.log( 3, "el componente ha sido eliminado del dom")
    }
    render(){
        return <h3>{this.props.hora}</h3>
    }
}
export default class CicloVida extends Component {

    constructor(props){
        super(props)
        console.log(0,"el componente se inicializa, NO esta en el dom ")

        this.state ={
            hora: new Date().toLocaleTimeString(),
            visible: false
        }
        this.temporizador = null
    }
    
    componentDidMount(){
        console.log(1, "el componente ya se encuentra en el dom")
    }
    componentDidUpdate(prevProps, prepState){
        console.log(2, "el estado olas props del componente han cambiado")
        console.log(prevProps)
        console.log(prepState)
    }

    componentWillUnmount(){
       console.log( 3, "el componente ha sido eliminado del dom")
    }
    tictac =() =>{
        this.temporizador =setInterval(()=>{
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000)

    }

    iniciar = ()=>{ 
        this.tictac()
        this.setState({
            visible: true
        })
    }
    detener = ()=>{
        clearInterval(this.temporizador)

        this.setState({
            visible: false
        })
    }

    render (){
        console.log(4, "el componente se dibuja (oredibuja por algun cambio en el dom)")
        return (
            <>
             <h2> ciclo de vida de los componentes de clase </h2>
             {this.state.visible && <Reloj hora={this.state.hora} />}
             <button onClick={this.iniciar}>iniciar</button>
             <button onClick={this.detener}>detener</button>
             
            </>
        )
    }
}