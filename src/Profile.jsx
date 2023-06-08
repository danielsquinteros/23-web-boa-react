import { useState, useEffect } from 'react'

const Profile = () => {
    const [edad, setEdad] = useState(0)
    const [isAge, setIsAge] = useState(false)


    const aumentarEdad = () => {
        setEdad(edad + 1)
    }

    useEffect(() => {
        console.log('estoy cambiando', edad)
        if(edad === 30){
            setIsAge(true)
        }
    }, [edad])
    // Por cada cambio que exista en el estado edad ejecuta el siguiente código

    useEffect(() => {
        setTimeout(() => {
            setEdad(27)
        }, 3000)
    }, [])
    // Si arreglo se encuentra vacio toma el comportamiento de componenteDidMount
    
    return (
        <>
            <h5>Nombre</h5>
            <p>Daniel Q.</p>

            <h5>Edad</h5>
            <p>{edad}</p>
            {isAge && <h1>Tienes 30 años🎉</h1>} 
            <button onClick={aumentarEdad}>
                Sumar años de vida
            </button>
        </>
    )
}

export default Profile;