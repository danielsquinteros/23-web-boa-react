import Contador from './Contador'
import GreetClass from './GreetClass'
import GreetFunction from './GreetFunction'
import Nombre from './Nombre'

const InstagramApp = () => {
    return(
        <>
            <h1>Componente InstagramApp</h1>
            <Contador />
            <hr />
            {/* Forma 1 */}
            {/* <GreetClass /> */}
            {/* Forma 2 */}
            {/* <Greet></Greet> */}

            <GreetFunction />
            <Nombre></Nombre>
        </>
    )
}

export default InstagramApp;