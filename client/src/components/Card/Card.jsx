import { Link } from "react-router-dom";
import style from "./Card.module.css";

const Card =(props)=>{
    return(
        <div className={style.card}>
            <Link to={`/home/${props.id}`} className={style.link}>
            <p className={style.nombres}>{props.name} </p>
            </Link>
            <img src={props.image} className={style.imagenes}/>
            
            <p className={style.dietas}>{props.diets}</p>

        </div>
    )
}

export default Card;


//ESTE COMPONENTE DEBERÁ MOSTRAR LA INFO DE CADA RECETA MAPEADA Y DARNOS UN LINK PARA IR A DETALLE DE LA RECETA EN CUESTION