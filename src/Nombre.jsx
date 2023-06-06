import { useEffect, useState } from "react";

const Nombre = () => {
    // const [nombre, setNombre] = useState('Cargando nombre...');
    // const [showButton, setShowButton] = useState(false);

    const [optionNames, setOptionNames] = useState({
        name: 'Cargando nombre',
        showButton: false,
    })

    const deletedName = () => {
        setOptionNames({
            name: 'Nombre borrado',
            showButton: false
        })
    }

    useEffect(( ) => {
        setTimeout(() => {
            setOptionNames({
                name: 'Daniel Q.',
                showButton: true,
            })
        }, 1000)
    }, [])

    return(
        <>
            <p>{optionNames.name}</p>
            {optionNames.showButton === true && <button onClick={deletedName}>Borrar nombre</button>}
        </>
        
    )
}

export default Nombre;