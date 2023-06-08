// import LikeButton from "./LikeButton";
import Button from "./Button";
import Profile from "./Profile"

const  InstagramApp = () => {
    return(
        <>
            <Profile />
            {/* <Button
                text="Botón Nº1"
                link="https://www.instagram.com/"
                number={2}
            /> */}
            <Button
                text="Botón Nº1"
                link="https://www.instagram.com/"
                number={2}
            >
                <h1>Hola mundo</h1>
                <p>Parrafo</p>
            </Button>
            {/* <LikeButton /> */}
            {/* <h1>Componente InstagramApp</h1>
            <Contador />
            <hr /> */}
            {/* Forma 1 */} 
            {/* <GreetClass /> */}
            {/* Forma 2 */}
            {/* <Greet></Greet> */}
            {/* <Nombre></Nombre> */}
        </>
    )
}

export default InstagramApp;