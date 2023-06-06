import { Component } from "react";

// Greet es mi componente que va a ser una extensión de Component (react lo creo)
class Greet extends Component{
    constructor(props){
        super(props)
        // El constructo define el state en false
        this.state = {
            loading: false,
        }
        // Variables en clases
        this.name = 'hola'
    }

    cambioEstado = () => {
        this.setState({
            loading: false
        })
    }


    // Cuando el state cambie, yo voy a ejectuar tambien lo que tengo dentro
    componentDidUpdate(){
        // Cada vez que el state cambie se ejectura lo que este dentro
        // del componenteDidUpdate
        console.log('componentDidUpdate CLASE')
        console.log('Oye cambio el estado CLASE', (Date.now()))
    }

    // oye, el constructor ya cargo? el render ya mostro algo en pantalla?
    // si ya paso, haaa entonces ejecuto lo que tengo dentro de mi método
    // cambia el state loading a true
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 2000)
    }

    // Ya defini el state, ¿que valor tiene el state? -> si loading es false muestra cargando
    render(){
        return(
            <>
                {this.state.loading === false ? <h1>Cargando...  </h1> : <button onClick={this.cambioEstado}>Haz click</button>}
            </>
        )
    }
}

export default Greet;