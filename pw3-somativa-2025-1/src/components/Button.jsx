import style from './Button.module.css'

const Button = ({label})=> {
    return(
    <dic className ={style.buttonContainer}>
        <button>{label}</button>
    </dic>
    )
}

export default Button