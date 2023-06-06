import { useState, useEffect } from "react";

const GreetFunction = () => {
    //Constructor
    // primer valor: la variable que almacena el estado o la información
    // segundo valor: la función que cambia la variable que almacena el estado = información que almacena el compenente
    // useState: lo que va dentro de useState es el valor inicial de la variable que almacena el estado del componente
    const [loading, setLoading] = useState(false)
    
    // primera parámetro que recibe useEffect es el código quue se ejectura o se activara dependiendo si se monta etcccc
    // segundo parámetro es un arreglo que en funcín de lo que tenga va a activar una del ciclo de vida
    //componenteDidMount = []
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 3000)
    }, [])
    //[] -> emula el comportamiento componentDidMount

    useEffect(( ) => {
        // cada vez que se haga un cambio en la variable o el state que le estoy pasando en el arreglo ejecutare el siguien código
        console.log('oye cambio el estado FUNCIÓN', new Date(), loading)
    }, [loading])
    // [loading] -> emule el comportamiento componentDidUpdate, quiero que estas al pendiente de todos los cambios que tenga loading
    // cada vez que cambie loading -> ejecuta lo que dentro de la función que tiene en el primer parámetro

    // render
    return(
        <>
         {
            loading === false ? <h1>Cargando... función</h1> : <button>Click componente función</button>
         }
        </>
    )
}

export default GreetFunction;