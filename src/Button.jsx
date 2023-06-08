/* eslint-disable react/prop-types */
const Button = (props) => {
    console.log(props)
    console.log(props.number)
    return (
        // eslint-disable-next-line react/prop-types
        <button>
            {props.text}
            {props.number}
            {props.children} 
        </button>
    )
}

export default Button;