import {link} from 'react-router-dom'
import style from './Button.module.css'

const Button = ({label, router, cod_livros})=> {
    return(
    <div classname={style.buttonContainer}>
       <Link> to={`${router}${cod_livro}`}
         <button>{label}</button>
       </Link>
    </div>

    )
}

export default Button