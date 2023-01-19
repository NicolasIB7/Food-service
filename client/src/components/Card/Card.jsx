import style from "./Card.module.css";

const Card =(props)=>{
    return(
        <div className={style.card}>
            <img src={props.image}/>
            <p>Name:{props.name}</p>
            
            <p>Summary:{props.summary}</p>

            

        </div>
    )
}

export default Card;


//ESTE COMPONENTE DEBERÁ MOSTRAR LA INFO DE CADA RECETA MAPEADA Y DARNOS UN LINK PARA IR A DETALLE DE LA RECETA EN CUESTION