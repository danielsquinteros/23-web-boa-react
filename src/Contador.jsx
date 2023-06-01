import { Component } from 'react';
import './index.css'

class Contador extends Component{
    // Estado inicial
    constructor(props){
        super(props)
        this.state = {
            numero: '..Cargando'
        }
    }

    // Método que cambia el estado
    aumentar = () => {
        this.setState({
            numero: this.state.numero + 1
        })
    }

    // Se ejecuta cuando termino el constructor y el render
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                numero: 10
            })
        }, 2000)
    }

    // Se ejecuta cuando cambia el state
    componentDidUpdate(){
        const titulo = document.getElementById('title-number');
        titulo.className = ''
        if(this.state.numero > 10 && this.state.numero < 15){
            titulo.classList.add('color-red')
        }
        if(this.state.numero > 16 && this.state.numero < 20){
            titulo.classList.add('color-blue')
        }
        if(this.state.numero > 21 && this.state.numero < 26){
            titulo.classList.add('color-blue')
        }
    }

    // Lo que ve el usuario
    render(){
        return(
        <div>

            <h3>Hola soy el contador</h3>
            <p id ="title-number" >
                {this.state.numero}
            </p>
            <button onClick={this.aumentar}>Aumentar</button>
        </div>
        )
    }
}
export default Contador;