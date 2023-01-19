import style from "./Card.module.css";

const Card =(props)=>{
    return(
        <div className={style.card}>
            <img src={props.image}/>
            <p>Name:{props.name}</p>
            <p>Dietas:{props.diets}</p>

        </div>
    )
}

export default Card;


//ESTE COMPONENTE DEBERÁ MOSTRAR LA INFO DE CADA RECETA MAPEADA Y DARNOS UN LINK PARA IR A DETALLE DE LA RECETA EN CUESTION